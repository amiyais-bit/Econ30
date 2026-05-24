import React from "react";
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
import { usSpendingOutcomes } from "../data/spendingData";

const problems = [
  {
    title: "Volume over prevention",
    body: "Fee-for-service rewards procedures and visits, not keeping people healthy before they get sick.",
  },
  {
    title: "Rising healthcare costs",
    body: "National health spending has climbed for decades, straining households, employers, and public budgets.",
  },
  {
    title: "Fragmented care",
    body: "Patients bounce between specialists and settings with little coordination — especially harmful for chronic illness.",
  },
  {
    title: "Chronic disease burden",
    body: "Diabetes, heart disease, and other long-term conditions drive much of U.S. spending and disability.",
  },
  {
    title: "Poor outcomes despite high spending",
    body: "The U.S. spends more per person than peer countries yet often trails on life expectancy and preventable harm.",
  },
];

export default function WhyReformNeeded() {
  return (
    <Section
      id="why-reform"
      chapter="Part I · The problem"
      title="Why Reform Was Needed"
      subtitle="Before value-based care could be sold as a solution, policymakers had to confront a fee-for-service system that often paid for activity — not results."
    >
      <PullQuote className="mb-10 max-w-3xl">
        Fee-for-service did not fail because doctors stopped caring. It failed because the payment
        model rewarded volume.
      </PullQuote>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-4">
          {problems.map((item) => (
            <Card key={item.title} className="p-5">
              <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{item.body}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="border-apple-blue/20 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              The incentive loop
            </p>
            <h3 className="mt-2 text-[19px] font-semibold text-ink">How fee-for-service pays</h3>
            <div className="mt-5 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
              {["More procedures", "More billing", "More revenue"].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="rounded-[14px] border border-apple-blue/20 bg-gradient-to-br from-white to-surface/80 px-4 py-3 text-center text-[14px] font-semibold text-ink shadow-apple">
                    {step}
                  </div>
                  {i < 2 ? (
                    <span className="hidden text-xl text-apple-blue sm:block" aria-hidden>
                      →
                    </span>
                  ) : null}
                  {i < 2 ? (
                    <span className="text-center text-xl text-apple-blue sm:hidden" aria-hidden>
                      ↓
                    </span>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-secondary">
              Under this logic, reform was not optional — the system needed incentives aligned with
              prevention, coordination, and outcomes.
            </p>
          </Card>

          <Card className="p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              Spending vs. outcomes
            </p>
            <h3 className="mt-2 text-[19px] font-semibold text-ink">High spending, uneven results</h3>
            <p className="mt-1 text-[14px] text-ink-secondary">
              Illustrative OECD-style comparison — placeholder for your paper&apos;s sources.
            </p>
            <div className="mt-4 h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={usSpendingOutcomes}
                  margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.1)" />
                  <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickFormatter={(v) => `$${(Number(v) / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    formatter={(value: number) => [
                      `$${value.toLocaleString()}`,
                      "Health spending per capita",
                    ]}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid rgba(17, 18, 22, 0.12)",
                      boxShadow: "0 12px 26px rgba(17, 18, 22, 0.08)",
                    }}
                  />
                  <Bar dataKey="spendingPerCapita" fill="#059669" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-[13px] text-ink-secondary">
              The U.S. bar towers above peers — yet life expectancy often lags. That gap is the
              policy problem VBC was meant to address.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
