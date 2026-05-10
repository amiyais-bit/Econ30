import React, { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./Card";

const basePayment = 10000;

function money(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function RiskAdjustment() {
  const [riskScore, setRiskScore] = useState(1.0);
  const estimatedPayment = useMemo(
    () => basePayment * riskScore,
    [riskScore]
  );

  return (
    <Section
      id="risk"
      title="Risk Adjustment"
      subtitle="Risk adjustment can protect equity — or distort incentives. Use the slider to see how risk scores scale payments."
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Card className="p-6">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
            Mechanism diagram
          </p>
          <h3 className="mt-2 text-[21px] font-semibold text-ink">
            Risk adjustment mechanism (simplified)
          </h3>

          <div className="mt-4 grid gap-3">
            <div className="rounded-[16px] border border-black/[0.08] bg-white p-4 shadow-apple">
              <p className="font-semibold text-ink">Main flow</p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
                Sicker patient → Higher risk score → Higher expected cost → Higher reimbursement
              </p>
            </div>
            <div className="rounded-[16px] border border-black/[0.08] bg-white p-4 shadow-apple">
              <p className="font-semibold text-ink">Distortion branch</p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
                Better coding → Higher documented risk → Higher reimbursement (without necessarily improving care)
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
            Interactive
          </p>
          <h3 className="mt-2 text-[21px] font-semibold text-ink">Patient risk score</h3>

          <div className="mt-4">
            <label className="text-[14px] font-semibold text-ink">
              Risk score: <span className="font-semibold text-apple-blue">{riskScore.toFixed(2)}</span>
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
            Risk adjustment can support equity by compensating providers for caring
            for sicker patients. But it can also create incentives to code patients
            as sicker without improving their actual health.
          </p>
        </Card>
      </div>
    </Section>
  );
}
