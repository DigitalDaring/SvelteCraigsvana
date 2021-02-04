<script lang="ts">
    import { onDestroy } from 'svelte';
    import { LikeStore } from '../stores/LikeStore';
    import type { LikeCounterModel } from '../types/LikeCounter'

    /* Manually Subscribe 
    let currentCount = 0;
    const unsubscribe = LikeStore.subscribe((likes: LikeCounterModel) => {
        currentCount = likes.count;
    });

    onDestroy(unsubscribe); */
</script>

<style>

</style>

<span>{$LikeStore.count}</span>

<!-- 
Manually subscribe
<span>
    {currentCount}
</span> 
-->
