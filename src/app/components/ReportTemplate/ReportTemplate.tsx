import React from "react";
import Header from "../header/Header";
import AuraLogo from "../../../../public/assets/auraLogo.svg";
import CompanyDetails from "../companyDetails/CompanyDetails";
import { Benchmarks } from "../benchmarks";
import Insights from "../insights/Insights";
import KeyPeers from "../keyPeers/KeyPeers";
import ChartDataJSON from "../../../../public/data/chartData.json";

interface ReportTemplateProps {
  reportData: any;
}

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

interface KeyPeersProps {
  data: ChartData;
}

const ChartData = {
  employeeGrowthData: ChartDataJSON.employeeGrowthData,
  revenuePerEmployee: ChartDataJSON.revenuePerEmployee,
  noOfJuniorsPerManager: ChartDataJSON.noOfJuniorsPerManager,
  noOfManagersPerdirector: ChartDataJSON.noOfManagersPerdirector,
  noOfDirectorsPerCSuite: ChartDataJSON.noOfDirectorsPerCSuite,
  companyOrgScore: ChartDataJSON.companyOrgScore,
  CommitmentScore: ChartDataJSON.CommitmentScore,
  DEAndIScore: ChartDataJSON.DEAndIScore,
  SalaryAndMarketingScore: ChartDataJSON.SalaryAndMarketingScore,
};

const ReportTemplate: React.FC<ReportTemplateProps> = ({ reportData }) => {
  return (
    <>
      <Header title={reportData.reportTitle} imageSrc={AuraLogo} />
      <CompanyDetails {...reportData.companyOverview} />
      <KeyPeers data={ChartData} stats={reportData.keyPeers} />
      <Insights data={reportData} />
      <Benchmarks />
    </>
  );
};

export default ReportTemplate;
