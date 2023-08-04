"use client";
import React from "react";
import { useChartFunctions } from "./helpers";
import GridLine from "./common/GridLine";
import styles from "./multilineChart.module.css";
import Line from "./common/Line";
import Area from "./common/Area";
import Axis from "./common/Axis";

interface dimensions {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}
interface DataPoint {
  x: number;
  y: number;
}

interface DataStructure {
  name: string;
  color: string;
  items: DataPoint[];
}

interface chartProps {
  data: DataStructure[];
  dimensions: dimensions;
}

const MultilineChart = ({
  data = [],
  dimensions = {
    width: 0,
    height: 0,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
}: chartProps) => {
  const { width, height, margin } = dimensions;

  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  const chartFunctions = useChartFunctions({ data, width, height });
  const { xScale, yScale, yScaleForAxis, yTickFormat } = chartFunctions;

  return (
    <svg width={svgWidth} height={svgHeight}>
      <g transform={`translate(${margin.left},${margin.top})`}>
       
        {data.map(({ name, items = [], color }) => (
          <Line
            key={name}
            data={items}
            xScale={xScale}
            yScale={yScale}
            color={color}
            animation="none"
          />
        ))}
        <Area data={data[0].items} color={data[0].color} xScale={xScale} yScale={yScale} />
        <Axis
          type="left"
          scale={yScaleForAxis}
          className={styles["axisY"]}
          transform="translate(50, -10)"
          ticks={5}
          tickFormat={yTickFormat}
        />
        <Axis
          type="bottom"
          className={styles["axisX"]}
          scale={xScale}
          transform={`translate(10, ${height - height / 6})`}
          ticks={11}
          tickFormat={(d: any)=> d}
        />
      </g>
    </svg>
  );
};

export default MultilineChart;
