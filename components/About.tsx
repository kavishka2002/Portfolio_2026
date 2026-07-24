"use client";

import Section from "./Section";
import { focusAreas } from "@/data/skills";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// Presence/emphasis score used only to shape the radar — not a claimed metric.
const chartData = focusAreas.map((f, i) => ({
  subject: f.area,
  value: [8, 7, 8, 6, 7, 7][i] ?? 6,
}));

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="Areas of Focus"
      description="Not a scorecard — a map of where I actually spend my engineering time, across the systems I've shipped."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <ul className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((f) => (
            <li
              key={f.area}
              className="border border-border/15 bg-surface px-4 py-3.5 transition-colors hover:border-amber/40"
            >
              <p className="font-mono text-[13px] text-ink">{f.area}</p>
              <p className="mt-1 text-[12px] text-ink-muted">{f.detail}</p>
            </li>
          ))}
        </ul>

        <div className="h-[320px] w-full border border-border/15 bg-surface p-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData} outerRadius="70%">
              <PolarGrid stroke="rgb(var(--border) / 0.25)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "rgb(var(--ink-muted))", fontSize: 10, fontFamily: "var(--font-mono)" }}
              />
              <Radar
                dataKey="value"
                stroke="rgb(var(--amber))"
                fill="rgb(var(--amber))"
                fillOpacity={0.22}
                strokeWidth={1.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
}
