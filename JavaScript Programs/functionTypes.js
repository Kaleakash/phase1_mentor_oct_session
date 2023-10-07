// normal function 
display1();

function display1() {
    document.write("<br/> Normal function syntax");
}

display1();

// expression style function 
var display3 = function display2() {
    document.write("<br/> Expression style functions");
}
display3();

//display4();
var display4 = function() {
    document.write("<br/> Expression style function")
}
display4();

// arrow function 
var display5 = ()=>document.write("<br/>This is arrow function");

display5();

// addition of two number using expression style 
var addNumber1 = function (a,b) {
    var sum = a+b;
    return sum;
  }
document.write("<br/> Sum of two number using expression style "+addNumber1(100,200));  
// addition of two number using arrow style 
var addNumber2 = (a,b)=>a+b;
document.write("<br/> Sum of two number using arrow style  "+addNumber2(100,200));  
// find larges of two number using expression style 
var findLargest1 = function(a,b){
    if(a>b){
        return a;
    }else {
        return b;
    }
}
document.write("<br/> find largest of two number using expression style "+findLargest1(10,5))
// find largest of two number using arrow style 
var findLargest2 = (a,b)=>{
    if(a>b){
        return a;
    }else {
        return b;
    }
}
document.write("<br/> find largest of two number using arrow style "+findLargest2(10,5))


