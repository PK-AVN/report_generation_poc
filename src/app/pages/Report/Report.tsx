import React  from "react";
import ReportTemplate from "../../components/reportTemplate/ReportTemplate";
import ReportData from "@/app/helpers/types/types";

const Report = ({ reportData }: { reportData: ReportData }) => {
  return <ReportTemplate reportData={reportData} />;
};

export default Report;
