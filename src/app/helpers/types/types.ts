interface Revenue {
    percentage: number;
    year: number;
    currency: string;
  }
  
  interface CompanyInfo {
    name: string;
    officialWebsite: string;
    employeesCount: string;
    IndustryType: string;
    headquarters: string;
    employeeCoverage: number;
    revenue: Revenue;
  }
  
  interface PeerCompany {
    name: string;
    employeesCount: string;
    employeeCoverage: number;
    revenue: Revenue;
  }
  
  interface CompanyStrength {
    description: string;
  }
  
  interface Recommendation {
    description: string;
  }
  
  interface ReportData {
    reportTitle: string;
    companyOverview: CompanyInfo;
    keyPeers: PeerCompany[];
    companyStrengths: CompanyStrength[];
    improvementsAndRecommendations: Recommendation[];
  }
  
  export default ReportData;