import React from "react";
import Reveal from "./Reveal";
import ThesisBox from "./ThesisBox";
import HealthcareGdpPie from "./HealthcareGdpPie";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/[0.06] bg-paper pb-20 pt-16 sm:pb-24 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src="/images/hero-care.png"
          alt=""
          className="absolute inset-0 h-full w-full -scale-x-100 scale-105 object-cover object-[70%_35%] blur-[2px] sm:blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/92 via-paper/70 to-paper/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper via-paper/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
          <Reveal>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-apple-blue">
                ECON 30 · Interactive policy essay
              </p>
              <p className="mt-2 text-[15px] font-medium tracking-tight text-ink sm:text-[16px]">
                By <span className="font-semibold text-ink">Amiya Stroumza</span>
              </p>
              <h1 className="dramatic-heading mt-5 text-[42px] font-bold leading-[1.04] sm:text-[52px] lg:text-[62px]">
                Value-Based Care Promises Better Outcomes — But Better for Whom?
              </h1>

              <div className="mt-8 max-w-2xl space-y-4 text-[17px] leading-[1.5] text-ink/85 sm:text-[18px]">
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
            </div>
          </Reveal>

          <Reveal delayMs={140}>
            <HealthcareGdpPie />
            <ThesisBox label="Core thesis" className="mt-6">
              <p className="text-[16px] leading-relaxed sm:text-[17px]">
                Value-based care may improve average healthcare outcomes, but that does{" "}
                <span className="font-semibold text-ink">not necessarily</span> mean it reduces
                healthcare inequality.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary">
                Payment reform can lift the mean while leaving disadvantaged patients behind — unless
                equity is built into the design.
              </p>
            </ThesisBox>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
