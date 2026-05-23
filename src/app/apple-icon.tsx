import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const { accent, onAccent, bg } = business.brand;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 18,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            color: onAccent,
            fontFamily: "serif",
            fontSize: 120,
            fontStyle: "italic",
            fontWeight: 700,
          }}
        >
          g
        </div>
      </div>
    ),
    { ...size }
  );
}
