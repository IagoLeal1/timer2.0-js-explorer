export default function () {
  const florest = new Audio('../public/audios/Floresta.wav');
  const rain = new Audio('../public/audios/Chuva.wav');
  const store = new Audio('../public/audios/Cafeteria.wav');
  const fire = new Audio('../public/audios/Lareira.wav');

  function buttonFlorestPlay() {
    florest.play();
  }
  function buttonStorePlay() {
    store.play();
  }
  function buttonRainPlay() {
    rain.play();
  }
  function buttonFirePlay() {
    fire.play();
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
  };
}
