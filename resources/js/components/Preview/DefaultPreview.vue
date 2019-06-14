<template>
    <div class="folder folder--ardra text-center justify-center items-center flex flex-col">
        <automatic-icon :media="media"></automatic-icon>
    </div>
</template>

<script>
    import AutomaticIcon from "../IconFiles/AutomaticIcon";
    export default {
        name: "DefaultPreview",
        components: {AutomaticIcon},
        props: ['media']
    }
</script>

<style scoped>

</style>