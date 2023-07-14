import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        limegreen: "#33CC33",
        // Add any other custom colors here
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      // Add other styles you want to extend for these variants
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
