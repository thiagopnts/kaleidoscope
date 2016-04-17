import utils from './utils'
import ThreeSixtyRenderer from './three_sixty_renderer'
import {
    WebGLRenderer,
    VideoTexture,
    LinearFilter,
    RGBFormat,
} from 'threejs360'

export class ThreeSixtyVideoViewer {
  constructor(options={}) {
    Object.assign(this, options);
    // provide defaults for this;
    let {height, width} = this;
    this.renderer = new ThreeSixtyRenderer({height, width});
    var element = document.getElementById(this.container);

  }

  createTexture() {
      el = document.createElement('video');
      el.src = this.src;
      el.loop = this.loop || false;
      el.setAttribute('crossorigin', 'anonymous');
      el.addEventListener('canplaythrough', () => this.onLoad());
      el.addEventListener('error', () => this.onError());

      this.el = el;
  }

  onLoad() {
    var texture = new VideoTexture(this.el);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    this.renderer.setTexture(texture)
  }

  onError(err) {
      console.log('error loading video');
      console.log(err);
  }
}
