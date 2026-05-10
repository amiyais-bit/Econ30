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
import { didData } from "../data/didData";

type Outcome = "readmission" | "spending" | "preventable";

const adoptionYear = 2019;

const outcomeMeta: Record<
  Outcome,
  { label: string; unit: string; vbc: string; control: string; series: { year: number; vbc: number; control: number }[] }
> = {
  readmission: {
    label: "Readmission rate",
    unit: "%",
    vbc: "VBC group",
    control: "Control group",
    series: didData,
  },
  spending: {
    label: "Medicare spending per beneficiary",
    unit: "$ (index)",
    vbc: "VBC group",
    control: "Control group",
    series: didData.map((d) => ({
      year: d.year,
      vbc: 100 - (18.2 - d.vbc) * 4.0,
      control: 100 - (18.0 - d.control) * 3.0,
    })),
  },
  preventable: {
    label: "Preventable hospitalizations",
    unit: "per 1,000 (index)",
    vbc: "VBC group",
    control: "Control group",
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

export default function DifferenceInDifferences() {
  const [outcome, setOutcome] = useState<Outcome>("readmission");
  const [showMarker, setShowMarker] = useState(true);
  const meta = useMemo(() => outcomeMeta[outcome], [outcome]);

  return (
    <Section
      id="did"
      title="Main Analysis: Did Outcomes Improve After VBC Adoption?"
      subtitle="This is a difference-in-differences style view: compare the VBC and control trends before and after adoption."
    >
      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Chart
            </p>
            <h3 className="mt-2 text-xl font-extrabold">
              Outcomes Before and After VBC Adoption
            </h3>
            <p className="mt-1 text-sm text-slate-700">
              Adoption year assumed: <span className="font-semibold">{adoptionYear}</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="text-sm font-semibold text-slate-700">
              Outcome
              <select
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value as Outcome)}
              >
                <option value="readmission">Readmission rate</option>
                <option value="spending">Medicare spending per beneficiary</option>
                <option value="preventable">Preventable hospitalizations</option>
              </select>
            </label>

            <label className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 sm:mt-6">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300"
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
                formatter={(value, name, item) => {
                  const num =
                    typeof value === "number" ? value : Number.parseFloat(String(value));
                  const row = (
                    item as { payload?: { year: number; vbc: number; control: number } } | undefined
                  )?.payload;
                  const diff =
                    row && typeof row.vbc === "number" && typeof row.control === "number"
                      ? row.vbc - row.control
                      : undefined;
                  const label =
                    name === "vbc" ? meta.vbc : name === "control" ? meta.control : String(name);
                  const extra = diff !== undefined ? ` (Δ ${fmt(diff)})` : "";
                  return [`${fmt(Number.isFinite(num) ? num : 0)} ${meta.unit}${extra}`, label];
                }}
                labelFormatter={(label) => `Year: ${label}`}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid rgba(17, 18, 22, 0.12)",
                  boxShadow: "0 12px 26px rgba(17, 18, 22, 0.08)",
                }}
                labelStyle={{ color: "#111216", fontWeight: 700 }}
              />

              <Line
                type="monotone"
                dataKey="vbc"
                stroke="#8a5cf6"
                strokeWidth={3}
                dot={{ r: 3 }}
                name="vbc"
              />
              <Line
                type="monotone"
                dataKey="control"
                stroke="#0f172a"
                strokeOpacity={0.55}
                strokeWidth={3}
                dot={{ r: 3 }}
                name="control"
              />

              {showMarker ? (
                <ReferenceLine
                  x={adoptionYear}
                  stroke="rgba(17, 18, 22, 0.45)"
                  strokeDasharray="6 6"
                  label={{
                    value: "VBC adoption begins",
                    position: "insideTopLeft",
                    fill: "rgba(17, 18, 22, 0.75)",
                    fontSize: 12,
                  }}
                />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <h4 className="text-lg font-extrabold">
              After adoption, did VBC patients improve faster than similar non-VBC patients?
            </h4>
            <p className="mt-2 text-slate-700">
              If the VBC group improves more quickly after {adoptionYear} than the control group,
              this suggests VBC may be associated with better outcomes. However, this does not yet prove that inequality declined.
            </p>
          </Card>
          <Card className="p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Note
            </p>
            <p className="mt-2 text-sm text-slate-700">
              This is a teaching-friendly “causal-ish” visualization. When you replace placeholder data,
              you can plug in provider/ACO adoption timing, matched controls, or event-study estimates.
            </p>
          </Card>
        </div>
      </Card>
    </Section>
  );
}

