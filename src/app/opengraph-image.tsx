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
          padding: 64,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating blobs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 540,
            height: 540,
            background: "#E5A98B",
            opacity: 0.55,
            borderRadius: "45% 55% 60% 40% / 60% 40% 60% 40%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -120,
            width: 460,
            height: 460,
            background: "#D9C0A3",
            opacity: 0.6,
            borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
            display: "flex",
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: accent,
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                color: onAccent,
                fontFamily: "serif",
                fontSize: 56,
                fontStyle: "italic",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              g
            </div>
            <div
              style={{
                fontFamily: "serif",
                fontSize: 56,
                fontStyle: "italic",
                color: ink,
                display: "flex",
              }}
            >
              {business.name.toLowerCase()}
            </div>
          </div>

          <div
            style={{
              fontFamily: "serif",
              fontSize: 96,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: ink,
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
            }}
          >
            <span>Soft objects</span>
            <span style={{ fontStyle: "italic", color: accent, display: "flex" }}>
              for the slow kitchen.
            </span>
          </div>

          <div
            style={{
              borderTop: `1px solid ${ink}33`,
              paddingTop: 18,
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: inkMuted,
            }}
          >
            <span>Portland, Oregon</span>
            <span style={{ color: accent }}>Fired weekly · Est. 2019</span>
            <span>{new URL(business.url).hostname}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
