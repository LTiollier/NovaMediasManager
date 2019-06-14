<template>
    <img class="image__thumb" :src="media.full_url">
</template>

<script>
    export default {
        name: "ImageIcon",
        props: ['media']
    }
</script>

<style scoped>

</style>