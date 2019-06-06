<template>
    <div class="container card relative">
        <div class="p-3 flex items-center justify-between border-b border-50">
            <div class="w-full flex flex-wrap">
                <div class="w-2/3 flex flex-wrap justify-start">
                    <button class="btn btn-default btn-small btn-primary text-white mr-3" @click="$emit('uploadComplete')">Reload</button>
                    <button class="btn btn-default btn-small btn-primary text-white mr-3" id="UppyModalOpenerBtn">
                        Upload
                    </button>
                    <button class="btn btn-default btn-small btn-primary text-white mr-3" @click="openFormFolder">Create folder</button>
                    <transition name="fade">
                        <button class="btn btn-default btn-small btn-danger text-white mr-3" @click="deleteFolder" v-if="isDeletable">Delete folder</button>
                    </transition>
                </div>
                <div class="w-1/3 flex flex-wrap justify-end">
                    <div class="relative z-50 w-full max-w-xs">
                        <div class="relative">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     aria-labelledby="search" role="presentation"
                                     class="fill-current absolute search-icon-center ml-3 text-70">
                                    <path fill-rule="nonzero"
                                          d="M14.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                </svg>
                                <input v-on:input="searchItems" v-model="search" dusk="filemanager-search" type="search"
                                       placeholder="Search"
                                       class="pl-search form-control form-input form-input-bordered w-full">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-3">
            <folder-breadcrumb :folderPathArray="folderPathArray" @clickFolder="openFolderById"></folder-breadcrumb>
            <transition name="fade">
                <div class="px-2 overflow-y-auto container-medias">
                    <div class="flex flex-wrap mx-2">
                        <folder-card v-for="childFolder in folderFolders" :folder="childFolder" :key="childFolder.id" @clickFolder="openFolder(childFolder)"></folder-card>
                        <image-card v-for="media in folderMedias" :media="media" :key="media.id"></image-card>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import ImageCard from './ImageCard';
    import FolderCard from './FolderCard';
    import FolderBreadcrumb from './FolderBreadcrumb';
    const Uppy = require('@uppy/core');
    const Dashboard = require('@uppy/dashboard');
    const XhrUpload = require('@uppy/xhr-upload');
    import '@uppy/core/dist/style.css';
    import '@uppy/dashboard/dist/style.css';
    import {storeFolder, deleteFolder} from '../api.js';
    import {isRoot} from "../helpers";

    export default {
        props: ['folder'],

        mounted() {
            this.uppy = Uppy({
                debug: true,
                autoProceed: false,
                restrictions: {
                    maxFileSize: 1000000,
                    minNumberOfFiles: 1,
                    maxNumberOfFiles: 10,
                    allowedFileTypes: ['image/*', '.mp4', '.mp3', 'text/*', 'application/pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx']
                },
                meta: {
                    folderId: this.folderId,
                }
            })
                .use(Dashboard, {
                    trigger: '#UppyModalOpenerBtn',
                    inline: false,
                    showProgressDetails: true,
                    closeAfterFinish: true,
                    note: 'Files, 1–10 files, up to 1 MB',
                    height: 470,
                    metaFields: [
                        {id: 'name', name: 'Name', placeholder: 'file name'},
                        {id: 'caption', name: 'Caption', placeholder: 'describe what the image is about'}
                    ],
                    browserBackButtonClose: true,
                })
                .use(XhrUpload, {
                    endpoint: '/vendor/nova-medias-manager/upload',
                    formData: true,
                    fieldToto: 'toto'
                });

            this.uppy.on('complete', (result) => {
                this.uppy.reset();
                this.$emit('uploadComplete');
            });
        },

        components: {
            FolderCard,
            ImageCard,
            FolderBreadcrumb
        },

        data: () => ({
            search: null,
            uppy: null
        }),

        methods: {
            searchItems: _.debounce(function (e) {
                this.search = e.target.value;
                //this.getSearchData();
            }, 300),
            openFormFolder: function() {
                this.$swal({
                    title: 'Folder name',
                    input: 'text',
                    showCancelButton: true,
                    showLoaderOnConfirm: true,
                    preConfirm: (name) => {
                        return storeFolder({name: name, folder: this.folder.id})
                            .then(response => {
                                return response;
                            })
                            .catch(error => {
                                this.$swal.showValidationMessage(
                                    `Request failed: ${error}`
                                )
                            })
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                }).then((response) => {
                    this.$emit('newFolder');
                });
            },

            openFolder(folder) {
                this.openFolderById(folder.id);
            },

            openFolderById(id) {
                this.$emit('openFolder', id);
            },
            deleteFolder() {
                if(!isRoot(this.folder)) {
                    this.$swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.value) {
                            deleteFolder(this.folder.id).then(() => {
                                this.$swal(
                                    'Deleted!',
                                    'Your folder has been deleted.',
                                    'success'
                                );
                               this.openFolderById(this.folder.folder.id);
                            }).catch(() => {
                                this.$swal(
                                    'Oups!',
                                    'Error when deleting the folder.',
                                    'error'
                                );
                                this.$emit('uploadComplete');
                            });
                        }
                    });
                }
            }
        },

        computed: {
            folderName: function () {
                return this.folder ? this.folder.name : null;
            },
            folderPathArray: function () {
                return this.folder ? this.folder.path_array : [];
            },
            folderMedias: function () {
                return this.folder ? this.folder.medias : [];
            },
            folderId: function () {
                return this.folder ? this.folder : null;
            },
            folderFolders: function() {
                return this.folder ? this.folder.folders : [];
            },
            isDeletable: function() {
                return this.folder && !isRoot(this.folder);
            }
        },

        watch: {
            'folder.id': function (id) {
                this.uppy.setMeta({folderId: id});
            }
        }
    }
</script>

<style>
    .container-medias {
        max-height: 60vh;
    }
</style>
