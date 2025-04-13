<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Myanmar Esport Gaming News',
  meta: [
    { name: 'description', content: 'Stay updated with the latest news and matches for CS:GO and Dota 2' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    { charset: 'utf-8' }
  ],
  link: [
    { rel: 'stylesheet', href: '/css/style.css' } 
  ],
  script: [
    { src: '/js/script.js' }
  ]
})
</script>