// const a = document.querySelector("#fan")
// function On(){
//     a.style.animationDuration = 1 + "s";
// }
// function Off(){
//     a.style.animationDuration = 0 + "s";
// }
// function high(){
//     a.style.animationDuration = 0.5 + "s";

// }
// function medium(){
//     a.style.animationDuration = 1.5 + "s";

// }
// function low(){
//     a.style.animationDuration = 2 + "s";

// }

const fan = document.querySelector("#fan");

function onFan() {
  fan.style.animationDuration = "1s";
}

function offFan() {
  fan.style.animationDuration = "0s";
}

function highFan() {
  fan.style.animationDuration = "0.5s";
}

function mediumFan() {
  fan.style.animationDuration = "1.5s";
}

function lowFan() {
  fan.style.animationDuration = "2s";
}

