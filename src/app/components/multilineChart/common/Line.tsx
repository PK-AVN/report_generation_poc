"use client";
import React from "react";
import * as d3 from "d3";

type DataPoint = { x: number; y: number };

interface LineProps {
  xScale: d3.ScaleLinear<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  color: string;
  data: DataPoint[];
  animation:string;
}

const Line = ({ xScale, yScale, color, data, animation = "none", ...props }: LineProps) => {
    const ref = React.useRef<SVGPathElement | null>(null);
  // Define different types of animation that we can use
  const animateLeft = React.useCallback(() => {
    const totalLength = ref.current?.getTotalLength();
    d3.select(ref.current)
      .attr("opacity", 1)
      .transition()
      .duration(750)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);
  }, []);
  const animateFadeIn = React.useCallback(() => {
    d3.select(ref.current)
      .transition()
      .duration(750)
      .ease(d3.easeLinear)
      .attr("opacity", 1);
  }, []);
  const noneAnimation = React.useCallback(() => {
    d3.select(ref.current).attr("opacity", 1);
  }, []);

  React.useEffect(() => {
    switch (animation) {
      case "left":
        animateLeft();
        break;
      case "fadeIn":
        animateFadeIn();
        break;
      case "none":
      default:
        noneAnimation();
        break;
    }
  }, [animateLeft, animateFadeIn, noneAnimation, animation]);

  // Recalculate line length if scale has changed
  React.useEffect(() => {
    if (animation === "left") {
      const totalLength = ref.current?.getTotalLength();
      d3.select(ref.current).attr(
        "stroke-dasharray",
        `${totalLength},${totalLength}`
      );
    }
  }, [xScale, yScale, animation]);

  const line = d3
    .line<DataPoint>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const d = line(data) ?? "";

  return (
    <path
      ref={ref}
      d={d?.match(/NaN|undefined/) ? "" : d}
      stroke={color}
      strokeWidth={3}
      fill="none"
      opacity={0}
      {...props}
    />
  );
};

export default Line;
