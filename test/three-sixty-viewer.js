import ThreeSixty from '../src/three-sixty-viewer';

describe('360 viewer', () => {

  it('has a default height/width', () => {
    let viewer = new ThreeSixty();
    assert.isDefined(viewer.height);
    assert.isNumber(viewer.height);
    assert.isDefined(viewer.width);
    assert.isNumber(viewer.width);
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
});
