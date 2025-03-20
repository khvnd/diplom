<template>
    <div class="faq">
        <div class="faq-info">
            <h3 class="faq-subtitle">FAQ</h3>
            <h2 class="faq-title">Frequently Asked Questions</h2>
            <p class="faq-text">At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:</p>
            <div>
                <img src="/img/Light1.svg" class="gradient-faq">
            </div>
        </div>
      <div v-for="(item, index) in faqList" :key="index" class="faq-item">
        <button @click="toggle(index)" class="faq-question">
          {{ item.question }}
          <span>{{ activeIndex === index ? '&#8743;' : '&#8744;' }}</span>
          
        </button>
        <div v-if="activeIndex === index" class="faq-answer">
            <hr />
          {{ item.answer }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqList: [],
        activeIndex: null
      };
    },
    mounted() {
      this.loadFAQ(); 
    },
    methods: {
      async loadFAQ() {
        try {
          const response = await fetch('/faq.json'); // Загружаем JSON из public
          const data = await response.json();
        this.faqList = data.slice(0, 5); // Берем только первые 5 вопросов
        } catch (error) {
          console.error('Error loading FAQ:', error);
        }
      },
      toggle(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>
  
  <style scoped>
  .faq {
    max-width: 790px;
    margin: auto;
    padding: 20px;
    margin-bottom: 150px;
  }

  .faq-info {
    width: 764px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-bottom: 40px;
    position: relative;
  }

  .faq-subtitle {
    background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Chakra Petch";
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
  }

  .faq-title {
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 600;
  }

  .faq-text {
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    text-align: center;
  }

  .gradient-faq {
    width: 745px;
    position: absolute;
    top: -201px;
    left: 410px;
    z-index: -1;
  }

  .faq-item {
    border: 1px solid;
    border-image: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0)) 1;;
    background: #333;
    margin-bottom: 10px;
  }

  .faq-item:hover {
    border: 1px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
  }

  .faq-question {
    width: 100%;
    min-height: 64px;
    padding: 10px;
    background: rgba(37, 37, 50, 0.81);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 12px;
  }

  .faq-answer {
    padding: 10px;
    background: rgba(37, 37, 50, 0.81);
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 400;
  }


hr {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.35); /* Белая линия перед ответом */
  margin-bottom: 10px;
}
  </style>
  