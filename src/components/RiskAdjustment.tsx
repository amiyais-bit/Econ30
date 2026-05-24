import React, { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./Card";
import PullQuote from "./PullQuote";

const basePayment = 10000;

function money(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function RiskAdjustment() {
  const [riskScore, setRiskScore] = useState(1.0);
  const estimatedPayment = useMemo(() => basePayment * riskScore, [riskScore]);

  return (
    <Section
      id="risk"
      chapter="Part VI · The equity mechanism"
      title="Risk Adjustment"
      subtitle="The mechanism designed to protect equity — compensating providers for caring for sicker patients so plans do not avoid high-risk populations."
    >
      <PullQuote className="mb-8 max-w-3xl">
        Sicker patients should bring higher payments — but coding incentives can distort who appears
        &ldquo;sick&rdquo; on paper.
      </PullQuote>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Card className="p-6">
          <h3 className="text-[21px] font-semibold text-ink">How it is supposed to work</h3>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[16px] border border-apple-blue/15 bg-gradient-to-br from-white to-surface/60 p-4">
              <p className="font-semibold text-ink">Main flow</p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
                Sicker patient → higher risk score → higher expected cost → higher reimbursement
              </p>
            </div>
            <div className="rounded-[16px] border border-black/[0.08] bg-white p-4">
              <p className="font-semibold text-ink">Distortion risk</p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
                Better coding → higher documented risk → higher reimbursement — without necessarily
                improving actual health.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-[21px] font-semibold text-ink">Adjust the risk score</h3>
          <div className="mt-4">
            <label className="text-[14px] font-semibold text-ink">
              Risk score:{" "}
              <span className="font-semibold text-apple-blue">{riskScore.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min={0.5}
              max={2.0}
              step={0.01}
              value={riskScore}
              onChange={(e) => setRiskScore(Number(e.target.value))}
              className="mt-3 w-full accent-apple-blue"
            />
          </div>
          <div className="mt-4 rounded-[16px] border border-black/[0.08] bg-white p-4 shadow-apple">
            <p className="text-[14px] text-ink-secondary">
              Base payment: <span className="font-semibold text-ink">{money(basePayment)}</span>
            </p>
            <p className="mt-2 text-[21px] font-semibold text-ink">
              Estimated payment: {money(estimatedPayment)}
            </p>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary">
            Risk adjustment is essential for fairness in capitated models — but it only protects equity
            if scores reflect true need, not billing strategy.
          </p>
        </Card>
      </div>
    </Section>
  );
}
