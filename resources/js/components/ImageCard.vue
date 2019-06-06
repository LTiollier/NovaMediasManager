<template>
    <transition name="fade">
        <div class="w-1/6 h-40 px-2 mb-3 text-center justify-center items-center flex">
            <div class="folder folder--ardra text-center justify-center items-center flex flex-col">
                <div class="folder__icon" ref="imageFocus">
                    <template v-if="isImage">
                        <img class="image__thumb" :src="media.full_url">
                    </template>
                    <template v-else-if="isVideo">
                        <svg version="1.1" id="video_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 35 237.3994)" class="st5 st3 st6">VIDEO</text>
            </svg>
                    </template>
                    <template v-else-if="isPdf">
                        <svg version="1.1" id="pdf_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 60 237.3994)" class="st5 st3 st6">PDF</text>
            </svg>
                    </template>
                    <template v-else-if="isAudio">
                        <svg version="1.1" id="audio_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 35 237.3994)" class="st5 st3 st6">AUDIO</text>
            </svg>
                    </template>
                    <template v-else-if="isCsv">
                        <svg version="1.1" id="cdv_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 60 237.3994)" class="st5 st3 st6">CSV</text>
            </svg>
                    </template>
                    <template v-else-if="isText">
                        <svg version="1.1" id="text_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 45 237.3994)" class="st5 st3 st6">TEXT</text>
            </svg>
                    </template>
                    <template v-else-if="isXls">
                        <svg version="1.1" id="xls_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 60 237.3994)" class="st5 st3 st6">XLS</text>
            </svg>
                    </template>
                    <template v-else-if="isDoc">
                        <svg version="1.1" id="doc_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 60 237.3994)" class="st5 st3 st6">DOC</text>
            </svg>
                    </template>
                    <template v-else-if="isPpt">
                        <svg version="1.1" id="ppt_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 60 237.3994)" class="st5 st3 st6">PPT</text>
            </svg>
                    </template>
                    <template v-else>
                        <svg version="1.1" id="other_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 200 270" style="enable-background:new 0 0 200 270;" xml:space="preserve" class="svg__thumb">
                                <path class="st0" d="M22.9,1.2C10,1.2,0,11.1,0,24.1V246c0,11.9,10,22.9,22.9,22.9h154.2c11.9,0,22.9-10,22.9-22.9V60.9L140.3,1.2
                    H22.9z"/>
                            <path class="st1" d="M139.3,38V1.2L199,60.9h-36.8C149.3,60.9,139.3,50.9,139.3,38z"/>
                            <rect x="67.3" y="99.7" class="st2" width="64.3" height="35.6"/>
                            <rect x="10.2" y="209" class="st2" width="179.6" height="45.4"/>
                            <text transform="matrix(1 0 0 1 30 237.3994)" class="st5 st3 st6">OTHER</text>
            </svg>
                    </template>
                </div>
                <h3 class="folder__caption">{{ media.name | truncate(18, '..') }}</h3>
            </div>
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
            if(this.$refs.imageFocus) {
                new FocusFx(this.$refs.imageFocus);
            }
        },
        computed: {
            isImage() {
                return getType(this.media.mime_type) === 'image';
            },
            isVideo() {
                return getType(this.media.mime_type) === 'video';
            },
            isPdf() {
                return getType(this.media.mime_type) === 'pdf';
            },
            isAudio() {
                return getType(this.media.mime_type) === 'audio';
            },
            isCsv() {
                return getType(this.media.mime_type) === 'csv';
            },
            isText() {
                return getType(this.media.mime_type) === 'text';
            },
            isXls() {
                return getType(this.media.mime_type) === 'xls';
            },
            isDoc() {
                return getType(this.media.mime_type) === 'doc';
            },
            isPpt() {
                return getType(this.media.mime_type) === 'ppt';
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

<style type="text/css">
    #other_svg .st0{fill:#F4E3B9;}
    #video_svg .st0{fill:#ff6b81;}
    #pdf_svg .st0{fill:#CC4B4C;}
    #audio_svg .st0{fill:#7D6599;}
    #text_svg .st0{fill:#95A5A5;}
    #xls_svg .st0{fill:#91CDA0;}
    #doc_svg .st0{fill:#0096E6;}
    #ppt_svg .st0{fill:#F6712E;}
    #csv_svg .st0{fill:#F36FA0;}
    .st1{opacity:0.5;fill:#fff;}
    .st2{fill:none;}
    .st3{font-family:'MyriadPro-Bold', sans-serif;}
    .st5{fill:#000;opacity: 0.5;}
    .st6{font-size:40px;}
</style>