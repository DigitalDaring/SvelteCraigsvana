<script lang="ts">
    import { LikeStore } from '../stores/LikeStore';
    import type { LikeCounterModel } from '../types/LikeCounter';
    import LikesCounter from './LikesCounter.svelte';
    const liekMOAR = () => {
        LikeStore.update(store => ({...store, count: store.count + 1}));
    }
</script>

<style>

</style>

<button on:click={liekMOAR}>👍</button>