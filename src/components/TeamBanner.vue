<template>
    <div class="team-banner">
        <h3 class="team-banner-title">Our Team</h3>
        <img src="/img/light1.svg" class="team-banner-gradient">
    </div>
</template>

<script>
export default {
     name: 'TeamBanner',
   }
</script>

<style>
 .team-banner {
    height: 216px;
    border-bottom: 1px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
    margin-bottom: 150px;
    margin-top: 80px;
    position: relative;
 }

 .team-banner-title {
    color: rgb(255, 255, 255);
    font-size: 64px;
    font-weight: 600;
    text-align: center;
    
 }

 .team-banner-gradient {
    position: absolute;
    top: -221px;
    left: 307px;
    transform: rotate(360deg);
    width: 544px;
    z-index: -1;
 }

 @media (max-width: 1024px) {
   .team-banner-gradient {
      top: -251px;
      left: 186px;
   }
 }

 @media (max-width: 768px) {
   .team-banner-gradient {
      top: -263px;
      left: 63px;
      width: 585px;
   }
 } 

 @media (max-width: 425px) {
   .team-banner-title {
      font-size: 40px;
   }

   .team-banner-gradient {
      top: -197px;
      left: -22px;
      width: 423px;
   }

   .team-banner {
      margin-bottom: 100px;
   }
 }


</style>