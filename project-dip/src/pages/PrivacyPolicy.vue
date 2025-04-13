<template>
    <PolicyBanner />
    <PolicyContent />
</template>

<script>
import PolicyBanner from '@/components/PolicyBanner.vue';
import PolicyContent from '@/components/PolicyContent.vue';



export default {
    components: {
        PolicyBanner,
        PolicyContent
    }
}
</script>