<template>
    <AboutBanner />
    <AboutContent />
    <AboutChoose />
    <AboutQuestion />
    <AboutTeam />
    <PartnersOur />
    <AboutFaq />
</template>

<script>
import AboutBanner from '@/components/AboutBanner.vue';
import AboutChoose from '@/components/AboutChoose.vue';
import AboutContent from '@/components/AboutContent.vue';
import AboutFaq from '@/components/AboutFaq.vue';
import AboutQuestion from '@/components/AboutQuestion.vue';
import AboutTeam from '@/components/AboutTeam.vue';
import PartnersOur from '@/components/PartnersOur.vue';


export default {
      name: 'App',
      components: {
        AboutBanner,
        AboutContent,
        AboutChoose,
        AboutQuestion,
        AboutTeam,
        PartnersOur,
        AboutFaq
      }
    }

</script>