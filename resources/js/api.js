export function getRoot() {
    return window.axios
        .get('/vendor/nova-medias-manager/root')
        .then(response => response.data);
}

export function getFolder(folderId) {
    return window.axios
        .get('/vendor/nova-medias-manager/folders/' + folderId)
        .then(response => response.data);
}

export function storeFolder(folder) {
    return window.axios
        .post('/vendor/nova-medias-manager/folders', folder)
        .then(response => response.data);
}

export function deleteFolder(folderId) {
    return window.axios
        .delete('/vendor/nova-medias-manager/folders/' + folderId)
        .then(response => response.data);
}