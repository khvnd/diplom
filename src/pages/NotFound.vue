<template>
    <div class="error-block">
        <div class="error-content">
            <h3 class="error-subtitle">404 Error</h3>
            <h2 class="error-title">Page Not Found</h2>
            <p class="error-text">Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:</p>
            <ul>
                <li class="error-text">The page may have been moved or deleted.</li>
                <li class="error-text">You may have mistyped the URL.</li>
                <li class="error-text">There may be a temporary problem with our server.</li>
                <p class="error-text">You can try the following options to find what you're looking for:</p>
                <li class="error-text">Check the URL for typos or errors and try again.</li>
                <li class="error-text">Go back to our homepage and browse from there.</li>
            </ul>
            <p class="error-text">If you believe there's an issue with our website, please contact us using the information provided on our contact page.</p>
            <router-link to="/">
          <button class="error-btn">back home</button>
        </router-link>
        </div>
        
        <div class="error-img"></div>
    </div>
</template>

<style>

    .error-block {
        display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 150px;
    }

    .error-content {
        max-width: 625px;
    }

    .error-subtitle {
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

    .error-title {
        color: rgb(255, 255, 255);
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .error-text {
        color: rgb(209, 209, 209);
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
    }

    .error-btn {
        color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233) 100%);
    width: 168px;
    height: 50px;
    border: none;
    padding: 18px 38px 18px 38px;
    margin-top: 42px;
}

.error-img {
    background: url(http://localhost:8080/img/error.994d6210.png) no-repeat;
    width: 787.27px;
    height: 566.68px;
    position: absolute;
    left: 538px;
}
    
</style>