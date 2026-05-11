import React from "react";
import Hero from "./components/Hero";
import BaselineInequality from "./components/BaselineInequality";
import PaymentModelDiagram from "./components/PaymentModelDiagram";
import MedicareAdvantageAdoption from "./components/MedicareAdvantageAdoption";
import DifferenceInDifferences from "./components/DifferenceInDifferences";
import EquityGap from "./components/EquityGap";
import GeographyMap from "./components/GeographyMap";
import RiskAdjustment from "./components/RiskAdjustment";
import Takeaways from "./components/Takeaways";
import Sources from "./components/Sources";

const nav = [
  { id: "baseline", label: "Baseline" },
  { id: "payment-model", label: "What is VBC?" },
  { id: "adoption", label: "MA adoption" },
  { id: "did", label: "Outcomes" },
  { id: "equity", label: "Equity" },
  { id: "geography", label: "Geography" },
  { id: "risk", label: "Risk adjustment" },
  { id: "takeaways", label: "Takeaways" },
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
              By Amiya Stroumza · ECON 30 · placeholder data
            </p>
          </div>

          <nav className="hidden gap-1 md:flex" aria-label="Page sections">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative rounded-full px-3 py-1.5 text-[12px] font-normal text-ink transition-all duration-300 after:absolute after:bottom-0.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-apple-blue after:transition-all after:duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:text-apple-blue hover:shadow-glow-sm hover:after:w-[65%]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <BaselineInequality />
        <PaymentModelDiagram />
        <MedicareAdvantageAdoption />
        <DifferenceInDifferences />
        <EquityGap />
        <GeographyMap />
        <RiskAdjustment />
        <Takeaways />
        <Sources />
      </main>

      <footer className="relative z-10 border-t border-black/[0.08] bg-surface/95 py-12 backdrop-blur-md">
        <div className="mx-auto w-full max-w-content px-5 sm:px-6">
          <p className="text-[12px] text-ink-secondary">
            Built for ECON 30. Figures use placeholder data for demonstration.{" "}
            <a href="#sources" className="font-medium text-apple-blue hover:underline">
              Sources
            </a>{" "}
            lists reference data systems and reports.
          </p>
          <p className="mt-2 text-[12px] text-ink-secondary">
            Local preview:{" "}
            <span className="font-mono text-[11px] text-ink/80">npm install</span> then{" "}
            <span className="font-mono text-[11px] text-ink/80">npm run dev</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
