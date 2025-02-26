<template>
    <div >
      
      <homeContent />
      <homeInfo />
      <HomeAbout />
      <HomeService />
      <HomeChoose />
      
      
    </div>
  </template>
    
  <script>
    
    
    import HomeContent from "@/components/HomeContent.vue";
    import HomeInfo from "@/components/HomeInfo.vue";
    import HomeAbout from "@/components/HomeAbout.vue";
    import HomeService from "@/components/HomeService.vue";
    import HomeChoose from "@/components/HomeChoose.vue";

    export default {
      name: 'App',
      components: {
        HomeContent,
        HomeInfo,
        HomeAbout,
        HomeService,
        HomeChoose
      }
    }
  </script>
    
    <style lang="scss">
    
    </style>
    