
let quantity = 0;
let pricePerDroid = 0;
let customerCredits = 0;


function makeTransaction(quantity,pricePerDroid,customerCredits){

let totalPrice = 0;

    totalPrice = quantity * pricePerDroid;
    
    if(customerCredits < totalPrice){

return console.log("Insufficient funds!")

    }else{

      return  console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`)
    }

    


}