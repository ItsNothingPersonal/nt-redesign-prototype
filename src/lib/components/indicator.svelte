<script lang="ts">
	import { Indicator } from 'flowbite-svelte';
</script>

<Indicator
	placement="top-right"
	color="none"
	size="xl"
	class="bg-blue-200 dark:bg-blue-900 z-10 ring-white dark:ring-gray-900 shrink-0"
>
	<svg
		aria-hidden="true"
		class="w-4 h-4 text-blue-600 dark:text-blue-300"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
			clip-rule="evenodd"
		/></svg
	>
</Indicator>
