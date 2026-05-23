import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = `${business.name} — ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const { accent, bg, ink, inkMuted, onAccent } = business.brand;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          color: ink,
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          padding: 64,
          gap: 56,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 420,
            height: 480,
            background: accent,
            borderRadius: "45% 55% 60% 40% / 60% 40% 60% 40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: onAccent,
            fontFamily: "serif",
            fontSize: 320,
            fontStyle: "italic",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          g
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 32 }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: accent,
              display: "flex",
            }}
          >
            {business.name} — Portland, OR
          </div>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 68,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: ink,
              display: "flex",
            }}
          >
            {business.tagline}
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: inkMuted,
              display: "flex",
            }}
          >
            ● {new URL(business.url).hostname}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
