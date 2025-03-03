<template>
    <div class="mail-block">
        <div class="block-title">
            <h2 class="mail-title">Subscribe to our newsletter for latest updates</h2>
        </div>
        <div class="form">
            <img src="/img/mail.png" class="mail-img" alt="">
            <input class="form-input" type="email" placeholder="Enter your email address" />
            <button class="btn-send">
        <img src="/img/send.png" alt="" class="send">
      </button>
        </div>
    </div>
</template>

<script>
    export default {
     name: 'GetMail',
     
   }
</script>

<style>
    .mail-block {
        background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233) 100%);
        border-radius: 4px;
        height: 185px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 180px;
    }

    .block-title {
        max-width: 520px;
    }

    .mail-title {
        color: rgb(255, 255, 255);
        font-size: 39px;
        font-weight: 600;
        line-height: 58px
    }

    .form {
        position: relative;
    }

    .form-input {
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.07);
        width: 365px;
        height: 56px;
        border: none;
        padding-left: 48px;
    }

    .form-input::placeholder {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 400;
    }
 

    .btn-send {
        width: 49.33px;
        height: 49.33px;
        background: rgba(255, 255, 255, 0.21);
        border: none;
        position: absolute;
        top: 3px;
        left: 313px;
    }

    .mail-img {
        position: absolute;
        left: 14px;
        top: 19px;
    }
</style>