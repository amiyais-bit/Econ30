import React, { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./Card";

type Model = "ffs" | "vbc";

function Step(props: { label: string; active: boolean }) {
  return (
    <div
      className={[
        "rounded-2xl border px-4 py-3 text-sm shadow-sm transition",
        props.active
          ? "border-violet-300 bg-white"
          : "border-slate-200 bg-white/60 opacity-70",
      ].join(" ")}
    >
      <p className="font-semibold text-slate-800">{props.label}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-slate-400">
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Payment model
            </p>
            <p className="mt-1 text-sm text-slate-700">{subtitle}</p>
          </div>

          <div className="inline-flex rounded-2xl border border-slate-200 bg-white/80 p-1">
            <button
              type="button"
              onClick={() => setSelected("ffs")}
              className={[
                "rounded-xl px-4 py-2 text-sm font-bold transition",
                selected === "ffs"
                  ? "bg-violet-600 text-white"
                  : "text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              Fee-for-Service
            </button>
            <button
              type="button"
              onClick={() => setSelected("vbc")}
              className={[
                "rounded-xl px-4 py-2 text-sm font-bold transition",
                selected === "vbc"
                  ? "bg-violet-600 text-white"
                  : "text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              Value-Based Care
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-extrabold">Fee-for-Service flow</h3>
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
            <h3 className="text-lg font-extrabold">Value-Based Care flow</h3>
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

