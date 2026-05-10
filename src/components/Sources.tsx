import React from "react";
import Card from "./Card";
import Section from "./Section";
import { sourcesByCategory } from "../data/sources";

export default function Sources() {
  const grouped = sourcesByCategory();

  return (
    <Section
      id="sources"
      title="Sources"
      subtitle="Reference organizations and data systems you can use to replace placeholder figures on this site. Links open in a new tab."
    >
      <div className="grid gap-8">
        {[...grouped.entries()].map(([category, entries]) => (
          <div key={category}>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-secondary">
              {category}
            </h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {entries.map((s) => (
                <Card key={s.url} className="p-4">
                  <p className="text-[12px] font-medium text-ink-secondary">{s.publisher}</p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[16px] font-semibold text-apple-blue underline-offset-2 hover:underline"
                  >
                    {s.title}
                  </a>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
                    {s.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
