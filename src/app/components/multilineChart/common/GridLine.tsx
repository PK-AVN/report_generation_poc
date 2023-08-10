"use client"
import React, { useEffect } from "react";
import * as d3 from "d3";

interface GridLineProps {
  type: "vertical" | "horizontal";
  scale: d3.ScaleLinear<number, number, never> | d3.ScaleBand<number>;
  ticks: any;
  size: any;
  transform?: string;
  className?: string;
}

const GridLine = ({
  type,
  scale,
  ticks,
  size,
  transform,
  ...props
}: GridLineProps) => {
  const ref = React.useRef<SVGSVGElement>(null);

  useEffect(() => {
    const axisGenerator = type === "vertical" ? d3.axisBottom : d3.axisLeft;
    const axis = axisGenerator(scale)
      .ticks(ticks)
      .tickSize(-size);

    const gridGroup = d3.select(ref.current);
    // add animation
    // gridGroup
    //   .transition()
    //   .duration(750)
    //   .ease(d3.easeLinear)
    //   .call(axis as any);

    gridGroup.call(axis as any);

    gridGroup.select(".domain").remove();
    gridGroup.selectAll("text").remove();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scale, ticks, size]);
  return <g ref={ref} transform={transform} {...props} />;
};

export default GridLine;
