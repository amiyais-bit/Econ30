import React from "react";
import Section from "./Section";
import Card from "./Card";
import ThesisBox from "./ThesisBox";

const equityFactors = [
  {
    title: "Selection bias",
    body: "Plans and providers may attract healthier, easier-to-manage enrollees — improving averages without helping the sickest patients. A plan that enrolls healthier patients scores better on quality metrics without improving care for anyone.",
  },
  {
    title: "Resource disparities across hospitals",
    body: "Safety-net hospitals often lack the capital, staff, and IT infrastructure to compete on quality metrics. A penalty for high readmissions hits a safety-net hospital serving uninsured patients harder than a suburban system with a wealthier patient mix.",
  },
  {
    title: "Social determinants of health",
    body: "Housing, income, and neighborhood conditions shape outcomes — yet most VBC contracts still pay for clinical services, not social needs. A diabetic patient in a food desert cannot manage their condition through clinical visits alone — but VBC contracts rarely pay for the grocery access or housing stability that would.",
  },
];

export default function EquityGap() {
  return (
    <Section
      id="equity"
      chapter="Part VII · The central question"
      title="Equity Analysis"
      subtitle="The data show gaps persisted. These three mechanisms explain why VBC, as currently designed, structurally reproduces them."
      tone="emphasis"
      prominent
    >
      <ThesisBox label="The equity paradox" className="mb-10 max-w-4xl">
        A rising mean can hide a stagnant bottom. Payment reform that rewards population health does
        not automatically reward progress among the patients equity policy should prioritize.
      </ThesisBox>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {equityFactors.map((f) => (
          <Card key={f.title} className="p-5">
            <h4 className="text-[16px] font-semibold text-ink">{f.title}</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">{f.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
