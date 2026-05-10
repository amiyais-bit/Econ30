import React, { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./Card";

type Model = "ffs" | "vbc";

function Step(props: { label: string; active: boolean }) {
  return (
    <div
      className={[
        "rounded-[14px] border px-4 py-3 text-sm shadow-apple transition",
        props.active
          ? "border-black/[0.08] bg-white shadow-apple-md"
          : "border-black/[0.06] bg-white/50 opacity-55",
      ].join(" ")}
    >
      <p className="font-semibold text-ink">{props.label}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-ink-secondary">
      <span className="text-xl">→</span>
    </div>
  );
}

export default function PaymentModelDiagram() {
  const [selected, setSelected] = useState<Model>("vbc");

  const subtitle = useMemo(
    () =>
      selected === "ffs"
        ? "Fee-for-service revenue increases with the number of services delivered."
        : "Value-based care rewards quality, prevention, and cost control.",
    [selected]
  );

  return (
    <Section
      id="payment-model"
      title="What Is Value-Based Care?"
      subtitle="VBC changes what providers are paid to optimize. Use the toggle to highlight one model."
    >
      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              Payment model
            </p>
            <p className="mt-1 text-[15px] text-ink-secondary">{subtitle}</p>
          </div>

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

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-[19px] font-semibold text-ink">Fee-for-Service flow</h3>
            <div className="mt-3 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
              <Step
                label="Patient gets sick"
                active={selected === "ffs"}
              />
              <Arrow />
              <Step
                label="Provider delivers service"
                active={selected === "ffs"}
              />
              <Arrow />
              <Step
                label="Paid per service"
                active={selected === "ffs"}
              />
              <Arrow />
              <Step
                label="More volume = more revenue"
                active={selected === "ffs"}
              />
            </div>
          </div>

          <div>
            <h3 className="text-[19px] font-semibold text-ink">Value-Based Care flow</h3>
            <div className="mt-3 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
              <Step
                label="Population assigned"
                active={selected === "vbc"}
              />
              <Arrow />
              <Step
                label="Manage health over time"
                active={selected === "vbc"}
              />
              <Arrow />
              <Step
                label="Evaluated on quality/cost"
                active={selected === "vbc"}
              />
              <Arrow />
              <Step
                label="Better outcomes → higher payment"
                active={selected === "vbc"}
              />
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

