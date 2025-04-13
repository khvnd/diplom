<template>
    <ServiceBanner />
    <HomeService />
    <ServiceHappy />
    <HomePrice />
   
</template>

<script>
import HomePrice from '@/components/HomePrice.vue';
import HomeService from '@/components/HomeService.vue';
import ServiceBanner from '@/components/ServiceBanner.vue';
import ServiceHappy from '@/components/ServiceHappy.vue';





export default {
      name: 'App',
      components: {
        ServiceBanner,
        HomeService,
        ServiceHappy,
        HomePrice
      }
    }

</script>