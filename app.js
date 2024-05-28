let pickpaper=document.querySelector(".paper");
let pickrock=document.querySelector(".rock");
let pickscissor=document.querySelector(".scissor");
let hands=document.querySelector(".hands");
let contest=document.querySelector(".contest");
let resetbtn=document.querySelector(".newgamebtn");



console.log(pickpaper);
console.log(pickrock);
console.log(pickscissor);
let SCORE1=0;
let SCORE2=0;
const handOption={
    "rock":"Rock.png",
    "scissor":"Scissors.png",
    "paper":"Paper.png"
}

const pickuserhand = (hand)=>{
    console.log(hand);
    hands.style.display = "none";
    contest.style.display="flex";
    resetbtn.style.display="flex";
    document.querySelector("#userPickImage").src=handOption[hand];
    let cphand=pickComputerHand();
    referee(cphand,hand,SCORE1,SCORE2);

   
}
let playAgain=document.querySelector(".newgame");





pickpaper.addEventListener("click",() => pickuserhand("paper"));
pickrock.addEventListener("click",() => pickuserhand("rock"));
pickscissor.addEventListener("click",() => pickuserhand("scissor"));





const pickComputerHand=()=>{
    let comHand=["rock","paper","scissor"];
    
    let cphand=comHand[Math.floor(Math.random()*3)];
    console.log(cphand);
    document.querySelector("#ComputerPickImage").src=handOption[cphand];
    return cphand;
}

const referee = (cphand,userhand) =>{
        if(userhand=="paper" && cphand=="rock"){
            setDecision("YOU WIN");
            setScore(SCORE1+1,SCORE2);
        }
        else if(userhand=="rock" && cphand=="scissor"){
            setDecision("YOU WIN");
            setScore(SCORE1+1,SCORE2);
        }
        else if(userhand=="scissor" && cphand=="paper"){
            setDecision("YOU WIN");
            setScore(SCORE1+1,SCORE2);
        }
        else if(userhand=="paper" && cphand=="scissor"){
            setDecision("YOU LOSE");
            setScore(SCORE1,SCORE2+1);
        }
        else if(userhand=="scissor" && cphand=="rock"){
            setDecision("YOU LOSE");
            setScore(SCORE1,SCORE2+1);
        }
        else if(userhand=="rock" && cphand=="paper"){
            setDecision("YOU LOSE");
            setScore(SCORE1,SCORE2+1);
        }
        else{
            setDecision("IT'S A TIE");
        }
}


const setDecision = (decision) =>{
        document.querySelector(".decision h1").innerText=decision;
}

const setScore = (score1,score2)=>{
    SCORE1=score1;
    SCORE2=score2;

    document.querySelector(".score1 h1").innerText=score1;
    document.querySelector(".score2 h1").innerText=score2;
}

const restartgame=()=>{
    hands.style.display = "flex";
    contest.style.display="none";
    resetbtn.style.display="none";
}

playAgain.addEventListener("click",restartgame);


const resetfunction = () => {
    hands.style.display = "flex";
    contest.style.display="none";
    resetbtn.style.display="none";
     SCORE1=0;
     SCORE2=0;
     document.querySelector(".score1 h1").innerText=SCORE1;
     document.querySelector(".score2 h1").innerText=SCORE2;

}

resetbtn.addEventListener("click",resetfunction);
