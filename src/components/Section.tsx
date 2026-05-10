import React from "react";

export default function Section(props: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={props.id} className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <header className="mb-7 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-700/80">
            ECON 30 capstone
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {props.title}
          </h2>
          {props.subtitle ? (
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {props.subtitle}
            </p>
          ) : null}
        </header>
        {props.children}
      </div>
    </section>
  );
}

