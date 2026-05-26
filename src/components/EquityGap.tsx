import React from "react";
import Section from "./Section";
import Card from "./Card";
import PullQuote from "./PullQuote";
import ThesisBox from "./ThesisBox";

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

export default function EquityGap() {
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
