<template>
    <div class="price-banner">
        <h3 class="price-banner-title">Pricing Plan</h3>
        <img src="/img/light1.svg" class="price-banner-gradient">
    </div>
</template>

<script>
export default {
     name: 'PriceBanner',
   }
</script>

<style>
 .price-banner {
    height: 216px;
    border-bottom: 1px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
    margin-bottom: 150px;
    margin-top: 80px;
    position: relative;
 }

 .price-banner-title {
    color: rgb(255, 255, 255);
    font-size: 64px;
    font-weight: 600;
    text-align: center;
    
 }

 .price-banner-gradient {
    position: absolute;
    top: -245px;
    left: 108px;
    transform: rotate(19deg);
    width: 599px;
    z-index: -1;
 }
</style>