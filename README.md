<img src="kaleidoscope.gif" height="150" width="100%"/>
# Kaleidoscope
An embeddable, lightweight, dependency-free 360º video/image viewer

[demo](http://thiago.me/kaleidoscope)

## Usage
Get the code:
```bash
$ npm install kaleidoscopejs
```

Add the script to your page:
```html
<script src="node_modules/kaleidoscopejs/dist/kaleidoscope.min.js"></script>
```

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

`options.source` source video to be played.

`options.containerId` is where you want to render the 360, this is going to be retrieved via `document.querySelector` and when you call `render()` the 360 canvas will be append to it.

`options.container` HTML element to attach the 360 canvas to. You should always either pass a `containerId` or a `container`.

`options.height` height of the 360 canvas. Defaults to `360`.

`options.width` width of the 360 canvas. Defaults to `640`.

`options.video` a video tag element to be used as source and rendered in the 360 canvas.

`options.autoplay` to autoplay the video once rendered. Doesn't work on mobile. Defaults to `true`.

`options.muted` to define if the video should start muted. Defaults to `false`.

`options.loop` to define if the video should loop. Defaults to `false`.

`options.onError` callback to when something goes wrong.

`viewer.render()` renders the canvas in the defined `containerId` or `container`.

`viewer.play()` starts the current video. Useful for mobile.

`viewer.pause()` pauses the current video.

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

`options.source` source of the image to be rendered.

`options.containerId` is where you want to render the 360, this is going to be retrieved via `document.querySelector` and when you call `render()` the 360 canvas will be append to it.

`options.container` HTML element to attach the 360 canvas to. You should always either pass a `containerId` or a `container`.

`options.height` height of the 360 canvas. Defaults to `360`.

`options.width` width of the 360 canvas. Defaults to `640`.

`options.onError` callback to when something goes wrong.

`viewer.render()` renders the canvas in the defined `containerId` or `container`.

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
