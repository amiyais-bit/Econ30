import React from "react";
import clsx from "clsx";

export default function Card(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-200 bg-white/90 shadow-soft backdrop-blur",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

