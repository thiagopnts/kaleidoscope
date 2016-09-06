import Renderer from './renderer'
import utils from './utils'
import Controls from './controls'

import THREE from 'threejs360';

export default class ThreeSixtyViewer {
  constructor(options={}) {
    Object.assign(this, {height: 360, width: 640, initialYaw: 90, verticalPanning: true}, options);
    let {
        height,
        width,
        container,
        containerId,
        initialYaw,
        verticalPanning,
        onDragStart,
        onDragStop,
    } = this;
    this.renderer = new Renderer({height, width});
    this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100);
    this.controls = new Controls({
        camera: this.camera,
        renderer: this.renderer,
        initialYaw,
        verticalPanning,
        onDragStart,
        onDragStop,
    });
    this.update = this.update.bind(this);
    this.stop = this.stop.bind(this);
    this.onError = this.onError.bind(this);
    this.needsUpdate = false;
    this.scene = this.createScene();
    this.scene.add(this.camera);
    this.element = this.getElement();
    this.element.addEventListener('timeupdate', this.update);
    this.element.addEventListener('pause', this.stop);
    this.element.addEventListener('ended', this.stop);
    this.texture = this.createTexture();
    this.renderer.setTexture(this.texture);
    this.scene.getObjectByName('photo').children = [this.renderer.mesh];
    this.target = this.container ? this.container : document.querySelector(this.containerId);
  }

  play() {
    this.element.play && this.element.play();
  }

  pause() {
    this.element.pause && this.element.pause();
  }

  centralize() {
    this.controls.centralize();
  }

  update() {
    this.needsUpdate = true;
  }

  stop() {
    this.needsUpdate = false;
  }

  destroy() {
    this.element.style.display = '';
    cancelAnimationFrame(this.animationFrameId);
    this.element.pause && this.element.pause();
    this.target.removeChild(this.renderer.el);
    this.controls.destroy();
    this.renderer.destroy();
  }

  setSize(size) {
    this.renderer.setSize(size);
  }

  getElement() {
    if (this.source && this.source.tagName)
      return this.source;
    let video = document.createElement('video');
    video.loop = this.loop || false;
    video.muted = this.muted || false;
    video.setAttribute('crossorigin', 'anonymous');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('src', this.source);
    video.autoplay = this.autoplay !== undefined ? this.autoplay : true;
    video.addEventListener('error', this.onError);
    return video;
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
    console.error('error loading', this.source, err);
  }

  render() {
    this.target.appendChild(this.renderer.el);
    this.element.style.display = 'none';

    let loop = () => {
      let cameraUpdated = this.controls.update();
      this.renderer.render(this.scene, this.camera, this.needsUpdate || cameraUpdated);
      this.animationFrameId = requestAnimationFrame(loop);
    };

    loop();
  }
}

