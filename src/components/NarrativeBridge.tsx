import React from "react";
import Reveal from "./Reveal";

export default function NarrativeBridge(props: { children: React.ReactNode }) {
  return (
    <div className="relative border-y border-black/[0.05] bg-gradient-to-b from-surface/40 to-paper/60 py-10 sm:py-12">
      <Reveal>
        <p className="mx-auto max-w-2xl px-5 text-center text-[17px] leading-relaxed text-ink-secondary sm:px-6 sm:text-[18px]">
          {props.children}
        </p>
      </Reveal>
    </div>
  );
}
