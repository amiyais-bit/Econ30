import React from "react";
import clsx from "clsx";
import Reveal from "./Reveal";

export default function PullQuote(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <blockquote
        className={clsx(
          "relative border-l-[3px] border-apple-blue/70 bg-gradient-to-r from-apple-blue/[0.06] to-transparent py-3 pl-5 font-display text-[19px] font-semibold leading-snug tracking-tight text-ink sm:text-[22px] sm:leading-[1.35]",
          props.className
        )}
      >
        {props.children}
      </blockquote>
    </Reveal>
  );
}
