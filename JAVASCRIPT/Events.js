//JS  EventHandling

let button1 = document.querySelector("#btn1");
// button1.onclick = () => {
//     console.log("JS Handling , Button was clicked");
//     let a=6;
//     console.log(++a);
// }

let div = document.querySelector("div");
div.onmouseover = (e) => {
    console.log("Div Box");   
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
}

//In Js Handeler only one fun at a time can be handled
//Event Listener - More efficient than JS Handler

button1.addEventListener("click" , (evt) => { 
  console.log('Button was clicked');
//   console.log(evt);
//   console.log(evt.type);
});

button1.addEventListener("click" , (evt) => { 
    console.log('Button was clicked-1');
});
button1.addEventListener("click" , (evt) => { 
    console.log('Button was clicked-2');
});
const handler3 = (evt) => { 
    console.log('Button was clicked-3');
};
button1.addEventListener("click" , (evt) => { 
    console.log('Button was clicked-4');
});

button1.removeEventListener("click" , handler3);
