import React from "react";
import clsx from "clsx";

export default function Card(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "group relative transform-gpu overflow-hidden rounded-[20px] border border-black/[0.08] bg-white/95 shadow-apple backdrop-blur-sm transition-all duration-500 ease-out",
        "before:pointer-events-none before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:opacity-0 before:transition before:duration-700 hover:before:translate-x-full hover:before:opacity-100",
        "hover:-translate-y-1.5 hover:border-apple-blue/20 hover:shadow-glow",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
