import Image from '../src/image';

describe('Image', () => {
  describe('source', () => {
    it('as string', () => {
      let viewer = new Image({source: 'foo.jpg'});
      assert.equal(viewer.element.tagName, 'IMG');
      assert.ok(viewer.element.src.endsWith('foo.jpg'));
    });

    it('as element', () => {
      let image = document.createElement('img');
      image.src = 'foo.jpg';
      let viewer = new Image({source: image});
      assert.equal(viewer.element.tagName, 'IMG');
      assert.equal(viewer.element, image);
      assert.ok(viewer.element.src.endsWith('foo.jpg'));
    });
  });

  it('hides the rendered video on render', () => {
    let viewer = new Image({source: 'foo.mp4', container: document.createElement('div')});
    viewer.render();
    assert.equal(viewer.element.style.display, 'none');
    viewer.destroy();
    assert.equal(viewer.element.style.display, '');
  });
});
