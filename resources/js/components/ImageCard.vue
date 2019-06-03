<template>
    <transition name="fade">
        <div class="w-1/6 h-40 px-2 mb-3 text-center justify-center items-center flex">
            <img class="image__thumb" :src="media.full_url" ref="imageFocus" v-if="isImage">
        </div>
    </transition>
</template>

<script>
    import FocusFx from '../Classes/FocusFx';
    import {getType} from "../helpers";

    export default {
        name: "ImageCard",
        props: ['media'],
        mounted() {
            new FocusFx(this.$refs.imageFocus);
        },
        computed: {
            isImage() {
                return getType(this.media.mime_type) === 'image';
            }
        }
    }
</script>