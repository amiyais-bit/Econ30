import React, { useMemo, useState } from "react";
import Card from "./Card";
import Reveal from "./Reveal";

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

  const cardBase =
    "text-left rounded-[20px] border p-6 shadow-apple transition-all duration-300 ease-out transform-gpu";
  const cardIdle =
    "border-black/[0.1] bg-white/85 backdrop-blur-md hover:-translate-y-1 hover:border-apple-blue/25 hover:shadow-apple-md";
  const cardActive =
    "-translate-y-0.5 scale-[1.02] border-apple-blue/45 bg-white shadow-glow ring-2 ring-apple-blue/90 ring-offset-4 ring-offset-paper/80";

  return (
    <section className="relative overflow-hidden border-b border-black/[0.06] bg-paper/75 pb-16 pt-14 backdrop-blur-[1px] sm:pb-20 sm:pt-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[18%] -top-[40%] h-[min(92vw,560px)] w-[min(92vw,560px)] rounded-full bg-apple-blue/30 blur-[100px] animate-pulse-slow motion-reduce:animate-none motion-reduce:opacity-40" />
        <div className="absolute -right-[12%] top-[15%] h-[min(78vw,480px)] w-[min(78vw,480px)] rounded-full bg-[#10b981]/25 blur-[110px] animate-pulse-slow motion-reduce:animate-none motion-reduce:opacity-35 [animation-delay:1.25s]" />
        <div className="absolute bottom-[-25%] left-[20%] h-[400px] w-[400px] rounded-full bg-apple-blue/18 blur-[90px] animate-float opacity-90 motion-reduce:animate-none motion-reduce:opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[min(120vw,900px)] w-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-transparent via-apple-blue/[0.07] to-[#10b981]/[0.08] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-14">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-apple-blue">
                ECON 30 capstone project
              </p>
              <p className="mt-2 text-[15px] font-medium tracking-tight text-ink sm:text-[16px]">
                By <span className="font-semibold text-ink">Amiya Stroumza</span>
              </p>
              <h1 className="dramatic-heading mt-4 text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-[48px] lg:text-[58px]">
                Value-Based Care Promises Better Outcomes — But Better for Whom?
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.47] text-ink/85 sm:text-[19px] sm:leading-[1.42]">
                The U.S. healthcare system is shifting away from fee-for-service and toward
                value-based care. This project asks whether that shift reduces healthcare
                inequality or simply improves average outcomes.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSelected("ffs")}
                  className={[cardBase, selected === "ffs" ? cardActive : cardIdle].join(" ")}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
                    Payment model
                  </p>
                  <h3 className="mt-2 text-[21px] font-semibold text-ink">Fee-for-Service</h3>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-[14px] leading-relaxed text-ink-secondary">
                    <li>Paid per visit, test, or procedure</li>
                    <li>Incentive: deliver more services</li>
                  </ul>
                </button>

                <button
                  type="button"
                  onClick={() => setSelected("vbc")}
                  className={[cardBase, selected === "vbc" ? cardActive : cardIdle].join(" ")}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
                    Payment model
                  </p>
                  <h3 className="mt-2 text-[21px] font-semibold text-ink">Value-Based Care</h3>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-[14px] leading-relaxed text-ink-secondary">
                    <li>Paid on quality, outcomes, and cost control</li>
                    <li>Incentive: keep patients healthier</li>
                  </ul>
                </button>
              </div>

              <Card className="mt-6 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
                  {active.title} — what it rewards
                </p>
                <p className="mt-2 bg-gradient-to-r from-ink to-apple-blue bg-clip-text text-[21px] font-semibold text-transparent">
                  {active.incentive}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                  {active.detail}
                </p>
              </Card>
            </div>
          </Reveal>

          <Reveal delayMs={140}>
            <Card className="border-apple-blue/15 p-6 shadow-glow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
                Core thesis
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                Value-based care aims to reward better outcomes rather than more services, but its
                equity impact is mixed: it may improve average outcomes while still leaving behind
                lower-income and higher-risk patients.
              </p>
              <div className="mt-6 grid gap-3 text-[14px]">
                <div className="rounded-[14px] border border-apple-blue/15 bg-gradient-to-br from-surface/90 to-white/80 p-4 shadow-apple transition duration-300 hover:border-apple-blue/30">
                  <p className="font-semibold text-ink">Key idea</p>
                  <p className="mt-1 text-ink-secondary">
                    <span className="font-semibold text-ink">Averages</span> can improve even if{" "}
                    <span className="font-semibold text-ink">gaps</span> remain large.
                  </p>
                </div>
                <div className="rounded-[14px] border border-black/[0.08] bg-surface/80 p-4 transition duration-300 hover:border-apple-blue/20">
                  <p className="font-semibold text-ink">Data note</p>
                  <p className="mt-1 text-ink-secondary">
                    Placeholder data for now — structured so you can plug in CMS or county-level
                    series later.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
