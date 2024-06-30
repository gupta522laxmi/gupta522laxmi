

let gameseq=[];
let userseq=[];

let btns = ["yellow","green","blue","red"];

//game is not started
let started=false;
//level starts from 0
let level=0;


let h2= document.querySelector("h2");
document.addEventListener("click",function() {
    if (started == false){
        console.log("game started");
         //Game starts
        started = true;
        //as the game starts it enters to level one
        levelUp();
    }

    
});

function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },200)
  }

function levelUp(){
  userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randomindex = Math.floor(Math.random()*3);
    let randomcolor = btns[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash( randombtn);

}

function btnPress(){
    // console.log(this);
    let btn = this;
    userflash(btn);
    userColour = btn.getAttribute("id");
    userseq.push(userColour);
    checkAns(userseq.length-1);
    console.log(userseq);
}

let allbtns  = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
  
  if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
     setTimeout( levelUp,1000)
    }
  }
  else{
    h2.innerHTML = `game over! your score is <b>${level} </b> <br>press any key to start again.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    document.addEventListener("click",function(){
      reset();
    })
  }
}

function reset(){
  started = false;
  userseq=[];
  gameseq=[];
  level=0;
}