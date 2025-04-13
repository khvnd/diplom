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
            <div class="bg-content"></div>
            <img src="/img/priceman.png" alt="" class="img-about-content">
            <div class="gradient-about-content"></div>
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

.bg-content {
    position: absolute;
    width: 398.94px;
    height: 496.53px;
    left: -1.31px;
    top: 24.47px;
    background: rgb(37, 37, 50);
    opacity: 0.5;
}


.img-about-content {
    position: relative;
     left: 14.29px;
}

.gradient-about-content {
    position: absolute;
    width: 404px;
    height: 570px;
    left: -5px;
    top: -24px;
    background: url(/public/img/Light1.svg) no-repeat center;
    background-size: cover;
    transform: rotate(360deg);
    pointer-events: none;
}

@media (max-width: 1024px) {
    .about-content {
    flex-wrap: nowrap;
 }

 .about-info {
    max-width: 452px;
 }

 .about-title {
    font-size: 39px;
    line-height: 45px;
 }

 .img-about-content {
    left: 1.29px;
 }

 .bg-content {
    width: 361.94px;
    height: 470.53px;
    left: -0.31px;
    top: 48.47px;
 }

 .gradient-about-content {
    width: 365px;
    left: -2px;
 }
} 

@media (max-width: 768px) {
 .about-content {
    flex-wrap: nowrap;
 }

 .about-info {
    max-width: 343px;
    gap: 5px;
 }

 .about-title {
    font-size: 32px;
    line-height: 39px;
 }

 .about-text {
    font-size: 14px;
    line-height: 24px;
 }

 .img-about-content {
    left: -1.71px;
    width: 344px;
 }

 .bg-content {
    width: 343.94px;
    height: 448.53px;
    left: -2.31px;
    top: 48.47px;
 }

 .gradient-about-content {
    width: 346px;
    left: -3px;
 }
}

@media (max-width: 425px) {
    .about-title {
        font-size: 32px;
        line-height: 42px;
    }

    .img-about-content {
        width: 314.86px;
        left: 27.29px;
    }

    .bg-content {
        width: 315.6px;
        height: 388.81px;
        left: 36.69px;
        top: 66.47px;
    }

    .about-content {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 100px;
    }

    .gradient-about-content {
        width: 425px;
        left: -72px;
    }
}
</style>