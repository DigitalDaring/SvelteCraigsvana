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
	import type { CAR } from './_types';
	export let car: CAR;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
	}

	li {
		margin-right: 12px;
	}

	img {
		width: 240px;
		height: auto;
	}

</style>

<svelte:head>
	<title>{car.ymm}</title>
</svelte:head>

<ul>
	{#each car.photos as photo}
		<li><img src={`images/${photo}`}/></li>
	{/each}
</ul>

<h1>{car.ymm}</h1>

<div class="content">
	{car.description}
</div>
