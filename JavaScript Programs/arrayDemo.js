var num1 = [10,20,30,40,50];            // literal style array declaration with initialization 
var num2 = new Array(10,20,30,40,50);      // creating memory using new keyword with initialization 
document.write("<br/> "+num1.length);
document.write("<br/> "+num2.length);
// num1.push(60);
// num1.push(70);      // it add at last 
// num1.unshift(1);
// num1.unshift(2);       // it add at begining 
document.write("<br/>"+num1[0])
document.write("<br/>"+num1[1])
document.write("<br/>"+num1);    // it will display in string format. 
// retreive elements using for loop 
document.write("<br/> Retreive element one by one using for loop <br/>")
for(var i=1;i<num1.length;i++){
    document.write("<br/> "+num1[i]);
}
document.write("<br/> Using for in loop <br/>")
for(var i in num1){
    document.write("<br/>Index is "+i+" Value is "+num1[i])
}
document.write("<br/> Using for of loop <br/>")
for(var n of num1){
    document.write("<br/> Value is "+n)
}

document.write("<br/> Retreive the elements using forEach function with callback concept<br/>")

num1.forEach(display);
function display(v,i,abc){
    document.write("<br/> Value is "+v+" Index "+i+"Array "+abc);
}

document.write("<br/> passing function body using experssion style<br/>")
num1.forEach(function(n){
    document.write("<br/> Value is "+n)
});

document.write("<br/> passing function body using arrow style<br/>")
num1.forEach(v=>document.write("<br/> Value is "+v));



