<template>
    <transition name="fade">
        <div class="w-1/6 h-40 px-2 mb-3">
            <div class="max-w-sm rounded overflow-hidden">
                <div class="image-block block w-full h-5/6">
                    <img class="block w-full h-full bg-center bg-cover h-2/3" :style="{ backgroundImage: `url('${media.full_url}')` }" v-if="isImage">
                </div>
                <div class="h-1/6 w-full text-center text-xs border-t border-30 bg-50 flex items-center justify-center py-1">
                    {{ media.file_name }}
                </div>
            </div>
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