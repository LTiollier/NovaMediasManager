<template>
    <div>
        <heading class="mb-6">Medias manager</heading>
        <medias-manager :folder="folder" @uploadComplete="reloadInfoFolder" @newFolder="reloadInfoFolder"></medias-manager>
    </div>
</template>

<script>
    import MediasManager from './MediasManager';
    import {getRoot, getFolder} from '../api.js';

    export default {
        components: {
            MediasManager,
        },

        mounted() {
            this.initRoot();
        },

        data: () => ({
            folder: null
        }),

        methods: {
            initRoot() {
                getRoot().then((response) => {
                    this.folder = response.data;
                }).catch((error) => {
                    console.log(error);
                });
            },
            reloadInfoFolder() {
                getFolder(this.folder.id).then((response) => {
                    this.folder = response.data;
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
    }
</script>

<style>
    /* Scoped Styles */
</style>
