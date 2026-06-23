
    function checkForSpam(message){

       let messageToUppe =  message.toUpperCase();

        
        if(messageToUppe === `SPAM` ||  messageToUppe === `SALE`){

            return true

        }else{
            return false
        }



    }