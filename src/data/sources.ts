/**
 * Reference links for the project. Site charts still use placeholder values;
 * replace series using data from these publishers where applicable.
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
