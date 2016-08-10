import THREE from 'threejs360';
import utils from './utils'

let easeOutBack = k => {
  let s = 1.70158;
  return --k * k * ((s + 1) * k + s) + 1;
};

export default class MouseControls {
  constructor(options) {
    Object.assign(this, options);
    this.el = this.renderer.el;
    this.theta = this.initialYaw * Math.PI / 180;
    this.phi = 0;
    this.velo = utils.isiOS() ? 0.07 : 1.6;
    this.rotateStart = new THREE.Vector2();
    this.rotateEnd = new THREE.Vector2();
    this.rotateDelta = new THREE.Vector2();
    this.orientation = new THREE.Quaternion();
    this.euler = new THREE.Euler();
    this.momentum = false;
    this.isUserInteracting = false;
    this.addDraggableStyle();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchStart = e => this.onMouseDown({clientX: e.touches[0].pageX, clientY: e.touches[0].pageY});
    this.onTouchMove = e => this.onMouseMove({clientX: e.touches[0].pageX, clientY: e.touches[0].pageY});
    this.onTouchEnd = e => this.onMouseUp({clientX: e.touches[0].pageX, clientY: e.touches[0].pageY});
    this.onDeviceMotion = this.onDeviceMotion.bind(this);
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('mouseleave', this.onMouseUp);
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mousedown', this.onMouseDown);
    this.el.addEventListener('mouseup', this.onMouseUp);
    this.el.addEventListener('touchstart', this.onTouchStart);
    this.el.addEventListener('touchmove', this.onTouchMove);
    this.el.addEventListener('touchend', this.onTouchEnd);
    window.addEventListener('devicemotion', this.onDeviceMotion);
  }

  centralize() {
    let endTheta = this.initialYaw * Math.PI / 180;

    let duration = 750;
    let startTheta = this.theta;
    let startPhi = this.phi;
    let start = Date.now();

    let animate = () => {
      let progress = Date.now() - start;
      let elapsed = progress / duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      if (progress >= duration) {
        return cancelAnimationFrame(id);
      }
      this.theta = startTheta  + (endTheta - startTheta) * easeOutBack(elapsed);
      this.phi = startPhi + (0 - startPhi) * easeOutBack(elapsed);
      return requestAnimationFrame(animate);
    };
    let id = animate();
  }

  destroy() {
    this.el.removeEventListener('mouseleave', this.onMouseUp);
    this.el.removeEventListener('mousemove', this.onMouseMove);
    this.el.removeEventListener('mousedown', this.onMouseDown);
    this.el.removeEventListener('mouseup', this.onMouseUp);
    this.el.removeEventListener('touchstart', this.onTouchStart);
    this.el.removeEventListener('touchmove', this.onTouchMove);
    this.el.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('devicemotion', this.onDeviceMotion);
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
    this.phi = this.phi + THREE.Math.degToRad(event.rotationRate.alpha) * this.velo;
    this.theta = this.theta - THREE.Math.degToRad(event.rotationRate.beta) * this.velo * -1;

    this.phi = THREE.Math.clamp(this.phi, -Math.PI / 2, Math.PI / 2);
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
    this.phi = THREE.Math.clamp(this.phi, -Math.PI / 2, Math.PI / 2);
  }

  onMouseDown(event) {
    this.addDraggingStyle();
    this.rotateStart.set(event.clientX, event.clientY);
    this.isUserInteracting = true;
    this.momentum = false;
  }

  inertia() {
    if (!this.momentum) return;
    this.rotateDelta.y *= 0.85;
    this.rotateDelta.x *= 0.85;
    this.theta += 0.005 * this.rotateDelta.x;
    this.phi += 0.005 * this.rotateDelta.y;
    this.phi = THREE.Math.clamp(this.phi, -Math.PI / 2, Math.PI / 2);
  }

  onMouseUp() {
    this.addDraggableStyle();
    this.isUserInteracting = false;
    this.momentum = true;
  }

  update() {
    this.inertia();
    this.euler.set(this.phi, this.theta, 0, 'YXZ');
    this.orientation.setFromEuler(this.euler);
    this.camera.quaternion.copy(this.orientation);
  }
}
