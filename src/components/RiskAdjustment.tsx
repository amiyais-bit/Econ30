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
        <Card className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Mechanism diagram
          </p>
          <h3 className="mt-2 text-xl font-extrabold">
            Risk adjustment mechanism (simplified)
          </h3>

          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <p className="font-bold">Main flow</p>
              <p className="mt-1 text-sm text-slate-700">
                Sicker patient → Higher risk score → Higher expected cost → Higher reimbursement
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <p className="font-bold">Distortion branch</p>
              <p className="mt-1 text-sm text-slate-700">
                Better coding → Higher documented risk → Higher reimbursement (without necessarily improving care)
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Interactive
          </p>
          <h3 className="mt-2 text-xl font-extrabold">Patient risk score</h3>

          <div className="mt-4">
            <label className="text-sm font-semibold text-slate-700">
              Risk score: <span className="font-extrabold">{riskScore.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min={0.5}
              max={2.0}
              step={0.01}
              value={riskScore}
              onChange={(e) => setRiskScore(Number(e.target.value))}
              className="mt-3 w-full"
            />
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/90 p-4">
            <p className="text-sm text-slate-700">
              Base payment: <span className="font-bold">{money(basePayment)}</span>
            </p>
            <p className="mt-2 text-lg font-extrabold">
              Estimated payment: {money(estimatedPayment)}
            </p>
          </div>

          <p className="mt-4 text-sm text-slate-700">
            Risk adjustment can support equity by compensating providers for caring
            for sicker patients. But it can also create incentives to code patients
            as sicker without improving their actual health.
          </p>
        </Card>
      </div>
    </Section>
  );
}

