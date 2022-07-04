export default function Controls({ buttonPlay, buttonPause }) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function resetControl() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function setTime() {
    let newMinutes = Number(prompt('Informe um tempo para começar!!'))

    if (!newMinutes) {
      return
    }

    return newMinutes
  }

  return {
    play,
    pause,
    setTime,
    resetControl
  }
}
