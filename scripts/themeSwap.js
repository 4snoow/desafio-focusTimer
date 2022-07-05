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
    ambient.classList.remove('bg-dark')
    rain.classList.remove('bg-dark')
    street.classList.remove('bg-dark')
    bonfire.classList.remove('bg-dark')
  }
  
  
  function white(){
    body.classList.add('dark')
    box.classList.add('dark')
    main.classList.add('dark')
    displayMin.classList.add('dark')
    displaySec.classList.add('dark')
    separator.classList.add('dark')
    ambient.classList.remove('bg-light')
    rain.classList.remove('bg-light')
    street.classList.remove('bg-light')
    bonfire.classList.remove('bg-light')
    
  }



  function selectedAmbientLight(){
  
    if(box.classList.contains('dark')){
      ambient.classList.add('bg-dark')
    } else{
      ambient.classList.add('bg-light')
    }

  }
  function unselectedAmbientLight(){
    if(box.classList.contains('dark')){
      ambient.classList.remove('bg-dark')
    } else{
      ambient.classList.remove('bg-light')
    }
  }




  function selectedRainLight(){
    
    if(box.classList.contains('dark')){
      rain.classList.add('bg-dark')
    } else{
      rain.classList.add('bg-light')
    }
  }

  function unselectedRainLight(){
    if(box.classList.contains('dark')){
      rain.classList.remove('bg-dark')
    } else{
      rain.classList.remove('bg-light')
    }
  }



  function selectedStreetLight(){
    if(box.classList.contains('dark')){
      street.classList.add('bg-dark')
    } else{
      street.classList.add('bg-light')
    }
    
  }

  function unselectedStreetLight(){
    if(box.classList.contains('dark')){
      street.classList.remove('bg-dark')
    } else{
      street.classList.remove('bg-light')
    }
  }
  

  function selectedBonfireLight(){
    if(box.classList.contains('dark')){
      bonfire.classList.add('bg-dark')
    } else{
      bonfire.classList.add('bg-light')
    }
  }

  function unselectedBonfireLight(){
    if(box.classList.contains('dark')){
      bonfire.classList.remove('bg-dark')
    } else{
      bonfire.classList.remove('bg-light')
    }
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
  unselectedBonfireLight,

}
}

