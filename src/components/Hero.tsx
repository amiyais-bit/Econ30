import React from "react";
import Reveal from "./Reveal";
import ThesisBox from "./ThesisBox";
import HealthcareGdpPie from "./HealthcareGdpPie";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/[0.06] bg-paper/75 pb-20 pt-16 backdrop-blur-[1px] sm:pb-24 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[18%] -top-[40%] h-[min(92vw,560px)] w-[min(92vw,560px)] rounded-full bg-apple-blue/30 blur-[100px] animate-pulse-slow motion-reduce:animate-none motion-reduce:opacity-40" />
        <div className="absolute -right-[12%] top-[15%] h-[min(78vw,480px)] w-[min(78vw,480px)] rounded-full bg-[#5856d6]/25 blur-[110px] animate-pulse-slow motion-reduce:animate-none motion-reduce:opacity-35 [animation-delay:1.25s]" />
        <div className="absolute bottom-[-25%] left-[20%] h-[400px] w-[400px] rounded-full bg-apple-blue/18 blur-[90px] animate-float opacity-90 motion-reduce:animate-none motion-reduce:opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-apple-blue">
                ECON 30 · Interactive policy essay
              </p>
              <p className="mt-2 text-[15px] font-medium tracking-tight text-ink sm:text-[16px]">
                By <span className="font-semibold text-ink">Amiya Stroumza</span>
              </p>
              <h1 className="dramatic-heading mt-5 text-[42px] font-semibold leading-[1.04] tracking-tight sm:text-[52px] lg:text-[62px]">
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
