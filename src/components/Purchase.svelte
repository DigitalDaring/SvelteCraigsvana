<script lang="ts">
  import type { CarModel } from "../types/car";
  export let car: CarModel;

  const taxRate = .056;
  const finalPrice = car.price + car.price * taxRate;
  let downPayment: number = 0;
  $: financedAmount =  finalPrice - downPayment;
</script>

<style>
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

<section>

  <h1>Purchase this beautiful {car.ymm}</h1>

  <ul>
    {#each car.photos as photo}
      <li><img alt={car.ymm} src={`images/${photo}`}/></li>
    {/each}
  </ul>

  <div class="content">
    {car.description}
  </div>

  <div class="pricing">
    <p>Ariona Sales Tax: {(taxRate * 100).toFixed(1)}%</p>
    <p>Car Price w/ Tax: ${finalPrice}</p>
    <span>Down Payment: <input bind:value={downPayment} type="number"/></span>
    <p>Financed Total: ${financedAmount}</p>
  </div>
</section>