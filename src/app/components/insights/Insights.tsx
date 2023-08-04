"use client";
import React from "react";
import styles from "./insights.module.css";

const Insights = ({ data }: any) => {
  console.log(data, "in");
  return (
    <div className={styles["insights"]}>
      <div className={styles["insights__left"]}>
        <h1 className={styles["insights-title"]}>Strengths</h1>
        <div className={styles["insights__left-content"]}>
          {data.companyStrengths.map(
            (item: { description: string }, i: React.Key) => (
              <ul key={i} className={styles["insights__left-content--list"]}>
                <li>
                  <p>{item.description}</p>
                </li>
              </ul>
            )
          )}
        </div>
      </div>
      <div className={styles["insights__right"]}>
        <h1 className={styles["insights-title"]}>
          Improvements and Recommendations
        </h1>
        <div className={styles["insights__right-content"]}>
          {data.improvementsAndRecommendations.map(
            (item: { description: string }, i: React.Key) => (
              <ul key={i} className={styles["insights__right-content--list"]}>
                <li>
                  <p>{item.description}</p>
                </li>
              </ul>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Insights;


