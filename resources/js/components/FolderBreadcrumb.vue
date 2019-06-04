<template>
    <transition name="fade">
        <nav class="bg-grey-light rounded font-sans w-full m-4">
            <ol class="list-reset flex text-grey-dark">
                <template v-for="(pathArray, index) in folderPathArray">
                    <li @click="clickFolder(index !== folderPathArray.length - 1 ? pathArray : null)"><span
                            class="text-blue"
                            :class="{ 'font-bold cursor-pointer': index !== folderPathArray.length - 1 }">{{ pathArray.name }}</span>
                    </li>
                    <li v-if="index !== folderPathArray.length - 1"><span class="mx-2">/</span></li>
                </template>
            </ol>
        </nav>
    </transition>
</template>

<script>
    export default {
        name: "FolderBreadcrumb",
        props: ['folderPathArray'],
        methods: {
            clickFolder: function (pathArray) {
                if (pathArray) {
                    this.$emit('clickFolder', pathArray.id);
                }
            }
        }
    }
</script>

<style scoped>

</style>