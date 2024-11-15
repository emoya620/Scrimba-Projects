let homeScore = 0;
let guestScore = 0;
let homePossession = true;
let guestPossession = false;
let homePoss = document.getElementById("left-triangle-empty");
let guestPoss = document.getElementById("right-triangle-empty");
let period = 1;
document.getElementById('timer').innerHTML = 12 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s=="59"){
    m=m-1
  }
  if (m == 9){
    document.getElementById("timer").style.left = "0px";
  }
  if(m < 0 && period <= 4){
    period += 1;
    document.getElementById("period").style.left = "0px";
    if (period > 4){
      document.getElementById('timer').innerHTML = "GAME OVER"
      return;
    }
    document.getElementById("period").innerHTML = period.toString();
    document.getElementById("timer").style.left = "-18px";
    m = 12;
    s = "00";
  }
  
  document.getElementById('timer').innerHTML = m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
  }
  if (sec < 0) {
    sec = "59"
  }
  return sec;
}

function add1(id){
  let scoreEl = document.getElementById(id);
  if (id=="home-score"){
    homeScore += 1;
    scoreEl.innerHTML = homeScore;
    if (homePossession){
      changePossession();
    }
  }
  else{
    guestScore += 1;
    scoreEl.innerHTML = guestScore;
    if (guestPossession){
      changePossession();
    }
  }
}

function add2(id){
  let scoreEl = document.getElementById(id);
  if (id=="home-score"){
    homeScore += 2;
    scoreEl.innerHTML = homeScore;
    if (homePossession){
      changePossession();
    }
  }
  else{
    guestScore += 2;
    scoreEl.innerHTML = guestScore;
    if (guestPossession){
      changePossession();
    }
  }
}

function add3(id){
  let scoreEl = document.getElementById(id);
  if (id=="home-score"){
    homeScore += 3;
    scoreEl.innerHTML = homeScore;
    if (homePossession){
      changePossession();
    }
  }
  else{
    guestScore += 3;
    scoreEl.innerHTML = guestScore;
    if (guestPossession){
      changePossession();
    }
  }
}

function changePossession(){
  if (homePossession){
    homePossession = false;
    guestPossession = true;
    
    homePoss.style.borderRightColor = "black";
    guestPoss.style.borderLeftColor = "red";
  }
  else if (guestPoss){
    guestPossession = false;
    homePossession = true;
    
    homePoss.style.borderRightColor = "red";
    guestPoss.style.borderLeftColor = "black";
  }
}