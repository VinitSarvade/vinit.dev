/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Enable dark mode with class strategy
	theme: {
		extend: {
			fontFamily:{
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				// Slate & Violet Professional Palette
				primary: {
					50: '#f5f3ff',   // violet-50
					100: '#ede9fe',  // violet-100
					200: '#ddd6fe',  // violet-200
					300: '#c4b5fd',  // violet-300
					400: '#a78bfa',  // violet-400
					500: '#8b5cf6',  // violet-500
					600: '#7c3aed',  // violet-600
					700: '#6d28d9',  // violet-700
					800: '#5b21b6',  // violet-800
					900: '#4c1d95',  // violet-900
				},
				secondary: {
					50: '#fdf2f8',   // pink-50
					100: '#fce7f3',  // pink-100
					200: '#fbcfe8',  // pink-200
					300: '#f9a8d4',  // pink-300
					400: '#f472b6',  // pink-400
					500: '#ec4899',  // pink-500
					600: '#db2777',  // pink-600
					700: '#be185d',  // pink-700
					800: '#9f1239',  // pink-800
					900: '#831843',  // pink-900
				},
			}
		},
	},
	plugins: [],
}
