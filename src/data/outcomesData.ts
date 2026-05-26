/**
 * Research-based claims for Outcomes Analysis (no causal DiD estimates).
 * Figures cited in copy are from published federal and peer-reviewed sources.
 */

export type OutcomeClaim = {
  title: string;
  claim: string;
  stat: string;
  source: string;
};

export const outcomeClaims: OutcomeClaim[] = [
  {
    title: "Medicare readmissions fell after HRRP",
    claim:
      "Among hospital stays billed to Medicare, the national 30-day all-cause readmission rate declined after the Hospital Readmissions Reduction Program — consistent with payment pressure on hospitals, not proof of a randomized VBC trial.",
    stat: "18.3 → 17.1 per 100 index admissions (2010–2016, −7%); roughly flat at 17.0 through 2020.",
    source: "AHRQ HCUP Statistical Briefs #248 and #304 (Nationwide Readmissions Database)",
  },
  {
    title: "Private insurance readmissions stayed much lower",
    claim:
      "Private insurance readmissions remained near half the Medicare rate and changed little over the same period — so the Medicare trend cannot be read as universal improvement across payers.",
    stat: "8.8 per 100 in 2010–2012; 8.5–8.6 in 2014–2020.",
    source: "AHRQ HCUP Statistical Briefs #248 and #304",
  },
  {
    title: "Medicare spending per beneficiary still rose",
    claim:
      "Traditional Medicare fee-for-service Parts A and B spending per beneficiary increased from 2007 to 2018. Growth slowed in the early 2010s, partly because payment-rate policy held down updates — not because utilization disappeared.",
    stat: "$7,669 (2007) → $9,129 (2018); average growth −0.1%/yr (2012–2015) vs. 3.3%/yr (2008–2011).",
    source: "Buntin et al., JAMA Network Open 2022 (Medicare Master Beneficiary Summary File)",
  },
  {
    title: "Payment rules explain much of the spending slowdown",
    claim:
      "If Medicare had kept 2007 payment rates (plus sequestration adjustments), 2018 per-beneficiary spending would have been substantially lower than observed — underscoring that “slower growth” is not the same as “lower need.”",
    stat: "2018 counterfactual ≈ $7,744 vs. $9,129 actual (~18% lower).",
    source: "Buntin et al., JAMA Network Open 2022",
  },
  {
    title: "Preventable hospitalizations declined nationally",
    claim:
      "The age- and sex-adjusted PQI composite rate of potentially preventable hospitalizations fell among U.S. adults from 2001 to 2009 — a marker of some system-wide improvement in ambulatory-sensitive care.",
    stat: "1,635 → 1,395 per 100,000 adults (2001–2009).",
    source: "CDC / MMWR (AHRQ HCUP Prevention Quality Indicators)",
  },
];

export const centralFinding: OutcomeClaim = {
  title: "Income gaps in preventable care persisted",
  claim:
    "Residents of the lowest-income ZIP-code quartiles continued to have higher preventable-hospitalization rates than the wealthiest quartiles every year. Disparities did not close even as the national rate fell. In 2009, roughly 500,000 excess hospitalizations would have been avoided if the lowest-income quartile matched the highest-income rate.",
  stat: "MMWR: parallel declines 2001–2009; income gap unchanged in relative terms.",
  source: "CDC / MMWR 2001–2009; CHDIR 2004–2007",
};

export const centralFindingCallout =
  "This is the central empirical finding of this project: VBC lifted the mean. It did not close the gap.";

export const outcomesVerdict = {
  average:
    "Mixed. Medicare readmissions and national preventable admissions improved on average after payment and quality initiatives, but Medicare spending per beneficiary still grew and private-payer readmissions barely moved.",
  equity:
    "Weak. Published data through 2009 show persistent income disparities in preventable hospitalizations; Medicare–private readmission gaps also remained large. Closing equity gaps requires more than average outcome gains.",
};
