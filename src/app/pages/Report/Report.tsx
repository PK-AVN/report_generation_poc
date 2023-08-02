import React  from "react";
import ReportTemplate from "../../components/ReportTemplate/ReportTemplate";

const Report = ({ reportData }: { reportData: any }) => {
  return <ReportTemplate reportData={reportData} />;
};

export default Report;
