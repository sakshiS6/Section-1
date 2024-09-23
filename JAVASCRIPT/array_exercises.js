const fruits=['apple','banana','kiwi','pear','plum','strawberry'];

fruits.splice(3,3);
console.log(fruits);

const f2=fruits.map( (n)=> {return n.toUpperCase()});
console.log(f2);

const f3=fruits.filter( (m)=>{
    if(m.includes('a')){
        return m
    }
} )
console.log(f3);

fruits.splice(1 ,0 ,'mango','peach')
console.log(fruits);

const userArr=[
    {name:'John',age:25,email:'john@mail.com'},
    {name:'Jane',age:28,email:'Jane@mail.com'},
    {name:'Tom',age:30,email:'tom@mail.com'},
    {name:'Alice',age:35,email:'alice@mail.com'}
];

const updated=userArr.map((user)=>{
    user.email.replace('mail','gmail');
    return user;
});
console.log(updated);

const obj=userArr[0]
const obj2={...obj,email:obj.email.replace('mail','gmail')};
console.log(obj2);

const updt=userArr.map((user)=>{
    return {...user,email:user.email.replace('mail','gmail')};
})
console.log(updt);

const age=userArr.filter((a)=>{return a.age<30})
console.log(age);

const sorted=userArr.sort( ( x , y ) => { return x.age-y.age })
console.log('sorted',sorted);

const sorted2=userArr.sort( ( x , y ) => { 
    return x.name.localeCompare(y.name)
})
console.log('sorted',sorted2);