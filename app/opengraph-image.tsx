import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Brown & Sullivan — scholastic letter blocks; regulated health insurance distribution";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(165deg, #F2F0EC 0%, #E8E6E0 55%, #F6F3EE 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.35em",
              fontWeight: 600,
              color: "rgba(10,10,10,0.45)",
              textTransform: "uppercase",
            }}
          >
            Regulated distribution counsel
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#0A0A0A",
              textAlign: "center",
              lineHeight: 1.05,
            }}
          >
            {"BROWN & SULLIVAN"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
              marginTop: 12,
            }}
          >
            {[
              { t: "B", s: 56 },
              { t: "&", s: 48 },
              { t: "S", s: 56 },
            ].map((b) => (
              <div
                key={b.t}
                style={{
                  width: 88,
                  height: 88,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#F6F3EE",
                  border: "3px solid #0A0A0A",
                  borderRadius: 16,
                  fontSize: b.s,
                  fontWeight: 700,
                  color: "#0A0A0A",
                  boxShadow: "0 12px 32px rgba(10,10,10,0.08)",
                }}
              >
                {b.t}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              marginTop: 8,
            }}
          >
            {["A", "B", "C"].map((t) => (
              <div
                key={t}
                style={{
                  width: 62,
                  height: 62,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  border: "2px solid #CFC9C0",
                  borderRadius: 12,
                  fontSize: 34,
                  fontWeight: 600,
                  color: "#0A0A0A",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 20,
              color: "rgba(10,10,10,0.55)",
              textAlign: "center",
              maxWidth: 720,
              lineHeight: 1.45,
            }}
          >
            Medicare · ACA · TCPA — compliance and counsel for licensed
            distribution
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
