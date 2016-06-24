import ThreeSixtyViewer from './three-sixty-viewer';
import THREE from 'threejs360';

export default class Video extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
  }

  createTexture() {
    let texture = new THREE.VideoTexture(this.element);
    //TODO: we can pass all this info through the constructor
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    return texture;
  }
}
