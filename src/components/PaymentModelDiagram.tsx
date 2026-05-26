import React from "react";
import Section from "./Section";
import Card from "./Card";

const comparisonRows = [
  { model: "Fee-for-service", payoff: "More volume = more pay" },
  { model: "Value-based care", payoff: "Better outcomes = higher pay" },
];

export default function PaymentModelDiagram() {
  return (
    <Section
      id="payment-model"
      chapter="Part III · The reform"
      title="What Is Value-Based Care?"
      subtitle="VBC shifts payment from volume to outcomes. But changing what insurers pay for is not the same as changing who benefits."
    >
      <Card className="overflow-hidden p-0">
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
      </Card>
    </Section>
  );
}
