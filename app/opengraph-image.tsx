import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f5f1e8";
const INK = "#141312";
const INK_MUTED = "#5c574e";
const COBALT = "#2a2ae0";
const HAIRLINE = "#ded7c7";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: INK_MUTED,
          }}
        >
          <span>{site.name}</span>
          <span>
            {site.location} · {site.locationYear}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              color: COBALT,
              marginBottom: 24,
            }}
          >
            {site.positioning}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: INK,
              maxWidth: 1000,
            }}
          >
            I make AI feel like part of the product.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: `2px solid ${HAIRLINE}`,
            paddingTop: 28,
            fontSize: 26,
            color: INK_MUTED,
          }}
        >
          <div
            style={{ width: 14, height: 14, borderRadius: 14, background: COBALT }}
          />
          <span>
            {site.availability} · 12 years · 7 countries · 2 startups of my own
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
