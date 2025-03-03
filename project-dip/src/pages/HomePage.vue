<template>
    <div >
      
      <HomeContent />
      <HomeInfo />
      <HomeAbout />
      <HomeService />
      <HomeChoose />
      <TestimonialComp />
      <HomePrice />
      <PartnersOur />
      <HomeArticles />
      <GetMail />
    </div>
  </template>
    
  <script>
    
    
    import HomeContent from "@/components/HomeContent.vue";
    import HomeInfo from "@/components/HomeInfo.vue";
    import HomeAbout from "@/components/HomeAbout.vue";
    import HomeService from "@/components/HomeService.vue";
    import HomeChoose from "@/components/HomeChoose.vue";
    import TestimonialComp from "@/components/TestimonialComp.vue";
    import HomePrice from "@/components/HomePrice.vue";
    import PartnersOur from "@/components/PartnersOur.vue";
    import HomeArticles from "@/components/HomeArticles.vue";
    import GetMail from "@/components/GetMail.vue";
    

    export default {
      name: 'App',
      components: {
        HomeContent,
        HomeInfo,
        HomeAbout,
        HomeService,
        HomeChoose,
        TestimonialComp,
        HomePrice,
        PartnersOur,
        HomeArticles,
        GetMail
      }
    }
  </script>
    
    <style lang="scss">
    
    </style>
    