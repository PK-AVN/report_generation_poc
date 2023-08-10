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

To learn more about structure of Report JSON, take a look at the following:

```
{
    "reportTitle": "The Aura Report",
    "companyOverview": {
        "name": "Johnson & Johnson",
        "officialWebsite": "https://www.jnj.in/",
        "employeesCount": "77k",
        "IndustryType": "HealthCare",
        "headquarters": "New Jersey, US",
        "employeeCoverage": 85,
        "revenue": {
            "percentage": 94.94,
            "year": 2022,
            "currency": "B$"
        }
    },
    "keyPeers": [{
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
    "companyStrengths": [{
            "description": "Healthy hierarchical layer ratio of 2 with high promotion rates at 7%"
        },
        {
            "description": "Well equipped to scale in an efficient and sustainable manner with 1.36 $M per employee which is more than double than it s nearest peer"
        },
        {
            "description": "Sales & Marketing team is overperforming vs peers , with 0.1 employees per $M revenue which is leaner by 90% to it s nearest peer"
        }
    ],
    "improvementsAndRecommendations": [{
            "description": "Deep dive into Engineering and Product roles to understand key driver for having underweight of around 30% than it s nearest peer"
        },
        {
            "description": "The attrition in last 3 years is at 13%, causing the company to loose over 1000 employees to direct competitors specially Medtronics. New retention strategies could significantly help, particularly in operations, sales and engineering departments."
        },
        {
            "description": "Demographic profile is unbalanced, showing an over representation of white employees at 65%, while women make up less than 40% in technical functions. An active approach need to be taken to enhance diversity across roles including leadership."
        }
    ]
}
```

Chart JSON Input 

```
{
    "employeeGrowthData": [{
            "x": 2013,
            "y": 50
        },
        {
            "x": 2014,
            "y": 55
        },
        {
            "x": 2015,
            "y": 57
        },
        {
            "x": 2016,
            "y": 58
        },
        {
            "x": 2017,
            "y": 58
        },
        {
            "x": 2018,
            "y": 58
        },
        {
            "x": 2019,
            "y": 59
        },
        {
            "x": 2020,
            "y": 60
        },
        {
            "x": 2021,
            "y": 60
        },
        {
            "x": 2022,
            "y": 61
        },
        {
            "x": 2023,
            "y": 62
        }
    ],
    "revenuePerEmployee": [{
            "name": "J&J",
            "value": 1.4,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 0.6,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 0.5,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 0.6,
            "color": "#E3EBF0"
        }
    ],
    "noOfJuniorsPerManager": [{
            "name": "J&J",
            "value": 2.1,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 2.3,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 3.3,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 2.8,
            "color": "#E3EBF0"
        }
    ],
    "noOfManagersPerdirector": [{
            "name": "J&J",
            "value": 1.9,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 3.0,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 1.5,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 2.5,
            "color": "#E3EBF0"
        }
    ],
    "noOfDirectorsPerCSuite": [{
            "name": "J&J",
            "value": 3.5,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 2.0,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 4.1,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 1.8,
            "color": "#E3EBF0"
        }
    ],
    "companyOrgScore": [{
            "name": "J&J",
            "value": 54,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 52,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 52,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 57,
            "color": "#E3EBF0"
        }
    ],
    "CommitmentScore": [{
            "name": "J&J",
            "value": 53,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 53,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 40,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 49,
            "color": "#E3EBF0"
        }
    ],
    "DEAndIScore": [{
            "name": "J&J",
            "value": 81,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 69,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 63,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 52,
            "color": "#E3EBF0"
        }
    ],
    "SalaryAndMarketingScore": [{
            "name": "J&J",
            "value": 70,
            "color": "#C11178"
        },
        {
            "name": "Abbot",
            "value": 67,
            "color": "#E3EBF0"
        },
        {
            "name": "Medtronic",
            "value": 66,
            "color": "#E3EBF0"
        },
        {
            "name": "Siemens",
            "value": 64,
            "color": "#E3EBF0"
        }
    ]
}

```
