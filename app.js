var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputField = document.querySelector("#output-field");

// wiring part 

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stockQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip, qty, curr);
}


// logic part conditional branching

// profit logic step

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage = ((loss / (initial*quantity)) * 100).toFixed(2);
        
        

        outputMessage(`OOps your Loss is ${loss} and the Loss Percentage is ${lossPercentage}%`);
        outputField.style.color = 'red';
        
    }else if (current > initial) {
        var profit = (current - initial)*quantity;
        var profitPercentage = ((profit / (initial*quantity)) * 100).toFixed(2);

        outputMessage(`Hey the Profit is ${profit} and the Profit Percentage is ${profitPercentage}%`);
        outputField.style.color = 'green';
        
    }else{
        outputMessage(`You didn't make any Profit, There's No Pain and No Gain`);
        
        outputField.style.color = 'gray';
    }
}

function outputMessage(message){
    
    


    outputField.innerHTML = message;
}


