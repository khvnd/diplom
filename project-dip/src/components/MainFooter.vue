<template>
    <div class="line-block">
        <img src="/img/line.png" class="img-line">
        <footer class="footer">
            <div class="footer-info">
                <div class="footer-logo-section">
                    <img src="/img/logo.png" alt="">
                    <div class="footer-media">
                        <img src="/img/tw.svg" alt="">
                        <img src="/img/fc.svg" alt="">
                        <img src="/img/in.svg" alt="">
                        <img src="/img/git.svg" alt="">
                    </div>
                </div>
                <div class="quicklinks">
                    <h3 class="info-title">Quicklinks</h3>
                    <router-link class="a-links" to="/" >Home</router-link>
                    <router-link class="a-links" to="/price">Pricing Plan</router-link>
                    <router-link class="a-links" to="/service">Service</router-link>
                    <router-link class="a-links" to="/blog">Blog</router-link>
                    <router-link class="a-links" to="/">Our Team</router-link> 
                </div>
                <div class="support">
                    <h3 class="info-title">Support</h3>
                    <router-link class="a-links" to="/about" >About us</router-link>
                    <router-link class="a-links" to="/">Contact us</router-link>
                    <router-link class="a-links" to="/">FAQ</router-link>
                    <router-link class="a-links" to="/">Tems & Conditions</router-link>
                    <router-link class="a-links" to="/">Privacy Policy</router-link> 
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
    </div>
</template>
<script>
    export default {
     name: 'MainFooter',
     
   }
</script>

<style>

    .line-block {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .img-line {
        position: fixed;
        width: 1011px;
        height: 498px;
        left: 3px;
        z-index: -1;
    }

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
    }

    .text-copy {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 300;
    }
</style>