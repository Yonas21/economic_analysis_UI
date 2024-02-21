import  { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types'

const StackedAreaChart = ({ data, width, height, setTooltip, tooltip }) => {
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
    const handleMouseOver = (event, regionData) => {
        console.log("tooltip", regionData)
    setTooltip({
      content: regionData?.key, 
      visible: true,
      left: `${event.pageX - 50}px`,
      top: `${event.pageY - 90}px`
    });
  };

  // Function to handle mouseout
  const handleMouseOut = () => {
    setTooltip({ content: '', visible: false,left: `${event.pageX - 50}px`,
      top: `${event.pageY - 90}px` });
  };

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
      .text(d => d.key)
      .on('mouseenter', (event, d) => {
        console.log(d)
        setTooltip({
          content: d.key, // or any other details you want to show
          visible: true,
          left: `${event.pageX -  50}px`,
          top: `${event.pageY -  90}px`
        });
      })
      .on('mouseleave', () => {
        setTooltip({ content: '', visible: false, left: '0px', top: '0px' });
      });

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

  }, [data, width, height,setTooltip]);

  return (
    <div style={{marginLeft: '-400px',marginTop: '100px', marginRight: 'auto', width: width, height: height}}>
      <svg ref={svgRef} width={width} height={height}></svg>
            {tooltip.visible && (
        <div
          id="tooltip"
          style={{
            display: 'block',
            position: 'absolute',
            left: tooltip.left,
            top: tooltip.top,
            padding: '10px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          {tooltip.content}
        </div>
      )}

    </div>
  );
};

export default StackedAreaChart;

StackedAreaChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired ,
  height: PropTypes.number.isRequired ,
  tooltip: PropTypes.object.isRequired ,
  setTooltip: PropTypes.func.isRequired ,
};
