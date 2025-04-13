<template>
    
        <footer class="footer">
            <div class="footer-info">
                <div class="footer-logo-section">
                    <img src="/img/logo.png" alt="">
                    <div class="footer-media">
                        <button @click="goToExternalSite('https://twitter.com/')" class="btn-logo"><img src="/img/tw.svg" alt=""></button>
                        <button @click="goToExternalSite('https://www.facebook.com/')" class="btn-logo"><img src="/img/fc.svg" alt=""></button> 
                        <button @click="goToExternalSite('https://www.instagram.com/')" class="btn-logo"><img src="/img/in.svg" alt=""></button>
                        <button @click="goToExternalSite('https://www.github.com/')" class="btn-logo"><img src="/img/git.svg" alt=""></button>
                    </div>
                </div>
                <div class="quicklinks">
                    <h3 class="info-title">Quicklinks</h3>
                    <router-link class="a-links" to="/" >Home</router-link>
                    <router-link class="a-links" to="/price">Pricing Plan</router-link>
                    <router-link class="a-links" to="/service">Service</router-link>
                    <router-link class="a-links" to="/blog">Blog</router-link>
                    <router-link class="a-links" to="/team">Our Team</router-link> 
                </div>
                <div class="support">
                    <h3 class="info-title">Support</h3>
                    <router-link class="a-links" to="/about" >About us</router-link>
                    <router-link class="a-links" to="/contact">Contact us</router-link>
                    <router-link class="a-links" to="/faq">FAQ</router-link>
                    <router-link class="a-links" to="/conditions">Tems & Conditions</router-link>
                    <router-link class="a-links" to="/policy">Privacy Policy</router-link> 
                </div>
                <div class="help">
                    <h3 class="info-title">Need Help?</h3>
                    <p class="a-links">Tanjung Sari Street no.48, Pontianak City</p>
                    <p class="a-links">Support@VRNas.com</p>
                    <p class="a-links">+123 456 7890</p>
                </div>
            </div>
            <div class="footer-copy">
                <p class="text-copy">© Copyright 2023, All Rights Reserved</p>
            </div>
        </footer>
    
</template>
<script>
    export default {
     name: 'MainFooter',
     methods: {
    goToExternalSite(url) {
      window.open(url, "_blank");
    }
  }
   }
</script>

<style>

   
    .footer {
        height: 343px;
        display: flex;
        flex-direction: column;
    }

    .footer-info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
    }

    .footer-logo-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    .footer-media {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .btn-logo {
        border: none;
        border-radius: 50%;
        width: 46px;
        height: 46px;
        cursor: pointer;
    }

    .quicklinks {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 85px;
    }

    .support {
        width: 132px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .help {
        width: 319px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .info-title {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 600; 
    }

    .a-links {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 300;
    }

    .footer-copy {
        display: flex;
        justify-content: center;
        height: 60px;
        align-items: flex-end;
        border-top: 1px solid;
        border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
        border-image-slice: 1;
        margin-top: 32px;
        padding-bottom: 15px;
    }

    .text-copy {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 300;
    }

    @media (max-width: 768px) {
        .footer-logo-section {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 50px;
        }
    }

    @media (max-width: 425px) {
        .footer-logo-section {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 48px;
        }

        .footer-info {
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            align-items: center;
            justify-content: flex-start;
            gap: 64px;
        }
    }
</style>