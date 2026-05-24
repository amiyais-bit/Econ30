import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "./Card";
import Section from "./Section";
import { drivingFactors, maShareByYear } from "../data/medicareAdvantageAdoptionData";

const gridStroke = "rgba(29, 29, 31, 0.12)";

export default function MedicareAdvantageAdoption() {
  return (
    <Section
      id="adoption"
      title="Medicare Advantage Adoption"
      subtitle="Medicare Advantage (Part C) is the main setting where many Medicare beneficiaries encounter capitated plans, risk adjustment, and value-based incentives. Understanding adoption helps connect payment design to who is actually covered under those models."
    >
      <Card className="mb-6 border-apple-blue/20 bg-white p-5 shadow-apple">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
          Medicare vs. Medicaid
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
          <span className="font-semibold text-ink">Medicare Advantage</span> is optional private
          coverage for people on Medicare (typically 65+).{" "}
          <span className="font-semibold text-ink">Medicaid</span> is a separate program, financed
          jointly by states and the federal government, that covers many low-income people (and
          some “dual-eligible” people are in both). This page focuses on{" "}
          <span className="font-semibold text-ink">Medicare Advantage adoption</span> because it
          sits at the center of Medicare payment reform and the themes above — not state Medicaid
          expansion.
        </p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Card className="p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
            Placeholder chart
          </p>
          <h3 className="mt-2 text-[21px] font-semibold text-ink">
            Share of Medicare beneficiaries in Medicare Advantage
          </h3>
          <p className="mt-1 text-[15px] text-ink-secondary">
            Illustrative trend — swap in CMS enrollment files or KFF summaries for your paper.
          </p>
          <div className="mt-5 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={maShareByYear} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis
                  tick={{ fontSize: 12 }}
                  domain={[0, 60]}
                  tickFormatter={(v) => `${v}%`}
                  label={{
                    value: "Percent of beneficiaries",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "#86868b", fontSize: 11 },
                  }}
                />
                <Tooltip
                  formatter={(value: number) => [`${value.toFixed(1)}%`, "MA share"]}
                  labelFormatter={(y) => `Year ${y}`}
                  labelStyle={{ color: "#1d1d1f", fontWeight: 600 }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="share"
                  stroke="#059669"
                  strokeWidth={2.5}
                  dot={{ fill: "#059669", strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
            Driving factors
          </p>
          <h3 className="mt-2 text-[21px] font-semibold text-ink">
            What shapes enrollment growth?
          </h3>
          <p className="mt-1 text-[15px] text-ink-secondary">
            Relative emphasis for class discussion only — calibrate with literature or your own
            synthesis.
          </p>
          <div className="mt-5 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={drivingFactors}
                margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 0.28]}
                  tickFormatter={(v) => `${Math.round(v * 100)}%`}
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  type="category"
                  dataKey="label"
                  width={168}
                  tick={{ fontSize: 11 }}
                  interval={0}
                />
                <Tooltip
                  formatter={(value: number) => [
                    `${(value * 100).toFixed(0)}% illustrative weight`,
                    "Relative emphasis",
                  ]}
                  labelStyle={{ color: "#1d1d1f", fontWeight: 600 }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
                    maxWidth: 280,
                  }}
                />
                <Bar dataKey="weight" fill="#059669" radius={[0, 8, 8, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <p className="mt-6 text-[13px] leading-relaxed text-ink-secondary">
        <span className="font-semibold text-ink">Data note:</span> The series and factor weights
        above are illustrative. For published Medicare Advantage enrollment shares and context, use
        CMS enrollment files and syntheses such as KFF’s annual enrollment updates — see{" "}
        <a href="#sources" className="font-medium text-apple-blue hover:underline">
          Sources
        </a>
        .
      </p>
    </Section>
  );
}
