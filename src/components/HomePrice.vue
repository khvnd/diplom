<template>
    <div class="home-price">
        <div class="home-price-info">
          <img src="/img/Light1.svg" class="price-gradient">
            <h3 class="home-price-subtitle">our pricing</h3>
            <h2 class="home-price-title">Affordable VR Services for Everyone</h2>
            <p class="home-price-text">At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</p>
        </div>
        <div class="pricing-section">
         
          <div class="info">
            <div class="info-block" v-for="(item, index) in infoItems" :key="index">
              <img :src="item.icon" alt="Icon" class="icon" />
              <div>
                <h3 class="info-title">{{ item.title }}</h3>
                <p class="info-text" >{{ item.description }}</p>
              </div>
            </div>
          </div>
          
        
          <div class="image-container">
            <img src="/img/priceman.png" alt="VR User" class="vr-user" />
            <div class="price-box">
              <span>Start from</span>
              <h2 class="price-text">$99</h2>
              <router-link to="/price">
                <button class="btn">GET STARTED</button>
              </router-link>
              
              <p class="guarantee">30 Days Moneyback Guarantee</p>
            </div>
          </div>
        </div>
    </div>
    </template>
    
      
      <script>
      export default {
        data() {
          return {
            infoItems: [
              {
                icon: '/img/icon1.png',
                title: 'Customizable Packages',
                description: 'We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.'
              },
              {
                icon: '/img/icon1.png',
                title: 'Flexible Payment Options',
                description: 'We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.'
              },
              {
                icon: '/img/icon1.png',
                title: 'Satisfaction Guarantee',
                description: 'We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.'
              }
            ]
          };
        }
      };
      </script>
      
<style scoped>
  .pricing-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
    padding: 40px;
    background: rgba(37, 37, 50, 0.81);
    margin-bottom: 150px;
    margin-top: 40px;
  }
      
  .price-gradient {
    position: absolute;
    width: 601px;
    top: -193px;
    left: -203px;
    z-index: -1;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
      
  .info-block {
    display: flex;
    align-items: center;
    gap: 15px;
  }
    
  .info-title {
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 12px;
  }
    
  .info-text {
    color: rgb(176, 176, 178);
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
  }
      
  .icon {
    width: 40px;
    height: 40px;
  }
      
  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    border-left: 1px solid rgb(255, 255, 255);
  }
      
  .vr-user {
    width: 100%;
    max-width: 400px;
  }
      
  .price-box {
    width: 321px;
    position: absolute;
    bottom: -16%;
    right: 38%;
    background: rgb(37, 37, 50);
    padding: 20px;
    text-align: center;
    color: white;
    border: 1px solid; 
    border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
        
  }
      
      
      
  .btn {
    width: 182px;
    height: 50px;
    background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233) 100%);
    color: white;
    border: none;
    padding: 18px 38px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;  
  }

  .btn:hover {
  box-shadow: 0 0 10px #3498db, 0 0 40px #3498db;
}

  .price-text {
    color: rgb(255, 255, 255);
    font-size: 60px;
    font-weight: 600;
    padding-bottom: 14px;
  }

  span {
    color: rgb(209, 209, 209);
    font-size: 14px;
    font-weight: 500;
  }
      
  .guarantee {
    font-size: 12px;
    margin-top: 5px;
    font-weight: 400;
    color: rgb(176, 176, 178);
    padding-top: 14px;
  }


      


.home-price {
  margin-top: 100px;
}

.home-price-info {
    max-width: 811px; 
    position: relative;
}

.home-price-subtitle {
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

.home-price-title {
  color: rgb(255, 255, 255);
  font-size: 47px;
  font-weight: 600;
}

.home-price-text {
  color: rgb(209, 209, 209);
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
}

.home-price-content {
  height: 635px;
  background: rgba(37, 37, 50, 0.81);
  border: 1px solid rgba(255, 255, 255, 0.3)
  rgba(255, 255, 255, 0);
}

@media (max-width: 1024px) {
  .price-box {
    right: 20%;
  }
}

@media (max-width: 768px) {
  .info-text {
    text-align: justify;
  }

  .image-container {
      border-top: 1px solid rgba(90, 90, 90, 0.418);
      border-left: none;
      justify-content: flex-end;
      padding-top: 37px;
      background: url(/public/img/light2.svg);
      background-size: cover;
      background-position-x: center;
    }

  .vr-user {
    max-width: 331px;
  }

  .price-box {
    bottom: -29%;
    right: 40%;

  }

  .pricing-section { 
      grid-template-columns: 1fr;
      text-align: center;
    }
      
    .info-block {
      flex-direction: column;
      align-items: center;
    }
      
   
  }

@media (max-width: 425px) {
    .home-price {
      margin: 150px auto;
    }

    .home-price-title {
      font-size: 32px;
    }

    .info-text {
      text-align: justify;
    }

    .image-container {
      border-top: 1px solid rgba(90, 90, 90, 0.418);
      border-left: none;
      justify-content: flex-end;
      padding-top: 37px;
    }

    .info {
      padding: 40px;
    }

    .pricing-section {
      padding: 0;
    }

    .vr-user {
      max-width: 256px;
    }

    .price-box {
      bottom: -27%;
      right: 12%;
    }

}

</style>
      

