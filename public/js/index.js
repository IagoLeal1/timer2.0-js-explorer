import Timer from "./timer.js"
import Sound from './sounds.js';
import Events from './events.js'
import {
  minutesDisplay,
  secondsDisplay,
} from './elements.js'

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const sound = Sound()

Events({timer, sound})

