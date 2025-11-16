{
    const plnToEur = 0.2366;
    const plnToUsd = 0.2748;
    const usdToEur = 0.8609;

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const firstCurrency = document.querySelector(".js-firstCurrency");
        const secondCurrency = document.querySelector(".js-secondCurrency");
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
        const indexElement = document.querySelector(".js-index");

        const currencyChange = `${firstCurrency.value}/${secondCurrency.value}`;
        let rate;

        switch (currencyChange) {
            case "PLN/EUR":
                rate = plnToEur;
                break;
            case "PLN/USD":
                rate = plnToUsd;
                break;
            case "EUR/PLN":
                rate = 1 / plnToEur;
                break;
            case "EUR/USD":
                rate = 1 / usdToEur;
                break;
            case "USD/EUR":
                rate = usdToEur;
                break;
            case "USD/PLN":
                rate = 1 / plnToUsd;
                break;
            default:
                rate = 1;
        }

        const result = parseFloat(amountElement.value) * parseFloat(rate);

        indexElement.innerText = `${parseFloat(amountElement.value)} ${firstCurrency.value} = `;
        resultElement.innerText = `${result.toFixed(2)} ${secondCurrency.value}`;
    });
}