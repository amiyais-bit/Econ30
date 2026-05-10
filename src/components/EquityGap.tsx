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
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              Chart
            </p>
            <h3 className="mt-2 text-[21px] font-semibold text-ink">
              Outcome Gap Between Low-Income and High-Income Patients
            </h3>
          </div>
          <div className="inline-flex rounded-full border border-black/[0.08] bg-surface/90 p-1">
            <button
              type="button"
              onClick={() => setView("absolute")}
              className={[
                "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                view === "absolute"
                  ? "bg-apple-blue text-white"
                  : "text-ink hover:bg-black/[0.04]",
              ].join(" ")}
            >
              Absolute gap
            </button>
            <button
              type="button"
              onClick={() => setView("percent")}
              className={[
                "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                view === "percent"
                  ? "bg-apple-blue text-white"
                  : "text-ink hover:bg-black/[0.04]",
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
                labelStyle={{ color: "#1d1d1f", fontWeight: 600 }}
              />
              <Line
                type="monotone"
                dataKey="gap"
                stroke="#0071e3"
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
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              Annotation
            </p>
            <p className="mt-2 text-[15px] text-ink-secondary">
              <span className="font-semibold">
                Average outcomes can improve while inequality remains large.
              </span>
            </p>
          </Card>
          <Card className="p-5">
            <p className="text-[15px] leading-relaxed text-ink-secondary">
              The key equity question is not whether outcomes improved overall, but whether disadvantaged
              patients improved faster than advantaged patients.
            </p>
          </Card>
        </div>
      </Card>
    </Section>
  );
}

