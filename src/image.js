import ThreeSixtyViewer from './three-sixty-viewer';

export default class Image extends ThreeSixtyViewer {
  constructor(options) {
    super(options);
  }

  getElement() {
    if (this.source && this.source.tagName)
      return this.source;
    let image = document.createElement('img');
    image.setAttribute('crossorigin', 'anonymous');
    image.src = this.source;
    return image;
  }
}
