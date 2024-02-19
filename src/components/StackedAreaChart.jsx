import  { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';


const StackedAreaChart = ({ data, width, height }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const margin = { top:  0, bottom:  20, left:  30, right:  20 };
    const strokeWidth =  1.5;
    const color = ["rgb(178, 61, 109)", "rgb(141, 123, 216)", "red"];

    const chart = svg.append("g").attr("transform", `translate(${margin.left},0)`);

    const grp = chart
      .append("g")
      .attr("transform", `translate(-${margin.left - strokeWidth},-${margin.top})`);

    // Create stack
    const stack = d3.stack().keys(["aData", "bData", "cData"]);
    const stackedValues = stack(data);
    const stackedData = [];

    // Copy the stack offsets back into the data.
    stackedValues.forEach((layer) => {
      const currentStack = [];
      layer.forEach((d, i) => {
        currentStack.push({
          values: d,
          year: data[i].year
        });
      });
      stackedData.push(currentStack);
    });

    // Create scales
    const yScale = d3
      .scaleLinear()
      .range([height,  0])
      .domain([0, d3.max(stackedValues[stackedValues.length -  1], dp => dp[1])]);

    const xScale = d3
      .scaleLinear()
      .range([0, width])
      .domain(d3.extent(data, dataPoint => dataPoint.year));

    const area = d3
      .area()
      .x(dataPoint => xScale(dataPoint.year))
      .y0(dataPoint => yScale(dataPoint.values[0]))
      .y1(dataPoint => yScale(dataPoint.values[1]));

    const series = grp
      .selectAll(".series")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("class", "series");

    series
      .append("path")
      .attr("transform", `translate(${margin.left},0)`)
      .style("fill", (d, i) => color[i])
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", strokeWidth)
      .attr("d", d => area(d));

    // Add the X Axis
    chart
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).ticks(data.length));

    // Add the Y Axis
    chart
      .append("g")
      .attr("transform", `translate(0,  0)`)
      .call(d3.axisLeft(yScale));

  }, [data]);

  return <svg ref={ref} width={width} height={height}></svg>;
};

export default StackedAreaChart;


StackedAreaChart.propTypes = {
  width: PropTypes.number.isRequired, 
  height: PropTypes.number.isRequired, 
  data: PropTypes.array.isRequired, 
};
