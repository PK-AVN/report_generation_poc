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

const KeyPeers = ({ stats, data }: KeyPeersProps) => {
  const chartProps = {
    width: 290,
    height: 250,
    valueLabelPosition: 170,
    graphScaleIncrementBy: 2,
  };
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
            <div className={styles.rightTitle}>Abbot</div>
            <div className={styles.rightTitle}>Medtronics</div>
            <div className={styles.rightTitle}>Seimens</div>
          </div>
          <div className={styles.grids}>
            <div className={styles.labelValue}>77k</div>
            <div className={styles.labelValue}>65k</div>
            <div className={styles.labelValue}>38k</div>
          </div>
          <div className={styles.grids}>
            <div className={styles.labelValue}>66%</div>
            <div className={styles.labelValue}>82%</div>
            <div className={styles.labelValue}>92%</div>
          </div>
          <div className={styles.grids}>
            <div className={styles.labelValue}>43.65</div>
            <div className={styles.labelValue}>31.68</div>
            <div className={styles.labelValue}>22.84</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.tableheaders}>
          {/* <div>Company</div> */}
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                borderRight: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>Company</span>
                <span>score</span>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                borderRight: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>Organization</span>
                <span>score</span>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                borderRight: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>Commitment</span>
                <span>score</span>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                borderRight: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>DE&I</span>
                <span>score</span>
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>Salary & Marketing</span>
                <span>score</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <HorizontalBarChart data={data.companyOrgScore} {...chartProps} />
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
