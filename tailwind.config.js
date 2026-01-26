/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#29f4ff",
        "background-dark": "#0B0F14",
        "surface-dark": "#121821",
        "card-dark": "#121821",
        "border-dark": "#1F2937",
        "text-muted": "#9CA3AF",
        "text-dim": "#8b949e",
        "hud-accent": "#2AF6FF",
        "hud-success": "#3DFF8E",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.25rem",
        "lg": "0.375rem",
        "xl": "0.5rem",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
