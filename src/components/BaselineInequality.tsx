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
import PullQuote from "./PullQuote";
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

const barriers = [
  {
    title: "Transportation barriers",
    body: "Missed appointments and delayed care when getting to a clinic or hospital is costly or unreliable.",
  },
  {
    title: "Food insecurity",
    body: "Nutrition shapes chronic disease risk — yet diet is rarely addressed inside a payment model focused on visits.",
  },
  {
    title: "Provider shortages",
    body: "Rural and low-income communities often lack enough primary care, mental health, and specialty access.",
  },
  {
    title: "Insurance instability",
    body: "Coverage gaps and churn interrupt continuity of care, especially for low-wage workers.",
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
      chapter="Part II · The starting line"
      title="Baseline Inequality"
      subtitle="Before VBC can be evaluated, we must see the inequality that already exists — shaped by income, place, and social conditions long before a patient reaches the exam room."
    >
      <PullQuote className="mb-8 max-w-3xl">
        Patients do not enter the healthcare system on equal footing.
      </PullQuote>

      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {barriers.map((b) => (
          <Card key={b.title} className="p-4">
            <h4 className="text-[15px] font-semibold text-ink">{b.title}</h4>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-secondary">{b.body}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <Card className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
                Outcome gaps by income
              </p>
              <h3 className="mt-2 text-[21px] font-semibold text-ink">
                Inequality before reform begins
              </h3>
            </div>
            <label className="text-[14px] font-semibold text-ink">
              Select outcome
              <select
                className="mt-2 w-full rounded-[12px] border border-black/[0.08] bg-white px-3 py-2 text-[14px] shadow-apple"
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
                <Bar dataKey={outcome} fill="#059669" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="border-apple-blue/15 p-5">
            <h4 className="text-[19px] font-semibold text-ink">Why this matters for VBC</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
              Value-based care starts from unequal baselines. If disadvantaged groups begin sicker and
              face more barriers, improving the population average is not the same as closing gaps.
            </p>
          </Card>

          <Card className="p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              Income gap (placeholder)
            </p>
            <p className="mt-2 text-[15px] text-ink-secondary">
              Lowest income: <span className="font-bold text-ink">{fmt(lowest)}</span> {meta.unit}
              <br />
              Highest income: <span className="font-bold text-ink">{fmt(highest)}</span> {meta.unit}
              <br />
              Gap: <span className="font-bold text-ink">{fmt(lowest - highest)}</span> {meta.unit}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
