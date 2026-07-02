import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 9,
        }}
      >
        <div style={{ position: "relative", width: 20, height: 20, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              left: 1,
              top: 0,
              width: 6,
              height: 16,
              borderRadius: 3,
              background: "#fbf9f4",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 1,
              top: 10,
              width: 13,
              height: 6,
              borderRadius: 3,
              background: "#fbf9f4",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -3,
              top: -3,
              width: 7,
              height: 7,
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
