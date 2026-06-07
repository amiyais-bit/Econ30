import React from "react";
import Reveal from "./Reveal";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative scroll-mt-20 border-b border-black/[0.06] bg-gradient-to-b from-paper/75 to-surface/50 py-14 sm:py-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-6">
        <Reveal>
          <div className="max-w-2xl space-y-4 text-[17px] leading-[1.5] text-ink/85 sm:text-[18px]">
            <p>
              Healthcare already accounts for roughly one-sixth of the U.S. economy — yet
              outcomes remain deeply unequal across income, race, and geography.
            </p>
            <p>
              Value-based care (VBC) emerged as a reform response: pay providers for quality and
              outcomes, not just volume. The promise is better health at lower cost.
            </p>
            <p>
              This project asks a harder question:{" "}
              <span className="font-semibold text-ink">
                does VBC reduce healthcare inequality, or mainly improve average outcomes?
              </span>
            </p>
          </div>

          <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-secondary">
            Scroll to follow the argument →
          </p>
        </Reveal>
      </div>
    </section>
  );
}
