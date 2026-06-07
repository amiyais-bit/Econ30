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
import {
  baselineData,
  baselineOutcomeMeta,
  type BaselineOutcomeKey,
} from "../data/baselineData";

const outcomeKeys = Object.keys(baselineOutcomeMeta) as BaselineOutcomeKey[];

function fmt(n: number, decimals = 1) {
  return n.toFixed(decimals);
}

function GapStat(props: { label: string; value: string; unit: string; accent?: boolean }) {
  return (
    <div
      className={[
        "rounded-[14px] border px-4 py-3",
        props.accent
          ? "border-apple-blue/25 bg-apple-blue/[0.06]"
          : "border-black/[0.06] bg-surface/60",
      ].join(" ")}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
        {props.label}
      </p>
      <p className="mt-1 text-[22px] font-semibold tabular-nums tracking-tight text-ink">
        {props.value}
        <span className="ml-1 text-[14px] font-medium text-ink-secondary">{props.unit}</span>
      </p>
    </div>
  );
}

export default function BaselineInequality() {
  const [outcome, setOutcome] = useState<BaselineOutcomeKey>("readmissionRate");
  const meta = baselineOutcomeMeta[outcome];
  const decimals = 1;

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

  const q1Label =
    outcome === "lifeExpectancyAt40" ? "Lowest income quartile" : "Q1 · lowest income";
  const q4Label =
    outcome === "lifeExpectancyAt40" ? "Highest income quartile" : "Q4 · highest income";

  return (
    <Section
      id="baseline"
      chapter="Part II · The starting line"
      title="Baseline Inequality"
      subtitle="Patients do not enter the healthcare system on equal footing — and value-based care inherits whatever inequality already exists at the starting line."
    >
      <Card className="overflow-hidden p-5 sm:p-6">
        <div className="rounded-[14px] border border-apple-blue/20 bg-gradient-to-br from-white to-apple-blue/[0.05] px-4 py-3.5 sm:px-5">
          <h4 className="text-[15px] font-semibold text-ink">Provider shortages</h4>
          <p className="mt-1.5 text-[14px] leading-relaxed text-ink-secondary">
            Rural and low-income communities often lack enough primary care, mental health, and
            specialty access.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-b border-black/[0.06] pb-6 sm:flex-row sm:items-end sm:justify-between">
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
          <label className="w-full shrink-0 text-[14px] font-semibold text-ink sm:w-[min(100%,280px)]">
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

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-stretch">
          <div className="min-h-[300px] h-[min(42vh,360px)]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={baselineData} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.12)" />
                <XAxis dataKey="group" tick={{ fontSize: 11 }} interval={0} angle={-12} height={72} />
                <YAxis tick={{ fontSize: 12 }} width={40} />
                <Tooltip
                  formatter={(value: number) => [`${fmt(value, decimals)} ${meta.unit}`, meta.label]}
                  labelStyle={{ color: "#111216", fontWeight: 700 }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(17, 18, 22, 0.12)",
                    boxShadow: "0 12px 26px rgba(17, 18, 22, 0.08)",
                  }}
                />
                <Bar dataKey={outcome} fill="#248a3d" radius={[10, 10, 0, 0]} maxBarSize={56} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <GapStat label={q1Label} value={fmt(lowest, decimals)} unit={meta.unit} />
            <GapStat label={q4Label} value={fmt(highest, decimals)} unit={meta.unit} />
            <GapStat label="Gap (Q1 vs Q4)" value={fmt(gap, decimals)} unit={meta.unit} accent />
          </div>
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-ink-secondary">{footnote}</p>
      </Card>

      <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-ink/85 sm:text-[18px]">
        If disadvantaged patients begin sicker and face more structural barriers, improving the
        population average is not the same as closing gaps. So what does the evidence actually show?
      </p>
    </Section>
  );
}
