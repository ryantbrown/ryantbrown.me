import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./forms/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        primary: colors.indigo,
        code: {
          gray: "#908CAA",
          darkGray: "#232137",
          lightGray: "#6E6A86",
          darkBlue: "#3D8FB0",
          lightBlue: "#9DCFD7",
          purple: "#C4A7E7",
          yellow: "#F6C177",
          peach: "#E99B97",
          white: "#E0DEF4",
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
