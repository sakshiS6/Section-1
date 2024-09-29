//The main adv of using DOM is to do dynamic changes in our web page.

console.log("hello1");
// alert('hello2')
// window.console.log("HEllO3")
console.dir(document.body);
console.dir(document.body.childNodes);
console.log(document.body);
document.body.childNodes[1].innerText = "cbjdvcsks"; //changing heading , if written the console window of browser(inspect>console) then it is called dynamic changes

//DOM Manipulation-selecting with id,class,tag

//1.id-unique

let headingID=document.getElementById("heading"); //h1
console.dir(headingID)

//2.class-for multiple elements 

let headingClass=document.getElementsByClassName("heading1")
console.dir(headingClass)
//html collection is very similar to array not exactly array

//3.Tag Name
let parhs=document.getElementsByTagName("p")
console.dir(parhs)

//Querry selector-it can automatically detect accesing by id , class , tag name
let first_el=document.querySelector("p") //returns 1st 
console.dir(first_el)
let All_el=document.querySelectorAll("p") //returns nodelist
console.dir(All_el)

console.log(first_el.tagName)

//Change
let h2_heading=document.querySelector("h2")
h2_heading.innerText = h2_heading.innerText + "-This shows DOM Properties";

let div1=document.querySelector("div")
console.log(div1);

let value=div1.getAttribute("id")
console.log(value);

let name1=div1.getAttribute("name")
console.log(name1);

div1.style.backgroundColor = "Purple";
div1.style.fontSize = "40px";
// div1.style.visibility="hidden";

//Creating a new element-
let newButton = document.createElement("button");
newButton.innerText = "Click me"
console.log(newButton);

//To show this new el on screen there are four method-append(Last),prepend(starting),before,after

div1.append(newButton)
div1.prepend(newButton)
div1.before(newButton)
h2_heading.after(newButton)

let newHeading = document.createElement("h1");
newHeading.innerHTML="<i>Hello</i>";

document.querySelector("body").prepend(newHeading);

let para=document.querySelector("p");
// para.remove();

//Practice

let oneMoreButton = document.createElement("button");
oneMoreButton.innerText = "Visit Here";
oneMoreButton.style.backgroundColor = "red";
oneMoreButton.style.color = "white";

document.querySelector("body").prepend(oneMoreButton);

// para.setAttribute("Class","newClass");//New-Class Overwrite the Class

para.classList.add("newClass");
