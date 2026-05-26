import React from "react";
import Hero from "./components/Hero";
import WhyReformNeeded from "./components/WhyReformNeeded";
import BaselineInequality from "./components/BaselineInequality";
import PaymentModelDiagram from "./components/PaymentModelDiagram";
import MedicareAdvantageAdoption from "./components/MedicareAdvantageAdoption";
import OutcomesAnalysis from "./components/OutcomesAnalysis";
import RiskAdjustment from "./components/RiskAdjustment";
import EquityGap from "./components/EquityGap";
import GeographyMap from "./components/GeographyMap";
import Takeaways from "./components/Takeaways";
import Sources from "./components/Sources";
import NarrativeBridge from "./components/NarrativeBridge";

const nav = [
  { id: "why-reform", label: "Why reform" },
  { id: "baseline", label: "Inequality" },
  { id: "payment-model", label: "What is VBC?" },
  { id: "adoption", label: "MA adoption" },
  { id: "did", label: "Outcomes" },
  { id: "risk", label: "Risk adjustment" },
  { id: "equity", label: "Equity" },
  { id: "geography", label: "Geography" },
  { id: "takeaways", label: "Conclusion" },
  { id: "sources", label: "Sources" },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <div className="ambient-page" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <header className="sticky top-0 z-20 border-b border-black/[0.08] bg-white/[0.65] shadow-apple-md backdrop-blur-2xl backdrop-saturate-[180%] supports-[backdrop-filter]:bg-white/55">
        <div className="mx-auto flex h-[52px] w-full max-w-content items-center justify-between gap-4 px-5 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold tracking-tight text-ink">
              Value-based care & inequality
            </p>
            <p className="truncate text-[11px] text-ink-secondary">
              By Amiya Stroumza · ECON 30
            </p>
          </div>

          <nav className="hidden gap-0.5 overflow-x-auto md:flex" aria-label="Page sections">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-normal text-ink transition-all duration-300 after:absolute after:bottom-0.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-apple-blue after:transition-all after:duration-300 hover:text-apple-blue hover:after:w-[65%] lg:px-3 lg:text-[12px]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <NarrativeBridge>
          The U.S. tried to fix a broken payment model. But fixing incentives is not the same as fixing
          inequality.
        </NarrativeBridge>
        <WhyReformNeeded />
        <NarrativeBridge>
          Reform entered a system where patients were already starting from unequal baselines.
        </NarrativeBridge>
        <BaselineInequality />
        <PaymentModelDiagram />
        <MedicareAdvantageAdoption />
        <NarrativeBridge>
          Better averages are encouraging — but they answer a different question than equity.
        </NarrativeBridge>
        <OutcomesAnalysis />
        <RiskAdjustment />
        <EquityGap />
        <GeographyMap />
        <Takeaways />
        <Sources />
      </main>

      <footer className="relative z-10 border-t border-black/[0.08] bg-surface/95 py-12 backdrop-blur-md">
        <div className="mx-auto w-full max-w-content px-5 sm:px-6">
          <p className="text-[12px] text-ink-secondary">
            Built for ECON 30. Geography, baseline inequality, health spending, and outcomes analysis use published data; other charts may be illustrative.{" "}
            <a href="#sources" className="font-medium text-apple-blue hover:underline">
              Sources
            </a>{" "}
            lists reference data systems and reports.
          </p>
        </div>
      </footer>
    </div>
  );
}
