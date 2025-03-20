<template>
    <div class="about-content">
        <div class="about-info">
            <h3 class="about-subtitle">ABOUT US</h3>
            <h2 class="about-title">Bringing Your Vision to Life: Learn About VRNas</h2>
            <p class="about-text">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.<br>
            Our team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs.<br>
            From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.</p>
        </div>
        <div class="about-img">
            <div class="bg"></div>
            <img src="/img/priceman.png" alt="" class="img2">
            <div class="gradient-about"></div>
        </div>
    </div>
</template>

<script>
     export default {
     name: 'AboutContent',
     
   }
</script>

<style>

.about-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 150px;
}

.about-info {
    max-width: 708px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 15px;
}

.about-subtitle {
    background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Chakra Petch";
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    width: max-content;
}

.about-title {
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
}

.about-text {
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    text-align: justify;
}

.about-img {
    position: relative;
}

.bg {
    position: absolute;
    width: 398.94px;
    height: 496.53px;
    left: -1.31px;
    top: 24.47px;
    background: rgb(37, 37, 50);
    opacity: 0.5;
}


.img2 {
    position: relative;
     left: 14.29px;
}

.gradient-about {
    position: absolute;
    width: 404px;
    height: 570px;
    left: -5px;
    top: -24px;
    background: url(/public/img/Light1.svg) no-repeat center;
    background-size: cover;
    transform: rotate(358deg);
    pointer-events: none;
}
</style>