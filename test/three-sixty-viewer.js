import ThreeSixty from '../src/three-sixty-viewer';

describe('360 viewer', () => {

  it('has a default height/width and vertical panning', () => {
    let viewer = new ThreeSixty();
    assert.isDefined(viewer.height);
    assert.isNumber(viewer.height);
    assert.isDefined(viewer.width);
    assert.isNumber(viewer.width);
    assert(viewer.verticalPanning);
  });

  it('controls should start looking at 90 degrees', () => {
    let viewer = new ThreeSixty();
    // theta values are in radians
    assert.equal(viewer.controls.theta.toFixed(2), 1.57);
  });

  it('accepts custom initial view point', () => {
    let viewer = new ThreeSixty({initialYaw: 180});

    assert.equal(viewer.controls.theta.toFixed(2), 3.14);
  });

  it('moves back to the center', () => {
    let viewer = new ThreeSixty({initialYaw: 180});
    viewer.controls.theta = 1.57;
    viewer.controls.phi = 0.78;
    viewer.centralize();
    setTimeout(() => {
      assert.equal(viewer.controls.phi.toFixed(2), 0);
      assert.equal(viewer.controls.theta.toFixed(2), 3.14);
    }, 0);
  });

  it('disables vertical panning', () => {
    let viewer = new ThreeSixty({verticalPanning: false});
    viewer.controls.onMouseMove({clientX: 123, clientY: 123});
    assert.equal(viewer.controls.phi, 0);
    assert.equal(viewer.controls.theta.toFixed(2), 1.57);
  });

  it('creates an element with the given source and defaults to a video tag', () => {
    let viewer = new ThreeSixty({source: 'foo.mp4'});
    assert.ok(viewer.element.src.endsWith('foo.mp4'));
  });

  it('accepts a pre-cooked element to be used as a media source', () => {
    let video = document.createElement('video');
    video.src = 'foo.mp4';
    let viewer = new ThreeSixty({source: video});
    assert.ok(viewer.element.src.endsWith('foo.mp4'));
    assert.equal(viewer.element, video);
  });

  it('hides element on render', () => {
    let video = document.createElement('video');
    video.src = 'foo.mp4';
    let viewer = new ThreeSixty({source: video, container: document.createElement('div')});
    viewer.render();
    assert.equal(viewer.element.style.display, 'none');
    viewer.destroy();
    assert.equal(viewer.element.style.display, '');
  });
});
