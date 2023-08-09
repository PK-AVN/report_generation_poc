"use client";

import React, { useRef, useEffect } from "react";
import styles from "./AreaChart.module.css";
import * as D3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DataPoint = { x: number; y: number };

interface AreaChartProps {
  width: number;
  height: number;
  data: DataPoint[];
}

const AreaChart: React.FC<AreaChartProps> = ({ data, width, height }) => {
  const svgRef = useRef(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  //  for y-axis
  const [yMin, yMax] = D3.extent(data, (d) => d.y);

  const yScale: D3.ScaleLinear<number, number, never> = D3.scaleLinear()
    .domain([0, yMax || 0])
    .range([boundsHeight, 0]);

  // for X-axis
  const [xMin, xMax] = D3.extent(data, (d) => d.x);
  const xScale: D3.ScaleLinear<number, number, never> = D3.scaleLinear()
    .domain([xMin || 0, xMax || 0])
    .range([0, boundsWidth]);

  useEffect(() => {
    if (!data) return;
    const svg = D3.select(svgRef.current);

    const xAxisGenerator = D3.axisBottom(xScale).tickFormat((d) => String(d));
    svg
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = D3.axisLeft(yScale)
      .tickFormat((d) => `${d}k`)
      .tickValues(D3.range(0, yMax ?? 0 + 20, 20));
    svg.append("g").call(yAxisGenerator);

    // Build Line
    const lineBuilder = D3.line<DataPoint>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));
    const linePath = lineBuilder(data);

    if (!linePath) {
      return;
    }

    // Add circles at each plotting point
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 4)
      .attr("stroke", "#CE0B80")
      .attr("stroke-width", 1)
      .attr("fill", "none");

    // Append the line to the SVG
    svg
      .append("path")
      .attr("d", linePath)
      .attr("opacity", 1)
      .attr("stroke", "#CE0B80")
      .attr("fill", "none")
      .attr("stroke-width", 2);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xScale, yScale, boundsHeight, data]);

  //   Build Area
  const areaBuilder = D3.area<DataPoint>()
    .x((d) => xScale(d.x))
    .y1((d) => yScale(d.y))
    .y0(yScale(0));
  const areaPath = areaBuilder(data);

  if (!areaPath) {
    return null;
  }

  const color = (
    <defs>
      <linearGradient id={`gradient-#CE0B80`} x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#CE0B80" stopOpacity={0.2} />
        <stop offset="100%" stopColor="#CE0B80" stopOpacity={0} />
      </linearGradient>
    </defs>
  );

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      >
        <>
          <path
            d={areaPath}
            opacity={1}
            stroke="none"
            fill="#EEA2CF"
            fillOpacity={0.4}
          />
         {color}
        </>
      </g>
      <g
        width={boundsWidth}
        height={boundsHeight}
        ref={svgRef}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      />
    </svg>
  );
};

export default AreaChart;
