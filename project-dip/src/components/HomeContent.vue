<template>
<div class="home-content">
    <div class="title-content">
        <h1 class="title">Immerse Yourself in Virtual Reality</h1>
        <p class="text">Experience Unforgettable Events in VR. Bring your events to <br> life like never before with our VR services</p>
        <button class="btn-more">discover more</button>
        <div class="happy"></div>
    </div>
    <div class="banner">
        <img src="/img/Image1.png" alt="">
        <div class="gradient-banner"></div>
    </div>
    
</div>

    
   </template>
   
   <script>
   export default {
     name: 'HomeContent',
     
   }
   </script>

   <style>
.home-content {
    max-width: 1200px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 134px;
    padding-top: 13px;
}

.title-content {
    width: 540px;
}

.title {
   color: rgb(255, 255, 255);
    font-size: 64px;
    font-weight: 600;
    text-align: left;
    margin-top: 74px;
    margin-bottom: margin;
}

.text {
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    line-height: 28px;
    letter-spacing: 0%;
    margin-bottom: 32px;
}

.btn-more {
    color: rgb(255, 255, 255);  
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 1.5px;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233) 100%);
    width: 205px;
    height: 50px;
    border: none;
}

.happy {
    width: 277.34px;
    height: 50.45px;
    background-image: url(/public/img/Happy.png);
    margin-top: 81px;
}

.banner {
    width: 526px;
        height: 626px;
        position: relative;
        overflow: hidden;
}



.gradient-banner {
    position: absolute;
    width: 650px;
    height: 466px;
    left: -87px;
    top: 35px;
    background: url(/public/img/Light1.svg) no-repeat center;
    background-size: cover;
    transform: rotate(358deg);
    pointer-events: none;  
}
</style>