import React from "react";
import Hero from "./components/Hero";
import BaselineInequality from "./components/BaselineInequality";
import PaymentModelDiagram from "./components/PaymentModelDiagram";
import DifferenceInDifferences from "./components/DifferenceInDifferences";
import EquityGap from "./components/EquityGap";
import GeographyMap from "./components/GeographyMap";
import RiskAdjustment from "./components/RiskAdjustment";
import Takeaways from "./components/Takeaways";

const nav = [
  { id: "baseline", label: "Baseline" },
  { id: "payment-model", label: "What is VBC?" },
  { id: "did", label: "Outcomes" },
  { id: "equity", label: "Equity" },
  { id: "geography", label: "Geography" },
  { id: "risk", label: "Risk adjustment" },
  { id: "takeaways", label: "Takeaways" },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-paper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(34,197,94,0.18),transparent_42%),radial-gradient(circle_at_78%_26%,rgba(16,185,129,0.14),transparent_44%),radial-gradient(circle_at_45%_92%,rgba(74,222,128,0.12),transparent_46%)]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-emerald-200/80 bg-paper/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold tracking-tight">
              Does Value-Based Care Reduce Inequality?
            </p>
            <p className="truncate text-xs text-slate-600">
              Interactive data story (placeholder data)
            </p>
          </div>

          <nav className="hidden gap-3 md:flex" aria-label="Page sections">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-white/70"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <BaselineInequality />
        <PaymentModelDiagram />
        <DifferenceInDifferences />
        <EquityGap />
        <GeographyMap />
        <RiskAdjustment />
        <Takeaways />
      </main>

      <footer className="border-t border-emerald-200/80 bg-paper/70 py-10">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <p className="text-sm text-slate-700">
            Built for ECON 30. Data shown are placeholders.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Next step: install npm, then run <span className="font-mono">npm install</span> and{" "}
            <span className="font-mono">npm run dev</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

