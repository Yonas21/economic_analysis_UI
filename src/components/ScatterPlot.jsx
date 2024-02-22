import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { colors } from '../data';

const MARGIN = { top:   30, right:   30, bottom:   50, left:   50 };

const ConnectedScatterplot = ({ width, height, data }) => {
  const axesRef = useRef(null);
  const tooltipRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Calculate the domain of the scales based on all data points across all series
  const allXValues = data.flatMap(series => series.values.map(d => d.x));
  const allYValues = data.flatMap(series => series.values.map(d => d.y));
  const xScale = d3.scaleLinear().domain(d3.extent(allXValues)).range([0, boundsWidth]);
  const yScale = d3.scaleLinear().domain(d3.extent(allYValues)).range([boundsHeight,   0]);

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();

    // Initialize tooltip
    const tooltip = d3.select(tooltipRef.current)
      .style("opacity",   0)
      .attr("class", "tooltip")
      .style("background-color", colors.light)
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    // X axis
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', `translate(0,${boundsHeight})`)
      .call(xAxisGenerator);

    // Y axis
    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append('g').call(yAxisGenerator);

    // Define event handlers
    const mouseover = (event, d) => {
      tooltip.style("opacity",   1);
    };

    const mousemove = (event, d) => {
      tooltip.html(`X: ${d.x}, Y: ${d.y}`)
        .style("left", `${event.pageX +   10}px`)
        .style("top", `${event.pageY -   28}px`);
    };

    const mouseleave = () => {
      tooltip.style("opacity",   0);
    };

    // Attach event handlers to circles
    svgElement.selectAll("circle")
      .data(data.flatMap(series => series.values))
      .join("circle")
        .attr("cx", d => xScale(d.x))
        .attr("cy", d => yScale(d.y))
        .attr("r",   4)
        .attr("fill", "#cb1dd1")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

    // Create a line generator
    const lineBuilder = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    // Draw lines for each series
    data.forEach(series => {
      svgElement.append('path')
        .datum(series.values)
        .attr('fill', 'none')
        .attr('stroke', colors.terracotta)
        .attr('stroke-width',  2)
        .attr('d', lineBuilder);
    });
  }, [xScale, yScale, boundsHeight, data]);

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${MARGIN.left},${MARGIN.top})`}
          ref={axesRef}
        />
      </svg>
      <div ref={tooltipRef}></div>
    </div>
  );
};

ConnectedScatterplot.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })).isRequired
  })).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ConnectedScatterplot;
