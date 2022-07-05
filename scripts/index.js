import{displayMin,displaySec,buttonPlay,buttonPause,buttonStop,increaseTime,decreaseTime,setTime,separator,body,main,box,whiteTheme,darkTheme,ambient,rain,street,bonfire,volumeA,volumeR,volumeB,volumeS} from "./documents.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import themeSwap from "./themeSwap.js"
import Sounds from "./sounds.js"


let sound = Sounds()

let control = Controls({
  buttonPlay,
  buttonPause,
  displayMin,
})

let timer = Timer({
  displayMin,
  displaySec,
})

let theme = themeSwap({
  whiteTheme,
  darkTheme,
  displayMin,
  displaySec,
  separator,
  body,
  main,
  box,
  ambient,
  rain,
  street,
  bonfire
})



/* Volume Control */
volumeA.addEventListener("change", (x)=>{
  sound.ambientS.volume = x.currentTarget.value / 100;
})
volumeR.addEventListener("change", (x)=>{
  sound.rainS.volume = x.currentTarget.value / 100;
})
volumeS.addEventListener("change", (x)=>{
  sound.streetS.volume = x.currentTarget.value / 100;
})
volumeB.addEventListener("change", (x)=>{
  sound.bonfireS.volume = x.currentTarget.value / 100;
})



/* Swap theme */
whiteTheme.addEventListener("click", () => {
  theme.swapWhite();
  theme.white();
  sound.pauseAllOnThemeChange();

  
})

darkTheme.addEventListener("click", () => {
  theme.swapDark()
  theme.dark()
  sound.pauseAllOnThemeChange()
})


/*Background on selected Sounds*/
ambient.addEventListener("click", ()=>{
  if(ambient.classList.contains('bg-light')){
    ambient.addEventListener("click", ()=>{
    theme.unselectedAmbientLight();
    sound.ambientS.pause();
    })
  } else if(ambient.classList.contains('bg-dark')){
      ambient.addEventListener("click", ()=>{
      theme.unselectedAmbientLight();
      sound.ambientS.pause();
      })
  } else{
    ambient.addEventListener("click", ()=>{
      theme.selectedAmbientLight();
      sound.ambientSound();
      })
   }
})


rain.addEventListener("click", ()=>{
  if(rain.classList.contains('bg-light')){
    rain.addEventListener("click", ()=>{
    theme.unselectedRainLight();
    sound.rainS.pause()
    })
  } else if(rain.classList.contains('bg-dark')){
      rain.addEventListener("click", ()=>{
      theme.unselectedRainLight();
      sound.rainS.pause();
      })
  } else  {
    rain.addEventListener("click", ()=>{
      theme.selectedRainLight();
      sound.rainSound();
    })
  }
})


street.addEventListener("click", ()=>{
  if(street.classList.contains('bg-light')){
    street.addEventListener("click", ()=>{
    theme.unselectedStreetLight();
    sound.streetS.pause();
    })
  } else if(street.classList.contains('bg-dark')){
      street.addEventListener("click", ()=>{
      theme.unselectedStreetLight();
      sound.streetS.pause();
      })
  } else {
    street.addEventListener("click", ()=>{
      theme.selectedStreetLight();
      sound.streetSound();
    })
  }
})


bonfire.addEventListener("click", ()=>{
  if(bonfire.classList.contains('bg-light')){
    bonfire.addEventListener("click", ()=>{
    theme.unselectedBonfireLight();
    sound.bonfireS.pause();
    })
  } else if(bonfire.classList.contains('bg-dark')){
    bonfire.addEventListener("click", ()=>{
    theme.unselectedBonfireLight();
    sound.bonfireS.pause();
    })
}
  
  else {
    bonfire.addEventListener("click", ()=>{
      theme.selectedBonfireLight();
      sound.bonfireSound();
    })
  }
}) 


setTime.addEventListener("click", ()=>{
  let newMinutes = control.setTime()

  if(!newMinutes){
    timer.reset();
    control.resetControl();
    return
  }

  timer.formatTime(newMinutes, 0)
  timer.minutesUpdate(newMinutes)

})


/*Time reset and pause */
buttonPause.addEventListener("click", ()=>{
  timer.freezeTime();
})

buttonStop.addEventListener("click", ()=>{
  timer.reset()
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})



/*Increase and decrease time */
increaseTime.addEventListener("click", ()=>{
  timerIncrease()
})

decreaseTime.addEventListener("click",()=>{
  timerDecrease()
})




/* Play and pause events */
buttonPlay.addEventListener("click", ()=>{
  control.play();
  timer.countdown();

})

buttonPause.addEventListener("click", ()=>{
 control.pause();
})



/* Increment and Decrement function */
function timerIncrease(){
  (Number(displayMin.textContent = String(displayMin.textContent +++ 5).padStart(2, "0")))
}

function timerDecrease(){
 let dec = (Number(displayMin.textContent = String(displayMin.textContent - 5).padStart(2,"0")))

if(dec < 0){
  alert("Não pode números a baixo de 0, resetando")
  timer.reset();
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

}
}