/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				sans: ['Fira Sans', 'sans-serif'],
			}
		},
	},
	plugins: [
		plugin(({addBase, theme}) => {
			addBase({
				html: {
					color: theme('colors.gray.800'),
					backgroundColor: theme('colors.gray.100'),
				}
			})
		})
	],
}
