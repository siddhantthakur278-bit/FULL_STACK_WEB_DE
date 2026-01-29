let obj={
    name:"love",
    age:25,
    weight:85,
    height:"6ft 1in",
    greet: function (){
        console.log("kaise ho")
    }
};

console.log(obj)
obj.greet()


console.log(typeof(obj))

let obj2=obj;



//creation of arrays
let arr=[1,2,3,4,5]
console.log(arr)

//array constructor
let brr=new Array('love',1,true)
console.log(brr)
console.log(typeof(brr))

brr.push("babbar")
console.log(brr)
brr.pop()
console.log(brr)

brr.shift()
console.log(brr)

brr.unshift('love babbar')
console.log(brr)

brr.push(20)
brr.push(40)
brr.push(70)
console.log(brr)

let a=brr.slice(2,4)
console.log(a)
console.log(brr)

brr.splice(1,0,'kunal')
console.log(brr)

let ar=[10,20,30]

let answer=ar.map((number)=>{
    return number*number
})
console.log(answer)

ar.map((number,index)=>{
    console.log(number)
    console.log(index)
})

let nrr=[10,20,30,11,21,44,51]
let evenArray=nrr.filter((number)=>{
    if(number%2==0){
        return true
    }else{
        return false
    }
})

console.log(evenArray)

let mrr=[1,2,'love','kunal',null]

let ans1=mrr.filter((value)=>{
    if(typeof(value)=='string'){
        return true
    }else{
        return false
    }
})
console.log(ans1)


let krr=[10,20,30,40]

let ans =krr.reduce((acc,curr)=>{
    return acc +curr
},0)

console.log(ans)


let jrr=[9,1,7,4,2,8]
jrr.sort();

console.log(jrr)

console.log(jrr.indexOf(9))


//traditional FOR LOOP

let length=jrr.length;
console.log("length",length)

for(let idx=0;idx<length;idx++){
    console.log(jrr[idx])
}

//for each

jrr.forEach((value,idx)=>{
    console.log("Number",value,"idx",idx)
})


for(let key in obj){
    console.log("key:",key,"Value:",obj[key])
}

for(let value of arr){
    console.log(value)
}


let fullName="babbar"
for(let value of fullName){
    console.log(value)
}



let urr=[10,20,30,40,50]

function getSum(arr){
    let sum=0
    arr.forEach((value)=>{
        sum+=value
    })
    return sum
}
console.log(getSum(urr))