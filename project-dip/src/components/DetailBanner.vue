<template>
    <div class="detail-banner">
        <h3 class="detail-banner-title">Detail Service</h3>
        <img src="/img/light1.svg" class="detail-banner-gradient">
    </div>
</template>

<script>
export default {
     name: 'AboutBanner',
   }
</script>

<style>
 .detail-banner {
    height: 216px;
    border-bottom: 1px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
    margin-bottom: 150px;
    margin-top: 80px;
    position: relative;
 }

 .detail-banner-title {
    color: rgb(255, 255, 255);
    font-size: 64px;
    font-weight: 600;
    text-align: center;
    
 }

 .detail-banner-gradient {
    position: absolute;
    top: -221px;
    left: 307px;
    transform: rotate(8deg);
    width: 544px;
    z-index: -1;
 }
</style>