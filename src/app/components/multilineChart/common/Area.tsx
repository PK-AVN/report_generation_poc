"use client"
import React from "react";
import * as d3 from "d3";

interface AreaProps {
  xScale: (value: number) => number;
  yScale: d3.ScaleLinear<number, number>;
  color: string;
  data: any
}

const Area = ({ xScale, yScale, color, data, ...props }: AreaProps) => {
    const ref = React.useRef<SVGPathElement | null>(null);

  d3.select(ref.current).attr("opacity", 1);

  const d = React.useMemo(() => {
    const area = d3
      .area<{ x: number; y: number }>()
      .x(({ x }) => xScale(x))
      .y1(({ y }) => yScale(y))
      .y0(() => yScale(yScale.domain()[0]));
    return area(data);
  }, [xScale, yScale, data]);

  return (
    <>
      {d !== null && (
        <path
          ref={ref}
          d={d}
          fill={`url(#gradient-${color})`}
          opacity={0}
          {...props}
        />
      )}
      <defs>
        <linearGradient
          id={`gradient-${color}`}
          x1="0%"
          x2="0%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity={0.2} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
    </>
  );
};

export default Area;
