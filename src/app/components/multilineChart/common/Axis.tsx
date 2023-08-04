"use client"
import React from "react";
import * as d3 from "d3";

interface AxisProps {
  type: "left" | "bottom";
  scale: d3.AxisScale<any>;
  ticks?: number | null;
  transform?: string;
  tickFormat?: any;
  className?: string;
}

const Axis = ({
  type,
  scale,
  ticks,
  transform,
  tickFormat,
  ...props
}: AxisProps) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const axisGenerator = type === "left" ? d3.axisLeft : d3.axisBottom;
    const axis = axisGenerator(scale).ticks(ticks).tickFormat(tickFormat);
    const axisGroup = d3.select(ref.current);

    axisGroup.call(axis as any);

    axisGroup.select(".domain").remove();
    axisGroup.selectAll("line").remove();
    axisGroup
      .selectAll("text")
      .attr("opacity", 0.5)
      .attr("color", "white")
      .attr("font-size", "0.75rem");
  }, [scale, ticks, tickFormat]);

  return <g ref={ref} transform={transform} {...props} />;
};

export default Axis;
