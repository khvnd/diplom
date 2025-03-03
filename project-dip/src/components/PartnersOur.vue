<template>
    <div class="partners">
        <div class="partners-info">
            <h3 class="partners-subtitle">Our Trusted Partners</h3>
            <h2 class="partners-title">Discover the Companies We Work With</h2>
        </div>
    <div class="container">
      <!-- Дуги -->
        <div class="circle" style="--size: 300px;"></div>
        <div class="circle" style="--size: 450px;"></div>
        <div class="circle" style="--size: 600px;"></div>
        <div class="circle" style="--size: 750px;"></div>
        <div class="circle" style="--size: 900px;"></div>
  
      <!-- Центр (VR-пользователь) -->
      <div class="center-image">
        <img src="/img/partnersman.png" alt="VR User" />
      </div>
  
      <!-- Логотипы на одной дуге -->
      <div class="logo-container">
      <div class="logo" v-for="(logo, index) in 7" :key="index">
        <div class="bg-logo">
        <img :src="`/img/partners${index + 1}.png`" :alt="`Logo ${index + 1}`" />
        </div>
      </div>
    </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
   
};
</script>

<style scoped>

.partners {
    height: 890px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 58px;

}

.partners-info {
    max-width: 858px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.partners-subtitle {
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

.partners-title {
    color: rgb(255, 255, 255);
    font-size: 47px;
    font-weight: 600;  
}

/* Контейнер */
.container {
  position: relative;
  height: 741px;
  margin-top: 150px;
}

/* Дуги */
.circle {
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-bottom: none;
    clip-path: ellipse(60% 100% at 50% 0%);
}


/* VR-пользователь */
.center-image {
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translate(-50%, -50%);
  
}
.center-image img {
    width: 707.06px;
}

.bg-logo {
    width: 102px;
    height: 102px;
    background: rgba(37, 37, 50, 0.8);
    border-radius: 50%;
    display: flex; 
    justify-content: center;
}
.logo-container {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Логотипы */
.logo {
  position: absolute;
  width: 40px;
  height: 40px;
  transform-origin: center bottom;
}

/* Расположение логотипов по дуге */
.logo:nth-child(1) { transform: rotate(252deg) translateY(-420px) rotate(108deg); }
.logo:nth-child(2) { transform: rotate(278deg) translateY(-370px) rotate(80deg); }
.logo:nth-child(3) { transform: rotate(312deg) translateY(-300px) rotate(45deg); }
.logo:nth-child(4) { transform: rotate(350deg) translateY(-250px) rotate(9deg); }
.logo:nth-child(5) { transform: rotate(36deg) translateY(-260px) rotate(325deg); }
.logo:nth-child(6) { transform: rotate(80deg) translateY(-300px) rotate(280deg); }
.logo:nth-child(7) { transform: rotate(110deg) translateY(-360px) rotate(250deg); }

/* Стили для логотипов */
.logo img {
  width: 79px;
  height: 100%;
  object-fit: contain;
}

/* Адаптивность */
@media (max-width: 768px) {
  .center-image {
    position: absolute;
    top: 50%;
    left: -270px;
    transform: translate(-50%, -50%);
  }
  .logo {
    width: 30px;
    height: 30px;
  }
  .logo:nth-child(1) { transform: rotate(252deg) translateY(-420px) rotate(108deg); }
.logo:nth-child(2) { transform: rotate(278deg) translateY(-370px) rotate(80deg); }
.logo:nth-child(3) { transform: rotate(312deg) translateY(-300px) rotate(45deg); }
.logo:nth-child(4) { transform: rotate(350deg) translateY(-250px) rotate(9deg); }
.logo:nth-child(5) { transform: rotate(36deg) translateY(-260px) rotate(325deg); }
.logo:nth-child(6) { transform: rotate(80deg) translateY(-300px) rotate(280deg); }
.logo:nth-child(7) { transform: rotate(110deg) translateY(-360px) rotate(250deg); }
}
</style>