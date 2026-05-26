import React from "react";
import Section from "./Section";
import Card from "./Card";
import ThesisBox from "./ThesisBox";
import {
  centralFinding,
  centralFindingCallout,
  getOutcomeClaim,
  outcomesDisplayOrder,
  outcomesVerdictRows,
} from "../data/outcomesData";

function ClaimCard({ item }: { item: typeof centralFinding }) {
  return (
    <Card className="flex flex-col p-5">
      <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-secondary">{item.claim}</p>
      <p className="mt-4 text-[14px] font-semibold text-apple-blue">{item.stat}</p>
      <p className="mt-2 text-[12px] text-ink-secondary">{item.source}</p>
    </Card>
  );
}

export default function OutcomesAnalysis() {
  return (
    <Section
      id="did"
      chapter="Part V · The evidence"
      title="Outcomes Analysis"
      subtitle="National data show average outcomes improved after payment reform — but the equity story is different. The most important finding is not that readmissions fell. It is that income gaps in preventable hospitalizations persisted even as the national rate declined."
    >
      <Card className="mb-8 overflow-hidden p-0">
        <table className="w-full text-left text-[14px]">
          <thead>
            <tr className="border-b border-black/[0.08] bg-surface/80">
              <th className="px-4 py-3 font-semibold text-ink">Question</th>
              <th className="px-4 py-3 font-semibold text-ink">Research summary</th>
            </tr>
          </thead>
          <tbody>
            {outcomesVerdictRows.map((row) => (
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

      <div className="grid gap-5 md:grid-cols-2">
        {outcomesDisplayOrder.map((block) => {
          if (block.type === "callout") {
            return (
              <ThesisBox key="callout" label="Central finding" className="md:col-span-2">
                <p className="text-[17px] font-semibold leading-relaxed text-ink sm:text-[18px]">
                  {centralFindingCallout}
                </p>
              </ThesisBox>
            );
          }
          if (block.type === "central-finding") {
            return (
              <div key="central-finding" className="md:col-span-2">
                <ClaimCard item={centralFinding} />
              </div>
            );
          }
          return <ClaimCard key={block.title} item={getOutcomeClaim(block.title)} />;
        })}
      </div>
    </Section>
  );
}
