/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi-Variable", "sans-serif"],
        mono: ["Necto-Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
