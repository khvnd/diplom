<template>
    <div class="detail-block">
    <div v-if="article" class="blog-detail">
      <span class="detail-category">{{ article.category }}</span>
      <h3 class="detail-title">{{ article.title }}</h3>
      <p class="date-text">{{ article.information }}</p>
      <img :src="article.img" alt="Article Image" class="article-image" />
      <div class="description-text" v-html="formattedDescription"></div>
    </div>
    <div v-else>
      <p>Загрузка...</p>
    </div>
    <div class="scroll">
        <ScrollBlog @select-article="updateArticle"/>
    </div>
</div>
  </template>
  
  <script>
  
    import ScrollBlog from "@/components/ScrollBlog.vue";
import { ref, onMounted, computed } from "vue";
  import { useRoute } from "vue-router";
  
  export default {
    components: {
        ScrollBlog
    },
    setup() {
      const route = useRoute();
      const article = ref(null);
  
      onMounted(async () => {
        try {
          const response = await fetch("/article.json");
          const articles = await response.json();
          article.value = articles.find(a => a.id == route.params.id);
        } catch (error) {
          console.error("Ошибка загрузки статьи:", error);
        }
      });

      const updateArticle = (selectedArticle) => {
      article.value = selectedArticle;
    };
  
      const formattedDescription = computed(() => {
        return article.value?.description
          ? article.value.description
              .split("\n\n")
              .map(paragraph => `<br><p>${paragraph}</p>`)
              .join("")
          : "<p>Описание отсутствует.</p>";
      });
  
      return { article, formattedDescription, updateArticle };
    }
  };
  </script>
  

  <style>
    .detail-block {
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 150px;
    margin-top: 130px;
    }

    .blog-detail {
        max-width: 790px;
    }

    .detail-category {
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.3);
        padding: 4px 8px;
        font-size: 14px;
        font-weight: 500;
        color: rgb(255, 255, 255);
        
    }

    .detail-title {
        color: rgb(255, 255, 255);
        font-size: 40px;
        font-weight: 600;
        padding-top: 14px;
    }

    .date-text {
        font-size: 16px;
        font-weight: 500;
        background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: left;
        text-transform: uppercase;
        display: inline-block;
        padding-top: 12px;
        padding-bottom: 24px;
    }

    .article-image {
        width: 100%;
        height: 528px;
        
    }

    .description-text {
        color: rgb(209, 209, 209);
        font-size: 16px;
        font-weight: 300;
        text-align: justify;
    }

    @media (max-width: 1024px) {
      .detail-block {
        flex-direction: column;
        align-content: center;
      }
    }

    @media (max-width: 768px) {
      .detail-block {
        flex-direction: column;
        align-content: center;
      }

      .blog-detail {
        max-width: 728px;
      }

      .article-image {
        height: 100%;
      }
    }

    @media (max-width: 425px) {
      .detail-title {
        font-size: 32px;
      }
    }
</style>
  