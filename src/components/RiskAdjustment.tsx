import React, { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./Card";

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
      subtitle="Risk adjustment was designed to protect equity — but coding incentives can undermine it. When better documentation raises a patient's risk score without improving their actual health, higher payments flow to plans that are better at billing, not better at caring for disadvantaged populations."
    >
      <Card className="mb-8 p-5 sm:p-6">
        <h3 className="text-[21px] font-semibold text-ink">Simple risk adjustment example</h3>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-[16px] border border-black/[0.08] bg-surface/50 p-4">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-secondary">
              Without risk adjustment
            </p>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-secondary">
              <li>
                <span className="font-semibold text-ink">Doctor A</span> treats mostly healthy
                patients
              </li>
              <li>
                <span className="font-semibold text-ink">Doctor B</span> treats older, sicker
                patients with diabetes and heart failure
              </li>
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary">
              If both doctors are judged only on raw outcomes, Doctor B may look &ldquo;worse&rdquo;
              simply because their patients are sicker to begin with.
            </p>
          </div>

          <div className="rounded-[16px] border border-apple-blue/20 bg-gradient-to-br from-white to-apple-blue/[0.05] p-4">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-apple-blue">
              With risk adjustment
            </p>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-secondary">
              <li>The healthcare system increases payment for patients expected to need more care</li>
              <li>
                <span className="font-semibold text-ink">Doctor B</span> receives more resources
                because their patients are higher risk
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-[16px] border border-apple-blue/15 bg-white px-4 py-4">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-secondary">
            Basic logic
          </p>
          <p className="mt-2 text-[16px] font-semibold text-ink">
            Sicker patient → higher risk score → higher reimbursement
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
            The goal is to prevent hospitals and insurers from avoiding medically complex or
            disadvantaged patients.
          </p>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Card className="p-6">
          <h3 className="text-[21px] font-semibold text-ink">Distortion risk</h3>
          <div className="mt-4 rounded-[16px] border border-black/[0.08] bg-white p-4">
            <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
              Better coding → higher documented risk → higher reimbursement — without necessarily
              improving actual health.
            </p>
          </div>

          <h3 className="mt-6 text-[21px] font-semibold text-ink">How it is supposed to work</h3>
          <div className="mt-4 rounded-[16px] border border-apple-blue/15 bg-gradient-to-br from-white to-surface/60 p-4">
            <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
              Sicker patient → higher risk score → higher expected cost → higher reimbursement
            </p>
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
            When risk scores reflect billing strategy more than true need, the mechanism meant to
            protect disadvantaged patients instead rewards plans for avoiding them.
          </p>
        </Card>
      </div>
    </Section>
  );
}
