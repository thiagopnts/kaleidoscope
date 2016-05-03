import {
  WebGLRenderer,
  SphereGeometry,
  Matrix4,
  MeshBasicMaterial,
  Mesh,
  PointLight,
  Object3D,
} from 'threejs360'

export default class ThreeSixtyRenderer {
  constructor(options) {
    Object.assign(this, options);
    this.renderer = new WebGLRenderer({antialias: false});
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));
    this.el = this.renderer.domElement;
    document.querySelector(this.container)
      .appendChild(this.el);
  }

  setTexture(texture) {
    this.texture = texture;
    this.mesh = this.createMesh();
  }

  setSize(size) {
    this.renderer.setSize(size.width, size.height);
  }

  createMesh() {
    let scaleX = 1,
        scaleY = 1,
        offsetX = 0,
        offsetY = 0,
        phiStart = 0,
        phiLength = Math.PI * 2,
        thetaStart = 0,
        thetaLength = Math.PI;

    let geometry = new SphereGeometry(1, 48, 48, phiStart, phiLength, thetaStart, thetaLength);
    geometry.applyMatrix(new Matrix4().makeScale(-1, 1, 1));
    var uvs = geometry.faceVertexUvs[0];
      for (var i = 0; i < uvs.length; i++) {
        for (var j = 0; j < 3; j++) {
          uvs[i][j].x *= scaleX;
          uvs[i][j].x += offsetX;
          uvs[i][j].y *= scaleY;
          uvs[i][j].y += offsetY;
        }
      }
    var material = new MeshBasicMaterial({map: this.texture});
    var mesh = new Mesh(geometry, material);
    mesh.renderOrder = -1;
    return mesh;
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);
  }
}
