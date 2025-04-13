<template>
    <div class="number-block">
        <div class="item-number">
            <h3 class="number-subtitle">HAPPY CLIENTS</h3>
            <h2 class="number-title">123k+</h2>
        </div>
        <div class="item-number">
            <h3 class="number-subtitle">PROJECT COMPLETE</h3>
            <h2 class="number-title">300k+</h2>
        </div>
        <div class="item-number">
            <h3 class="number-subtitle">YEARS EXPERIENCE</h3>
            <h2 class="number-title">10+</h2>
        </div>
    </div>
</template>
<script>
   export default {
     name: 'ServiceHappy',
     
   }
   </script>

   <style>
    .number-block {
        min-height: 165px;
        background: radial-gradient(50.00% 50.00% at 50% 50%,rgb(52, 52, 69),rgba(32, 32, 41, 0) 100%);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        margin-bottom: 150px;
    }

    .item-number {
        text-align: center;
    }

    .number-subtitle {
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

    .number-title {
        color: rgb(255, 255, 255);
        font-size: 48px;
        font-weight: 600;
    }

    @media (max-width: 425px) {
        .number-title {
            font-size: 32px;
        }

        .number-block {
            flex-direction: column;;
            margin-bottom: 100px;
            align-items: center;
            gap: 36px;
        }
    }
</style>