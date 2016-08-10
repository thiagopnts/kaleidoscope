import ThreeSixtyViewer from './three-sixty-viewer';
import THREE from 'threejs360';

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
    let video = super.getElement();
    video.load();
    return video;
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
