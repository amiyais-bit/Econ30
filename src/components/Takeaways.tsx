import React from "react";
import Section from "./Section";
import Card from "./Card";

const takeaways = [
  {
    title: "VBC can improve averages",
    body:
      "Payment reform may reduce readmissions, hospitalizations, and spending — at least on paper and in the average patient.",
  },
  {
    title: "Equity gains are not automatic",
    body:
      "Disadvantaged patients may still experience worse outcomes if models do not reward improvements among higher-risk groups.",
  },
  {
    title: "Design matters",
    body:
      "Risk adjustment, quality metrics, patient mix, and geography determine whether VBC reduces inequality.",
  },
];

export default function Takeaways() {
  return (
    <Section
      id="takeaways"
      title="Main Takeaways"
      subtitle="Value-based care is not automatically equitable. Equity requires explicit incentives and measurement."
      tone="surface"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {takeaways.map((t) => (
          <Card key={t.title} className="p-5">
            <h3 className="text-[19px] font-semibold text-ink">{t.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{t.body}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
          Final thesis
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
          <span className="font-semibold">
            Value-based care is not automatically equitable.
          </span>{" "}
          It can reduce inequality only if payment models explicitly reward
          improvements among disadvantaged patients — not just better average outcomes.
        </p>
      </Card>
    </Section>
  );
}

