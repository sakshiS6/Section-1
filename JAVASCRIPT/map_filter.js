console.log("-----------------Map----------------");

const nums=[2,3,4,5,6,7];
const cubes=[];

nums.forEach( ( n )=>{ cubes.push(n**3) });

console.log(cubes);


console.log("----------------Filter----------------");


const even=[];

nums.forEach( ( n )=>{ 
    if(n%2===0){ even.push(n); }
 });

console.log("Even numbers in array:",even);
console.log("This is the initial array:",nums);


console.log("----------------------------------");
//Map Function

const newNums = nums.map((n)=>{return n**3});
console.log(newNums);

console.log("----------------------------------");

const prices=[230,4500,6799,2730,8880,990];

const GST_Prices=prices.map( (n1) => { return n1+n1*0.18 });
console.log(GST_Prices);


console.log("----------------------------------");


const Prices2=['₹450.45','₹230.9','₹6326.95','₹273.90'];

const New=Prices2.map( (p) => { return parseInt(p.slice(1)) });
console.log(New);


console.log("----------------------------------");
//FILTER function-condition work on the basis of true or false if it true then it return that element otherwise not


const newNums2=nums.filter( (n)=> { return n%2===0});
console.log(newNums2);

console.log("----------------------------------");


const names=['Raju','Pinki','Ramesh','Indumati','Kaliya','Chutki','Bheem','Dholu-Bholu'];
const names2=names.filter( (nm)=> { return nm.length>=6});
console.log(names2);


console.log("----------------------------------");


const names3=names.filter( (nm1)=> { return nm1[0]==='R'});
console.log(names3);


console.log("----------------------------------");


const numbers2=[2,4,7,9,16,18,36];

const perfect= numbers2.filter( (a1)=> { return Number.isInteger(a1**0.5) });
console.log(perfect);

