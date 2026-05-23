import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = business.name;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const { accent, bg, ink, inkMuted, onAccent } = business.brand;

  return new ImageResponse(
    (
      <div
        style={{
          background: bg,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "40%",
            background: accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: onAccent,
            fontSize: 200,
            fontWeight: "bold",
            letterSpacing: "-0.05em",
          }}
        >
          {business.name.charAt(0) || "S"}
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px",
            color: ink,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: "bold",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: 24,
            }}
          >
            {business.name}
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: "bold",
              lineHeight: 1.15,
              marginBottom: 28,
              color: ink,
            }}
          >
            {business.tagline}
          </div>
          <div style={{ fontSize: 22, color: inkMuted, display: "flex" }}>
            {new URL(business.url).hostname}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
