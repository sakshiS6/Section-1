for(let i=0;i<=10;i++){
    console.log(i)
}

console.log("----------------------------------")

for(let i=10;i>=0;i--){
    console.log(i)
}

//

console.log("----------------------------------")
let count=0;
while(count<=10){
    console.log(count);
    count++;
}

console.log("----------------------------------")

for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}

console.log("----------------------------------")

let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum)

console.log("----------------------------------")

let m=15;
for(let i=1;i<=10;i++){
   
    console.log("15"+"X"+i+"="+ m*i)
}

console.log("----------------------------------")

fruit=["apple","banana","orange","mango"]

for(let j=0;j<fruit.length;j++){
    console.log(fruit[j])
}

console.log("----------------------------------")

let fruits2=["a","b","h","o"]
for(let f of fruits2){
    console.log(f)
}

console.log("----------------------------------")

const person={
    name:"john",
    age:25,
    city:"new york"
};
for(let key in person){
    console.log(key,"=",person[key]);
}

console.log("----------------------------------")

for(let i=0; i<10; i++){
    console.log(i);
}

console.log("----------------------------------")

for(let i=10; i<=50; i++){
    if(i%7===0)
        {
           console.log(i);
        }
}
    
console.log("----------------------------------")

let a=10;
do{
    console.log(a);
    a++;
}while(a>20);


