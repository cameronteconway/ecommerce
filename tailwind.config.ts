import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primaryBlack: "rgb(18, 18, 18)",
				primaryRed: "rgb(248, 39, 58)",
				primaryYellow: "rgb(252, 200, 3)",
				primaryGray: "rgb(225,225,221)",
				mutedText: "rgb(113, 113, 122)",
			},
		},
	},
	plugins: [],
} satisfies Config;
