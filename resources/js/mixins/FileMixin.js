import {getType} from "../helpers";

export default {
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
};