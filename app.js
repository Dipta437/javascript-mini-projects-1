var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputField = document.querySelector("#output-field");



// logic part conditional branching

// profit logic step

function calculateProfitAndLoss(initial, quantity, current) {
    if(current > initial) {
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit / initial)*100;
        

        console.log(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}`);
    }else if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss / initial)*100;

        console.log(`Hey the loss is ${loss} and the loss percentage is ${lossPercentage}`);
    }else{
        current = initial
        console.log("No Pain No Gain");
    }
}

calculateProfitAndLoss(10, 12, 100);
calculateProfitAndLoss(100, 100, 10);
calculateProfitAndLoss(10, 10, 10);
