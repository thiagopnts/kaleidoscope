import ThreeSixtyViewer from './three-sixty-viewer';

export default class Canvas extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
    this.context = this.element.getContext('2d');
  }

  getElement() {
    this.video = super.getElement();
    let canvas = document.createElement('canvas');
    canvas.height = this.height;
    canvas.width = this.width;
    return canvas;
  }

  render() {
    let loop = () => {
      this.context.clearRect(0, 0, this.width, this.height);
      this.context.drawImage(this.video, 0, 0, this.width, this.height);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.renderer.mesh.material.map.needsUpdate = true
      requestAnimationFrame(loop);
    };
    loop();
  }
}
