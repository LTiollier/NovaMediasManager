<template>
    <img class="image__preview" :src="media.full_url">
</template>

<script>
    export default {
        name: "ImagePreview",
        props: ['media'],
    }
</script>

<style scoped>
    .image__preview {
        width: 100%;
        height: 100%;
        max-width: 400px;
    }
</style>