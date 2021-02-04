<script lang="ts">
    import { LikeStore } from '../stores/LikeStore';
    const liekMOAR = () => {
        LikeStore.update(store => ({...store, count: store.count + 1}));
    }
</script>

<button on:click={liekMOAR}>👍</button>