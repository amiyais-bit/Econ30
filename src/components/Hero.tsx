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

  const cardBase =
    "text-left rounded-[20px] border p-6 shadow-apple transition duration-200 ease-out";
  const cardIdle = "border-black/[0.08] bg-white hover:shadow-apple-md";
  const cardActive =
    "border-transparent bg-white shadow-apple-md ring-2 ring-apple-blue ring-offset-2 ring-offset-paper";

  return (
    <section className="border-b border-black/[0.06] bg-paper pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="mx-auto w-full max-w-content px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-14">
          <div>
            <p className="text-xs font-semibold tracking-wide text-ink-secondary">
              ECON 30 capstone project
            </p>
            <h1 className="mt-3 text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[48px] lg:text-[56px]">
              Value-Based Care Promises Better Outcomes — But Better for Whom?
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
              The U.S. healthcare system is shifting away from fee-for-service and
              toward value-based care. This project asks whether that shift reduces
              healthcare inequality or simply improves average outcomes.
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
              <p className="mt-2 text-[21px] font-semibold text-ink">{active.incentive}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                {active.detail}
              </p>
            </Card>
          </div>

          <Card className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              Core thesis
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
              Value-based care aims to reward better outcomes rather than more
              services, but its equity impact is mixed: it may improve average
              outcomes while still leaving behind lower-income and higher-risk
              patients.
            </p>
            <div className="mt-6 grid gap-3 text-[14px]">
              <div className="rounded-[14px] border border-black/[0.06] bg-surface/80 p-4">
                <p className="font-semibold text-ink">Key idea</p>
                <p className="mt-1 text-ink-secondary">
                  <span className="font-semibold text-ink">Averages</span> can improve even
                  if <span className="font-semibold text-ink">gaps</span> remain large.
                </p>
              </div>
              <div className="rounded-[14px] border border-black/[0.06] bg-surface/80 p-4">
                <p className="font-semibold text-ink">Data note</p>
                <p className="mt-1 text-ink-secondary">
                  Placeholder data for now — structured so you can plug in CMS or
                  county-level series later.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
