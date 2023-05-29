export default function () {
  const florest = new Audio('../public/audios/Floresta.wav');
  const rain = new Audio('../public/audios/Chuva.wav');
  const store = new Audio('../public/audios/Cafeteria.wav');
  const fire = new Audio('../public/audios/Lareira.wav');

  function buttonFlorestPlay() {
    florest.play();
    florest.loop = true
   
    const volumeControl = document.querySelector('.volFlorest')
    volumeControl.addEventListener('change', function () {
      florest.volume = Number(volumeControl.value)
    })
  }
  function buttonStorePlay() {
    store.play();
    store.loop = true

    const volumeControl = document.querySelector('.volStore')
    volumeControl.addEventListener('change', function () {
      store.volume = Number(volumeControl.value)
    })
  }
  function buttonRainPlay() {
    rain.play();
    rain.loop = true
    
    const volumeControl = document.querySelector('.volRain')
    volumeControl.addEventListener('change', function () {
      rain.volume = Number(volumeControl.value)
    })
  }
  function buttonFirePlay() {
    fire.play();
    fire.loop = true

    const volumeControl = document.querySelector('.volFire')
    volumeControl.addEventListener('change', function () {
      fire.volume = Number(volumeControl.value)
    })
  }

  function buttonFlorestPause() {
    florest.pause();
  }
  function buttonRainPause() {
    rain.pause();
  }
  function buttonStorePause() {
    store.pause();
  }
  function buttonFirePause() {
    fire.pause();
  }

  return {
    buttonFlorestPlay,
    buttonRainPlay,
    buttonStorePlay,
    buttonFirePlay,
    buttonFlorestPause,
    buttonRainPause,
    buttonStorePause,
    buttonFirePause,
    florest,
    rain,
    store,
    fire,
  };
}
