/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				'min-content-first': 'min-content 1fr;'
			},
			gridTemplateRows: {
				'min-content-first': 'min-content 1fr;',
				'body-template': '1fr auto'
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
