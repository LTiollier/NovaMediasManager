<template>
    <transition name="fade">
        <div class="w-1/6 h-40 px-2 mb-3 text-center" @click="$emit('clickFolder', folder)">
            <div class="folder folder--ardra text-center justify-center items-center flex flex-col">
                <div class="folder__icon" ref="folderFocus">
                    <div class="folder__icon-img folder__icon-img--back">
                        <svg class="folder__icon-svg" viewBox="0 0 20 16" id="icon-folderback">
                            <path d="M7.5,0C7.4,0,2,0,2,0C0.9,0,0,0.9,0,2l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2c0,0-7.5,0-8,0C9,2,9.9,0,7.5,0z"/>
                        </svg>
                    </div>
                    <div class="folder__icon-img folder__icon-img--cover">
                        <svg class="folder__icon-svg" id="icon-foldercover" viewBox="0 0 20 16">
                            <path d="M2,2h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V4C0,2.9,0.9,2,2,2z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="folder__caption">{{ folder.name | truncate(18, '..') }}</h3>
            </div>
        </div>
    </transition>
</template>

<script>
    import FocusFx from '../Classes/FocusFx';

    export default {
        name: "FolderCard",
        props: ['folder'],
        mounted() {
            new FocusFx(this.$refs.folderFocus);
        },
        filters: {
            truncate: function (text, length, suffix) {
                if(text.length <= length) {
                    return text;
                }
                return text.substring(0, length) + suffix;
            },
        },
    }
</script>