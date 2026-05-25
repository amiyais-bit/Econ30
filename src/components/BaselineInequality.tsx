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
import {
  baselineData,
  baselineOutcomeMeta,
  type BaselineOutcomeKey,
} from "../data/baselineData";

const outcomeKeys = Object.keys(baselineOutcomeMeta) as BaselineOutcomeKey[];

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

function fmt(n: number, decimals = 1) {
  return n.toFixed(decimals);
}

export default function BaselineInequality() {
  const [outcome, setOutcome] = useState<BaselineOutcomeKey>("readmissionRate");
  const meta = baselineOutcomeMeta[outcome];
  const decimals = outcome === "lifeExpectancyAt40" ? 1 : 1;

  const lowest = baselineData[0]?.[outcome] ?? 0;
  const highest = baselineData[baselineData.length - 1]?.[outcome] ?? 0;
  const gap =
    outcome === "lifeExpectancyAt40"
      ? highest - lowest
      : lowest - highest;

  const footnote = useMemo(() => {
    if (outcome === "readmissionRate") {
      return "Heart failure index admissions (NRD). 2019 neighborhood income cutoffs: Q1 ≤$47,999; Q4 ≥$82,000.";
    }
    if (outcome === "preventableHospitalizations") {
      return "Share of all inpatient stays flagged as potentially preventable (AHRQ Prevention Quality Indicators). By median ZIP household income.";
    }
    return "Average race-adjusted life expectancy at age 40 across income percentiles within each national quartile (men and women combined).";
  }, [outcome]);

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
                Outcome gaps by income quartile
              </p>
              <h3 className="mt-2 text-[21px] font-semibold text-ink">
                Inequality before reform begins
              </h3>
              <p className="mt-1 text-[13px] text-ink-secondary">
                {meta.source} ({meta.year})
              </p>
            </div>
            <label className="text-[14px] font-semibold text-ink">
              Select outcome
              <select
                className="mt-2 w-full rounded-[12px] border border-black/[0.08] bg-white px-3 py-2 text-[14px] shadow-apple"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value as BaselineOutcomeKey)}
              >
                {outcomeKeys.map((key) => (
                  <option key={key} value={key}>
                    {baselineOutcomeMeta[key].label}
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
                  formatter={(value: number) => [`${fmt(value, decimals)} ${meta.unit}`, meta.label]}
                  labelStyle={{ color: "#111216", fontWeight: 700 }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(17, 18, 22, 0.12)",
                    boxShadow: "0 12px 26px rgba(17, 18, 22, 0.08)",
                  }}
                />
                <Bar dataKey={outcome} fill="#0071e3" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-3 text-[12px] leading-relaxed text-ink-secondary">{footnote}</p>
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
              Income quartile gap (published data)
            </p>
            <p className="mt-2 text-[15px] text-ink-secondary">
              {outcome === "lifeExpectancyAt40" ? "Lowest income quartile" : "Q1 (lowest income)"}:{" "}
              <span className="font-bold text-ink">{fmt(lowest, decimals)}</span> {meta.unit}
              <br />
              {outcome === "lifeExpectancyAt40" ? "Highest income quartile" : "Q4 (highest income)"}:{" "}
              <span className="font-bold text-ink">{fmt(highest, decimals)}</span> {meta.unit}
              <br />
              Gap: <span className="font-bold text-ink">{fmt(gap, decimals)}</span> {meta.unit}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
