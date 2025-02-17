let userscore=0
let compscore=0

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compcorepara=document.querySelector("#comp-score");

const  gencomputrchoice=()=>{
    const options=["rock","paper","scissor"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
};

const draw=()=>{
    msg.innerText="game was draw. Play again";
    msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin, userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
      
    }
    else{
        compscore++;
        compcorepara.innerText = compscore;
        msg.innerText=`you lost!${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    // console.log("User Choice=",userchoice);

    const compchoice=gencomputrchoice();
    // console.log('choice=',compchoice);
if(userchoice===compchoice){
    draw();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"? false:true;
    }
   else if(userchoice=="paper"){
        userwin=compchoice==="scissor"? false:true;
    }
    else{
        userwin=compchoice==="rock"? false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
