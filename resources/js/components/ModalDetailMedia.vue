<template>
    <modal @modal-close="handleClose">
        <form
                autocomplete="off"
                @keydown="handleKeydown"
                class="bg-white rounded-lg shadow-lg overflow-hidden container-modal"
        >
            <div class="bg-30 flex flex-wrap border-b border-70">
                <div class="px-4 py-3 ">
                    {{ media.file_name }}
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-3/5 container-media flex justify-center bg-30 py-3">
                    <image-preview v-if="isImage" :media="media"></image-preview>
                    <pdf-preview v-else-if="isPdf" :media="media"></pdf-preview>
                    <audio-preview v-else-if="isAudio" :media="media"></audio-preview>
                    <video-preview v-else-if="isVideo" :media="media"></video-preview>
                    <default-preview v-else :media="media"></default-preview>
                </div>
                <div class="w-2/5 bg-30 flex flex-wrap">
                    <div class="w-full">
                        <div class="mx-4 my-3 flex flex-wrap">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                                    Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Name" v-model="formMedia.name">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-30 px-6 py-3 flex">
                <div class="flex items-center ml-auto">
                    <button
                            type="button"
                            @click.prevent="handleClose"
                            class="btn text-80 font-normal h-9 px-3 mr-3 btn-link"
                    >
                        {{ __('Cancel') }}
                    </button>
                    <button
                            ref="runButton"
                            type="submit"
                            class="btn btn-default btn-primary"
                    >
                        {{ __('Update file') }}
                    </button>
                </div>
            </div>
        </form>
    </modal>
</template>

<script>
    import ImagePreview from './Preview/ImagePreview';
    import FileMixin from '../mixins/FileMixin';
    import PdfPreview from "./Preview/PdfPreview";
    import AudioPreview from "./Preview/AudioPreview";
    import VideoPreview from "./Preview/VideoPreview";
    import DefaultPreview from "./Preview/DefaultPreview";

    export default {
        props: ['media'],
        mixins: [FileMixin],
        components: {
            DefaultPreview,
            VideoPreview,
            AudioPreview,
            PdfPreview,
            ImagePreview
        },
        data: () => ({
            formMedia: {
                name: '',
            }
        }),
        mounted() {
            this.formMedia = this.media;
        },
        methods: {
            /**
             * Close the modal.
             */
            handleClose() {
                this.$emit('close')
            },

            /**
             * Stop propogation of input events unless it's for an escape or enter keypress
             */
            handleKeydown(e) {
                if (['Escape', 'Enter'].indexOf(e.key) !== -1) {
                    return
                }

                e.stopPropagation()
            },
        },
    }
</script>

<style>
    .container-modal {
        width: 70vw;
    }
    .container-media {
        max-height: 500px;
    }
</style>