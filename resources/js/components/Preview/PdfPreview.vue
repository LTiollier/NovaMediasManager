<template>
    <object :data="media.full_url" type="application/pdf" width="100%" height="100%" class="min-h-500">
        <iframe :src="media.full_url" width="100%" height="100%" style="border: none;">
            <object class="no-preview"></object>
        </iframe>
    </object>
</template>

<script>
    export default {
        name: "PdfPreview",
        props: ['media'],
    }
</script>

<style>
    .min-h-500 {
        min-height: 500px;
    }
</style>