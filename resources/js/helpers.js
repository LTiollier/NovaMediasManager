export function getType(mime_type) {
    if (mime_type.startsWith('image/')) {
        return 'image';
    } else if (mime_type.startsWith('video/')) {
        return 'video';
    } else if (mime_type === 'application/pdf') {
        return 'pdf';
    } else if (mime_type.startsWith('audio/')) {
        return 'audio';
    } else if (mime_type.startsWith('text/csv')) {
        return 'csv';
    } else if (mime_type.startsWith('text/')) {
        return 'text';
    } else if (['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].indexOf(mime_type) !== -1) {
        return 'xls';
    } else if (['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'].indexOf(mime_type) !== -1) {
        return 'doc';
    } else if (['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-powerpoint'].indexOf(mime_type) !== -1) {
        return 'ppt';
    } else {
        return 'other';
    }
}

export function isRoot(folder) {
    return folder.id === 1 && folder.name === 'root';
}