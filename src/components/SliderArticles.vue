<template>
    <div class="popular">
        <img src="/img/light1.svg" alt="gradient" class="slide-gradient">
        <h2 class="popular-subtitle">Popular Article</h2>
    <swiper
      :modules="modules"
      navigation
      :slides-per-view="1"
      :loop="true"
      class="custom-swiper"
    >
      <swiper-slide class="my-swiper" v-for="slide in slides" :key="slide.id">
        <div class="slide-content">
          <img :src="slide.img" alt="VR Image" class="slide-image" />
          <div class="slide-overlay">
            <span class="category">{{ slide.category }}</span>
            
            <h2 class="slide-title">{{ slide.title }}</h2>
            <router-link  :to="`/article/${slide.id}`">
              <button class="next-btn">
              <span>&#10132;</span>
            </button>
            </router-link>
            
        
          </div>
        </div>
      </swiper-slide>
    </swiper>
</div>

  </template>
  
  <script setup>
import { ref, onMounted } from "vue"; 
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



const slides = ref([]);

const modules = [Navigation];

onMounted(async () => {
  try {
    const response = await fetch("/article.json"); 
    slides.value = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
});
</script>

<style >

.popular {
    max-width: 636px;
    min-height: 493px;
    position: relative;
    margin-top: 104px;
}

.slide-gradient {
    position: absolute;
    width: 730px;
    height: 585px;
    left: -254px;
    top: -220px;
}

.popular-subtitle {
    color: rgb(255, 255, 255);
    font-size: 28px;
    font-weight: 600;
    padding-bottom: 32px;
}

.custom-swiper {
  width: 100%;
  max-width: 636px;
  position: relative;
}

.slide-content {
  position: relative;
  overflow: hidden;
  
}

.slide-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 15px;
  box-shadow: inset 0px -80px 80px -50px rgba(0, 0, 0, 0.8);
}

.category {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  
  
}

.slide-title {
    color: rgb(255, 255, 255);
    font-size: 29px;
    font-weight: 600;
    margin: 10px 0 0;
}

.next-btn {
  position: absolute;
  right: 15px;
  bottom: 15px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid; 
  border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
}

.next-btn span {
  font-size: 20px;
  color: white;
}

@media (max-width: 1024px) {
  .popular {
    max-width: 923px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .custom-swiper {
    max-width: 923px;
  }
}

@media (max-width: 768px) {
  .popular {
    max-width: 727px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .custom-swiper {
    max-width: 727px;
  }
}

@media (max-width: 425px) {
  .slide-gradient {
    width: 600px;
    z-index: -1;
  }

  .slide-content {
    width: 398px;
  }

  .my-swiper {
    --swiper-theme-color: #41424336;
  }

  .custom-swiper .swiper-button-next, .swiper-button-prev {
    --swiper-navigation-size: 16px;
  }

  .slide-title {
    font-size: 20px;
    width: 264px;
  }

  .popular {
    margin-top: 40px;
    min-height: 0;
  }
}
</style>
