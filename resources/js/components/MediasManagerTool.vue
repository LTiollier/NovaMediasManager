<template>
    <div>
        <heading class="mb-6">Medias manager</heading>
        <medias-manager :folder="folder" @uploadComplete="reloadInfoFolder" @newFolder="reloadInfoFolder" @openFolder="changeFolder"></medias-manager>
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
            let folderId = parseInt(this.$route.params.folderId);
            if(folderId && Number.isInteger(folderId)) {
                getFolder(folderId).then((response) => {
                    this.folder = response.data;
                }).catch((error) => {
                    this.$router.push({ name: 'medias-manager' });
                });
            } else {
                this.initRoot();
            }
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
            },
            changeFolder(id) {
                this.$router.push({ name: 'medias-manager', params: {'folderId': id }});
            }
        },

        watch: {
            $route (to) {
                let folderId = parseInt(to.params.folderId);
                if(folderId && Number.isInteger(folderId)) {
                    getFolder(folderId).then((response) => {
                        this.folder = response.data;
                    }).catch((error) => {
                        this.$router.push({ name: 'medias-manager' });
                    });
                } else {
                    this.initRoot();
                }
            }
        }
    }
</script>

<style>
    /* Scoped Styles */
</style>
