<template>
    
    <div class="testimonial">
        <h2>What Our Clients Are Saying</h2>
      
        <!-- Круги -->
        <div class="circles">
          <div class="circle" style="--size: 200px;"></div>
          <div class="circle" style="--size: 350px;"></div>
          <div class="circle" style="--size: 500px;"></div>
          <div class="circle" style="--size: 650px;"></div>
        </div>
      
        <!-- Центральный VR-пользователь -->
        <div class="center">
          <img src="vr-user.png" alt="VR User">
        </div>
      
        <!-- Аватары с отзывами -->
        <div class="avatars">
          <div class="avatar" style="--x: -150px; --y: -100px;">
            <img src="avatar1.png" alt="Client 1">
            <div class="tooltip">"Great experience!"</div>
          </div>
          <div class="avatar" style="--x: 150px; --y: -150px;">
            <img src="avatar2.png" alt="Client 2">
            <div class="tooltip">"Amazing service!"</div>
          </div>
          <div class="avatar" style="--x: 200px; --y: 100px;">
            <img src="avatar3.png" alt="Client 3">
            <div class="tooltip">"Highly recommend!"</div>
          </div>
        </div>
      </div>
</template>

<script>
   export default {
     name: 'TestimonialComp',
     
   }
   </script>

   <style>
    
.testimonial {
    position: relative;
    text-align: center;
    color: white;
    background: #0a0a0a;
    padding: 50px;
    min-height: 700px;
    overflow: hidden;
  }
  
  /* Центральный VR-пользователь */
  .center img {
    width: 200px;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(0, 153, 255, 0.5);
  }
  
  /* Круги */
  .circles {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .circle {
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  /* Аватары */
  .avatars {
    position: relative;
    width: 100%;
    height: 400px;
  }
  
  .avatar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)));
  }
  
  .avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid white;
    transition: transform 0.3s ease-in-out;
  }
  
  .avatar:hover img {
    transform: scale(1.2);
  }
  
  .tooltip {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .avatar:hover .tooltip {
    opacity: 1;
  }
  
    </style>