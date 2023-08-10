import React from "react";
import styles from "./HorizontalBarChart.module.css";

interface HorizontalBarGroupProps {
  barData: {
    name: string;
    value: number;
  };
  barHeight: number;
  barColor: string;
  showNameLabel: boolean;
  graphScaleIncrementBy: number
  valueLabelPosition: number
}

const HorizontalBarGroup = ({
  barData,
  barHeight,
  barColor,
  showNameLabel,
  graphScaleIncrementBy,
  valueLabelPosition
}: HorizontalBarGroupProps) => {
  const barPadding = 2;
  const widthScale = (d: number) => d * graphScaleIncrementBy;
  const width = widthScale(barData.value);
  const yMid = barHeight * 0.5;

  return (
    <g className={styles["bar-group"]}>
      {showNameLabel && (
        <text
          className="name-label"
          x="-100"
          y={yMid}
          alignmentBaseline="middle"
        >
          {barData.name}
        </text>
      )}
      <rect
        y={barPadding * 0.5}
        width={width}
        height={barHeight - barPadding}
        fill={barColor}
        ry="5"
      />
      <text
        className="value-label"
        x={valueLabelPosition}
        y={yMid}
        alignmentBaseline="middle"
        fill={barColor}
        fontWeight={600}
      >
        {barData.value}
      </text>
    </g>
  );
};

export default HorizontalBarGroup;
