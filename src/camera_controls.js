import {
  Math as TMath,
  Vector2,
  Quaternion,
  Euler,
} from 'threejs360'

export default class CameraControls {
  constructor(camera, element) {
    this.camera = camera;
    this.el = element;
    this.phi = 0;
    this.theta = 0;
    this.rotateStart = new Vector2();
    this.rotateEnd = new Vector2();
    this.rotateDelta = new Vector2();
    this.orientation = new Quaternion();
    this.euler = new Euler();
    this.isUserInteracting = false;
    this.draggingStyle = `${this.el.style.cssText} cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing;`;
    this.draggableStyle = `${this.el.style.cssText} cursor: -webkit-grab; cursor: -moz-grab; cursor: grab;`;
    this.el.style.cssText = this.draggableStyle;
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.el.addEventListener('mousedown', (e) => this.onMouseDown(e));
    this.el.addEventListener('mouseup', (e) => this.onMouseUp(e));
  }

  onMouseMove(event) {
    if (!this.isUserInteracting) {
        return;
    }
    this.rotateEnd.set(event.clientX, event.clientY);

    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
    this.rotateStart.copy(this.rotateEnd);

    this.phi += 2 * Math.PI * this.rotateDelta.y / this.el.clientHeight * 0.3;
    this.theta += 2 * Math.PI * this.rotateDelta.x / this.el.clientWidth * 0.5;

    // Prevent looking too far up or down.
    this.phi = TMath.clamp(this.phi, -Math.PI / 2, Math.PI / 2);
  }

  onMouseDown(event) {
    this.el.style.cssText = this.draggingStyle;
    this.rotateStart.set(event.clientX, event.clientY);
    this.isUserInteracting = true;
  }

  onMouseUp() {
    this.el.style.cssText = this.draggableStyle;
    this.isUserInteracting = false;
  }

  update() {
    this.euler.set(this.phi, this.theta, 0, 'YXZ');
    this.orientation.setFromEuler(this.euler);
    this.camera.quaternion.copy(this.orientation);
  }
}
