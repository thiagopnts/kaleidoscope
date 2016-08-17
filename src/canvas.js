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
    let canvas = document.createElement('canvas');
    canvas.height = this.height;
    canvas.width = this.width;
    return canvas;
  }

  render() {
    this.target.appendChild(this.renderer.el);
    this.video.style.display = 'none';
    let loop = () => {
      this.context.clearRect(0, 0, this.width, this.height);
      this.context.drawImage(this.video, 0, 0, this.width, this.height);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.renderer.mesh.material.map.needsUpdate = true
      return requestAnimationFrame(loop);
    };
    this.animationFrameId = loop();
  }
}
