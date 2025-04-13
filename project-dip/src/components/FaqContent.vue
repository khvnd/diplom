<template>
    <div class="faq-content">
        <div class="img-section">
            <img src="/img/faq1.png" class="img-faq-first">
            <img src="/img/faq2.png" class="img-faq-second">
            <div class="img-gradient"></div>
        </div>
        <AboutFaq :limit="0" :show-image="false" />
    </div>
</template>

<script>
import AboutFaq from './AboutFaq.vue';

export default {
      components: {
        AboutFaq
      }
    }

</script>

<style>

    .img-section {
        position: relative;
    width: 100vw;
    z-index: -1;
    transform: translateX(-50%);
    }

    .img-faq-first {
        position: absolute;
        left: 501px;
        
        
    }

    .img-faq-second {
        position: absolute;
    right: -695px;
    }

    .img-gradient {
        background: linear-gradient( 180.00deg, rgb(24 24 27 / 0%), rgb(16 16 18) 55.935%, rgb(16 16 18) 100%) repeat;
    height: 344px;
    position: absolute;
    top: 223px;
    left: 50%;
    width: 200vw;
    transform: translateX(-50%);
}

@media (max-width: 1024px) {
    .img-gradient {
        top: 28px;
        left: 45%;
        width: 100vw;
        transform: none;
    }

    .img-faq-first {
        left: 513px;
        width: 168px;
    }

    .img-faq-second {
        right: -409px;
        width: 168px;
    }
}

@media (max-width: 768px) {
    .img-section {
        display: none;
    }
}

@media (max-width: 425px) {
    .img-section {
        display: none;
    }
}


</style>