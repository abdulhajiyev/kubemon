import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// font family montserrat
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},
};
