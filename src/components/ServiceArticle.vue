<template>
  <div class="circle-container">

    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4 "></div>
    <div class="circle circle5"></div>
    <div class="circle circle6"></div>


    <div v-if="loading" class="center-content">
      <h2>Loading...</h2>
    </div>


    <div v-else-if="error" class="center-content">
      <h2>Error: {{ error }}</h2>
    </div>

    
    
    <template v-else>
      
      <div class="center-content">
          <h3 class="center-subtitle">SERVICE</h3>
        <h2 class="center-title">{{ activeButton.title }}</h2>
        <p class="center-text">{{ activeButton.description }}</p>

        <div class="list">
          <p class="list-text">Our {{ activeButton.title }} services include:</p>
            <ul class="ul-list">
              <li v-for="(item, index) in servicesList" :key="index" class="li-list">
                <img src="/img/check.png" class="checkmark" />
                {{ item }}
              </li>
            </ul>
        </div>
        <p class="center-text">{{ activeButton.secondDes }}</p>
        <button class="cont-us">Contact us</button>
      </div>

      
      <div 
        v-for="(button, index) in buttons" 
        :key="index" 
        class="circle-button" 
        :class="{ active: activeButton === button }"
        :style="getButtonsStyle(index)" 
        @click="setActive(button)"
      >
        {{ button.title }}
      </div>
      <div class="circle-navigation">
        <button @click="prevButton" class="arrow left-arrow">←</button>
        <button @click="nextButton" class="arrow right-arrow">→</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
    props: ['id'], 
    data() {
        return {
            buttons: [], 
            servicesList: [], 
            activeButton: null, 
            loading: true, 
            error: null
        };
    },
    mounted() {
        this.loading = true;

        fetch("/buttons.json")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to load data");
            return response.json();
        })
        .then((data) => {
            this.buttons = data.buttons;
            const foundButton = this.buttons.find((btn) => btn.id === Number(this.$route.params.id));
            this.activeButton = foundButton || this.buttons[3]; // По умолчанию первая кнопка
            this.updateServiceList();
            this.loading = false;
        })
        .catch((err) => {
            this.error = err.message;
            this.loading = false;
        });
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 425;
        },
        isTablet() {
            return window.innerWidth >=768;
        },
        isDesktop() {
            return window.innerWidth >= 1024; 
        }
    },
    methods: {
        updateServiceList() {
            if (this.activeButton && this.activeButton.list) {
                this.servicesList = this.activeButton.list;
            } else {
                this.servicesList = [];
            }
        },
        getButtonsStyle(index) {
        
        const activeIndex = this.buttons.indexOf(this.activeButton);

        if (this.isMobile) {
            if (index === activeIndex) {
                return {
                    position: 'absolute',
                    top: '226px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    
                };
            }
            return { display: 'none' };
        }
        
         else {
            
            const total = this.buttons.length;
            const startAngle = -180;
            const endAngle = 0;
            const angle = startAngle + ((endAngle - startAngle) / (total - 1)) * index;
            const radius = 470;

            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return { transform: `translate(${x}px, ${y}px)` };
        }
    },
        prevButton() {
            const currentIndex = this.buttons.indexOf(this.activeButton);
            const prevIndex = (currentIndex - 1 + this.buttons.length) % this.buttons.length;
            this.setActive(this.buttons[prevIndex]);
        },
        nextButton() {
            const currentIndex = this.buttons.indexOf(this.activeButton);
            const nextIndex = (currentIndex + 1) % this.buttons.length;
            this.setActive(this.buttons[nextIndex]);
        },
        setActive(button) {
            this.activeButton = button;
            this.updateServiceList();
            
            this.$nextTick(() => {
                this.$forceUpdate();
            });
        }
    },
    watch: {
        id(newId) {
            const foundButton = this.buttons.find((btn) => btn.id === Number(newId));
            if (foundButton) {
                this.activeButton = foundButton;
            } else {
                this.error = "Button not found";
            }
        },
        activeButton() {
            this.updateServiceList();
        }
    }
}
</script>

<style scoped>

.circle-container {
  position: relative;
  margin-bottom: 200px;
  height: 1353px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.circle1 {
  width: 350px;
  height: 350px;
}

.circle2 {
  width: 500px;
  height: 500px;
}

.circle3 {
  width: 650px;
  height: 650px;
}

.circle4 {
  width: 800px;
  height: 800px;
}

.circle5 {
  width: 950px;
  height: 950px;
  border: 1px solid rgb(255 255 255 / 8%);
}

.circle6 {
  width: 1100px;
  height: 1100px;
}

.center-content {
  position: absolute;
  top: 294px;
  text-align: center;
  color: white;
  max-width: 625px;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.center-subtitle {
  background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Chakra Petch";
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 12px;
}

.center-title {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 10px;
}

.center-text {
  color: rgb(209, 209, 209);
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  text-align: justify;
  margin-bottom: 32px;
}

.list {
  width: 431px;
  background: rgb(37 37 50 / 68%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 32px;
  padding: 30px;
}

.list-text {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
  text-align: left;
}

.ul-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      
  }

  .li-list {
      color: rgb(255, 255, 255);
      font-size: 15px;
      font-weight: 400;
      text-align: left;
      list-style-type: none;
  }

  .cont-us {
      width: 168px;
  height: 50px;
  border: none;
  background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233) 100%);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
    transition: 0.3s;
}

.cont-us:hover {
  box-shadow: 0 0 10px #3498db, 0 0 40px #3498db;
}

.circle-button {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(37, 37, 50, 0.8);
  color: white;
  border: 1px solid #ffffff1a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.circle-button.active {
  border: 1px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(rgb(37 37 50 / 99%), rgb(37 37 50)), linear-gradient(135deg, #0cbaf1, #e95ce9);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.circle-navigation {
  display: none;
}

@media (max-width: 1024px) {
  .circle-button {
        width: 100px;
        height: 100px;
        font-size: 14px;
    }
    
    .circle-button:hover {
        transform: scale(1.1);
    }

}

@media (max-width: 768px) {
  .circle-navigation {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 310px;
      width: 100%;
  }
  
  .arrow {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: white;
      margin: 0 20px;
  }
  .circle-container {
      overflow-x: clip;
      
  }

  .circle-button.active {
         
        transform: translateX(-50%);
        z-index: 1000;
        font-size: 16px;
    }
    
    .circle-button:not(.active) {
        opacity: 0.6;
        transition: opacity 0.3s;
    }
    
    .circle-button:not(.active):hover {
        opacity: 0.9;
    }
}

@media (max-width: 425px) {
    .circle-container {
      overflow: clip;
      height: 1598px;
  }

  .center-content {
    max-width: 387px;
    align-content: center;
    top:391px;
  }
  .circle-navigation {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 331px;
  width: 100%;
  opacity: 1;
}

.arrow {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
  margin: 0 20px;
}

.circle-button.active {
        top: 20px ;
        left: 50% ;
        transform: translateX(-50%);
        z-index: 1000;
        font-size: 14px;
    }
  }
</style>