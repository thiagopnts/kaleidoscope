import ThreeSixtyViewer from './three-sixty-viewer';
import * as THREE from 'three';

export default class Image extends ThreeSixtyViewer {
  constructor(options) {
    super(options);

    this.texture = this.createTexture();
    this.renderer.setTexture(this.texture);
    this.scene.add(this.renderer.mesh);
  }

  getElement() {
    if (this.source && this.source.tagName)
      return this.source;
    let image = document.createElement('img');
    image.setAttribute('crossorigin', 'anonymous');
    image.src = this.source;
    return image;
  }

  createTexture() {
    let texture = new THREE.Texture(this.element);
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
      let cameraUpdated = this.controls.update();
      this.renderer.render(this.scene, this.camera, cameraUpdated);
    }

    let loop = () => {
      this.videoLoopId = setInterval(() => {
        this.animationFrameId = requestAnimationFrame(draw);
      }, fps);
    };

    loop();
  }
}
