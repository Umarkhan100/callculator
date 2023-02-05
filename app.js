var num1 = +prompt("Enter num 1");
var opt = prompt("Ener opt");
var num2 = +prompt("Enter num2");
var result;
if(opt === "+"){
    result = num1+num2
}
if(opt === "-" ){
   result = num1-num2
}
if(opt === "/"){
   result = num1/num2
}
if(opt === "*"){
    result = num1*num2
}
alert(result)