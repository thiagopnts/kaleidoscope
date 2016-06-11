import {ThreeSixtyVideoViewer} from './three_sixty_video_viewer';
import DeviceOrientationControls from './device_orientation_controls'

export class IPhoneThreeSixtyVideoViewer extends ThreeSixtyVideoViewer {
  constructor(options={}) {
    super(options);
    this.audio = new Audio();
    this.audio.src = this.source;
    this.controls = new DeviceOrientationControls(this.camera);
    this.renderer.el.addEventListener('touchend', () => this.audio.play());
  }
  render() {
    this.video.style.display = 'none';
    let loop = () => {
      this.video.currentTime = this.audio.currentTime;
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.callback && this.callback();
      requestAnimationFrame(loop);
    };
    loop();
  }
}
