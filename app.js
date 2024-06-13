let yourChoiseDiv=document.getElementById("your-choice")
const pcChoiseDiv=document.getElementById("pc-choice")

//& Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//& Variables
const userSelectImg=document.createElement("img")
let userSelection;

//Selection

const selectionArticle=document.querySelector(".selection")

selectionArticle.addEventListener("click",(e)=>{

    userSelection=e.target.id

if(condition)

    userSelectImg.src=`./assets/${userSelection}.png`
    yourChoiseDiv.appendChild(userSelectImg)
})