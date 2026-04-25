import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          wash: "#2C2C2C",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          cream: "#F6F3EE",
        },
        gray: {
          DEFAULT: "#E5E5E5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Times", "serif"],
        block: ["var(--font-block)", "Archivo Black", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Menlo", "monospace"],
      },
      letterSpacing: {
        "block-tight": "-0.02em",
        ledger: "0.16em",
        stamp: "0.22em",
      },
      borderWidth: {
        hairline: "0.5px",
        rule: "2px",
        plate: "3px",
      },
      gridTemplateColumns: {
        "12-thin": "repeat(12, minmax(0, 1fr))",
        "abc-6": "repeat(6, minmax(0, 1fr))",
        states: "repeat(10, minmax(0, 1fr))",
        "os-pillars": "1fr 1.4fr 1fr",
        "library-card": "repeat(4, minmax(0, 1fr))",
        "evidence-5": "repeat(5, minmax(0, 1fr))",
        "footer-6": "repeat(6, minmax(0, 1fr))",
        "footer-26": "repeat(26, minmax(0, 1fr))",
        "header-shell": "minmax(0, 38fr) minmax(0, 62fr)",
        "workflow-split": "minmax(0, 4fr) minmax(0, 6fr)",
      },
      gridTemplateAreas: {
        footer: `
          "wordmark wordmark wordmark wordmark wordmark wordmark"
          "directory compliance operations products jurisdictions firm"
          "reference reference reference reference reference reference"
          "alphabet alphabet alphabet alphabet alphabet alphabet"
          "colophon colophon colophon colophon colophon colophon"
        `,
      },
      keyframes: {
        "paper-fade": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "drawer-pull": {
          from: { transform: "translateY(-12px) scaleY(0.98)", opacity: "0" },
          to: { transform: "translateY(0) scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        "paper-fade": "paper-fade 220ms ease-out both",
        "drawer-pull": "drawer-pull 240ms ease-out both",
      },
      boxShadow: {
        block: "0 12px 34px rgba(10, 10, 10, 0.08)",
        "block-press": "0 16px 40px rgba(10, 10, 10, 0.1)",
        plate: "0 0 0 1px rgba(10, 10, 10, 0.08) inset",
      },
    },
  },
  plugins: [
    function gridAreasPlugin({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "grid-areas": (value: string) => ({
            gridTemplateAreas: value,
          }),
          "area": (value: string) => ({
            gridArea: value,
          }),
        },
        { values: theme("gridTemplateAreas") }
      );
    },
  ],
};

export default config;
