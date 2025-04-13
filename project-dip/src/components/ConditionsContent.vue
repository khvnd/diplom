<template>
    <div class="faq-content">
        <div class="img-section">
            <img src="/img/faq1.png" class="img-conditions-first">
            <img src="/img/faq2.png" class="img-conditions-second">
            <div class="img-conditions-gradient"></div>
        </div>
        <div class="conditions-content">
            <div class="conditions-info">
                <h3 class="cond-subtitle">Tems & Conditions</h3>
                <h2 class="cond-title">Terms and Conditions</h2>
                <p class="cond-text">Welcome to VRNas. Please read these Terms and Conditions carefully before using our website and services.</p>
            </div>
            <div class="conditions-list">
                <div class="list-item">
                    <h3 class="lists-title">Acceptance of Term</h3>
                    <p class="lists-text">By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Use of Website and Services</h3>
                    <p class="lists-text">You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services:</p>
                    <ul >
                        <li class="lists-text">In any way that violates any applicable federal, state, local or international law or regulation.</li>
                        <li class="lists-text">In any way that violates any applicable federal, state, local or international law or regulation.</li>
                        <li class="lists-text">To impersonate or attempt to impersonate [Company Name], a [Company Name] employee, another user or any other person or entity.</li>
                        <li class="lists-text">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website or services, or which, as determined by us, may harm [Company Name] or users of the website or services or expose them to liability.</li>
                    </ul>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Intellectual Property</h3>
                    <p class="lists-text">The content and materials available on our website and services, including but not limited to text, graphics, logos, images, and software, are the property of [Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                        You may not use any of our content or materials for commercial purposes without obtaining a license to do so from [Company Name] or its licensors.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Limitation of Liability</h3>
                    <p class="lists-text">In no event shall [Company Name] be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our website or services.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Changes to Terms and Conditions</h3>
                    <p class="lists-text">We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. By continuing to access or use our website and services after any revisions become effective, you agree to be bound by the revised terms.</p>
                </div>
                <div class="list-item">
                    <h3 class="lists-title">Contact Us</h3>
                    <p class="lists-text">If you have any questions about these Terms and Conditions, please contact us using the information provided on our contact page.</p>
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

    .img-conditions-first {
        position: absolute;
        left: 501px;
        
        
    }

    .img-conditions-second {
        position: absolute;
    right: -695px;
    }

    .img-conditions-gradient {
        background: linear-gradient( 180.00deg, rgb(24 24 27 / 0%), rgb(16 16 18) 55.935%, rgb(16 16 18) 100%) repeat;
    height: 344px;
    position: absolute;
    top: 223px;
    left: 50%;
    width: 200vw;
    transform: translateX(-50%);
}

.conditions-content {
    max-width: 788px;
    margin: auto;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.conditions-info {
    text-align: center;
    max-width: 708px;
}

.cond-subtitle {
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

.cond-title {
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 24px;
}

.cond-text {
    color: rgb(209, 209, 209);
    font-size: 16px;
    font-weight: 300;
    line-height: 28px; 
}

.conditions-list {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .img-conditions-gradient {
        top: 28px;
        left: 45%;
        width: 100vw;
        transform: none;
    }

    .img-conditions-first {
        left: 513px;
        width: 168px;
    }

    .img-conditions-second {
        right: -409px;
        width: 168px;
    }
}

@media (max-width: 425px) {
    .cond-title {
        font-size: 32px;
    }
}
</style>