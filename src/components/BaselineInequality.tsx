import React, { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "./Card";
import Section from "./Section";
import { baselineData } from "../data/baselineData";

type OutcomeKey =
  | "readmissionRate"
  | "mortalityRate"
  | "preventableHospitalizations";

const outcomeOptions: { key: OutcomeKey; label: string; unit: string }[] = [
  { key: "readmissionRate", label: "Readmission rate", unit: "%" },
  { key: "mortalityRate", label: "Mortality rate", unit: "%" },
  {
    key: "preventableHospitalizations",
    label: "Preventable hospitalizations",
    unit: "per 1,000",
  },
];

function fmt(n: number) {
  return n.toFixed(1);
}

export default function BaselineInequality() {
  const [outcome, setOutcome] = useState<OutcomeKey>("readmissionRate");
  const meta = useMemo(
    () => outcomeOptions.find((o) => o.key === outcome)!,
    [outcome]
  );

  const lowest = baselineData[0]?.[outcome] ?? 0;
  const highest = baselineData[baselineData.length - 1]?.[outcome] ?? 0;

  return (
    <Section
      id="baseline"
      title="Baseline Inequality"
      subtitle="Before evaluating value-based care, we need to establish the baseline: healthcare outcomes already vary sharply by socioeconomic status."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <Card className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Chart
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                Baseline Outcome Inequality by Income Group
              </h3>
              <p className="mt-1 text-sm text-slate-700">
                Placeholder data — replace later with your real outcome series.
              </p>
            </div>
            <label className="text-sm font-semibold text-slate-700">
              Select outcome
              <select
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value as OutcomeKey)}
              >
                {outcomeOptions.map((o) => (
                  <option key={o.key} value={o.key}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-5 h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={baselineData} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.12)" />
                <XAxis dataKey="group" tick={{ fontSize: 12 }} interval={0} angle={-10} height={64} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [`${fmt(value)} ${meta.unit}`, meta.label]}
                  labelStyle={{ color: "#111216", fontWeight: 700 }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(17, 18, 22, 0.12)",
                    boxShadow: "0 12px 26px rgba(17, 18, 22, 0.08)",
                  }}
                />
                <Bar dataKey={outcome} fill="#8a5cf6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <h4 className="text-lg font-extrabold">
              Patients do not enter the healthcare system on equal footing.
            </h4>
            <p className="mt-2 text-slate-700">
              The lowest-income group has a higher <span className="font-semibold">{meta.label.toLowerCase()}</span>{" "}
              than the highest-income group, showing that patients enter the system with unequal baseline risks.
            </p>
          </Card>

          <Card className="p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Quick comparison
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Lowest income: <span className="font-bold">{fmt(lowest)}</span> {meta.unit}
              <br />
              Highest income: <span className="font-bold">{fmt(highest)}</span> {meta.unit}
              <br />
              Gap: <span className="font-bold">{fmt(lowest - highest)}</span> {meta.unit}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

