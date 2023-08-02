import React from "react";
import Header from "../header/Header";
import AuraLogo from "../../../../public/assets/auraLogo.svg";

interface ReportTemplateProps {
  reportData: any;
}

const ReportTemplate: React.FC<ReportTemplateProps> = ({ reportData }) => {
  return (
    <>
      <Header title={reportData.reportTitle} imageSrc={AuraLogo} />
    </>
  );
};

export default ReportTemplate;
