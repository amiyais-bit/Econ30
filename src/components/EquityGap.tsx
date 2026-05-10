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
import { gapData } from "../data/gapData";

type View = "absolute" | "percent";

const adoptionYear = 2019;

function fmt(n: number) {
  return n.toFixed(1);
}

export default function EquityGap() {
  const [view, setView] = useState<View>("absolute");

  const series = useMemo(() => {
    if (view === "absolute") return gapData;
    return gapData.map((d) => ({
      year: d.year,
      gap: (d.gap / 100) * 100, // placeholder conversion; replace with real percent-gap definition later
    }));
  }, [view]);

  const unit = view === "absolute" ? "points" : "%";

  return (
    <Section
      id="equity"
      title="Equity Section: Did the Gap Shrink?"
      subtitle="Average improvement is not the same as equity. The equity question is whether disadvantaged patients improved faster."
    >
      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Chart
            </p>
            <h3 className="mt-2 text-xl font-extrabold">
              Outcome Gap Between Low-Income and High-Income Patients
            </h3>
          </div>
          <div className="inline-flex rounded-2xl border border-slate-200 bg-white/80 p-1">
            <button
              type="button"
              onClick={() => setView("absolute")}
              className={[
                "rounded-xl px-4 py-2 text-sm font-bold transition",
                view === "absolute"
                  ? "bg-violet-600 text-white"
                  : "text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              Absolute gap
            </button>
            <button
              type="button"
              onClick={() => setView("percent")}
              className={[
                "rounded-xl px-4 py-2 text-sm font-bold transition",
                view === "percent"
                  ? "bg-violet-600 text-white"
                  : "text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              Percent gap
            </button>
          </div>
        </div>

        <div className="mt-5 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.12)" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number) => [`${fmt(value)} ${unit}`, "Gap"]}
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
                dataKey="gap"
                stroke="#8a5cf6"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
              <ReferenceLine
                x={adoptionYear}
                stroke="rgba(17, 18, 22, 0.45)"
                strokeDasharray="6 6"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Annotation
            </p>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-semibold">
                Average outcomes can improve while inequality remains large.
              </span>
            </p>
          </Card>
          <Card className="p-5">
            <p className="text-slate-700">
              The key equity question is not whether outcomes improved overall, but whether disadvantaged
              patients improved faster than advantaged patients.
            </p>
          </Card>
        </div>
      </Card>
    </Section>
  );
}

