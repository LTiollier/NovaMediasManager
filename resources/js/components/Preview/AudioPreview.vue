<template>
    <a-player :audio="{name: this.media.name, artist: '', url: this.media.full_url,}" class="w-full" :autoplay="false"></a-player>
</template>

<script>
    export default {
        name: "AudioPreview",
        props: ['media'],
    }
</script>

<style scoped>

</style>