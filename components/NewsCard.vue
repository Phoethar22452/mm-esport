<template>
    <div class="col-md-4">
        <div class="card mt-3" style="height:auto">
            <NuxtImg width="100%" src="/images/csgo.jpg" format="webp" alt="CSGO News Banner" densities="1x 2x" />
            <div class="card-body">
                <h5 class="card-title">{{ news.title }}</h5>
                <p class="card-text">{{ news.description }}</p>
                <a :href="news.link" target="_blank" class="btn btn-primary mt-2">Read More</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { type News } from '~/types/news';
    const props = defineProps<{
        news: News
    }>()
</script>

<style scoped>

</style>