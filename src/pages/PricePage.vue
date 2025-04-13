<template>
    <PriceBanner />
    <PricingPlan />
    <AboutQuestion />
    <AboutFaq />
</template>

<script>

import AboutFaq from '@/components/AboutFaq.vue';
import AboutQuestion from '@/components/AboutQuestion.vue';
import PriceBanner from '@/components/PriceBanner.vue';
import PricingPlan from '@/components/PricingPlan.vue';

export default {
      name: 'App',
      components: {
       PriceBanner,
       PricingPlan,
       AboutQuestion,
       AboutFaq
      }
    }
</script>