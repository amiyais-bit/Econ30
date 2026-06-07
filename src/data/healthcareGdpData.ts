/**
 * Healthcare spending as a share of U.S. GDP, 2022.
 * Source: CMS National Health Expenditure Accounts (NHEA).
 */

export const HEALTHCARE_GDP_SOURCE =
  "CMS National Health Expenditure Data (NHEA), 2022";

export const HEALTHCARE_GDP_SOURCE_URL =
  "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data";

export type HealthcareGdpSlice = {
  name: string;
  value: number;
  fill: string;
  /** Group for legend / emphasis */
  group: "economy" | "healthcare";
};

/** Shares of U.S. GDP (percent). */
export const healthcareGdpSlices: HealthcareGdpSlice[] = [
  { name: "Rest of GDP", value: 82.7, fill: "#e8e8ed", group: "economy" },
  { name: "Personal health care", value: 14.4, fill: "#248a3d", group: "healthcare" },
  { name: "Government administration", value: 1.3, fill: "#7dd3a0", group: "healthcare" },
  { name: "Investment", value: 0.846, fill: "#40916c", group: "healthcare" },
  { name: "Government public health", value: 0.81, fill: "#52b788", group: "healthcare" },
];

export const healthcareShareOfGdp = healthcareGdpSlices
  .filter((s) => s.group === "healthcare")
  .reduce((sum, s) => sum + s.value, 0);
