import utils from './utils'
import ThreeSixtyRenderer from './three_sixty_renderer'
import {
    WebGLRenderer,
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
    Object.assign(this, options);
    // provide defaults for this;
    let {height, width, container} = this;
    this.renderer = new ThreeSixtyRenderer({height, width, container});
    this.camera = new PerspectiveCamera(80, height, width, 0.1, 100);
    let dummyCamera = new Object3D();
    dummyCamera.add(this.camera);
    this.camera.target = new Vector3(0, 0, 0);
    this.scene = this.createScene();
    this.createVideoElement(this.createTexture.bind(this));
  }

  render() {
      var loop = () => {
          this.renderer.render(this.scene, this.camera);
          console.log('tick');
          requestAnimationFrame(loop);
      };
      loop();
  }

  createVideoElement(cb) {
      let el = document.createElement('video');
      this.el = el;
      el.src = this.source;
      el.loop = this.loop || false;
      el.setAttribute('crossorigin', 'anonymous');
      el.addEventListener('canplaythrough', () => cb(el));
      el.addEventListener('error', () => this.onError());
  }

  createTexture(el) {
    var texture = new VideoTexture(el);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    this.renderer.setTexture(texture);
  }

  createScene() {
    var scene = new Scene();
    var group = new Object3D();
    group.name = 'photo';
    scene.add(group);
    return scene;
  }

  onError(err) {
      console.log('error loading video');
      console.log(err);
  }
}
