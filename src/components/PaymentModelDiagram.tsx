import React from "react";
import Section from "./Section";
import Card from "./Card";

const keyTerms = [
  {
    label: "Volume",
    definition:
      "Number of visits, tests, procedures, and hospital admissions delivered.",
  },
  {
    label: "Quality / outcomes",
    definition:
      "Improved patient health, fewer hospitalizations, lower readmissions, better chronic disease control, and lower total cost of care.",
  },
];

const comparisonRows = [
  {
    model: "Fee-for-service",
    payoff: (
      <>
        More <ConceptHint term="Volume">volume</ConceptHint> = more pay
      </>
    ),
  },
  {
    model: "Value-based care",
    payoff: (
      <>
        Better <ConceptHint term="Quality / outcomes">outcomes</ConceptHint> = higher pay
      </>
    ),
  },
];

const examples = [
  {
    model: "Fee-for-service",
    body: "A physician is paid more when a patient returns for multiple visits, tests, or procedures.",
  },
  {
    model: "Value-based care",
    body: "A physician is paid more when a diabetic patient's health improves and costly hospitalizations are avoided.",
  },
];

function ConceptHint(props: { term: string; children: React.ReactNode }) {
  const definition = keyTerms.find(
    (t) => t.label.toLowerCase() === props.term.toLowerCase()
  )?.definition;

  return (
    <span className="group relative inline">
      <abbr
        title={definition}
        className="cursor-help border-b border-dotted border-apple-blue/45 font-medium text-ink no-underline"
      >
        {props.children}
      </abbr>
      {definition ? (
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 z-30 hidden w-[min(260px,calc(100vw-3rem))] -translate-x-1/2 rounded-[12px] border border-black/[0.08] bg-white px-3 py-2.5 text-left text-[12px] font-normal leading-relaxed text-ink-secondary shadow-apple-md group-hover:block group-focus-within:block"
        >
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-apple-blue">
            {props.term}
          </span>
          {definition}
        </span>
      ) : null}
    </span>
  );
}

export default function PaymentModelDiagram() {
  return (
    <Section
      id="payment-model"
      chapter="Part III · The reform"
      title="What Is Value-Based Care?"
      subtitle="VBC shifts payment from the amount of care delivered to the health outcomes achieved."
    >
      <p className="-mt-4 mb-8 max-w-3xl text-[17px] leading-relaxed text-ink-secondary sm:text-[18px]">
        In fee-for-service medicine, providers are rewarded for delivering more visits, tests, and
        procedures. In value-based care, providers are rewarded for keeping patients healthier while
        reducing unnecessary costs.
      </p>

      <Card className="overflow-hidden p-0">
        <div className="grid gap-4 border-b border-black/[0.08] bg-surface/40 px-5 py-4 sm:grid-cols-2 sm:px-6">
          {keyTerms.map((term) => (
            <div key={term.label}>
              <p className="text-[12px] font-semibold text-ink">{term.label}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-secondary">
                {term.definition}
              </p>
            </div>
          ))}
        </div>

        <table className="w-full text-left text-[15px]">
          <tbody>
            {comparisonRows.map((row) => (
              <tr
                key={row.model}
                className="border-b border-black/[0.08] last:border-0 even:bg-surface/50"
              >
                <td className="px-5 py-4 font-semibold text-ink sm:w-[40%]">{row.model}</td>
                <td className="px-5 py-4 text-ink-secondary">{row.payoff}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="grid gap-4 border-t border-black/[0.08] bg-surface/30 p-5 sm:grid-cols-2 sm:p-6">
          {examples.map((ex) => (
            <div
              key={ex.model}
              className="rounded-[14px] border border-black/[0.06] bg-white px-4 py-3.5"
            >
              <p className="text-[13px] font-semibold text-ink">{ex.model}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">{ex.body}</p>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
