<template>
    <div class="articles-container">
      <h2 class="scroll-subtitle">Recent Article</h2>
      <div class="articles-list">
        <router-link v-for="article in articles" :key="article.id" :to="`/article/${article.id}`" class="article-item">
          <img :src="article.img" alt="Article Image" class="article-image" />
          <div class="article-info">
            <span class="category">{{ article.category }}</span>
            <h3 class="scroll-title">{{ article.title }}</h3>
          </div>
          
          
        </router-link>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from "vue";

const articles = ref([]);


onMounted(async () => {
  try {
    const response = await fetch("/article.json"); 
    articles.value = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
});
</script>

<style scoped>

.scroll-subtitle {
    font-size: 28px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    padding-left: 97px;
    padding-top: 32px;
}

.articles-container {
    margin: auto;
    color: white;
    background: rgb(37, 37, 50);
    position: absolute;
    left: 574px;
    top: 150px;

}

.articles-list {
    max-height: 572px;; 
  overflow-y: auto;
  padding-right: 10px;
}


.articles-list::-webkit-scrollbar {
  width: 5px;
  padding-right: 72px;
}

.articles-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

.article-item {
    display: flex;
    padding: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 21px;
    height: 100%;
    padding-left: 97px;
    cursor: pointer;
}

.article-image {
    width: 142px;
    height: 91px;
  object-fit: cover;
  
}

.article-info {
    max-width: 297px;
    min-height: 78px;
  padding-left: 21px;
}

.category {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.3);
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(255, 255, 255);
}

.scroll-title {
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    margin-top: 10px;
}

.next-btn {
    background: rgba(255, 255, 255, 0.06);;
  border: 1px solid ;
  padding: 6px 10px;
  cursor: pointer;
  border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
}

.next-btn span {
  font-size: 18px;
  color: white;
}

@media (max-width: 1024px) {
  .articles-container {
    width: 923px;
    position: static;
    margin-top: 67px;
  }

  .article-item {
    padding: 20px;
    padding-left: auto;
    gap: 0;
    justify-content: space-around;
  }

  .scroll-subtitle {
    padding-left: 10px;
    padding-top: 10px;
    text-align: center;
  }

  .article-info {
    max-width: 412px;

  }

  .article-image {
    width: 198px;
    height: 124px;
  }
}

@media (max-width: 768px) {
  .articles-container {
    width: 727px;
    position: static;
    margin-top: 67px;
  }

  .article-item {
    padding: 20px;
    padding-left: auto;
    gap: 0;
    justify-content: space-around;
  }

  .scroll-subtitle {
    padding-left: 10px;
    padding-top: 10px;
    text-align: center;
  }

  .article-info {
    max-width: 412px;

  }

  .article-image {
    width: 198px;
    height: 124px;
  }
}

@media (max-width: 425px) {
  .articles-container {
    width: 398px;
    position: static;
    margin-top: 67px;
  }

  .article-item {
    padding: 10px;
    padding-left: auto;
    gap: 0;
   
  }

  .scroll-title {
    font-size: 16px;   
  }

  .scroll-subtitle {
    padding-left: 10px;
    padding-top: 10px;
  }
}
</style>

  