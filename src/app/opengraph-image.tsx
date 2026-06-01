import { ImageResponse } from "next/og";

// Edge-runtime: OG-image wordt on-demand gegenereerd (voorkomt lokale
// prerender-fout door de spatie in het projectpad en is de standaard voor next/og).
export const runtime = "edge";

export const alt =
  "EnviLabs — digitale toepassingen, advies en trainingen voor het publieke domein";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Merkgebonden social-preview, in lijn met het merkboek (navy + teal).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0B1F3A",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* Merk */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: 96,
              height: 96,
              padding: 18,
              borderRadius: 22,
              background: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex", height: 14, borderRadius: 2, background: "#0B1F3A" }} />
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: 2, background: "#00C9A7" }} />
              <div style={{ width: 14, height: 14, borderRadius: 2, background: "#00C9A7" }} />
              <div style={{ width: 14, height: 14, borderRadius: 2, background: "#00C9A7" }} />
            </div>
            <div style={{ display: "flex", height: 14, width: 44, borderRadius: 2, background: "#0B1F3A" }} />
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -2 }}>
            <span>Envi</span>
            <span style={{ color: "#00C9A7" }}>Labs</span>
          </div>
        </div>

        {/* Belofte */}
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 960,
          }}
        >
          Digitale toepassingen, advies en trainingen voor het publieke domein
        </div>

        {/* Voet */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#98A1AE",
          }}
        >
          <span style={{ color: "#00C9A7" }}>envilabs.dev</span>
          <span>Assen · Nederland</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
