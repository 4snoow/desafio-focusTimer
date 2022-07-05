export default function Sounds(){
  const ambientS = new Audio('./sounds/Floresta.wav');
  const rainS = new Audio('./sounds/Chuva.wav');
  const streetS= new Audio('./sounds/Cafeteria.wav');
  const bonfireS = new Audio('./sounds/Lareira.wav');
  const timeEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  
  ambientS.loop = true;
  rainS.loop = true;
  streetS.loop = true;
  bonfireS.loop = true;


  function ambientSound(){
    ambientS.play()
  }
 

  function rainSound(){
    rainS.play()
  }
  


  function streetSound(){
    streetS.play()
  }
 

  function bonfireSound(){
    bonfireS.play()
  }

  function timerEnds(){
    timeEnd.play()
  }

  function pauseAllOnThemeChange(){
    bonfireS.pause()
    streetS.pause()
    rainS.pause()
    ambientS.pause()
  }
  

  return {
    ambientSound,
    rainSound,
    streetSound,
    bonfireSound,
    ambientS,
    rainS,
    streetS,
    bonfireS,
    pauseAllOnThemeChange,
    timerEnds
  }
}