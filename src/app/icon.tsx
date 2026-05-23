import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  const initial = business.name.charAt(0) || "S";
  const { accent, onAccent } = business.brand;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: accent,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: onAccent,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          borderRadius: "25%",
        }}
      >
        {initial}
      </div>
    ),
    {
      ...size,
    }
  );
}
