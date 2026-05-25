/**
 * State-level geography data for the map section.
 *
 * vbpScore: Average Hospital Value-Based Purchasing total performance score
 *   by state (Definitive Healthcare / CMS, Oct 2024 quality metrics update).
 *   National average ≈ 21.4. Maryland not reported in source table.
 *
 * povertyRate: Families below poverty (%), 2020–2024
 *   (HDPulse / NIMHD, ACS-based). U.S. average ≈ 8.8%.
 */

export type MapRow = {
  state: string;
  /** Average hospital VBP total performance score (0–100 scale). */
  vbpScore?: number;
  /** Percent of families below poverty. */
  povertyRate: number;
};

export const mapData: MapRow[] = [
  { state: "AL", vbpScore: 22.09, povertyRate: 11.3 },
  { state: "AK", vbpScore: 36.49, povertyRate: 6.5 },
  { state: "AZ", vbpScore: 20.31, povertyRate: 8.7 },
  { state: "AR", vbpScore: 19.74, povertyRate: 11.5 },
  { state: "CA", vbpScore: 22.33, povertyRate: 8.5 },
  { state: "CO", vbpScore: 22.97, povertyRate: 5.9 },
  { state: "CT", vbpScore: 20.65, povertyRate: 6.9 },
  { state: "DE", vbpScore: 16.55, povertyRate: 7.2 },
  { state: "DC", vbpScore: 21.0, povertyRate: 11.9 },
  { state: "FL", vbpScore: 22.89, povertyRate: 8.9 },
  { state: "GA", vbpScore: 21.96, povertyRate: 9.9 },
  { state: "HI", vbpScore: 25.97, povertyRate: 6.8 },
  { state: "ID", vbpScore: 25.47, povertyRate: 7.1 },
  { state: "IL", vbpScore: 21.83, povertyRate: 8.2 },
  { state: "IN", vbpScore: 18.91, povertyRate: 8.5 },
  { state: "IA", vbpScore: 27.93, povertyRate: 7.0 },
  { state: "KS", vbpScore: 22.86, povertyRate: 7.5 },
  { state: "KY", vbpScore: 19.69, povertyRate: 11.9 },
  { state: "LA", vbpScore: 18.16, povertyRate: 14.1 },
  { state: "ME", vbpScore: 25.55, povertyRate: 6.4 },
  { state: "MD", povertyRate: 6.4 },
  { state: "MA", vbpScore: 22.22, povertyRate: 6.7 },
  { state: "MI", vbpScore: 26.14, povertyRate: 8.9 },
  { state: "MN", vbpScore: 34.87, povertyRate: 5.6 },
  { state: "MS", vbpScore: 21.25, povertyRate: 14.3 },
  { state: "MO", vbpScore: 21.42, povertyRate: 8.4 },
  { state: "MT", vbpScore: 30.89, povertyRate: 6.7 },
  { state: "NE", vbpScore: 22.02, povertyRate: 7.0 },
  { state: "NV", vbpScore: 18.59, povertyRate: 8.9 },
  { state: "NH", vbpScore: 22.26, povertyRate: 4.5 },
  { state: "NJ", vbpScore: 16.78, povertyRate: 7.0 },
  { state: "NM", vbpScore: 21.08, povertyRate: 13.7 },
  { state: "NY", vbpScore: 20.08, povertyRate: 10.0 },
  { state: "NC", vbpScore: 25.35, povertyRate: 9.2 },
  { state: "ND", vbpScore: 23.1, povertyRate: 6.5 },
  { state: "OH", vbpScore: 21.44, povertyRate: 9.3 },
  { state: "OK", vbpScore: 23.49, povertyRate: 11.3 },
  { state: "OR", vbpScore: 33.42, povertyRate: 7.5 },
  { state: "PA", vbpScore: 21.9, povertyRate: 8.0 },
  { state: "RI", vbpScore: 28.21, povertyRate: 7.2 },
  { state: "SC", vbpScore: 18.54, povertyRate: 10.1 },
  { state: "SD", vbpScore: 27.17, povertyRate: 7.5 },
  { state: "TN", vbpScore: 20.89, povertyRate: 9.8 },
  { state: "TX", vbpScore: 20.74, povertyRate: 10.5 },
  { state: "UT", vbpScore: 29.78, povertyRate: 5.6 },
  { state: "VT", vbpScore: 25.75, povertyRate: 5.8 },
  { state: "VA", vbpScore: 25.23, povertyRate: 6.8 },
  { state: "WA", vbpScore: 27.13, povertyRate: 6.4 },
  { state: "WV", vbpScore: 14.37, povertyRate: 12.0 },
  { state: "WI", vbpScore: 30.31, povertyRate: 6.6 },
  { state: "WY", vbpScore: 23.4, povertyRate: 6.8 },
];

export const VBP_NATIONAL_AVG = 21.4;
export const POVERTY_NATIONAL_AVG = 8.8;
