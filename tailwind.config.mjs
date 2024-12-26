/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", ...defaultTheme.fontFamily.serif],
        sans: ["Instrument Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        grid: "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255,165,0,0.3), transparent), radial-gradient(circle at center, rgba(255,255,255,0) 0%, white 100%), linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
      },
    },
  },
  plugins: [],
};
