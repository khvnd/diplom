<template>
    <div class="about-article">
        <div class="about-article-img">
            <div class="bg"></div>
            <img src="/img/image2.png" alt="" class="img-about-home">
            <div class="gradient-about"></div>
        </div>
        <div class="about-article-info">
            <h3 class="ab-art-subtitle">ABOUT US</h3>
            <h2 class="ab-art-title">Bring your events to life like never before with our VR services.</h2>
            <p class="ab-art-text">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>

        <ul class="ul-home-about">
            <li class="li-text">
                <img src="/img/check.png" class="checkmark"/>
                Cutting-Edge Technology
            </li>
            <li class="li-text">
                <img src="/img/check.png" class="checkmark"/>
                Versatile Applications
            </li>
            <li class="li-text">
                <img src="/img/check.png" class="checkmark"/>
                 Affordable and Accessible
            </li>
        </ul>
        <router-link to="/about">
            <button class="more">read more</button>
        </router-link>
        
        </div>
    </div>
</template>

<script>
   export default {
     name: 'HomeAbout',
     
   }
   </script>

   <style>
    .about-article {
        min-height: 644.94px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 120px;
    }

    .about-article-img {
        width: 608.06px;
        position: relative;
        
    }

    .bg {
        position: absolute;
        width: 398.94px;
        height: 496.53px;
        left: -0.31px;
        top: 127.47px;
        background: rgb(37, 37, 50);
        opacity: 0.5;
    }


    .img-about-home {
        position: relative;
        left: 14.29px;
    }

    .gradient-about {
        position: absolute;
        width: 420px;
        height: 570px;
        left: -22px;
        top: -24px;
        background: url(/public/img/Light1.svg) no-repeat center;
        background-size: cover;
        transform: rotate(358deg);
        pointer-events: none;  
    }

    .about-article-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 562px;
        justify-content: center;
    }

    .ab-art-subtitle {
       
        background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Chakra Petch";
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        text-transform: uppercase;
        display: inline-block;
        margin-bottom: 12px;
    }

    .ab-art-title {
        color: rgb(255, 255, 255);
        font-size: 48px;
        font-weight: 600;
        text-align: left;
        line-height: 58px;
        margin-bottom: 12px;
    }

    .ab-art-text {
        color: rgb(209, 209, 209);
        font-size: 16px;
        font-weight: 300;
        text-align: left;
        margin-bottom: 24px;
        line-height: 28px;
    }

    .ul-home-about {
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-bottom: 32px;
    }

    .li-text {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        list-style-type: none;
    }

    .more {
        width: 168px;
        height: 50px;
        border: none;
        background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233) 100%);
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s;
    }

    .more:hover {
        box-shadow: 0 0 10px #3498db, 0 0 40px #3498db;
    }

    @media (max-width: 1024px) {
        .about-article {
            flex-wrap: nowrap;
        }
    }

    @media (max-width: 768px) {
        .bg {
            width: 308.94px;
            height: 370.53px;
            left: -0.31px;
            top: 102.47px;
        }

        .img-about-home {
            left: 2.29px;
            width: 395px;
        }

        .gradient-about {
            left: -43px;
        }

        .about-article {
            align-items: center;
            flex-wrap: nowrap;
        }

        .ab-art-title {
            font-size: 34px;
            line-height: 44px;
        }

        .ab-art-text {
            line-height: 25px;
        }
    }

    @media (max-width: 425px) {
        .about-article {
            margin: 100px auto;
            gap: 48px;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .about-article-img {
        width: 389px;
        position: relative;
        overflow-x: clip;
        }
        .bg {
        width: 300px;
        height: 373px;
        top: 93.47px;
        }
        .img-about-home {
        width: 389px;
        height: 467px;
        }
        .gradient-about {
            width: 435px;
            left: -22px;
            top: -91px;
        }
        .ab-art-title {
            font-size: 32px;
            line-height: 38px;
        }

    }
    </style>