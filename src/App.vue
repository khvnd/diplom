<template>
 <MainHeader />
 <router-view />
 <GetMail />
 <MainFooter />
</template>


<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import GetMail from './components/GetMail.vue';

export default {
    name: 'App',
    components: {
      MainHeader,
      MainFooter,
      GetMail
    }
  }
</script>

<style lang="scss">
*, *::after, *::before {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
}

body {
    font-family: "Chakra Petch";
    background-color:#101010 ;
   max-width: 1200px;
    margin: 0 auto;
}

@media (max-width: 1024px) {
  body {
    margin: 0 50px;
   
  }
}

@media (max-width: 768px) {
  body {
    margin: 0 20px;
   
  }
}

@media (max-width: 425px) {
  body {
    margin: 0 16px;
   
  }
}




</style>
