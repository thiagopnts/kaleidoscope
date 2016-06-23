import {
  Math as TMath,
  Vector2,
  Vector3,
  Quaternion,
  Euler,
} from 'threejs360'
import utils from './utils'

export default class MouseControls {
  constructor(camera, renderer) {
    this.camera = camera;
    this.renderer = renderer;
    this.el = renderer.el;
    this.phi = 0;
    this.theta = 0;
    this.velo = utils.isiPhone() ? 0.07 : 1.6;
    this.rotateStart = new Vector2();
    this.rotateEnd = new Vector2();
    this.rotateDelta = new Vector2();
    this.orientation = new Quaternion();
    this.euler = new Euler();
    this.isUserInteracting = false;
    this.addDraggableStyle();
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.el.addEventListener('mousedown', (e) => this.onMouseDown(e));
    this.el.addEventListener('mouseup', (e) => this.onMouseUp(e));
    this.el.addEventListener('touchstart', (e) => this.onMouseDown({clientX: e.touches[0].pageX, clientY: e.touches[0].pageY}));
    this.el.addEventListener('touchmove', (e) => this.onMouseMove({clientX: e.touches[0].pageX, clientY: e.touches[0].pageY}));
    this.el.addEventListener('touchend', (e) => this.onMouseUp());
    window.addEventListener('devicemotion', (e) => this.onDeviceMotion(e));
  }


  getCurrentSizeStyle() {
    return `height: ${this.el.style.height}; width: ${this.el.style.width};`;
  }

  addDraggingStyle() {
    this.el.setAttribute('style', `${this.getCurrentSizeStyle()} cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing;`);
  }

  addDraggableStyle() {
    this.el.setAttribute('style', `${this.getCurrentSizeStyle()} cursor: -webkit-grab; cursor: -moz-grab; cursor: grab;`);
  }

  onDeviceMotion(event) {
    this.phi = this.phi + TMath.degToRad(event.rotationRate.alpha) * this.velo;
    this.theta = this.theta - TMath.degToRad(event.rotationRate.beta) * this.velo * -1;

    this.phi = TMath.clamp(this.phi, -Math.PI / 2, Math.PI / 2);
  }

  onMouseMove(event) {
    if (!this.isUserInteracting) {
        return;
    }
    this.rotateEnd.set(event.clientX, event.clientY);

    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
    this.rotateStart.copy(this.rotateEnd);

    this.phi += 2 * Math.PI * this.rotateDelta.y / this.renderer.height * 0.3;
    this.theta += 2 * Math.PI * this.rotateDelta.x / this.renderer.width * 0.5;

    // Prevent looking too far up or down.
    this.phi = TMath.clamp(this.phi, -Math.PI / 2, Math.PI / 2);
  }

  onMouseDown(event) {
    this.addDraggingStyle();
    this.rotateStart.set(event.clientX, event.clientY);
    this.isUserInteracting = true;
  }

  onMouseUp() {
    this.addDraggableStyle();
    this.isUserInteracting = false;
  }

  update() {
    this.euler.set(this.phi, this.theta, 0, 'YXZ');
    this.orientation.setFromEuler(this.euler);
    this.camera.quaternion.copy(this.orientation);
  }
}
