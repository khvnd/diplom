<template>
    <div class="home-info">
        <div class="info-item">
            <img src="/img/item1.png" class="item-img">
            <h3 class="subtitle">Expertise</h3>
            <p class="item-text">Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
        </div>
        <div class="info-item">
            <img src="/img/item2.png" class="item-img">
            <h3 class="subtitle">Customization</h3>
            <p class="item-text">Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
        </div>
        <div class="info-item">
            <img src="/img/item3.png" class="item-img">
            <h3 class="subtitle">Service</h3>
            <p class="item-text">We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
        </div>
    </div>
</template>
<script>
   export default {
     name: 'HomeInfo',
     
   }
   </script>

   <style>
    
.home-info {
    background-color: rgb(37, 37, 50);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.info-item{
    margin-top:42px ;
    margin-bottom: 53px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    max-width: 325px;
    max-height: 262px;
}

.item-img {
    width: 63.53px;
    height: 59.96px;
}

.subtitle { 
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 12px;
    margin-top: 42px;
}

.item-text {
    color: rgb(176, 176, 178);
    font-size: 14px;
    font-weight: 400;
    text-align: left;
   
}
    </style>