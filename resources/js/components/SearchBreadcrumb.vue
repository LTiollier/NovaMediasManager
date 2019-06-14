<template>
    <transition name="fade">
        <nav class="bg-grey-light rounded font-sans w-full m-4">
            <ol class="list-reset flex text-grey-dark">
                <li><span class="font-bold">Search:</span> {{ search }}</li>
            </ol>
        </nav>
    </transition>
</template>

<script>
    export default {
        name: "SearchBreadcrumb",
        props: ['search'],
    }
</script>

<style scoped>

</style>