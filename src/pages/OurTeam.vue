<template>
    <TeamBanner />
    <TeamList />
    <ServiceHappy />
</template>

<script>

import ServiceHappy from '@/components/ServiceHappy.vue';
import TeamBanner from '@/components/TeamBanner.vue';
import TeamList from '@/components/TeamList.vue';




export default {
      name: 'App',
      components: {
        TeamBanner,
        TeamList,
        ServiceHappy
      }
    }

</script>