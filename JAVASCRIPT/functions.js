console.log("-------------------------------------------")

function add(a,b){
    var c=a+b;
    console.log(c);
}
add(10,19);
// console.log(c);


console.log("-------------------------------------------")


const getAvg= function(m1,m2,m3){
    const avg=(m1+m2+m3)/3;
    console.log(avg);  
    return(avg);
}
const r=getAvg(42,26,58);
console.log(r);


console.log("-------------------------------------------")


const fact=(n)=>{
    let f=1;

    for(let i=1;i<=n;i++){
        f*=i;
    }
    return f;
}
console.log(fact(6));


console.log("-------------------------------------------")


//WAP to cgeck if a number is prime or not

let num=10;

let prime=true;

for(let i=2;i<=num;i++){
    if(num%i===0){
        prime=false;
        break;
    }
}
  
if(prime){
    console.log("Pime no.");
}
else{
    console.log("Not");
    
}