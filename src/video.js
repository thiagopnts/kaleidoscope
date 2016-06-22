import ThreeSixtyViewer from './three-sixty-viewer';
import {
  VideoTexture,
  LinearFilter,
  RGBFormat,
} from 'threejs360';

export default class Video extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
  }

  createTexture() {
    let texture = new VideoTexture(this.element);
    //TODO: we can pass all this info through the constructor
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    return texture;
  }
}
