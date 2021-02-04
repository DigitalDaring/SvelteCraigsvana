<script lang="ts">
    import {onMount} from 'svelte';
    export let backgroundUrl;
    export let title;

    let styleAtt;

    onMount(() => {
        const siteUrl = `${window.location.protocol}//${window.location.host}`;
        styleAtt = `--backgroundImage: url(${siteUrl}/${backgroundUrl})`;
    })
</script>

<style>
    .card-header {
        width: 100%;
        height: 200px;
        background-color: #000;
        position: relative;
    }

    .card-header-background {
        background-image: var(--backgroundImage);
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: .8;
        z-index: 100;
    }

    h1 {
        color: #FFF;
        padding: 12px;
        width: calc(100% - 24px);
        position: relative;
        z-index: 200;
    }
</style>

<div class="card-header" style="{styleAtt}">
    <div class="card-header-background"/>
    <h1>{title}</h1>
</div>