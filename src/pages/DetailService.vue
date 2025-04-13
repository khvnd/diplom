<template>
    <DetailBanner />
    <ServiceArticle />
    <HomePrice />
</template>

<script>
import DetailBanner from '@/components/DetailBanner.vue';
import HomePrice from '@/components/HomePrice.vue';
import ServiceArticle from '@/components/ServiceArticle.vue';






export default {
      name: 'App',
      components: {
        DetailBanner,
        ServiceArticle,
        HomePrice
      }
    }

</script>