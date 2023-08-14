import React from "react";
import styles from "./KeyPeers.module.scss";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";
import ChartData from "../../../../public/data/chartData.json";

interface EmployeeGrowthDataPoint {
  x: number;
  y: number;
}

interface CompanyDataPoint {
  name: string;
  value: number;
  color: string;
}

interface ChartData {
  employeeGrowthData: EmployeeGrowthDataPoint[];
  revenuePerEmployee: CompanyDataPoint[];
  noOfJuniorsPerManager: CompanyDataPoint[];
  noOfManagersPerdirector: CompanyDataPoint[];
  noOfDirectorsPerCSuite: CompanyDataPoint[];
  companyOrgScore: CompanyDataPoint[];
  CommitmentScore: CompanyDataPoint[];
  DEAndIScore: CompanyDataPoint[];
  SalaryAndMarketingScore: CompanyDataPoint[];
}

interface Stats {
  name: string;
  employeesCount: string;
  employeeCoverage: number;
  revenue: {
    percentage: number;
    year: number;
    currency: string;
  };
}

interface KeyPeersProps {
  data: ChartData;
  stats: Stats[];
}

interface CombinedData {
  names: string[];
  employeesCount: string[];
  employeeCoverage: number[];
  revenue: record[];
}

interface record {
  percentage: number;
  year: number;
  currency: string;
}

const KeyPeers = ({ stats, data }: KeyPeersProps) => {
//   console.log(stats, "stats");
  const chartProps = {
    width: 290,
    height: 250,
    valueLabelPosition: 170,
    graphScaleIncrementBy: 2,
  };

  const combinedData: CombinedData = stats.reduce(
    (result, record) => {
      result.names.push(record.name);
      result.employeesCount.push(record.employeesCount);
      result.employeeCoverage.push(record.employeeCoverage);
      result.revenue.push(record.revenue);
      return result;
    },
    {
      names: [] as string[],
      employeesCount: [] as string[],
      employeeCoverage: [] as number[],
      revenue: [] as record[],
    }
  );

  return (
    <>
      <div className={styles.keyPeersContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.title}>Key peers</div>
          <div className={styles.caption}># of employees</div>
          <div className={styles.caption}>Employees coverage</div>
          <div className={styles.caption}>Revenue (2022, B$)</div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.grids}>
            {combinedData.names.map((item, i) => (
              <div key={i} className={styles.rightTitle}>
                {item}
              </div>
            ))}
          </div>
          <div className={styles.grids}>
            {combinedData.employeesCount.map((item, i) => (
              <div key={i} className={styles.labelValue}>
                {item}
              </div>
            ))}
          </div>

          <div className={styles.grids}>
            {combinedData.employeeCoverage.map((item, i) => (
              <div key={i} className={styles.labelValue}>
                {item}%
              </div>
            ))}
          </div>

          <div className={styles.grids}>
            {combinedData.revenue.map((item, i) => (
              <div key={i} className={styles.labelValue}>
                {item.percentage}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.tableheaders}>
          <div style={{ display: "flex" }}>
            <div className={styles.headerSeperator}>
              <div className={styles.headerLabels}>
                <span>Company</span>
              </div>
            </div>
            <div className={styles.headerSeperator}>
              <div className={styles.headerLabels}>
                <span>Organization</span>
                <span>score</span>
              </div>
            </div>
            <div className={styles.headerSeperator}>
              <div className={styles.headerLabels}>
                <span>Commitment</span>
                <span>score</span>
              </div>
            </div>
            <div className={styles.headerSeperator}>
              <div className={styles.headerLabels}>
                <span>DE&I</span>
                <span>score</span>
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div className={styles.headerLabels}>
                <span>Salary & Marketing</span>
                <span>score</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.legends}>
              <p>J&J</p>
              <p>Abbot</p>
              <p>Medtronic</p>
              <p>Siemens</p>
            </div>
            <HorizontalBarChart
              data={data.companyOrgScore}
              showNameLabel={false}
              {...chartProps}
            />
            <HorizontalBarChart
              data={data.CommitmentScore}
              showNameLabel={false}
              {...chartProps}
            />
            <HorizontalBarChart
              data={data.DEAndIScore}
              {...chartProps}
              showNameLabel={false}
            />
            <HorizontalBarChart
              data={data.SalaryAndMarketingScore}
              showNameLabel={false}
              {...chartProps}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyPeers;
