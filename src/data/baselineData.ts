/**
 * Baseline inequality outcomes by neighborhood / national income quartile.
 * All values are from published federal and peer-reviewed sources (not illustrative).
 */

export type BaselineRow = {
  /** Income quartile label (1 = lowest). */
  group: string;
  /**
   * Adjusted 30-day all-cause readmission after HF index hospitalization, 2019.
   * JACC Heart Fail 2022; NRD; neighborhood household income quartiles.
   */
  readmissionRate: number;
  /**
   * Share of inpatient stays classified as potentially preventable (acute + chronic PQIs), 2008.
   * AHRQ HCUP Statistical Brief #99; community income by patient ZIP.
   */
  preventableHospitalizations: number;
  /**
   * Race- and ethnicity-adjusted life expectancy at age 40 (years), pooled sexes.
   * Chetty et al., JAMA 2016; national income percentiles 1–25, 26–50, 51–75, 76–100.
   */
  lifeExpectancyAt40: number;
};

export const baselineData: BaselineRow[] = [
  {
    group: "Q1 · Lowest income",
    readmissionRate: 19.0,
    preventableHospitalizations: 11.7,
    lifeExpectancyAt40: 79.4,
  },
  {
    group: "Q2",
    readmissionRate: 17.9,
    preventableHospitalizations: 10.5,
    lifeExpectancyAt40: 82.3,
  },
  {
    group: "Q3",
    readmissionRate: 17.3,
    preventableHospitalizations: 9.2,
    lifeExpectancyAt40: 84.3,
  },
  {
    group: "Q4 · Highest income",
    readmissionRate: 16.4,
    preventableHospitalizations: 8.1,
    lifeExpectancyAt40: 86.4,
  },
];

export type BaselineOutcomeKey = keyof Pick<
  BaselineRow,
  "readmissionRate" | "preventableHospitalizations" | "lifeExpectancyAt40"
>;

export const baselineOutcomeMeta: Record<
  BaselineOutcomeKey,
  { label: string; unit: string; source: string; year: string }
> = {
  readmissionRate: {
    label: "HF 30-day readmission rate",
    unit: "%",
    source: "JACC Heart Fail (NRD), neighborhood income quartiles",
    year: "2019",
  },
  preventableHospitalizations: {
    label: "Potentially preventable hospital stays",
    unit: "% of stays",
    source: "AHRQ HCUP Statistical Brief #99, community income quartiles",
    year: "2008",
  },
  lifeExpectancyAt40: {
    label: "Life expectancy at age 40",
    unit: "years",
    source: "Chetty et al., JAMA; national income quartiles (race-adjusted)",
    year: "2001–2014",
  },
};
