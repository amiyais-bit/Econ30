import React from "react";
import Section from "./Section";
import Card from "./Card";
import ThesisBox from "./ThesisBox";

const takeaways = [
  {
    title: "What equity-designed VBC would require",
    body: "Explicit penalties for persistent disparity gaps, quality metrics stratified by income quartile, and reimbursement for social needs — not just clinical services.",
  },
  {
    title: "Design determines fairness",
    body: "Risk adjustment, quality metrics, and explicit equity incentives shape who benefits from reform.",
  },
];

export default function Takeaways() {
  return (
    <Section
      id="takeaways"
      chapter="Conclusion"
      title="What This Means for Policy"
      subtitle="Value-based care is a response to real problems in fee-for-service — but it is not a guarantee of greater equity."
      tone="surface"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {takeaways.map((t) => (
          <Card key={t.title} className="p-5">
            <h3 className="text-[19px] font-semibold text-ink">{t.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{t.body}</p>
          </Card>
        ))}
      </div>

      <ThesisBox label="Final statement" className="mt-10">
        <p className="text-[20px] font-medium leading-snug tracking-tight text-ink sm:text-[24px] sm:leading-[1.35]">
          Payment reform improves what it measures. It does not automatically improve what it ignores.
          Healthcare systems reduce inequality only when incentives are explicitly designed to reward
          progress among the patients who start furthest behind — not just movement in the average.
        </p>
      </ThesisBox>
    </Section>
  );
}
