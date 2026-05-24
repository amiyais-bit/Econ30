import React, { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./Card";
import ThesisBox from "./ThesisBox";

type Model = "ffs" | "vbc";

function Step(props: { label: string; active: boolean }) {
  return (
    <div
      className={[
        "rounded-[14px] border px-3 py-2.5 text-[13px] shadow-apple transition",
        props.active
          ? "border-apple-blue/25 bg-white shadow-apple-md"
          : "border-black/[0.06] bg-white/50 opacity-55",
      ].join(" ")}
    >
      <p className="font-semibold text-ink">{props.label}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-apple-blue">
      <span className="text-lg">→</span>
    </div>
  );
}

export default function PaymentModelDiagram() {
  const [selected, setSelected] = useState<Model>("vbc");

  const subtitle = useMemo(
    () =>
      selected === "ffs"
        ? "Fee-for-service pays for activity."
        : "Value-based care pays for results.",
    [selected]
  );

  return (
    <Section
      id="payment-model"
      chapter="Part III · The reform"
      title="What Is Value-Based Care?"
      subtitle="VBC shifts the payment logic from volume to outcomes — a direct response to the fee-for-service problems above."
    >
      <ThesisBox label="The incentive transition" className="mb-8 max-w-3xl">
        Fee-for-service → outcome-based reimbursement. Providers are evaluated on quality, prevention,
        and total cost — not just how many services they deliver.
      </ThesisBox>

      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] text-ink-secondary">{subtitle}</p>
          <div className="inline-flex rounded-full border border-black/[0.08] bg-surface/90 p-1">
            <button
              type="button"
              onClick={() => setSelected("ffs")}
              className={[
                "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                selected === "ffs"
                  ? "bg-apple-blue text-white"
                  : "text-ink hover:bg-black/[0.04]",
              ].join(" ")}
            >
              Fee-for-Service
            </button>
            <button
              type="button"
              onClick={() => setSelected("vbc")}
              className={[
                "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                selected === "vbc"
                  ? "bg-apple-blue text-white"
                  : "text-ink hover:bg-black/[0.04]",
              ].join(" ")}
            >
              Value-Based Care
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-[17px] font-semibold text-ink">Fee-for-service</h3>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Step label="Patient gets sick" active={selected === "ffs"} />
              <Arrow />
              <Step label="Deliver service" active={selected === "ffs"} />
              <Arrow />
              <Step label="Paid per unit" active={selected === "ffs"} />
              <Arrow />
              <Step label="More volume = more pay" active={selected === "ffs"} />
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold text-ink">Value-based care</h3>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Step label="Population assigned" active={selected === "vbc"} />
              <Arrow />
              <Step label="Manage health over time" active={selected === "vbc"} />
              <Arrow />
              <Step label="Quality & cost measured" active={selected === "vbc"} />
              <Arrow />
              <Step label="Better outcomes → higher pay" active={selected === "vbc"} />
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
