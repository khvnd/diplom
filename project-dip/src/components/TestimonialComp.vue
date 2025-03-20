<template>
    
    <div class="testimonial">
        <h3 class="testimonial-subtitle">TESTIMONIAL</h3>
        <h2 class="testimonial-title">What Our Clients Are Saying</h2>
      
        <!-- Круги -->
        <div class="circles">
          <div class="circle" style="--size: 300px;"></div>
          <div class="circle" style="--size: 450px;"></div>
          <div class="circle" style="--size: 600px;"></div>
          <div class="circle" style="--size: 750px;"></div>
          <div class="circle" style="--size: 900px;"></div>
          <div class="circle" style="--size: 1050px;"></div>
          <div class="circle" style="--size: 1200px;"></div>
        </div>
      
        <!-- Центральный VR-пользователь -->
        <div class="center">
          <img src="/img/circles.svg" alt="VR User">
        </div>
      
        <!-- Аватары с отзывами -->
        <div class="avatars">
          <div class="avatar" style="--x: -150px; --y: -100px;">
            <div class="avatar-bg">
            <img src="/img/avatar1.svg" alt="Client 1">
            </div>
            <div class="tooltip">"Great experience!"</div>
          </div>
          <div class="avatar" style="--x: 150px; --y: -150px;">
            <div class="avatar-bg">
            <img src="/img/avatar2.svg" alt="Client 2">
          </div>
            <div class="tooltip">"Amazing service!"</div>
          </div>
          <div class="avatar" style="--x: 200px; --y: 100px;">
            <div class="avatar-bg">
            <img src="/img/avatar3.svg" alt="Client 3">
          </div>
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
  margin-top: 150px;
  position: relative;
  text-align: center;
  color: white;
  padding: 50px;
  height: 1200px;
  overflow: hidden;
  margin-bottom: 150px;
}

.testimonial-subtitle {
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

.testimonial-title {
  color: rgb(255, 255, 255);
  font-size: 48px;
  font-weight: 600;
}
  
  /* Центральный VR-пользователь */
  .center img {
    max-width: 813px;
    position: absolute;
    left: 222px;
    top: 331px;

  }

  @media (max-width: 1024px) {
    .center img {
      max-width: 813px;
      position: absolute;
      left: 134px;
      top: 331px;
    }
  }

  @media (max-width: 768px) {
    .center img {
        max-width: 813px;
        position: absolute;
        left: 6px;
        top: 331px;
    }
  }

  @media (max-width: 425px) {
    .center img {
      max-width: 818px;
        position: absolute;
        left: -168px;
        top: 330px;
    }
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

  .avatar-bg {
    width: 75px;
    height: 75px;
    background: rgba(37, 37, 50, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
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