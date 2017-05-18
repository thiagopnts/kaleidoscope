import THREE from 'threejs360';
import utils from './utils'

let easeOutBack = k => {
  let s = 1.70158;
  return --k * k * ((s + 1) * k + s) + 1;
};

export default class Controls {
  constructor(options) {
    Object.assign(this, options);
    this.el = this.renderer.el;
    this.theta = this.initialYaw * Math.PI / 180;
    this.phi = 0;
    this.velo = utils.isiOS() ? 0.02 : 1.6;
    this.rotateStart = new THREE.Vector2();
    this.rotateEnd = new THREE.Vector2();
    this.rotateDelta = new THREE.Vector2();
    this.orientation = new THREE.Quaternion();
    this.euler = new THREE.Euler();
    this.momentum = false;
    this.isUserInteracting = false;
    this.addDraggableStyle();
    this.onGrabMove = this.onGrabMove.bind(this);
    this.onGrabDown = this.onGrabDown.bind(this);
    this.onGrabUp = this.onGrabUp.bind(this);
    this.onGyroActivity = this.onGyroActivity.bind(this);
    this.onTouchStart = e => this.onGrabDown({
      clientX: e.touches[0].pageX,
      clientY: e.touches[0].pageY,
      isTouch: true
    });
    this.onTouchMove = e => this.onGrabMove({
      clientX: e.touches[0].pageX,
      clientY: e.touches[0].pageY,
      isTouch: true
    });
    this.onTouchEnd = _ => this.onGrabUp();
    this.onDeviceMotion = this.onDeviceMotion.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('mouseleave', this.onGrabUp);
    this.el.addEventListener('mousemove', this.onGrabMove);
    this.el.addEventListener('mousedown', this.onGrabDown);
    this.el.addEventListener('mouseup', this.onGrabUp);
    this.el.addEventListener('touchstart', this.onTouchStart);
    this.el.addEventListener('touchmove', this.onTouchMove);
    this.el.addEventListener('touchend', this.onTouchEnd);
    if (!this.isInIframe())
      window.addEventListener('devicemotion', this.onDeviceMotion);
    window.addEventListener('message', this.onMessage);
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

  isInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  destroy() {
    this.el.removeEventListener('mouseleave', this.onGrabUp);
    this.el.removeEventListener('mousemove', this.onGrabMove);
    this.el.removeEventListener('mousedown', this.onGrabDown);
    this.el.removeEventListener('mouseup', this.onGrabUp);
    this.el.removeEventListener('touchstart', this.onTouchStart);
    this.el.removeEventListener('touchmove', this.onTouchMove);
    this.el.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('devicemotion', this.onDeviceMotion);
    window.removeEventListener('message', this.onMessage);
  }

  getCurrentStyle() {
    return `height: ${parseInt(this.el.style.height, 10)}px; width: ${parseInt(this.el.style.width, 10)}px; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: rgba(0,0,0,0);`;
  }

  addDraggingStyle() {
    this.el.setAttribute('style', `${this.getCurrentStyle()} cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing;`);
  }

  addDraggableStyle() {
    this.el.setAttribute('style', `${this.getCurrentStyle()} cursor: -webkit-grab; cursor: -moz-grab; cursor: grab;`);
  }

  onMessage(event) {
    let {orientation, portrait, rotationRate} = event.data;
    if (!rotationRate) return;
    this.onDeviceMotion({orientation, portrait, rotationRate});
  }

  onDeviceMotion(event) {
    let portrait = event.portrait !== undefined  ? event.portrait : window.matchMedia("(orientation: portrait)").matches;
    let orientation;
    if (event.orientation !== undefined) {
      orientation = event.orientation;
    } else if (window.orientation !== undefined) {
      orientation = window.orientation;
    } else {
      orientation = -90;
    }
    let alpha = THREE.Math.degToRad(event.rotationRate.alpha);
    let beta = THREE.Math.degToRad(event.rotationRate.beta);
    if(Math.abs(alpha) > 0 || Math.abs(beta) > 0) {
      this.onGyroActivity();
    }
    if (portrait) {
      this.phi = this.verticalPanning ? this.phi + alpha * this.velo : this.phi;
      this.theta = this.theta - beta * this.velo * -1;
    } else {
      if (this.verticalPanning) {
        this.phi = orientation === -90 ? this.phi + beta * this.velo : this.phi - beta * this.velo;
      }
      this.theta = orientation === -90 ? this.theta - alpha * this.velo : this.theta + alpha * this.velo;
    }

    this.adjustPhi();
  }

  onGrabMove(event) {
    if (!this.isUserInteracting) {
      return;
    }
    this.rotateEnd.set(
      event.clientX,
      (event.isTouch && this.doNotControlGazeWithVerticalTouch) ?
        this.rotateStart.y :
        event.clientY
      );

    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
    this.rotateStart.copy(this.rotateEnd);

    this.phi = this.verticalPanning ? this.phi + 2 * Math.PI * this.rotateDelta.y / this.renderer.height * 0.3 : this.phi;
    this.theta += 2 * Math.PI * this.rotateDelta.x / this.renderer.width * 0.5;
    this.adjustPhi();
  }

  adjustPhi() {
    // Prevent looking too far up or down.
    this.phi = THREE.Math.clamp(this.phi, -Math.PI / 1.95, Math.PI / 1.95);
  }

  onGrabDown(event) {
    this.addDraggingStyle();
    this.rotateStart.set(event.clientX, event.clientY);
    this.isUserInteracting = true;
    this.momentum = false;
    this.onDragStart && this.onDragStart();
  }

  inertia() {
    if (!this.momentum) return;
    this.rotateDelta.y *= 0.85;
    this.rotateDelta.x *= 0.85;
    this.theta += 0.005 * this.rotateDelta.x;
    this.phi = this.verticalPanning ? this.phi + 0.005 * this.rotateDelta.y : this.phi;
    this.adjustPhi();
  }

  onGrabUp() {
    this.isUserInteracting && this.onDragStop && this.onDragStop();
    this.addDraggableStyle();
    this.isUserInteracting = false;
    this.momentum = true;
  }

  update() {
    if ((this.phi === this.previousPhi) && (this.theta === this.previousTheta))
      return false;
    this.previousPhi = this.phi;
    this.previousTheta = this.theta;
    this.euler.set(this.phi, this.theta, 0, 'YXZ');
    this.orientation.setFromEuler(this.euler);
    this.camera.quaternion.copy(this.orientation);
    this.inertia();
    return true;
  }
}
