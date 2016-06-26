import Renderer from './renderer'
import utils from './utils'
import Controls from './controls'

import THREE from 'threejs360';

export default class ThreeSixtyViewer {
  constructor(options={}) {
    Object.assign(this, {height: 360, width: 640}, options);
    let {height, width, container, containerId} = this;
    this.renderer = new Renderer({height, width, container, containerId});
    this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100);
    this.controls = new Controls(this.camera, this.renderer);
    this.scene = this.createScene();
    this.scene.add(this.camera);
    this.element = this.getElement();
    this.texture = this.createTexture();
    this.renderer.setTexture(this.texture);
    this.scene.getObjectByName('photo').children = [this.renderer.mesh];
  }

  play() {
    this.element.play && this.element.play();
  }

  pause() {
    this.element.pause && this.element.pause();
  }

  destroy() {
    //TODO: unbind events
    this.video.style.display = '';
  }

  setSize(size) {
    this.renderer.setSize(size);
  }

  getElement() {
    if (this.video) {
      return this.video;
    } else {
      let video = document.createElement('video');
      video.src = this.source;
      video.loop = this.loop || false;
      video.muted = this.muted || false;
      video.setAttribute('crossorigin', 'anonymous');
      video.setAttribute('webkit-playsinline', '');
      video.autoplay = this.autoplay || true;
      video.addEventListener('error', (err) => this.onError(err));
      return video;
    }
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

  createScene() {
    let scene = new THREE.Scene();
    let group = new THREE.Object3D();
    group.name = 'photo';
    scene.add(group);
    return scene;
  }

  onError(err) {
    console.log('error', err);
  }

  render() {
    let loop = () => {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(loop);
    };
    loop();
  }
}

