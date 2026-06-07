import React from "react";
import clsx from "clsx";

export default function ThesisBox(props: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-[18px] border border-apple-blue/30 bg-gradient-to-br from-white via-white to-accent/[0.08] p-5 shadow-glow-sm sm:p-6",
        props.className
      )}
    >
      {props.label ? (
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-apple-blue">
          {props.label}
        </p>
      ) : null}
      <div className={clsx("text-[15px] leading-relaxed text-ink sm:text-[16px]", props.label && "mt-3")}>
        {props.children}
      </div>
    </div>
  );
}
