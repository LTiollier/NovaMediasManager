<template>
    <div class="folder__icon" ref="imageFocus">
        <image-icon :media="media" v-if="isImage"></image-icon>
        <video-icon :media="media" v-else-if="isVideo"></video-icon>
        <pdf-icon :media="media" v-else-if="isPdf"></pdf-icon>
        <audio-icon :media="media" v-else-if="isAudio"></audio-icon>
        <csv-icon :media="media" v-else-if="isCsv"></csv-icon>
        <text-icon :media="media" v-else-if="isText"></text-icon>
        <xls-icon :media="media" v-else-if="isXls"></xls-icon>
        <doc-icon :media="media" v-else-if="isDoc"></doc-icon>
        <ppt-icon :media="media" v-else-if="isPpt"></ppt-icon>
        <other-icon :media="media" v-else></other-icon>
    </div>
</template>

<script>
    import FileMixin from '../../mixins/FileMixin';
    import ImageIcon from "../IconFiles/ImageIcon";
    import VideoIcon from "../IconFiles/VideoIcon";
    import PdfIcon from "../IconFiles/PdfIcon";
    import AudioIcon from "../IconFiles/AudioIcon";
    import CsvIcon from "../IconFiles/CsvIcon";
    import TextIcon from "../IconFiles/TextIcon";
    import XlsIcon from "../IconFiles/XlsIcon";
    import DocIcon from "../IconFiles/DocIcon";
    import PptIcon from "../IconFiles/PptIcon";
    import OtherIcon from "../IconFiles/OtherIcon";

    export default {
        name: "AutomaticIcon",
        props: ['media'],
        components: {OtherIcon, PptIcon, DocIcon, XlsIcon, TextIcon, CsvIcon, AudioIcon, PdfIcon, VideoIcon, ImageIcon},
        mixins: [FileMixin],
    }
</script>