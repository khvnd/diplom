<template>
    <div class="about-question">
        <div class="question-image">
            <div class="bg"></div>
            <img src="/img/chooseabout.png" class="img3">
            <div class="gradient-question"></div>
        </div>
        <div class="question-choose-info">
            <h3 class="question-choose-subtitle">WHY CHOOSE US</h3>
            <h2 class="question-choose-title">Why Choose Us for Your VR Needs</h2>
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

.about-question {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 90px;
    margin-bottom: 150px;
}

.question-choose-info {
    width: 546px;
    padding-top: 94px;
    padding-bottom: 90px;
}

.question-choose-subtitle {
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

.question-choose-title {
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
    padding-top: 12px;
}

.dropdown {
  
  padding: 10px;
  max-width: 548px;
  
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
  margin-bottom: 10px; /* Отступ перед текстом */
}

.content {
 
  color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
}

.question-image {
    position: relative;
}

.bg {
    position: absolute;
    width: 398.94px;
    height: 496.53px;
    left: 13.69px;
    top: 40.47px;
    background: rgb(37, 37, 50);
    opacity: 0.5;
 }


.img3 {
    position: relative;
    left: 14.29px;
    top: -38px;
}

.gradient-question {
    position: absolute;
    width: 516px;
    height: 570px;
    left: -6px;
    top: -104px;
    background: url(http://localhost:8080/img/Light1.8094ae70.svg) no-repeat center;
    background-size: cover;
    transform: rotate(358deg);
    pointer-events: none;
}
</style>