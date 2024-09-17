import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {

      'sm': {'min': '200px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1300px'},

      'laptop': {'min': '1201px', 'max': '1572px'},

      'lg': {'min': '1301px'},
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark","black","dracula"],
  },
};
export default config;
