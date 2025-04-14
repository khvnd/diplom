<template>
    <div class="get-touch-block">
        <div class="get-touch-img">
            <img src="/img/image2.png" class="get-img">
            <div class="get-gradient"></div>
        </div>
        <div class="get-touch-content">
            <h3 class="get-subtitle">CONTACT US</h3>
            <h2 class="get-title">Get in Touch</h2>
            <p class="get-text">At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.</p>
            <form @submit.prevent="handleSubmit">
                <div class="input">
                <div class="form-group">
                    <input v-model="form.firstName" type="text"  placeholder="First Name" required />
                </div>

                <div class="form-group">
                    <input v-model="form.lastName" type="text"  placeholder="Last Name" required />
                </div>

                <div class="form-group">
                    <input v-model="form.email" type="email"  placeholder="Email" required />
                </div>

                <div class="form-group">
                    <input v-model="form.phone" type="tel" placeholder="Phone Number" required />
                </div>
            </div>
                <div class="form-group">
                    <textarea v-model="form.message" rows="4"  placeholder="Message" required></textarea>
                </div>

                <button class="submit-btn">SEND MESSAGE</button>
            </form>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
});

const handleSubmit = () => {
  console.log('Отправлено:', form.value);
  
  
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  

};
</script>

<style>
    .get-touch-block {
        display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 150px;
    }

    .get-touch-img {
        position: relative;
    }

    .get-img {
        width: 457px;
    }

    .get-gradient {
        background: url(/public/img/light2.svg) no-repeat;
        width: 997px;
        height: 133%;
        position: absolute;
        top: 5px;
        left: -278px;
        z-index: -1;
    }

    .get-touch-content {
        max-width: 645px;
    }

    .get-subtitle {
        background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Chakra Petch";
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    }

    .get-title {
        color: rgb(255, 255, 255);
        font-size: 48px;
        font-weight: 600;
    }

    .get-text {
        color: rgb(209, 209, 209);
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        margin-bottom: 32px;
    }

    .input {
        display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 33px;
    justify-content: space-between;
    }

    


.form-group textarea {
    width: 645px;
    height: 137px;
    padding: 10px;
    border: 1px solid #ddd;
    font-size: 16px;
    border-radius: 4px;
    background: rgba(37, 37, 50, 0.6);
    border: 1px solid;
        border-image-source: linear-gradient(147deg,rgba(255, 255, 255, 0.164),rgb(255, 255, 255, 0));
        border-image-slice: 1;
        color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    margin-top: 24px;
}

.form-group input {
    width: 306px;
    height: 50px;
    padding: 10px;
    border: 1px solid #ddd;
    color: rgb(209, 209, 209);
    font-size: 16px;
    border-radius: 4px;
    background: rgba(37, 37, 50, 0.6);
    border: 1px solid;
        border-image-source: linear-gradient(147deg,rgba(255, 255, 255, 0.164),rgb(255, 255, 255, 0));
        border-image-slice: 1;
}

.form-group input::placeholder {
    color: rgb(209, 209, 209);
font-size: 16px;
font-weight: 300;
}



.submit-btn {
    width: 198px;
    height: 50px;
    background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233) 100%);
    padding: 18px 38px 18px 38px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    border: none;
    margin-top: 32px;
    cursor: pointer;
    transition: 0.3s;
}

.submit-btn:hover {
  box-shadow: 0 0 10px #3498db, 0 0 40px #3498db;
}

@media (max-width: 1024px) {
    .get-touch-block {
        flex-wrap: nowrap;
    }
    .get-img {
        width: 400px;
    }

    
    .form-group input {
        width: 100%;
    }

    .form-group textarea {
        width: 100%;
        height: 89px;
        margin-top: 22px;
    }

    .get-touch-content {
        width: 460px;
    }

    .get-title {
        font-size: 48px;
    }

    .get-text {
        font-size: 15px;
        line-height: 25px;
        margin-bottom: 10px
    }

    .submit-btn {
        width: 198px;
        height: 50px;
        font-size: 14px;
        margin-top: 10px;
    }

    .get-gradient {
        height: 142%;
        top: -95px;

    }
}

@media (max-width: 768px) {
    .get-touch-block {
        flex-wrap: nowrap;
    }

    .input {
        
        grid-template-columns: repeat(1, 1fr);
        gap: 5px;
    }

    .get-img {
        width: 374px;
    }

    .form-group input {
        width: 100%;
    }

    .form-group textarea {
        width: 100%;
        height: 89px;
        margin-top: 8px;
    }

    .get-touch-content {
        width: 357px;
       
    }

    .get-title {
        font-size: 38px;
    }

    .get-text {
        font-size: 15px;
        line-height: 25px;
        margin-bottom: 10px
    }

    .submit-btn {
        width: 185px;
        height: 46px;
        font-size: 13px;
        margin-top: 5px;
    }

    .get-gradient {
        height: 142%;
        top: -95px;

    }
}

@media (max-width: 425px) {

    .get-title {
        font-size: 32px;
    }

    .get-img {
        width: 397px;
    }

    .get-touch-block {
        flex-direction: column-reverse;
        gap: 40px;
        margin-bottom: 100px;
    }

    .input {
        grid-template-columns: repeat(1, 1fr);
        gap: 16px;
    }

    .form-group textarea {
        width: 100%;
        height: 137px;
    }

    .form-group input {
        width: 100%;
    }

    
    .get-gradient {
        background: url(/public/img/Light1.svg) no-repeat;
        background-size: contain;
        width: 549px;
        height: 108%;
        top: -30px;
        left: -164px;
    }
}
</style>