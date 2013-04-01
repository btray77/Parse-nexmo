Parse.initialize("", "");

var nexmo = require('cloud/nexmo.js');
nexmo.initialize('12341234', '12341324');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	response.success("Hello world!");
});


var from = '123412341234';
var to = '123412341234';
nexmo.sendTextMessage(from, to, 'testing SMS sending Service!', consolelog);
//nexmo.sendMessage({'from':from ,to:<TO_NUMBER>,text:'testing'},consolelog);

function consolelog(err, messageResponse) {
	if (err) {
		console.log(err);
		response.error(err);
	} else {
		console.dir(messageResponse);
		response.success(messageResponse);
	}
}
Parse.Cloud.define("sendMessage", function(request, response) {
	nexmo.sendTextMessage(request.from, request.to, request.message, consolelog);
});
Parse.Cloud.define("checkBalance", function(request, response) {
	nexmo.checkBalance(consolelog);
});
Parse.Cloud.define("getPricing", function(request, response) {
	nexmo.getPricing('US', consolelog);
});
Parse.Cloud.define("getNumbers", function(request, response) {
	nexmo.getNumbers(consolelog);
});
Parse.Cloud.define("searchNumbers", function(request, response) {
	nexmo.searchNumbers('US', consolelog);
});
Parse.Cloud.define("searchNumbersA", function(request, response) {
	//request.params.areacode  //303 
	nexmo.searchNumbers('US',request.params.areacode , consolelog);
});
Parse.Cloud.define("checkBalance", function(request, response) {
	nexmo.checkBalance(consolelog);
});
//nexmo.checkBalance(consolelog);
//nexmo.getPricing('US',consolelog);
//nexmo.getNumbers(consolelog);
//nexmo.searchNumbers('US',consolelog);
//nexmo.searchNumbers('US',303,consolelog);
//nexmo.changePassword('nexmoapi',consolelog);