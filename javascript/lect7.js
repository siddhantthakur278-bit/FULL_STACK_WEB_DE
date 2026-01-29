saymyName("babbar")
function saymyName(name){
    console.log(name)
}

console.log(age)
var age=25;


// console.log(wt)
let wt=85



// sayhello()
// let  sayhello=function (){
//     console.log("hello jee,kaise ho saare")
// }

// const object1=new Human()
// class Human{
    
// }

//function expression//function as first class citizen
let greet = function(){
    console.log("Greeting for the day")
}

greet();


function greetme(greet1,fullname){
console.log("Hello",fullname);
greet1()
}
function greet1(){
    console.log("greeting for the day")
}

greetme(greet1,"babbar")


function solve(number){
    return function(number){
        return number*number;
    }
}

let ans=solve(5)
let finalanswer=ans(10);
console.log(ans);
console.log(finalanswer)

const arr=[
    function(a,b){
        return a+b
    },
    function(a,b){
        return a-b
    },
    function(a,b){
        return a*b
    },
]
// let first=arr[0](5,10)
// console.log(first)
let first=arr[0]
console.log(first(10,5))

let second=arr[1](10,5)
console.log(second)

let third=arr[2](10,10)
console.log(third)


let obj={
    age:25,
    wt:36,
    ht:180,
    greetx:()=>{
        console.log("hello dunia")
    }
}

console.log(obj.age);
obj.greetx()


console.log(greett);
// greett()
var greett=function(){
    console.log("Namesty Dunia")
}




