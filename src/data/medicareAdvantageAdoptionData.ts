/** Placeholder series — replace with CMS / KFF / MedPAC sources. */

export type MaShareRow = { year: number; share: number };

/** Share of Medicare beneficiaries enrolled in Medicare Advantage (percent). */
export const maShareByYear: MaShareRow[] = [
  { year: 2010, share: 24.5 },
  { year: 2012, share: 27.0 },
  { year: 2014, share: 30.0 },
  { year: 2016, share: 32.5 },
  { year: 2018, share: 35.5 },
  { year: 2020, share: 39.0 },
  { year: 2022, share: 46.0 },
  { year: 2024, share: 51.0 },
];

export type DrivingFactorRow = { label: string; weight: number; note: string };

/**
 * Illustrative “importance” weights for discussion — not estimated from data here.
 */
export const drivingFactors: DrivingFactorRow[] = [
  {
    label: "Beneficiary choice & plan marketing",
    weight: 0.22,
    note: "Enrollment reflects active choice, switching, and how plans reach beneficiaries.",
  },
  {
    label: "Supplemental benefits & cost exposure",
    weight: 0.2,
    note: "Extra benefits and lower out-of-pocket costs can pull enrollment toward MA.",
  },
  {
    label: "Star Ratings & quality signals",
    weight: 0.18,
    note: "Public quality scores and bonus payments shape plan offerings and competition.",
  },
  {
    label: "Capitation & risk-adjusted payments",
    weight: 0.17,
    note: "MA pays plans per member using risk adjustment — tying this section to VBC mechanics.",
  },
  {
    label: "Network access & primary care",
    weight: 0.13,
    note: "Narrow networks and primary-care models can steer where care is delivered.",
  },
  {
    label: "Employer / retiree & special needs plans",
    weight: 0.1,
    note: "Group coverage and SNPs matter for slices of the Medicare population.",
  },
];
