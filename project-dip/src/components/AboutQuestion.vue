<template>
    <div class="about-question">
        <div class="question-image">
            <div class="bg-question"></div>
            <img src="/img/chooseabout.png" class="img-question">
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

.bg-question {
    position: absolute;
    width: 398.94px;
    height: 496.53px;
    left: 13.69px;
    top: 40.47px;
    background: rgb(37, 37, 50);
    opacity: 0.5;
 }


.img-question {
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
    transform: rotate(360deg);
    pointer-events: none;
}

@media (max-width: 1024px) {
    .about-question {
        flex-wrap: nowrap;
        gap: 0;
    }

    .img-question {
        width: 500px;
        top: 4px;
        left: 0;
    }

    .bg-question {
        width: 373.94px;
        height: 462.53px;
        top: 115px;
        left: 2px;
    }

    .gradient-question {
        width: 377px;
        height: 487px;
        left: 1px;
        margin-bottom: 100px;
    }

}

@media (max-width: 768px) {
    .about-question {
        flex-wrap: nowrap;
        gap: 39px;
    }

    .img-question {
        width: 390px;
        top: 4px;
    }

    .bg-question {
        width: 331.94px;
        height: 368.53px;
        top: 83px;
    }

    .gradient-question {
        width: 334px;
        height: 487px;
        left: 13px;
        top: -54px;
        z-index: -1;
        transform: rotate(360deg);
        margin-bottom: 100px;
    }

    .question-choose-title {
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

    .question-choose-info {
        padding-top: 0;
        padding-bottom: 0;
    }
}

@media (max-width: 425px) {
    .img-question {
        width: 392px;
        left: -0.71px;
        top: 20px;
    }
    .bg-question {
        width: 325px;
        height: 405px;
        left: 1.69px;
        top: 66.47px;
    }
    .question-image {
        overflow-x: clip;
    }
    .gradient-question {
        left: -129px;
        top: -100px;
    }

    .question-choose-info {
        padding-top: 0;
        padding-bottom: 0;
    }

    .question-choose-title {
        font-size: 32px;
        margin-bottom: 32px;
    }

    .choose-question {
        padding-top: 0;
    }

    .dropdown {
        padding: 10px 0;
    }
    
    .about-question {
        margin-bottom: 100px;
    }

    
}
</style>