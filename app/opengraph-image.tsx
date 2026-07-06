import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 60%, #1e293b 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#3b82f6",
            fontWeight: 600,
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 24, maxWidth: 980 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa", marginTop: 24, maxWidth: 900 }}>
          {site.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
