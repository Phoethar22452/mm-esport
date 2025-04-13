<template>
    <div class="d-flex flex-column h-100">
        <div class="flex-shrink-0">
            <!-- Global component -->
            <Navbar />
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Navbar from '~/components/Navbar.vue';
</script>

<style scoped>

</style>