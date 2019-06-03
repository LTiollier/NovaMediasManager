export function getType(mime_type) {
    if (mime_type.startsWith('image/')) {
        return 'image';
    } else if (mime_type.startsWith('video/')) {
        return 'video';
    } else {
        return 'other';
    }
}