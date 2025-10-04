let userscore =0;
let compscore =0;
const choice =document.querySelectorAll(".choice");
const game = document.querySelectorAll(".game");
const msg = document.querySelector("#msg");
const msgcontainer =document.querySelectorAll(".msgcontainer");
const user = document.querySelector("#user");
const computer =document.querySelector("#computer");
  const draw =() =>{
    console.log(" It is a draw game");
    msg.style.color="purple";
    msg.innerText ="    game is drawn 'choose smartely' , try again!!";
  }
  const showwinner = ( userwin,userchoice,compchoice) => {
  if(userwin){
    console.log("you have won the game ");
    msg.innerText = `congratulation!! you have won the game,\n your's choice '${userchoice}' beated computer's choice '${compchoice}'`;
    msg.style.color="blue";
    userscore++;
    user.innerText =userscore;
  }
  else{
    console.log("you have lost the game !");
    msg.innerText =`lost!! try again\n computer's choice '${compchoice}' beated your's choice '${userchoice}'`;
    msg.style.color ="red";
    compscore++;
    computer.innerText=compscore;
  }
  }
const gencompchoice =() =>{
    const option= [ "rock","paper","scissor"];
    const randomindex = Math.floor(Math.random()*3);
    return option[randomindex];
}
const playgame =(userchoice) =>{
   console.log("user choice =" , userchoice);
   let compchoice =gencompchoice();
   console.log("computer choice =" , compchoice);
   if(userchoice === compchoice){
  draw();
   } else{
    let userwin = true;
    if(userchoice ==="rock"){
        userwin = compchoice==="paper" ? false:true;
    }
    else if(userchoice ==="paper") {
        userwin = compchoice==="scissor" ? false:true;
    }
    else{
        userwin = compchoice ==="paper" ? false :true ;  
    }
   
   showwinner(userwin,userchoice,compchoice);
}
};

choice.forEach((choice) =>{
    choice.addEventListener("click",() =>{ 
        console.log("choice is clicked"); 
        let userchoice =choice.getAttribute("id");
        playgame(userchoice);
    });
});