import React from "react";
import Card from "./Card";
import Section from "./Section";

const drivers = [
  "Fee-for-service incentives reward volume over outcomes, encouraging more tests, procedures, and interventions regardless of necessity",
  "Fragmentation across providers and payers leads to poor care coordination and duplicated services",
  "Misaligned incentives between stakeholders prevent system-wide optimization",
  "Limited emphasis on preventive care results in higher long-term costs and worse patient outcomes",
];

export default function UsHealthcareProblem() {
  return (
    <Section
      id="problem"
      title="The Problem: High Spending, Poor Outcomes (U.S. Case Study)"
      subtitle="The United States operates the most expensive healthcare system in the world, yet consistently delivers worse outcomes than other developed nations. This disconnect highlights a fundamental structural inefficiency—and sets the stage for the shift toward value-based care."
      tone="surface"
    >
      <div className="space-y-12">
        <div>
          <h3 className="text-[21px] font-semibold text-ink">Unmatched Spending</h3>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            The U.S. spends significantly more on healthcare than any other country, both in
            absolute terms and as a share of GDP. Per capita spending is roughly double the OECD
            average, and healthcare accounts for nearly one-fifth of total economic output.
          </p>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            Despite this scale, increased spending has not translated into proportional improvements
            in population health. Instead, the system generates substantial revenue across payers,
            providers, and intermediaries, making it highly attractive to investors but not
            necessarily effective for patients.
          </p>
        </div>

        <div>
          <h3 className="text-[21px] font-semibold text-ink">Worse Health Outcomes</h3>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            Compared to peer nations, the U.S. underperforms across key health indicators. Life
            expectancy is lower, preventable mortality is higher, and maternal mortality rates
            significantly exceed those of other developed countries.
          </p>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            Chronic diseases such as diabetes, cardiovascular disease, and obesity are more
            prevalent, reflecting a system that is more reactive than preventive. The result is a
            healthcare model that treats illness at high cost rather than managing health
            efficiently over time.
          </p>
        </div>

        <div>
          <h3 className="text-[21px] font-semibold text-ink">Structural Drivers of Inefficiency</h3>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            Several core features of the U.S. healthcare system contribute to this imbalance:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            {drivers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            Together, these factors create a system that is both expensive and inefficient.
          </p>
        </div>

        <div>
          <h3 className="text-[21px] font-semibold text-ink">Transition Toward Value-Based Care</h3>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            The growth of Medicare Advantage is accelerating a shift away from traditional
            fee-for-service models toward value-based care. Under these models, providers are
            incentivized to manage total cost of care while improving patient outcomes.
          </p>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            This transition introduces accountability into the system, but also adds
            complexity—particularly around risk adjustment, quality measurement, and data
            infrastructure.
          </p>
        </div>

        <div>
          <h3 className="text-[21px] font-semibold text-ink">Why This Matters</h3>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            The gap between spending and outcomes represents both a systemic failure and a market
            opportunity.
          </p>
          <p className="mt-4 text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
            A large and growing revenue base, combined with clear inefficiencies, creates strong
            demand for solutions that improve care delivery while reducing costs. This dynamic is
            driving investment into value-based care infrastructure, including risk adjustment,
            quality optimization, and care coordination platforms.
          </p>
        </div>
      </div>

      <Card className="mt-12 border-apple-blue/20 bg-white p-6 shadow-apple-md">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
          Key takeaway
        </p>
        <p className="mt-3 text-[17px] leading-[1.47] text-ink sm:text-[19px] sm:leading-[1.42]">
          The U.S. healthcare system is not constrained by resources—it is constrained by
          structure. Value-based care emerges as a necessary evolution to align incentives,
          improve outcomes, and unlock efficiency within an already massive market.
        </p>
      </Card>
    </Section>
  );
}
