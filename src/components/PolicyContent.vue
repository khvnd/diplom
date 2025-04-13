<template>
    <div class="faq-content">
        <div class="img-section">
            <img src="/img/faq1.png" class="img-policy-first">
            <img src="/img/faq2.png" class="img-policy-second">
            <div class="img-policy-gradient"></div>
        </div>
        <div class="policy-content">
            <div class="policy-info">
                <h3 class="policy-subtitle">Privacy Policy</h3>
                <h2 class="policy-title">Privacy Policy</h2>
                <p class="policy-text">This Privacy Policy describes how [Company Name] collects, uses, and protects the personal information of our website visitors and customers.</p>
            </div>
            <div class="policy-list">
                <div class="list-item">
                    <h3 class="lists-title">Information We Collect</h3>
                    <p class="lists-text">We may collect the following types of personal information:</p>
                    <ul >
                        <li class="lists-text">Name, email address, and other contact information.</li>
                        <li class="lists-text">Demographic information such as age, gender, and location.</li>
                        <li class="lists-text">Payment information such as credit card details.</li>
                        <li class="lists-text">Information about how you use our website and services.</li>
                    </ul>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">How We Use Your Information</h3>
                    <p class="lists-text">We may use your personal information for the following purposes:</p>
                    <ul >
                        <li class="lists-text">To provide you with our services and products.</li>
                        <li class="lists-text">To process payments and fulfill orders.</li>
                        <li class="lists-text">To send you marketing and promotional materials.</li>
                        <li class="lists-text">To improve our website and services.</li>
                    </ul>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">How We Protect Your Information</h3>
                    <p class="lists-text">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption to protect sensitive information transmitted online, and we also protect your information offline.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Information Sharing</h3>
                    <p class="lists-text">We do not sell or rent your personal information to third parties. However, we may share your information with our trusted third-party service providers who assist us in operating our website and services.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Cookies and Tracking</h3>
                    <p class="lists-text">We use cookies and other tracking technologies to collect information about your browsing behavior and preferences. This information is used to personalize your experience on our website and to analyze how visitors use our website.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Your Rights</h3>
                    <p class="lists-text">You have the right to access, update, or delete your personal information. You can contact us using the information provided on our contact page to exercise these rights.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Changes to Privacy Policy</h3>
                    <p class="lists-text">We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Contact Us</h3>
                    <p class="lists-text">If you have any questions about our Privacy Policy, please contact us using the information provided on our contact page.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style>

    .img-section {
        position: relative;
    width: 100vw;
    z-index: -1;
    transform: translateX(-50%);
    }

    .img-policy-first {
        position: absolute;
        left: 501px;
        
        
    }

    .img-policy-second {
        position: absolute;
    right: -695px;
    }

    .img-policy-gradient {
        background: linear-gradient( 180.00deg, rgb(24 24 27 / 0%), rgb(16 16 18) 55.935%, rgb(16 16 18) 100%) repeat;
    height: 344px;
    position: absolute;
    top: 223px;
    left: 50%;
    width: 200vw;
    transform: translateX(-50%);
}

.policy-content {
    max-width: 788px;
    margin: auto;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.policy-info {
    text-align: center;
    max-width: 708px;
}

.policy-subtitle {
    background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
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

.policy-title {
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 24px;
}

.policy-text {
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    line-height: 28px; 
}

.policy-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    text-align: justify;
    margin-top: 48px;
}

.list-item {
    
}

.lists-title {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
}

.lists-text {
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
}

ul {
    list-style-position: inside;
}

@media (max-width: 1024px) {
    .img-policy-gradient {
        top: 28px;
        left: 45%;
        width: 100vw;
        transform: none;
    }

    .img-policy-first {
        left: 513px;
        width: 168px;
    }

    .img-policy-second {
        right: -409px;
        width: 168px;
    }
}

@media (max-width: 425px) {
    .policy-title {
        font-size: 32px;
    }
}
</style>