import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StackedAreaChart = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!Array.isArray(data) || !data.length || !data[0].hasOwnProperty('total')) return;

    const svg = d3.select(svgRef.current);

    svg.selectAll('*').remove();

    const margin = { top: 10, right: 10, bottom: 20, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, d => d.date))
      .range([margin.left, innerWidth]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.total)])
      .nice()
      .range([innerHeight, margin.top]);

    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const stackKeys = Object.keys(data[0]).filter(key => key !== 'date' && key !== 'total');

    const stack = d3
      .stack()
      .keys(stackKeys)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const series = stack(data);

    const area = d3
      .area()
      .x(d => x(d.data.date))
      .y0(d => y(d[0]))
      .y1(d => y(d[1]))
      .curve(d3.curveMonotoneX);

    svg.selectAll('.area')
      .data(series)
      .join('path')
      .attr('class', 'area')
      .attr('fill', ({ key }) => color(key))
      .attr('d', area)
      .append('title')
      .text(d => d.key);

    const xAxis = d3.axisBottom(x);
    svg
      .append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(xAxis);

    const yAxis = d3.axisLeft(y).ticks(height / 80);
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis)
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').clone()
          .attr('x2', innerWidth)
          .attr('stroke-opacity', 0.1))
      .call(g => g.append('text')
          .attr('x', -margin.left)
          .attr('y', 10)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text('↑'));

  }, [data, width, height]);

  return (
    <div style={{marginLeft: '-400px',marginTop: '100px', marginRight: 'auto', width: width, height: height}}>
      <svg ref={svgRef} width={width} height={height}></svg>
      <div
        id="tooltip"
        style={{
          display: 'none',
          position: 'absolute',
          padding: '10px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      ></div>
    </div>
  );
};

export default StackedAreaChart;
