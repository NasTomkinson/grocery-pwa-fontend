/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem"
			}
		},
		extend: {
			colors: {
				"primary": "#232323", 
				"primary-content": "#fdfdfd"
			}
		},
	},
	plugins: [],
}
