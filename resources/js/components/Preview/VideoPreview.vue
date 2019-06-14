<template>
    <vue-plyr>
        <video ref="video" controls crossorigin playsinline>
            <source :src="media.full_url" :type="media.mime_type"/>
        </video>
    </vue-plyr>
</template>

<script>
    export default {
        props: ['media'],
    }
</script>
