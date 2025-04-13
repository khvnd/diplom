<template>
    <ContactBanner />
    <ContactInfo />
    <GetTouch />
    <ContactMaps />
</template>

<script>
import ContactBanner from '@/components/ContactBanner.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import ContactMaps from '@/components/ContactMaps.vue';
import GetTouch from '@/components/GetTouch.vue';








export default {
      name: 'App',
      components: {
        ContactBanner,
        ContactInfo,
        GetTouch,
        ContactMaps
      }
    }

</script>