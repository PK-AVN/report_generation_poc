import React from "react";
import styles from "./benchmarks.module.scss";
import { AreaChart } from ".";
import ChartData from "../../../../public/data/chartData.json";
import JohnsonAndJohnson from "../../../../public/data/J&J.json";
import Abbot from "../../../../public/data/Abbot.json";
import Medtronics from "../../../../public/data/medtronics.json";
import Siemens from "../../../../public/data//siemens.json";
import MultilineChart from "../multilineChart/MultilineChart";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";

interface chartCoords {
  x: number;
  y: number;
}

const dimensions = {
  width: 500,
  height: 290,
  margin: {
    top: 0,
    right: 30,
    bottom: 0,
    left: 30,
  },
};
const jAndJData = {
  name: "JohnsonAndJohnson",
  color: "#CE0B80",
  items: JohnsonAndJohnson.map((d: chartCoords) => ({ ...d })),
};
const AbbotData = {
  name: "Abbot",
  color: "#9F8CFE",
  items: Abbot.map((d: chartCoords) => ({ ...d })),
};
const MedtronicsData = {
  name: "Medtronics",
  color: "#F4C142",
  items: Medtronics.map((d: chartCoords) => ({ ...d })),
};

const SiemensData = {
  name: "Siemens",
  color: "#8BC1F9",
  items: Siemens.map((d: chartCoords) => ({ ...d })),
};

const soloChartData = {
  name: "employee Growth Data",
  color: "#CE0B80",
  items: ChartData.employeeGrowthData.map((d: chartCoords) => ({ ...d })),
};

const commonProps = {
  width: 260,
  height: 270,
  valueLabelPosition: 130,
  graphScaleIncrementBy: 30,
};

const Benchmarks = () => {
  const combinedChartsData = [
    jAndJData,
    AbbotData,
    MedtronicsData,
    SiemensData,
  ];

  const SingleLineAreaChart = [soloChartData];

  return (
    <div className={styles["benchmarks"]}>
      <header>Key Benchmarks</header>

      <div className={styles["benchmarks__charts"]}>
        <div className={styles["benchmarks__charts--left"]}>
          <label>Employee growth for Johnson & Johnson (#k)</label>
          <AreaChart
            width={500}
            height={300}
            data={ChartData.employeeGrowthData}
          />
          {/* <MultilineChart data={SingleLineAreaChart} dimensions={dimensions} /> */}
        </div>
        <div className={styles["benchmarks__charts--right"]}>
          <label>Attrition over time vs peers (%)</label>
          {/* <AreaChart
            width={500}
            height={300}
            data={ChartData.employeeGrowthData}
          /> */}
          <MultilineChart data={combinedChartsData} dimensions={dimensions} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "65% 1fr" }}>
          <div className={styles["benchmarks__charts--left"]}>
            <label>Revenue per employee ($M)</label>
            <HorizontalBarChart
              data={ChartData.revenuePerEmployee}
              width={800}
              height={300}
              valueLabelPosition={200}
              graphScaleIncrementBy={100}
            />
          </div>
          <div className={styles["benchmarks__charts--left"]}>
            <label>Spans and Layers vs peers by ratio</label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "33% 33% 33%",
              }}
            >
              <HorizontalBarChart
                data={ChartData.noOfJuniorsPerManager}
                chartName="# of junior employloyees/ Managers"
                {...commonProps}
              />
              <HorizontalBarChart
                data={ChartData.noOfManagersPerdirector}
                showNameLabel={false}
                chartName="# of Managers/ Director or Vp"
                {...commonProps}
              />
              <HorizontalBarChart
                data={ChartData.noOfDirectorsPerCSuite}
                chartName="# of Directors or VP/ C suite "
                showNameLabel={false}
                {...commonProps}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benchmarks;
