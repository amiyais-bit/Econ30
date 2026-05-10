import React from "react";
import Hero from "./components/Hero";
import UsHealthcareProblem from "./components/UsHealthcareProblem";
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
  { id: "problem", label: "The problem" },
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
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-20 border-b border-black/[0.08] bg-white/[0.72] backdrop-blur-xl backdrop-saturate-[180%] supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-[52px] w-full max-w-content items-center justify-between gap-4 px-5 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold tracking-tight text-ink">
              Value-based care & inequality
            </p>
            <p className="truncate text-[11px] text-ink-secondary">
              ECON 30 · placeholder data
            </p>
          </div>

          <nav className="hidden gap-1 md:flex" aria-label="Page sections">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-1.5 text-[12px] font-normal text-ink transition hover:bg-black/[0.04]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <UsHealthcareProblem />
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

      <footer className="border-t border-black/[0.08] bg-surface py-12">
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
