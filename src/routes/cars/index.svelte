<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`cars.json`)
			.then(response => response.json())
			.then(cars => ({cars})
		);
	}
</script>

<script lang="ts">
	import Card from '../../components/Card.svelte';
	import CardHeader from '../../components/CardHeader.svelte';
	import type {CarModel} from './_types';
	export let cars: Array<CarModel>;
</script>

<style>
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>

<svelte:head>
	<title>Craigsvana</title>
</svelte:head>

<h1>Available Cars</h1>

<ul>
	{#each cars as car}
		<Card>
			<CardHeader backgroundUrl={`images/${car.cover}`} title={car.ymm}/>
			<div slot="content">
				<h2>${car.price}</h2>
				<p>{car.description}</p>
			</div>
			<span slot="footer"><a rel="prefetch" href="cars/{car.slug}">Details</a></span>
		</Card>
	{/each}
</ul>
