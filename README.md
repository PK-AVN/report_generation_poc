This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Aura report generation - Proof of Concept

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Report data is prefilled with JSON data 

To learn more about structure of JSON, take a look at the following:

{
  "reportTitle": "The Aura Report",
  "companyOverview": {
    "name": "Johnson & Johnson",
    "officialWebsite": "https://www.jnj.in/",
    "employeesCount": "77k",
    "IndustryType": "HealthCare",
    "headquarters": "HQ",
    "employeeCoverage": 85,
    "revenue": {
      "percentage": 94.94,
      "year": 2022,
      "currency": "B$"
    }
  },
  "keyPeers": [
    {
      "name": "Abbott",
      "employeesCount": "77k",
      "employeeCoverage": 66,
      "revenue": {
        "percentage": 43.65,
        "year": 2022,
        "currency": "B$"
      }
    },
    {
      "name": "MedTronic",
      "employeesCount": "65k",
      "employeeCoverage": 82,
      "revenue": {
        "percentage": 31.68,
        "year": 2022,
        "currency": "B$"
      }
    },
    {
      "name": "Siemens",
      "employeesCount": "38k",
      "employeeCoverage": 92,
      "revenue": {
        "percentage": 22.84,
        "year": 2022,
        "currency": "B$"
      }
    }
  ],
  "companyStrengths": {
    "hierarchicalLayerRatio": {
      "description": "Healthy hierarchical layer ratio of 2 with high promotion rates at 7%"
    },
    "scalingEfficiency": {
      "description": "Well equipped to scale in an efficient and sustainable manner with 1.36 $M per employee which is more than double than it s nearest peer"
    },
    "salesMarketingPerformance": {
      "description": "Sales & Marketing team is overperforming vs peers , with 0.1 employees per $M revenue which is leaner by 90% to it s nearest peer"
    }
  },
  "improvements&Recommendations": [
    { "description": "Deep dive into Engineering and Product roles to understand key driver for having underweight of around 30% than it s nearest peer"
    },
    { "description": "The attrition in last 3 years is at 13%, causing the company to loose over 1000 employees to direct competitors specially Medtronics. New retention strategies could significantly help, particularly in operations, sales and engineering departments."
    },
    { "description": "Demographic profile is unbalanced, showing an over representation of white employees at 65%, while women make up less than 40% in technical functions. An active approach need to be taken to enhance diversity across roles including leadership."
    }
  ]
}
