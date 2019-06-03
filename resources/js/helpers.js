export function getType(mime_type) {
    if(mime_type.startsWith('image/')) {
        return 'image'
    } else {
        return 'other'
    }
}