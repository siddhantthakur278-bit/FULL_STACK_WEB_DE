function saymyname(){
    console.log("Love  Babbar")
}

// function use -function call
saymyname();



function printCounting(){
    for(let i=1;i<=100;i++){
        console.log(i)
    }

}
printCounting()

function printNumber(num){
  console.log(num)  
}
printNumber(100)

function getAverage(num1,num2){
    let avg=(num1+num2)/2;
    console.log(avg)

}
getAverage(10,20)

function getSum(a,b,c){
    let sum=a+b+c;
    return sum  
}

console.log(getSum(14,15,16))


function getMyName(firstName,lastName){
    let fullName=firstName+" "+lastName
    return fullName
}
console.log(getMyName("siddhant","Thakur"))

let myanswer=function (a,b){
    return a*b
}
console.log(myanswer(2,20))


let getExp=(x,y)=>{
    let ans=x**y
    return ans;
}

console.log(getExp)
console.log(getExp(3,4))