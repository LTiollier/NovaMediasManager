<template>
    <transition name="fade">
        <div class="w-1/6 h-40 px-2 mb-3 text-center">
            <img class="image__thumb" src="https://www.fillmurray.com/640/360" v-if="media.id % 2 == 0">
            <img class="image__thumb" src="https://www.fillmurray.com/360/640" v-else>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ImageCard",
        props: ['media'],
        methods: {
            getType() {
                if(this.media.mime_type.startsWith('image/')) {
                    return 'image'
                } else {
                    return 'other'
                }
            }
        },
        computed: {
            isImage: function() {
                return this.getType();
            }
        }
    }
</script>

<style scoped>
    .image-block {
        /* c: url(http://localhost/storage/1/car%401x.png); */
        height: 150px;
        width: 200px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>