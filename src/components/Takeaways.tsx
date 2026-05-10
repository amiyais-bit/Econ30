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
    >
      <div className="grid gap-4 md:grid-cols-3">
        {takeaways.map((t) => (
          <Card key={t.title} className="p-5">
            <h3 className="text-lg font-extrabold">{t.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{t.body}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Final thesis
        </p>
        <p className="mt-2 text-slate-700">
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

