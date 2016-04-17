import {PerspectiveCamera, Object3D} from 'threejs360'

export default class Camera {
  constructor(options) {
    Object.assign(this, options)
    this.perspectiveCamera = new PerspectiveCamera(80, this.height, this.width);
    var dummy = new Object3D();
    dummy.add(this.perspectiveCamera);
  }
}
