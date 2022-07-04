export default function themeSwap({
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
}){
  
  function swapWhite(){
    whiteTheme.classList.add('hide');
    darkTheme.classList.remove('hide');

    
  }

  function swapDark(){
    whiteTheme.classList.remove('hide');
    darkTheme.classList.add('hide');

    
  }

  function dark(){
    body.classList.remove('dark')
    box.classList.remove('dark')
    main.classList.remove('dark')
    displayMin.classList.remove('dark')
    displaySec.classList.remove('dark')
    separator.classList.remove('dark')
  }
  
  
  function white(){
    body.classList.add('dark')
    box.classList.add('dark')
    main.classList.add('dark')
    displayMin.classList.add('dark')
    displaySec.classList.add('dark')
    separator.classList.add('dark')
  }



  function selectedAmbientLight(){
    ambient.classList.add('bg-light')
    
  }
  function unselectedAmbientLight(){
    ambient.classList.remove('bg-light')
  }




  function selectedRainLight(){
    
    rain.classList.add('bg-light')
    
  }

  function unselectedRainLight(){
    rain.classList.remove('bg-light')
  }



  function selectedStreetLight(){
    
    street.classList.add('bg-light')
    
  }

  function unselectedStreetLight(){
    street.classList.remove('bg-light')
  }
  

  function selectedBonfireLight(){
    bonfire.classList.add('bg-light')
  }

  function unselectedBonfireLight(){
    bonfire.classList.remove('bg-light')
  }

  
return{
  swapWhite,
  swapDark,
  dark,
  white,
  selectedAmbientLight,
  selectedRainLight,
  selectedStreetLight,
  selectedBonfireLight,
  unselectedAmbientLight,
  unselectedRainLight,
  unselectedStreetLight,
  unselectedBonfireLight

}
}

