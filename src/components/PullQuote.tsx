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
          "relative border-l-[3px] border-apple-blue/60 py-1 pl-5 text-[19px] font-medium leading-snug tracking-tight text-ink sm:text-[22px] sm:leading-[1.35]",
          props.className
        )}
      >
        {props.children}
      </blockquote>
    </Reveal>
  );
}
