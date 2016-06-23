import ThreeSixtyViewer from './three-sixty-viewer';
import {
  Texture,
  LinearFilter,
  RGBFormat,
} from 'threejs360';

export default class Image extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
  }

  getElement() {
    let image = document.createElement('img');
    image.setAttribute('crossorigin', 'anonymous');
    image.src = this.source;
    return image;
  }
}
