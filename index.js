var request = require('request');
const uuidv1 = require('uuid/v1');


var headersOpt = {  
    "content-type": "application/json",
    "Authorization" : "ApiKey C5E100C9-5851-4F72-9731-04FB0D5324BD"
};

var uuid = "5001-"+uuidv1().toString().toUpperCase();
var num =0;
setInterval(function () {
   if(num < 1)
   {
    doDeposit(uuid,true);
    num++;
   }
   else{
     console.log(num);
     return;
   }

},100);


function doDeposit(uuid,createnewUUID)
{
  console.log(uuid);
    if(uuid == undefined)
    {
        uuid = "5001-"+uuidv1().toString().toUpperCase();
    }

    if(createnewUUID)
    {
        uuid = "5001-"+uuidv1().toString().toUpperCase();
    }

var options = {
    uri: 'http://banking.mgsops.net/Banking/Deposit/v1/deposits/product/5001',
    method: 'POST',
    json: {
        "AccountId": 0,
        "Account":  null,
        "SecureCode": null,
        "OtherSecureCode": null,
        "LogoName": null,
        "LoginName": "bluemesa1",
        "ConfirmTransaction":false,
        "purchaseMethod": "card",
        "clientReference": uuid,
        "Language": "en",
        "transactionInfo": {
          "amount": 1,
          "currency": "USD",
          "notificationUrl": null,
          "confirmCurrencyConversion": false,
          "autoAcceptCurrencyConversion": false,
          "description": null
        },
        "userInfo":null,
        "cardInfo": {
          "cardId": 68,
          "type": 0,
          "cardType": 0,
          "cvc2": "123",
          "expiryMonth": 0,
          "expiryYear": 0,
          "cardHolder": null,
          "cardNumber": null,
          "cardBrand": null,
          "cardIssueNumber": null,
          "cardStartYear": null,
          "cardStartMonth": null,
          "description": null,
          "bankName": null,
          "customInfo": null
        },
        "MerchantInfo":null,
        "ClientExtraInfo": null,
        "ReturnUrl": "http://banking.mgsops.net/Swift.StateMachine/swiftlaunch/resume/bid-939246e4-3992-40ff-8502-7b3834571bc4",
        "SessionId": "VaQETy3o+urPI41o2AZZHETuIRWXptfoU+HfAoMxQpfyv+P3LxsLRP9b46SmuRVt",
        "IpAddress": null
      },
      headers: headersOpt
  };
  
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the shortened url.
    }
    else{
        console.log(error);
        console.log(response);
    }
  });
}