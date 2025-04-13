<template>
    <div class="price-plan-block">
        <div class="price-plan-info">
            <h3 class="price-info-subtitle">PRICING</h3>
            <h2 class="price-info-title">Pricing Plans</h2>
            <p class="price-info-text">Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you can test out our service and see which plan works best for you.</p>
        </div>
        <div class="price-plan-content">
            <div class="price-item">
                <p class="plan">Basic Plan</p>
                <div class="price-tariff">
                    <h2 class="price">$99</h2>
                    <p class="month">/ month</p>
                </div>
                <p class="price-description">All the basic features to boost your freelance career</p>
                <ul class="price-list">
                    <li class="price-point">Access to a selection of VR games and experiences</li>
                    <li class="price-point">Limited access to educational content</li>
                    <li class="price-point">Limited access to architecture and design tools</li>
                    <li class="price-point">No access to exclusive events or promotions
                    </li>
                </ul>
                <button class="free-trial">Get 14 Days Free Trial</button>
            </div>
            <div class="price-item">
                <p class="plan">Standard Plan</p>
                <div class="price-tariff">
                    <h2 class="price">$149</h2>
                    <p class="month">/ month</p>
                </div>
                <p class="price-description">All the basic features to boost your freelance career</p>
                <ul class="price-list">
                    <li class="price-point">Access to a selection of VR games and experiences</li>
                    <li class="price-point">Limited access to educational content</li>
                    <li class="price-point">Limited access to architecture and design tools</li>
                    <li class="price-point">No access to exclusive events or promotions
                    </li>
                </ul>
                <button class="free-trial">Get 14 Days Free Trial</button>
            </div>
            <div class="price-item">
                <p class="plan">Standard Plan</p>
                <div class="price-tariff">
                    <h2 class="price">$200</h2>
                    <p class="month">/ month</p>
                </div>
                <p class="price-description">All the basic features to boost your freelance career</p>
                <ul class="price-list">
                    <li class="price-point">Access to a selection of VR games and experiences</li>
                    <li class="price-point">Limited access to educational content</li>
                    <li class="price-point">Limited access to architecture and design tools</li>
                    <li class="price-point">No access to exclusive events or promotions
                    </li>
                </ul>
                <button class="free-trial">Get 14 Days Free Trial</button>
            </div>
            <div class="price-plan-gradient"></div>
        </div>
    </div>
</template>
<script>
export default {
      name: 'PricingPlan'
      
    }
</script>

<style>
    .price-plan-block {
        height: 801px;
        height: 801px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 150px;
    }

    .price-plan-info {
        max-width: 751px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        padding-bottom: 40px;
    }

    .price-info-subtitle {
        background: linear-gradient(90.00deg, rgb(12, 186, 241),rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Chakra Petch";
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    }

    .price-info-title {
        color: rgb(255, 255, 255);
        font-size: 48px;
        font-weight: 600;
    }

    .price-info-text {
        color: rgb(209, 209, 209);
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

    .price-plan-content {
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    }

    .price-item {
        max-width: 359px;
        height: 598px;
        border-radius: 6px;
        background: rgb(37, 37, 50);
        padding: 35px;
    }

    .price-item:hover {
        border: 1px solid;
        border-radius: 6px;
        border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
    }

    .plan {
        font-size: 18px;
        color: rgb(255, 255, 255);
        font-weight: 400;
    }

    .price-tariff {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        padding-bottom: 9px;
    }
    
    .price {
        color: rgb(255, 255, 255);
        font-size: 64px;
        font-weight: 600;
    }

    .month {
        color: rgb(113, 113, 122);
        font-size: 16px;
        font-weight: 300;
    }

    .price-description {
        color: rgb(176, 176, 178);
        font-size: 16px;
        font-weight: 400;
    }

    .price-list {
        list-style-image: url('/public/img/Iconprice.png'); 
        padding-left: 23px;
    }

    .price-point {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 600;
        list-style-type: none;
        padding-top: 16px;
    }

    .free-trial {
        width: 292px;
        height: 55px;
        padding: 18px 38px 18px 38px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid;
        border-image: linear-gradient(45deg, #ff00ff, #00ffff) 1;
        margin-top: 36px;

        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
    transition: 0.3s;
}



    .free-trial:hover {
        background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233) 100%);
        border: none;
        box-shadow: 0 0 10px #3498db, 0 0 40px #3498db;
    }

    .price-plan-gradient {
        display: block;
    }

    @media (max-width: 1024px) {
        .price-plan-block {
            flex-wrap: nowrap;
            height: auto;
            
        }

        .price-plan-content {
            justify-content: center;
            gap: 10px;
            position: relative;
            flex-wrap: nowrap;
        }

        .price-item {
            max-width: 298px;
            padding: 17px;
        }

        .free-trial {
            width: 265px;
        }
    }

    @media (max-width: 768px) {
        .price-plan-block {
            flex-wrap: nowrap;
            height: auto;
            margin-bottom: 100px;
        }

        .price-plan-content {
            justify-content: center;
            gap: 69px;
            position: relative;
            flex-wrap: wrap;
        }

        .price-plan-gradient {
            width: 873px;
        height: 618px;
        position: absolute;
        background: url(/public/img/light2.svg);
        bottom: 6px;
        background-size: cover;
        left: -134px;
        z-index: -1;
        transform: rotate(360deg);
        }
    }

    @media (max-width: 425px)  {

        .price-info-title {
            font-size: 32px;
        }

        .price-plan-block {
            height: auto;
            margin-bottom: 100px;

        }

        .price-plan-content {
            flex-direction: column;
            gap: 40px;
            align-items: center;
        }

        .price-plan-gradient {
            display: none;
        }
    }
</style>