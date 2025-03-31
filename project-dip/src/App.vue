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

</style>
