import React from "react";

export default function Section(props: {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "surface";
  children: React.ReactNode;
}) {
  const bg = props.tone === "surface" ? "bg-surface" : "bg-paper";
  return (
    <section
      id={props.id}
      className={`scroll-mt-20 border-t border-black/[0.06] ${bg} py-16 sm:py-20`}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-6">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-ink-secondary">
            ECON 30 capstone
          </p>
          <h2 className="mt-2 text-[32px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[40px]">
            {props.title}
          </h2>
          {props.subtitle ? (
            <p className="mt-4 max-w-3xl text-[17px] leading-[1.47] text-ink-secondary sm:text-[19px] sm:leading-[1.42]">
              {props.subtitle}
            </p>
          ) : null}
        </header>
        {props.children}
      </div>
    </section>
  );
}
