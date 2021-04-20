import Canvas from '../src/canvas';

describe('Canvas', () => {
  describe('source', () => {
    it('as string', () => {
      let viewer = new Canvas({source: 'foo.mp4'});
      assert.equal(viewer.canvas.tagName, 'CANVAS');
      assert.ok(viewer.element.src.endsWith('foo.mp4'));
    });

    it('as element', () => {
      let video = document.createElement('video');
      video.src = 'foo.mp4';
      let viewer = new Canvas({source: video});
      assert.equal(viewer.canvas.tagName, 'CANVAS');
      assert.equal(viewer.element.tagName, 'VIDEO');
      assert.equal(viewer.element, video);
      assert.ok(viewer.element.src.endsWith('foo.mp4'));
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
