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
    left: 264px;
    transform: rotate(360deg);
    width: 599px;
    z-index: -1;
 }

 @media (max-width: 1024px) {
   .price-banner-gradient {
      top: -251px;
      left: 186px;
   }
 }

 @media (max-width: 768px) {
   .price-banner-gradient {
      top: -263px;
      left: 63px;
      width: 585px;
   }
 } 
 
 @media (max-width: 425px) {
   .price-banner-title {
      font-size: 40px;
   }

   .price-banner-gradient {
      top: -197px;
      left: -22px;
      width: 423px;
   }

   .price-banner {
      margin-bottom: 100px;
   }
 }
</style>