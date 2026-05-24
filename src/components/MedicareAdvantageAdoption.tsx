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
import ThesisBox from "./ThesisBox";
import { drivingFactors, maShareByYear } from "../data/medicareAdvantageAdoptionData";

const gridStroke = "rgba(29, 29, 31, 0.12)";

export default function MedicareAdvantageAdoption() {
  return (
    <Section
      id="adoption"
      chapter="Part IV · Where VBC lives in practice"
      title="Medicare Advantage Adoption"
      subtitle="Medicare Advantage operationalizes many of the mechanisms central to value-based care, including capitation, risk adjustment, and quality-linked reimbursement."
    >
      <ThesisBox label="Connection to the thesis" className="mb-6">
        MA is not the only VBC setting, but it is the largest real-world test of whether bundled
        incentives can improve outcomes at scale — and for whom those improvements accrue.
      </ThesisBox>

      <Card className="mb-6 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
          Medicare vs. Medicaid
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
          <span className="font-semibold text-ink">Medicare Advantage</span> is optional private
          coverage for Medicare beneficiaries.{" "}
          <span className="font-semibold text-ink">Medicaid</span> is a separate program for many
          low-income Americans. This section focuses on MA because it sits at the center of Medicare
          payment reform — not state Medicaid expansion.
        </p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Card className="p-5">
          <h3 className="text-[21px] font-semibold text-ink">
            Share of beneficiaries in Medicare Advantage
          </h3>
          <div className="mt-5 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={maShareByYear} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} domain={[0, 60]} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  formatter={(value: number) => [`${value.toFixed(1)}%`, "MA share"]}
                  labelFormatter={(y) => `Year ${y}`}
                />
                <Line
                  type="monotone"
                  dataKey="share"
                  stroke="#059669"
                  strokeWidth={2.5}
                  dot={{ fill: "#059669", strokeWidth: 0, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="text-[21px] font-semibold text-ink">What drives enrollment growth?</h3>
          <div className="mt-5 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={drivingFactors} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} horizontal={false} />
                <XAxis type="number" domain={[0, 0.28]} tickFormatter={(v) => `${Math.round(v * 100)}%`} />
                <YAxis type="category" dataKey="label" width={168} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value: number) => [`${(value * 100).toFixed(0)}%`, "Emphasis"]} />
                <Bar dataKey="weight" fill="#059669" radius={[0, 8, 8, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </Section>
  );
}
