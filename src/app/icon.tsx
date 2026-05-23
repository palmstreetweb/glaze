import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const { accent, onAccent } = business.brand;
  return new ImageResponse(
    (
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
          fontSize: 22,
          fontStyle: "italic",
          fontWeight: 700,
        }}
      >
        g
      </div>
    ),
    { ...size }
  );
}
