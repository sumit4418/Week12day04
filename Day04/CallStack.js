"use strict"
let a = 30;
let b = 15;
function add(x,y){
    alert("multiplication, addition, substraction and division");
     multiplication(a, b);
     let result = x + y ;
     console.log(result);
}

function multiplication(x,y){
    let mul = x * y ;
    console.log(mul);
    substraction(a,b);
}

function substraction(x,y){
    let sub = x - y ;
    console.log(sub)
    division(a,b);
}
function division(x,y){
    let div = x % y ;
    console.log(div);
   
}

add(a,b);
