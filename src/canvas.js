import ThreeSixtyViewer from './three-sixty-viewer';

export default class Canvas extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
    this.context = this.element.getContext('2d');
  }

  play() {
    this.video.play && this.video.play();
  }

  pause() {
    this.video.pause && this.video.pause();
  }

  destroy() {
    this.video.style.display = '';
    super.destroy();
  }

  getElement() {
    this.video = super.getElement();
    this.video.addEventListener('playing', this.startVideoLoop);
    this.video.addEventListener('pause', this.stopVideoLoop);
    this.video.addEventListener('ended', this.stopVideoLoop);
    let canvas = document.createElement('canvas');
    canvas.height = this.video.videoHeight;
    canvas.width = this.video.videoWidth;
    return canvas;
  }

  render() {
    this.target.appendChild(this.renderer.el);
    this.video.style.display = 'none';
    let loop = () => {
      this.animationFrameId = requestAnimationFrame(loop);
      let h = this.video.videoHeight;
      let w = this.video.videoWidth;
      if (this.element.height != h) {
	this.element.height = h;
      }
      if (this.element.width != w) {
	this.element.width = w;
      }
      this.context.clearRect(0, 0, w, h);
      this.context.drawImage(this.video, 0, 0, w, h);
      let cameraUpdated = this.controls.update();
      this.renderer.render(this.scene, this.camera, this.needsUpdate || cameraUpdated);
      this.renderer.mesh.material.map.needsUpdate = true
      this.needsUpdate = false;
    };
    this.startVideoLoop();
    loop();
  }
}
