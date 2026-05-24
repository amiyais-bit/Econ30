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
import PullQuote from "./PullQuote";
import ThesisBox from "./ThesisBox";
import { gapData } from "../data/gapData";

type View = "absolute" | "percent";

const adoptionYear = 2019;

const equityFactors = [
  {
    title: "Selection bias",
    body: "Plans and providers may attract healthier, easier-to-manage enrollees — improving averages without helping the sickest patients.",
  },
  {
    title: "Resource disparities across hospitals",
    body: "Safety-net hospitals often lack the capital, staff, and IT infrastructure to compete on quality metrics.",
  },
  {
    title: "Digital divide",
    body: "Telehealth, patient portals, and remote monitoring work best for patients with broadband, devices, and digital literacy.",
  },
  {
    title: "Social determinants of health",
    body: "Housing, income, and neighborhood conditions shape outcomes — yet most VBC contracts still pay for clinical services, not social needs.",
  },
  {
    title: "Unequal access to preventive care",
    body: "Screenings, chronic disease management, and early intervention remain harder to reach for low-income and rural patients.",
  },
  {
    title: "Averages mask distribution",
    body: "A rising mean can hide stagnant or worsening outcomes for the bottom quartile — the patients equity policy should prioritize.",
  },
];

function fmt(n: number) {
  return n.toFixed(1);
}

export default function EquityGap() {
  const [view, setView] = useState<View>("absolute");

  const series = useMemo(() => {
    if (view === "absolute") return gapData;
    return gapData.map((d) => ({ year: d.year, gap: (d.gap / 100) * 100 }));
  }, [view]);

  const unit = view === "absolute" ? "points" : "%";

  return (
    <Section
      id="equity"
      chapter="Part VII · The central question"
      title="Equity Analysis"
      subtitle="This is the intellectual center of the project: value-based care may improve average outcomes while leaving — or widening — gaps between advantaged and disadvantaged patients."
      tone="emphasis"
      prominent
    >
      <ThesisBox label="The equity paradox" className="mb-10 max-w-4xl">
        Average outcomes can improve while disparities remain. Payment reform that rewards population
        health does not automatically reward progress among the patients who start furthest behind.
      </ThesisBox>

      <PullQuote className="mb-10 max-w-3xl">
        The key question is not whether outcomes improved overall — but whether disadvantaged patients
        improved faster than advantaged ones.
      </PullQuote>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {equityFactors.map((f) => (
          <Card key={f.title} className="p-5">
            <h4 className="text-[16px] font-semibold text-ink">{f.title}</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">{f.body}</p>
          </Card>
        ))}
      </div>

      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-[21px] font-semibold text-ink">
              Outcome gap between low- and high-income patients
            </h3>
            <p className="mt-1 text-[14px] text-ink-secondary">
              Did the gap shrink after VBC adoption? Placeholder series for demonstration.
            </p>
          </div>
          <div className="inline-flex rounded-full border border-black/[0.08] bg-surface/90 p-1">
            <button
              type="button"
              onClick={() => setView("absolute")}
              className={[
                "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                view === "absolute" ? "bg-apple-blue text-white" : "text-ink hover:bg-black/[0.04]",
              ].join(" ")}
            >
              Absolute gap
            </button>
            <button
              type="button"
              onClick={() => setView("percent")}
              className={[
                "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                view === "percent" ? "bg-apple-blue text-white" : "text-ink hover:bg-black/[0.04]",
              ].join(" ")}
            >
              Percent gap
            </button>
          </div>
        </div>

        <div className="mt-5 h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.12)" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number) => [`${fmt(value)} ${unit}`, "Gap"]} />
              <Line type="monotone" dataKey="gap" stroke="#059669" strokeWidth={3} dot={{ r: 3 }} />
              <ReferenceLine x={adoptionYear} stroke="rgba(17, 18, 22, 0.45)" strokeDasharray="6 6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </Section>
  );
}
