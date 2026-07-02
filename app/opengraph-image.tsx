import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#fbf9f4",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(216,90,48,0.14), transparent 45%), radial-gradient(circle at 10% 85%, rgba(59,109,17,0.12), transparent 40%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 600,
            color: "#23291f",
            marginBottom: 28,
          }}
        >
          lum<span style={{ color: "#3b6d11" }}>e</span>a
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 600,
            color: "#23291f",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Tu negocio, visible en Google donde te buscan.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#5b6354",
            marginTop: 28,
            maxWidth: 780,
          }}
        >
          Diseño web, SEO local y automatización de leads para negocios en Argentina.
        </div>
      </div>
    ),
    { ...size }
  );
}
