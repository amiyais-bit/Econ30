import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Card from "./Card";
import {
  healthcareGdpSlices,
  healthcareShareOfGdp,
  HEALTHCARE_GDP_SOURCE,
  HEALTHCARE_GDP_SOURCE_URL,
} from "../data/healthcareGdpData";

function fmtPercent(value: number) {
  return value < 1 ? value.toFixed(2) : value.toFixed(1);
}

export default function HealthcareGdpPie() {
  return (
    <Card className="p-5 sm:p-6">
      <h2 className="text-center text-[15px] font-semibold leading-snug text-ink sm:text-[16px]">
        Healthcare spending as a share of U.S. GDP, 2022
      </h2>

      <div className="relative mx-auto mt-4 h-[min(72vw,280px)] max-h-[280px] w-full max-w-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={healthcareGdpSlices}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="52%"
              outerRadius="88%"
              paddingAngle={1.5}
              stroke="#fff"
              strokeWidth={2}
            >
              {healthcareGdpSlices.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, _name, item) => {
                const payload = item.payload as { name: string };
                return [`${fmtPercent(value)}% of GDP`, payload.name];
              }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.08)",
                fontSize: 13,
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center"
          aria-hidden
        >
          <span className="text-[28px] font-semibold tracking-tight text-apple-blue sm:text-[32px]">
            {fmtPercent(healthcareShareOfGdp)}%
          </span>
          <span className="mt-0.5 max-w-[7rem] text-[11px] font-medium leading-tight text-ink-secondary">
            of GDP on health
          </span>
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-[13px]">
        {healthcareGdpSlices.map((slice) => (
          <li key={slice.name} className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2 text-ink-secondary">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: slice.fill }}
                aria-hidden
              />
              <span className="truncate">{slice.name}</span>
            </span>
            <span
              className={[
                "shrink-0 font-semibold tabular-nums",
                slice.group === "healthcare" ? "text-apple-blue" : "text-ink",
              ].join(" ")}
            >
              {fmtPercent(slice.value)}%
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-secondary">
        Source:{" "}
        <a
          href={HEALTHCARE_GDP_SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-apple-blue hover:underline"
        >
          {HEALTHCARE_GDP_SOURCE}
        </a>
      </p>
    </Card>
  );
}
