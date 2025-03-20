<template>
    <ServiceBanner />
    <HomeService />
    <ServiceHappy />
    <HomePrice />
    <TestimonialComp />
</template>

<script>
import HomePrice from '@/components/HomePrice.vue';
import HomeService from '@/components/HomeService.vue';
import ServiceBanner from '@/components/ServiceBanner.vue';
import ServiceHappy from '@/components/ServiceHappy.vue';
import TestimonialComp from '@/components/TestimonialComp.vue';




export default {
      name: 'App',
      components: {
        ServiceBanner,
        HomeService,
        ServiceHappy,
        HomePrice,
        TestimonialComp
      }
    }

</script>