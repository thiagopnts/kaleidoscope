import Audio from '../src/audio';

describe('Audio', () => {
  describe('source', () => {
    it('as string', () => {
      let viewer = new Audio({source: 'foo.mp4'});
      assert.equal(viewer.driver.tagName, 'AUDIO');
      assert.equal(viewer.element.tagName, 'VIDEO');
      assert.ok(viewer.element.src.endsWith('foo.mp4'));
    });

    it('as element', () => {
      let audio = document.createElement('audio');
      audio.src = 'foo.mp4';
      let viewer = new Audio({source: audio});
      assert.equal(viewer.driver, audio);
      assert.equal(viewer.driver.tagName, 'AUDIO');
      assert.equal(viewer.element.tagName, 'VIDEO');
      assert.ok(viewer.element.src.endsWith('foo.mp4'));
    });
  });

  it('hides the rendered element and the driver on render', () => {
    let viewer = new Audio({source: 'foo.mp4', container: document.createElement('div')});
    viewer.render();
    assert.equal(viewer.element.style.display, 'none');
    assert.equal(viewer.driver.style.display, 'none');
    viewer.destroy();
    assert.equal(viewer.element.style.display, '');
    assert.equal(viewer.driver.style.display, '');
  });
});
