<script lang="ts">
	import ProjektUebersicht from '$lib/components/projektUebersicht.svelte';
	import { getImageUrl } from '$lib/util';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let images = data.bilder?.map((e) => {
		return {
			id: e.w40k_uebersicht_id,
			imgurl: getImageUrl(e.directus_files_id)
		};
	});
	let beschreibung = '';
	let spieltermine = '';

	onMount(() => {
		beschreibung = data.beschreibung?.code ?? '';
		spieltermine = data.spieltermine?.code ?? '';
	});
</script>

<ProjektUebersicht
	titel="Warhammer 40K"
	{beschreibung}
	{spieltermine}
	email={data.email ?? ''}
	{images}
/>
