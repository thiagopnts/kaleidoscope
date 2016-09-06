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
    if (this.source && this.source.tagName) {
      this.driver = this.source;
    } else {
      this.driver = document.createElement('audio');
      this.driver.src = this.source;
      this.driver.loop = this.loop || false;
      this.driver.muted = this.muted || false;
      this.driver.setAttribute('crossorigin', 'anonymous');
      this.driver.autoplay = this.autoplay || true;
    }
    let video = document.createElement('video');
    video.src = this.driver.src;
    video.setAttribute('crossorigin', 'anonymous');
    video.addEventListener('error', (err) => this.onError(err));
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

  destroy() {
    this.driver.style.display = '';
    super.destroy();
  }

  render() {
    this.target.appendChild(this.renderer.el);
    this.element.style.display = 'none';
    this.driver.style.display = 'none';
    let loop = () => {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      if (this.element.readyState === 4) {
        this.element.currentTime = this.driver.currentTime;
      }
      this.animationFrameId = requestAnimationFrame(loop);
    };
    loop();
  }
}
