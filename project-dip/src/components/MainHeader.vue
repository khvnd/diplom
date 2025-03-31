<template>
  <div class="line-section">
 <header>
    <img src="/img/logo.png" alt="logo" class="logo">


    <!-- Бургер-кнопка -->
    <input type="checkbox" id="burger-toggle" class="burger-toggle" />
    <label for="burger-toggle" class="burger-button">☰</label>

    <div class="menu">
      <router-link  to="/" class="a-menu" >Home</router-link>
      <router-link  to="/about" class="a-menu">About us</router-link>
      <router-link  to="/service" class="a-menu">Service</router-link>
      <router-link  to="/price" class="a-menu">Price</router-link>
      <router-link  to="/blog" class="a-menu">Blog</router-link>  
    </div>
    <a href="#" class="a-bord">Contact us</a>

    <!-- Мобильное меню -->
    <div class="mobile-menu">
      <router-link class="a-menu" to="/">Home</router-link>
      <router-link class="a-menu" to="/about">About us</router-link>
      <router-link class="a-menu" to="/service">Service</router-link>
      <router-link class="a-menu" to="/price">Price</router-link>
      <router-link  to="/blog" class="a-menu">Blog</router-link> 
      <a href="#" class="a-bord">Contact us</a>
    </div>
</header>
<div class="line-img"></div>
</div>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style scoped lang="scss">
header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 31px 0;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

header img{
    width: 101px;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 12px;
}

.a-menu {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 300;
}

.menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;    
}
.a-bord {
  color: rgb(255, 255, 255);
    border: 1px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
    padding: 12px 24px 12px 24px;
}

/* Бургер-кнопка */
.burger-button {
  font-size: 24px;
  cursor: pointer;
  display: none;
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 20;
}

/* Скрытый чекбокс */
.burger-toggle {
  display: none;
}

/* Мобильное меню */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  transition: right 0.3s ease-in-out;
  z-index: 15;
}

/* Показываем мобильное меню при клике */
.burger-toggle:checked ~ .mobile-menu {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
  right: 0;
}

/* Медиа-запросы для адаптивности */
@media (max-width: 768px) {
  .menu,
  .a-bord {
    display: none;
  }

  .burger-button {
    display: block;
  }
}

.line-img {
  background-image: url(/public/img/lineheader.png);
  background-repeat: no-repeat;
  width: 1200px;
    height: 381.2px;
    position: fixed;
    top: 1px;
    right: -465px;
    z-index: -1;
}

</style>
