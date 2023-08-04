import React from "react";
import styles from "./benchmarks.module.css";
import { AreaChart } from ".";
import ChartData from "../../../../public/data/chartData.json";
import JohnsonAndJohnson from "../../../../public/data/J&J.json";
import Abbot from "../../../../public/data/Abbot.json";
import Medtronics from "../../../../public/data/medtronics.json";
import Siemens from "../../../../public/data//siemens.json";
import MultilineChart from "../multilineChart/MultilineChart";

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
  items: JohnsonAndJohnson.map((d: any) => ({ ...d })),
};
const AbbotData = {
  name: "Abbot",
  color: "#9F8CFE",
  items: Abbot.map((d: any) => ({ ...d })),
};
const MedtronicsData = {
  name: "Medtronics",
  color: "#F4C142",
  items: Medtronics.map((d: any) => ({ ...d })),
};

const SiemensData = {
  name: "Siemens",
  color: "#8BC1F9",
  items: Siemens.map((d: any) => ({ ...d })),
};

const soloChartData = {
  name: "employee Growth Data",
  color: "#CE0B80",
  items: ChartData.employeeGrowthData.map((d: any) => ({ ...d })),
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
      </div>
    </div>
  );
};

export default Benchmarks;
