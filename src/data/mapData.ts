export type MapRow = {
  state: string; // two-letter code
  vbcPenetration: number;
  readmissionRate: number;
  povertyRate: number;
};

export const mapData: MapRow[] = [
  { state: "CA", vbcPenetration: 42, readmissionRate: 14.2, povertyRate: 12.1 },
  { state: "TX", vbcPenetration: 31, readmissionRate: 16.8, povertyRate: 14.0 },
  { state: "NY", vbcPenetration: 38, readmissionRate: 15.1, povertyRate: 13.5 },
  { state: "FL", vbcPenetration: 45, readmissionRate: 16.2, povertyRate: 12.7 }
];

