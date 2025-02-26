<template>
 <MainHeader />
 <router-view />
</template>


<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
    name: 'App',
    components: {
      MainHeader
      
      
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
    background-color: black;
   max-width: 1200px;
    margin: 0 auto;
}

</style>
