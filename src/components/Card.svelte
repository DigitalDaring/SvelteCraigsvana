<script lang="ts">

</script>


<style>
    .card {
        background-color: rgb(248, 240, 237);
        border: 8px solid #FFF;
        border-radius: 6px;
        box-shadow: 3px 3px 14px #EEE;
        display: flex;
        flex-direction: column;
        height: 480px;
        width: 320px;
        margin: 12px;
    }

    .padded-content {
        padding: 12px;
        font-size: 14px;
    }

    .positioned-footer {
        margin-top: auto;
        margin-bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 6px;
        box-sizing: border-box;
    }
</style>

<section class="card">
    <slot>
    
    </slot>
    <div class="padded-content">
        <slot name="content">

        </slot>
    </div>
    <div class="positioned-footer">
        <slot name="footer">

        </slot>
    </div>
</section>
