let displayMin = document.querySelector(".minutes");
let displaySec = document.querySelector(".seconds");
let separator = document.querySelector(".separator");

let body = document.querySelector(".toggle");
let main = document.querySelector(".main");

let ambient = document.querySelector(".ambient");
let rain = document.querySelector(".rain");
let street = document.querySelector(".street");
let bonfire = document.querySelector(".bonfire")

let box = document.querySelector(".box");

let whiteTheme= document.querySelector(".white-theme-icon");
let darkTheme = document.querySelector(".dark-theme-icon");

let buttonPlay = document.querySelector(".play");
let buttonPause = document.querySelector(".pause");
let buttonStop = document.querySelector(".stop");
let increaseTime = document.querySelector(".increase");
let decreaseTime = document.querySelector(".decrease");
let setTime = document.querySelector(".setting");


export{
  displayMin,
  displaySec,
  buttonPlay,
  buttonPause,
  buttonStop,
  increaseTime,
  decreaseTime,
  setTime,
  body,
  main,
  box,
  whiteTheme,
  darkTheme, 
  separator,
  ambient,
  rain,
  street,
  bonfire
}