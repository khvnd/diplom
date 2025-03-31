<template>
    <div class="articles-container">
      <h2 class="scroll-subtitle">Recent Article</h2>
      <div class="articles-list">
        <div v-for="article in articles" :key="article.id" class="article-item"
        @click="$emit('select-article', article)">
          <img :src="article.img" alt="Article Image" class="article-image" />
          <div class="article-info">
            <span class="category">{{ article.category }}</span>
            <h3 class="scroll-title">{{ article.title }}</h3>
          </div>
    
        </div>
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
    font-size: 20px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    
    padding-top: 32px;
}

.articles-container {
    
    max-width: 333.29px;

}

.articles-list {
    max-height: 455px;; 
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: flex-start;
    padding: 24px 0;
}


.article-image {
    width: 102px;
    height: 65px;
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
    font-size: 10px;
    font-weight: 500;
    color: rgb(255, 255, 255);
}

.scroll-title {
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    line-height: 23px;
    margin-top: 10px;
}


</style>

  