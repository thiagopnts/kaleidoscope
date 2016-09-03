import Controls from '../src/controls';
import Renderer from '../src/renderer';

let event = {clientX: 0, clientY: 0};

describe('Controls', () => {
  it('onDragStart', () => {
    let renderer = new Renderer({height: 50, width: 50});
    let onDragStart = sinon.spy();
    let controls = new Controls({onDragStart, renderer});
    controls.onMouseDown(event);

    assert.ok(onDragStart.calledOnce);
  });

  it('onDragStop', () => {
    let renderer = new Renderer({height: 50, width: 50});
    let onDragStop = sinon.spy();
    let controls = new Controls({onDragStop, renderer});
    controls.onMouseDown(event);
    controls.onMouseUp(event);

    assert.ok(onDragStop.calledOnce);
  });
});
