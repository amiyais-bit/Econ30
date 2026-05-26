/**
 * Reference links for published data used on this site.
 * Geography and baseline inequality charts use sourced values; other sections may still be illustrative.
 */

export type SourceEntry = {
  category: string;
  title: string;
  publisher: string;
  description: string;
  url: string;
};

export const sources: SourceEntry[] = [
  {
    category: "Health spending & reform context",
    title:
      "Health consumption expenditures per capita, 2024 (current prices and PPP adjusted)",
    publisher: "Peterson-KFF Health System Tracker",
    description:
      "How does health spending in the U.S. compare to other countries? — chart used in “High spending, uneven results” (CMS NHEA for U.S.; OECD for peers).",
    url: "https://www.healthsystemtracker.org/chart-collection/health-spending-u-s-compare-countries/#Health%20consumption%20expenditures%20per%20capita,%20U.S.%20dollars,%202024%20(current%20prices%20and%20PPP%20adjusted)",
  },
  {
    category: "Health spending & reform context",
    title: "National Health Expenditure Accounts",
    publisher: "Centers for Medicare & Medicaid Services (CMS)",
    description: "Official U.S. health spending totals underlying the 2024 per-capita figure.",
    url: "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data",
  },
  {
    category: "Medicare Advantage & enrollment",
    title: "Medicare Advantage / Part D enrollment data",
    publisher: "Centers for Medicare & Medicaid Services (CMS)",
    description:
      "Official enrollment and contract statistics for replacing illustrative MA share series.",
    url: "https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/mcradvpartdenroldata",
  },
  {
    category: "Medicare Advantage & enrollment",
    title: "Medicare Advantage in 2024: Enrollment Update and Key Trends",
    publisher: "KFF (Kaiser Family Foundation)",
    description: "Synthesized enrollment trends, market structure, and beneficiary demographics.",
    url: "https://www.kff.org/medicare/medicare-advantage-in-2024-enrollment-update-and-key-trends/",
  },
  {
    category: "Medicare Advantage & enrollment",
    title: "Reports to the Congress: Medicare Payment Policy",
    publisher: "Medicare Payment Advisory Commission (MedPAC)",
    description:
      "Payment benchmarks, quality, and program spending context for Medicare Advantage.",
    url: "https://www.medpac.gov/reports-and-research/reports/",
  },
  {
    category: "Value-based care & payment",
    title: "CMS Innovation Center",
    publisher: "CMS",
    description:
      "Alternative payment models, accountable care, and demonstration evaluations relevant to VBC.",
    url: "https://innovation.cms.gov/",
  },
  {
    category: "Outcomes & inequality",
    title: "Characteristics of 30-Day All-Cause Hospital Readmissions, 2010–2016 (Statistical Brief #248)",
    publisher: "AHRQ / HCUP",
    description:
      "Medicare and private-insurance 30-day readmission rates per 100 index admissions (Outcomes Analysis chart, 2010–2016).",
    url: "https://hcup-us.ahrq.gov/reports/statbriefs/sb248-Hospital-Readmissions-2010-2016.jsp",
  },
  {
    category: "Outcomes & inequality",
    title: "Characteristics of 30-Day All-Cause Hospital Readmissions, 2016–2020 (Statistical Brief #304)",
    publisher: "AHRQ / HCUP",
    description:
      "Medicare and private readmission rates 2017–2020 (Outcomes Analysis chart; 2016–2019 mean 17.0 Medicare, 8.5 private).",
    url: "https://hcup-us.ahrq.gov/reports/statbriefs/sb304-readmissions-2016-2020.jsp",
  },
  {
    category: "Outcomes & inequality",
    title: "Trends in and Factors Contributing to the Slowdown in Medicare Spending Growth, 2007–2018",
    publisher: "JAMA Network Open (Buntin et al.)",
    description:
      "Medicare FFS Parts A & B per-beneficiary spending and payment-policy-adjusted counterfactual (Outcomes Analysis).",
    url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2790022",
  },
  {
    category: "Outcomes & inequality",
    title: "Potentially Preventable Hospitalizations — United States, 2001–2009",
    publisher: "CDC / MMWR (AHRQ HCUP)",
    description:
      "National PQI composite trend and income-quartile disparities (Outcomes Analysis preventable hospitalizations).",
    url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/su6203a23.htm",
  },
  {
    category: "Outcomes & inequality",
    title: "Potentially Preventable Hospitalizations for Acute and Chronic Conditions, 2008 (Statistical Brief #99)",
    publisher: "AHRQ / HCUP",
    description:
      "Percent of hospital stays that were potentially preventable by community income quartile (baseline inequality chart).",
    url: "https://hcup-us.ahrq.gov/reports/statbriefs/sb99.jsp",
  },
  {
    category: "Outcomes & inequality",
    title: "Neighborhood Household Income and Trends in 30-Day Readmission for Patients With Heart Failure",
    publisher: "JACC Heart Failure (NRD)",
    description:
      "Adjusted 30-day all-cause readmission rates by neighborhood income quartile, 2019 (baseline inequality chart).",
    url: "https://www.jacc.org/doi/10.1016/j.jchf.2022.10.003",
  },
  {
    category: "Outcomes & inequality",
    title: "The Association Between Income and Life Expectancy in the United States, 2001–2014",
    publisher: "JAMA (Chetty et al.)",
    description:
      "Race-adjusted life expectancy at age 40 by national income quartile (baseline inequality chart).",
    url: "https://jamanetwork.com/journals/jama/fullarticle/2513561",
  },
  {
    category: "Outcomes & inequality",
    title: "Healthcare Cost and Utilization Project (HCUP)",
    publisher: "Agency for Healthcare Research and Quality (AHRQ)",
    description:
      "Hospital inpatient and emergency data for readmissions and utilization analyses.",
    url: "https://hcup-us.ahrq.gov/",
  },
  {
    category: "Outcomes & inequality",
    title: "National Vital Statistics System",
    publisher: "National Center for Health Statistics (CDC)",
    description: "Mortality and population health statistics for outcome and disparity work.",
    url: "https://www.cdc.gov/nchs/nvss/index.htm",
  },
  {
    category: "Geography & socioeconomic context",
    title: "Average value-based purchasing scores by state",
    publisher: "Definitive Healthcare (CMS data)",
    description:
      "State-level average Hospital VBP total performance scores used on the geography map (Oct 2024 metrics update).",
    url: "https://www.definitivehc.com/resources/healthcare-insights/average-value-based-purchasing-scores-by-state",
  },
  {
    category: "Geography & socioeconomic context",
    title: "Poverty (Families below poverty) by State",
    publisher: "HDPulse / NIMHD (ACS)",
    description:
      "Family poverty rates by state, 2020–2024, used on the geography map.",
    url: "https://hdpulse.nimhd.nih.gov/data/geography",
  },
  {
    category: "Geography & socioeconomic context",
    title: "American Community Survey (ACS)",
    publisher: "U.S. Census Bureau",
    description: "Income, poverty, and demographic estimates for state or county mapping.",
    url: "https://www.census.gov/programs-surveys/acs",
  },
  {
    category: "Geography & socioeconomic context",
    title: "Small Area Income and Poverty Estimates (SAIPE)",
    publisher: "U.S. Census Bureau",
    description: "Model-based poverty rates when you need sub-state geography.",
    url: "https://www.census.gov/programs-surveys/saipe.html",
  },
];

export function sourcesByCategory(): Map<string, SourceEntry[]> {
  const map = new Map<string, SourceEntry[]>();
  for (const s of sources) {
    const list = map.get(s.category) ?? [];
    list.push(s);
    map.set(s.category, list);
  }
  return map;
}
