import React from "react";
import Section from "./Section";
import Card from "./Card";
import ThesisBox from "./ThesisBox";
import PullQuote from "./PullQuote";
import { outcomeClaims, outcomesVerdict } from "../data/outcomesData";

const verdictRows = [
  { question: "Did average outcomes improve?", answer: outcomesVerdict.average },
  { question: "Did disparities shrink?", answer: outcomesVerdict.equity },
];

export default function OutcomesAnalysis() {
  return (
    <Section
      id="did"
      chapter="Part V · The evidence"
      title="Outcomes Analysis"
      subtitle="What the research shows about payment reform and national outcomes — not a difference-in-differences experiment."
    >
      <PullQuote className="mb-10 max-w-3xl">
        National data suggest Medicare readmissions and preventable hospitalizations improved on
        average after policy pressure — but that is not the same as proving value-based care closed
        inequality gaps.
      </PullQuote>

      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.55fr]">
        <ThesisBox label="How to read this section">
          <p>
            These claims summarize{" "}
            <span className="font-semibold text-ink">published population trends</span> (HCUP, CMS
            Medicare files, CDC/MMWR). They describe associations around HRRP, hospital VBP, and the
            spending slowdown — not causal effects from a single VBC intervention.
          </p>
        </ThesisBox>

        <Card className="overflow-hidden p-0">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="border-b border-black/[0.08] bg-surface/80">
                <th className="px-4 py-3 font-semibold text-ink">Question</th>
                <th className="px-4 py-3 font-semibold text-ink">Research summary</th>
              </tr>
            </thead>
            <tbody>
              {verdictRows.map((row) => (
                <tr key={row.question} className="border-b border-black/[0.06] last:border-0">
                  <td className="px-4 py-3 align-top text-ink-secondary">{row.question}</td>
                  <td className="px-4 py-3 align-top font-medium leading-relaxed text-ink">
                    {row.answer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {outcomeClaims.map((item) => (
          <Card key={item.title} className="flex flex-col p-5">
            <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-secondary">
              {item.claim}
            </p>
            <p className="mt-4 text-[14px] font-semibold text-apple-blue">{item.stat}</p>
            <p className="mt-2 text-[12px] text-ink-secondary">{item.source}</p>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-[15px] leading-relaxed text-ink-secondary">
        The equity section below asks a separate question: whether gaps between groups narrowed — not
        whether national averages moved. See{" "}
        <a href="#sources" className="font-medium text-apple-blue hover:underline">
          Sources
        </a>{" "}
        for HCUP readmissions, Buntin Medicare spending, and MMWR preventable hospitalizations.
      </p>
    </Section>
  );
}
