import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  type RsmGeography,
} from "react-simple-maps";
import Section from "./Section";
import Card from "./Card";
import { mapData, MapRow, POVERTY_NATIONAL_AVG, VBP_NATIONAL_AVG } from "../data/mapData";

type Metric = "vbpScore" | "povertyRate";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const metricMeta: Record<
  Metric,
  { label: string; format: (n: number) => string; legend: string; range: [number, number] }
> = {
  vbpScore: {
    label: "Hospital VBP score",
    format: (n) => n.toFixed(1),
    legend: "Higher = stronger hospital value-based purchasing performance (CMS TPS)",
    range: [14, 37],
  },
  povertyRate: {
    label: "Family poverty rate",
    format: (n) => `${n.toFixed(1)}%`,
    legend: "Higher = more families below poverty (2020–2024)",
    range: [4.5, 14.5],
  },
};

/** FIPS state code → postal abbreviation (includes DC). */
const stateIdToCode: Record<string, string> = {
  "01": "AL",
  "02": "AK",
  "04": "AZ",
  "05": "AR",
  "06": "CA",
  "08": "CO",
  "09": "CT",
  "10": "DE",
  "11": "DC",
  "12": "FL",
  "13": "GA",
  "15": "HI",
  "16": "ID",
  "17": "IL",
  "18": "IN",
  "19": "IA",
  "20": "KS",
  "21": "KY",
  "22": "LA",
  "23": "ME",
  "24": "MD",
  "25": "MA",
  "26": "MI",
  "27": "MN",
  "28": "MS",
  "29": "MO",
  "30": "MT",
  "31": "NE",
  "32": "NV",
  "33": "NH",
  "34": "NJ",
  "35": "NM",
  "36": "NY",
  "37": "NC",
  "38": "ND",
  "39": "OH",
  "40": "OK",
  "41": "OR",
  "42": "PA",
  "44": "RI",
  "45": "SC",
  "46": "SD",
  "47": "TN",
  "48": "TX",
  "49": "UT",
  "50": "VT",
  "51": "VA",
  "53": "WA",
  "54": "WV",
  "55": "WI",
  "56": "WY",
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function colorScale(value: number | undefined, metric: Metric): string {
  if (value === undefined) return "rgba(15, 23, 42, 0.06)";
  const [min, max] = metricMeta[metric].range;
  const t = clamp01((value - min) / (max - min));
  const r = 0;
  const g = 113;
  const b = 227;
  const alpha = 0.12 + t * 0.58;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function GeographyMap() {
  const [metric, setMetric] = useState<Metric>("vbpScore");
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
      chapter="Part VIII · Uneven diffusion"
      title="Where VBC Expands — and Where It Doesn't"
      subtitle="If VBC performance were evenly distributed, high-need states would score at or above average. The map shows the opposite."
    >
      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              Map · sourced data
            </p>
            <h3 className="mt-2 text-[21px] font-semibold text-ink">
              VBP performance vs. family poverty by state
            </h3>
            <p className="mt-1 text-[15px] text-ink-secondary">{meta.legend}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["vbpScore", "povertyRate"] as Metric[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMetric(m)}
                className={[
                  "rounded-xl border px-3 py-2 text-sm font-bold transition",
                  metric === m
                    ? "border-transparent bg-apple-blue text-white"
                    : "border-black/[0.08] bg-white text-ink hover:bg-surface",
                ].join(" ")}
              >
                {metricMeta[m].label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-5">
          {tooltip ? (
            <div
              className="pointer-events-none absolute z-10 w-[260px] -translate-x-1/2 rounded-[16px] border border-black/[0.08] bg-white/95 p-3 text-[12px] shadow-apple-md backdrop-blur-sm"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              <p className="text-[13px] font-semibold text-ink">
                {tooltip.name}{" "}
                {tooltip.code ? (
                  <span className="font-semibold text-ink-secondary">({tooltip.code})</span>
                ) : null}
              </p>
              {tooltip.row ? (
                <div className="mt-2 grid gap-1 text-ink-secondary">
                  {tooltip.row.vbpScore !== undefined ? (
                    <p>
                      <span className="font-semibold">Hospital VBP score:</span>{" "}
                      {tooltip.row.vbpScore.toFixed(2)}{" "}
                      <span className="text-ink-secondary/80">
                        (U.S. avg {VBP_NATIONAL_AVG})
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span className="font-semibold">Hospital VBP score:</span> not in source
                    </p>
                  )}
                  <p>
                    <span className="font-semibold">Family poverty:</span>{" "}
                    {tooltip.row.povertyRate.toFixed(1)}%{" "}
                    <span className="text-ink-secondary/80">
                      (U.S. avg {POVERTY_NATIONAL_AVG}%)
                    </span>
                  </p>
                </div>
              ) : (
                <p className="mt-2 text-ink-secondary">No data for this state.</p>
              )}
            </div>
          ) : null}

          <div className="rounded-[20px] border border-black/[0.08] bg-white p-3 shadow-apple">
            <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "auto" }}>
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: RsmGeography[] }) =>
                  geographies.map((geo: RsmGeography) => {
                    const id = (geo.id ?? "").toString().padStart(2, "0");
                    const code = stateIdToCode[id];
                    const row = code ? byCode.get(code) : undefined;
                    const value =
                      row && metric === "vbpScore" ? row.vbpScore : row?.povertyRate;
                    const fill = colorScale(value, metric);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fill}
                        stroke="rgba(17, 18, 22, 0.2)"
                        strokeWidth={0.6}
                        onMouseMove={(evt: React.MouseEvent<SVGPathElement>) => {
                          const rect = (
                            evt.currentTarget.ownerSVGElement as SVGSVGElement | null
                          )?.getBoundingClientRect();
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
                          hover: { outline: "none", fill: "rgba(0, 113, 227, 0.35)" },
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

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card className="border-apple-blue/15 p-4">
            <p className="text-[14px] leading-relaxed text-ink-secondary">
              <span className="font-semibold text-ink">VBP scores</span> reflect average Hospital
              Value-Based Purchasing total performance (CMS, via Definitive Healthcare, Oct 2024).
              Alaska ranks highest ({mapData.find((d) => d.state === "AK")?.vbpScore?.toFixed(1)}); West
              Virginia lowest (
              {mapData.find((d) => d.state === "WV")?.vbpScore?.toFixed(1)}). 22 states scored above
              the national average of {VBP_NATIONAL_AVG}.
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-[14px] leading-relaxed text-ink-secondary">
              <span className="font-semibold text-ink">Poverty rates</span> show families below
              poverty, 2020–2024 (HDPulse / NIMHD, ACS). Mississippi ({mapData.find((d) => d.state === "MS")?.povertyRate}%)
              and Louisiana ({mapData.find((d) => d.state === "LA")?.povertyRate}%) rank among the
              highest — while several high-poverty states sit at or below average VBP performance.
            </p>
          </Card>
        </div>

        <p className="mt-5 text-[13px] leading-relaxed text-ink-secondary">
          <span className="font-semibold text-ink">Sources:</span> Definitive Healthcare (CMS
          hospital VBP, Oct 2024); HDPulse / NIMHD (family poverty, 2020–2024). VBP measures
          hospital quality under Medicare&apos;s Value-Based Purchasing Program — one CMS value-based
          initiative, not all VBC activity statewide.
        </p>
      </Card>
    </Section>
  );
}
