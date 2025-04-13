<template>
    <div class="about-faq">
        <div class="about-faq-info">
            <h3 class="about-faq-subtitle">FAQ</h3>
            <h2 class="about-faq-title">Frequently Asked Questions</h2>
            <p class="about-faq-text">At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:</p>
            <div v-if="showImage">
                <img src="/img/Light1.svg" class="gradient-faq">
            </div>
        </div>
      <div v-for="(item, index) in faqList" :key="index" class="about-faq-item">
        <button @click="toggle(index)" class="about-faq-question">
          {{ item.question }}
          <span>{{ activeIndex === index ? '&#8743;' : '&#8744;' }}</span>
          
        </button>
        <div v-if="activeIndex === index" class="about-faq-answer">
            <hr />
          {{ item.answer }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    limit: {
      type: Number,
      default: 5, // По умолчанию показываем 5 элементов
      validator: value => value >= 0 // Проверяем что limit не отрицательный
    },
    showImage: {
      type: Boolean,
      default: true // По умолчанию показываем изображение
    }
  },
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
          const response = await fetch('/faq.json');
        const data = await response.json();
        // Если limit = 0 или undefined - показываем все элементы
        this.faqList = this.limit ? data.slice(0, this.limit) : data;
      } catch (error) {
        console.error('Error loading FAQ:', error);
        this.faqList = []; // На случай ошибки;
        }
      },
      toggle(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>
  
  <style scoped>
  .about-faq {
    max-width: 790px;
    margin: auto;
    padding: 20px;
    margin-bottom: 150px;
  }

  .about-faq-info {
    max-width: 764px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-bottom: 40px;
    position: relative;
  }

  .about-faq-subtitle {
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

  .about-faq-title {
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 600;
  }

  .about-faq-text {
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

  .about-faq-item {
    border: 1px solid;
    border-image: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0)) 1;;
    background: #333;
    margin-bottom: 10px;
  }

  .about-faq-item:hover {
    border: 1px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
  }

  .about-faq-question {
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
    text-align: left;
  }

  span {
    font-size: 12px;
  }

  .about-faq-answer {
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

@media (max-width: 1024px) {
  .gradient-faq {
    top: -180px;
    left: 74px;
  }
}

@media (max-width: 768px) {
   .gradient-faq {
    left: -25px;
   }
}

@media (max-width: 425px) {
  .about-faq-title {
    font-size: 32px;
  }

  .about-faq-info {
    text-align: center;
  }

  .about-faq-question {
    font-size: 16px;
    min-height: 43px;
  }

  .gradient-faq {
    display: none;
  }

  .about-faq {
    margin-bottom: 100px;
  }
}
  </style>
  