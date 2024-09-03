console.log("----------------------------------");

const user={
    name:'Raju',
    email:'raju@gmail.com',
    password:'1234abc'
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.password='xyz1235';
console.log(user);

user.address='Lucknow'
console.log(user);

user.address={
    city:'Lko',
    state:'UP',
    Pincode:226017
};
console.log(user);

console.log(user.address.city);

user.post=['Post 1','Post 2'];
console.log(user);

console.log(user.post[1]);


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));//arrays of key value pair in different arrays

console.log("----------------------------------");

const smartphone={
    brand:'Samsung',
    model:'S24 Ultra',
    price:99999,
    colors:['Black','White','Blue']
};

console.log(smartphone.colors[1]);
//Add new color
smartphone.colors.push('Green');
console.log(smartphone);

// smartphone.colors[0]='Grey';

smartphone.colors.splice(0,1,'Grey');//0 is the index and 1 is the no. of elements
console.log(smartphone.colors);

//new feature of ES6(DEstructuring)

const { email,password }=user;
console.log(email);
console.log(password);

const arr=[2,5,4,8];

const[a,,d]=arr;
console.log(d);

let[x,y,z]=[10,20,30];
[x,z]=[z,x];
console.log(x,z);//swapping


//array of objects

const smartphoneArray=[
    {
    brand:'Samsung',
    model:'S24 Ultra',
    price:99999,
    colors:['Black','White','Blue']
    },
    {
    brand:'Oppo',
    model:'Reno 8',
    price:30000,
    colors:['Green','Red']
    },
    {
        brand:'One Plus',
        model:'11R',
        price:45000,
        colors:['Yellow','Lemon']
    },
    {
    brand:'Apple',
    model:'Iphone 15 pro',
    price:124000,
    colors:['Navy blue','Black']
    },
    {
        brand:'Google',
        model:'Pixel 9',
        price:60000,
        colors:['Green','Red']
    }
]

console.log(smartphoneArray[3].price);
console.log(smartphoneArray[4].colors[1]);
console.log(smartphoneArray[4].colors[1][2][0]);

//map and filter

const budgetsmartphone=smartphoneArray.filter( ( phone )=>{ return phone.price<50000 } )
console.log(budgetsmartphone);

console.log("----------------------------------");

const query='sam';//user search

// const samsung1=smartphoneArray.filter( ( b )=>{ 
//     return b.brand.toLowerCase()=== query.toLowerCase();
// } );

const samsung1=smartphoneArray.filter((phone)=>{
    return phone.brand.toLowerCase().includes(query.toLowerCase());
});

console.log(samsung1);

console.log("----------------------------------");

