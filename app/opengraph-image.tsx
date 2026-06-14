import { ImageResponse } from "next/og";

export const alt = "Andargachew Ewawey — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#07070b",
          backgroundImage:
            "radial-gradient(700px circle at 18% 20%, rgba(124,92,255,0.40), transparent), radial-gradient(700px circle at 88% 85%, rgba(58,214,255,0.28), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#8a8a99",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Available for work — 2026
        </div>
        <div
          style={{
            display: "flex",
            color: "#f4f1ea",
            fontSize: 100,
            fontWeight: 700,
            marginTop: 28,
            lineHeight: 1,
          }}
        >
          Andargachew Ewawey
        </div>
        <div style={{ display: "flex", color: "#c6ff3a", fontSize: 46, marginTop: 28 }}>
          Full-Stack Developer
        </div>
        <div style={{ display: "flex", color: "#8a8a99", fontSize: 30, marginTop: 48 }}>
          React · Node · Python · 3D Web · andar.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
