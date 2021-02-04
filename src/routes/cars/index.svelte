<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`cars.json`)
			.then(response => response.json())
			.then(cars => ({cars})
		);
	}
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Card from '../../components/Card.svelte';
	import CardHeader from '../../components/CardHeader.svelte';
	import type {CarModel} from '../../types/car';
	export let cars: Array<CarModel>;

	let onlyShowModern = false;
	$: filteredCars = onlyShowModern ? cars.filter(c => c.year > 2000) : cars;
	$: carCount = filteredCars.length;
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

<h1>Available Cars: {carCount}</h1>
<span>Only show modern vehicles: <input type=checkbox bind:checked={onlyShowModern}/></span>

<ul>
	{#each filteredCars as car (car.slug)}
		<section transition:slide animate:flip="{{duration:d => 30 * Math.sqrt(d)}}">
			<Card>
				<CardHeader backgroundUrl={`images/${car.cover}`} title={car.ymm}/>
				<div slot="content">
					<h2>${car.price}</h2>
					<p>{car.description}</p>
				</div>
				<span slot="footer"><a rel="prefetch" href="cars/{car.slug}">Details</a></span>
			</Card>
		</section>
	{/each}
</ul>
