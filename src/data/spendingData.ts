/**
 * Health consumption expenditures per capita, 2024 (current prices, PPP-adjusted).
 * Source: Peterson-KFF Health System Tracker (March 2026 update).
 * U.S. from CMS 2024 National Health Expenditure Accounts; peers from OECD Health Statistics.
 * @see {@link SPENDING_SOURCE_URL}
 */

/** Direct link to the chart this section reproduces. */
export const SPENDING_SOURCE_URL =
  "https://www.healthsystemtracker.org/chart-collection/health-spending-u-s-compare-countries/#Health%20consumption%20expenditures%20per%20capita,%20U.S.%20dollars,%202024%20(current%20prices%20and%20PPP%20adjusted)";

export const SPENDING_SOURCE_TITLE =
  "Health consumption expenditures per capita, U.S. dollars, 2024 (current prices and PPP adjusted)";

export type SpendingRow = {
  label: string;
  spendingPerCapita: number;
  /** Highlights U.S. and comparable-country average bars on the chart. */
  highlight?: "us" | "comparable";
};

/** Descending order for horizontal bar chart (highest at top). */
export const healthSpendingPerCapita2024: SpendingRow[] = [
  { label: "United States", spendingPerCapita: 14775, highlight: "us" },
  { label: "Switzerland", spendingPerCapita: 9963 },
  { label: "Germany", spendingPerCapita: 9365 },
  { label: "Netherlands", spendingPerCapita: 8436 },
  { label: "Austria", spendingPerCapita: 8401 },
  { label: "Sweden", spendingPerCapita: 7871 },
  {
    label: "Comparable country average",
    spendingPerCapita: 7860,
    highlight: "comparable",
  },
  { label: "Belgium", spendingPerCapita: 7750 },
  { label: "Australia", spendingPerCapita: 7469 },
  { label: "France", spendingPerCapita: 7367 },
  { label: "Canada", spendingPerCapita: 7301 },
  { label: "United Kingdom", spendingPerCapita: 6747 },
  { label: "Japan", spendingPerCapita: 5790 },
];

export const US_SPENDING_2024 = 14775;
export const COMPARABLE_SPENDING_2024 = 7860;
