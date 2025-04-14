<template>
    <div class="contact-info">
        <div class="contact-item">
            <img src="/img/email.svg" class="contact-img">
            <h2 class="contact-subtitle">EMAIL</h2>
            <p class="contact-text">Support@VRNas.com</p>
        </div>
        <div class="contact-item">
            <img src="/img/address.svg" class="contact-img">
            <h2 class="contact-subtitle">ADDRESS</h2>
            <p class="contact-text">Tanjung Sari Street no.48, Pontianak City</p>
        </div>
        <div class="contact-item">
            <img src="/img/phone.svg" class="contact-img">
            <h2 class="contact-subtitle">PHONE</h2>
            <p class="contact-text">+123 456 7890</p>
        </div>
    </div>
</template>

<style>
    .contact-info {
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 31px;
    margin-bottom: 150px;
    }

    .contact-item {
        width: 379px;
        height: 291px;
        background: rgba(37, 37, 50, 0.6);
        border: 2px solid;
        border-image-source: linear-gradient(147deg,rgba(255, 255, 255, 0.164),rgb(255, 255, 255, 0));
        border-image-slice: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 65px;
    }

    .contact-img {
        width: 65px;
        height: 65px;
        margin-top: 55px;
        margin-bottom: 32px;
    }

    .contact-subtitle {
        background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Chakra Petch";
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 8px;
    }

    .contact-text {
        font-size: 20px;
        font-weight: 500;
        color: rgb(255, 255, 255);
        text-align: center;
        margin-bottom: 58px;
    }

    @media (max-width: 1024px) {
        .contact-info {
            flex-wrap: nowrap;
            gap: 15px
        }

        .contact-item {
            width: 298px;
            padding: 0 10px;
        }
    }

    @media (max-width: 768px) {
        .contact-info {
            flex-wrap: nowrap;
            justify-content: center;
            gap: 15px;
        }

        .contact-item {
            width: 240px;
            height: 242px;
            padding: 0 10px;
        }

        .contact-text {
            font-size: 16px;
        }

        .contact-img {
            width: 60px;
            height: 60px;
            margin-top: 22px;
        }
    }

    @media (max-width: 425px) {
        .contact-info {
            flex-wrap: wrap;
            flex-direction: row-reverse;
            justify-content: center;
            margin-bottom: 100px;
        }

        .contact-item {
            width: 379px;
            height: 291px;
        }
    }
</style>