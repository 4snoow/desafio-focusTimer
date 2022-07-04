export default function Sounds(){
  const ambient = new Audio('./sounds/Floresta.wav');
  const rain = new Audio('./sounds/Chuva.wav');
  const street = new Audio('./sounds/Cafeteria.wav');
  const bonfire = new Audio('./sounds/Lareira.wav');
  
  ambient.loop = true;
  rain.loop = true;
  street.loop = true;
  bonfire.loop = true;


  function ambientSound(){
    ambient.play()
  }

  function rainSound(){
    rain.play()
  }

  function streetSound(){
    street.play()
  }

  function bonfireSound(){
    bonfire.play()
  }

  return {
    ambientSound,
    rainSound,
    streetSound,
    bonfireSound,
    ambient,
    rain,
    street,
    bonfire
  }
}