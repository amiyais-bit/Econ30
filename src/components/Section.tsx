import React from "react";
import Reveal from "./Reveal";

export default function Section(props: {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "surface";
  children: React.ReactNode;
}) {
  const bg = props.tone === "surface" ? "bg-surface/90" : "bg-paper/80";
  return (
    <section
      id={props.id}
      className={`relative scroll-mt-20 overflow-hidden border-t border-black/[0.06] py-16 backdrop-blur-[2px] sm:py-20 ${bg}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-apple-blue/35 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-6">
        <Reveal>
          <header className="mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-apple-blue/90">
              ECON 30 capstone
            </p>
            <h2 className="dramatic-heading mt-3 text-[32px] font-semibold leading-[1.08] tracking-tight sm:text-[40px]">
              {props.title}
            </h2>
            {props.subtitle ? (
              <p className="mt-4 max-w-3xl text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
                {props.subtitle}
              </p>
            ) : null}
          </header>
        </Reveal>
        <Reveal delayMs={100}>{props.children}</Reveal>
      </div>
    </section>
  );
}
