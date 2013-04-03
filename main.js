var appkey = '11111111';
var jskey = '11111111';
Parse.initialize(appkey, jskey);
var nexmoKey = '111111';
var nexmoSecret = '111111';
var nexmo = require('cloud/nexmo.js');
nexmo.initialize(nexmoKey, nexmoSecret);
var nexmoPhone = '111111111';
var toPhone = '11111111';

var from = nexmoPhone;
var to = toPhone; 

function consolelog(err, messageResponse) {
	if (err) {
		console.log('Err: Error');
		console.log(err);
		return err;
	} else {
		console.log('Message Response:');
		console.log(messageResponse);
		return messageResponse;
	}
}
/*
Parse.Cloud.define("checkBalance", function(request, response) {
	nexmo.checkBalance(consolelog);
});*/


Parse.Cloud.define("checkBalance", function(request, response) {
	nexmo.checkBalance(consolelog);
});

Parse.Cloud.define("getPricing", function(request, response) {
	var country = (typeof request.params.country === 'undefined') ? 'US': request.params.country;
	nexmo.getPricing(country, consolelog);
});
Parse.Cloud.define("getNumbers", function(request, response) {
	nexmo.getNumbers(consolelog);
});
Parse.Cloud.define("searchNumbers", function(request, response) {
	var country = (typeof request.params.country === 'undefined') ? 'US': request.params.country;
	nexmo.searchNumbers(country, consolelog);
});
Parse.Cloud.define("searchNumbersA", function(request, response) {
	//request.params.areacode  //303 
	var country = (typeof request.params.country === 'undefined') ? 'US': request.params.country;
	var areacode = (typeof request.params.areacode === 'undefined') ? '303': request.params.areacode;
	nexmo.searchNumbers(country, request.params.areacode, consolelog);
});
Parse.Cloud.define("sendMessage", function(request, response) {
	// Need to secure this so someone cannot just send messages...  
	nexmo.sendTextMessage(from, to, "This is a test",{}, consolelog);
});

