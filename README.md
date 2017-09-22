<img src="kaleidoscope.gif" height="150" width="100%"/>

# Kaleidoscope

An embeddable, lightweight, dependency-free 360º video/image viewer

[demo](http://thiago.me/kaleidoscope)

## Examples

The examples code can be found in the `examples/` folder.

[Viewing 360 Images](http://thiago.me/kaleidoscope/examples/image)

[Viewing 360 Videos with HLS](http://thiago.me/kaleidoscope/examples/hls)*

[Viewing 360 Videos with DASH](http://thiago.me/kaleidoscope/examples/dash)*

[Viewing 360 Videos with progressive download](http://thiago.me/kaleidoscope/examples/mp4)

* The HLS and Dash examples doesn't work on old Safari and iOS due CORS restrictions

## Usage
Get the code:
```bash
$ npm install kaleidoscopejs
```

Add the script to your page:
```html
<script src="node_modules/kaleidoscopejs/dist/kaleidoscope.min.js"></script>
```
or import the library using your favorite bundler.

#### Videos
```js
var viewer = new Kaleidoscope.Video({source: 'equirectangular-video.mp4', containerId: '#target'});
viewer.render();
```

#### Images
```js
var viewer = new Kaleidoscope.Image({source: 'equirectangular-image.jpg', containerId: '#target'});
viewer.render();
```

## Documentation

#### Kaleidoscope.Video

```js
let viewer = new Kaleidoscope.Video(options)
```
<dl>
<dt>
options
</dt>
<dd>
Object.
</dd>
</dl>

`options.source` source video to be played. This can be either a video tag or an url to the video file. Passing a tag is useful when embedding in player or using adaptative streaming. An example of how to use it with HLS.js can be found [here.](https://github.com/thiagopnts/kaleidoscope/issues/16#issuecomment-270478823)

`options.containerId` is where you want to render the 360, this is going to be retrieved via `document.querySelector` and when you call `render()` the 360 canvas will be append to it.

`options.container` HTML element to attach the 360 canvas to. You should always either pass a `containerId` or a `container`.

`options.height` height of the 360 canvas. Defaults to `360`.

`options.width` width of the 360 canvas. Defaults to `640`.

`options.autoplay` to autoplay the video once rendered. Doesn't work on mobile. Defaults to `true`.

`options.muted` to define if the video should start muted. Defaults to `false`.

`options.initialYaw` number to define initial yaw of 360, should be in degrees(45, 90, 180 etc).

`options.loop` to define if the video should loop. Defaults to `false`.

`options.onError` callback to when something goes wrong.

`options.verticalPanning` disables vertical panning. Defaults to `false`.

`options.onDragStart` callback called when user interaction starts.

`options.onDragStop` callback called when user interaction ends.

`viewer.render()` renders the canvas in the defined `containerId` or `container`.

`viewer.play()` starts the current video. Useful for mobile.

`viewer.pause()` pauses the current video.

`viewer.centralize()` move camera back to the original center.

`viewer.setSize({height, width})` sets canvas size.

`viewer.destroy()` destroy viewer cleaning up all used resources.

#### Kaleidoscope.Image

```js
let viewer = new Kaleidoscope.Image(options)
```
<dl>
<dt>
options
</dt>
<dd>
Object.
</dd>
</dl>

`options.source` source of the image to be rendered. This can be either an url to the image or the img tag itself.

`options.containerId` is where you want to render the 360, this is going to be retrieved via `document.querySelector` and when you call `render()` the 360 canvas will be append to it.

`options.container` HTML element to attach the 360 canvas to. You should always either pass a `containerId` or a `container`.

`options.height` height of the 360 canvas. Defaults to `360`.

`options.width` width of the 360 canvas. Defaults to `640`.

`options.initialYaw` number to define initial yaw of 360, should be in degrees(45, 90, 180 etc).

`options.verticalPanning` disables vertical panning. Defaults to `false`.

`options.onDragStart` callback called when user interaction starts.

`options.onDragStop` callback called when user interaction ends.

`options.onError` callback to when something goes wrong.

`viewer.render()` renders the canvas in the defined `containerId` or `container`.

`viewer.centralize()` move camera back to the original center.

`viewer.setSize({height, width})` sets canvas size.

`viewer.destroy()` destroy viewer cleaning up all used resources.

## Supported Browsers

- Google Chrome
- Microsoft Edge
- Firefox
- Internet Explorer 11
- Safari
- Chrome Android\*
- Safari iOS

\*Most recent versions.

## Known issues

360 videos doesn't work in Safari, IE 11, Microsoft Edge, Android and iOS if the video is served from a different domain, due some CORS [implementation bugs](https://bugs.webkit.org/show_bug.cgi?id=135379).

## Donations

Would you like to buy me a beer?

ETH 0x2230591c013e4E7e3B819B2B51496e34ED884c03

BTC 16qKaBh6DuuJuaQp4x3Eut8MAsVnpacVm5
