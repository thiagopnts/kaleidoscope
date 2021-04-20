import Renderer from './renderer'
import utils from './utils'
import Controls from './controls'

import * as THREE from 'three';

let consol = console;

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
    this.camera = new THREE.PerspectiveCamera(80, this.width / this.height, 0.1, 100);
    this.controls = new Controls({
        camera: this.camera,
        renderer: this.renderer,
        initialYaw,
        verticalPanning,
        onDragStart,
        onDragStop,
    });
    this.stopVideoLoop = this.stopVideoLoop.bind(this);
    this.onError = this.onError.bind(this);
    this.startVideoLoop = this.startVideoLoop.bind(this);
    this.needsUpdate = false;
    this.scene = this.createScene();
    this.element = this.getElement();
    this.elementReady = false;
    this.element.addEventListener('playing', this.startVideoLoop);
    this.element.addEventListener('pause', this.stopVideoLoop);
    this.element.addEventListener('ended', this.stopVideoLoop);
    this.element.addEventListener('loadedmetadata', this.initAfterLoadedMetadata.bind(this))
    this.target = this.container ? this.container : document.querySelector(this.containerId);
  }

  initAfterLoadedMetadata() {
    if (this.element.readyState >= 1 && !this.elementReady) {
      this.texture = this.createTexture();
      this.renderer.setTexture(this.texture);
      this.scene.add(this.renderer.mesh);
      this.elementReady = true;
    }
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

  stopVideoLoop() {
    this.needsUpdate = false;
  }

  destroy() {
    this.element.style.display = '';
    clearInterval(this.videoLoopId);
    cancelAnimationFrame(this.animationFrameId);
    this.element.pause && this.element.pause();
    this.target.removeChild(this.renderer.el);
    this.controls.destroy();
    this.renderer.destroy();
  }

  setSize({height, width}) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize({height, width});
  }

  getElement() {
    if (this.source && this.source.tagName) {
      return this.source;
    }
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
    let texture = new THREE.VideoTexture(this.element);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    return texture;
  }

  createScene() {
    let scene = new THREE.Scene();
    return scene;
  }

  onError(err) {
    consol.error('error loading', this.source, err);
  }

  startVideoLoop() {
    this.needsUpdate = true;
  }

  render() {
    this.target.appendChild(this.renderer.el);
    this.element.style.display = 'none';

    let fps = 1000 / 30;

    let draw = () => {
      let cameraUpdated = this.controls.update();
      this.renderer.render(this.scene, this.camera, this.needsUpdate || cameraUpdated);
    }

    let loop = () => {
      this.videoLoopId = setInterval(() => {
        this.animationFrameId = requestAnimationFrame(draw);
      }, fps);
    };

    let waitLoop = () => {
      if (this.element.videoWidth != 0 && this.element.videoHeight != 0) {
        loop();
        return;
      }

      setTimeout(waitLoop, 100);
    }

    waitLoop();
  }
}

