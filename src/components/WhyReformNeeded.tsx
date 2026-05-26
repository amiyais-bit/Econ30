import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "./Card";
import Section from "./Section";
import {
  healthSpendingPerCapita2024,
  SPENDING_SOURCE_TITLE,
  SPENDING_SOURCE_URL,
} from "../data/spendingData";

const barFill: Record<string, string> = {
  us: "#0071e3",
  comparable: "#5ac8fa",
  default: "#d1d1d6",
};

function barColor(highlight?: "us" | "comparable") {
  if (highlight === "us") return barFill.us;
  if (highlight === "comparable") return barFill.comparable;
  return barFill.default;
}

const problems = [
  {
    title: "Volume over prevention",
    body: "Fee-for-service rewards procedures and visits, not keeping people healthy before they get sick.",
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
      subtitle="Fee-for-service did not fail because doctors stopped caring. It failed because the payment model rewarded volume over health — and the patients harmed most by that misalignment were already the most vulnerable."
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          {problems.map((item) => (
            <Card key={item.title} className="p-5">
              <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{item.body}</p>
            </Card>
          ))}
        </div>

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
      </div>

      <Card className="mt-8 w-full p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
          Spending vs. peers
        </p>
        <h3 className="mt-2 text-[19px] font-semibold text-ink sm:text-[21px]">
          High spending, uneven results
        </h3>
        <p className="mt-1 max-w-3xl text-[13px] leading-relaxed text-ink-secondary sm:text-[14px]">
          {SPENDING_SOURCE_TITLE}.{" "}
          <a
            href={SPENDING_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-apple-blue hover:underline"
          >
            Peterson-KFF Health System Tracker
          </a>
          {" "}
          (CMS NHEA for the U.S.; OECD for peer countries).
        </p>
        <div className="mt-5 h-[min(52vh,520px)] min-h-[380px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={healthSpendingPerCapita2024}
              margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.1)" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `$${(Number(v) / 1000).toFixed(0)}k`}
              />
              <YAxis
                type="category"
                dataKey="label"
                width={172}
                tick={{ fontSize: 12 }}
                reversed
              />
              <Tooltip
                formatter={(value: number) => [
                  `$${value.toLocaleString()}`,
                  "Health consumption per capita",
                ]}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid rgba(17, 18, 22, 0.12)",
                  boxShadow: "0 12px 26px rgba(17, 18, 22, 0.08)",
                }}
              />
              <Bar dataKey="spendingPerCapita" radius={[0, 6, 6, 0]} barSize={22}>
                {healthSpendingPerCapita2024.map((row) => (
                  <Cell key={row.label} fill={barColor(row.highlight)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-[14px] leading-relaxed text-ink-secondary">
          The U.S. spent <span className="font-semibold text-ink">$14,775</span> per person —
          nearly twice the <span className="font-semibold text-ink">$7,860</span> comparable-country
          average — yet outcomes often lag peers. That gap is the policy problem VBC was meant to
          address.
        </p>
      </Card>
    </Section>
  );
}
