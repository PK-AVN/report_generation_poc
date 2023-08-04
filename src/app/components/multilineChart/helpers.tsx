import { useMemo } from "react";
import * as d3 from "d3";

interface DataPoint {
  x: number;
  y: number;
}

interface DataStructure {
  name: string;
  color: string;
  items: DataPoint[];
}

interface chartFunctionsProps {
  data: DataStructure[];
  width: number;
  height: number;
}

export const useChartFunctions = ({
  data,
  width,
  height,
}: chartFunctionsProps) => {
  console.log(data, "custom hook data");
  const xMin = useMemo(
    () => d3.min(data, ({ items }) => d3.min(items, ({ x }) => x)) ?? 0,
    [data]
  );
  const xMax = useMemo(
    () => d3.max(data, ({ items }) => d3.max(items, ({ x }) => x)) ?? 0,
    [data]
  );

  const xScale = useMemo(
    () => d3.scaleLinear().domain([xMin, xMax]).range([0, width]),
    [xMin, xMax, width]
  );

  // console.log(d3.scaleLinear().domain([2013, 2023]).range([0, 100]), "xscale")

  const yMin = useMemo(
    () => d3.min(data, ({ items }) => d3.min(items, ({ y }) => y)) ?? 0,
    [data]
  );
  const yMax = useMemo(
    () => d3.max(data, ({ items }) => d3.max(items, ({ y }) => y)) ?? 0,
    [data]
  );

  console.log(xMin, xMax, yMin, yMax, "values");

  const yScale = useMemo(() => {
    const indention = (yMax - yMin) * 0.5;
    return d3
      .scaleLinear()
      .domain([yMin - indention, yMax + indention])
      .range([height, 0]);
  }, [height, yMin, yMax]);

  const yScaleForAxis = useMemo(
    () => d3.scaleBand<number>().domain([yMin, yMax]).range([height, 0]),
    [height, yMin, yMax]
  );

  const Ytickvalues = d3.range(0, yMax ?? 0 + 20, 20);

  const yTickFormat = (d: number) => `${d}%`;

  return {
    yTickFormat,
    xScale,
    yScale,
    yScaleForAxis,
    Ytickvalues
  };
};
