const myarray=[ 234 , 'array' , true , console.log];

console.log(myarray);
console.log(typeof(myarray));

console.log(Array.isArray(myarray));

console.log("-------------------------------------------")

const movies=[ 'Bad news' ,'Stree 2','Avengers','Kill','PreDestination'];

//indexing 
console.log(movies[2]);
console.log(movies[4]);
console.log(movies.at(-5));
console.log(movies.at(4));

movies[4]="Deadpool";
console.log(movies);
// movies=[];


// slicing
console.log(movies.slice(1,4));
console.log(movies.slice(-4,-1));
console.log(movies.slice(-2));
console.log(movies.slice(3));


//adding and removing elements
movies.push("The prestige");//add at the end
movies.unshift("The Dark Knight");//add at the begining
console.log(movies);

movies.pop();//remove from the end
movies.shift();//remove from the begining

console.log(movies);

//splice can replace and remove the element
// movies.splice(2,2);//removes 2 elements starting from index 2
movies.splice(2 ,2,'Kalki','OMG',"Spider Man");//removes 2 elements starting from index 2 and insert some elements
console.log(movies);

movies.splice(1,0,"BatMan" , "OMG 2");//insert elements at a partcular index

console.log(movies);