import React, { useMemo, useState } from "react";
import Card from "./Card";

type Mode = "ffs" | "vbc";

const copy: Record<
  Mode,
  { title: string; bullets: string[]; incentive: string; detail: string }
> = {
  ffs: {
    title: "Fee-for-Service",
    bullets: ["Paid per visit, test, or procedure.", "Incentive: deliver more services."],
    incentive: "Volume is revenue.",
    detail:
      "Under fee-for-service, providers are reimbursed for each unit of care delivered. This can increase access to services, but it can also reward quantity over outcomes.",
  },
  vbc: {
    title: "Value-Based Care",
    bullets: [
      "Paid based on quality, outcomes, and cost control.",
      "Incentive: keep patients healthier.",
    ],
    incentive: "Outcomes are revenue.",
    detail:
      "Under value-based care, organizations are rewarded for improving quality and managing total costs. The equity question is whether these incentives lift outcomes for higher-risk patients too.",
  },
};

export default function Hero() {
  const [selected, setSelected] = useState<Mode>("vbc");
  const active = useMemo(() => copy[selected], [selected]);

  return (
    <section className="pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-700/80">
              ECON 30 capstone project
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Value-Based Care Promises Better Outcomes — But Better for Whom?
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              The U.S. healthcare system is shifting away from fee-for-service and
              toward value-based care. This project asks whether that shift reduces
              healthcare inequality or simply improves average outcomes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setSelected("ffs")}
                className={[
                  "text-left rounded-2xl border p-5 shadow-soft transition",
                  selected === "ffs"
                    ? "border-violet-300 bg-white"
                    : "border-slate-200 bg-white/70 hover:bg-white",
                ].join(" ")}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Payment model
                </p>
                <h3 className="mt-2 text-xl font-extrabold">Fee-for-Service</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                  <li>Paid per visit, test, or procedure</li>
                  <li>Incentive: deliver more services</li>
                </ul>
              </button>

              <button
                type="button"
                onClick={() => setSelected("vbc")}
                className={[
                  "text-left rounded-2xl border p-5 shadow-soft transition",
                  selected === "vbc"
                    ? "border-violet-300 bg-white"
                    : "border-slate-200 bg-white/70 hover:bg-white",
                ].join(" ")}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Payment model
                </p>
                <h3 className="mt-2 text-xl font-extrabold">Value-Based Care</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                  <li>Paid on quality, outcomes, and cost control</li>
                  <li>Incentive: keep patients healthier</li>
                </ul>
              </button>
            </div>

            <Card className="mt-5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {active.title} — what it rewards
              </p>
              <p className="mt-2 text-lg font-extrabold">{active.incentive}</p>
              <p className="mt-2 text-slate-700">{active.detail}</p>
            </Card>
          </div>

          <Card className="p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Core thesis
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Value-based care aims to reward better outcomes rather than more
              services, but its equity impact is mixed: it may improve average
              outcomes while still leaving behind lower-income and higher-risk
              patients.
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="font-bold">Key idea</p>
                <p className="text-slate-700">
                  <span className="font-semibold">Averages</span> can improve even
                  if <span className="font-semibold">gaps</span> remain large.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="font-bold">This site uses</p>
                <p className="text-slate-700">
                  Placeholder data now, structured so you can replace it with real
                  county/state/provider data later.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

