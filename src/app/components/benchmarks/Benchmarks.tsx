import React from "react";
import styles from "./benchmarks.module.css";
import { AreaChart } from ".";
import ChartData from "../../../../public/data/chartData.json";

const Benchmarks = () => {
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
        </div>
        <div className={styles["benchmarks__charts--right"]}>
          <label>Attrition overt time vs peers (%)</label>
          <AreaChart
            width={500}
            height={300}
            data={ChartData.employeeGrowthData}
          />
        </div>
      </div>
    </div>
  );
};

export default Benchmarks;
