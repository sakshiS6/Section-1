const nums=[2 , 5 , 1  ,4 , 9 , 3];

for(let i=0;i<nums.length;i++){
    console.log(nums[i]** 2); //square
}

console.log("-----------------------------------------");

for(let n of nums){
    console.log(n**2);  
}

console.log("-----------------------------------------");

nums.forEach( (a,i)=>{console.log(a,i);});

console.log("-----------------------------------------");

nums.forEach( (a,i,j)=>{console.log(a,i,j);});

console.log("-----------------------------------------");
//print all even no. from the array

nums.forEach( (a)=>{
    if(a%2==0)
     console.log(a);
});


console.log("-----------------------------------------");
