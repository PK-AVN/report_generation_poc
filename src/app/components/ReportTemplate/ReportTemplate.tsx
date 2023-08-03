import React from "react";
import Header from "../header/Header";
import AuraLogo from "../../../../public/assets/auraLogo.svg";
import CompanyDetails from "../companyDetails/CompanyDetails";
import { Benchmarks } from "../benchmarks";

interface ReportTemplateProps {
  reportData: any;
}

const ReportTemplate: React.FC<ReportTemplateProps> = ({ reportData }) => {
  return (
    <>
      <Header title={reportData.reportTitle} imageSrc={AuraLogo} />
      <CompanyDetails {...reportData.companyOverview} />
      <Benchmarks />
    </>
  );
};

export default ReportTemplate;
