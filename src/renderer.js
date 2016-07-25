import THREE from 'threejs360';

export default class Renderer {
  constructor(options) {
    Object.assign(this, options);
    this.renderer = new THREE.WebGLRenderer({antialias: false});
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));
    this.el = this.renderer.domElement;
  }

  setTexture(texture) {
    this.texture = texture;
    this.mesh = this.createMesh();
  }

  setSize(size) {
    this.height = size.height;
    this.width = size.width;
    this.renderer.setSize(size.width, size.height);
  }

  createMesh() {
    let material = new THREE.MeshBasicMaterial({map: this.texture});
    let geometry = new THREE.SphereGeometry(1, 50, 50);
    geometry.scale(-1, 1, 1);
    let mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);
  }
}
