import React from "react";
import styles from "./companydetails.module.css";
import Link from "next/link";

interface CompanyDetailsProps {
  name: string;
  officialWebsite: string;
  employeesCount: string;
  IndustryType: string;
  headquarters: string;
  employeeCoverage: string;
  revenue: RevenueDetails;
}

interface RevenueDetails {
  percentage: number;
  year: number;
  currency: string;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  name,
  officialWebsite,
  employeeCoverage,
  employeesCount,
  IndustryType,
  headquarters,
  revenue,
}) => {
  return (
    <div className={styles["box"]}>
      <div className={styles["box--title"]}>Company Overview</div>
      <section className={styles["company-section"]}>
        <div className={styles["company-section__item--start"]}>
          <p>{name}</p>
          <Link href={officialWebsite} target="_blank">
            Official website
          </Link>
        </div>
        <div className={styles["company-section__item--end"]}>
          <span>
            <p>{employeesCount}</p>
            <label># of employees</label>
          </span>
          <span>
            <p>{IndustryType}</p>
            <label>Industry</label>
          </span>
          <span>
            <p>{headquarters}</p>
            <label>HQ</label>
          </span>
          <span>
            <p>{employeeCoverage}</p>
            <label>Employee Coverage</label>
          </span>
          <span>
            <p>{revenue.percentage}</p>
            <label>
              Revenue {"(" + [revenue.year, revenue.currency].join(",") + ")"}
            </label>
          </span>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails;
