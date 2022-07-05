import Controls from "./controls.js";
import Sounds from "./sounds.js";

export default function Timer({
  displayMin,
  displaySec,
  
}){

  let timerCount;
  let minutes = Number(displayMin.textContent);

  function formatTime(minutes, seconds){
    displayMin.textContent = String(minutes).padStart(2, "0");
    displaySec.textContent = String(seconds).padStart(2, "0");
  }

  function reset(){
    formatTime(minutes, 0);
    clearTimeout(timerCount);
  }

  function countdown(){

    timerCount = setTimeout(function(){
      let seconds = Number(displaySec.textContent);
      let minutes = Number(displayMin.textContent);

      if (seconds <= 0 && minutes <= 0){
        Sounds().timerEnds();
        reset();
        Controls().resetControl();
        return
      }

      if(seconds <= 0){
        seconds = 6;
        --minutes;
      }

      formatTime(minutes, seconds - 1);

      countdown();
    
    }, 1000)
  }

  function minutesUpdate(newMinutes){
    minutes = newMinutes;
  }

  function freezeTime(){
    clearTimeout(timerCount);
  }

  return{
    countdown,
    formatTime,
    minutesUpdate,
    reset,
    freezeTime
  }
}