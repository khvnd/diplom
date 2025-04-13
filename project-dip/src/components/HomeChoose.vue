<template>
    <div class="home-choose">
        <div class="home-choose-info">
            <h3 class="home-choose-subtitle">WHY CHOOSE US</h3>
            <h2 class="home-choose-title">Why Choose Us for Your VR Needs</h2>
            <div v-for="(item, index) in items" :key="index"  class="dropdown">
                <div class="header" @click="toggle(index)">
                    <span class="choose-question">{{ item.title }}</span>
                    <span class="arrow">{{ openIndex === index ? '&#8743;' : '&#8744;' }}</span>
                </div>
                <div class="line"></div>
                <div v-if="openIndex === index" class="content">
                    {{ item.content }}
                </div>  
            </div>
        </div>
        <div class="home-choose-image">
            <div class="bg-choose"></div>
            <img src="/img/image3.svg" class="img-home-choose">
            <div class="gradient-about"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const items = ref([
  {
    title: 'Passionate and Experienced Team',
    content:
      'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.',
  },
  {
    title: 'Customized Solutions',
    content:
      'We utilize the latest advancements in VR hardware and software to deliver state-of-the-art experiences that push the boundaries of innovation.',
  },
  {
    title: 'Exceptional Customer Service',
    content:
      'Our team focuses on intuitive and immersive design principles to ensure users have the best possible VR experience.',
  },
]);

const openIndex = ref(null); 

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index; 
};
</script>

<style scoped>

.home-choose {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 90px;
}

.home-choose-info {
    width: 546px;
    padding-top: 94px;
    padding-bottom: 90px;
}

.home-choose-subtitle {
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

.home-choose-title {
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
    padding-top: 12px;
}

.dropdown {
  
  padding: 10px;
  max-width: 500px;
  
}

.header {
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.choose-question {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 500; 
    text-align: left;
    padding-top: 32px;
}

.arrow {
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 100;
}

.line {
border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  margin-bottom: 10px; 
}

.content {
 
  color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
}

.home-choose-image {
    position: relative;
}

.bg-choose {
    position: absolute;
    width: 398.94px;
    height: 496.53px;
    left: -0.31px;
    top: 127.47px;
    background: rgb(37, 37, 50);
    opacity: 0.5;
 }


.img-home-choose {
    position: relative;
    left: 14.29px;
    top: -38px;
}

.gradient-about {
    position: absolute;
    width: 420px;
    height: 570px;
    left: -6px;
    top: -24px;
    background: url(/public/img/Light1.svg) no-repeat center;
    background-size: cover;
    transform: rotate(360deg);
    pointer-events: none;  
}

@media (max-width: 1024px) {
    .home-choose {
        flex-wrap: nowrap;
        gap: 0;
    }

    .img-home-choose {
        width: 500px;
        top: -39px;
    }

    .bg-choose {
        width: 373.94px;
        height: 462.53px;
        left: 87.69px;
        top: 88.47px;
    }
    
    .gradient-about {
        width: 377px;
        left: 86px;
    }
}

@media (max-width: 768px) {
    .home-choose-info {
        padding-top: 0;
        padding-bottom: 0;
    }

    .home-choose {
        flex-wrap: nowrap;
    }

    .img-home-choose {
        width: 390px;
        left: 0.29px;
        top: 5px;
    }

    .bg-choose {
        width: 331.94px;
        height: 368.53px;
        left: 39.69px;
        top: 91.47px;
    }

    .gradient-about {
        width: 334px;
        height: 487px;
        left: 39px;
        z-index: -1;
        transform: rotate(360deg)
    }

    .home-choose-title {
        font-size: 28px;
        line-height: 31px;
    }

    .dropdown {
        padding: 0;
        max-width: 371px;
    }

    .choose-question {
        font-size: 15px;
    }
}

@media (max-width: 425px){
    .home-choose {
        margin: 100px auto;
        flex-direction: column-reverse;
        gap: 30px;
        align-items: flex-start;
    }

    .img-home-choose {
        width: 409px;
        height: 491px;
        left: -1px;
        top: -30px;
    }

    .bg-choose {
        width: 296px;
        height: 369px;
        left: 36px;
        top: 85.47px;
    }

    .gradient-about {
        width: 432px;
        left: -22px;
        top: -121px;
    }

    .home-choose-info {
        padding: 0;
        width: 398px;
    }

    .home-choose-title {
        font-size: 32px;
        line-height: 41px;
        margin-bottom: 32px;
    }

    .home-choose-image {
        overflow-x: clip;
    }

    .choose-question {
        padding-top: 0;
    }

    .dropdown {
        padding: 10px 0;
    }
}
</style>