/**
 * New node file
 */

var http = require("http");
var url = require("url");


http.createServer(function handler(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(request.url,true).query;

    console.log(params);

    var action = params.calc;
    var a = params.value1;
    var b = params.value2;
    
  
    
    getResult(action, a , b, function(err, num, op){
    	if(err){
    		console.log('Catched');
    	 	response.end(num);
           // throw err;
        }
   
    	else{
   	response.end(a+" "+op+" "+b+" = "+num);
    	}
    	 console.log(num);
    	
    });
 }).listen(1337, '127.0.0.1');
console.log('Calculator Server running at http://127.0.0.1:1337/');
 	

function getResult(operation, number1, number2, done)
{
	 var op;
	if (isNaN(number1)||isNaN(number2))
		{
		done (true,"Number Format Error!! Use only numbers!! Invalid Number!!", op);		
		}
	else if(operation===""||(!(operation == "a")&&!(operation == "s")&&!(operation == "m")&&!(operation == "d"))){
		done (true,"Not Selected any operation!! OR Invalid Operation", op);
	}
	
	else{
	process.nextTick(function(){
 var result = 0;
 var calculation = require('./').calculation;

 if(operation === "a"){
	 op = "+";
  result = calculation.add(number1, number2);}

 else if(operation === "s"){
	 op = "-";
  result = calculation.substract(number1, number2);}

 else if(operation === "m"){
	 op = "*";
  result = calculation.multiply(number1, number2);}

 else if(operation === "d" && number2 !== '0'){
	 op= "/";
  result = calculation.divide(number1, number2);}
 
 else{
	 op="/";
	 result = "Division by zero not allowed(a/0)";
 }
 
	 done (null, result, op);
	});
}
	
}