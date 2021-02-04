<script context="module" lang="ts">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`cars/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { car: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script lang="ts">
	import type { CarModel } from '../../types/car';
	export let car: CarModel;
	import Purchase from '../../components/Purchase.svelte';
</script>

<style>

	

</style>

<svelte:head>
	<title>{car.ymm}</title>
</svelte:head>

<Purchase car={car}/>
