
<template>
<div class="our-articles">
    <div class="content-articles">
        <div class="info-articles">
            <h3 class="articles-subtitle">OUR ARTICLES</h3>
            <h2 class="articles-title">Stay Up-to-Date with Our VR Insights</h2>
        </div>
        <button class="see-all">see all</button>
    </div>
    <SliderArticles />
    <ScrollList />
</div>
</template>

<script setup>
import ScrollList from '@/components/ScrollList.vue';
import SliderArticles from '@/components/SliderArticles.vue';

</script>

<style>
.our-articles {
    height: 768px;
    position: relative;
    margin-bottom: 150px;
}

.info-articles {
    max-width: 832px;
}

.content-articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
}

.articles-subtitle {
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

.articles-title {
    color: rgb(255, 255, 255);
    font-size: 47px;
    font-weight: 600;
}

.see-all {
    background: rgba(255, 255, 255, 0.06);
    width: 140px;
    height: 50px;
    border: 1px solid;
    border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
}
</style>