<template>
    <transition name="fade">
        <div class="w-1/6 h-40 px-2 mb-3">
            <div class="folder-block block w-full h-5/6 text-center">
                <svg class="w-2/3 h-5/6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#B3C1D1"
                          d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z"/>
                </svg>
            </div>
            <div class="h-1/6 w-full text-center text-xs border-t border-30 bg-50 flex items-center justify-center py-1">
                {{ folder.name }}
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "FolderCard",
        props: ['folder'],
        methods: {},
        computed: {}
    }
</script>

<style scoped>
    .folder-block {
        height: 150px;
        width: 200px;
    }
</style>