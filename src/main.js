import utils from './utils'

import Video from './video'
import Image from './image'
import Canvas from './canvas'
import Audio from './audio'

let video = (options) => {
  if (utils.shouldUseAudioDriver()) {
    return new Audio(options);
  }
  if (utils.shouldUseCanvasInBetween()) {
    return new Canvas(options);
  }
  return new Video(options);
}

export {
  video as Video,
  Image,
};
