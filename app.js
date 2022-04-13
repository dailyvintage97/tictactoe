//오버레이 끄기켜기

function overay1on() {
  document.getElementById("overay").style.display = "block";
  document.getElementById("overay1").style.display = "block";
}

function overay1off() {
  document.getElementById("overay").style.display = "none";
  document.getElementById("overay1").style.display = "none";
}

function overay2on() {
  document.getElementById("overay").style.display = "block";
  document.getElementById("overay2").style.display = "block";
}

function overay2off() {
  document.getElementById("overay").style.display = "none";
  document.getElementById("overay2").style.display = "none";
}

document.getElementById("edit1").addEventListener("click", overay1on);
document.getElementById("edit2").addEventListener("click", overay2on);
document.getElementById("cancel1").addEventListener("click", overay1off);
document.getElementById("cancel2").addEventListener("click", overay2off);

//오버레이 이름바꾸기
const enteredname1 = document.getElementById("input-name1");
const enteredname2 = document.getElementById("input-name2");
const confirm1 = document.getElementById("confirm1");
const confirm2 = document.getElementById("confirm2");

function namech1() {
  const name = enteredname1;
  document.querySelector("#player1 p").textContent = name.value;

  document.getElementById("overay").style.display = "none";
  document.getElementById("overay1").style.display = "none";
}

function namech2() {
  const name = enteredname2;
  document.querySelector("#player2 p").textContent = name.value;

  document.getElementById("overay").style.display = "none";
  document.getElementById("overay2").style.display = "none";
}

confirm1.addEventListener("click", namech1);
confirm2.addEventListener("click", namech2);

//게임 메트로놈
let ddokddak = 1;
//게임필드
const tics = document.getElementsByClassName("tic");

//게임

for (const i of tics) {
  i.addEventListener("click", change);
  i.addEventListener("click", handleClick);
  function change(event) {
    const touchedpad = event.target.children[0];
    if (touchedpad.textContent == false) {
      i.classList.add("touched");
    }
  }
}

function handleClick(event) {
  const touchedpad = event.target.children[0];
  if (touchedpad.textContent == false) {
    console.log(ddokddak);

    if (ddokddak % 2 == 0) {
      touchedpad.textContent = "X";
      ddokddak++;
      gamedone();
    } else if (ddokddak % 2 == 1 && ddokddak < 9) {
      touchedpad.textContent = "O";
      ddokddak++;
      gamedone();
    } else if (ddokddak % 2 == 1 && ddokddak == 9) {
      touchedpad.textContent = "O";
      gamedone();
      gametie();
    }
  } else {
    console.log(wrong);
  }
}

//start new game
const startbtn = document.getElementById("start");

function restart() {
  for (const i of tics) {
    i.children[0].textContent = "";
    ddokddak = 1;
    i.classList.remove("touched");
    whoswin.style.display = "none";
    gamearea.style.display = "grid";
  }
}

startbtn.addEventListener("click", restart);

//whoswin
let winner = document.getElementById("winner");
const gamearea = document.getElementById("game-area");
const whoswin = document.getElementById("whoswin");

function player1win() {
  let player1name = document.querySelector("#player1 p").textContent;
  winner.innerText = player1name;
  gamearea.style.display = "none";
  whoswin.style.display = "block";
}

function player2win() {
  let player2name = document.querySelector("#player2 p").textContent;
  winner.innerText = player2name;
  gamearea.style.display = "none";
  whoswin.style.display = "block";
}

//게임종료

function gamedone() {
  if (
    tics[0].textContent == "\n          O\n        " &&
    tics[1].textContent == "\n          O\n        " &&
    tics[2].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player1win();
  } else if (
    tics[3].textContent == "\n          O\n        " &&
    tics[4].textContent == "\n          O\n        " &&
    tics[5].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player1win();
  } else if (
    tics[6].textContent == "\n          O\n        " &&
    tics[7].textContent == "\n          O\n        " &&
    tics[8].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player1win();
  } else if (
    tics[0].textContent == "\n          O\n        " &&
    tics[3].textContent == "\n          O\n        " &&
    tics[6].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player1win();
  } else if (
    tics[1].textContent == "\n          O\n        " &&
    tics[4].textContent == "\n          O\n        " &&
    tics[7].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player1win();
  } else if (
    tics[2].textContent == "\n          O\n        " &&
    tics[5].textContent == "\n          O\n        " &&
    tics[8].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player1win();
  } else if (
    tics[0].textContent == "\n          O\n        " &&
    tics[4].textContent == "\n          O\n        " &&
    tics[8].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player1win();
  } else if (
    tics[2].textContent == "\n          O\n        " &&
    tics[4].textContent == "\n          O\n        " &&
    tics[6].textContent == "\n          O\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[0].textContent == "\n          X\n        " &&
    tics[1].textContent == "\n          X\n        " &&
    tics[2].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[3].textContent == "\n          X\n        " &&
    tics[4].textContent == "\n          X\n        " &&
    tics[5].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[6].textContent == "\n          X\n        " &&
    tics[7].textContent == "\n          X\n        " &&
    tics[8].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[0].textContent == "\n          X\n        " &&
    tics[3].textContent == "\n          X\n        " &&
    tics[6].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[1].textContent == "\n          X\n        " &&
    tics[4].textContent == "\n          X\n        " &&
    tics[7].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[2].textContent == "\n          X\n        " &&
    tics[5].textContent == "\n          X\n        " &&
    tics[8].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[0].textContent == "\n          X\n        " &&
    tics[4].textContent == "\n          X\n        " &&
    tics[8].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  } else if (
    tics[2].textContent == "\n          X\n        " &&
    tics[4].textContent == "\n          X\n        " &&
    tics[6].textContent == "\n          X\n        "
  ) {
    console.log("win");
    player2win();
  }
}

//무승부
function gametie() {
  document.querySelector("#whoswin p").innerText = "Tie!";
  gamearea.style.display = "none";
  whoswin.style.display = "block";
}
