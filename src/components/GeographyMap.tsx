import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  type RsmGeography,
} from "react-simple-maps";
import Section from "./Section";
import Card from "./Card";
import { mapData, MapRow } from "../data/mapData";

type Metric = "vbcPenetration" | "readmissionRate" | "povertyRate";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const metricMeta: Record<
  Metric,
  { label: string; format: (n: number) => string; legend: string }
> = {
  vbcPenetration: {
    label: "VBC penetration",
    format: (n) => `${n.toFixed(0)}%`,
    legend: "Higher = more VBC presence",
  },
  readmissionRate: {
    label: "Readmission rate",
    format: (n) => `${n.toFixed(1)}%`,
    legend: "Higher = worse outcomes",
  },
  povertyRate: {
    label: "Poverty rate",
    format: (n) => `${n.toFixed(1)}%`,
    legend: "Higher = more poverty",
  },
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function colorScale(value: number | undefined, metric: Metric): string {
  if (value === undefined) return "rgba(15, 23, 42, 0.06)";
  const ranges: Record<Metric, [number, number]> = {
    vbcPenetration: [10, 55],
    readmissionRate: [12, 20],
    povertyRate: [8, 20],
  };
  const [min, max] = ranges[metric];
  const t = clamp01((value - min) / (max - min));
  // light to darker violet
  const r = 138;
  const g = 92;
  const b = 246;
  const alpha = 0.1 + t * 0.55;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const stateIdToCode: Record<string, string> = {
  // FIPS → state postal code (subset ok; unmapped will just show no-data)
  "06": "CA",
  "12": "FL",
  "36": "NY",
  "48": "TX",
};

export default function GeographyMap() {
  const [metric, setMetric] = useState<Metric>("vbcPenetration");
  const [tooltip, setTooltip] = useState<{
    name: string;
    code?: string;
    row?: MapRow;
    x: number;
    y: number;
  } | null>(null);

  const byCode = useMemo(() => {
    const m = new Map<string, MapRow>();
    mapData.forEach((d) => m.set(d.state, d));
    return m;
  }, []);

  const meta = metricMeta[metric];

  return (
    <Section
      id="geography"
      title="Geographic Inequality"
      subtitle="The geography of reform does not perfectly match the geography of need. Use the buttons to recolor the map."
    >
      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Map
            </p>
            <h3 className="mt-2 text-xl font-extrabold">
              Geography of Value-Based Care and Healthcare Inequality
            </h3>
            <p className="mt-1 text-sm text-slate-700">
              {meta.legend}. Placeholder state-level values (CA, TX, NY, FL).
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["vbcPenetration", "readmissionRate", "povertyRate"] as Metric[]).map(
              (m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMetric(m)}
                  className={[
                    "rounded-xl border px-3 py-2 text-sm font-bold transition",
                    metric === m
                      ? "border-violet-300 bg-violet-600 text-white"
                      : "border-slate-200 bg-white/80 text-slate-700 hover:bg-white",
                  ].join(" ")}
                >
                  {metricMeta[m].label}
                </button>
              )
            )}
          </div>
        </div>

        <div className="relative mt-5">
          {tooltip ? (
            <div
              className="pointer-events-none absolute z-10 w-[240px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-3 text-xs shadow-soft"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              <p className="text-sm font-extrabold text-slate-900">
                {tooltip.name}{" "}
                {tooltip.code ? (
                  <span className="font-semibold text-slate-500">({tooltip.code})</span>
                ) : null}
              </p>
              {tooltip.row ? (
                <div className="mt-2 grid gap-1 text-slate-700">
                  <p>
                    <span className="font-semibold">VBC penetration:</span>{" "}
                    {tooltip.row.vbcPenetration.toFixed(0)}%
                  </p>
                  <p>
                    <span className="font-semibold">Readmission rate:</span>{" "}
                    {tooltip.row.readmissionRate.toFixed(1)}%
                  </p>
                  <p>
                    <span className="font-semibold">Poverty rate:</span>{" "}
                    {tooltip.row.povertyRate.toFixed(1)}%
                  </p>
                </div>
              ) : (
                <p className="mt-2 text-slate-600">No placeholder data for this state.</p>
              )}
            </div>
          ) : null}

          <div className="rounded-2xl border border-slate-200 bg-white/60 p-3">
            <ComposableMap
              projection="geoAlbersUsa"
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: RsmGeography[] }) =>
                  geographies.map((geo: RsmGeography) => {
                    const id = (geo.id ?? "").toString().padStart(2, "0");
                    const code = stateIdToCode[id];
                    const row = code ? byCode.get(code) : undefined;
                    const value = row ? row[metric] : undefined;
                    const fill = colorScale(value, metric);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fill}
                        stroke="rgba(17, 18, 22, 0.2)"
                        strokeWidth={0.6}
                        onMouseMove={(evt: React.MouseEvent<SVGPathElement>) => {
                          const rect = (evt.currentTarget.ownerSVGElement as SVGSVGElement | null)?.getBoundingClientRect();
                          const x = rect ? evt.clientX - rect.left : evt.clientX;
                          const y = rect ? evt.clientY - rect.top : evt.clientY;
                          setTooltip({
                            name: geo.properties?.name ?? "State",
                            code,
                            row,
                            x,
                            y,
                          });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            outline: "none",
                            fill: "rgba(138, 92, 246, 0.55)",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>

        <p className="mt-5 text-sm text-slate-700">
          If VBC is concentrated in already-resourced regions, then reform may not
          reach the patients and places with the greatest need.
        </p>
      </Card>
    </Section>
  );
}

