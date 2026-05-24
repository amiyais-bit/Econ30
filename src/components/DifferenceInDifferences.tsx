import React, { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Section from "./Section";
import Card from "./Card";
import ThesisBox from "./ThesisBox";
import { didData } from "../data/didData";

type Outcome = "readmission" | "spending" | "preventable";

const adoptionYear = 2019;

const outcomeMeta: Record<
  Outcome,
  { label: string; unit: string; series: { year: number; vbc: number; control: number }[] }
> = {
  readmission: { label: "Readmission rate", unit: "%", series: didData },
  spending: {
    label: "Medicare spending per beneficiary",
    unit: "$ (index)",
    series: didData.map((d) => ({
      year: d.year,
      vbc: 100 - (18.2 - d.vbc) * 4.0,
      control: 100 - (18.0 - d.control) * 3.0,
    })),
  },
  preventable: {
    label: "Preventable hospitalizations",
    unit: "per 1,000 (index)",
    series: didData.map((d) => ({
      year: d.year,
      vbc: 40 - (18.2 - d.vbc) * 2.4,
      control: 40 - (18.0 - d.control) * 1.6,
    })),
  },
};

function fmt(n: number) {
  return n.toFixed(1);
}

const comparisonRows = [
  { question: "Did average outcomes improve?", answer: "Possibly yes" },
  { question: "Did disparities shrink?", answer: "Less clear" },
];

export default function DifferenceInDifferences() {
  const [outcome, setOutcome] = useState<Outcome>("readmission");
  const [showMarker, setShowMarker] = useState(true);
  const meta = useMemo(() => outcomeMeta[outcome], [outcome]);

  return (
    <Section
      id="did"
      chapter="Part V · The evidence"
      title="Outcomes Analysis"
      subtitle="Did VBC improve outcomes overall? This difference-in-differences view compares trends before and after adoption — but average improvement is not the same as equity."
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.55fr]">
        <ThesisBox label="Two different questions">
          <p>
            <span className="font-semibold text-ink">Average improvement</span> asks whether outcomes
            got better on the whole.{" "}
            <span className="font-semibold text-ink">Equity improvement</span> asks whether
            disadvantaged patients closed the gap with everyone else.
          </p>
        </ThesisBox>

        <Card className="overflow-hidden p-0">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="border-b border-black/[0.08] bg-surface/80">
                <th className="px-4 py-3 font-semibold text-ink">Question</th>
                <th className="px-4 py-3 font-semibold text-ink">Answer</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.question} className="border-b border-black/[0.06] last:border-0">
                  <td className="px-4 py-3 text-ink-secondary">{row.question}</td>
                  <td className="px-4 py-3 font-semibold text-apple-blue">{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-[21px] font-semibold text-ink">
              Outcomes before and after VBC adoption
            </h3>
            <p className="mt-1 text-[14px] text-ink-secondary">
              Adoption year (placeholder): {adoptionYear}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="text-[14px] font-semibold text-ink">
              Outcome
              <select
                className="mt-2 w-full rounded-[12px] border border-black/[0.08] bg-white px-3 py-2 text-[14px] shadow-apple"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value as Outcome)}
              >
                <option value="readmission">Readmission rate</option>
                <option value="spending">Medicare spending per beneficiary</option>
                <option value="preventable">Preventable hospitalizations</option>
              </select>
            </label>
            <label className="mt-1 inline-flex items-center gap-2 text-[14px] font-semibold text-ink sm:mt-6">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-black/[0.12]"
                checked={showMarker}
                onChange={(e) => setShowMarker(e.target.checked)}
              />
              Show adoption marker
            </label>
          </div>
        </div>

        <div className="mt-5 h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={meta.series} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.12)" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number, name) => {
                  const label = name === "vbc" ? "VBC group" : "Control group";
                  return [`${fmt(value)} ${meta.unit}`, label];
                }}
              />
              <Line type="monotone" dataKey="vbc" stroke="#059669" strokeWidth={3} dot={{ r: 3 }} />
              <Line
                type="monotone"
                dataKey="control"
                stroke="#1d1d1f"
                strokeOpacity={0.35}
                strokeWidth={3}
                dot={{ r: 3 }}
              />
              {showMarker ? (
                <ReferenceLine
                  x={adoptionYear}
                  stroke="rgba(17, 18, 22, 0.45)"
                  strokeDasharray="6 6"
                  label={{ value: "VBC adoption", position: "insideTopLeft", fontSize: 12 }}
                />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-ink-secondary">
          If the VBC line improves faster after adoption, that suggests payment reform may work on
          average. The equity question — whether gaps narrowed — requires a separate analysis below.
        </p>
      </Card>
    </Section>
  );
}
