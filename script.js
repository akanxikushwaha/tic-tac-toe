let turn="playerX"
let count=0;
let arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let choices=document.querySelectorAll(".choice");
let messageBox=document.querySelector("#messageBox");

let play=()=>{
    messageBox.addEventListener("click",()=>{
        if (messageBox.innerText=="play" ||
            messageBox.innerText=="player 1 wins! (play again)" ||
            messageBox.innerText=="player 2 wins! (play again)" ||
            messageBox.innerText=="draw! (play again)"){
            messageBox.innerText="reset";
            count=0;
            turn="playerX";}
        choices.forEach((choice)=>{
            choice.addEventListener("click",()=>{
                if (choice.innerText=='' && turn=="playerX" &&
                    messageBox.innerText!="player 1 wins! (play again)" &&
                    messageBox.innerText!="player 2 wins! (play again)" &&
                    messageBox.innerText!="draw! (play again)"){
                    choice.innerText="X";
                    const audio= new Audio("button.mp3");
                    audio.play();
                    turn="playerO";
                    count+=1;
                }
                else if (choice.innerText=='' && turn=="playerO" &&
                    messageBox.innerText!="player 1 wins! (play again)" &&
                    messageBox.innerText!="player 2 wins! (play again)" &&
                    messageBox.innerText!="draw! (play again)"){
                    choice.innerText="O";
                    const audio= new Audio("button.mp3");
                    audio.play();
                    turn="playerX";
                    count+=1;
                }
                if (count>=5 &&
                    messageBox.innerText!="player 1 wins! (play again)" &&
                    messageBox.innerText!="player 2 wins! (play again)" &&
                    messageBox.innerText!="draw! (play again)"){
                    let j=0;
                    for (let i=0;i<=7;i++){
                        if(choices[(arr[i][0])].innerText==choices[(arr[i][1])].innerText &&
                           choices[(arr[i][1])].innerText==choices[(arr[i][2])].innerText &&
                           choices[(arr[i][2])].innerText==choices[(arr[i][0])].innerText &&
                           (choices[(arr[i][2])].innerText=="O" || choices[(arr[i][2])].innerText=="X")){
                            if(turn=="playerO"){
                                messageBox.innerText="player 1 wins! (play again)";
                                return;
                            }
                            else if(turn=="playerX"){
                                messageBox.innerText="player 2 wins! (play again)";
                                return;
                            }
                        }
                    }
                }
                if(count==9){
                    messageBox.innerText="draw! (play again)";
                    return;
                }
            })
        })
    })
    messageBox.addEventListener("click",()=>{
        if (messageBox.innerText=="reset"){
            choices.forEach((choice)=>{
                choice.innerText='';
            })
            count=0;
            turn="playerX";
        }
    })
}
play();

