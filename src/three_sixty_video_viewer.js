import utils from './utils'
import ThreeSixtyRenderer from './three_sixty_renderer'
import DeviceOrientationControls from './device_orientation_controls'
import MouseControls from './mouse_controls'
import {
  VideoTexture,
  LinearFilter,
  Scene,
  Object3D,
  Vector3,
  PerspectiveCamera,
  RGBFormat,
} from 'threejs360'

export class ThreeSixtyVideoViewer {
  constructor(options={}) {
    //TODO: provide defaults for this;
    Object.assign(this, options);
    let {height, width, container} = this;
    this.renderer = new ThreeSixtyRenderer({height, width, container});
    this.camera = new PerspectiveCamera(80, height / width, 0.1, 100);
    this.scene = this.createScene();
    this.scene.add(this.camera);
    this.mouseControls = new MouseControls(this.camera, this.renderer.renderer.domElement);
    this.motionControls = new DeviceOrientationControls(this.camera);
    this.createTexture();
  }

  createTexture() {
    if (this.video) {
      this._createVideoTexture(this.video)
    } else {
      this._createVideoElement((el) => this._createVideoTexture(el));
    }
  }

  setSize(size) {
    this.renderer.setSize(size);
  }

  render() {
    var loop = () => {
      this.mouseControls.update();
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(loop);
    };
    loop();
  }

  _createVideoElement(cb) {
    let el = document.createElement('video');
    el.src = this.source;
    el.loop = this.loop || false;
    el.setAttribute('crossorigin', 'anonymous');
    el.autoplay = "true";
    el.addEventListener('canplaythrough', () => cb(el));
    el.addEventListener('error', () => this.onError());
  }

  _createVideoTexture(el) {
    var texture = new VideoTexture(el);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    this.renderer.setTexture(texture);
    this.scene.getObjectByName('photo').children = [this.renderer.mesh];
    this.render();
  }

  createScene() {
    var scene = new Scene();
    var group = new Object3D();
    group.name = 'photo';
    scene.add(group);
    return scene;
  }

  onError() {
    console.log('error loading video');
  }
}
