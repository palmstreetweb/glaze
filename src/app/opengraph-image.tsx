import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = business.name;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const { accent, bg, ink, inkMuted } = business.brand;

  return new ImageResponse(
    (
      <div
        style={{
          background: bg,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          color: ink,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "16px",
            background: accent,
          }}
        />

        <div
          style={{
            fontSize: 40,
            fontWeight: "bold",
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: accent,
              borderRadius: "50%",
              marginRight: "16px",
            }}
          />
          {business.name}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "900px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "24px",
              color: ink,
            }}
          >
            {business.tagline}
          </div>
          <div
            style={{
              fontSize: 22,
              color: inkMuted,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>{business.email}</span>
            <span style={{ margin: "0 12px" }}>•</span>
            <span>{new URL(business.url).hostname}</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "80px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: `8px solid ${accent}`,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
