<template>
    <div class="card">
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <h3 class="card-subtitle">{{ title }}</h3>
      <p class="card-text">{{ information }}</p>
      <router-link  :to="{ name: 'detailservice', params: { id: service.id } }">
        <button class="learn-more">Learn More</button>
      </router-link>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      information: String,
      service: Object
    }
  };
  </script>
  
  <style scoped>

  .card-subtitle {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 400;
    margin-top: 60px;
  }

  .card-text {
    color: rgb(176, 176, 178);
    font-size: 14px;
    font-weight: 400;
    margin-top: 12px;
  }

  .card {
    height: 302px;
    background: rgba(37, 37, 50, 0.6);
    border: 1px solid #333;
    padding: 20px;
    color: white;
    text-align: left;
    transition: all 0.3s ease;
    position: relative; 
  overflow: hidden;
  }
  .learn-more {
    width: 177px;
    height: 50px;
    background: transparent;
    border: 1px solid; 
    border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
    color: white;
    padding: 8px 12px;
    cursor: pointer;
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.3s ease;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }

  .card:hover .learn-more {
  bottom: 20px; 
  opacity: 1;
}

@media (max-width: 768px) {
  .card {
    height: 239px;
  }

  .card-subtitle {
    margin-top: 35px;
  }
}


  </style>
  