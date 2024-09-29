//Switching from one stte to another is called Toggle

let mode1 = document.querySelector("#mode");
let body = document.querySelector("body");
let CurrentMode = "light";//dark

mode1.addEventListener("click" , () =>{
    if (CurrentMode === "light"){
        CurrentMode = "dark";
        body.classList.add("dark");
    }
    else {
        CurrentMode = "light";
        body.classList.add("light");
    }
    console.log(CurrentMode);
})