import {
  Math as TMath,
  Vector2,
  Vector3,
  Quaternion,
  Euler,
} from 'threejs360'

export default class DeviceOrientationControls {
  constructor(camera) {
    this.camera = camera;
    this.euler = new Euler();
    this.orientation = new Quaternion();
    this.centralizer = new Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
    window.addEventListener('deviceorientation', (e) => this.onDeviceMotionChange(e));
  }

  onDeviceMotionChange(deviceMotion) {
    this.alpha = TMath.degToRad(deviceMotion.alpha);
    this.beta = TMath.degToRad(deviceMotion.beta);
    this.gamma = TMath.degToRad(deviceMotion.gamma);
  }
  update() {
    this.euler.set(this.beta, this.alpha, -this.gamma, 'YXZ');
    this.orientation.setFromEuler(this.euler);
    this.camera.quaternion.copy(this.orientation);
    this.camera.quaternion.multiply(this.centralizer);
  }
}
