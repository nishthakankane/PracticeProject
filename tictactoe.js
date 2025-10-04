let box = document.querySelectorAll(".box");
let button = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");
let turnO = true;
let winningpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame =() =>{
    turnO = true;
    msgcontainer.classList.add("hide");
    enableboxes();

};
box.forEach((box) =>{
box.addEventListener("click",() =>{
    console.log("box was clicked ");
    if(turnO){
        box.innerText = "O";
        turnO =false;
        box.style.color ="black";
    }
    else{
        box.innerText ="X";
        turnO = true;
        box.style.color ="white"
    }
    box.disabled = true;

    checkwinner();
});
});
const enableboxes = () =>{
    for(let boxx of box ){
        boxx.disabled = false;
        boxx.innerText ="";
    } 
};
const disableboxes =() =>{
    for(let boxx of box){
  boxx.disabled = true ;
    }
};

const showwinner =(winner) =>{
  msg.innerText =`congratulation , winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();

};
const checkwinner = () =>{
    for(let pattern of winningpattern ){
     let pos1val = box[pattern[0]].innerText;
     let pos2val = box[pattern[1]].innerText;
     let pos3val = box[pattern[2]].innerText;

     if (pos1val != "" && pos2val != "" && pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            console.log("winner",pos1val);
            showwinner(pos1val);
        }
    }
     
}
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);