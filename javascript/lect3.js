console.log("siddhant")

let a=10;
let b=5;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(2**b)
// a=a+10
a+=10
console.log(a)

// a=a-5
a-=5
console.log(a)

console.log(a>b)
console.log(a<b)
console.log(5>=5)
console.log(5<=5)
console.log(50<=5) 
console.log(5==5)
console.log(5=='5')
console.log(5==='5')

let age=25;
let status=(age>18)?'I can vote':'I cannot Vote';
console.log(status)

let ans=(true&&true&&true)
console.log(ans);

let ans1=(false||false||true)
console.log(ans1);

let ans2=!(true)
console.log(ans2)

console.log(false||'babbar'||7||11||18);


console.log(2&5)
console.log(2|5)
console.log(~(0))

console.log(2^2)

console.log(10>>1)

console.log(10<<1)

let agex=53;
if (agex>=18){
    console.log("can Vote")
}
else{
    console.log("cannot vote")
}

let num=5
let a1=56
if (num==1){
    console.log("A")
}
else if(num==2){
    console.log("B")
}
else if(num==3){
    console.log("C");
}
else if(num==4){
    console.log("D")
}
else if(num==5){
    if (a1>18){
        console.log('I can VOte')
    }
    console.log("E")
}
else{
    console.log("Z")
}


                 
let number=3
switch(number){
    case 1: console.log("A");
    break
    case 2: console.log("B")
    break
    case 3: console.log("C")
    break
    case 4:console.log("D")
    break
    default: console.log("F");
    break
}