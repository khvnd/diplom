<template>
    <div class="home-service-block">
        <div class="home-service-info">
            <div class="home-service-our">
                <h3 class="home-servise-subtitle">OUR SERVICE</h3>
                <h2 class="home-service-title">Our Service</h2>
            </div>
            <div class="h-s-t-block">
                <p class="home-service-text">We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
            </div>
        </div>
        <div class="grid-container">
            <CardServise v-for="(service, index) in services" :key="index" :title="service.title" :description="service.description">
                <template #icon>
                    <img :src="service.icon" alt="icon">
                </template>
            </CardServise>
        </div>
    </div>
</template>
<script>

import CardServise from '@/components//CardServise.vue';


   export default {
    name: 'HomeService',
    components: {
        CardServise
      },
     data() {
    return {
      services: [
        { title: "VR Development", description: "From concept to creation, our team of VR developers will bring your vision to life.", icon: "/img/service1.svg" },
        { title: "VR Design", description: "Our talented VR designers will create immersive and engaging environments that will captivate your audience.", icon: "/img/service2.svg" },
        { title: "VR Consulting", description: "Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.", icon: "/img/service3.svg" },
        { title: "VR Games", description: "We offer a wide selection of VR games that are suitable for players of all ages and skill levels.", icon: "/img/service4.svg" },
        { title: "VR Events", description: "Make your next event unforgettable with our VR event services.", icon: "/img/service5.svg" },
        { title: "VR Entertainment", description: "reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.", icon: "/img/service6.svg" }
      ]
    };
  }
   }
   </script>

   <style>

   .home-service-block {
    margin-bottom: 210px;
   }

   .home-service-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
    
   }

   .home-service-our {
    width: 259px;
    height: 91px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
   }

    .home-servise-subtitle {
        background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Chakra Petch";
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        text-transform: uppercase;
        display: inline-block;
    }

    .home-service-title {
        color: rgb(255, 255, 255);
        font-size: 47px;
        font-weight: 600;
        text-align: left;
    }

    .h-s-t-block {
        width: 625px;
        height: 112px;
    }

    .home-service-text {
        color: rgb(209, 209, 209);
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
    }

    .grid-container {
        margin-top: 46px;
        display: grid;
        grid-template-columns: repeat(3, 379px); 
        gap: 20px;
        justify-content: space-between;
    }

    @media (max-width: 1024px) {
        .grid-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .grid-container {
            grid-template-columns: 1fr;
        }
    }

    .card:nth-child(3n+2) { 
        transform: translateY(50px);
    }

    .card:nth-child(3n+3) { 
        transform: translateY(100px);
    }

    @media (max-width: 768px) {
        .card:nth-child(3n+2),
        .card:nth-child(3n+3) {
            transform: translateY(0); 
        }
    }

    @media (max-width: 1024px) {
        .card:nth-child(3n+2),
        .card:nth-child(3n+3) {
            transform: translateY(0); 
        }
    }
    </style>