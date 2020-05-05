import ThreeSixtyViewer from './three-sixty-viewer';
import * as THREE from 'three';

export default class Canvas extends ThreeSixtyViewer {
  constructor(options) {
    super(options);

    this.canvas = null;
  }

  createTexture() {
    this.canvas = document.createElement('canvas');

    this.context = this.canvas.getContext('2d');

    let texture = new THREE.CanvasTexture(this.canvas);
    //TODO: we can pass all this info through the constructor
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    return texture;
  }

  render() {
    this.target.appendChild(this.renderer.el);
    this.element.style.display = 'none';

    let fps = 1000 / 30;

    let draw = () => {
      if(this.needsUpdate == true) {
        if (this.element.width != this.videoWidth) {
          this.videoWidth = this.element.videoWidth;
        }
        if (this.element.height != this.videoHeight) {
          this.videoHeight = this.element.videoHeight;
        }

        this.context.drawImage(this.element, 0, 0, this.videoWidth, this.videoHeight);
        this.texture.needsUpdate = true;
      }

      let cameraUpdated = this.controls.update();
      this.renderer.render(this.scene, this.camera, this.needsUpdate || cameraUpdated);
    }

    let loop = () => {
      this.videoLoopId = setInterval(() => {
        this.animationFrameId = requestAnimationFrame(draw);
      }, fps);
    };

    let waitLoop = () => {
      if(this.canvas && this.element.videoWidth != 0 && this.element.videoHeight != 0) {
        this.videoWidth = this.element.videoWidth;
        this.videoHeight = this.element.videoHeight;

        this.canvas.width = this.videoWidth;
        this.canvas.height = this.videoHeight;

        loop();

        return;
      }

      setTimeout(waitLoop, 100);
    }

    waitLoop();
  }
}
