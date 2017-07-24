import {WebGLRenderer, MeshBasicMaterial, Mesh, SphereGeometry} from 'three';

export default class Renderer {
  constructor(options) {
    Object.assign(this, options);
    this.renderer = new WebGLRenderer();
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.el = this.renderer.domElement;
  }

  setTexture(texture) {
    this.texture = texture;
    this.mesh = this.createMesh();
  }

  setSize({height, width}) {
    this.height = height;
    this.width = width;
    this.renderer.setSize(width, height);
  }

  createMesh() {
    this.material = new MeshBasicMaterial({map: this.texture});
    this.geometry = new SphereGeometry(1, 50, 50);
    this.geometry.scale(-1, 1, 1);
    let mesh = new Mesh(this.geometry, this.material);
    return mesh;
  }

  destroy() {
    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }

  render(scene, camera, needsUpdate) {
    if (!needsUpdate) return;
    this.renderer.render(scene, camera);
  }
}
