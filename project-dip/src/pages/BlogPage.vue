<template>
    <BlogBanner />
    <BlogArticles />
</template>

<script>

import BlogArticles from '@/components/BlogArticles.vue';
import BlogBanner from '@/components/BlogBanner.vue';





export default {
      name: 'App',
      components: {
        BlogBanner,
        BlogArticles
      }
    }

</script>