import ThreeSixtyViewer from './three-sixty-viewer';
import {
  VideoTexture,
  LinearFilter,
  RGBFormat,
} from 'threejs360';

export default class Audio extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
  }

  play() {
    this.driver.play();
  }

  pause() {
    this.driver.pause();
  }

  getElement() {
    this.driver = document.createElement('audio');
    this.driver.src = this.source;
    this.driver.loop = this.loop || false;
    this.driver.muted = this.muted || false;
    this.driver.setAttribute('crossorigin', 'anonymous');
    this.driver.autoplay = this.autoplay || true;
    return super.getElement();
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

  render() {
    let loop = () => {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.element.currentTime = this.driver.currentTime;
      requestAnimationFrame(loop);
    };
    loop();
  }
}
