import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3b6d11",
        }}
      >
        <div style={{ position: "relative", width: 110, height: 110, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 0,
              width: 34,
              height: 88,
              borderRadius: 17,
              background: "#fbf9f4",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 54,
              width: 72,
              height: 34,
              borderRadius: 17,
              background: "#fbf9f4",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -10,
              top: -10,
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "#d85a30",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
