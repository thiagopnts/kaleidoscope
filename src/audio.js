import ThreeSixtyViewer from './three-sixty-viewer';
import THREE from 'threejs360';

export default class Audio extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
    this.driver.addEventListener('playing', this.startVideoLoop);
    this.driver.addEventListener('pause', this.stopVideoLoop);
    this.driver.addEventListener('ended', this.stopVideoLoop);
    this.driver.addEventListener('stalled', this.stopVideoLoop);
    this.driverInitialized = false;
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
    this.source = this.driver.src;
    this.driver.src = '';
    this.driver.load();

    let video = document.createElement('video');
    video.setAttribute('crossorigin', 'anonymous');
    video.src = this.source;
    video.load();
    video.addEventListener('error', this.onError);
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

  startVideoLoop() {
    let videoFps = 1000 / 25;
    if (this.videoLoopId) {
      clearTimeout(this.videoLoopId);
      this.videoLoopId = null;
    }
    let videoLoop = () => {
      this.element.currentTime = this.driver.currentTime;
      this.needsUpdate = true;
      this.videoLoopId = setTimeout(videoLoop, videoFps);
    }

    videoLoop();
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
      let cameraUpdated = this.controls.update();
      this.renderer.render(this.scene, this.camera, this.needsUpdate || cameraUpdated);
      this.needsUpdate = false;
      this.animationFrameId = requestAnimationFrame(loop);
      let shouldInitializeDriver = (this.element.readyState >= this.element.HAVE_FUTURE_DATA) && !this.driverInitialized;
      if (shouldInitializeDriver) {
        this.driver.src = this.source;
        this.driver.load();
        this.onDriverReady && this.onDriverReady();
        this.driverInitialized = true;
      }
    };
    loop();
  }
}
