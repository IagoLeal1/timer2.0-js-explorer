import {
  buttonBackwards,
  buttonDarkMode,
  buttonFire,
  buttonFlorest,
  buttonForwards,
  buttonLightMode,
  buttonPause,
  buttonPlay,
  buttonRain,
  buttonStop,
  buttonStopSound,
  buttonStore,
  bodyMode,
} from './elements.js';

export default function ({ timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    timer.countdown();
    buttonPause.classList.remove('hide');
    buttonPlay.classList.add('hide');
  });

  buttonPause.addEventListener('click', function () {
    timer.hold();
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  });

  buttonStop.addEventListener('click', function () {
    timer.resetTimer();
  });

  buttonForwards.addEventListener('click', function () {
    timer.forwards();
  });

  buttonBackwards.addEventListener('click', function () {
    timer.backwards();
  });

  buttonFlorest.addEventListener('click', function () {
    sound.buttonFlorestPlay();
    sound.buttonRainPause();
    sound.buttonStorePause();
    sound.buttonFirePause();

    buttonStopSound.classList.remove('active');

    buttonFlorest.classList.add('active');
    buttonRain.classList.remove('active');
    buttonStore.classList.remove('active');
    buttonFire.classList.remove('active');

  });
  buttonRain.addEventListener('click', function () {
    sound.buttonRainPlay();
    sound.buttonFlorestPause();
    sound.buttonFirePause();
    sound.buttonStorePause();

    buttonStopSound.classList.remove('active');

    buttonRain.classList.add('active');
    buttonFlorest.classList.remove('active');
    buttonStore.classList.remove('active');
    buttonFire.classList.remove('active');
  });
  buttonStore.addEventListener('click', function () {
    sound.buttonStorePlay();
    sound.buttonFlorestPause();
    sound.buttonFirePause();
    sound.buttonRainPause();

    buttonStopSound.classList.remove('active');

    buttonStore.classList.add('active');
    buttonRain.classList.remove('active');
    buttonFlorest.classList.remove('active');
    buttonFire.classList.remove('active');
  });
  buttonFire.addEventListener('click', function () {
    sound.buttonFirePlay();
    sound.buttonFlorestPause();
    sound.buttonRainPause();
    sound.buttonStorePause();

    buttonStopSound.classList.remove('active');

    buttonFire.classList.add('active');
    buttonRain.classList.remove('active');
    buttonStore.classList.remove('active');
    buttonFlorest.classList.remove('active');
  });

  buttonStopSound.addEventListener('click', function () {
    sound.buttonFirePause();
    sound.buttonFlorestPause();
    sound.buttonRainPause();
    sound.buttonStorePause();

    buttonFire.classList.remove('active');
    buttonRain.classList.remove('active');
    buttonStore.classList.remove('active');
    buttonFlorest.classList.remove('active');

    buttonStopSound.classList.add('active');
  });

  buttonLightMode.addEventListener('click', function () {
    bodyMode.classList.add('light');
    bodyMode.classList.remove('dark');
    buttonDarkMode.classList.remove('hide');
    buttonLightMode.classList.add('hide');
  });
  buttonDarkMode.addEventListener('click', function () {
    bodyMode.classList.remove('light');
    bodyMode.classList.add('dark');
    buttonLightMode.classList.remove('hide');
    buttonDarkMode.classList.add('hide');
  });
}
