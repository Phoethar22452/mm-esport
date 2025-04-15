<template>
    <div>
        <div class="p-6 mt-3">
            <h1 class="text-2xl font-bold text-center">Welcome to Myanmar eSport</h1>
            <p class="text-center">Get the latest updates and matches for CS:GO and Dota 2.</p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div v-if="pending">
                <div class="alert alert-warning" role="alert">
                    Loading ...
                </div>
            </div>
            <div v-else-if="error">
                <div class="alert alert-danger" role="alert">
                    Something Went Wrong!
                </div>
            </div>
            <NewsCard v-else v-for="n in data?.news" :key="n.title" :news="n" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { type NewsResponse } from "~/types/news";
    import NewsCard from "~/components/NewsCard.vue";

    const { data, pending, error } = await useAsyncData<NewsResponse>('news', () =>
    $fetch("https://hltv-api.vercel.app/api/news.json", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })); 
</script>

<style scoped>

</style>