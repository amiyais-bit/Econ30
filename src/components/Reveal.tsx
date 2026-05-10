import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useInViewOnce } from "../hooks/useInViewOnce";

export default function Reveal(props: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const [ref, visible] = useInViewOnce<HTMLDivElement>();
  const [reduceMotion, setReduceMotion] = useState(false);
  const delayMs = props.delayMs ?? 0;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const show = reduceMotion || visible;

  return (
    <div
      ref={ref}
      className={clsx(
        reduceMotion
          ? ""
          : "transform-gpu transition-[opacity,transform,filter] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]",
        !reduceMotion && (show ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-[3px]"),
        props.className
      )}
      style={reduceMotion ? undefined : { transitionDelay: `${delayMs}ms` }}
    >
      {props.children}
    </div>
  );
}
