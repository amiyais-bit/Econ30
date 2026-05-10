import React from "react";
import clsx from "clsx";

export default function Card(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-[20px] border border-black/[0.08] bg-white shadow-apple",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
