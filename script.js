let homescore=0;
let guestscore=0;
let home=document.getElementById("home-score");
let guest=document.getElementById("guest-score");

function homeScore1(){
    homescore+=1;
    home.textContent=homescore
}
function homeScore2(){
    homescore+=2;
    home.textContent=homescore
}
function homeScore3(){
    homescore+=3;
    home.textContent=homescore
}
function guestScore1(){
    guestscore+=1;
    guest.textContent=guestscore
}
function guestScore2(){
    guestscore+=2;
    guest.textContent=guestscore
}
function guestScore3(){
    guestscore+=3;
    guest.textContent=guestscore
}

//new game
function newGame(){
home.textContent=0;
guest.textContent=0;
 homescore=0;
 guestscore=0;
}