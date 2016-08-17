import Canvas from '../src/canvas';

describe('Canvas', () => {
  describe('source', () => {
    it('as string', () => {
      let viewer = new Canvas({source: 'foo.mp4'});
      assert.equal(viewer.element.tagName, 'CANVAS');
      assert.ok(viewer.video.src.endsWith('foo.mp4'));
    });

    it('as element', () => {
      let video = document.createElement('video');
      video.src = 'foo.mp4';
      let viewer = new Canvas({source: video});
      assert.equal(viewer.element.tagName, 'CANVAS');
      assert.equal(viewer.video.tagName, 'VIDEO');
      assert.equal(viewer.video, video);
      assert.ok(viewer.video.src.endsWith('foo.mp4'));
    });
  });

  it('hides the rendered video on render', () => {
    let viewer = new Canvas({source: 'foo.mp4', container: document.createElement('div')});
    viewer.render();
    assert.equal(viewer.video.style.display, 'none');
    viewer.destroy();
    assert.equal(viewer.video.style.display, '');
  });
});
