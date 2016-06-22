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

  createTexture() {
    let texture = new Texture(this.element);
    //TODO: we can pass all this info through the constructor
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    return texture;
  }
}
