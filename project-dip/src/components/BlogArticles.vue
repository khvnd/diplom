<template>
    <div class="art-container">
      
      <div class="art-list">
        <div v-for="article in paginatedArticles"
        :key="article.id" class="art-item">
          <img :src="article.img" alt="Article Image" class="art-image" />
          <div class="art-info">
            <span class="art-category">{{ article.category }}</span>
            <h3 class="art-title">{{ article.title }}</h3>
            <router-link  :to="`/article/${article.id}`" class="more-link">read more</router-link> 
          </div> 
        </div>
      </div>

      <div class="pagination">
      
      <button 
      v-for="page in totalPages" :key="page" 
        @click="setPage(page)" 
        :class="{ active: currentPage === page }">
        {{ page }}
      </button>
      
    </div>
  </div>
    
  </template>


<script>
export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      windowWidth: window.innerWidth,
      perPage: 9 
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / this.perPage);
    },
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.articles.slice(start, start + this.perPage);
    }
  },
  watch: {
    windowWidth(newWidth) {
      this.updatePerPage(newWidth);
    }
  },
  methods: {
    updatePerPage(width) {
      this.perPage = width <= 768 ? 8 : 9;
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    async fetchArticles() {
      try {
        const response = await fetch("/article.json");
        this.articles = await response.json();
      } catch (error) {
        console.error("Ошибка загрузки статей:", error);
      }
    },
    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  },
  mounted() {
    this.updatePerPage(this.windowWidth);
    this.fetchArticles();
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }
}
</script>
<style>

.art-container {
    margin-bottom: 150px;
}

.art-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(3, 1fr);    
  gap: 10px;
  margin-bottom: 64px;
}

.art-item {
    max-width: 377px;
height: 417px;
background: rgb(37, 37, 50);
border: 1px solid #333;
}

.art-image {
    width: 100%;
    height: 252px;
    object-fit: cover;
}

.art-info {
    padding: 16px 23px;
}

.art-category {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.3);
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    
}
.art-title {
    color: rgb(255, 255, 255);
font-size: 18px;
font-weight: 400;
padding-top: 14px;
}

.more-link {
    font-size: 14px;
    font-weight: 700;
    background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    padding-top: 20px;
}

.pagination button {
    width: 34px;
    height: 34px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid;
    border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 400;
}

.pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
}

@media (max-width: 768px) {
  .art-list {
    grid-template-columns: repeat(2, 1fr);
  }
} 

@media (max-width: 425px) {
  .art-list {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-bottom: 64px;
    justify-items: center;
  }
}
</style>