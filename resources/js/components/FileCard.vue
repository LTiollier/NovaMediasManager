<template>
    <transition name="fade">
        <div class="w-1/6 h-40 px-2 mb-3 text-center justify-center items-center flex" @click="$emit('clickMedia', media)">
            <div class="folder folder--ardra text-center justify-center items-center flex flex-col">
                <automatic-icon :media="media"></automatic-icon>
                <h3 class="folder__caption">{{ media.name | truncate(18, '..') }}</h3>
            </div>
        </div>
    </transition>
</template>

<script>
    import FocusFx from '../Classes/FocusFx';
    import AutomaticIcon from "./IconFiles/AutomaticIcon";

    export default {
        name: "MediaCard",
        components: {AutomaticIcon},
        props: ['media'],
        mounted() {
            if(this.$refs.imageFocus) {
                new FocusFx(this.$refs.imageFocus);
            }
        },
        filters: {
            truncate: function (text, length, suffix) {
                if(text.length <= length) {
                    return text;
                }
                return text.substring(0, length) + suffix;
            },
        }
    }
</script>