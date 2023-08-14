import React from "react";
import styles from "./HorizontalBarChart.module.css";
import HorizontalBarGroup from "./HorizontalBarGroup";

interface barChart {
  name: string;
  value: number;
  color: string;
}
interface HorizontalBarChartProps {
  data: barChart[];
  width: number;
  height: number;
  showNameLabel?: boolean;
  graphScaleIncrementBy: number;
  valueLabelPosition: number;
  chartName?: string;
}

const HorizontalBarChart = ({
  data,
  width,
  height,
  showNameLabel = true,
  graphScaleIncrementBy,
  valueLabelPosition,
  chartName,
}: HorizontalBarChartProps) => {
  const barHeight = 30;
//   console.log(data, "Chartdata");
  const barGroups =
    data?.map(
      (item: { name: string; value: number; color: string }, i: number) => (
        <g key={i} transform={`translate(0, ${barHeight * i * 1.5})`}>
          <HorizontalBarGroup
            barData={item}
            barHeight={barHeight}
            barColor={item.color}
            showNameLabel={showNameLabel}
            graphScaleIncrementBy={graphScaleIncrementBy}
            valueLabelPosition={valueLabelPosition}
          />
        </g>
      )
    );

  return (
    <div>
      <svg width={width} height={height}>
        <g className={styles.barChartContainer}>
          <g className={styles.barChart} transform="translate(100,60)">
            {barGroups}
          </g>
          {/* <text
            className="chart-name-label"
            x="0"
            y="250"
            alignmentBaseline="middle"
          >
            <tspan>{chartName}</tspan>
          </text> */}
        </g>
      </svg>
    </div>
  );
};

export default HorizontalBarChart;
