import {ThreeSixtyVideoViewer} from './three_sixty_video_viewer';

export class IEThreeSixtyVideoViewer extends ThreeSixtyVideoViewer {
  constructor(options={}) {
    super(options);
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.height = this.height;
    this.canvas.width = this.width;
  }

  createTexture() {
    let texture = new Texture(this.canvas)
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    this.renderer.setTexture(texture);
    this.scene.getObjectByName('photo').children = [this.renderer.mesh];
  }

  render() {
    this.video.style.display = 'none';
    let loop = () => {
      this.context.clearRect(0, 0, this.width, this.height);
      this.context.drawImage(this.video, 0, 0, this.width, this.height);
      this.renderer.material.map.needsUpdate = true;
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.callback && this.callback();
      requestAnimationFrame(loop);
    };
    loop();
  }
}
