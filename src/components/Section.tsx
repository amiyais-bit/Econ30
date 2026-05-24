import React from "react";
import clsx from "clsx";
import Reveal from "./Reveal";

export default function Section(props: {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "surface" | "emphasis";
  chapter?: string;
  prominent?: boolean;
  children: React.ReactNode;
}) {
  const bg =
    props.tone === "surface"
      ? "bg-surface/90"
      : props.tone === "emphasis"
        ? "bg-gradient-to-b from-apple-blue/[0.07] via-surface/95 to-paper/90"
        : "bg-paper/80";

  return (
    <section
      id={props.id}
      className={clsx(
        "relative scroll-mt-20 overflow-hidden border-t border-black/[0.06] backdrop-blur-[2px]",
        bg,
        props.prominent ? "py-20 sm:py-28" : "py-16 sm:py-20"
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-apple-blue/35 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-6">
        <Reveal>
          <header className={clsx("mb-10", props.prominent ? "sm:mb-14" : "sm:mb-12")}>
            {props.chapter ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apple-blue/80">
                {props.chapter}
              </p>
            ) : (
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-apple-blue/90">
                ECON 30 capstone
              </p>
            )}
            <h2
              className={clsx(
                "dramatic-heading mt-3 font-semibold leading-[1.08] tracking-tight",
                props.prominent
                  ? "text-[36px] sm:text-[48px] lg:text-[52px]"
                  : "text-[32px] sm:text-[40px]"
              )}
            >
              {props.title}
            </h2>
            {props.subtitle ? (
              <p
                className={clsx(
                  "mt-4 max-w-3xl leading-[1.47] text-ink-secondary",
                  props.prominent ? "text-[18px] sm:text-[20px]" : "text-[17px] sm:text-[19px] sm:leading-[1.42]"
                )}
              >
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
