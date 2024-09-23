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


const products = [
    {
        title: "Samsung Galaxy S21",
        category: "Electronics",
        type: "Smartphone",
        price: 799.99,
        brand: "Samsung",
        model: "Galaxy S21"
    },
    {
        title: "Apple iPhone 13",
        category: "Electronics",
        type: "Smartphone",
        price: 999.99,
        brand: "Apple",
        model: "iPhone 13"
    },
    {
        title: "Sony WH-1000XM4",
        category: "Electronics",
        type: "Headphones",
        price: 349.99,
        brand: "Sony",
        model: "WH-1000XM4"
    },
    {
        title: "Dell XPS 13",
        category: "Computers",
        type: "Laptop",
        price: 1199.99,
        brand: "Dell",
        model: "XPS 13"
    },
    {
        title: "Nike Air Max 270",
        category: "Fashion",
        type: "Shoes",
        price: 150.00,
        brand: "Nike",
        model: "Air Max 270"
    },
    {
        title: "Samsung QLED TV",
        category: "Electronics",
        type: "Television",
        price: 1299.99,
        brand: "Samsung",
        model: "QLED TV"
    },
    {
        title: "Apple MacBook Pro",
        category: "Computers",
        type: "Laptop",
        price: 2399.99,
        brand: "Apple",
        model: "MacBook Pro"
    },
    {
        title: "Adidas Ultraboost",
        category: "Fashion",
        type: "Shoes",
        price: 180.00,
        brand: "Adidas",
        model: "Ultraboost"
    }
];

user_input='FaS';
const Fashion_category= products.filter( ( ctgr ) => { 
    return ctgr.category.toLowerCase().includes(user_input.toLowerCase());
} );
console.log(Fashion_category);

console.log("----------------------------------");

user_ip='top';
const Typeofproduct= products.filter( ( t ) => {
    return t.type.toLowerCase().includes(user_ip.toLowerCase());
});
console.log(Typeofproduct);

console.log("----------------------------------");

user_ip1='APP';
const Brandofproduct= products.filter( ( b ) => {
    return b.brand.toLowerCase().includes(user_ip1.toLowerCase());
});
console.log(Brandofproduct);

console.log("----------------------------------");

const min_p=products.filter( (a)=> { return (a.price)<300 } );
console.log(min_p);

const max_p=products.filter( (a)=> { return (a.price)>500 } );
console.log(max_p);

const sorted=products.sort( ( prod1 , prod2 ) => { return prod1.price-prod2.price })
console.log(sorted);

console.log("Min price:",sorted[0]);



console.log("---------------------MAP Function------------------------");


const brands = smartphoneArray.map( (phone)=> { return phone.brand} );
console.log(Array.from(new Set(brands)));//new set is for removing the same brand names becoz in set duplicacy is not allowed

// const brands2 = smartphoneArray.map( (phone2)=> { return phone2.brand + phone2.model + phone2.price} );
// console.log(brands2);

const brands2 = smartphoneArray.map( (phone2)=> { return `${phone2.brand} ${phone2.model}-${phone2.price}`} );//${}=Template literals or interpolated string
console.log(brands2);
console.log("-------------------------");

