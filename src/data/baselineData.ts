export type BaselineRow = {
  group: string;
  readmissionRate: number;
  mortalityRate: number;
  preventableHospitalizations: number;
};

export const baselineData: BaselineRow[] = [
  {
    group: "Lowest income",
    readmissionRate: 18.5,
    mortalityRate: 7.2,
    preventableHospitalizations: 42,
  },
  {
    group: "Low-middle income",
    readmissionRate: 16.8,
    mortalityRate: 6.5,
    preventableHospitalizations: 36,
  },
  {
    group: "Middle income",
    readmissionRate: 15.1,
    mortalityRate: 5.8,
    preventableHospitalizations: 31,
  },
  {
    group: "High-middle income",
    readmissionRate: 13.9,
    mortalityRate: 5.1,
    preventableHospitalizations: 26,
  },
  {
    group: "Highest income",
    readmissionRate: 12.4,
    mortalityRate: 4.4,
    preventableHospitalizations: 21,
  },
];

