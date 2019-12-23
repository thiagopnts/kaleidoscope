var utils = {
  isiOS: function isiOS() {
    return /(ipad|iphone|ipod)/ig.test(navigator.userAgent);
  },
  isEdge: function isEdge() {
    return /(Edge)/ig.test(navigator.userAgent);
  },
  shouldUseAudioDriver: function shouldUseAudioDriver() {
    var isOldiOSOnIphone = /iphone.*(7|8|9)_[0-9]/i.test(navigator.userAgent);
    var isWebView = /(iPhone|iPod).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
    return isOldiOSOnIphone || isWebView;
  },
  shouldUseCanvasInBetween: function shouldUseCanvasInBetween() {
    return /trident|edge/i.test(navigator.userAgent);
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

// File:src/Three.js

/**
 * @author mrdoob / http://mrdoob.com/
 */
var THREE = {
  REVISION: '75'
}; //

var threejs360 = THREE; //

if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
} //


if (Math.sign === undefined) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
  Math.sign = function (x) {
    return x < 0 ? -1 : x > 0 ? 1 : +x;
  };
}

if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
  // Missing in IE9-11.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  Object.defineProperty(Function.prototype, 'name', {
    get: function () {
      return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
    }
  });
}

if (Object.assign === undefined) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  Object.defineProperty(Object, 'assign', {
    writable: true,
    configurable: true,
    value: function (target) {

      if (target === undefined || target === null) {
        throw new TypeError("Cannot convert first argument to object");
      }

      var to = Object(target);

      for (var i = 1, n = arguments.length; i !== n; ++i) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        nextSource = Object(nextSource);
        var keysArray = Object.keys(nextSource);

        for (var nextIndex = 0, len = keysArray.length; nextIndex !== len; ++nextIndex) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }

      return to;
    }
  });
} // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button


THREE.MOUSE = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2
}; // GL STATE CONSTANTS

THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1; // SHADOWING TYPES

THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2; // MATERIAL CONSTANTS
// side

THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2; // shading

THREE.FlatShading = 1;
THREE.SmoothShading = 2; // colors

THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2; // blending modes

THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5; // custom blending equations
// (numbers start from 100 not to clash with other
// mappings to OpenGL constants defined in Texture.js)

THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.MinEquation = 103;
THREE.MaxEquation = 104; // custom blending destination factors

THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207; // custom blending source factors
//THREE.ZeroFactor = 200;
//THREE.OneFactor = 201;
//THREE.SrcAlphaFactor = 204;
//THREE.OneMinusSrcAlphaFactor = 205;
//THREE.DstAlphaFactor = 206;
//THREE.OneMinusDstAlphaFactor = 207;

THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210; // depth modes

THREE.NeverDepth = 0;
THREE.AlwaysDepth = 1;
THREE.LessDepth = 2;
THREE.LessEqualDepth = 3;
THREE.EqualDepth = 4;
THREE.GreaterEqualDepth = 5;
THREE.GreaterDepth = 6;
THREE.NotEqualDepth = 7; // TEXTURE CONSTANTS

THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2; // Tone Mapping modes

THREE.NoToneMapping = 0; // do not do any tone mapping, not even exposure (required for special purpose passes.)

THREE.LinearToneMapping = 1; // only apply exposure.

THREE.ReinhardToneMapping = 2;
THREE.Uncharted2ToneMapping = 3; // John Hable

THREE.CineonToneMapping = 4; // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
// Mapping modes

THREE.UVMapping = 300;
THREE.CubeReflectionMapping = 301;
THREE.CubeRefractionMapping = 302;
THREE.EquirectangularReflectionMapping = 303;
THREE.EquirectangularRefractionMapping = 304;
THREE.SphericalReflectionMapping = 305;
THREE.CubeUVReflectionMapping = 306;
THREE.CubeUVRefractionMapping = 307; // Wrapping modes

THREE.RepeatWrapping = 1000;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002; // Filters

THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008; // Data types

THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.HalfFloatType = 1025; // Pixel types
//THREE.UnsignedByteType = 1009;

THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018; // Pixel formats

THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023; // THREE.RGBEFormat handled as THREE.RGBAFormat in shaders

THREE.RGBEFormat = THREE.RGBAFormat; //1024;
// DDS / ST3C Compressed texture formats

THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004; // PVRTC compressed texture formats

THREE.RGB_PVRTC_4BPPV1_Format = 2100;
THREE.RGB_PVRTC_2BPPV1_Format = 2101;
THREE.RGBA_PVRTC_4BPPV1_Format = 2102;
THREE.RGBA_PVRTC_2BPPV1_Format = 2103; // ETC compressed texture formats

THREE.RGB_ETC1_Format = 2151; // Loop styles for AnimationAction

THREE.LoopOnce = 2200;
THREE.LoopRepeat = 2201;
THREE.LoopPingPong = 2202; // Interpolation

THREE.InterpolateDiscrete = 2300;
THREE.InterpolateLinear = 2301;
THREE.InterpolateSmooth = 2302; // Interpolant ending modes

THREE.ZeroCurvatureEnding = 2400;
THREE.ZeroSlopeEnding = 2401;
THREE.WrapAroundEnding = 2402; // Triangle Draw modes

THREE.TrianglesDrawMode = 0;
THREE.TriangleStripDrawMode = 1;
THREE.TriangleFanDrawMode = 2; // Texture Encodings

THREE.LinearEncoding = 3000; // No encoding at all.

THREE.sRGBEncoding = 3001;
THREE.GammaEncoding = 3007; // uses GAMMA_FACTOR, for backwards compatibility with WebGLRenderer.gammaInput/gammaOutput
// The following Texture Encodings are for RGB-only (no alpha) HDR light emission sources.
// These encodings should not specified as output encodings except in rare situations.

THREE.RGBEEncoding = 3002; // AKA Radiance.

THREE.LogLuvEncoding = 3003;
THREE.RGBM7Encoding = 3004;
THREE.RGBM16Encoding = 3005;
THREE.RGBDEncoding = 3006; // MaxRange is 256.
// File:src/math/Math.js

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */

THREE.Math = {
  generateUUID: function () {
    // http://www.broofa.com/Tools/Math.uuid.htm
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = new Array(36);
    var rnd = 0,
        r;
    return function () {
      for (var i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
          uuid[i] = '-';
        } else if (i === 14) {
          uuid[i] = '4';
        } else {
          if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
          r = rnd & 0xf;
          rnd = rnd >> 4;
          uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
        }
      }

      return uuid.join('');
    };
  }(),
  clamp: function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  },
  // compute euclidian modulo of m % n
  // https://en.wikipedia.org/wiki/Modulo_operation
  euclideanModulo: function (n, m) {
    return (n % m + m) % m;
  },
  // Linear mapping from range <a1, a2> to range <b1, b2>
  mapLinear: function (x, a1, a2, b1, b2) {
    return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
  },
  // http://en.wikipedia.org/wiki/Smoothstep
  smoothstep: function (x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
  },
  smootherstep: function (x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
  },
  random16: function () {
    return Math.random();
  },
  // Random integer from <low, high> interval
  randInt: function (low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
  },
  // Random float from <low, high> interval
  randFloat: function (low, high) {
    return low + Math.random() * (high - low);
  },
  // Random float from <-range/2, range/2> interval
  randFloatSpread: function (range) {
    return range * (0.5 - Math.random());
  },
  degToRad: function () {
    var degreeToRadiansFactor = Math.PI / 180;
    return function (degrees) {
      return degrees * degreeToRadiansFactor;
    };
  }(),
  radToDeg: function () {
    var radianToDegreesFactor = 180 / Math.PI;
    return function (radians) {
      return radians * radianToDegreesFactor;
    };
  }(),
  isPowerOfTwo: function (value) {
    return (value & value - 1) === 0 && value !== 0;
  },
  nearestPowerOfTwo: function (value) {
    return Math.pow(2, Math.round(Math.log(value) / Math.LN2));
  },
  nextPowerOfTwo: function (value) {
    value--;
    value |= value >> 1;
    value |= value >> 2;
    value |= value >> 4;
    value |= value >> 8;
    value |= value >> 16;
    value++;
    return value;
  }
}; // File:src/math/Color.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.Color = function (color) {
  if (arguments.length === 3) {
    return this.fromArray(arguments);
  }

  return this.set(color);
};

THREE.Color.prototype = {
  constructor: THREE.Color,
  r: 1,
  g: 1,
  b: 1,
  set: function (value) {
    if (value instanceof THREE.Color) {
      this.copy(value);
    } else if (typeof value === 'number') {
      this.setHex(value);
    } else if (typeof value === 'string') {
      this.setStyle(value);
    }

    return this;
  },
  setScalar: function (scalar) {
    this.r = scalar;
    this.g = scalar;
    this.b = scalar;
  },
  setHex: function (hex) {
    hex = Math.floor(hex);
    this.r = (hex >> 16 & 255) / 255;
    this.g = (hex >> 8 & 255) / 255;
    this.b = (hex & 255) / 255;
    return this;
  },
  setRGB: function (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
  },
  setHSL: function () {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
      return p;
    }

    return function (h, s, l) {
      // h,s,l ranges are in 0.0 - 1.0
      h = THREE.Math.euclideanModulo(h, 1);
      s = THREE.Math.clamp(s, 0, 1);
      l = THREE.Math.clamp(l, 0, 1);

      if (s === 0) {
        this.r = this.g = this.b = l;
      } else {
        var p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        var q = 2 * l - p;
        this.r = hue2rgb(q, p, h + 1 / 3);
        this.g = hue2rgb(q, p, h);
        this.b = hue2rgb(q, p, h - 1 / 3);
      }

      return this;
    };
  }(),
  setStyle: function (style) {
    function handleAlpha(string) {
      if (string === undefined) return;
    }

    var m;

    if (m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(style)) {
      // rgb / hsl
      var color;
      var name = m[1];
      var components = m[2];

      switch (name) {
        case 'rgb':
        case 'rgba':
          if (color = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
            // rgb(255,0,0) rgba(255,0,0,0.5)
            this.r = Math.min(255, parseInt(color[1], 10)) / 255;
            this.g = Math.min(255, parseInt(color[2], 10)) / 255;
            this.b = Math.min(255, parseInt(color[3], 10)) / 255;
            handleAlpha(color[5]);
            return this;
          }

          if (color = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
            // rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
            this.r = Math.min(100, parseInt(color[1], 10)) / 100;
            this.g = Math.min(100, parseInt(color[2], 10)) / 100;
            this.b = Math.min(100, parseInt(color[3], 10)) / 100;
            handleAlpha(color[5]);
            return this;
          }

          break;

        case 'hsl':
        case 'hsla':
          if (color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
            // hsl(120,50%,50%) hsla(120,50%,50%,0.5)
            var h = parseFloat(color[1]) / 360;
            var s = parseInt(color[2], 10) / 100;
            var l = parseInt(color[3], 10) / 100;
            handleAlpha(color[5]);
            return this.setHSL(h, s, l);
          }

          break;
      }
    } else if (m = /^\#([A-Fa-f0-9]+)$/.exec(style)) {
      // hex color
      var hex = m[1];
      var size = hex.length;

      if (size === 3) {
        // #ff0
        this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
        this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
        this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;
        return this;
      } else if (size === 6) {
        // #ff0000
        this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
        this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
        this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
        return this;
      }
    }

    if (style && style.length > 0) {
      // color keywords
      var hex = THREE.ColorKeywords[style];

      if (hex !== undefined) {
        // red
        this.setHex(hex);
      }
    }

    return this;
  },
  clone: function () {
    return new this.constructor(this.r, this.g, this.b);
  },
  copy: function (color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    return this;
  },
  copyGammaToLinear: function (color, gammaFactor) {
    if (gammaFactor === undefined) gammaFactor = 2.0;
    this.r = Math.pow(color.r, gammaFactor);
    this.g = Math.pow(color.g, gammaFactor);
    this.b = Math.pow(color.b, gammaFactor);
    return this;
  },
  copyLinearToGamma: function (color, gammaFactor) {
    if (gammaFactor === undefined) gammaFactor = 2.0;
    var safeInverse = gammaFactor > 0 ? 1.0 / gammaFactor : 1.0;
    this.r = Math.pow(color.r, safeInverse);
    this.g = Math.pow(color.g, safeInverse);
    this.b = Math.pow(color.b, safeInverse);
    return this;
  },
  convertGammaToLinear: function () {
    var r = this.r,
        g = this.g,
        b = this.b;
    this.r = r * r;
    this.g = g * g;
    this.b = b * b;
    return this;
  },
  convertLinearToGamma: function () {
    this.r = Math.sqrt(this.r);
    this.g = Math.sqrt(this.g);
    this.b = Math.sqrt(this.b);
    return this;
  },
  getHex: function () {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  },
  getHexString: function () {
    return ('000000' + this.getHex().toString(16)).slice(-6);
  },
  getHSL: function (optionalTarget) {
    // h,s,l ranges are in 0.0 - 1.0
    var hsl = optionalTarget || {
      h: 0,
      s: 0,
      l: 0
    };
    var r = this.r,
        g = this.g,
        b = this.b;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var hue, saturation;
    var lightness = (min + max) / 2.0;

    if (min === max) {
      hue = 0;
      saturation = 0;
    } else {
      var delta = max - min;
      saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);

      switch (max) {
        case r:
          hue = (g - b) / delta + (g < b ? 6 : 0);
          break;

        case g:
          hue = (b - r) / delta + 2;
          break;

        case b:
          hue = (r - g) / delta + 4;
          break;
      }

      hue /= 6;
    }

    hsl.h = hue;
    hsl.s = saturation;
    hsl.l = lightness;
    return hsl;
  },
  getStyle: function () {
    return 'rgb(' + (this.r * 255 | 0) + ',' + (this.g * 255 | 0) + ',' + (this.b * 255 | 0) + ')';
  },
  offsetHSL: function (h, s, l) {
    var hsl = this.getHSL();
    hsl.h += h;
    hsl.s += s;
    hsl.l += l;
    this.setHSL(hsl.h, hsl.s, hsl.l);
    return this;
  },
  add: function (color) {
    this.r += color.r;
    this.g += color.g;
    this.b += color.b;
    return this;
  },
  addColors: function (color1, color2) {
    this.r = color1.r + color2.r;
    this.g = color1.g + color2.g;
    this.b = color1.b + color2.b;
    return this;
  },
  addScalar: function (s) {
    this.r += s;
    this.g += s;
    this.b += s;
    return this;
  },
  multiply: function (color) {
    this.r *= color.r;
    this.g *= color.g;
    this.b *= color.b;
    return this;
  },
  multiplyScalar: function (s) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  },
  lerp: function (color, alpha) {
    this.r += (color.r - this.r) * alpha;
    this.g += (color.g - this.g) * alpha;
    this.b += (color.b - this.b) * alpha;
    return this;
  },
  equals: function (c) {
    return c.r === this.r && c.g === this.g && c.b === this.b;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    this.r = array[offset];
    this.g = array[offset + 1];
    this.b = array[offset + 2];
    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    array[offset] = this.r;
    array[offset + 1] = this.g;
    array[offset + 2] = this.b;
    return array;
  }
};
THREE.ColorKeywords = {
  'aliceblue': 0xF0F8FF,
  'antiquewhite': 0xFAEBD7,
  'aqua': 0x00FFFF,
  'aquamarine': 0x7FFFD4,
  'azure': 0xF0FFFF,
  'beige': 0xF5F5DC,
  'bisque': 0xFFE4C4,
  'black': 0x000000,
  'blanchedalmond': 0xFFEBCD,
  'blue': 0x0000FF,
  'blueviolet': 0x8A2BE2,
  'brown': 0xA52A2A,
  'burlywood': 0xDEB887,
  'cadetblue': 0x5F9EA0,
  'chartreuse': 0x7FFF00,
  'chocolate': 0xD2691E,
  'coral': 0xFF7F50,
  'cornflowerblue': 0x6495ED,
  'cornsilk': 0xFFF8DC,
  'crimson': 0xDC143C,
  'cyan': 0x00FFFF,
  'darkblue': 0x00008B,
  'darkcyan': 0x008B8B,
  'darkgoldenrod': 0xB8860B,
  'darkgray': 0xA9A9A9,
  'darkgreen': 0x006400,
  'darkgrey': 0xA9A9A9,
  'darkkhaki': 0xBDB76B,
  'darkmagenta': 0x8B008B,
  'darkolivegreen': 0x556B2F,
  'darkorange': 0xFF8C00,
  'darkorchid': 0x9932CC,
  'darkred': 0x8B0000,
  'darksalmon': 0xE9967A,
  'darkseagreen': 0x8FBC8F,
  'darkslateblue': 0x483D8B,
  'darkslategray': 0x2F4F4F,
  'darkslategrey': 0x2F4F4F,
  'darkturquoise': 0x00CED1,
  'darkviolet': 0x9400D3,
  'deeppink': 0xFF1493,
  'deepskyblue': 0x00BFFF,
  'dimgray': 0x696969,
  'dimgrey': 0x696969,
  'dodgerblue': 0x1E90FF,
  'firebrick': 0xB22222,
  'floralwhite': 0xFFFAF0,
  'forestgreen': 0x228B22,
  'fuchsia': 0xFF00FF,
  'gainsboro': 0xDCDCDC,
  'ghostwhite': 0xF8F8FF,
  'gold': 0xFFD700,
  'goldenrod': 0xDAA520,
  'gray': 0x808080,
  'green': 0x008000,
  'greenyellow': 0xADFF2F,
  'grey': 0x808080,
  'honeydew': 0xF0FFF0,
  'hotpink': 0xFF69B4,
  'indianred': 0xCD5C5C,
  'indigo': 0x4B0082,
  'ivory': 0xFFFFF0,
  'khaki': 0xF0E68C,
  'lavender': 0xE6E6FA,
  'lavenderblush': 0xFFF0F5,
  'lawngreen': 0x7CFC00,
  'lemonchiffon': 0xFFFACD,
  'lightblue': 0xADD8E6,
  'lightcoral': 0xF08080,
  'lightcyan': 0xE0FFFF,
  'lightgoldenrodyellow': 0xFAFAD2,
  'lightgray': 0xD3D3D3,
  'lightgreen': 0x90EE90,
  'lightgrey': 0xD3D3D3,
  'lightpink': 0xFFB6C1,
  'lightsalmon': 0xFFA07A,
  'lightseagreen': 0x20B2AA,
  'lightskyblue': 0x87CEFA,
  'lightslategray': 0x778899,
  'lightslategrey': 0x778899,
  'lightsteelblue': 0xB0C4DE,
  'lightyellow': 0xFFFFE0,
  'lime': 0x00FF00,
  'limegreen': 0x32CD32,
  'linen': 0xFAF0E6,
  'magenta': 0xFF00FF,
  'maroon': 0x800000,
  'mediumaquamarine': 0x66CDAA,
  'mediumblue': 0x0000CD,
  'mediumorchid': 0xBA55D3,
  'mediumpurple': 0x9370DB,
  'mediumseagreen': 0x3CB371,
  'mediumslateblue': 0x7B68EE,
  'mediumspringgreen': 0x00FA9A,
  'mediumturquoise': 0x48D1CC,
  'mediumvioletred': 0xC71585,
  'midnightblue': 0x191970,
  'mintcream': 0xF5FFFA,
  'mistyrose': 0xFFE4E1,
  'moccasin': 0xFFE4B5,
  'navajowhite': 0xFFDEAD,
  'navy': 0x000080,
  'oldlace': 0xFDF5E6,
  'olive': 0x808000,
  'olivedrab': 0x6B8E23,
  'orange': 0xFFA500,
  'orangered': 0xFF4500,
  'orchid': 0xDA70D6,
  'palegoldenrod': 0xEEE8AA,
  'palegreen': 0x98FB98,
  'paleturquoise': 0xAFEEEE,
  'palevioletred': 0xDB7093,
  'papayawhip': 0xFFEFD5,
  'peachpuff': 0xFFDAB9,
  'peru': 0xCD853F,
  'pink': 0xFFC0CB,
  'plum': 0xDDA0DD,
  'powderblue': 0xB0E0E6,
  'purple': 0x800080,
  'red': 0xFF0000,
  'rosybrown': 0xBC8F8F,
  'royalblue': 0x4169E1,
  'saddlebrown': 0x8B4513,
  'salmon': 0xFA8072,
  'sandybrown': 0xF4A460,
  'seagreen': 0x2E8B57,
  'seashell': 0xFFF5EE,
  'sienna': 0xA0522D,
  'silver': 0xC0C0C0,
  'skyblue': 0x87CEEB,
  'slateblue': 0x6A5ACD,
  'slategray': 0x708090,
  'slategrey': 0x708090,
  'snow': 0xFFFAFA,
  'springgreen': 0x00FF7F,
  'steelblue': 0x4682B4,
  'tan': 0xD2B48C,
  'teal': 0x008080,
  'thistle': 0xD8BFD8,
  'tomato': 0xFF6347,
  'turquoise': 0x40E0D0,
  'violet': 0xEE82EE,
  'wheat': 0xF5DEB3,
  'white': 0xFFFFFF,
  'whitesmoke': 0xF5F5F5,
  'yellow': 0xFFFF00,
  'yellowgreen': 0x9ACD32
}; // File:src/math/Vector2.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */

THREE.Vector2 = function (x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

THREE.Vector2.prototype = {
  constructor: THREE.Vector2,

  get width() {
    return this.x;
  },

  set width(value) {
    this.x = value;
  },

  get height() {
    return this.y;
  },

  set height(value) {
    this.y = value;
  },

  //
  set: function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
  setScalar: function (scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  },
  setX: function (x) {
    this.x = x;
    return this;
  },
  setY: function (y) {
    this.y = y;
    return this;
  },
  setComponent: function (index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;

      case 1:
        this.y = value;
        break;

      default:
        throw new Error('index is out of range: ' + index);
    }
  },
  getComponent: function (index) {
    switch (index) {
      case 0:
        return this.x;

      case 1:
        return this.y;

      default:
        throw new Error('index is out of range: ' + index);
    }
  },
  clone: function () {
    return new this.constructor(this.x, this.y);
  },
  copy: function (v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  },
  add: function (v, w) {
    if (w !== undefined) {
      return this.addVectors(v, w);
    }

    this.x += v.x;
    this.y += v.y;
    return this;
  },
  addScalar: function (s) {
    this.x += s;
    this.y += s;
    return this;
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  },
  addScaledVector: function (v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  },
  sub: function (v, w) {
    if (w !== undefined) {
      return this.subVectors(v, w);
    }

    this.x -= v.x;
    this.y -= v.y;
    return this;
  },
  subScalar: function (s) {
    this.x -= s;
    this.y -= s;
    return this;
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  },
  multiply: function (v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  },
  multiplyScalar: function (scalar) {
    if (isFinite(scalar)) {
      this.x *= scalar;
      this.y *= scalar;
    } else {
      this.x = 0;
      this.y = 0;
    }

    return this;
  },
  divide: function (v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  },
  divideScalar: function (scalar) {
    return this.multiplyScalar(1 / scalar);
  },
  min: function (v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  },
  max: function (v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  },
  clamp: function (min, max) {
    // This function assumes min < max, if this assumption isn't true it will not operate correctly
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  },
  clampScalar: function () {
    var min, max;
    return function clampScalar(minVal, maxVal) {
      if (min === undefined) {
        min = new THREE.Vector2();
        max = new THREE.Vector2();
      }

      min.set(minVal, minVal);
      max.set(maxVal, maxVal);
      return this.clamp(min, max);
    };
  }(),
  clampLength: function (min, max) {
    var length = this.length();
    this.multiplyScalar(Math.max(min, Math.min(max, length)) / length);
    return this;
  },
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  },
  roundToZero: function () {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  },
  dot: function (v) {
    return this.x * v.x + this.y * v.y;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y;
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  lengthManhattan: function () {
    return Math.abs(this.x) + Math.abs(this.y);
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  angle: function () {
    // computes the angle in radians with respect to the positive x-axis
    var angle = Math.atan2(this.y, this.x);
    if (angle < 0) angle += 2 * Math.PI;
    return angle;
  },
  distanceTo: function (v) {
    return Math.sqrt(this.distanceToSquared(v));
  },
  distanceToSquared: function (v) {
    var dx = this.x - v.x,
        dy = this.y - v.y;
    return dx * dx + dy * dy;
  },
  setLength: function (length) {
    return this.multiplyScalar(length / this.length());
  },
  lerp: function (v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  },
  lerpVectors: function (v1, v2, alpha) {
    this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    return this;
  },
  equals: function (v) {
    return v.x === this.x && v.y === this.y;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  },
  fromAttribute: function (attribute, index, offset) {
    if (offset === undefined) offset = 0;
    index = index * attribute.itemSize + offset;
    this.x = attribute.array[index];
    this.y = attribute.array[index + 1];
    return this;
  },
  rotateAround: function (center, angle) {
    var c = Math.cos(angle),
        s = Math.sin(angle);
    var x = this.x - center.x;
    var y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
}; // File:src/math/Vector3.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author *kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.Vector3 = function (x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
};

THREE.Vector3.prototype = {
  constructor: THREE.Vector3,
  set: function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  },
  setScalar: function (scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    return this;
  },
  setX: function (x) {
    this.x = x;
    return this;
  },
  setY: function (y) {
    this.y = y;
    return this;
  },
  setZ: function (z) {
    this.z = z;
    return this;
  },
  setComponent: function (index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;

      case 1:
        this.y = value;
        break;

      case 2:
        this.z = value;
        break;

      default:
        throw new Error('index is out of range: ' + index);
    }
  },
  getComponent: function (index) {
    switch (index) {
      case 0:
        return this.x;

      case 1:
        return this.y;

      case 2:
        return this.z;

      default:
        throw new Error('index is out of range: ' + index);
    }
  },
  clone: function () {
    return new this.constructor(this.x, this.y, this.z);
  },
  copy: function (v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  },
  add: function (v, w) {
    if (w !== undefined) {
      return this.addVectors(v, w);
    }

    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  },
  addScalar: function (s) {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  },
  addScaledVector: function (v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  },
  sub: function (v, w) {
    if (w !== undefined) {
      return this.subVectors(v, w);
    }

    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  },
  subScalar: function (s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    return this;
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  },
  multiply: function (v, w) {
    if (w !== undefined) {
      return this.multiplyVectors(v, w);
    }

    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  },
  multiplyScalar: function (scalar) {
    if (isFinite(scalar)) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }

    return this;
  },
  multiplyVectors: function (a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  },
  applyEuler: function () {
    var quaternion;
    return function applyEuler(euler) {

      if (quaternion === undefined) quaternion = new THREE.Quaternion();
      this.applyQuaternion(quaternion.setFromEuler(euler));
      return this;
    };
  }(),
  applyAxisAngle: function () {
    var quaternion;
    return function applyAxisAngle(axis, angle) {
      if (quaternion === undefined) quaternion = new THREE.Quaternion();
      this.applyQuaternion(quaternion.setFromAxisAngle(axis, angle));
      return this;
    };
  }(),
  applyMatrix3: function (m) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;
    return this;
  },
  applyMatrix4: function (m) {
    // input: THREE.Matrix4 affine matrix
    var x = this.x,
        y = this.y,
        z = this.z;
    var e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14];
    return this;
  },
  applyProjection: function (m) {
    // input: THREE.Matrix4 projection matrix
    var x = this.x,
        y = this.y,
        z = this.z;
    var e = m.elements;
    var d = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]); // perspective divide

    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * d;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * d;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * d;
    return this;
  },
  applyQuaternion: function (q) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w; // calculate quat * vector

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  },
  project: function () {
    var matrix;
    return function project(camera) {
      if (matrix === undefined) matrix = new THREE.Matrix4();
      matrix.multiplyMatrices(camera.projectionMatrix, matrix.getInverse(camera.matrixWorld));
      return this.applyProjection(matrix);
    };
  }(),
  unproject: function () {
    var matrix;
    return function unproject(camera) {
      if (matrix === undefined) matrix = new THREE.Matrix4();
      matrix.multiplyMatrices(camera.matrixWorld, matrix.getInverse(camera.projectionMatrix));
      return this.applyProjection(matrix);
    };
  }(),
  transformDirection: function (m) {
    // input: THREE.Matrix4 affine matrix
    // vector interpreted as a direction
    var x = this.x,
        y = this.y,
        z = this.z;
    var e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;
    this.normalize();
    return this;
  },
  divide: function (v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  },
  divideScalar: function (scalar) {
    return this.multiplyScalar(1 / scalar);
  },
  min: function (v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    return this;
  },
  max: function (v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    return this;
  },
  clamp: function (min, max) {
    // This function assumes min < max, if this assumption isn't true it will not operate correctly
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    return this;
  },
  clampScalar: function () {
    var min, max;
    return function clampScalar(minVal, maxVal) {
      if (min === undefined) {
        min = new THREE.Vector3();
        max = new THREE.Vector3();
      }

      min.set(minVal, minVal, minVal);
      max.set(maxVal, maxVal, maxVal);
      return this.clamp(min, max);
    };
  }(),
  clampLength: function (min, max) {
    var length = this.length();
    this.multiplyScalar(Math.max(min, Math.min(max, length)) / length);
    return this;
  },
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  },
  roundToZero: function () {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  },
  dot: function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  lengthManhattan: function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  setLength: function (length) {
    return this.multiplyScalar(length / this.length());
  },
  lerp: function (v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    return this;
  },
  lerpVectors: function (v1, v2, alpha) {
    this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    return this;
  },
  cross: function (v, w) {
    if (w !== undefined) {
      return this.crossVectors(v, w);
    }

    var x = this.x,
        y = this.y,
        z = this.z;
    this.x = y * v.z - z * v.y;
    this.y = z * v.x - x * v.z;
    this.z = x * v.y - y * v.x;
    return this;
  },
  crossVectors: function (a, b) {
    var ax = a.x,
        ay = a.y,
        az = a.z;
    var bx = b.x,
        by = b.y,
        bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  },
  projectOnVector: function () {
    var v1, dot;
    return function projectOnVector(vector) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      v1.copy(vector).normalize();
      dot = this.dot(v1);
      return this.copy(v1).multiplyScalar(dot);
    };
  }(),
  projectOnPlane: function () {
    var v1;
    return function projectOnPlane(planeNormal) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      v1.copy(this).projectOnVector(planeNormal);
      return this.sub(v1);
    };
  }(),
  reflect: function () {
    // reflect incident vector off plane orthogonal to normal
    // normal is assumed to have unit length
    var v1;
    return function reflect(normal) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      return this.sub(v1.copy(normal).multiplyScalar(2 * this.dot(normal)));
    };
  }(),
  angleTo: function (v) {
    var theta = this.dot(v) / Math.sqrt(this.lengthSq() * v.lengthSq()); // clamp, to handle numerical problems

    return Math.acos(THREE.Math.clamp(theta, -1, 1));
  },
  distanceTo: function (v) {
    return Math.sqrt(this.distanceToSquared(v));
  },
  distanceToSquared: function (v) {
    var dx = this.x - v.x;
    var dy = this.y - v.y;
    var dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  },
  setFromSpherical: function (s) {
    var sinPhiRadius = Math.sin(s.phi) * s.radius;
    this.x = sinPhiRadius * Math.sin(s.theta);
    this.y = Math.cos(s.phi) * s.radius;
    this.z = sinPhiRadius * Math.cos(s.theta);
    return this;
  },
  setFromMatrixPosition: function (m) {
    return this.setFromMatrixColumn(m, 3);
  },
  setFromMatrixScale: function (m) {
    var sx = this.setFromMatrixColumn(m, 0).length();
    var sy = this.setFromMatrixColumn(m, 1).length();
    var sz = this.setFromMatrixColumn(m, 2).length();
    this.x = sx;
    this.y = sy;
    this.z = sz;
    return this;
  },
  setFromMatrixColumn: function (m, index) {
    if (typeof m === 'number') {
      m = arguments[1];
      index = arguments[0];
    }

    return this.fromArray(m.elements, index * 4);
  },
  equals: function (v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  },
  fromAttribute: function (attribute, index, offset) {
    if (offset === undefined) offset = 0;
    index = index * attribute.itemSize + offset;
    this.x = attribute.array[index];
    this.y = attribute.array[index + 1];
    this.z = attribute.array[index + 2];
    return this;
  }
}; // File:src/math/Vector4.js

/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.Vector4 = function (x, y, z, w) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  this.w = w !== undefined ? w : 1;
};

THREE.Vector4.prototype = {
  constructor: THREE.Vector4,
  set: function (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  },
  setScalar: function (scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
    return this;
  },
  setX: function (x) {
    this.x = x;
    return this;
  },
  setY: function (y) {
    this.y = y;
    return this;
  },
  setZ: function (z) {
    this.z = z;
    return this;
  },
  setW: function (w) {
    this.w = w;
    return this;
  },
  setComponent: function (index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;

      case 1:
        this.y = value;
        break;

      case 2:
        this.z = value;
        break;

      case 3:
        this.w = value;
        break;

      default:
        throw new Error('index is out of range: ' + index);
    }
  },
  getComponent: function (index) {
    switch (index) {
      case 0:
        return this.x;

      case 1:
        return this.y;

      case 2:
        return this.z;

      case 3:
        return this.w;

      default:
        throw new Error('index is out of range: ' + index);
    }
  },
  clone: function () {
    return new this.constructor(this.x, this.y, this.z, this.w);
  },
  copy: function (v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w !== undefined ? v.w : 1;
    return this;
  },
  add: function (v, w) {
    if (w !== undefined) {
      return this.addVectors(v, w);
    }

    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  },
  addScalar: function (s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;
    return this;
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  },
  addScaledVector: function (v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    this.w += v.w * s;
    return this;
  },
  sub: function (v, w) {
    if (w !== undefined) {
      return this.subVectors(v, w);
    }

    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  },
  subScalar: function (s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;
    return this;
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  },
  multiplyScalar: function (scalar) {
    if (isFinite(scalar)) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      this.w *= scalar;
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 0;
    }

    return this;
  },
  applyMatrix4: function (m) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    var e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
    this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
    return this;
  },
  divideScalar: function (scalar) {
    return this.multiplyScalar(1 / scalar);
  },
  setAxisAngleFromQuaternion: function (q) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
    // q is assumed to be normalized
    this.w = 2 * Math.acos(q.w);
    var s = Math.sqrt(1 - q.w * q.w);

    if (s < 0.0001) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q.x / s;
      this.y = q.y / s;
      this.z = q.z / s;
    }

    return this;
  },
  setAxisAngleFromRotationMatrix: function (m) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    var angle,
        x,
        y,
        z,
        // variables for result
    epsilon = 0.01,
        // margin to allow for rounding errors
    epsilon2 = 0.1,
        // margin to distinguish between 0 and 180 degrees
    te = m.elements,
        m11 = te[0],
        m12 = te[4],
        m13 = te[8],
        m21 = te[1],
        m22 = te[5],
        m23 = te[9],
        m31 = te[2],
        m32 = te[6],
        m33 = te[10];

    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      // singularity found
      // first check for identity matrix which must have +1 for all terms
      // in leading diagonal and zero in other terms
      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        // this singularity is identity matrix so angle = 0
        this.set(1, 0, 0, 0);
        return this; // zero angle, arbitrary axis
      } // otherwise this singularity is angle = 180


      angle = Math.PI;
      var xx = (m11 + 1) / 2;
      var yy = (m22 + 1) / 2;
      var zz = (m33 + 1) / 2;
      var xy = (m12 + m21) / 4;
      var xz = (m13 + m31) / 4;
      var yz = (m23 + m32) / 4;

      if (xx > yy && xx > zz) {
        // m11 is the largest diagonal term
        if (xx < epsilon) {
          x = 0;
          y = 0.707106781;
          z = 0.707106781;
        } else {
          x = Math.sqrt(xx);
          y = xy / x;
          z = xz / x;
        }
      } else if (yy > zz) {
        // m22 is the largest diagonal term
        if (yy < epsilon) {
          x = 0.707106781;
          y = 0;
          z = 0.707106781;
        } else {
          y = Math.sqrt(yy);
          x = xy / y;
          z = yz / y;
        }
      } else {
        // m33 is the largest diagonal term so base result on this
        if (zz < epsilon) {
          x = 0.707106781;
          y = 0.707106781;
          z = 0;
        } else {
          z = Math.sqrt(zz);
          x = xz / z;
          y = yz / z;
        }
      }

      this.set(x, y, z, angle);
      return this; // return 180 deg rotation
    } // as we have reached here there are no singularities so we can handle normally


    var s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12)); // used to normalize

    if (Math.abs(s) < 0.001) s = 1; // prevent divide by zero, should not happen if matrix is orthogonal and should be
    // caught by singularity test above, but I've left it in just in case

    this.x = (m32 - m23) / s;
    this.y = (m13 - m31) / s;
    this.z = (m21 - m12) / s;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  },
  min: function (v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    this.w = Math.min(this.w, v.w);
    return this;
  },
  max: function (v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    this.w = Math.max(this.w, v.w);
    return this;
  },
  clamp: function (min, max) {
    // This function assumes min < max, if this assumption isn't true it will not operate correctly
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    this.w = Math.max(min.w, Math.min(max.w, this.w));
    return this;
  },
  clampScalar: function () {
    var min, max;
    return function clampScalar(minVal, maxVal) {
      if (min === undefined) {
        min = new THREE.Vector4();
        max = new THREE.Vector4();
      }

      min.set(minVal, minVal, minVal, minVal);
      max.set(maxVal, maxVal, maxVal, maxVal);
      return this.clamp(min, max);
    };
  }(),
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  },
  roundToZero: function () {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  },
  dot: function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  lengthManhattan: function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  setLength: function (length) {
    return this.multiplyScalar(length / this.length());
  },
  lerp: function (v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    this.w += (v.w - this.w) * alpha;
    return this;
  },
  lerpVectors: function (v1, v2, alpha) {
    this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    return this;
  },
  equals: function (v) {
    return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  },
  fromAttribute: function (attribute, index, offset) {
    if (offset === undefined) offset = 0;
    index = index * attribute.itemSize + offset;
    this.x = attribute.array[index];
    this.y = attribute.array[index + 1];
    this.z = attribute.array[index + 2];
    this.w = attribute.array[index + 3];
    return this;
  }
}; // File:src/math/Matrix3.js

/**
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 * @author tschw
 */

THREE.Matrix3 = function () {
  this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
};

THREE.Matrix3.prototype = {
  constructor: THREE.Matrix3,
  set: function (n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    var te = this.elements;
    te[0] = n11;
    te[1] = n21;
    te[2] = n31;
    te[3] = n12;
    te[4] = n22;
    te[5] = n32;
    te[6] = n13;
    te[7] = n23;
    te[8] = n33;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  },
  clone: function () {
    return new this.constructor().fromArray(this.elements);
  },
  copy: function (m) {
    var me = m.elements;
    this.set(me[0], me[3], me[6], me[1], me[4], me[7], me[2], me[5], me[8]);
    return this;
  },
  setFromMatrix4: function (m) {
    var me = m.elements;
    this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
    return this;
  },
  applyToVector3Array: function () {
    var v1;
    return function (array, offset, length) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      if (offset === undefined) offset = 0;
      if (length === undefined) length = array.length;

      for (var i = 0, j = offset; i < length; i += 3, j += 3) {
        v1.fromArray(array, j);
        v1.applyMatrix3(this);
        v1.toArray(array, j);
      }

      return array;
    };
  }(),
  applyToBuffer: function () {
    var v1;
    return function applyToBuffer(buffer, offset, length) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      if (offset === undefined) offset = 0;
      if (length === undefined) length = buffer.length / buffer.itemSize;

      for (var i = 0, j = offset; i < length; i++, j++) {
        v1.x = buffer.getX(j);
        v1.y = buffer.getY(j);
        v1.z = buffer.getZ(j);
        v1.applyMatrix3(this);
        buffer.setXYZ(v1.x, v1.y, v1.z);
      }

      return buffer;
    };
  }(),
  multiplyScalar: function (s) {
    var te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  },
  determinant: function () {
    var te = this.elements;
    var a = te[0],
        b = te[1],
        c = te[2],
        d = te[3],
        e = te[4],
        f = te[5],
        g = te[6],
        h = te[7],
        i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  },
  getInverse: function (matrix, throwOnDegenerate) {

    var me = matrix.elements,
        te = this.elements,
        n11 = me[0],
        n21 = me[1],
        n31 = me[2],
        n12 = me[3],
        n22 = me[4],
        n32 = me[5],
        n13 = me[6],
        n23 = me[7],
        n33 = me[8],
        t11 = n33 * n22 - n32 * n23,
        t12 = n32 * n13 - n33 * n12,
        t13 = n23 * n12 - n22 * n13,
        det = n11 * t11 + n21 * t12 + n31 * t13;

    if (det === 0) {
      var msg = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";

      if (throwOnDegenerate || false) {
        throw new Error(msg);
      }

      return this.identity();
    }

    te[0] = t11;
    te[1] = n31 * n23 - n33 * n21;
    te[2] = n32 * n21 - n31 * n22;
    te[3] = t12;
    te[4] = n33 * n11 - n31 * n13;
    te[5] = n31 * n12 - n32 * n11;
    te[6] = t13;
    te[7] = n21 * n13 - n23 * n11;
    te[8] = n22 * n11 - n21 * n12;
    return this.multiplyScalar(1 / det);
  },
  transpose: function () {
    var tmp,
        m = this.elements;
    tmp = m[1];
    m[1] = m[3];
    m[3] = tmp;
    tmp = m[2];
    m[2] = m[6];
    m[6] = tmp;
    tmp = m[5];
    m[5] = m[7];
    m[7] = tmp;
    return this;
  },
  flattenToArrayOffset: function (array, offset) {
    var te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  },
  getNormalMatrix: function (matrix4) {
    return this.setFromMatrix4(matrix4).getInverse(this).transpose();
  },
  transposeIntoArray: function (r) {
    var m = this.elements;
    r[0] = m[0];
    r[1] = m[3];
    r[2] = m[6];
    r[3] = m[1];
    r[4] = m[4];
    r[5] = m[7];
    r[6] = m[2];
    r[7] = m[5];
    r[8] = m[8];
    return this;
  },
  fromArray: function (array) {
    this.elements.set(array);
    return this;
  },
  toArray: function () {
    var te = this.elements;
    return [te[0], te[1], te[2], te[3], te[4], te[5], te[6], te[7], te[8]];
  }
}; // File:src/math/Matrix4.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.Matrix4 = function () {
  this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
};

THREE.Matrix4.prototype = {
  constructor: THREE.Matrix4,
  set: function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    var te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  clone: function () {
    return new THREE.Matrix4().fromArray(this.elements);
  },
  copy: function (m) {
    this.elements.set(m.elements);
    return this;
  },
  copyPosition: function (m) {
    var te = this.elements;
    var me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  },
  extractBasis: function (xAxis, yAxis, zAxis) {
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  },
  makeBasis: function (xAxis, yAxis, zAxis) {
    this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
    return this;
  },
  extractRotation: function () {
    var v1;
    return function (m) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      var te = this.elements;
      var me = m.elements;
      var scaleX = 1 / v1.setFromMatrixColumn(m, 0).length();
      var scaleY = 1 / v1.setFromMatrixColumn(m, 1).length();
      var scaleZ = 1 / v1.setFromMatrixColumn(m, 2).length();
      te[0] = me[0] * scaleX;
      te[1] = me[1] * scaleX;
      te[2] = me[2] * scaleX;
      te[4] = me[4] * scaleY;
      te[5] = me[5] * scaleY;
      te[6] = me[6] * scaleY;
      te[8] = me[8] * scaleZ;
      te[9] = me[9] * scaleZ;
      te[10] = me[10] * scaleZ;
      return this;
    };
  }(),
  makeRotationFromEuler: function (euler) {

    var te = this.elements;
    var x = euler.x,
        y = euler.y,
        z = euler.z;
    var a = Math.cos(x),
        b = Math.sin(x);
    var c = Math.cos(y),
        d = Math.sin(y);
    var e = Math.cos(z),
        f = Math.sin(z);

    if (euler.order === 'XYZ') {
      var ae = a * e,
          af = a * f,
          be = b * e,
          bf = b * f;
      te[0] = c * e;
      te[4] = -c * f;
      te[8] = d;
      te[1] = af + be * d;
      te[5] = ae - bf * d;
      te[9] = -b * c;
      te[2] = bf - ae * d;
      te[6] = be + af * d;
      te[10] = a * c;
    } else if (euler.order === 'YXZ') {
      var ce = c * e,
          cf = c * f,
          de = d * e,
          df = d * f;
      te[0] = ce + df * b;
      te[4] = de * b - cf;
      te[8] = a * d;
      te[1] = a * f;
      te[5] = a * e;
      te[9] = -b;
      te[2] = cf * b - de;
      te[6] = df + ce * b;
      te[10] = a * c;
    } else if (euler.order === 'ZXY') {
      var ce = c * e,
          cf = c * f,
          de = d * e,
          df = d * f;
      te[0] = ce - df * b;
      te[4] = -a * f;
      te[8] = de + cf * b;
      te[1] = cf + de * b;
      te[5] = a * e;
      te[9] = df - ce * b;
      te[2] = -a * d;
      te[6] = b;
      te[10] = a * c;
    } else if (euler.order === 'ZYX') {
      var ae = a * e,
          af = a * f,
          be = b * e,
          bf = b * f;
      te[0] = c * e;
      te[4] = be * d - af;
      te[8] = ae * d + bf;
      te[1] = c * f;
      te[5] = bf * d + ae;
      te[9] = af * d - be;
      te[2] = -d;
      te[6] = b * c;
      te[10] = a * c;
    } else if (euler.order === 'YZX') {
      var ac = a * c,
          ad = a * d,
          bc = b * c,
          bd = b * d;
      te[0] = c * e;
      te[4] = bd - ac * f;
      te[8] = bc * f + ad;
      te[1] = f;
      te[5] = a * e;
      te[9] = -b * e;
      te[2] = -d * e;
      te[6] = ad * f + bc;
      te[10] = ac - bd * f;
    } else if (euler.order === 'XZY') {
      var ac = a * c,
          ad = a * d,
          bc = b * c,
          bd = b * d;
      te[0] = c * e;
      te[4] = -f;
      te[8] = d * e;
      te[1] = ac * f + bd;
      te[5] = a * e;
      te[9] = ad * f - bc;
      te[2] = bc * f - ad;
      te[6] = b * e;
      te[10] = bd * f + ac;
    } // last column


    te[3] = 0;
    te[7] = 0;
    te[11] = 0; // bottom row

    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  },
  makeRotationFromQuaternion: function (q) {
    var te = this.elements;
    var x = q.x,
        y = q.y,
        z = q.z,
        w = q.w;
    var x2 = x + x,
        y2 = y + y,
        z2 = z + z;
    var xx = x * x2,
        xy = x * y2,
        xz = x * z2;
    var yy = y * y2,
        yz = y * z2,
        zz = z * z2;
    var wx = w * x2,
        wy = w * y2,
        wz = w * z2;
    te[0] = 1 - (yy + zz);
    te[4] = xy - wz;
    te[8] = xz + wy;
    te[1] = xy + wz;
    te[5] = 1 - (xx + zz);
    te[9] = yz - wx;
    te[2] = xz - wy;
    te[6] = yz + wx;
    te[10] = 1 - (xx + yy); // last column

    te[3] = 0;
    te[7] = 0;
    te[11] = 0; // bottom row

    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  },
  lookAt: function () {
    var x, y, z;
    return function (eye, target, up) {
      if (x === undefined) x = new THREE.Vector3();
      if (y === undefined) y = new THREE.Vector3();
      if (z === undefined) z = new THREE.Vector3();
      var te = this.elements;
      z.subVectors(eye, target).normalize();

      if (z.lengthSq() === 0) {
        z.z = 1;
      }

      x.crossVectors(up, z).normalize();

      if (x.lengthSq() === 0) {
        z.x += 0.0001;
        x.crossVectors(up, z).normalize();
      }

      y.crossVectors(z, x);
      te[0] = x.x;
      te[4] = y.x;
      te[8] = z.x;
      te[1] = x.y;
      te[5] = y.y;
      te[9] = z.y;
      te[2] = x.z;
      te[6] = y.z;
      te[10] = z.z;
      return this;
    };
  }(),
  multiply: function (m, n) {
    if (n !== undefined) {
      return this.multiplyMatrices(m, n);
    }

    return this.multiplyMatrices(this, m);
  },
  multiplyMatrices: function (a, b) {
    var ae = a.elements;
    var be = b.elements;
    var te = this.elements;
    var a11 = ae[0],
        a12 = ae[4],
        a13 = ae[8],
        a14 = ae[12];
    var a21 = ae[1],
        a22 = ae[5],
        a23 = ae[9],
        a24 = ae[13];
    var a31 = ae[2],
        a32 = ae[6],
        a33 = ae[10],
        a34 = ae[14];
    var a41 = ae[3],
        a42 = ae[7],
        a43 = ae[11],
        a44 = ae[15];
    var b11 = be[0],
        b12 = be[4],
        b13 = be[8],
        b14 = be[12];
    var b21 = be[1],
        b22 = be[5],
        b23 = be[9],
        b24 = be[13];
    var b31 = be[2],
        b32 = be[6],
        b33 = be[10],
        b34 = be[14];
    var b41 = be[3],
        b42 = be[7],
        b43 = be[11],
        b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  },
  multiplyToArray: function (a, b, r) {
    var te = this.elements;
    this.multiplyMatrices(a, b);
    r[0] = te[0];
    r[1] = te[1];
    r[2] = te[2];
    r[3] = te[3];
    r[4] = te[4];
    r[5] = te[5];
    r[6] = te[6];
    r[7] = te[7];
    r[8] = te[8];
    r[9] = te[9];
    r[10] = te[10];
    r[11] = te[11];
    r[12] = te[12];
    r[13] = te[13];
    r[14] = te[14];
    r[15] = te[15];
    return this;
  },
  multiplyScalar: function (s) {
    var te = this.elements;
    te[0] *= s;
    te[4] *= s;
    te[8] *= s;
    te[12] *= s;
    te[1] *= s;
    te[5] *= s;
    te[9] *= s;
    te[13] *= s;
    te[2] *= s;
    te[6] *= s;
    te[10] *= s;
    te[14] *= s;
    te[3] *= s;
    te[7] *= s;
    te[11] *= s;
    te[15] *= s;
    return this;
  },
  applyToVector3Array: function () {
    var v1;
    return function (array, offset, length) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      if (offset === undefined) offset = 0;
      if (length === undefined) length = array.length;

      for (var i = 0, j = offset; i < length; i += 3, j += 3) {
        v1.fromArray(array, j);
        v1.applyMatrix4(this);
        v1.toArray(array, j);
      }

      return array;
    };
  }(),
  applyToBuffer: function () {
    var v1;
    return function applyToBuffer(buffer, offset, length) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      if (offset === undefined) offset = 0;
      if (length === undefined) length = buffer.length / buffer.itemSize;

      for (var i = 0, j = offset; i < length; i++, j++) {
        v1.x = buffer.getX(j);
        v1.y = buffer.getY(j);
        v1.z = buffer.getZ(j);
        v1.applyMatrix4(this);
        buffer.setXYZ(v1.x, v1.y, v1.z);
      }

      return buffer;
    };
  }(),
  determinant: function () {
    var te = this.elements;
    var n11 = te[0],
        n12 = te[4],
        n13 = te[8],
        n14 = te[12];
    var n21 = te[1],
        n22 = te[5],
        n23 = te[9],
        n24 = te[13];
    var n31 = te[2],
        n32 = te[6],
        n33 = te[10],
        n34 = te[14];
    var n41 = te[3],
        n42 = te[7],
        n43 = te[11],
        n44 = te[15]; //TODO: make this more efficient
    //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

    return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
  },
  transpose: function () {
    var te = this.elements;
    var tmp;
    tmp = te[1];
    te[1] = te[4];
    te[4] = tmp;
    tmp = te[2];
    te[2] = te[8];
    te[8] = tmp;
    tmp = te[6];
    te[6] = te[9];
    te[9] = tmp;
    tmp = te[3];
    te[3] = te[12];
    te[12] = tmp;
    tmp = te[7];
    te[7] = te[13];
    te[13] = tmp;
    tmp = te[11];
    te[11] = te[14];
    te[14] = tmp;
    return this;
  },
  flattenToArrayOffset: function (array, offset) {
    var te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];
    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];
    return array;
  },
  getPosition: function () {
    var v1;
    return function () {
      if (v1 === undefined) v1 = new THREE.Vector3();
      return v1.setFromMatrixColumn(this, 3);
    };
  }(),
  setPosition: function (v) {
    var te = this.elements;
    te[12] = v.x;
    te[13] = v.y;
    te[14] = v.z;
    return this;
  },
  getInverse: function (m, throwOnDegenerate) {
    // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
    var te = this.elements,
        me = m.elements,
        n11 = me[0],
        n21 = me[1],
        n31 = me[2],
        n41 = me[3],
        n12 = me[4],
        n22 = me[5],
        n32 = me[6],
        n42 = me[7],
        n13 = me[8],
        n23 = me[9],
        n33 = me[10],
        n43 = me[11],
        n14 = me[12],
        n24 = me[13],
        n34 = me[14],
        n44 = me[15],
        t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
        t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
        t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
        t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

    if (det === 0) {
      var msg = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";

      if (throwOnDegenerate || false) {
        throw new Error(msg);
      }

      return this.identity();
    }

    te[0] = t11;
    te[1] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
    te[2] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
    te[3] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
    te[4] = t12;
    te[5] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
    te[6] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
    te[7] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
    te[8] = t13;
    te[9] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
    te[10] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
    te[11] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
    te[12] = t14;
    te[13] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
    te[14] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
    te[15] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;
    return this.multiplyScalar(1 / det);
  },
  scale: function (v) {
    var te = this.elements;
    var x = v.x,
        y = v.y,
        z = v.z;
    te[0] *= x;
    te[4] *= y;
    te[8] *= z;
    te[1] *= x;
    te[5] *= y;
    te[9] *= z;
    te[2] *= x;
    te[6] *= y;
    te[10] *= z;
    te[3] *= x;
    te[7] *= y;
    te[11] *= z;
    return this;
  },
  getMaxScaleOnAxis: function () {
    var te = this.elements;
    var scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    var scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    var scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  },
  makeTranslation: function (x, y, z) {
    this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
    return this;
  },
  makeRotationX: function (theta) {
    var c = Math.cos(theta),
        s = Math.sin(theta);
    this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationY: function (theta) {
    var c = Math.cos(theta),
        s = Math.sin(theta);
    this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationZ: function (theta) {
    var c = Math.cos(theta),
        s = Math.sin(theta);
    this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationAxis: function (axis, angle) {
    // Based on http://www.gamedev.net/reference/articles/article1199.asp
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var t = 1 - c;
    var x = axis.x,
        y = axis.y,
        z = axis.z;
    var tx = t * x,
        ty = t * y;
    this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
    return this;
  },
  makeScale: function (x, y, z) {
    this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
    return this;
  },
  compose: function (position, quaternion, scale) {
    this.makeRotationFromQuaternion(quaternion);
    this.scale(scale);
    this.setPosition(position);
    return this;
  },
  decompose: function () {
    var vector, matrix;
    return function (position, quaternion, scale) {
      if (vector === undefined) vector = new THREE.Vector3();
      if (matrix === undefined) matrix = new THREE.Matrix4();
      var te = this.elements;
      var sx = vector.set(te[0], te[1], te[2]).length();
      var sy = vector.set(te[4], te[5], te[6]).length();
      var sz = vector.set(te[8], te[9], te[10]).length(); // if determine is negative, we need to invert one scale

      var det = this.determinant();

      if (det < 0) {
        sx = -sx;
      }

      position.x = te[12];
      position.y = te[13];
      position.z = te[14]; // scale the rotation part

      matrix.elements.set(this.elements); // at this point matrix is incomplete so we can't use .copy()

      var invSX = 1 / sx;
      var invSY = 1 / sy;
      var invSZ = 1 / sz;
      matrix.elements[0] *= invSX;
      matrix.elements[1] *= invSX;
      matrix.elements[2] *= invSX;
      matrix.elements[4] *= invSY;
      matrix.elements[5] *= invSY;
      matrix.elements[6] *= invSY;
      matrix.elements[8] *= invSZ;
      matrix.elements[9] *= invSZ;
      matrix.elements[10] *= invSZ;
      quaternion.setFromRotationMatrix(matrix);
      scale.x = sx;
      scale.y = sy;
      scale.z = sz;
      return this;
    };
  }(),
  makeFrustum: function (left, right, bottom, top, near, far) {
    var te = this.elements;
    var x = 2 * near / (right - left);
    var y = 2 * near / (top - bottom);
    var a = (right + left) / (right - left);
    var b = (top + bottom) / (top - bottom);
    var c = -(far + near) / (far - near);
    var d = -2 * far * near / (far - near);
    te[0] = x;
    te[4] = 0;
    te[8] = a;
    te[12] = 0;
    te[1] = 0;
    te[5] = y;
    te[9] = b;
    te[13] = 0;
    te[2] = 0;
    te[6] = 0;
    te[10] = c;
    te[14] = d;
    te[3] = 0;
    te[7] = 0;
    te[11] = -1;
    te[15] = 0;
    return this;
  },
  makePerspective: function (fov, aspect, near, far) {
    var ymax = near * Math.tan(THREE.Math.degToRad(fov * 0.5));
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;
    return this.makeFrustum(xmin, xmax, ymin, ymax, near, far);
  },
  makeOrthographic: function (left, right, top, bottom, near, far) {
    var te = this.elements;
    var w = 1.0 / (right - left);
    var h = 1.0 / (top - bottom);
    var p = 1.0 / (far - near);
    var x = (right + left) * w;
    var y = (top + bottom) * h;
    var z = (far + near) * p;
    te[0] = 2 * w;
    te[4] = 0;
    te[8] = 0;
    te[12] = -x;
    te[1] = 0;
    te[5] = 2 * h;
    te[9] = 0;
    te[13] = -y;
    te[2] = 0;
    te[6] = 0;
    te[10] = -2 * p;
    te[14] = -z;
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[15] = 1;
    return this;
  },
  equals: function (matrix) {
    var te = this.elements;
    var me = matrix.elements;

    for (var i = 0; i < 16; i++) {
      if (te[i] !== me[i]) return false;
    }

    return true;
  },
  fromArray: function (array) {
    this.elements.set(array);
    return this;
  },
  toArray: function () {
    var te = this.elements;
    return [te[0], te[1], te[2], te[3], te[4], te[5], te[6], te[7], te[8], te[9], te[10], te[11], te[12], te[13], te[14], te[15]];
  }
}; // File:src/math/Plane.js

/**
 * @author bhouston / http://clara.io
 */

THREE.Plane = function (normal, constant) {
  this.normal = normal !== undefined ? normal : new THREE.Vector3(1, 0, 0);
  this.constant = constant !== undefined ? constant : 0;
};

THREE.Plane.prototype = {
  constructor: THREE.Plane,
  set: function (normal, constant) {
    this.normal.copy(normal);
    this.constant = constant;
    return this;
  },
  setComponents: function (x, y, z, w) {
    this.normal.set(x, y, z);
    this.constant = w;
    return this;
  },
  setFromNormalAndCoplanarPoint: function (normal, point) {
    this.normal.copy(normal);
    this.constant = -point.dot(this.normal); // must be this.normal, not normal, as this.normal is normalized

    return this;
  },
  setFromCoplanarPoints: function () {
    var v1 = new THREE.Vector3();
    var v2 = new THREE.Vector3();
    return function (a, b, c) {
      var normal = v1.subVectors(c, b).cross(v2.subVectors(a, b)).normalize(); // Q: should an error be thrown if normal is zero (e.g. degenerate plane)?

      this.setFromNormalAndCoplanarPoint(normal, a);
      return this;
    };
  }(),
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (plane) {
    this.normal.copy(plane.normal);
    this.constant = plane.constant;
    return this;
  },
  normalize: function () {
    // Note: will lead to a divide by zero if the plane is invalid.
    var inverseNormalLength = 1.0 / this.normal.length();
    this.normal.multiplyScalar(inverseNormalLength);
    this.constant *= inverseNormalLength;
    return this;
  },
  negate: function () {
    this.constant *= -1;
    this.normal.negate();
    return this;
  },
  distanceToPoint: function (point) {
    return this.normal.dot(point) + this.constant;
  },
  distanceToSphere: function (sphere) {
    return this.distanceToPoint(sphere.center) - sphere.radius;
  },
  projectPoint: function (point, optionalTarget) {
    return this.orthoPoint(point, optionalTarget).sub(point).negate();
  },
  orthoPoint: function (point, optionalTarget) {
    var perpendicularMagnitude = this.distanceToPoint(point);
    var result = optionalTarget || new THREE.Vector3();
    return result.copy(this.normal).multiplyScalar(perpendicularMagnitude);
  },
  intersectLine: function () {
    var v1 = new THREE.Vector3();
    return function (line, optionalTarget) {
      var result = optionalTarget || new THREE.Vector3();
      var direction = line.delta(v1);
      var denominator = this.normal.dot(direction);

      if (denominator === 0) {
        // line is coplanar, return origin
        if (this.distanceToPoint(line.start) === 0) {
          return result.copy(line.start);
        } // Unsure if this is the correct method to handle this case.


        return undefined;
      }

      var t = -(line.start.dot(this.normal) + this.constant) / denominator;

      if (t < 0 || t > 1) {
        return undefined;
      }

      return result.copy(direction).multiplyScalar(t).add(line.start);
    };
  }(),
  intersectsLine: function (line) {
    // Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.
    var startSign = this.distanceToPoint(line.start);
    var endSign = this.distanceToPoint(line.end);
    return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
  },
  intersectsBox: function (box) {
    return box.intersectsPlane(this);
  },
  intersectsSphere: function (sphere) {
    return sphere.intersectsPlane(this);
  },
  coplanarPoint: function (optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    return result.copy(this.normal).multiplyScalar(-this.constant);
  },
  applyMatrix4: function () {
    var v1 = new THREE.Vector3();
    var v2 = new THREE.Vector3();
    var m1 = new THREE.Matrix3();
    return function (matrix, optionalNormalMatrix) {
      // compute new normal based on theory here:
      // http://www.songho.ca/opengl/gl_normaltransform.html
      var normalMatrix = optionalNormalMatrix || m1.getNormalMatrix(matrix);
      var newNormal = v1.copy(this.normal).applyMatrix3(normalMatrix);
      var newCoplanarPoint = this.coplanarPoint(v2);
      newCoplanarPoint.applyMatrix4(matrix);
      this.setFromNormalAndCoplanarPoint(newNormal, newCoplanarPoint);
      return this;
    };
  }(),
  translate: function (offset) {
    this.constant = this.constant - offset.dot(this.normal);
    return this;
  },
  equals: function (plane) {
    return plane.normal.equals(this.normal) && plane.constant === this.constant;
  }
}; // File:src/math/Quaternion.js

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */

THREE.Quaternion = function (x, y, z, w) {
  this._x = x || 0;
  this._y = y || 0;
  this._z = z || 0;
  this._w = w !== undefined ? w : 1;
};

THREE.Quaternion.prototype = {
  constructor: THREE.Quaternion,

  get x() {
    return this._x;
  },

  set x(value) {
    this._x = value;
    this.onChangeCallback();
  },

  get y() {
    return this._y;
  },

  set y(value) {
    this._y = value;
    this.onChangeCallback();
  },

  get z() {
    return this._z;
  },

  set z(value) {
    this._z = value;
    this.onChangeCallback();
  },

  get w() {
    return this._w;
  },

  set w(value) {
    this._w = value;
    this.onChangeCallback();
  },

  set: function (x, y, z, w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this.onChangeCallback();
    return this;
  },
  clone: function () {
    return new this.constructor(this._x, this._y, this._z, this._w);
  },
  copy: function (quaternion) {
    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;
    this.onChangeCallback();
    return this;
  },
  setFromEuler: function (euler, update) {
    if (euler instanceof THREE.Euler === false) {
      throw new Error('THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.');
    } // http://www.mathworks.com/matlabcentral/fileexchange/
    // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
    //	content/SpinCalc.m


    var c1 = Math.cos(euler._x / 2);
    var c2 = Math.cos(euler._y / 2);
    var c3 = Math.cos(euler._z / 2);
    var s1 = Math.sin(euler._x / 2);
    var s2 = Math.sin(euler._y / 2);
    var s3 = Math.sin(euler._z / 2);
    var order = euler.order;

    if (order === 'XYZ') {
      this._x = s1 * c2 * c3 + c1 * s2 * s3;
      this._y = c1 * s2 * c3 - s1 * c2 * s3;
      this._z = c1 * c2 * s3 + s1 * s2 * c3;
      this._w = c1 * c2 * c3 - s1 * s2 * s3;
    } else if (order === 'YXZ') {
      this._x = s1 * c2 * c3 + c1 * s2 * s3;
      this._y = c1 * s2 * c3 - s1 * c2 * s3;
      this._z = c1 * c2 * s3 - s1 * s2 * c3;
      this._w = c1 * c2 * c3 + s1 * s2 * s3;
    } else if (order === 'ZXY') {
      this._x = s1 * c2 * c3 - c1 * s2 * s3;
      this._y = c1 * s2 * c3 + s1 * c2 * s3;
      this._z = c1 * c2 * s3 + s1 * s2 * c3;
      this._w = c1 * c2 * c3 - s1 * s2 * s3;
    } else if (order === 'ZYX') {
      this._x = s1 * c2 * c3 - c1 * s2 * s3;
      this._y = c1 * s2 * c3 + s1 * c2 * s3;
      this._z = c1 * c2 * s3 - s1 * s2 * c3;
      this._w = c1 * c2 * c3 + s1 * s2 * s3;
    } else if (order === 'YZX') {
      this._x = s1 * c2 * c3 + c1 * s2 * s3;
      this._y = c1 * s2 * c3 + s1 * c2 * s3;
      this._z = c1 * c2 * s3 - s1 * s2 * c3;
      this._w = c1 * c2 * c3 - s1 * s2 * s3;
    } else if (order === 'XZY') {
      this._x = s1 * c2 * c3 - c1 * s2 * s3;
      this._y = c1 * s2 * c3 - s1 * c2 * s3;
      this._z = c1 * c2 * s3 + s1 * s2 * c3;
      this._w = c1 * c2 * c3 + s1 * s2 * s3;
    }

    if (update !== false) this.onChangeCallback();
    return this;
  },
  setFromAxisAngle: function (axis, angle) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
    // assumes axis is normalized
    var halfAngle = angle / 2,
        s = Math.sin(halfAngle);
    this._x = axis.x * s;
    this._y = axis.y * s;
    this._z = axis.z * s;
    this._w = Math.cos(halfAngle);
    this.onChangeCallback();
    return this;
  },
  setFromRotationMatrix: function (m) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    var te = m.elements,
        m11 = te[0],
        m12 = te[4],
        m13 = te[8],
        m21 = te[1],
        m22 = te[5],
        m23 = te[9],
        m31 = te[2],
        m32 = te[6],
        m33 = te[10],
        trace = m11 + m22 + m33,
        s;

    if (trace > 0) {
      s = 0.5 / Math.sqrt(trace + 1.0);
      this._w = 0.25 / s;
      this._x = (m32 - m23) * s;
      this._y = (m13 - m31) * s;
      this._z = (m21 - m12) * s;
    } else if (m11 > m22 && m11 > m33) {
      s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
      this._w = (m32 - m23) / s;
      this._x = 0.25 * s;
      this._y = (m12 + m21) / s;
      this._z = (m13 + m31) / s;
    } else if (m22 > m33) {
      s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
      this._w = (m13 - m31) / s;
      this._x = (m12 + m21) / s;
      this._y = 0.25 * s;
      this._z = (m23 + m32) / s;
    } else {
      s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
      this._w = (m21 - m12) / s;
      this._x = (m13 + m31) / s;
      this._y = (m23 + m32) / s;
      this._z = 0.25 * s;
    }

    this.onChangeCallback();
    return this;
  },
  setFromUnitVectors: function () {
    // http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final
    // assumes direction vectors vFrom and vTo are normalized
    var v1, r;
    var EPS = 0.000001;
    return function (vFrom, vTo) {
      if (v1 === undefined) v1 = new THREE.Vector3();
      r = vFrom.dot(vTo) + 1;

      if (r < EPS) {
        r = 0;

        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          v1.set(-vFrom.y, vFrom.x, 0);
        } else {
          v1.set(0, -vFrom.z, vFrom.y);
        }
      } else {
        v1.crossVectors(vFrom, vTo);
      }

      this._x = v1.x;
      this._y = v1.y;
      this._z = v1.z;
      this._w = r;
      this.normalize();
      return this;
    };
  }(),
  inverse: function () {
    this.conjugate().normalize();
    return this;
  },
  conjugate: function () {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this.onChangeCallback();
    return this;
  },
  dot: function (v) {
    return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
  },
  lengthSq: function () {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  },
  length: function () {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  },
  normalize: function () {
    var l = this.length();

    if (l === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      l = 1 / l;
      this._x = this._x * l;
      this._y = this._y * l;
      this._z = this._z * l;
      this._w = this._w * l;
    }

    this.onChangeCallback();
    return this;
  },
  multiply: function (q, p) {
    if (p !== undefined) {
      return this.multiplyQuaternions(q, p);
    }

    return this.multiplyQuaternions(this, q);
  },
  multiplyQuaternions: function (a, b) {
    // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
    var qax = a._x,
        qay = a._y,
        qaz = a._z,
        qaw = a._w;
    var qbx = b._x,
        qby = b._y,
        qbz = b._z,
        qbw = b._w;
    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    this.onChangeCallback();
    return this;
  },
  slerp: function (qb, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(qb);
    var x = this._x,
        y = this._y,
        z = this._z,
        w = this._w; // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

    var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

    if (cosHalfTheta < 0) {
      this._w = -qb._w;
      this._x = -qb._x;
      this._y = -qb._y;
      this._z = -qb._z;
      cosHalfTheta = -cosHalfTheta;
    } else {
      this.copy(qb);
    }

    if (cosHalfTheta >= 1.0) {
      this._w = w;
      this._x = x;
      this._y = y;
      this._z = z;
      return this;
    }

    var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

    if (Math.abs(sinHalfTheta) < 0.001) {
      this._w = 0.5 * (w + this._w);
      this._x = 0.5 * (x + this._x);
      this._y = 0.5 * (y + this._y);
      this._z = 0.5 * (z + this._z);
      return this;
    }

    var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
        ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
    this._w = w * ratioA + this._w * ratioB;
    this._x = x * ratioA + this._x * ratioB;
    this._y = y * ratioA + this._y * ratioB;
    this._z = z * ratioA + this._z * ratioB;
    this.onChangeCallback();
    return this;
  },
  equals: function (quaternion) {
    return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._w = array[offset + 3];
    this.onChangeCallback();
    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._w;
    return array;
  },
  onChange: function (callback) {
    this.onChangeCallback = callback;
    return this;
  },
  onChangeCallback: function () {}
};
Object.assign(THREE.Quaternion, {
  slerp: function (qa, qb, qm, t) {
    return qm.copy(qa).slerp(qb, t);
  },
  slerpFlat: function (dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
    // fuzz-free, array-based Quaternion SLERP operation
    var x0 = src0[srcOffset0 + 0],
        y0 = src0[srcOffset0 + 1],
        z0 = src0[srcOffset0 + 2],
        w0 = src0[srcOffset0 + 3],
        x1 = src1[srcOffset1 + 0],
        y1 = src1[srcOffset1 + 1],
        z1 = src1[srcOffset1 + 2],
        w1 = src1[srcOffset1 + 3];

    if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
      var s = 1 - t,
          cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
          dir = cos >= 0 ? 1 : -1,
          sqrSin = 1 - cos * cos; // Skip the Slerp for tiny steps to avoid numeric problems:

      if (sqrSin > Number.EPSILON) {
        var sin = Math.sqrt(sqrSin),
            len = Math.atan2(sin, cos * dir);
        s = Math.sin(s * len) / sin;
        t = Math.sin(t * len) / sin;
      }

      var tDir = t * dir;
      x0 = x0 * s + x1 * tDir;
      y0 = y0 * s + y1 * tDir;
      z0 = z0 * s + z1 * tDir;
      w0 = w0 * s + w1 * tDir; // Normalize in case we just did a lerp:

      if (s === 1 - t) {
        var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
        x0 *= f;
        y0 *= f;
        z0 *= f;
        w0 *= f;
      }
    }

    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w0;
  }
}); // File:src/math/Triangle.js

/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */

THREE.Triangle = function (a, b, c) {
  this.a = a !== undefined ? a : new THREE.Vector3();
  this.b = b !== undefined ? b : new THREE.Vector3();
  this.c = c !== undefined ? c : new THREE.Vector3();
};

THREE.Triangle.normal = function () {
  var v0 = new THREE.Vector3();
  return function (a, b, c, optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    result.subVectors(c, b);
    v0.subVectors(a, b);
    result.cross(v0);
    var resultLengthSq = result.lengthSq();

    if (resultLengthSq > 0) {
      return result.multiplyScalar(1 / Math.sqrt(resultLengthSq));
    }

    return result.set(0, 0, 0);
  };
}(); // static/instance method to calculate barycentric coordinates
// based on: http://www.blackpawn.com/texts/pointinpoly/default.html


THREE.Triangle.barycoordFromPoint = function () {
  var v0 = new THREE.Vector3();
  var v1 = new THREE.Vector3();
  var v2 = new THREE.Vector3();
  return function (point, a, b, c, optionalTarget) {
    v0.subVectors(c, a);
    v1.subVectors(b, a);
    v2.subVectors(point, a);
    var dot00 = v0.dot(v0);
    var dot01 = v0.dot(v1);
    var dot02 = v0.dot(v2);
    var dot11 = v1.dot(v1);
    var dot12 = v1.dot(v2);
    var denom = dot00 * dot11 - dot01 * dot01;
    var result = optionalTarget || new THREE.Vector3(); // collinear or singular triangle

    if (denom === 0) {
      // arbitrary location outside of triangle?
      // not sure if this is the best idea, maybe should be returning undefined
      return result.set(-2, -1, -1);
    }

    var invDenom = 1 / denom;
    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom; // barycentric coordinates must always sum to 1

    return result.set(1 - u - v, v, u);
  };
}();

THREE.Triangle.containsPoint = function () {
  var v1 = new THREE.Vector3();
  return function (point, a, b, c) {
    var result = THREE.Triangle.barycoordFromPoint(point, a, b, c, v1);
    return result.x >= 0 && result.y >= 0 && result.x + result.y <= 1;
  };
}();

THREE.Triangle.prototype = {
  constructor: THREE.Triangle,
  set: function (a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  },
  setFromPointsAndIndices: function (points, i0, i1, i2) {
    this.a.copy(points[i0]);
    this.b.copy(points[i1]);
    this.c.copy(points[i2]);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (triangle) {
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    return this;
  },
  area: function () {
    var v0 = new THREE.Vector3();
    var v1 = new THREE.Vector3();
    return function () {
      v0.subVectors(this.c, this.b);
      v1.subVectors(this.a, this.b);
      return v0.cross(v1).length() * 0.5;
    };
  }(),
  midpoint: function (optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    return result.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  },
  normal: function (optionalTarget) {
    return THREE.Triangle.normal(this.a, this.b, this.c, optionalTarget);
  },
  plane: function (optionalTarget) {
    var result = optionalTarget || new THREE.Plane();
    return result.setFromCoplanarPoints(this.a, this.b, this.c);
  },
  barycoordFromPoint: function (point, optionalTarget) {
    return THREE.Triangle.barycoordFromPoint(point, this.a, this.b, this.c, optionalTarget);
  },
  containsPoint: function (point) {
    return THREE.Triangle.containsPoint(point, this.a, this.b, this.c);
  },
  equals: function (triangle) {
    return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
  }
}; // File:src/math/Box3.js

/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.Box3 = function (min, max) {
  this.min = min !== undefined ? min : new THREE.Vector3(+Infinity, +Infinity, +Infinity);
  this.max = max !== undefined ? max : new THREE.Vector3(-Infinity, -Infinity, -Infinity);
};

THREE.Box3.prototype = {
  constructor: THREE.Box3,
  set: function (min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  },
  setFromArray: function (array) {
    this.makeEmpty();
    var minX = +Infinity;
    var minY = +Infinity;
    var minZ = +Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    var maxZ = -Infinity;

    for (var i = 0, il = array.length; i < il; i += 3) {
      var x = array[i];
      var y = array[i + 1];
      var z = array[i + 2];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (z < minZ) minZ = z;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      if (z > maxZ) maxZ = z;
    }

    this.min.set(minX, minY, minZ);
    this.max.set(maxX, maxY, maxZ);
  },
  setFromPoints: function (points) {
    this.makeEmpty();

    for (var i = 0, il = points.length; i < il; i++) {
      this.expandByPoint(points[i]);
    }

    return this;
  },
  setFromCenterAndSize: function () {
    var v1 = new THREE.Vector3();
    return function (center, size) {
      var halfSize = v1.copy(size).multiplyScalar(0.5);
      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);
      return this;
    };
  }(),
  setFromObject: function () {
    // Computes the world-axis-aligned bounding box of an object (including its children),
    // accounting for both the object's, and children's, world transforms
    var box;
    return function (object) {
      if (box === undefined) box = new THREE.Box3();
      var scope = this;
      this.makeEmpty();
      object.updateMatrixWorld(true);
      object.traverse(function (node) {
        var geometry = node.geometry;

        if (geometry !== undefined) {
          if (geometry.boundingBox === null) {
            geometry.computeBoundingBox();
          }

          if (geometry.boundingBox.isEmpty() === false) {
            box.copy(geometry.boundingBox);
            box.applyMatrix4(node.matrixWorld);
            scope.union(box);
          }
        }
      });
      return this;
    };
  }(),
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  },
  makeEmpty: function () {
    this.min.x = this.min.y = this.min.z = +Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  },
  isEmpty: function () {
    // this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  },
  center: function (optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    return result.addVectors(this.min, this.max).multiplyScalar(0.5);
  },
  size: function (optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    return result.subVectors(this.max, this.min);
  },
  expandByPoint: function (point) {
    this.min.min(point);
    this.max.max(point);
    return this;
  },
  expandByVector: function (vector) {
    this.min.sub(vector);
    this.max.add(vector);
    return this;
  },
  expandByScalar: function (scalar) {
    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);
    return this;
  },
  containsPoint: function (point) {
    if (point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z) {
      return false;
    }

    return true;
  },
  containsBox: function (box) {
    if (this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z) {
      return true;
    }

    return false;
  },
  getParameter: function (point, optionalTarget) {
    // This can potentially have a divide by zero if the box
    // has a size dimension of 0.
    var result = optionalTarget || new THREE.Vector3();
    return result.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y), (point.z - this.min.z) / (this.max.z - this.min.z));
  },
  intersectsBox: function (box) {
    // using 6 splitting planes to rule out intersections.
    if (box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z) {
      return false;
    }

    return true;
  },
  intersectsSphere: function () {
    var closestPoint;
    return function intersectsSphere(sphere) {
      if (closestPoint === undefined) closestPoint = new THREE.Vector3(); // Find the point on the AABB closest to the sphere center.

      this.clampPoint(sphere.center, closestPoint); // If that point is inside the sphere, the AABB and sphere intersect.

      return closestPoint.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
    };
  }(),
  intersectsPlane: function (plane) {
    // We compute the minimum and maximum dot product values. If those values
    // are on the same side (back or front) of the plane, then there is no intersection.
    var min, max;

    if (plane.normal.x > 0) {
      min = plane.normal.x * this.min.x;
      max = plane.normal.x * this.max.x;
    } else {
      min = plane.normal.x * this.max.x;
      max = plane.normal.x * this.min.x;
    }

    if (plane.normal.y > 0) {
      min += plane.normal.y * this.min.y;
      max += plane.normal.y * this.max.y;
    } else {
      min += plane.normal.y * this.max.y;
      max += plane.normal.y * this.min.y;
    }

    if (plane.normal.z > 0) {
      min += plane.normal.z * this.min.z;
      max += plane.normal.z * this.max.z;
    } else {
      min += plane.normal.z * this.max.z;
      max += plane.normal.z * this.min.z;
    }

    return min <= plane.constant && max >= plane.constant;
  },
  clampPoint: function (point, optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    return result.copy(point).clamp(this.min, this.max);
  },
  distanceToPoint: function () {
    var v1 = new THREE.Vector3();
    return function (point) {
      var clampedPoint = v1.copy(point).clamp(this.min, this.max);
      return clampedPoint.sub(point).length();
    };
  }(),
  getBoundingSphere: function () {
    var v1 = new THREE.Vector3();
    return function (optionalTarget) {
      var result = optionalTarget || new THREE.Sphere();
      result.center = this.center();
      result.radius = this.size(v1).length() * 0.5;
      return result;
    };
  }(),
  intersect: function (box) {
    this.min.max(box.min);
    this.max.min(box.max);
    return this;
  },
  union: function (box) {
    this.min.min(box.min);
    this.max.max(box.max);
    return this;
  },
  applyMatrix4: function () {
    var points = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
    return function (matrix) {
      // NOTE: I am using a binary pattern to specify all 2^3 combinations below
      points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix); // 000

      points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix); // 001

      points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix); // 010

      points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix); // 011

      points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix); // 100

      points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix); // 101

      points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix); // 110

      points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix); // 111

      this.makeEmpty();
      this.setFromPoints(points);
      return this;
    };
  }(),
  translate: function (offset) {
    this.min.add(offset);
    this.max.add(offset);
    return this;
  },
  equals: function (box) {
    return box.min.equals(this.min) && box.max.equals(this.max);
  }
}; // File:src/math/Euler.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */

THREE.Euler = function (x, y, z, order) {
  this._x = x || 0;
  this._y = y || 0;
  this._z = z || 0;
  this._order = order || THREE.Euler.DefaultOrder;
};

THREE.Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
THREE.Euler.DefaultOrder = 'XYZ';
THREE.Euler.prototype = {
  constructor: THREE.Euler,

  get x() {
    return this._x;
  },

  set x(value) {
    this._x = value;
    this.onChangeCallback();
  },

  get y() {
    return this._y;
  },

  set y(value) {
    this._y = value;
    this.onChangeCallback();
  },

  get z() {
    return this._z;
  },

  set z(value) {
    this._z = value;
    this.onChangeCallback();
  },

  get order() {
    return this._order;
  },

  set order(value) {
    this._order = value;
    this.onChangeCallback();
  },

  set: function (x, y, z, order) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order || this._order;
    this.onChangeCallback();
    return this;
  },
  clone: function () {
    return new this.constructor(this._x, this._y, this._z, this._order);
  },
  copy: function (euler) {
    this._x = euler._x;
    this._y = euler._y;
    this._z = euler._z;
    this._order = euler._order;
    this.onChangeCallback();
    return this;
  },
  setFromRotationMatrix: function (m, order, update) {
    var clamp = THREE.Math.clamp; // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

    var te = m.elements;
    var m11 = te[0],
        m12 = te[4],
        m13 = te[8];
    var m21 = te[1],
        m22 = te[5],
        m23 = te[9];
    var m31 = te[2],
        m32 = te[6],
        m33 = te[10];
    order = order || this._order;

    if (order === 'XYZ') {
      this._y = Math.asin(clamp(m13, -1, 1));

      if (Math.abs(m13) < 0.99999) {
        this._x = Math.atan2(-m23, m33);
        this._z = Math.atan2(-m12, m11);
      } else {
        this._x = Math.atan2(m32, m22);
        this._z = 0;
      }
    } else if (order === 'YXZ') {
      this._x = Math.asin(-clamp(m23, -1, 1));

      if (Math.abs(m23) < 0.99999) {
        this._y = Math.atan2(m13, m33);
        this._z = Math.atan2(m21, m22);
      } else {
        this._y = Math.atan2(-m31, m11);
        this._z = 0;
      }
    } else if (order === 'ZXY') {
      this._x = Math.asin(clamp(m32, -1, 1));

      if (Math.abs(m32) < 0.99999) {
        this._y = Math.atan2(-m31, m33);
        this._z = Math.atan2(-m12, m22);
      } else {
        this._y = 0;
        this._z = Math.atan2(m21, m11);
      }
    } else if (order === 'ZYX') {
      this._y = Math.asin(-clamp(m31, -1, 1));

      if (Math.abs(m31) < 0.99999) {
        this._x = Math.atan2(m32, m33);
        this._z = Math.atan2(m21, m11);
      } else {
        this._x = 0;
        this._z = Math.atan2(-m12, m22);
      }
    } else if (order === 'YZX') {
      this._z = Math.asin(clamp(m21, -1, 1));

      if (Math.abs(m21) < 0.99999) {
        this._x = Math.atan2(-m23, m22);
        this._y = Math.atan2(-m31, m11);
      } else {
        this._x = 0;
        this._y = Math.atan2(m13, m33);
      }
    } else if (order === 'XZY') {
      this._z = Math.asin(-clamp(m12, -1, 1));

      if (Math.abs(m12) < 0.99999) {
        this._x = Math.atan2(m32, m22);
        this._y = Math.atan2(m13, m11);
      } else {
        this._x = Math.atan2(-m23, m33);
        this._y = 0;
      }
    }

    this._order = order;
    if (update !== false) this.onChangeCallback();
    return this;
  },
  setFromQuaternion: function () {
    var matrix;
    return function (q, order, update) {
      if (matrix === undefined) matrix = new THREE.Matrix4();
      matrix.makeRotationFromQuaternion(q);
      this.setFromRotationMatrix(matrix, order, update);
      return this;
    };
  }(),
  setFromVector3: function (v, order) {
    return this.set(v.x, v.y, v.z, order || this._order);
  },
  reorder: function () {
    // WARNING: this discards revolution information -bhouston
    var q = new THREE.Quaternion();
    return function (newOrder) {
      q.setFromEuler(this);
      this.setFromQuaternion(q, newOrder);
    };
  }(),
  equals: function (euler) {
    return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
  },
  fromArray: function (array) {
    this._x = array[0];
    this._y = array[1];
    this._z = array[2];
    if (array[3] !== undefined) this._order = array[3];
    this.onChangeCallback();
    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._order;
    return array;
  },
  toVector3: function (optionalResult) {
    if (optionalResult) {
      return optionalResult.set(this._x, this._y, this._z);
    } else {
      return new THREE.Vector3(this._x, this._y, this._z);
    }
  },
  onChange: function (callback) {
    this.onChangeCallback = callback;
    return this;
  },
  onChangeCallback: function () {}
}; // File:src/math/Ray.js

/**
 * @author bhouston / http://clara.io
 */

THREE.Ray = function (origin, direction) {
  this.origin = origin !== undefined ? origin : new THREE.Vector3();
  this.direction = direction !== undefined ? direction : new THREE.Vector3();
};

THREE.Ray.prototype = {
  constructor: THREE.Ray,
  set: function (origin, direction) {
    this.origin.copy(origin);
    this.direction.copy(direction);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (ray) {
    this.origin.copy(ray.origin);
    this.direction.copy(ray.direction);
    return this;
  },
  at: function (t, optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    return result.copy(this.direction).multiplyScalar(t).add(this.origin);
  },
  lookAt: function (v) {
    this.direction.copy(v).sub(this.origin).normalize();
  },
  recast: function () {
    var v1 = new THREE.Vector3();
    return function (t) {
      this.origin.copy(this.at(t, v1));
      return this;
    };
  }(),
  closestPointToPoint: function (point, optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    result.subVectors(point, this.origin);
    var directionDistance = result.dot(this.direction);

    if (directionDistance < 0) {
      return result.copy(this.origin);
    }

    return result.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
  },
  distanceToPoint: function (point) {
    return Math.sqrt(this.distanceSqToPoint(point));
  },
  distanceSqToPoint: function () {
    var v1 = new THREE.Vector3();
    return function (point) {
      var directionDistance = v1.subVectors(point, this.origin).dot(this.direction); // point behind the ray

      if (directionDistance < 0) {
        return this.origin.distanceToSquared(point);
      }

      v1.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
      return v1.distanceToSquared(point);
    };
  }(),
  distanceSqToSegment: function () {
    var segCenter = new THREE.Vector3();
    var segDir = new THREE.Vector3();
    var diff = new THREE.Vector3();
    return function (v0, v1, optionalPointOnRay, optionalPointOnSegment) {
      // from http://www.geometrictools.com/LibMathematics/Distance/Wm5DistRay3Segment3.cpp
      // It returns the min distance between the ray and the segment
      // defined by v0 and v1
      // It can also set two optional targets :
      // - The closest point on the ray
      // - The closest point on the segment
      segCenter.copy(v0).add(v1).multiplyScalar(0.5);
      segDir.copy(v1).sub(v0).normalize();
      diff.copy(this.origin).sub(segCenter);
      var segExtent = v0.distanceTo(v1) * 0.5;
      var a01 = -this.direction.dot(segDir);
      var b0 = diff.dot(this.direction);
      var b1 = -diff.dot(segDir);
      var c = diff.lengthSq();
      var det = Math.abs(1 - a01 * a01);
      var s0, s1, sqrDist, extDet;

      if (det > 0) {
        // The ray and segment are not parallel.
        s0 = a01 * b1 - b0;
        s1 = a01 * b0 - b1;
        extDet = segExtent * det;

        if (s0 >= 0) {
          if (s1 >= -extDet) {
            if (s1 <= extDet) {
              // region 0
              // Minimum at interior points of ray and segment.
              var invDet = 1 / det;
              s0 *= invDet;
              s1 *= invDet;
              sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
            } else {
              // region 1
              s1 = segExtent;
              s0 = Math.max(0, -(a01 * s1 + b0));
              sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
            }
          } else {
            // region 5
            s1 = -segExtent;
            s0 = Math.max(0, -(a01 * s1 + b0));
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        } else {
          if (s1 <= -extDet) {
            // region 4
            s0 = Math.max(0, -(-a01 * segExtent + b0));
            s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          } else if (s1 <= extDet) {
            // region 3
            s0 = 0;
            s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = s1 * (s1 + 2 * b1) + c;
          } else {
            // region 2
            s0 = Math.max(0, -(a01 * segExtent + b0));
            s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        }
      } else {
        // Ray and segment are parallel.
        s1 = a01 > 0 ? -segExtent : segExtent;
        s0 = Math.max(0, -(a01 * s1 + b0));
        sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
      }

      if (optionalPointOnRay) {
        optionalPointOnRay.copy(this.direction).multiplyScalar(s0).add(this.origin);
      }

      if (optionalPointOnSegment) {
        optionalPointOnSegment.copy(segDir).multiplyScalar(s1).add(segCenter);
      }

      return sqrDist;
    };
  }(),
  intersectSphere: function () {
    var v1 = new THREE.Vector3();
    return function (sphere, optionalTarget) {
      v1.subVectors(sphere.center, this.origin);
      var tca = v1.dot(this.direction);
      var d2 = v1.dot(v1) - tca * tca;
      var radius2 = sphere.radius * sphere.radius;
      if (d2 > radius2) return null;
      var thc = Math.sqrt(radius2 - d2); // t0 = first intersect point - entrance on front of sphere

      var t0 = tca - thc; // t1 = second intersect point - exit point on back of sphere

      var t1 = tca + thc; // test to see if both t0 and t1 are behind the ray - if so, return null

      if (t0 < 0 && t1 < 0) return null; // test to see if t0 is behind the ray:
      // if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
      // in order to always return an intersect point that is in front of the ray.

      if (t0 < 0) return this.at(t1, optionalTarget); // else t0 is in front of the ray, so return the first collision point scaled by t0

      return this.at(t0, optionalTarget);
    };
  }(),
  intersectsSphere: function (sphere) {
    return this.distanceToPoint(sphere.center) <= sphere.radius;
  },
  distanceToPlane: function (plane) {
    var denominator = plane.normal.dot(this.direction);

    if (denominator === 0) {
      // line is coplanar, return origin
      if (plane.distanceToPoint(this.origin) === 0) {
        return 0;
      } // Null is preferable to undefined since undefined means.... it is undefined


      return null;
    }

    var t = -(this.origin.dot(plane.normal) + plane.constant) / denominator; // Return if the ray never intersects the plane

    return t >= 0 ? t : null;
  },
  intersectPlane: function (plane, optionalTarget) {
    var t = this.distanceToPlane(plane);

    if (t === null) {
      return null;
    }

    return this.at(t, optionalTarget);
  },
  intersectsPlane: function (plane) {
    // check if the ray lies on the plane first
    var distToPoint = plane.distanceToPoint(this.origin);

    if (distToPoint === 0) {
      return true;
    }

    var denominator = plane.normal.dot(this.direction);

    if (denominator * distToPoint < 0) {
      return true;
    } // ray origin is behind the plane (and is pointing behind it)


    return false;
  },
  intersectBox: function (box, optionalTarget) {
    var tmin, tmax, tymin, tymax, tzmin, tzmax;
    var invdirx = 1 / this.direction.x,
        invdiry = 1 / this.direction.y,
        invdirz = 1 / this.direction.z;
    var origin = this.origin;

    if (invdirx >= 0) {
      tmin = (box.min.x - origin.x) * invdirx;
      tmax = (box.max.x - origin.x) * invdirx;
    } else {
      tmin = (box.max.x - origin.x) * invdirx;
      tmax = (box.min.x - origin.x) * invdirx;
    }

    if (invdiry >= 0) {
      tymin = (box.min.y - origin.y) * invdiry;
      tymax = (box.max.y - origin.y) * invdiry;
    } else {
      tymin = (box.max.y - origin.y) * invdiry;
      tymax = (box.min.y - origin.y) * invdiry;
    }

    if (tmin > tymax || tymin > tmax) return null; // These lines also handle the case where tmin or tmax is NaN
    // (result of 0 * Infinity). x !== x returns true if x is NaN

    if (tymin > tmin || tmin !== tmin) tmin = tymin;
    if (tymax < tmax || tmax !== tmax) tmax = tymax;

    if (invdirz >= 0) {
      tzmin = (box.min.z - origin.z) * invdirz;
      tzmax = (box.max.z - origin.z) * invdirz;
    } else {
      tzmin = (box.max.z - origin.z) * invdirz;
      tzmax = (box.min.z - origin.z) * invdirz;
    }

    if (tmin > tzmax || tzmin > tmax) return null;
    if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
    if (tzmax < tmax || tmax !== tmax) tmax = tzmax; //return point closest to the ray (positive side)

    if (tmax < 0) return null;
    return this.at(tmin >= 0 ? tmin : tmax, optionalTarget);
  },
  intersectsBox: function () {
    var v = new THREE.Vector3();
    return function (box) {
      return this.intersectBox(box, v) !== null;
    };
  }(),
  intersectTriangle: function () {
    // Compute the offset origin, edges, and normal.
    var diff = new THREE.Vector3();
    var edge1 = new THREE.Vector3();
    var edge2 = new THREE.Vector3();
    var normal = new THREE.Vector3();
    return function (a, b, c, backfaceCulling, optionalTarget) {
      // from http://www.geometrictools.com/LibMathematics/Intersection/Wm5IntrRay3Triangle3.cpp
      edge1.subVectors(b, a);
      edge2.subVectors(c, a);
      normal.crossVectors(edge1, edge2); // Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
      // E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
      //   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
      //   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
      //   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)

      var DdN = this.direction.dot(normal);
      var sign;

      if (DdN > 0) {
        if (backfaceCulling) return null;
        sign = 1;
      } else if (DdN < 0) {
        sign = -1;
        DdN = -DdN;
      } else {
        return null;
      }

      diff.subVectors(this.origin, a);
      var DdQxE2 = sign * this.direction.dot(edge2.crossVectors(diff, edge2)); // b1 < 0, no intersection

      if (DdQxE2 < 0) {
        return null;
      }

      var DdE1xQ = sign * this.direction.dot(edge1.cross(diff)); // b2 < 0, no intersection

      if (DdE1xQ < 0) {
        return null;
      } // b1+b2 > 1, no intersection


      if (DdQxE2 + DdE1xQ > DdN) {
        return null;
      } // Line intersects triangle, check if ray does.


      var QdN = -sign * diff.dot(normal); // t < 0, no intersection

      if (QdN < 0) {
        return null;
      } // Ray intersects triangle.


      return this.at(QdN / DdN, optionalTarget);
    };
  }(),
  applyMatrix4: function (matrix4) {
    this.direction.add(this.origin).applyMatrix4(matrix4);
    this.origin.applyMatrix4(matrix4);
    this.direction.sub(this.origin);
    this.direction.normalize();
    return this;
  },
  equals: function (ray) {
    return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
  }
}; // File:src/math/Sphere.js

/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */

THREE.Sphere = function (center, radius) {
  this.center = center !== undefined ? center : new THREE.Vector3();
  this.radius = radius !== undefined ? radius : 0;
};

THREE.Sphere.prototype = {
  constructor: THREE.Sphere,
  set: function (center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  },
  setFromPoints: function () {
    var box = new THREE.Box3();
    return function (points, optionalCenter) {
      var center = this.center;

      if (optionalCenter !== undefined) {
        center.copy(optionalCenter);
      } else {
        box.setFromPoints(points).center(center);
      }

      var maxRadiusSq = 0;

      for (var i = 0, il = points.length; i < il; i++) {
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
      }

      this.radius = Math.sqrt(maxRadiusSq);
      return this;
    };
  }(),
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (sphere) {
    this.center.copy(sphere.center);
    this.radius = sphere.radius;
    return this;
  },
  empty: function () {
    return this.radius <= 0;
  },
  containsPoint: function (point) {
    return point.distanceToSquared(this.center) <= this.radius * this.radius;
  },
  distanceToPoint: function (point) {
    return point.distanceTo(this.center) - this.radius;
  },
  intersectsSphere: function (sphere) {
    var radiusSum = this.radius + sphere.radius;
    return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
  },
  intersectsBox: function (box) {
    return box.intersectsSphere(this);
  },
  intersectsPlane: function (plane) {
    // We use the following equation to compute the signed distance from
    // the center of the sphere to the plane.
    //
    // distance = q * n - d
    //
    // If this distance is greater than the radius of the sphere,
    // then there is no intersection.
    return Math.abs(this.center.dot(plane.normal) - plane.constant) <= this.radius;
  },
  clampPoint: function (point, optionalTarget) {
    var deltaLengthSq = this.center.distanceToSquared(point);
    var result = optionalTarget || new THREE.Vector3();
    result.copy(point);

    if (deltaLengthSq > this.radius * this.radius) {
      result.sub(this.center).normalize();
      result.multiplyScalar(this.radius).add(this.center);
    }

    return result;
  },
  getBoundingBox: function (optionalTarget) {
    var box = optionalTarget || new THREE.Box3();
    box.set(this.center, this.center);
    box.expandByScalar(this.radius);
    return box;
  },
  applyMatrix4: function (matrix) {
    this.center.applyMatrix4(matrix);
    this.radius = this.radius * matrix.getMaxScaleOnAxis();
    return this;
  },
  translate: function (offset) {
    this.center.add(offset);
    return this;
  },
  equals: function (sphere) {
    return sphere.center.equals(this.center) && sphere.radius === this.radius;
  }
}; // File:src/math/Frustum.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / http://clara.io
 */

THREE.Frustum = function (p0, p1, p2, p3, p4, p5) {
  this.planes = [p0 !== undefined ? p0 : new THREE.Plane(), p1 !== undefined ? p1 : new THREE.Plane(), p2 !== undefined ? p2 : new THREE.Plane(), p3 !== undefined ? p3 : new THREE.Plane(), p4 !== undefined ? p4 : new THREE.Plane(), p5 !== undefined ? p5 : new THREE.Plane()];
};

THREE.Frustum.prototype = {
  constructor: THREE.Frustum,
  set: function (p0, p1, p2, p3, p4, p5) {
    var planes = this.planes;
    planes[0].copy(p0);
    planes[1].copy(p1);
    planes[2].copy(p2);
    planes[3].copy(p3);
    planes[4].copy(p4);
    planes[5].copy(p5);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (frustum) {
    var planes = this.planes;

    for (var i = 0; i < 6; i++) {
      planes[i].copy(frustum.planes[i]);
    }

    return this;
  },
  setFromMatrix: function (m) {
    var planes = this.planes;
    var me = m.elements;
    var me0 = me[0],
        me1 = me[1],
        me2 = me[2],
        me3 = me[3];
    var me4 = me[4],
        me5 = me[5],
        me6 = me[6],
        me7 = me[7];
    var me8 = me[8],
        me9 = me[9],
        me10 = me[10],
        me11 = me[11];
    var me12 = me[12],
        me13 = me[13],
        me14 = me[14],
        me15 = me[15];
    planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
    planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
    planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
    planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
    planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();
    planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
    return this;
  },
  intersectsObject: function () {
    var sphere = new THREE.Sphere();
    return function (object) {
      var geometry = object.geometry;
      if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
      sphere.copy(geometry.boundingSphere);
      sphere.applyMatrix4(object.matrixWorld);
      return this.intersectsSphere(sphere);
    };
  }(),
  intersectsSphere: function (sphere) {
    var planes = this.planes;
    var center = sphere.center;
    var negRadius = -sphere.radius;

    for (var i = 0; i < 6; i++) {
      var distance = planes[i].distanceToPoint(center);

      if (distance < negRadius) {
        return false;
      }
    }

    return true;
  },
  intersectsBox: function () {
    var p1 = new THREE.Vector3(),
        p2 = new THREE.Vector3();
    return function (box) {
      var planes = this.planes;

      for (var i = 0; i < 6; i++) {
        var plane = planes[i];
        p1.x = plane.normal.x > 0 ? box.min.x : box.max.x;
        p2.x = plane.normal.x > 0 ? box.max.x : box.min.x;
        p1.y = plane.normal.y > 0 ? box.min.y : box.max.y;
        p2.y = plane.normal.y > 0 ? box.max.y : box.min.y;
        p1.z = plane.normal.z > 0 ? box.min.z : box.max.z;
        p2.z = plane.normal.z > 0 ? box.max.z : box.min.z;
        var d1 = plane.distanceToPoint(p1);
        var d2 = plane.distanceToPoint(p2); // if both outside plane, no intersection

        if (d1 < 0 && d2 < 0) {
          return false;
        }
      }

      return true;
    };
  }(),
  containsPoint: function (point) {
    var planes = this.planes;

    for (var i = 0; i < 6; i++) {
      if (planes[i].distanceToPoint(point) < 0) {
        return false;
      }
    }

    return true;
  }
}; // File:src/core/EventDispatcher.js

/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */

THREE.EventDispatcher = function () {};

THREE.EventDispatcher.prototype = {
  constructor: THREE.EventDispatcher,
  apply: function (object) {
    object.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
    object.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
    object.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
    object.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent;
  },
  addEventListener: function (type, listener) {
    if (this._listeners === undefined) this._listeners = {};
    var listeners = this._listeners;

    if (listeners[type] === undefined) {
      listeners[type] = [];
    }

    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  },
  hasEventListener: function (type, listener) {
    if (this._listeners === undefined) return false;
    var listeners = this._listeners;

    if (listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1) {
      return true;
    }

    return false;
  },
  removeEventListener: function (type, listener) {
    if (this._listeners === undefined) return;
    var listeners = this._listeners;
    var listenerArray = listeners[type];

    if (listenerArray !== undefined) {
      var index = listenerArray.indexOf(listener);

      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  },
  dispatchEvent: function (event) {
    if (this._listeners === undefined) return;
    var listeners = this._listeners;
    var listenerArray = listeners[event.type];

    if (listenerArray !== undefined) {
      event.target = this;
      var array = [];
      var length = listenerArray.length;

      for (var i = 0; i < length; i++) {
        array[i] = listenerArray[i];
      }

      for (var i = 0; i < length; i++) {
        array[i].call(this, event);
      }
    }
  }
}; // File:src/core/Layers.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.Layers = function () {
  this.mask = 1;
};

THREE.Layers.prototype = {
  constructor: THREE.Layers,
  set: function (channel) {
    this.mask = 1 << channel;
  },
  enable: function (channel) {
    this.mask |= 1 << channel;
  },
  toggle: function (channel) {
    this.mask ^= 1 << channel;
  },
  disable: function (channel) {
    this.mask &= ~(1 << channel);
  },
  test: function (layers) {
    return (this.mask & layers.mask) !== 0;
  }
}; // File:src/core/Object3D.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author elephantatwork / www.elephantatwork.ch
 */

THREE.Object3D = function () {
  Object.defineProperty(this, 'id', {
    value: THREE.Object3DIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = '';
  this.type = 'Object3D';
  this.parent = null;
  this.children = [];
  this.up = THREE.Object3D.DefaultUp.clone();
  var position = new THREE.Vector3();
  var rotation = new THREE.Euler();
  var quaternion = new THREE.Quaternion();
  var scale = new THREE.Vector3(1, 1, 1);

  function onRotationChange() {
    quaternion.setFromEuler(rotation, false);
  }

  function onQuaternionChange() {
    rotation.setFromQuaternion(quaternion, undefined, false);
  }

  rotation.onChange(onRotationChange);
  quaternion.onChange(onQuaternionChange);
  Object.defineProperties(this, {
    position: {
      enumerable: true,
      value: position
    },
    rotation: {
      enumerable: true,
      value: rotation
    },
    quaternion: {
      enumerable: true,
      value: quaternion
    },
    scale: {
      enumerable: true,
      value: scale
    },
    modelViewMatrix: {
      value: new THREE.Matrix4()
    },
    normalMatrix: {
      value: new THREE.Matrix3()
    }
  });
  this.rotationAutoUpdate = true;
  this.matrix = new THREE.Matrix4();
  this.matrixWorld = new THREE.Matrix4();
  this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate;
  this.matrixWorldNeedsUpdate = false;
  this.layers = new THREE.Layers();
  this.visible = true;
  this.castShadow = false;
  this.receiveShadow = false;
  this.frustumCulled = true;
  this.renderOrder = 0;
  this.userData = {};
};

THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0);
THREE.Object3D.DefaultMatrixAutoUpdate = true;
THREE.Object3D.prototype = {
  constructor: THREE.Object3D,
  applyMatrix: function (matrix) {
    this.matrix.multiplyMatrices(matrix, this.matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  },
  setRotationFromAxisAngle: function (axis, angle) {
    // assumes axis is normalized
    this.quaternion.setFromAxisAngle(axis, angle);
  },
  setRotationFromEuler: function (euler) {
    this.quaternion.setFromEuler(euler, true);
  },
  setRotationFromMatrix: function (m) {
    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    this.quaternion.setFromRotationMatrix(m);
  },
  setRotationFromQuaternion: function (q) {
    // assumes q is normalized
    this.quaternion.copy(q);
  },
  rotateOnAxis: function () {
    // rotate object on axis in object space
    // axis is assumed to be normalized
    var q1 = new THREE.Quaternion();
    return function (axis, angle) {
      q1.setFromAxisAngle(axis, angle);
      this.quaternion.multiply(q1);
      return this;
    };
  }(),
  rotateX: function () {
    var v1 = new THREE.Vector3(1, 0, 0);
    return function (angle) {
      return this.rotateOnAxis(v1, angle);
    };
  }(),
  rotateY: function () {
    var v1 = new THREE.Vector3(0, 1, 0);
    return function (angle) {
      return this.rotateOnAxis(v1, angle);
    };
  }(),
  rotateZ: function () {
    var v1 = new THREE.Vector3(0, 0, 1);
    return function (angle) {
      return this.rotateOnAxis(v1, angle);
    };
  }(),
  translateOnAxis: function () {
    // translate object by distance along axis in object space
    // axis is assumed to be normalized
    var v1 = new THREE.Vector3();
    return function (axis, distance) {
      v1.copy(axis).applyQuaternion(this.quaternion);
      this.position.add(v1.multiplyScalar(distance));
      return this;
    };
  }(),
  translateX: function () {
    var v1 = new THREE.Vector3(1, 0, 0);
    return function (distance) {
      return this.translateOnAxis(v1, distance);
    };
  }(),
  translateY: function () {
    var v1 = new THREE.Vector3(0, 1, 0);
    return function (distance) {
      return this.translateOnAxis(v1, distance);
    };
  }(),
  translateZ: function () {
    var v1 = new THREE.Vector3(0, 0, 1);
    return function (distance) {
      return this.translateOnAxis(v1, distance);
    };
  }(),
  localToWorld: function (vector) {
    return vector.applyMatrix4(this.matrixWorld);
  },
  worldToLocal: function () {
    var m1 = new THREE.Matrix4();
    return function (vector) {
      return vector.applyMatrix4(m1.getInverse(this.matrixWorld));
    };
  }(),
  lookAt: function () {
    // This routine does not support objects with rotated and/or translated parent(s)
    var m1 = new THREE.Matrix4();
    return function (vector) {
      m1.lookAt(vector, this.position, this.up);
      this.quaternion.setFromRotationMatrix(m1);
    };
  }(),
  add: function (object) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }

      return this;
    }

    if (object === this) {
      return this;
    }

    if (object instanceof THREE.Object3D) {
      if (object.parent !== null) {
        object.parent.remove(object);
      }

      object.parent = this;
      object.dispatchEvent({
        type: 'added'
      });
      this.children.push(object);
    }

    return this;
  },
  remove: function (object) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.remove(arguments[i]);
      }
    }

    var index = this.children.indexOf(object);

    if (index !== -1) {
      object.parent = null;
      object.dispatchEvent({
        type: 'removed'
      });
      this.children.splice(index, 1);
    }
  },
  getObjectById: function (id) {
    return this.getObjectByProperty('id', id);
  },
  getObjectByName: function (name) {
    return this.getObjectByProperty('name', name);
  },
  getObjectByProperty: function (name, value) {
    if (this[name] === value) return this;

    for (var i = 0, l = this.children.length; i < l; i++) {
      var child = this.children[i];
      var object = child.getObjectByProperty(name, value);

      if (object !== undefined) {
        return object;
      }
    }

    return undefined;
  },
  getWorldPosition: function (optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    this.updateMatrixWorld(true);
    return result.setFromMatrixPosition(this.matrixWorld);
  },
  getWorldQuaternion: function () {
    var position = new THREE.Vector3();
    var scale = new THREE.Vector3();
    return function (optionalTarget) {
      var result = optionalTarget || new THREE.Quaternion();
      this.updateMatrixWorld(true);
      this.matrixWorld.decompose(position, result, scale);
      return result;
    };
  }(),
  getWorldRotation: function () {
    var quaternion = new THREE.Quaternion();
    return function (optionalTarget) {
      var result = optionalTarget || new THREE.Euler();
      this.getWorldQuaternion(quaternion);
      return result.setFromQuaternion(quaternion, this.rotation.order, false);
    };
  }(),
  getWorldScale: function () {
    var position = new THREE.Vector3();
    var quaternion = new THREE.Quaternion();
    return function (optionalTarget) {
      var result = optionalTarget || new THREE.Vector3();
      this.updateMatrixWorld(true);
      this.matrixWorld.decompose(position, quaternion, result);
      return result;
    };
  }(),
  getWorldDirection: function () {
    var quaternion = new THREE.Quaternion();
    return function (optionalTarget) {
      var result = optionalTarget || new THREE.Vector3();
      this.getWorldQuaternion(quaternion);
      return result.set(0, 0, 1).applyQuaternion(quaternion);
    };
  }(),
  raycast: function () {},
  traverse: function (callback) {
    callback(this);
    var children = this.children;

    for (var i = 0, l = children.length; i < l; i++) {
      children[i].traverse(callback);
    }
  },
  traverseVisible: function (callback) {
    if (this.visible === false) return;
    callback(this);
    var children = this.children;

    for (var i = 0, l = children.length; i < l; i++) {
      children[i].traverseVisible(callback);
    }
  },
  traverseAncestors: function (callback) {
    var parent = this.parent;

    if (parent !== null) {
      callback(parent);
      parent.traverseAncestors(callback);
    }
  },
  updateMatrix: function () {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  },
  updateMatrixWorld: function (force) {
    if (this.matrixAutoUpdate === true) this.updateMatrix();

    if (this.matrixWorldNeedsUpdate === true || force === true) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }

      this.matrixWorldNeedsUpdate = false;
      force = true;
    } // update children


    for (var i = 0, l = this.children.length; i < l; i++) {
      this.children[i].updateMatrixWorld(force);
    }
  },
  toJSON: function (meta) {
    var isRootObject = meta === undefined;
    var output = {}; // meta is a hash used to collect geometries, materials.
    // not providing it implies that this is the root object
    // being serialized.

    if (isRootObject) {
      // initialize meta obj
      meta = {
        geometries: {},
        materials: {},
        textures: {},
        images: {}
      };
      output.metadata = {
        version: 4.4,
        type: 'Object',
        generator: 'Object3D.toJSON'
      };
    } // standard Object3D serialization


    var object = {};
    object.uuid = this.uuid;
    object.type = this.type;
    if (this.name !== '') object.name = this.name;
    if (JSON.stringify(this.userData) !== '{}') object.userData = this.userData;
    if (this.castShadow === true) object.castShadow = true;
    if (this.receiveShadow === true) object.receiveShadow = true;
    if (this.visible === false) object.visible = false;
    object.matrix = this.matrix.toArray(); //

    if (this.geometry !== undefined) {
      if (meta.geometries[this.geometry.uuid] === undefined) {
        meta.geometries[this.geometry.uuid] = this.geometry.toJSON(meta);
      }

      object.geometry = this.geometry.uuid;
    }

    if (this.material !== undefined) {
      if (meta.materials[this.material.uuid] === undefined) {
        meta.materials[this.material.uuid] = this.material.toJSON(meta);
      }

      object.material = this.material.uuid;
    } //


    if (this.children.length > 0) {
      object.children = [];

      for (var i = 0; i < this.children.length; i++) {
        object.children.push(this.children[i].toJSON(meta).object);
      }
    }

    if (isRootObject) {
      var geometries = extractFromCache(meta.geometries);
      var materials = extractFromCache(meta.materials);
      var textures = extractFromCache(meta.textures);
      var images = extractFromCache(meta.images);
      if (geometries.length > 0) output.geometries = geometries;
      if (materials.length > 0) output.materials = materials;
      if (textures.length > 0) output.textures = textures;
      if (images.length > 0) output.images = images;
    }

    output.object = object;
    return output; // extract data from the cache hash
    // remove metadata on each item
    // and return as array

    function extractFromCache(cache) {
      var values = [];

      for (var key in cache) {
        var data = cache[key];
        delete data.metadata;
        values.push(data);
      }

      return values;
    }
  },
  clone: function (recursive) {
    return new this.constructor().copy(this, recursive);
  },
  copy: function (source, recursive) {
    if (recursive === undefined) recursive = true;
    this.name = source.name;
    this.up.copy(source.up);
    this.position.copy(source.position);
    this.quaternion.copy(source.quaternion);
    this.scale.copy(source.scale);
    this.rotationAutoUpdate = source.rotationAutoUpdate;
    this.matrix.copy(source.matrix);
    this.matrixWorld.copy(source.matrixWorld);
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
    this.visible = source.visible;
    this.castShadow = source.castShadow;
    this.receiveShadow = source.receiveShadow;
    this.frustumCulled = source.frustumCulled;
    this.renderOrder = source.renderOrder;
    this.userData = JSON.parse(JSON.stringify(source.userData));

    if (recursive === true) {
      for (var i = 0; i < source.children.length; i++) {
        var child = source.children[i];
        this.add(child.clone());
      }
    }

    return this;
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount = 0; // File:src/core/Face3.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Face3 = function (a, b, c, normal, color, materialIndex) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.normal = normal instanceof THREE.Vector3 ? normal : new THREE.Vector3();
  this.vertexNormals = Array.isArray(normal) ? normal : [];
  this.color = color instanceof THREE.Color ? color : new THREE.Color();
  this.vertexColors = Array.isArray(color) ? color : [];
  this.materialIndex = materialIndex !== undefined ? materialIndex : 0;
};

THREE.Face3.prototype = {
  constructor: THREE.Face3,
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (source) {
    this.a = source.a;
    this.b = source.b;
    this.c = source.c;
    this.normal.copy(source.normal);
    this.color.copy(source.color);
    this.materialIndex = source.materialIndex;

    for (var i = 0, il = source.vertexNormals.length; i < il; i++) {
      this.vertexNormals[i] = source.vertexNormals[i].clone();
    }

    for (var i = 0, il = source.vertexColors.length; i < il; i++) {
      this.vertexColors[i] = source.vertexColors[i].clone();
    }

    return this;
  }
}; // File:src/core/BufferAttribute.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.BufferAttribute = function (array, itemSize) {
  this.uuid = THREE.Math.generateUUID();
  this.array = array;
  this.itemSize = itemSize;
  this.dynamic = false;
  this.updateRange = {
    offset: 0,
    count: -1
  };
  this.version = 0;
};

THREE.BufferAttribute.prototype = {
  constructor: THREE.BufferAttribute,

  get count() {
    return this.array.length / this.itemSize;
  },

  set needsUpdate(value) {
    if (value === true) this.version++;
  },

  setDynamic: function (value) {
    this.dynamic = value;
    return this;
  },
  copy: function (source) {
    this.array = new source.array.constructor(source.array);
    this.itemSize = source.itemSize;
    this.dynamic = source.dynamic;
    return this;
  },
  copyAt: function (index1, attribute, index2) {
    index1 *= this.itemSize;
    index2 *= attribute.itemSize;

    for (var i = 0, l = this.itemSize; i < l; i++) {
      this.array[index1 + i] = attribute.array[index2 + i];
    }

    return this;
  },
  copyArray: function (array) {
    this.array.set(array);
    return this;
  },
  copyColorsArray: function (colors) {
    var array = this.array,
        offset = 0;

    for (var i = 0, l = colors.length; i < l; i++) {
      var color = colors[i];

      if (color === undefined) {
        color = new THREE.Color();
      }

      array[offset++] = color.r;
      array[offset++] = color.g;
      array[offset++] = color.b;
    }

    return this;
  },
  copyIndicesArray: function (indices) {
    var array = this.array,
        offset = 0;

    for (var i = 0, l = indices.length; i < l; i++) {
      var index = indices[i];
      array[offset++] = index.a;
      array[offset++] = index.b;
      array[offset++] = index.c;
    }

    return this;
  },
  copyVector2sArray: function (vectors) {
    var array = this.array,
        offset = 0;

    for (var i = 0, l = vectors.length; i < l; i++) {
      var vector = vectors[i];

      if (vector === undefined) {
        vector = new THREE.Vector2();
      }

      array[offset++] = vector.x;
      array[offset++] = vector.y;
    }

    return this;
  },
  copyVector3sArray: function (vectors) {
    var array = this.array,
        offset = 0;

    for (var i = 0, l = vectors.length; i < l; i++) {
      var vector = vectors[i];

      if (vector === undefined) {
        vector = new THREE.Vector3();
      }

      array[offset++] = vector.x;
      array[offset++] = vector.y;
      array[offset++] = vector.z;
    }

    return this;
  },
  copyVector4sArray: function (vectors) {
    var array = this.array,
        offset = 0;

    for (var i = 0, l = vectors.length; i < l; i++) {
      var vector = vectors[i];

      if (vector === undefined) {
        vector = new THREE.Vector4();
      }

      array[offset++] = vector.x;
      array[offset++] = vector.y;
      array[offset++] = vector.z;
      array[offset++] = vector.w;
    }

    return this;
  },
  set: function (value, offset) {
    if (offset === undefined) offset = 0;
    this.array.set(value, offset);
    return this;
  },
  getX: function (index) {
    return this.array[index * this.itemSize];
  },
  setX: function (index, x) {
    this.array[index * this.itemSize] = x;
    return this;
  },
  getY: function (index) {
    return this.array[index * this.itemSize + 1];
  },
  setY: function (index, y) {
    this.array[index * this.itemSize + 1] = y;
    return this;
  },
  getZ: function (index) {
    return this.array[index * this.itemSize + 2];
  },
  setZ: function (index, z) {
    this.array[index * this.itemSize + 2] = z;
    return this;
  },
  getW: function (index) {
    return this.array[index * this.itemSize + 3];
  },
  setW: function (index, w) {
    this.array[index * this.itemSize + 3] = w;
    return this;
  },
  setXY: function (index, x, y) {
    index *= this.itemSize;
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    return this;
  },
  setXYZ: function (index, x, y, z) {
    index *= this.itemSize;
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    return this;
  },
  setXYZW: function (index, x, y, z, w) {
    index *= this.itemSize;
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    this.array[index + 3] = w;
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  }
}; //

THREE.Int8Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Int8Array(array), itemSize);
};

THREE.Uint8Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Uint8Array(array), itemSize);
};

THREE.Uint8ClampedAttribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Uint8ClampedArray(array), itemSize);
};

THREE.Int16Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Int16Array(array), itemSize);
};

THREE.Uint16Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Uint16Array(array), itemSize);
};

THREE.Int32Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Int32Array(array), itemSize);
};

THREE.Uint32Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Uint32Array(array), itemSize);
};

THREE.Float32Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Float32Array(array), itemSize);
};

THREE.Float64Attribute = function (array, itemSize) {
  return new THREE.BufferAttribute(new Float64Array(array), itemSize);
}; // Deprecated


THREE.DynamicBufferAttribute = function (array, itemSize) {
  return new THREE.BufferAttribute(array, itemSize).setDynamic(true);
}; // File:src/core/InstancedBufferAttribute.js

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */


THREE.InstancedBufferAttribute = function (array, itemSize, meshPerAttribute) {
  THREE.BufferAttribute.call(this, array, itemSize);
  this.meshPerAttribute = meshPerAttribute || 1;
};

THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype);
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute;

THREE.InstancedBufferAttribute.prototype.copy = function (source) {
  THREE.BufferAttribute.prototype.copy.call(this, source);
  this.meshPerAttribute = source.meshPerAttribute;
  return this;
}; // File:src/core/BufferGeometry.js

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */


THREE.BufferGeometry = function () {
  Object.defineProperty(this, 'id', {
    value: THREE.GeometryIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = '';
  this.type = 'BufferGeometry';
  this.index = null;
  this.attributes = {};
  this.morphAttributes = {};
  this.groups = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.drawRange = {
    start: 0,
    count: Infinity
  };
};

THREE.BufferGeometry.prototype = {
  constructor: THREE.BufferGeometry,
  getIndex: function () {
    return this.index;
  },
  setIndex: function (index) {
    this.index = index;
  },
  addAttribute: function (name, attribute) {
    if (attribute instanceof THREE.BufferAttribute === false && attribute instanceof THREE.InterleavedBufferAttribute === false) {
      this.addAttribute(name, new THREE.BufferAttribute(arguments[1], arguments[2]));
      return;
    }

    if (name === 'index') {
      this.setIndex(attribute);
      return;
    }

    this.attributes[name] = attribute;
    return this;
  },
  getAttribute: function (name) {
    return this.attributes[name];
  },
  removeAttribute: function (name) {
    delete this.attributes[name];
    return this;
  },
  addGroup: function (start, count, materialIndex) {
    this.groups.push({
      start: start,
      count: count,
      materialIndex: materialIndex !== undefined ? materialIndex : 0
    });
  },
  clearGroups: function () {
    this.groups = [];
  },
  setDrawRange: function (start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  },
  applyMatrix: function (matrix) {
    var position = this.attributes.position;

    if (position !== undefined) {
      matrix.applyToVector3Array(position.array);
      position.needsUpdate = true;
    }

    var normal = this.attributes.normal;

    if (normal !== undefined) {
      var normalMatrix = new THREE.Matrix3().getNormalMatrix(matrix);
      normalMatrix.applyToVector3Array(normal.array);
      normal.needsUpdate = true;
    }

    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }

    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }

    return this;
  },
  rotateX: function () {
    // rotate geometry around world x-axis
    var m1;
    return function rotateX(angle) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeRotationX(angle);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  rotateY: function () {
    // rotate geometry around world y-axis
    var m1;
    return function rotateY(angle) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeRotationY(angle);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  rotateZ: function () {
    // rotate geometry around world z-axis
    var m1;
    return function rotateZ(angle) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeRotationZ(angle);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  translate: function () {
    // translate geometry
    var m1;
    return function translate(x, y, z) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeTranslation(x, y, z);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  scale: function () {
    // scale geometry
    var m1;
    return function scale(x, y, z) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeScale(x, y, z);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  lookAt: function () {
    var obj;
    return function lookAt(vector) {
      if (obj === undefined) obj = new THREE.Object3D();
      obj.lookAt(vector);
      obj.updateMatrix();
      this.applyMatrix(obj.matrix);
    };
  }(),
  center: function () {
    this.computeBoundingBox();
    var offset = this.boundingBox.center().negate();
    this.translate(offset.x, offset.y, offset.z);
    return offset;
  },
  setFromObject: function (object) {
    // console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );
    var geometry = object.geometry;

    if (object instanceof THREE.Points || object instanceof THREE.Line) {
      var positions = new THREE.Float32Attribute(geometry.vertices.length * 3, 3);
      var colors = new THREE.Float32Attribute(geometry.colors.length * 3, 3);
      this.addAttribute('position', positions.copyVector3sArray(geometry.vertices));
      this.addAttribute('color', colors.copyColorsArray(geometry.colors));

      if (geometry.lineDistances && geometry.lineDistances.length === geometry.vertices.length) {
        var lineDistances = new THREE.Float32Attribute(geometry.lineDistances.length, 1);
        this.addAttribute('lineDistance', lineDistances.copyArray(geometry.lineDistances));
      }

      if (geometry.boundingSphere !== null) {
        this.boundingSphere = geometry.boundingSphere.clone();
      }

      if (geometry.boundingBox !== null) {
        this.boundingBox = geometry.boundingBox.clone();
      }
    } else if (object instanceof THREE.Mesh) {
      if (geometry instanceof THREE.Geometry) {
        this.fromGeometry(geometry);
      }
    }

    return this;
  },
  updateFromObject: function (object) {
    var geometry = object.geometry;

    if (object instanceof THREE.Mesh) {
      var direct = geometry.__directGeometry;

      if (direct === undefined) {
        return this.fromGeometry(geometry);
      }

      direct.verticesNeedUpdate = geometry.verticesNeedUpdate;
      direct.normalsNeedUpdate = geometry.normalsNeedUpdate;
      direct.colorsNeedUpdate = geometry.colorsNeedUpdate;
      direct.uvsNeedUpdate = geometry.uvsNeedUpdate;
      direct.groupsNeedUpdate = geometry.groupsNeedUpdate;
      geometry.verticesNeedUpdate = false;
      geometry.normalsNeedUpdate = false;
      geometry.colorsNeedUpdate = false;
      geometry.uvsNeedUpdate = false;
      geometry.groupsNeedUpdate = false;
      geometry = direct;
    }

    if (geometry.verticesNeedUpdate === true) {
      var attribute = this.attributes.position;

      if (attribute !== undefined) {
        attribute.copyVector3sArray(geometry.vertices);
        attribute.needsUpdate = true;
      }

      geometry.verticesNeedUpdate = false;
    }

    if (geometry.normalsNeedUpdate === true) {
      var attribute = this.attributes.normal;

      if (attribute !== undefined) {
        attribute.copyVector3sArray(geometry.normals);
        attribute.needsUpdate = true;
      }

      geometry.normalsNeedUpdate = false;
    }

    if (geometry.colorsNeedUpdate === true) {
      var attribute = this.attributes.color;

      if (attribute !== undefined) {
        attribute.copyColorsArray(geometry.colors);
        attribute.needsUpdate = true;
      }

      geometry.colorsNeedUpdate = false;
    }

    if (geometry.uvsNeedUpdate) {
      var attribute = this.attributes.uv;

      if (attribute !== undefined) {
        attribute.copyVector2sArray(geometry.uvs);
        attribute.needsUpdate = true;
      }

      geometry.uvsNeedUpdate = false;
    }

    if (geometry.lineDistancesNeedUpdate) {
      var attribute = this.attributes.lineDistance;

      if (attribute !== undefined) {
        attribute.copyArray(geometry.lineDistances);
        attribute.needsUpdate = true;
      }

      geometry.lineDistancesNeedUpdate = false;
    }

    if (geometry.groupsNeedUpdate) {
      geometry.computeGroups(object.geometry);
      this.groups = geometry.groups;
      geometry.groupsNeedUpdate = false;
    }

    return this;
  },
  fromGeometry: function (geometry) {
    geometry.__directGeometry = new THREE.DirectGeometry().fromGeometry(geometry);
    return this.fromDirectGeometry(geometry.__directGeometry);
  },
  fromDirectGeometry: function (geometry) {
    var positions = new Float32Array(geometry.vertices.length * 3);
    this.addAttribute('position', new THREE.BufferAttribute(positions, 3).copyVector3sArray(geometry.vertices));

    if (geometry.normals.length > 0) {
      var normals = new Float32Array(geometry.normals.length * 3);
      this.addAttribute('normal', new THREE.BufferAttribute(normals, 3).copyVector3sArray(geometry.normals));
    }

    if (geometry.colors.length > 0) {
      var colors = new Float32Array(geometry.colors.length * 3);
      this.addAttribute('color', new THREE.BufferAttribute(colors, 3).copyColorsArray(geometry.colors));
    }

    if (geometry.uvs.length > 0) {
      var uvs = new Float32Array(geometry.uvs.length * 2);
      this.addAttribute('uv', new THREE.BufferAttribute(uvs, 2).copyVector2sArray(geometry.uvs));
    }

    if (geometry.uvs2.length > 0) {
      var uvs2 = new Float32Array(geometry.uvs2.length * 2);
      this.addAttribute('uv2', new THREE.BufferAttribute(uvs2, 2).copyVector2sArray(geometry.uvs2));
    }

    if (geometry.indices.length > 0) {
      var TypeArray = geometry.vertices.length > 65535 ? Uint32Array : Uint16Array;
      var indices = new TypeArray(geometry.indices.length * 3);
      this.setIndex(new THREE.BufferAttribute(indices, 1).copyIndicesArray(geometry.indices));
    } // groups


    this.groups = geometry.groups; // morphs

    for (var name in geometry.morphTargets) {
      var array = [];
      var morphTargets = geometry.morphTargets[name];

      for (var i = 0, l = morphTargets.length; i < l; i++) {
        var morphTarget = morphTargets[i];
        var attribute = new THREE.Float32Attribute(morphTarget.length * 3, 3);
        array.push(attribute.copyVector3sArray(morphTarget));
      }

      this.morphAttributes[name] = array;
    } // skinning


    if (geometry.skinIndices.length > 0) {
      var skinIndices = new THREE.Float32Attribute(geometry.skinIndices.length * 4, 4);
      this.addAttribute('skinIndex', skinIndices.copyVector4sArray(geometry.skinIndices));
    }

    if (geometry.skinWeights.length > 0) {
      var skinWeights = new THREE.Float32Attribute(geometry.skinWeights.length * 4, 4);
      this.addAttribute('skinWeight', skinWeights.copyVector4sArray(geometry.skinWeights));
    } //


    if (geometry.boundingSphere !== null) {
      this.boundingSphere = geometry.boundingSphere.clone();
    }

    if (geometry.boundingBox !== null) {
      this.boundingBox = geometry.boundingBox.clone();
    }

    return this;
  },
  computeBoundingBox: function () {
    var vector = new THREE.Vector3();
    return function () {
      if (this.boundingBox === null) {
        this.boundingBox = new THREE.Box3();
      }

      var positions = this.attributes.position.array;

      if (positions) {
        this.boundingBox.setFromArray(positions);
      }

      if (positions === undefined || positions.length === 0) {
        this.boundingBox.min.set(0, 0, 0);
        this.boundingBox.max.set(0, 0, 0);
      }

      if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) ;
    };
  }(),
  computeBoundingSphere: function () {
    var box = new THREE.Box3();
    var vector = new THREE.Vector3();
    return function () {
      if (this.boundingSphere === null) {
        this.boundingSphere = new THREE.Sphere();
      }

      var positions = this.attributes.position.array;

      if (positions) {
        var center = this.boundingSphere.center;
        box.setFromArray(positions);
        box.center(center); // hoping to find a boundingSphere with a radius smaller than the
        // boundingSphere of the boundingBox: sqrt(3) smaller in the best case

        var maxRadiusSq = 0;

        for (var i = 0, il = positions.length; i < il; i += 3) {
          vector.fromArray(positions, i);
          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(vector));
        }

        this.boundingSphere.radius = Math.sqrt(maxRadiusSq);

        if (isNaN(this.boundingSphere.radius)) ;
      }
    };
  }(),
  computeFaceNormals: function () {// backwards compatibility
  },
  computeVertexNormals: function () {
    var index = this.index;
    var attributes = this.attributes;
    var groups = this.groups;

    if (attributes.position) {
      var positions = attributes.position.array;

      if (attributes.normal === undefined) {
        this.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(positions.length), 3));
      } else {
        // reset existing normals to zero
        var array = attributes.normal.array;

        for (var i = 0, il = array.length; i < il; i++) {
          array[i] = 0;
        }
      }

      var normals = attributes.normal.array;
      var vA,
          vB,
          vC,
          pA = new THREE.Vector3(),
          pB = new THREE.Vector3(),
          pC = new THREE.Vector3(),
          cb = new THREE.Vector3(),
          ab = new THREE.Vector3(); // indexed elements

      if (index) {
        var indices = index.array;

        if (groups.length === 0) {
          this.addGroup(0, indices.length);
        }

        for (var j = 0, jl = groups.length; j < jl; ++j) {
          var group = groups[j];
          var start = group.start;
          var count = group.count;

          for (var i = start, il = start + count; i < il; i += 3) {
            vA = indices[i + 0] * 3;
            vB = indices[i + 1] * 3;
            vC = indices[i + 2] * 3;
            pA.fromArray(positions, vA);
            pB.fromArray(positions, vB);
            pC.fromArray(positions, vC);
            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);
            normals[vA] += cb.x;
            normals[vA + 1] += cb.y;
            normals[vA + 2] += cb.z;
            normals[vB] += cb.x;
            normals[vB + 1] += cb.y;
            normals[vB + 2] += cb.z;
            normals[vC] += cb.x;
            normals[vC + 1] += cb.y;
            normals[vC + 2] += cb.z;
          }
        }
      } else {
        // non-indexed elements (unconnected triangle soup)
        for (var i = 0, il = positions.length; i < il; i += 9) {
          pA.fromArray(positions, i);
          pB.fromArray(positions, i + 3);
          pC.fromArray(positions, i + 6);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          normals[i] = cb.x;
          normals[i + 1] = cb.y;
          normals[i + 2] = cb.z;
          normals[i + 3] = cb.x;
          normals[i + 4] = cb.y;
          normals[i + 5] = cb.z;
          normals[i + 6] = cb.x;
          normals[i + 7] = cb.y;
          normals[i + 8] = cb.z;
        }
      }

      this.normalizeNormals();
      attributes.normal.needsUpdate = true;
    }
  },
  merge: function (geometry, offset) {
    if (geometry instanceof THREE.BufferGeometry === false) {
      return;
    }

    if (offset === undefined) offset = 0;
    var attributes = this.attributes;

    for (var key in attributes) {
      if (geometry.attributes[key] === undefined) continue;
      var attribute1 = attributes[key];
      var attributeArray1 = attribute1.array;
      var attribute2 = geometry.attributes[key];
      var attributeArray2 = attribute2.array;
      var attributeSize = attribute2.itemSize;

      for (var i = 0, j = attributeSize * offset; i < attributeArray2.length; i++, j++) {
        attributeArray1[j] = attributeArray2[i];
      }
    }

    return this;
  },
  normalizeNormals: function () {
    var normals = this.attributes.normal.array;
    var x, y, z, n;

    for (var i = 0, il = normals.length; i < il; i += 3) {
      x = normals[i];
      y = normals[i + 1];
      z = normals[i + 2];
      n = 1.0 / Math.sqrt(x * x + y * y + z * z);
      normals[i] *= n;
      normals[i + 1] *= n;
      normals[i + 2] *= n;
    }
  },
  toNonIndexed: function () {
    if (this.index === null) {
      return this;
    }

    var geometry2 = new THREE.BufferGeometry();
    var indices = this.index.array;
    var attributes = this.attributes;

    for (var name in attributes) {
      var attribute = attributes[name];
      var array = attribute.array;
      var itemSize = attribute.itemSize;
      var array2 = new array.constructor(indices.length * itemSize);
      var index = 0,
          index2 = 0;

      for (var i = 0, l = indices.length; i < l; i++) {
        index = indices[i] * itemSize;

        for (var j = 0; j < itemSize; j++) {
          array2[index2++] = array[index++];
        }
      }

      geometry2.addAttribute(name, new THREE.BufferAttribute(array2, itemSize));
    }

    return geometry2;
  },
  toJSON: function () {
    var data = {
      metadata: {
        version: 4.4,
        type: 'BufferGeometry',
        generator: 'BufferGeometry.toJSON'
      }
    }; // standard BufferGeometry serialization

    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== '') data.name = this.name;

    if (this.parameters !== undefined) {
      var parameters = this.parameters;

      for (var key in parameters) {
        if (parameters[key] !== undefined) data[key] = parameters[key];
      }

      return data;
    }

    data.data = {
      attributes: {}
    };
    var index = this.index;

    if (index !== null) {
      var array = Array.prototype.slice.call(index.array);
      data.data.index = {
        type: index.array.constructor.name,
        array: array
      };
    }

    var attributes = this.attributes;

    for (var key in attributes) {
      var attribute = attributes[key];
      var array = Array.prototype.slice.call(attribute.array);
      data.data.attributes[key] = {
        itemSize: attribute.itemSize,
        type: attribute.array.constructor.name,
        array: array
      };
    }

    var groups = this.groups;

    if (groups.length > 0) {
      data.data.groups = JSON.parse(JSON.stringify(groups));
    }

    var boundingSphere = this.boundingSphere;

    if (boundingSphere !== null) {
      data.data.boundingSphere = {
        center: boundingSphere.center.toArray(),
        radius: boundingSphere.radius
      };
    }

    return data;
  },
  clone: function () {
    /*
    // Handle primitives
    	var parameters = this.parameters;
    	if ( parameters !== undefined ) {
    		var values = [];
    		for ( var key in parameters ) {
    			values.push( parameters[ key ] );
    		}
    		var geometry = Object.create( this.constructor.prototype );
    	this.constructor.apply( geometry, values );
    	return geometry;
    	}
    	return new this.constructor().copy( this );
    */
    return new THREE.BufferGeometry().copy(this);
  },
  copy: function (source) {
    var index = source.index;

    if (index !== null) {
      this.setIndex(index.clone());
    }

    var attributes = source.attributes;

    for (var name in attributes) {
      var attribute = attributes[name];
      this.addAttribute(name, attribute.clone());
    }

    var groups = source.groups;

    for (var i = 0, l = groups.length; i < l; i++) {
      var group = groups[i];
      this.addGroup(group.start, group.count);
    }

    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.BufferGeometry.MaxIndex = 65535; // File:src/core/InterleavedBufferAttribute.js

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

THREE.InterleavedBufferAttribute = function (interleavedBuffer, itemSize, offset) {
  this.uuid = THREE.Math.generateUUID();
  this.data = interleavedBuffer;
  this.itemSize = itemSize;
  this.offset = offset;
};

THREE.InterleavedBufferAttribute.prototype = {
  constructor: THREE.InterleavedBufferAttribute,

  get length() {
    return this.array.length;
  },

  get count() {
    return this.data.count;
  },

  setX: function (index, x) {
    this.data.array[index * this.data.stride + this.offset] = x;
    return this;
  },
  setY: function (index, y) {
    this.data.array[index * this.data.stride + this.offset + 1] = y;
    return this;
  },
  setZ: function (index, z) {
    this.data.array[index * this.data.stride + this.offset + 2] = z;
    return this;
  },
  setW: function (index, w) {
    this.data.array[index * this.data.stride + this.offset + 3] = w;
    return this;
  },
  getX: function (index) {
    return this.data.array[index * this.data.stride + this.offset];
  },
  getY: function (index) {
    return this.data.array[index * this.data.stride + this.offset + 1];
  },
  getZ: function (index) {
    return this.data.array[index * this.data.stride + this.offset + 2];
  },
  getW: function (index) {
    return this.data.array[index * this.data.stride + this.offset + 3];
  },
  setXY: function (index, x, y) {
    index = index * this.data.stride + this.offset;
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    return this;
  },
  setXYZ: function (index, x, y, z) {
    index = index * this.data.stride + this.offset;
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    return this;
  },
  setXYZW: function (index, x, y, z, w) {
    index = index * this.data.stride + this.offset;
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    this.data.array[index + 3] = w;
    return this;
  }
}; // File:src/core/InstancedBufferGeometry.js

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */

THREE.InstancedBufferGeometry = function () {
  THREE.BufferGeometry.call(this);
  this.type = 'InstancedBufferGeometry';
  this.maxInstancedCount = undefined;
};

THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry;

THREE.InstancedBufferGeometry.prototype.addGroup = function (start, count, instances) {
  this.groups.push({
    start: start,
    count: count,
    instances: instances
  });
};

THREE.InstancedBufferGeometry.prototype.copy = function (source) {
  var index = source.index;

  if (index !== null) {
    this.setIndex(index.clone());
  }

  var attributes = source.attributes;

  for (var name in attributes) {
    var attribute = attributes[name];
    this.addAttribute(name, attribute.clone());
  }

  var groups = source.groups;

  for (var i = 0, l = groups.length; i < l; i++) {
    var group = groups[i];
    this.addGroup(group.start, group.count, group.instances);
  }

  return this;
};

THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype); // File:src/core/Geometry.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author bhouston / http://clara.io
 */

THREE.Geometry = function () {
  Object.defineProperty(this, 'id', {
    value: THREE.GeometryIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = '';
  this.type = 'Geometry';
  this.vertices = [];
  this.colors = [];
  this.faces = [];
  this.faceVertexUvs = [[]];
  this.morphTargets = [];
  this.morphNormals = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.lineDistances = [];
  this.boundingBox = null;
  this.boundingSphere = null; // update flags

  this.verticesNeedUpdate = false;
  this.elementsNeedUpdate = false;
  this.uvsNeedUpdate = false;
  this.normalsNeedUpdate = false;
  this.colorsNeedUpdate = false;
  this.lineDistancesNeedUpdate = false;
  this.groupsNeedUpdate = false;
};

THREE.Geometry.prototype = {
  constructor: THREE.Geometry,
  applyMatrix: function (matrix) {
    var normalMatrix = new THREE.Matrix3().getNormalMatrix(matrix);

    for (var i = 0, il = this.vertices.length; i < il; i++) {
      var vertex = this.vertices[i];
      vertex.applyMatrix4(matrix);
    }

    for (var i = 0, il = this.faces.length; i < il; i++) {
      var face = this.faces[i];
      face.normal.applyMatrix3(normalMatrix).normalize();

      for (var j = 0, jl = face.vertexNormals.length; j < jl; j++) {
        face.vertexNormals[j].applyMatrix3(normalMatrix).normalize();
      }
    }

    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }

    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }

    this.verticesNeedUpdate = true;
    this.normalsNeedUpdate = true;
    return this;
  },
  rotateX: function () {
    // rotate geometry around world x-axis
    var m1;
    return function rotateX(angle) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeRotationX(angle);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  rotateY: function () {
    // rotate geometry around world y-axis
    var m1;
    return function rotateY(angle) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeRotationY(angle);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  rotateZ: function () {
    // rotate geometry around world z-axis
    var m1;
    return function rotateZ(angle) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeRotationZ(angle);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  translate: function () {
    // translate geometry
    var m1;
    return function translate(x, y, z) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeTranslation(x, y, z);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  scale: function () {
    // scale geometry
    var m1;
    return function scale(x, y, z) {
      if (m1 === undefined) m1 = new THREE.Matrix4();
      m1.makeScale(x, y, z);
      this.applyMatrix(m1);
      return this;
    };
  }(),
  lookAt: function () {
    var obj;
    return function lookAt(vector) {
      if (obj === undefined) obj = new THREE.Object3D();
      obj.lookAt(vector);
      obj.updateMatrix();
      this.applyMatrix(obj.matrix);
    };
  }(),
  fromBufferGeometry: function (geometry) {
    var scope = this;
    var indices = geometry.index !== null ? geometry.index.array : undefined;
    var attributes = geometry.attributes;
    var positions = attributes.position.array;
    var normals = attributes.normal !== undefined ? attributes.normal.array : undefined;
    var colors = attributes.color !== undefined ? attributes.color.array : undefined;
    var uvs = attributes.uv !== undefined ? attributes.uv.array : undefined;
    var uvs2 = attributes.uv2 !== undefined ? attributes.uv2.array : undefined;
    if (uvs2 !== undefined) this.faceVertexUvs[1] = [];
    var tempNormals = [];
    var tempUVs = [];
    var tempUVs2 = [];

    for (var i = 0, j = 0; i < positions.length; i += 3, j += 2) {
      scope.vertices.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]));

      if (normals !== undefined) {
        tempNormals.push(new THREE.Vector3(normals[i], normals[i + 1], normals[i + 2]));
      }

      if (colors !== undefined) {
        scope.colors.push(new THREE.Color(colors[i], colors[i + 1], colors[i + 2]));
      }

      if (uvs !== undefined) {
        tempUVs.push(new THREE.Vector2(uvs[j], uvs[j + 1]));
      }

      if (uvs2 !== undefined) {
        tempUVs2.push(new THREE.Vector2(uvs2[j], uvs2[j + 1]));
      }
    }

    function addFace(a, b, c, materialIndex) {
      var vertexNormals = normals !== undefined ? [tempNormals[a].clone(), tempNormals[b].clone(), tempNormals[c].clone()] : [];
      var vertexColors = colors !== undefined ? [scope.colors[a].clone(), scope.colors[b].clone(), scope.colors[c].clone()] : [];
      var face = new THREE.Face3(a, b, c, vertexNormals, vertexColors, materialIndex);
      scope.faces.push(face);

      if (uvs !== undefined) {
        scope.faceVertexUvs[0].push([tempUVs[a].clone(), tempUVs[b].clone(), tempUVs[c].clone()]);
      }

      if (uvs2 !== undefined) {
        scope.faceVertexUvs[1].push([tempUVs2[a].clone(), tempUVs2[b].clone(), tempUVs2[c].clone()]);
      }
    }

    if (indices !== undefined) {
      var groups = geometry.groups;

      if (groups.length > 0) {
        for (var i = 0; i < groups.length; i++) {
          var group = groups[i];
          var start = group.start;
          var count = group.count;

          for (var j = start, jl = start + count; j < jl; j += 3) {
            addFace(indices[j], indices[j + 1], indices[j + 2], group.materialIndex);
          }
        }
      } else {
        for (var i = 0; i < indices.length; i += 3) {
          addFace(indices[i], indices[i + 1], indices[i + 2]);
        }
      }
    } else {
      for (var i = 0; i < positions.length / 3; i += 3) {
        addFace(i, i + 1, i + 2);
      }
    }

    this.computeFaceNormals();

    if (geometry.boundingBox !== null) {
      this.boundingBox = geometry.boundingBox.clone();
    }

    if (geometry.boundingSphere !== null) {
      this.boundingSphere = geometry.boundingSphere.clone();
    }

    return this;
  },
  center: function () {
    this.computeBoundingBox();
    var offset = this.boundingBox.center().negate();
    this.translate(offset.x, offset.y, offset.z);
    return offset;
  },
  normalize: function () {
    this.computeBoundingSphere();
    var center = this.boundingSphere.center;
    var radius = this.boundingSphere.radius;
    var s = radius === 0 ? 1 : 1.0 / radius;
    var matrix = new THREE.Matrix4();
    matrix.set(s, 0, 0, -s * center.x, 0, s, 0, -s * center.y, 0, 0, s, -s * center.z, 0, 0, 0, 1);
    this.applyMatrix(matrix);
    return this;
  },
  computeFaceNormals: function () {
    var cb = new THREE.Vector3(),
        ab = new THREE.Vector3();

    for (var f = 0, fl = this.faces.length; f < fl; f++) {
      var face = this.faces[f];
      var vA = this.vertices[face.a];
      var vB = this.vertices[face.b];
      var vC = this.vertices[face.c];
      cb.subVectors(vC, vB);
      ab.subVectors(vA, vB);
      cb.cross(ab);
      cb.normalize();
      face.normal.copy(cb);
    }
  },
  computeVertexNormals: function (areaWeighted) {
    if (areaWeighted === undefined) areaWeighted = true;
    var v, vl, f, fl, face, vertices;
    vertices = new Array(this.vertices.length);

    for (v = 0, vl = this.vertices.length; v < vl; v++) {
      vertices[v] = new THREE.Vector3();
    }

    if (areaWeighted) {
      // vertex normals weighted by triangle areas
      // http://www.iquilezles.org/www/articles/normals/normals.htm
      var vA, vB, vC;
      var cb = new THREE.Vector3(),
          ab = new THREE.Vector3();

      for (f = 0, fl = this.faces.length; f < fl; f++) {
        face = this.faces[f];
        vA = this.vertices[face.a];
        vB = this.vertices[face.b];
        vC = this.vertices[face.c];
        cb.subVectors(vC, vB);
        ab.subVectors(vA, vB);
        cb.cross(ab);
        vertices[face.a].add(cb);
        vertices[face.b].add(cb);
        vertices[face.c].add(cb);
      }
    } else {
      for (f = 0, fl = this.faces.length; f < fl; f++) {
        face = this.faces[f];
        vertices[face.a].add(face.normal);
        vertices[face.b].add(face.normal);
        vertices[face.c].add(face.normal);
      }
    }

    for (v = 0, vl = this.vertices.length; v < vl; v++) {
      vertices[v].normalize();
    }

    for (f = 0, fl = this.faces.length; f < fl; f++) {
      face = this.faces[f];
      var vertexNormals = face.vertexNormals;

      if (vertexNormals.length === 3) {
        vertexNormals[0].copy(vertices[face.a]);
        vertexNormals[1].copy(vertices[face.b]);
        vertexNormals[2].copy(vertices[face.c]);
      } else {
        vertexNormals[0] = vertices[face.a].clone();
        vertexNormals[1] = vertices[face.b].clone();
        vertexNormals[2] = vertices[face.c].clone();
      }
    }

    if (this.faces.length > 0) {
      this.normalsNeedUpdate = true;
    }
  },
  computeMorphNormals: function () {
    var i, il, f, fl, face; // save original normals
    // - create temp variables on first access
    //   otherwise just copy (for faster repeated calls)

    for (f = 0, fl = this.faces.length; f < fl; f++) {
      face = this.faces[f];

      if (!face.__originalFaceNormal) {
        face.__originalFaceNormal = face.normal.clone();
      } else {
        face.__originalFaceNormal.copy(face.normal);
      }

      if (!face.__originalVertexNormals) face.__originalVertexNormals = [];

      for (i = 0, il = face.vertexNormals.length; i < il; i++) {
        if (!face.__originalVertexNormals[i]) {
          face.__originalVertexNormals[i] = face.vertexNormals[i].clone();
        } else {
          face.__originalVertexNormals[i].copy(face.vertexNormals[i]);
        }
      }
    } // use temp geometry to compute face and vertex normals for each morph


    var tmpGeo = new THREE.Geometry();
    tmpGeo.faces = this.faces;

    for (i = 0, il = this.morphTargets.length; i < il; i++) {
      // create on first access
      if (!this.morphNormals[i]) {
        this.morphNormals[i] = {};
        this.morphNormals[i].faceNormals = [];
        this.morphNormals[i].vertexNormals = [];
        var dstNormalsFace = this.morphNormals[i].faceNormals;
        var dstNormalsVertex = this.morphNormals[i].vertexNormals;
        var faceNormal, vertexNormals;

        for (f = 0, fl = this.faces.length; f < fl; f++) {
          faceNormal = new THREE.Vector3();
          vertexNormals = {
            a: new THREE.Vector3(),
            b: new THREE.Vector3(),
            c: new THREE.Vector3()
          };
          dstNormalsFace.push(faceNormal);
          dstNormalsVertex.push(vertexNormals);
        }
      }

      var morphNormals = this.morphNormals[i]; // set vertices to morph target

      tmpGeo.vertices = this.morphTargets[i].vertices; // compute morph normals

      tmpGeo.computeFaceNormals();
      tmpGeo.computeVertexNormals(); // store morph normals

      var faceNormal, vertexNormals;

      for (f = 0, fl = this.faces.length; f < fl; f++) {
        face = this.faces[f];
        faceNormal = morphNormals.faceNormals[f];
        vertexNormals = morphNormals.vertexNormals[f];
        faceNormal.copy(face.normal);
        vertexNormals.a.copy(face.vertexNormals[0]);
        vertexNormals.b.copy(face.vertexNormals[1]);
        vertexNormals.c.copy(face.vertexNormals[2]);
      }
    } // restore original normals


    for (f = 0, fl = this.faces.length; f < fl; f++) {
      face = this.faces[f];
      face.normal = face.__originalFaceNormal;
      face.vertexNormals = face.__originalVertexNormals;
    }
  },
  computeTangents: function () {},
  computeLineDistances: function () {
    var d = 0;
    var vertices = this.vertices;

    for (var i = 0, il = vertices.length; i < il; i++) {
      if (i > 0) {
        d += vertices[i].distanceTo(vertices[i - 1]);
      }

      this.lineDistances[i] = d;
    }
  },
  computeBoundingBox: function () {
    if (this.boundingBox === null) {
      this.boundingBox = new THREE.Box3();
    }

    this.boundingBox.setFromPoints(this.vertices);
  },
  computeBoundingSphere: function () {
    if (this.boundingSphere === null) {
      this.boundingSphere = new THREE.Sphere();
    }

    this.boundingSphere.setFromPoints(this.vertices);
  },
  merge: function (geometry, matrix, materialIndexOffset) {
    if (geometry instanceof THREE.Geometry === false) {
      return;
    }

    var normalMatrix,
        vertexOffset = this.vertices.length,
        vertices1 = this.vertices,
        vertices2 = geometry.vertices,
        faces1 = this.faces,
        faces2 = geometry.faces,
        uvs1 = this.faceVertexUvs[0],
        uvs2 = geometry.faceVertexUvs[0];
    if (materialIndexOffset === undefined) materialIndexOffset = 0;

    if (matrix !== undefined) {
      normalMatrix = new THREE.Matrix3().getNormalMatrix(matrix);
    } // vertices


    for (var i = 0, il = vertices2.length; i < il; i++) {
      var vertex = vertices2[i];
      var vertexCopy = vertex.clone();
      if (matrix !== undefined) vertexCopy.applyMatrix4(matrix);
      vertices1.push(vertexCopy);
    } // faces


    for (i = 0, il = faces2.length; i < il; i++) {
      var face = faces2[i],
          faceCopy,
          normal,
          color,
          faceVertexNormals = face.vertexNormals,
          faceVertexColors = face.vertexColors;
      faceCopy = new THREE.Face3(face.a + vertexOffset, face.b + vertexOffset, face.c + vertexOffset);
      faceCopy.normal.copy(face.normal);

      if (normalMatrix !== undefined) {
        faceCopy.normal.applyMatrix3(normalMatrix).normalize();
      }

      for (var j = 0, jl = faceVertexNormals.length; j < jl; j++) {
        normal = faceVertexNormals[j].clone();

        if (normalMatrix !== undefined) {
          normal.applyMatrix3(normalMatrix).normalize();
        }

        faceCopy.vertexNormals.push(normal);
      }

      faceCopy.color.copy(face.color);

      for (var j = 0, jl = faceVertexColors.length; j < jl; j++) {
        color = faceVertexColors[j];
        faceCopy.vertexColors.push(color.clone());
      }

      faceCopy.materialIndex = face.materialIndex + materialIndexOffset;
      faces1.push(faceCopy);
    } // uvs


    for (i = 0, il = uvs2.length; i < il; i++) {
      var uv = uvs2[i],
          uvCopy = [];

      if (uv === undefined) {
        continue;
      }

      for (var j = 0, jl = uv.length; j < jl; j++) {
        uvCopy.push(uv[j].clone());
      }

      uvs1.push(uvCopy);
    }
  },
  mergeMesh: function (mesh) {
    if (mesh instanceof THREE.Mesh === false) {
      return;
    }

    mesh.matrixAutoUpdate && mesh.updateMatrix();
    this.merge(mesh.geometry, mesh.matrix);
  },

  /*
   * Checks for duplicate vertices with hashmap.
   * Duplicated vertices are removed
   * and faces' vertices are updated.
   */
  mergeVertices: function () {
    var verticesMap = {}; // Hashmap for looking up vertices by position coordinates (and making sure they are unique)

    var unique = [],
        changes = [];
    var v, key;
    var precisionPoints = 4; // number of decimal points, e.g. 4 for epsilon of 0.0001

    var precision = Math.pow(10, precisionPoints);
    var i, il, face;
    var indices, j, jl;

    for (i = 0, il = this.vertices.length; i < il; i++) {
      v = this.vertices[i];
      key = Math.round(v.x * precision) + '_' + Math.round(v.y * precision) + '_' + Math.round(v.z * precision);

      if (verticesMap[key] === undefined) {
        verticesMap[key] = i;
        unique.push(this.vertices[i]);
        changes[i] = unique.length - 1;
      } else {
        //console.log('Duplicate vertex found. ', i, ' could be using ', verticesMap[key]);
        changes[i] = changes[verticesMap[key]];
      }
    } // if faces are completely degenerate after merging vertices, we
    // have to remove them from the geometry.


    var faceIndicesToRemove = [];

    for (i = 0, il = this.faces.length; i < il; i++) {
      face = this.faces[i];
      face.a = changes[face.a];
      face.b = changes[face.b];
      face.c = changes[face.c];
      indices = [face.a, face.b, face.c];
      // we have to remove the face as nothing can be saved

      for (var n = 0; n < 3; n++) {
        if (indices[n] === indices[(n + 1) % 3]) {
          faceIndicesToRemove.push(i);
          break;
        }
      }
    }

    for (i = faceIndicesToRemove.length - 1; i >= 0; i--) {
      var idx = faceIndicesToRemove[i];
      this.faces.splice(idx, 1);

      for (j = 0, jl = this.faceVertexUvs.length; j < jl; j++) {
        this.faceVertexUvs[j].splice(idx, 1);
      }
    } // Use unique set of vertices


    var diff = this.vertices.length - unique.length;
    this.vertices = unique;
    return diff;
  },
  sortFacesByMaterialIndex: function () {
    var faces = this.faces;
    var length = faces.length; // tag faces

    for (var i = 0; i < length; i++) {
      faces[i]._id = i;
    } // sort faces


    function materialIndexSort(a, b) {
      return a.materialIndex - b.materialIndex;
    }

    faces.sort(materialIndexSort); // sort uvs

    var uvs1 = this.faceVertexUvs[0];
    var uvs2 = this.faceVertexUvs[1];
    var newUvs1, newUvs2;
    if (uvs1 && uvs1.length === length) newUvs1 = [];
    if (uvs2 && uvs2.length === length) newUvs2 = [];

    for (var i = 0; i < length; i++) {
      var id = faces[i]._id;
      if (newUvs1) newUvs1.push(uvs1[id]);
      if (newUvs2) newUvs2.push(uvs2[id]);
    }

    if (newUvs1) this.faceVertexUvs[0] = newUvs1;
    if (newUvs2) this.faceVertexUvs[1] = newUvs2;
  },
  toJSON: function () {
    var data = {
      metadata: {
        version: 4.4,
        type: 'Geometry',
        generator: 'Geometry.toJSON'
      }
    }; // standard Geometry serialization

    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== '') data.name = this.name;

    if (this.parameters !== undefined) {
      var parameters = this.parameters;

      for (var key in parameters) {
        if (parameters[key] !== undefined) data[key] = parameters[key];
      }

      return data;
    }

    var vertices = [];

    for (var i = 0; i < this.vertices.length; i++) {
      var vertex = this.vertices[i];
      vertices.push(vertex.x, vertex.y, vertex.z);
    }

    var faces = [];
    var normals = [];
    var normalsHash = {};
    var colors = [];
    var colorsHash = {};
    var uvs = [];
    var uvsHash = {};

    for (var i = 0; i < this.faces.length; i++) {
      var face = this.faces[i];
      var hasMaterial = true;
      var hasFaceUv = false; // deprecated

      var hasFaceVertexUv = this.faceVertexUvs[0][i] !== undefined;
      var hasFaceNormal = face.normal.length() > 0;
      var hasFaceVertexNormal = face.vertexNormals.length > 0;
      var hasFaceColor = face.color.r !== 1 || face.color.g !== 1 || face.color.b !== 1;
      var hasFaceVertexColor = face.vertexColors.length > 0;
      var faceType = 0;
      faceType = setBit(faceType, 0, 0); // isQuad

      faceType = setBit(faceType, 1, hasMaterial);
      faceType = setBit(faceType, 2, hasFaceUv);
      faceType = setBit(faceType, 3, hasFaceVertexUv);
      faceType = setBit(faceType, 4, hasFaceNormal);
      faceType = setBit(faceType, 5, hasFaceVertexNormal);
      faceType = setBit(faceType, 6, hasFaceColor);
      faceType = setBit(faceType, 7, hasFaceVertexColor);
      faces.push(faceType);
      faces.push(face.a, face.b, face.c);
      faces.push(face.materialIndex);

      if (hasFaceVertexUv) {
        var faceVertexUvs = this.faceVertexUvs[0][i];
        faces.push(getUvIndex(faceVertexUvs[0]), getUvIndex(faceVertexUvs[1]), getUvIndex(faceVertexUvs[2]));
      }

      if (hasFaceNormal) {
        faces.push(getNormalIndex(face.normal));
      }

      if (hasFaceVertexNormal) {
        var vertexNormals = face.vertexNormals;
        faces.push(getNormalIndex(vertexNormals[0]), getNormalIndex(vertexNormals[1]), getNormalIndex(vertexNormals[2]));
      }

      if (hasFaceColor) {
        faces.push(getColorIndex(face.color));
      }

      if (hasFaceVertexColor) {
        var vertexColors = face.vertexColors;
        faces.push(getColorIndex(vertexColors[0]), getColorIndex(vertexColors[1]), getColorIndex(vertexColors[2]));
      }
    }

    function setBit(value, position, enabled) {
      return enabled ? value | 1 << position : value & ~(1 << position);
    }

    function getNormalIndex(normal) {
      var hash = normal.x.toString() + normal.y.toString() + normal.z.toString();

      if (normalsHash[hash] !== undefined) {
        return normalsHash[hash];
      }

      normalsHash[hash] = normals.length / 3;
      normals.push(normal.x, normal.y, normal.z);
      return normalsHash[hash];
    }

    function getColorIndex(color) {
      var hash = color.r.toString() + color.g.toString() + color.b.toString();

      if (colorsHash[hash] !== undefined) {
        return colorsHash[hash];
      }

      colorsHash[hash] = colors.length;
      colors.push(color.getHex());
      return colorsHash[hash];
    }

    function getUvIndex(uv) {
      var hash = uv.x.toString() + uv.y.toString();

      if (uvsHash[hash] !== undefined) {
        return uvsHash[hash];
      }

      uvsHash[hash] = uvs.length / 2;
      uvs.push(uv.x, uv.y);
      return uvsHash[hash];
    }

    data.data = {};
    data.data.vertices = vertices;
    data.data.normals = normals;
    if (colors.length > 0) data.data.colors = colors;
    if (uvs.length > 0) data.data.uvs = [uvs]; // temporal backward compatibility

    data.data.faces = faces;
    return data;
  },
  clone: function () {
    /*
    // Handle primitives
    	var parameters = this.parameters;
    	if ( parameters !== undefined ) {
    		var values = [];
    		for ( var key in parameters ) {
    			values.push( parameters[ key ] );
    		}
    		var geometry = Object.create( this.constructor.prototype );
    	this.constructor.apply( geometry, values );
    	return geometry;
    	}
    	return new this.constructor().copy( this );
    */
    return new THREE.Geometry().copy(this);
  },
  copy: function (source) {
    this.vertices = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    var vertices = source.vertices;

    for (var i = 0, il = vertices.length; i < il; i++) {
      this.vertices.push(vertices[i].clone());
    }

    var faces = source.faces;

    for (var i = 0, il = faces.length; i < il; i++) {
      this.faces.push(faces[i].clone());
    }

    for (var i = 0, il = source.faceVertexUvs.length; i < il; i++) {
      var faceVertexUvs = source.faceVertexUvs[i];

      if (this.faceVertexUvs[i] === undefined) {
        this.faceVertexUvs[i] = [];
      }

      for (var j = 0, jl = faceVertexUvs.length; j < jl; j++) {
        var uvs = faceVertexUvs[j],
            uvsCopy = [];

        for (var k = 0, kl = uvs.length; k < kl; k++) {
          var uv = uvs[k];
          uvsCopy.push(uv.clone());
        }

        this.faceVertexUvs[i].push(uvsCopy);
      }
    }

    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);
THREE.GeometryIdCount = 0; // File:src/core/DirectGeometry.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.DirectGeometry = function () {
  Object.defineProperty(this, 'id', {
    value: THREE.GeometryIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = '';
  this.type = 'DirectGeometry';
  this.indices = [];
  this.vertices = [];
  this.normals = [];
  this.colors = [];
  this.uvs = [];
  this.uvs2 = [];
  this.groups = [];
  this.morphTargets = {};
  this.skinWeights = [];
  this.skinIndices = []; // this.lineDistances = [];

  this.boundingBox = null;
  this.boundingSphere = null; // update flags

  this.verticesNeedUpdate = false;
  this.normalsNeedUpdate = false;
  this.colorsNeedUpdate = false;
  this.uvsNeedUpdate = false;
  this.groupsNeedUpdate = false;
};

THREE.DirectGeometry.prototype = {
  constructor: THREE.DirectGeometry,
  computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
  computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
  computeFaceNormals: function () {},
  computeVertexNormals: function () {},
  computeGroups: function (geometry) {
    var group;
    var groups = [];
    var materialIndex;
    var faces = geometry.faces;

    for (var i = 0; i < faces.length; i++) {
      var face = faces[i]; // materials

      if (face.materialIndex !== materialIndex) {
        materialIndex = face.materialIndex;

        if (group !== undefined) {
          group.count = i * 3 - group.start;
          groups.push(group);
        }

        group = {
          start: i * 3,
          materialIndex: materialIndex
        };
      }
    }

    if (group !== undefined) {
      group.count = i * 3 - group.start;
      groups.push(group);
    }

    this.groups = groups;
  },
  fromGeometry: function (geometry) {
    var faces = geometry.faces;
    var vertices = geometry.vertices;
    var faceVertexUvs = geometry.faceVertexUvs;
    var hasFaceVertexUv = faceVertexUvs[0] && faceVertexUvs[0].length > 0;
    var hasFaceVertexUv2 = faceVertexUvs[1] && faceVertexUvs[1].length > 0; // morphs

    var morphTargets = geometry.morphTargets;
    var morphTargetsLength = morphTargets.length;
    var morphTargetsPosition;

    if (morphTargetsLength > 0) {
      morphTargetsPosition = [];

      for (var i = 0; i < morphTargetsLength; i++) {
        morphTargetsPosition[i] = [];
      }

      this.morphTargets.position = morphTargetsPosition;
    }

    var morphNormals = geometry.morphNormals;
    var morphNormalsLength = morphNormals.length;
    var morphTargetsNormal;

    if (morphNormalsLength > 0) {
      morphTargetsNormal = [];

      for (var i = 0; i < morphNormalsLength; i++) {
        morphTargetsNormal[i] = [];
      }

      this.morphTargets.normal = morphTargetsNormal;
    } // skins


    var skinIndices = geometry.skinIndices;
    var skinWeights = geometry.skinWeights;
    var hasSkinIndices = skinIndices.length === vertices.length;
    var hasSkinWeights = skinWeights.length === vertices.length; //

    for (var i = 0; i < faces.length; i++) {
      var face = faces[i];
      this.vertices.push(vertices[face.a], vertices[face.b], vertices[face.c]);
      var vertexNormals = face.vertexNormals;

      if (vertexNormals.length === 3) {
        this.normals.push(vertexNormals[0], vertexNormals[1], vertexNormals[2]);
      } else {
        var normal = face.normal;
        this.normals.push(normal, normal, normal);
      }

      var vertexColors = face.vertexColors;

      if (vertexColors.length === 3) {
        this.colors.push(vertexColors[0], vertexColors[1], vertexColors[2]);
      } else {
        var color = face.color;
        this.colors.push(color, color, color);
      }

      if (hasFaceVertexUv === true) {
        var vertexUvs = faceVertexUvs[0][i];

        if (vertexUvs !== undefined) {
          this.uvs.push(vertexUvs[0], vertexUvs[1], vertexUvs[2]);
        } else {
          this.uvs.push(new THREE.Vector2(), new THREE.Vector2(), new THREE.Vector2());
        }
      }

      if (hasFaceVertexUv2 === true) {
        var vertexUvs = faceVertexUvs[1][i];

        if (vertexUvs !== undefined) {
          this.uvs2.push(vertexUvs[0], vertexUvs[1], vertexUvs[2]);
        } else {
          this.uvs2.push(new THREE.Vector2(), new THREE.Vector2(), new THREE.Vector2());
        }
      } // morphs


      for (var j = 0; j < morphTargetsLength; j++) {
        var morphTarget = morphTargets[j].vertices;
        morphTargetsPosition[j].push(morphTarget[face.a], morphTarget[face.b], morphTarget[face.c]);
      }

      for (var j = 0; j < morphNormalsLength; j++) {
        var morphNormal = morphNormals[j].vertexNormals[i];
        morphTargetsNormal[j].push(morphNormal.a, morphNormal.b, morphNormal.c);
      } // skins


      if (hasSkinIndices) {
        this.skinIndices.push(skinIndices[face.a], skinIndices[face.b], skinIndices[face.c]);
      }

      if (hasSkinWeights) {
        this.skinWeights.push(skinWeights[face.a], skinWeights[face.b], skinWeights[face.c]);
      }
    }

    this.computeGroups(geometry);
    this.verticesNeedUpdate = geometry.verticesNeedUpdate;
    this.normalsNeedUpdate = geometry.normalsNeedUpdate;
    this.colorsNeedUpdate = geometry.colorsNeedUpdate;
    this.uvsNeedUpdate = geometry.uvsNeedUpdate;
    this.groupsNeedUpdate = geometry.groupsNeedUpdate;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype); // File:src/cameras/Camera.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/

THREE.Camera = function () {
  THREE.Object3D.call(this);
  this.type = 'Camera';
  this.matrixWorldInverse = new THREE.Matrix4();
  this.projectionMatrix = new THREE.Matrix4();
};

THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.constructor = THREE.Camera;

THREE.Camera.prototype.getWorldDirection = function () {
  var quaternion = new THREE.Quaternion();
  return function (optionalTarget) {
    var result = optionalTarget || new THREE.Vector3();
    this.getWorldQuaternion(quaternion);
    return result.set(0, 0, -1).applyQuaternion(quaternion);
  };
}();

THREE.Camera.prototype.lookAt = function () {
  // This routine does not support cameras with rotated and/or translated parent(s)
  var m1 = new THREE.Matrix4();
  return function (vector) {
    m1.lookAt(this.position, vector, this.up);
    this.quaternion.setFromRotationMatrix(m1);
  };
}();

THREE.Camera.prototype.clone = function () {
  return new this.constructor().copy(this);
};

THREE.Camera.prototype.copy = function (source) {
  THREE.Object3D.prototype.copy.call(this, source);
  this.matrixWorldInverse.copy(source.matrixWorldInverse);
  this.projectionMatrix.copy(source.projectionMatrix);
  return this;
}; // File:src/cameras/PerspectiveCamera.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author greggman / http://games.greggman.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */


THREE.PerspectiveCamera = function (fov, aspect, near, far) {
  THREE.Camera.call(this);
  this.type = 'PerspectiveCamera';
  this.focalLength = 10;
  this.zoom = 1;
  this.fov = fov !== undefined ? fov : 50;
  this.aspect = aspect !== undefined ? aspect : 1;
  this.near = near !== undefined ? near : 0.1;
  this.far = far !== undefined ? far : 2000;
  this.updateProjectionMatrix();
};

THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;
/**
 * Uses Focal Length (in mm) to estimate and set FOV
 * 35mm (full-frame) camera is used if frame size is not specified;
 * Formula based on http://www.bobatkins.com/photography/technical/field_of_view.html
 */

THREE.PerspectiveCamera.prototype.setLens = function (focalLength, frameHeight) {
  if (frameHeight === undefined) frameHeight = 24;
  this.fov = 2 * THREE.Math.radToDeg(Math.atan(frameHeight / (focalLength * 2)));
  this.updateProjectionMatrix();
};
/**
 * Sets an offset in a larger frustum. This is useful for multi-window or
 * multi-monitor/multi-machine setups.
 *
 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
 * the monitors are in grid like this
 *
 *   +---+---+---+
 *   | A | B | C |
 *   +---+---+---+
 *   | D | E | F |
 *   +---+---+---+
 *
 * then for each monitor you would call it like this
 *
 *   var w = 1920;
 *   var h = 1080;
 *   var fullWidth = w * 3;
 *   var fullHeight = h * 2;
 *
 *   --A--
 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
 *   --B--
 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
 *   --C--
 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
 *   --D--
 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
 *   --E--
 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
 *   --F--
 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
 *
 *   Note there is no reason monitors have to be the same size or in a grid.
 */


THREE.PerspectiveCamera.prototype.setViewOffset = function (fullWidth, fullHeight, x, y, width, height) {
  this.fullWidth = fullWidth;
  this.fullHeight = fullHeight;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.updateProjectionMatrix();
};

THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
  var fov = THREE.Math.radToDeg(2 * Math.atan(Math.tan(THREE.Math.degToRad(this.fov) * 0.5) / this.zoom));

  if (this.fullWidth) {
    var aspect = this.fullWidth / this.fullHeight;
    var top = Math.tan(THREE.Math.degToRad(fov * 0.5)) * this.near;
    var bottom = -top;
    var left = aspect * bottom;
    var right = aspect * top;
    var width = Math.abs(right - left);
    var height = Math.abs(top - bottom);
    this.projectionMatrix.makeFrustum(left + this.x * width / this.fullWidth, left + (this.x + this.width) * width / this.fullWidth, top - (this.y + this.height) * height / this.fullHeight, top - this.y * height / this.fullHeight, this.near, this.far);
  } else {
    this.projectionMatrix.makePerspective(fov, this.aspect, this.near, this.far);
  }
};

THREE.PerspectiveCamera.prototype.copy = function (source) {
  THREE.Camera.prototype.copy.call(this, source);
  this.focalLength = source.focalLength;
  this.zoom = source.zoom;
  this.fov = source.fov;
  this.aspect = source.aspect;
  this.near = source.near;
  this.far = source.far;
  return this;
};

THREE.PerspectiveCamera.prototype.toJSON = function (meta) {
  var data = THREE.Object3D.prototype.toJSON.call(this, meta);
  data.object.focalLength = this.focalLength;
  data.object.zoom = this.zoom;
  data.object.fov = this.fov;
  data.object.aspect = this.aspect;
  data.object.near = this.near;
  data.object.far = this.far;
  return data;
}; // File:src/lights/Light.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */


THREE.Light = function (color, intensity) {
  THREE.Object3D.call(this);
  this.type = 'Light';
  this.color = new THREE.Color(color);
  this.intensity = intensity !== undefined ? intensity : 1;
  this.receiveShadow = undefined;
};

THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.constructor = THREE.Light;

THREE.Light.prototype.copy = function (source) {
  THREE.Object3D.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.intensity = source.intensity;
  return this;
};

THREE.Light.prototype.toJSON = function (meta) {
  var data = THREE.Object3D.prototype.toJSON.call(this, meta);
  data.object.color = this.color.getHex();
  data.object.intensity = this.intensity;
  if (this.groundColor !== undefined) data.object.groundColor = this.groundColor.getHex();
  if (this.distance !== undefined) data.object.distance = this.distance;
  if (this.angle !== undefined) data.object.angle = this.angle;
  if (this.decay !== undefined) data.object.decay = this.decay;
  if (this.penumbra !== undefined) data.object.penumbra = this.penumbra;
  return data;
}; // File:src/scenes/Scene.js

/**
 * @author mrdoob / http://mrdoob.com/
 */


THREE.Scene = function () {
  THREE.Object3D.call(this);
  this.type = 'Scene';
  this.fog = null;
  this.overrideMaterial = null;
  this.autoUpdate = true; // checked by the renderer
};

THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor = THREE.Scene;

THREE.Scene.prototype.copy = function (source, recursive) {
  THREE.Object3D.prototype.copy.call(this, source, recursive);
  if (source.fog !== null) this.fog = source.fog.clone();
  if (source.overrideMaterial !== null) this.overrideMaterial = source.overrideMaterial.clone();
  this.autoUpdate = source.autoUpdate;
  this.matrixAutoUpdate = source.matrixAutoUpdate;
  return this;
}; // File:src/scenes/FogExp2.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */


THREE.FogExp2 = function (color, density) {
  this.name = '';
  this.color = new THREE.Color(color);
  this.density = density !== undefined ? density : 0.00025;
};

THREE.FogExp2.prototype.clone = function () {
  return new THREE.FogExp2(this.color.getHex(), this.density);
}; // File:src/extras/objects/ImmediateRenderObject.js

/**
 * @author alteredq / http://alteredqualia.com/
 */


THREE.ImmediateRenderObject = function (material) {
  THREE.Object3D.call(this);
  this.material = material;

  this.render = function (renderCallback) {};
};

THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject; // File:src/extras/geometries/SphereBufferGeometry.js

/**
 * @author benaadams / https://twitter.com/ben_a_adams
 * based on THREE.SphereGeometry
 */

THREE.SphereBufferGeometry = function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
  THREE.BufferGeometry.call(this);
  this.type = 'SphereBufferGeometry';
  this.parameters = {
    radius: radius,
    widthSegments: widthSegments,
    heightSegments: heightSegments,
    phiStart: phiStart,
    phiLength: phiLength,
    thetaStart: thetaStart,
    thetaLength: thetaLength
  };
  radius = radius || 50;
  widthSegments = Math.max(3, Math.floor(widthSegments) || 8);
  heightSegments = Math.max(2, Math.floor(heightSegments) || 6);
  phiStart = phiStart !== undefined ? phiStart : 0;
  phiLength = phiLength !== undefined ? phiLength : Math.PI * 2;
  thetaStart = thetaStart !== undefined ? thetaStart : 0;
  thetaLength = thetaLength !== undefined ? thetaLength : Math.PI;
  var thetaEnd = thetaStart + thetaLength;
  var vertexCount = (widthSegments + 1) * (heightSegments + 1);
  var positions = new THREE.BufferAttribute(new Float32Array(vertexCount * 3), 3);
  var normals = new THREE.BufferAttribute(new Float32Array(vertexCount * 3), 3);
  var uvs = new THREE.BufferAttribute(new Float32Array(vertexCount * 2), 2);
  var index = 0,
      vertices = [],
      normal = new THREE.Vector3();

  for (var y = 0; y <= heightSegments; y++) {
    var verticesRow = [];
    var v = y / heightSegments;

    for (var x = 0; x <= widthSegments; x++) {
      var u = x / widthSegments;
      var px = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
      var py = radius * Math.cos(thetaStart + v * thetaLength);
      var pz = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
      normal.set(px, py, pz).normalize();
      positions.setXYZ(index, px, py, pz);
      normals.setXYZ(index, normal.x, normal.y, normal.z);
      uvs.setXY(index, u, 1 - v);
      verticesRow.push(index);
      index++;
    }

    vertices.push(verticesRow);
  }

  var indices = [];

  for (var y = 0; y < heightSegments; y++) {
    for (var x = 0; x < widthSegments; x++) {
      var v1 = vertices[y][x + 1];
      var v2 = vertices[y][x];
      var v3 = vertices[y + 1][x];
      var v4 = vertices[y + 1][x + 1];
      if (y !== 0 || thetaStart > 0) indices.push(v1, v2, v4);
      if (y !== heightSegments - 1 || thetaEnd < Math.PI) indices.push(v2, v3, v4);
    }
  }

  this.setIndex(new (positions.count > 65535 ? THREE.Uint32Attribute : THREE.Uint16Attribute)(indices, 1));
  this.addAttribute('position', positions);
  this.addAttribute('normal', normals);
  this.addAttribute('uv', uvs);
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius);
};

THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry; // File:src/extras/geometries/SphereGeometry.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.SphereGeometry = function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
  THREE.Geometry.call(this);
  this.type = 'SphereGeometry';
  this.parameters = {
    radius: radius,
    widthSegments: widthSegments,
    heightSegments: heightSegments,
    phiStart: phiStart,
    phiLength: phiLength,
    thetaStart: thetaStart,
    thetaLength: thetaLength
  };
  this.fromBufferGeometry(new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength));
};

THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry; // File:src/materials/Material.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Material = function () {
  Object.defineProperty(this, 'id', {
    value: THREE.MaterialIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = '';
  this.type = 'Material';
  this.side = THREE.FrontSide;
  this.opacity = 1;
  this.transparent = false;
  this.blending = THREE.NormalBlending;
  this.blendSrc = THREE.SrcAlphaFactor;
  this.blendDst = THREE.OneMinusSrcAlphaFactor;
  this.blendEquation = THREE.AddEquation;
  this.blendSrcAlpha = null;
  this.blendDstAlpha = null;
  this.blendEquationAlpha = null;
  this.depthFunc = THREE.LessEqualDepth;
  this.depthTest = true;
  this.depthWrite = true;
  this.colorWrite = true;
  this.precision = null; // override the renderer's default precision for this material

  this.polygonOffset = false;
  this.polygonOffsetFactor = 0;
  this.polygonOffsetUnits = 0;
  this.alphaTest = 0;
  this.premultipliedAlpha = false;
  this.overdraw = 0; // Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer

  this.visible = true;
  this._needsUpdate = true;
};

THREE.Material.prototype = {
  constructor: THREE.Material,

  get needsUpdate() {
    return this._needsUpdate;
  },

  set needsUpdate(value) {
    if (value === true) this.update();
    this._needsUpdate = value;
  },

  setValues: function (values) {
    if (values === undefined) return;

    for (var key in values) {
      var newValue = values[key];

      if (newValue === undefined) {
        continue;
      }

      var currentValue = this[key];

      if (currentValue === undefined) {
        continue;
      }

      if (currentValue instanceof THREE.Color) {
        currentValue.set(newValue);
      } else if (currentValue instanceof THREE.Vector3 && newValue instanceof THREE.Vector3) {
        currentValue.copy(newValue);
      } else if (key === 'overdraw') {
        // ensure overdraw is backwards-compatible with legacy boolean type
        this[key] = Number(newValue);
      } else {
        this[key] = newValue;
      }
    }
  },
  toJSON: function (meta) {
    var isRoot = meta === undefined;

    if (isRoot) {
      meta = {
        textures: {},
        images: {}
      };
    }

    var data = {
      metadata: {
        version: 4.4,
        type: 'Material',
        generator: 'Material.toJSON'
      }
    }; // standard Material serialization

    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== '') data.name = this.name;
    if (this.color instanceof THREE.Color) data.color = this.color.getHex();
    if (this.roughness !== 0.5) data.roughness = this.roughness;
    if (this.metalness !== 0.5) data.metalness = this.metalness;
    if (this.emissive instanceof THREE.Color) data.emissive = this.emissive.getHex();
    if (this.specular instanceof THREE.Color) data.specular = this.specular.getHex();
    if (this.shininess !== undefined) data.shininess = this.shininess;
    if (this.map instanceof THREE.Texture) data.map = this.map.toJSON(meta).uuid;
    if (this.alphaMap instanceof THREE.Texture) data.alphaMap = this.alphaMap.toJSON(meta).uuid;
    if (this.lightMap instanceof THREE.Texture) data.lightMap = this.lightMap.toJSON(meta).uuid;

    if (this.bumpMap instanceof THREE.Texture) {
      data.bumpMap = this.bumpMap.toJSON(meta).uuid;
      data.bumpScale = this.bumpScale;
    }

    if (this.normalMap instanceof THREE.Texture) {
      data.normalMap = this.normalMap.toJSON(meta).uuid;
      data.normalScale = this.normalScale.toArray();
    }

    if (this.displacementMap instanceof THREE.Texture) {
      data.displacementMap = this.displacementMap.toJSON(meta).uuid;
      data.displacementScale = this.displacementScale;
      data.displacementBias = this.displacementBias;
    }

    if (this.roughnessMap instanceof THREE.Texture) data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
    if (this.metalnessMap instanceof THREE.Texture) data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
    if (this.emissiveMap instanceof THREE.Texture) data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
    if (this.specularMap instanceof THREE.Texture) data.specularMap = this.specularMap.toJSON(meta).uuid;

    if (this.envMap instanceof THREE.Texture) {
      data.envMap = this.envMap.toJSON(meta).uuid;
      data.reflectivity = this.reflectivity; // Scale behind envMap
    }

    if (this.size !== undefined) data.size = this.size;
    if (this.sizeAttenuation !== undefined) data.sizeAttenuation = this.sizeAttenuation;
    if (this.vertexColors !== undefined && this.vertexColors !== THREE.NoColors) data.vertexColors = this.vertexColors;
    if (this.shading !== undefined && this.shading !== THREE.SmoothShading) data.shading = this.shading;
    if (this.blending !== undefined && this.blending !== THREE.NormalBlending) data.blending = this.blending;
    if (this.side !== undefined && this.side !== THREE.FrontSide) data.side = this.side;
    if (this.opacity < 1) data.opacity = this.opacity;
    if (this.transparent === true) data.transparent = this.transparent;
    if (this.alphaTest > 0) data.alphaTest = this.alphaTest;
    if (this.premultipliedAlpha === true) data.premultipliedAlpha = this.premultipliedAlpha;
    if (this.wireframe === true) data.wireframe = this.wireframe;
    if (this.wireframeLinewidth > 1) data.wireframeLinewidth = this.wireframeLinewidth; // TODO: Copied from Object3D.toJSON

    function extractFromCache(cache) {
      var values = [];

      for (var key in cache) {
        var data = cache[key];
        delete data.metadata;
        values.push(data);
      }

      return values;
    }

    if (isRoot) {
      var textures = extractFromCache(meta.textures);
      var images = extractFromCache(meta.images);
      if (textures.length > 0) data.textures = textures;
      if (images.length > 0) data.images = images;
    }

    return data;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (source) {
    this.name = source.name;
    this.side = source.side;
    this.opacity = source.opacity;
    this.transparent = source.transparent;
    this.blending = source.blending;
    this.blendSrc = source.blendSrc;
    this.blendDst = source.blendDst;
    this.blendEquation = source.blendEquation;
    this.blendSrcAlpha = source.blendSrcAlpha;
    this.blendDstAlpha = source.blendDstAlpha;
    this.blendEquationAlpha = source.blendEquationAlpha;
    this.depthFunc = source.depthFunc;
    this.depthTest = source.depthTest;
    this.depthWrite = source.depthWrite;
    this.colorWrite = source.colorWrite;
    this.precision = source.precision;
    this.polygonOffset = source.polygonOffset;
    this.polygonOffsetFactor = source.polygonOffsetFactor;
    this.polygonOffsetUnits = source.polygonOffsetUnits;
    this.alphaTest = source.alphaTest;
    this.premultipliedAlpha = source.premultipliedAlpha;
    this.overdraw = source.overdraw;
    this.visible = source.visible;
    return this;
  },
  update: function () {
    this.dispatchEvent({
      type: 'update'
    });
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount = 0; // File:src/materials/LineBasicMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round",
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: <bool>
 *
 *  fog: <bool>
 * }
 */

THREE.LineBasicMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'LineBasicMaterial';
  this.color = new THREE.Color(0xffffff);
  this.linewidth = 1;
  this.linecap = 'round';
  this.linejoin = 'round';
  this.blending = THREE.NormalBlending;
  this.vertexColors = THREE.NoColors;
  this.fog = true;
  this.setValues(parameters);
};

THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;

THREE.LineBasicMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.linewidth = source.linewidth;
  this.linecap = source.linecap;
  this.linejoin = source.linejoin;
  this.vertexColors = source.vertexColors;
  this.fog = source.fog;
  return this;
}; // File:src/materials/LineDashedMaterial.js

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *
 *  scale: <float>,
 *  dashSize: <float>,
 *  gapSize: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: THREE.NoColors / THREE.FaceColors / THREE.VertexColors
 *
 *  fog: <bool>
 * }
 */


THREE.LineDashedMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'LineDashedMaterial';
  this.color = new THREE.Color(0xffffff);
  this.linewidth = 1;
  this.scale = 1;
  this.dashSize = 3;
  this.gapSize = 1;
  this.blending = THREE.NormalBlending;
  this.vertexColors = THREE.NoColors;
  this.fog = true;
  this.setValues(parameters);
};

THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial;

THREE.LineDashedMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.linewidth = source.linewidth;
  this.scale = source.scale;
  this.dashSize = source.dashSize;
  this.gapSize = source.gapSize;
  this.vertexColors = source.vertexColors;
  this.fog = source.fog;
  return this;
}; // File:src/materials/PointsMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *  sizeAttenuation: <bool>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: <bool>,
 *
 *  fog: <bool>
 * }
 */


THREE.PointsMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'PointsMaterial';
  this.color = new THREE.Color(0xffffff);
  this.map = null;
  this.size = 1;
  this.sizeAttenuation = true;
  this.blending = THREE.NormalBlending;
  this.vertexColors = THREE.NoColors;
  this.fog = true;
  this.setValues(parameters);
};

THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial;

THREE.PointsMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.map = source.map;
  this.size = source.size;
  this.sizeAttenuation = source.sizeAttenuation;
  this.vertexColors = source.vertexColors;
  this.fog = source.fog;
  return this;
}; // File:src/materials/MeshDepthMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */


THREE.MeshDepthMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'MeshDepthMaterial';
  this.morphTargets = false;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.setValues(parameters);
};

THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;

THREE.MeshDepthMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.wireframe = source.wireframe;
  this.wireframeLinewidth = source.wireframeLinewidth;
  return this;
}; // File:src/materials/MeshNormalMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */


THREE.MeshNormalMaterial = function (parameters) {
  THREE.Material.call(this, parameters);
  this.type = 'MeshNormalMaterial';
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.morphTargets = false;
  this.setValues(parameters);
};

THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;

THREE.MeshNormalMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.wireframe = source.wireframe;
  this.wireframeLinewidth = source.wireframeLinewidth;
  return this;
}; // File:src/materials/ShaderMaterial.js

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  defines: { "label" : "value" },
 *  uniforms: { "parameter1": { type: "f", value: 1.0 }, "parameter2": { type: "i" value2: 2 } },
 *
 *  fragmentShader: <string>,
 *  vertexShader: <string>,
 *
 *  shading: THREE.SmoothShading,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  lights: <bool>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */


THREE.ShaderMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'ShaderMaterial';
  this.defines = {};
  this.uniforms = {};
  this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}';
  this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}';
  this.shading = THREE.SmoothShading;
  this.linewidth = 1;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.fog = false; // set to use scene fog

  this.lights = false; // set to use scene lights

  this.vertexColors = THREE.NoColors; // set to use "color" attribute stream

  this.skinning = false; // set to use skinning attribute streams

  this.morphTargets = false; // set to use morph targets

  this.morphNormals = false; // set to use morph normals

  this.extensions = {
    derivatives: false,
    // set to use derivatives
    fragDepth: false,
    // set to use fragment depth values
    drawBuffers: false,
    // set to use draw buffers
    shaderTextureLOD: false // set to use shader texture LOD

  }; // When rendered geometry doesn't include these attributes but the material does,
  // use these default values in WebGL. This avoids errors when buffer data is missing.

  this.defaultAttributeValues = {
    'color': [1, 1, 1],
    'uv': [0, 0],
    'uv2': [0, 0]
  };
  this.index0AttributeName = undefined;

  if (parameters !== undefined) {
    if (parameters.attributes !== undefined) ;

    this.setValues(parameters);
  }
};

THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial;

THREE.ShaderMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.fragmentShader = source.fragmentShader;
  this.vertexShader = source.vertexShader;
  this.uniforms = THREE.UniformsUtils.clone(source.uniforms);
  this.defines = source.defines;
  this.shading = source.shading;
  this.wireframe = source.wireframe;
  this.wireframeLinewidth = source.wireframeLinewidth;
  this.fog = source.fog;
  this.lights = source.lights;
  this.vertexColors = source.vertexColors;
  this.skinning = source.skinning;
  this.morphTargets = source.morphTargets;
  this.morphNormals = source.morphNormals;
  this.extensions = source.extensions;
  return this;
};

THREE.ShaderMaterial.prototype.toJSON = function (meta) {
  var data = THREE.Material.prototype.toJSON.call(this, meta);
  data.uniforms = this.uniforms;
  data.vertexShader = this.vertexShader;
  data.fragmentShader = this.fragmentShader;
  return data;
}; // File:src/materials/MeshBasicMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *
 *  fog: <bool>
 * }
 */


THREE.MeshBasicMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'MeshBasicMaterial';
  this.color = new THREE.Color(0xffffff); // emissive

  this.map = null;
  this.aoMap = null;
  this.aoMapIntensity = 1.0;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.fog = true;
  this.shading = THREE.SmoothShading;
  this.blending = THREE.NormalBlending;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = 'round';
  this.wireframeLinejoin = 'round';
  this.vertexColors = THREE.NoColors;
  this.skinning = false;
  this.morphTargets = false;
  this.setValues(parameters);
};

THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;

THREE.MeshBasicMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.map = source.map;
  this.aoMap = source.aoMap;
  this.aoMapIntensity = source.aoMapIntensity;
  this.specularMap = source.specularMap;
  this.alphaMap = source.alphaMap;
  this.envMap = source.envMap;
  this.combine = source.combine;
  this.reflectivity = source.reflectivity;
  this.refractionRatio = source.refractionRatio;
  this.fog = source.fog;
  this.shading = source.shading;
  this.wireframe = source.wireframe;
  this.wireframeLinewidth = source.wireframeLinewidth;
  this.wireframeLinecap = source.wireframeLinecap;
  this.wireframeLinejoin = source.wireframeLinejoin;
  this.vertexColors = source.vertexColors;
  this.skinning = source.skinning;
  this.morphTargets = source.morphTargets;
  return this;
}; // File:src/materials/MeshLambertMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */


THREE.MeshLambertMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'MeshLambertMaterial';
  this.color = new THREE.Color(0xffffff); // diffuse

  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1.0;
  this.aoMap = null;
  this.aoMapIntensity = 1.0;
  this.emissive = new THREE.Color(0x000000);
  this.emissiveIntensity = 1.0;
  this.emissiveMap = null;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.fog = true;
  this.blending = THREE.NormalBlending;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = 'round';
  this.wireframeLinejoin = 'round';
  this.vertexColors = THREE.NoColors;
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.setValues(parameters);
};

THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;

THREE.MeshLambertMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.map = source.map;
  this.lightMap = source.lightMap;
  this.lightMapIntensity = source.lightMapIntensity;
  this.aoMap = source.aoMap;
  this.aoMapIntensity = source.aoMapIntensity;
  this.emissive.copy(source.emissive);
  this.emissiveMap = source.emissiveMap;
  this.emissiveIntensity = source.emissiveIntensity;
  this.specularMap = source.specularMap;
  this.alphaMap = source.alphaMap;
  this.envMap = source.envMap;
  this.combine = source.combine;
  this.reflectivity = source.reflectivity;
  this.refractionRatio = source.refractionRatio;
  this.fog = source.fog;
  this.wireframe = source.wireframe;
  this.wireframeLinewidth = source.wireframeLinewidth;
  this.wireframeLinecap = source.wireframeLinecap;
  this.wireframeLinejoin = source.wireframeLinejoin;
  this.vertexColors = source.vertexColors;
  this.skinning = source.skinning;
  this.morphTargets = source.morphTargets;
  this.morphNormals = source.morphNormals;
  return this;
}; // File:src/materials/MeshStandardMaterial.js

/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  color: <hex>,
 *  roughness: <float>,
 *  metalness: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  roughnessMap: new THREE.Texture( <Image> ),
 *
 *  metalnessMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  envMapIntensity: <float>
 *
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */


THREE.MeshStandardMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'MeshStandardMaterial';
  this.color = new THREE.Color(0xffffff); // diffuse

  this.roughness = 0.5;
  this.metalness = 0.5;
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1.0;
  this.aoMap = null;
  this.aoMapIntensity = 1.0;
  this.emissive = new THREE.Color(0x000000);
  this.emissiveIntensity = 1.0;
  this.emissiveMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalScale = new THREE.Vector2(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.roughnessMap = null;
  this.metalnessMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.envMapIntensity = 1.0;
  this.refractionRatio = 0.98;
  this.fog = true;
  this.shading = THREE.SmoothShading;
  this.blending = THREE.NormalBlending;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = 'round';
  this.wireframeLinejoin = 'round';
  this.vertexColors = THREE.NoColors;
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.setValues(parameters);
};

THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial;

THREE.MeshStandardMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.roughness = source.roughness;
  this.metalness = source.metalness;
  this.map = source.map;
  this.lightMap = source.lightMap;
  this.lightMapIntensity = source.lightMapIntensity;
  this.aoMap = source.aoMap;
  this.aoMapIntensity = source.aoMapIntensity;
  this.emissive.copy(source.emissive);
  this.emissiveMap = source.emissiveMap;
  this.emissiveIntensity = source.emissiveIntensity;
  this.bumpMap = source.bumpMap;
  this.bumpScale = source.bumpScale;
  this.normalMap = source.normalMap;
  this.normalScale.copy(source.normalScale);
  this.displacementMap = source.displacementMap;
  this.displacementScale = source.displacementScale;
  this.displacementBias = source.displacementBias;
  this.roughnessMap = source.roughnessMap;
  this.metalnessMap = source.metalnessMap;
  this.alphaMap = source.alphaMap;
  this.envMap = source.envMap;
  this.envMapIntensity = source.envMapIntensity;
  this.refractionRatio = source.refractionRatio;
  this.fog = source.fog;
  this.shading = source.shading;
  this.wireframe = source.wireframe;
  this.wireframeLinewidth = source.wireframeLinewidth;
  this.wireframeLinecap = source.wireframeLinecap;
  this.wireframeLinejoin = source.wireframeLinejoin;
  this.vertexColors = source.vertexColors;
  this.skinning = source.skinning;
  this.morphTargets = source.morphTargets;
  this.morphNormals = source.morphNormals;
  return this;
}; // File:src/materials/MeshPhongMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  specular: <hex>,
 *  shininess: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */


THREE.MeshPhongMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'MeshPhongMaterial';
  this.color = new THREE.Color(0xffffff); // diffuse

  this.specular = new THREE.Color(0x111111);
  this.shininess = 30;
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1.0;
  this.aoMap = null;
  this.aoMapIntensity = 1.0;
  this.emissive = new THREE.Color(0x000000);
  this.emissiveIntensity = 1.0;
  this.emissiveMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalScale = new THREE.Vector2(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.fog = true;
  this.shading = THREE.SmoothShading;
  this.blending = THREE.NormalBlending;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = 'round';
  this.wireframeLinejoin = 'round';
  this.vertexColors = THREE.NoColors;
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.setValues(parameters);
};

THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;

THREE.MeshPhongMaterial.prototype.copy = function (source) {
  THREE.Material.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.specular.copy(source.specular);
  this.shininess = source.shininess;
  this.map = source.map;
  this.lightMap = source.lightMap;
  this.lightMapIntensity = source.lightMapIntensity;
  this.aoMap = source.aoMap;
  this.aoMapIntensity = source.aoMapIntensity;
  this.emissive.copy(source.emissive);
  this.emissiveMap = source.emissiveMap;
  this.emissiveIntensity = source.emissiveIntensity;
  this.bumpMap = source.bumpMap;
  this.bumpScale = source.bumpScale;
  this.normalMap = source.normalMap;
  this.normalScale.copy(source.normalScale);
  this.displacementMap = source.displacementMap;
  this.displacementScale = source.displacementScale;
  this.displacementBias = source.displacementBias;
  this.specularMap = source.specularMap;
  this.alphaMap = source.alphaMap;
  this.envMap = source.envMap;
  this.combine = source.combine;
  this.reflectivity = source.reflectivity;
  this.refractionRatio = source.refractionRatio;
  this.fog = source.fog;
  this.shading = source.shading;
  this.wireframe = source.wireframe;
  this.wireframeLinewidth = source.wireframeLinewidth;
  this.wireframeLinecap = source.wireframeLinecap;
  this.wireframeLinejoin = source.wireframeLinejoin;
  this.vertexColors = source.vertexColors;
  this.skinning = source.skinning;
  this.morphTargets = source.morphTargets;
  this.morphNormals = source.morphNormals;
  return this;
}; // File:src/materials/MultiMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 */


THREE.MultiMaterial = function (materials) {
  this.uuid = THREE.Math.generateUUID();
  this.type = 'MultiMaterial';
  this.materials = materials instanceof Array ? materials : [];
  this.visible = true;
};

THREE.MultiMaterial.prototype = {
  constructor: THREE.MultiMaterial,
  toJSON: function (meta) {
    var output = {
      metadata: {
        version: 4.2,
        type: 'material',
        generator: 'MaterialExporter'
      },
      uuid: this.uuid,
      type: this.type,
      materials: []
    };
    var materials = this.materials;

    for (var i = 0, l = materials.length; i < l; i++) {
      var material = materials[i].toJSON(meta);
      delete material.metadata;
      output.materials.push(material);
    }

    output.visible = this.visible;
    return output;
  },
  clone: function () {
    var material = new this.constructor();

    for (var i = 0; i < this.materials.length; i++) {
      material.materials.push(this.materials[i].clone());
    }

    material.visible = this.visible;
    return material;
  }
}; // File:src/materials/RawShaderMaterial.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.RawShaderMaterial = function (parameters) {
  THREE.ShaderMaterial.call(this, parameters);
  this.type = 'RawShaderMaterial';
};

THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial; // File:src/textures/Texture.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */

THREE.Texture = function (image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
  Object.defineProperty(this, 'id', {
    value: THREE.TextureIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = '';
  this.sourceFile = '';
  this.image = image !== undefined ? image : THREE.Texture.DEFAULT_IMAGE;
  this.mipmaps = [];
  this.mapping = mapping !== undefined ? mapping : THREE.Texture.DEFAULT_MAPPING;
  this.wrapS = wrapS !== undefined ? wrapS : THREE.ClampToEdgeWrapping;
  this.wrapT = wrapT !== undefined ? wrapT : THREE.ClampToEdgeWrapping;
  this.magFilter = magFilter !== undefined ? magFilter : THREE.LinearFilter;
  this.minFilter = minFilter !== undefined ? minFilter : THREE.LinearMipMapLinearFilter;
  this.anisotropy = anisotropy !== undefined ? anisotropy : 1;
  this.format = format !== undefined ? format : THREE.RGBAFormat;
  this.type = type !== undefined ? type : THREE.UnsignedByteType;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.generateMipmaps = true;
  this.premultiplyAlpha = false;
  this.flipY = true;
  this.unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
  // Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
  //
  // Also changing the encoding after already used by a Material will not automatically make the Material
  // update.  You need to explicitly call Material.needsUpdate to trigger it to recompile.

  this.encoding = THREE.LinearEncoding;
  this.version = 0;
  this.onUpdate = null;
};

THREE.Texture.DEFAULT_IMAGE = undefined;
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping;
THREE.Texture.prototype = {
  constructor: THREE.Texture,

  set needsUpdate(value) {
    if (value === true) this.version++;
  },

  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (source) {
    this.image = source.image;
    this.mipmaps = source.mipmaps.slice(0);
    this.mapping = source.mapping;
    this.wrapS = source.wrapS;
    this.wrapT = source.wrapT;
    this.magFilter = source.magFilter;
    this.minFilter = source.minFilter;
    this.anisotropy = source.anisotropy;
    this.format = source.format;
    this.type = source.type;
    this.offset.copy(source.offset);
    this.repeat.copy(source.repeat);
    this.generateMipmaps = source.generateMipmaps;
    this.premultiplyAlpha = source.premultiplyAlpha;
    this.flipY = source.flipY;
    this.unpackAlignment = source.unpackAlignment;
    this.encoding = source.encoding;
    return this;
  },
  toJSON: function (meta) {
    if (meta.textures[this.uuid] !== undefined) {
      return meta.textures[this.uuid];
    }

    function getDataURL(image) {
      var canvas;

      if (image.toDataURL !== undefined) {
        canvas = image;
      } else {
        canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
      }

      if (canvas.width > 2048 || canvas.height > 2048) {
        return canvas.toDataURL('image/jpeg', 0.6);
      } else {
        return canvas.toDataURL('image/png');
      }
    }

    var output = {
      metadata: {
        version: 4.4,
        type: 'Texture',
        generator: 'Texture.toJSON'
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      wrap: [this.wrapS, this.wrapT],
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy
    };

    if (this.image !== undefined) {
      // TODO: Move to THREE.Image
      var image = this.image;

      if (image.uuid === undefined) {
        image.uuid = THREE.Math.generateUUID(); // UGH
      }

      if (meta.images[image.uuid] === undefined) {
        meta.images[image.uuid] = {
          uuid: image.uuid,
          url: getDataURL(image)
        };
      }

      output.image = image.uuid;
    }

    meta.textures[this.uuid] = output;
    return output;
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    });
  },
  transformUv: function (uv) {
    if (this.mapping !== THREE.UVMapping) return;
    uv.multiply(this.repeat);
    uv.add(this.offset);

    if (uv.x < 0 || uv.x > 1) {
      switch (this.wrapS) {
        case THREE.RepeatWrapping:
          uv.x = uv.x - Math.floor(uv.x);
          break;

        case THREE.ClampToEdgeWrapping:
          uv.x = uv.x < 0 ? 0 : 1;
          break;

        case THREE.MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.x) % 2) === 1) {
            uv.x = Math.ceil(uv.x) - uv.x;
          } else {
            uv.x = uv.x - Math.floor(uv.x);
          }

          break;
      }
    }

    if (uv.y < 0 || uv.y > 1) {
      switch (this.wrapT) {
        case THREE.RepeatWrapping:
          uv.y = uv.y - Math.floor(uv.y);
          break;

        case THREE.ClampToEdgeWrapping:
          uv.y = uv.y < 0 ? 0 : 1;
          break;

        case THREE.MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.y) % 2) === 1) {
            uv.y = Math.ceil(uv.y) - uv.y;
          } else {
            uv.y = uv.y - Math.floor(uv.y);
          }

          break;
      }
    }

    if (this.flipY) {
      uv.y = 1 - uv.y;
    }
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount = 0; // File:src/textures/DataTexture.js

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.DataTexture = function (data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy) {
  THREE.Texture.call(this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
  this.image = {
    data: data,
    width: width,
    height: height
  };
  this.magFilter = magFilter !== undefined ? magFilter : THREE.NearestFilter;
  this.minFilter = minFilter !== undefined ? minFilter : THREE.NearestFilter;
  this.flipY = false;
  this.generateMipmaps = false;
};

THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.constructor = THREE.DataTexture; // File:src/textures/CompressedTexture.js

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.CompressedTexture = function (mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy) {
  THREE.Texture.call(this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
  this.image = {
    width: width,
    height: height
  };
  this.mipmaps = mipmaps; // no flipping for cube textures
  // (also flipping doesn't work for compressed textures )

  this.flipY = false; // can't generate mipmaps for compressed textures
  // mips must be embedded in DDS files

  this.generateMipmaps = false;
};

THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture; // File:src/textures/CubeTexture.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.CubeTexture = function (images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
  images = images !== undefined ? images : [];
  mapping = mapping !== undefined ? mapping : THREE.CubeReflectionMapping;
  THREE.Texture.call(this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
  this.flipY = false;
};

THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture;
Object.defineProperty(THREE.CubeTexture.prototype, 'images', {
  get: function () {
    return this.image;
  },
  set: function (value) {
    this.image = value;
  }
}); // File:src/textures/VideoTexture.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.VideoTexture = function (video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
  THREE.Texture.call(this, video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
  this.generateMipmaps = false;
  var scope = this;

  function update() {
    requestAnimationFrame(update);

    if (video.readyState >= video.HAVE_CURRENT_DATA) {
      scope.needsUpdate = true;
    }
  }

  update();
};

THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture; // File:src/objects/Sprite.js

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Sprite = function () {
  var indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
  var vertices = new Float32Array([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0]);
  var uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
  var geometry = new THREE.BufferGeometry();
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  return function Sprite(material) {
    THREE.Object3D.call(this);
    this.type = 'Sprite';
    this.geometry = geometry;
    this.material = material !== undefined ? material : new THREE.SpriteMaterial();
  };
}();

THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor = THREE.Sprite;

THREE.Sprite.prototype.raycast = function () {
  var matrixPosition = new THREE.Vector3();
  return function raycast(raycaster, intersects) {
    matrixPosition.setFromMatrixPosition(this.matrixWorld);
    var distanceSq = raycaster.ray.distanceSqToPoint(matrixPosition);
    var guessSizeSq = this.scale.x * this.scale.y;

    if (distanceSq > guessSizeSq) {
      return;
    }

    intersects.push({
      distance: Math.sqrt(distanceSq),
      point: this.position,
      face: null,
      object: this
    });
  };
}();

THREE.Sprite.prototype.clone = function () {
  return new this.constructor(this.material).copy(this);
}; // Backwards compatibility


THREE.Particle = THREE.Sprite; // File:src/objects/LensFlare.js

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.LensFlare = function (texture, size, distance, blending, color) {
  THREE.Object3D.call(this);
  this.lensFlares = [];
  this.positionScreen = new THREE.Vector3();
  this.customUpdateCallback = undefined;

  if (texture !== undefined) {
    this.add(texture, size, distance, blending, color);
  }
};

THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.constructor = THREE.LensFlare;
/*
 * Add: adds another flare
 */

THREE.LensFlare.prototype.add = function (texture, size, distance, blending, color, opacity) {
  if (size === undefined) size = -1;
  if (distance === undefined) distance = 0;
  if (opacity === undefined) opacity = 1;
  if (color === undefined) color = new THREE.Color(0xffffff);
  if (blending === undefined) blending = THREE.NormalBlending;
  distance = Math.min(distance, Math.max(0, distance));
  this.lensFlares.push({
    texture: texture,
    // THREE.Texture
    size: size,
    // size in pixels (-1 = use texture.width)
    distance: distance,
    // distance (0-1) from light source (0=at light source)
    x: 0,
    y: 0,
    z: 0,
    // screen position (-1 => 1) z = 0 is in front z = 1 is back
    scale: 1,
    // scale
    rotation: 0,
    // rotation
    opacity: opacity,
    // opacity
    color: color,
    // color
    blending: blending // blending

  });
};
/*
 * Update lens flares update positions on all flares based on the screen position
 * Set myLensFlare.customUpdateCallback to alter the flares in your project specific way.
 */


THREE.LensFlare.prototype.updateLensFlares = function () {
  var f,
      fl = this.lensFlares.length;
  var flare;
  var vecX = -this.positionScreen.x * 2;
  var vecY = -this.positionScreen.y * 2;

  for (f = 0; f < fl; f++) {
    flare = this.lensFlares[f];
    flare.x = this.positionScreen.x + vecX * flare.distance;
    flare.y = this.positionScreen.y + vecY * flare.distance;
    flare.wantedRotation = flare.x * Math.PI * 0.25;
    flare.rotation += (flare.wantedRotation - flare.rotation) * 0.25;
  }
};

THREE.LensFlare.prototype.copy = function (source) {
  THREE.Object3D.prototype.copy.call(this, source);
  this.positionScreen.copy(source.positionScreen);
  this.customUpdateCallback = source.customUpdateCallback;

  for (var i = 0, l = source.lensFlares.length; i < l; i++) {
    this.lensFlares.push(source.lensFlares[i]);
  }

  return this;
}; // File:src/objects/Line.js

/**
 * @author mrdoob / http://mrdoob.com/
 */


THREE.Line = function (geometry, material, mode) {
  if (mode === 1) {
    return new THREE.LineSegments(geometry, material);
  }

  THREE.Object3D.call(this);
  this.type = 'Line';
  this.geometry = geometry !== undefined ? geometry : new THREE.Geometry();
  this.material = material !== undefined ? material : new THREE.LineBasicMaterial({
    color: Math.random() * 0xffffff
  });
};

THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.constructor = THREE.Line;

THREE.Line.prototype.raycast = function () {
  var inverseMatrix = new THREE.Matrix4();
  var ray = new THREE.Ray();
  var sphere = new THREE.Sphere();
  return function raycast(raycaster, intersects) {
    var precision = raycaster.linePrecision;
    var precisionSq = precision * precision;
    var geometry = this.geometry;
    var matrixWorld = this.matrixWorld; // Checking boundingSphere distance to ray

    if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
    sphere.copy(geometry.boundingSphere);
    sphere.applyMatrix4(matrixWorld);
    if (raycaster.ray.intersectsSphere(sphere) === false) return; //

    inverseMatrix.getInverse(matrixWorld);
    ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);
    var vStart = new THREE.Vector3();
    var vEnd = new THREE.Vector3();
    var interSegment = new THREE.Vector3();
    var interRay = new THREE.Vector3();
    var step = this instanceof THREE.LineSegments ? 2 : 1;

    if (geometry instanceof THREE.BufferGeometry) {
      var index = geometry.index;
      var attributes = geometry.attributes;
      var positions = attributes.position.array;

      if (index !== null) {
        var indices = index.array;

        for (var i = 0, l = indices.length - 1; i < l; i += step) {
          var a = indices[i];
          var b = indices[i + 1];
          vStart.fromArray(positions, a * 3);
          vEnd.fromArray(positions, b * 3);
          var distSq = ray.distanceSqToSegment(vStart, vEnd, interRay, interSegment);
          if (distSq > precisionSq) continue;
          interRay.applyMatrix4(this.matrixWorld); //Move back to world space for distance calculation

          var distance = raycaster.ray.origin.distanceTo(interRay);
          if (distance < raycaster.near || distance > raycaster.far) continue;
          intersects.push({
            distance: distance,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: interSegment.clone().applyMatrix4(this.matrixWorld),
            index: i,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      } else {
        for (var i = 0, l = positions.length / 3 - 1; i < l; i += step) {
          vStart.fromArray(positions, 3 * i);
          vEnd.fromArray(positions, 3 * i + 3);
          var distSq = ray.distanceSqToSegment(vStart, vEnd, interRay, interSegment);
          if (distSq > precisionSq) continue;
          interRay.applyMatrix4(this.matrixWorld); //Move back to world space for distance calculation

          var distance = raycaster.ray.origin.distanceTo(interRay);
          if (distance < raycaster.near || distance > raycaster.far) continue;
          intersects.push({
            distance: distance,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: interSegment.clone().applyMatrix4(this.matrixWorld),
            index: i,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      }
    } else if (geometry instanceof THREE.Geometry) {
      var vertices = geometry.vertices;
      var nbVertices = vertices.length;

      for (var i = 0; i < nbVertices - 1; i += step) {
        var distSq = ray.distanceSqToSegment(vertices[i], vertices[i + 1], interRay, interSegment);
        if (distSq > precisionSq) continue;
        interRay.applyMatrix4(this.matrixWorld); //Move back to world space for distance calculation

        var distance = raycaster.ray.origin.distanceTo(interRay);
        if (distance < raycaster.near || distance > raycaster.far) continue;
        intersects.push({
          distance: distance,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: interSegment.clone().applyMatrix4(this.matrixWorld),
          index: i,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  };
}();

THREE.Line.prototype.clone = function () {
  return new this.constructor(this.geometry, this.material).copy(this);
}; // DEPRECATED


THREE.LineStrip = 0;
THREE.LinePieces = 1; // File:src/objects/LineSegments.js

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.LineSegments = function (geometry, material) {
  THREE.Line.call(this, geometry, material);
  this.type = 'LineSegments';
};

THREE.LineSegments.prototype = Object.create(THREE.Line.prototype);
THREE.LineSegments.prototype.constructor = THREE.LineSegments; // File:src/objects/Mesh.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author jonobr1 / http://jonobr1.com/
 */

THREE.Mesh = function (geometry, material) {
  THREE.Object3D.call(this);
  this.type = 'Mesh';
  this.geometry = geometry !== undefined ? geometry : new THREE.Geometry();
  this.material = material !== undefined ? material : new THREE.MeshBasicMaterial({
    color: Math.random() * 0xffffff
  });
  this.drawMode = THREE.TrianglesDrawMode;
  this.updateMorphTargets();
};

THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor = THREE.Mesh;

THREE.Mesh.prototype.setDrawMode = function (value) {
  this.drawMode = value;
};

THREE.Mesh.prototype.updateMorphTargets = function () {
  if (this.geometry.morphTargets !== undefined && this.geometry.morphTargets.length > 0) {
    this.morphTargetBase = -1;
    this.morphTargetInfluences = [];
    this.morphTargetDictionary = {};

    for (var m = 0, ml = this.geometry.morphTargets.length; m < ml; m++) {
      this.morphTargetInfluences.push(0);
      this.morphTargetDictionary[this.geometry.morphTargets[m].name] = m;
    }
  }
};

THREE.Mesh.prototype.getMorphTargetIndexByName = function (name) {
  if (this.morphTargetDictionary[name] !== undefined) {
    return this.morphTargetDictionary[name];
  }

  return 0;
};

THREE.Mesh.prototype.raycast = function () {
  var inverseMatrix = new THREE.Matrix4();
  var ray = new THREE.Ray();
  var sphere = new THREE.Sphere();
  var vA = new THREE.Vector3();
  var vB = new THREE.Vector3();
  var vC = new THREE.Vector3();
  var tempA = new THREE.Vector3();
  var tempB = new THREE.Vector3();
  var tempC = new THREE.Vector3();
  var uvA = new THREE.Vector2();
  var uvB = new THREE.Vector2();
  var uvC = new THREE.Vector2();
  var barycoord = new THREE.Vector3();
  var intersectionPoint = new THREE.Vector3();
  var intersectionPointWorld = new THREE.Vector3();

  function uvIntersection(point, p1, p2, p3, uv1, uv2, uv3) {
    THREE.Triangle.barycoordFromPoint(point, p1, p2, p3, barycoord);
    uv1.multiplyScalar(barycoord.x);
    uv2.multiplyScalar(barycoord.y);
    uv3.multiplyScalar(barycoord.z);
    uv1.add(uv2).add(uv3);
    return uv1.clone();
  }

  function checkIntersection(object, raycaster, ray, pA, pB, pC, point) {
    var intersect;
    var material = object.material;

    if (material.side === THREE.BackSide) {
      intersect = ray.intersectTriangle(pC, pB, pA, true, point);
    } else {
      intersect = ray.intersectTriangle(pA, pB, pC, material.side !== THREE.DoubleSide, point);
    }

    if (intersect === null) return null;
    intersectionPointWorld.copy(point);
    intersectionPointWorld.applyMatrix4(object.matrixWorld);
    var distance = raycaster.ray.origin.distanceTo(intersectionPointWorld);
    if (distance < raycaster.near || distance > raycaster.far) return null;
    return {
      distance: distance,
      point: intersectionPointWorld.clone(),
      object: object
    };
  }

  function checkBufferGeometryIntersection(object, raycaster, ray, positions, uvs, a, b, c) {
    vA.fromArray(positions, a * 3);
    vB.fromArray(positions, b * 3);
    vC.fromArray(positions, c * 3);
    var intersection = checkIntersection(object, raycaster, ray, vA, vB, vC, intersectionPoint);

    if (intersection) {
      if (uvs) {
        uvA.fromArray(uvs, a * 2);
        uvB.fromArray(uvs, b * 2);
        uvC.fromArray(uvs, c * 2);
        intersection.uv = uvIntersection(intersectionPoint, vA, vB, vC, uvA, uvB, uvC);
      }

      intersection.face = new THREE.Face3(a, b, c, THREE.Triangle.normal(vA, vB, vC));
      intersection.faceIndex = a;
    }

    return intersection;
  }

  return function raycast(raycaster, intersects) {
    var geometry = this.geometry;
    var material = this.material;
    var matrixWorld = this.matrixWorld;
    if (material === undefined) return; // Checking boundingSphere distance to ray

    if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
    sphere.copy(geometry.boundingSphere);
    sphere.applyMatrix4(matrixWorld);
    if (raycaster.ray.intersectsSphere(sphere) === false) return; //

    inverseMatrix.getInverse(matrixWorld);
    ray.copy(raycaster.ray).applyMatrix4(inverseMatrix); // Check boundingBox before continuing

    if (geometry.boundingBox !== null) {
      if (ray.intersectsBox(geometry.boundingBox) === false) return;
    }

    var uvs, intersection;

    if (geometry instanceof THREE.BufferGeometry) {
      var a, b, c;
      var index = geometry.index;
      var attributes = geometry.attributes;
      var positions = attributes.position.array;

      if (attributes.uv !== undefined) {
        uvs = attributes.uv.array;
      }

      if (index !== null) {
        var indices = index.array;

        for (var i = 0, l = indices.length; i < l; i += 3) {
          a = indices[i];
          b = indices[i + 1];
          c = indices[i + 2];
          intersection = checkBufferGeometryIntersection(this, raycaster, ray, positions, uvs, a, b, c);

          if (intersection) {
            intersection.faceIndex = Math.floor(i / 3); // triangle number in indices buffer semantics

            intersects.push(intersection);
          }
        }
      } else {
        for (var i = 0, l = positions.length; i < l; i += 9) {
          a = i / 3;
          b = a + 1;
          c = a + 2;
          intersection = checkBufferGeometryIntersection(this, raycaster, ray, positions, uvs, a, b, c);

          if (intersection) {
            intersection.index = a; // triangle number in positions buffer semantics

            intersects.push(intersection);
          }
        }
      }
    } else if (geometry instanceof THREE.Geometry) {
      var fvA, fvB, fvC;
      var isFaceMaterial = material instanceof THREE.MultiMaterial;
      var materials = isFaceMaterial === true ? material.materials : null;
      var vertices = geometry.vertices;
      var faces = geometry.faces;
      var faceVertexUvs = geometry.faceVertexUvs[0];
      if (faceVertexUvs.length > 0) uvs = faceVertexUvs;

      for (var f = 0, fl = faces.length; f < fl; f++) {
        var face = faces[f];
        var faceMaterial = isFaceMaterial === true ? materials[face.materialIndex] : material;
        if (faceMaterial === undefined) continue;
        fvA = vertices[face.a];
        fvB = vertices[face.b];
        fvC = vertices[face.c];

        if (faceMaterial.morphTargets === true) {
          var morphTargets = geometry.morphTargets;
          var morphInfluences = this.morphTargetInfluences;
          vA.set(0, 0, 0);
          vB.set(0, 0, 0);
          vC.set(0, 0, 0);

          for (var t = 0, tl = morphTargets.length; t < tl; t++) {
            var influence = morphInfluences[t];
            if (influence === 0) continue;
            var targets = morphTargets[t].vertices;
            vA.addScaledVector(tempA.subVectors(targets[face.a], fvA), influence);
            vB.addScaledVector(tempB.subVectors(targets[face.b], fvB), influence);
            vC.addScaledVector(tempC.subVectors(targets[face.c], fvC), influence);
          }

          vA.add(fvA);
          vB.add(fvB);
          vC.add(fvC);
          fvA = vA;
          fvB = vB;
          fvC = vC;
        }

        intersection = checkIntersection(this, raycaster, ray, fvA, fvB, fvC, intersectionPoint);

        if (intersection) {
          if (uvs) {
            var uvs_f = uvs[f];
            uvA.copy(uvs_f[0]);
            uvB.copy(uvs_f[1]);
            uvC.copy(uvs_f[2]);
            intersection.uv = uvIntersection(intersectionPoint, fvA, fvB, fvC, uvA, uvB, uvC);
          }

          intersection.face = face;
          intersection.faceIndex = f;
          intersects.push(intersection);
        }
      }
    }
  };
}();

THREE.Mesh.prototype.clone = function () {
  return new this.constructor(this.geometry, this.material).copy(this);
}; // File:src/objects/SkinnedMesh.js

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */


THREE.SkinnedMesh = function (geometry, material, useVertexTexture) {
  THREE.Mesh.call(this, geometry, material);
  this.type = 'SkinnedMesh';
  this.bindMode = "attached";
  this.bindMatrix = new THREE.Matrix4();
  this.bindMatrixInverse = new THREE.Matrix4(); // init bones
  // TODO: remove bone creation as there is no reason (other than
  // convenience) for THREE.SkinnedMesh to do this.

  var bones = [];

  if (this.geometry && this.geometry.bones !== undefined) {
    var bone, gbone;

    for (var b = 0, bl = this.geometry.bones.length; b < bl; ++b) {
      gbone = this.geometry.bones[b];
      bone = new THREE.Bone(this);
      bones.push(bone);
      bone.name = gbone.name;
      bone.position.fromArray(gbone.pos);
      bone.quaternion.fromArray(gbone.rotq);
      if (gbone.scl !== undefined) bone.scale.fromArray(gbone.scl);
    }

    for (var b = 0, bl = this.geometry.bones.length; b < bl; ++b) {
      gbone = this.geometry.bones[b];

      if (gbone.parent !== -1 && gbone.parent !== null) {
        bones[gbone.parent].add(bones[b]);
      } else {
        this.add(bones[b]);
      }
    }
  }

  this.normalizeSkinWeights();
  this.updateMatrixWorld(true);
  this.bind(new THREE.Skeleton(bones, undefined, useVertexTexture), this.matrixWorld);
};

THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;

THREE.SkinnedMesh.prototype.bind = function (skeleton, bindMatrix) {
  this.skeleton = skeleton;

  if (bindMatrix === undefined) {
    this.updateMatrixWorld(true);
    this.skeleton.calculateInverses();
    bindMatrix = this.matrixWorld;
  }

  this.bindMatrix.copy(bindMatrix);
  this.bindMatrixInverse.getInverse(bindMatrix);
};

THREE.SkinnedMesh.prototype.pose = function () {
  this.skeleton.pose();
};

THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
  if (this.geometry instanceof THREE.Geometry) {
    for (var i = 0; i < this.geometry.skinWeights.length; i++) {
      var sw = this.geometry.skinWeights[i];
      var scale = 1.0 / sw.lengthManhattan();

      if (scale !== Infinity) {
        sw.multiplyScalar(scale);
      } else {
        sw.set(1, 0, 0, 0); // do something reasonable
      }
    }
  } else if (this.geometry instanceof THREE.BufferGeometry) {
    var vec = new THREE.Vector4();
    var skinWeight = this.geometry.attributes.skinWeight;

    for (var i = 0; i < skinWeight.count; i++) {
      vec.x = skinWeight.getX(i);
      vec.y = skinWeight.getY(i);
      vec.z = skinWeight.getZ(i);
      vec.w = skinWeight.getW(i);
      var scale = 1.0 / vec.lengthManhattan();

      if (scale !== Infinity) {
        vec.multiplyScalar(scale);
      } else {
        vec.set(1, 0, 0, 0); // do something reasonable
      }

      skinWeight.setXYZW(i, vec.x, vec.y, vec.z, vec.w);
    }
  }
};

THREE.SkinnedMesh.prototype.updateMatrixWorld = function (force) {
  THREE.Mesh.prototype.updateMatrixWorld.call(this, true);

  if (this.bindMode === "attached") {
    this.bindMatrixInverse.getInverse(this.matrixWorld);
  } else if (this.bindMode === "detached") {
    this.bindMatrixInverse.getInverse(this.bindMatrix);
  }
};

THREE.SkinnedMesh.prototype.clone = function () {
  return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this);
}; // File:src/objects/Points.js

/**
 * @author alteredq / http://alteredqualia.com/
 */


THREE.Points = function (geometry, material) {
  THREE.Object3D.call(this);
  this.type = 'Points';
  this.geometry = geometry !== undefined ? geometry : new THREE.Geometry();
  this.material = material !== undefined ? material : new THREE.PointsMaterial({
    color: Math.random() * 0xffffff
  });
};

THREE.Points.prototype = Object.create(THREE.Object3D.prototype);
THREE.Points.prototype.constructor = THREE.Points;

THREE.Points.prototype.raycast = function () {
  var inverseMatrix = new THREE.Matrix4();
  var ray = new THREE.Ray();
  var sphere = new THREE.Sphere();
  return function raycast(raycaster, intersects) {
    var object = this;
    var geometry = this.geometry;
    var matrixWorld = this.matrixWorld;
    var threshold = raycaster.params.Points.threshold; // Checking boundingSphere distance to ray

    if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
    sphere.copy(geometry.boundingSphere);
    sphere.applyMatrix4(matrixWorld);
    if (raycaster.ray.intersectsSphere(sphere) === false) return; //

    inverseMatrix.getInverse(matrixWorld);
    ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);
    var localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
    var localThresholdSq = localThreshold * localThreshold;
    var position = new THREE.Vector3();

    function testPoint(point, index) {
      var rayPointDistanceSq = ray.distanceSqToPoint(point);

      if (rayPointDistanceSq < localThresholdSq) {
        var intersectPoint = ray.closestPointToPoint(point);
        intersectPoint.applyMatrix4(matrixWorld);
        var distance = raycaster.ray.origin.distanceTo(intersectPoint);
        if (distance < raycaster.near || distance > raycaster.far) return;
        intersects.push({
          distance: distance,
          distanceToRay: Math.sqrt(rayPointDistanceSq),
          point: intersectPoint.clone(),
          index: index,
          face: null,
          object: object
        });
      }
    }

    if (geometry instanceof THREE.BufferGeometry) {
      var index = geometry.index;
      var attributes = geometry.attributes;
      var positions = attributes.position.array;

      if (index !== null) {
        var indices = index.array;

        for (var i = 0, il = indices.length; i < il; i++) {
          var a = indices[i];
          position.fromArray(positions, a * 3);
          testPoint(position, a);
        }
      } else {
        for (var i = 0, l = positions.length / 3; i < l; i++) {
          position.fromArray(positions, i * 3);
          testPoint(position, i);
        }
      }
    } else {
      var vertices = geometry.vertices;

      for (var i = 0, l = vertices.length; i < l; i++) {
        testPoint(vertices[i], i);
      }
    }
  };
}();

THREE.Points.prototype.clone = function () {
  return new this.constructor(this.geometry, this.material).copy(this);
}; // File:src/lights/Light.js

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */


THREE.Light = function (color, intensity) {
  THREE.Object3D.call(this);
  this.type = 'Light';
  this.color = new THREE.Color(color);
  this.intensity = intensity !== undefined ? intensity : 1;
  this.receiveShadow = undefined;
};

THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.constructor = THREE.Light;

THREE.Light.prototype.copy = function (source) {
  THREE.Object3D.prototype.copy.call(this, source);
  this.color.copy(source.color);
  this.intensity = source.intensity;
  return this;
};

THREE.Light.prototype.toJSON = function (meta) {
  var data = THREE.Object3D.prototype.toJSON.call(this, meta);
  data.object.color = this.color.getHex();
  data.object.intensity = this.intensity;
  if (this.groundColor !== undefined) data.object.groundColor = this.groundColor.getHex();
  if (this.distance !== undefined) data.object.distance = this.distance;
  if (this.angle !== undefined) data.object.angle = this.angle;
  if (this.decay !== undefined) data.object.decay = this.decay;
  if (this.penumbra !== undefined) data.object.penumbra = this.penumbra;
  return data;
}; // File:src/renderers/shaders/ShaderChunk.js


THREE.ShaderChunk = {}; // File:src/renderers/shaders/ShaderChunk/alphamap_fragment.glsl

THREE.ShaderChunk['alphamap_fragment'] = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/alphamap_pars_fragment.glsl

THREE.ShaderChunk['alphamap_pars_fragment'] = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/alphatest_fragment.glsl

THREE.ShaderChunk['alphatest_fragment'] = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/aomap_fragment.glsl

THREE.ShaderChunk['aomap_fragment'] = "#ifdef USE_AOMAP\n\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/aomap_pars_fragment.glsl

THREE.ShaderChunk['aomap_pars_fragment'] = "#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/begin_vertex.glsl

THREE.ShaderChunk['begin_vertex'] = "\nvec3 transformed = vec3( position );\n"; // File:src/renderers/shaders/ShaderChunk/beginnormal_vertex.glsl

THREE.ShaderChunk['beginnormal_vertex'] = "\nvec3 objectNormal = vec3( normal );\n"; // File:src/renderers/shaders/ShaderChunk/color_fragment.glsl

THREE.ShaderChunk['color_fragment'] = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/color_pars_fragment.glsl

THREE.ShaderChunk['color_pars_fragment'] = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/color_pars_vertex.glsl

THREE.ShaderChunk['color_pars_vertex'] = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/color_vertex.glsl

THREE.ShaderChunk['color_vertex'] = "#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/common.glsl

THREE.ShaderChunk['common'] = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\n\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n"; // File:src/renderers/shaders/ShaderChunk/defaultnormal_vertex.glsl

THREE.ShaderChunk['defaultnormal_vertex'] = "#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n"; // File:src/renderers/shaders/ShaderChunk/encodings_fragment.glsl

THREE.ShaderChunk['encodings_fragment'] = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n"; // File:src/renderers/shaders/ShaderChunk/encodings_pars_fragment.glsl

THREE.ShaderChunk['encodings_pars_fragment'] = "// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n"; // File:src/renderers/shaders/ShaderChunk/envmap_fragment.glsl

THREE.ShaderChunk['envmap_fragment'] = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\n\t#endif\n\n\tenvColor = envMapTexelToLinear( envColor );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/envmap_pars_fragment.glsl

THREE.ShaderChunk['envmap_pars_fragment'] = "#if defined( USE_ENVMAP ) || defined( STANDARD )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n\n#ifdef USE_ENVMAP\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/envmap_pars_vertex.glsl

THREE.ShaderChunk['envmap_pars_vertex'] = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/envmap_vertex.glsl

THREE.ShaderChunk['envmap_vertex'] = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/fog_fragment.glsl

THREE.ShaderChunk['fog_fragment'] = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/fog_pars_fragment.glsl

THREE.ShaderChunk['fog_pars_fragment'] = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/logdepthbuf_fragment.glsl

THREE.ShaderChunk['logdepthbuf_fragment'] = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/logdepthbuf_pars_fragment.glsl

THREE.ShaderChunk['logdepthbuf_pars_fragment'] = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/logdepthbuf_pars_vertex.glsl

THREE.ShaderChunk['logdepthbuf_pars_vertex'] = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/logdepthbuf_vertex.glsl

THREE.ShaderChunk['logdepthbuf_vertex'] = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n\t#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/map_fragment.glsl

THREE.ShaderChunk['map_fragment'] = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/map_pars_fragment.glsl

THREE.ShaderChunk['map_pars_fragment'] = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/morphnormal_vertex.glsl

THREE.ShaderChunk['morphnormal_vertex'] = "#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/morphtarget_pars_vertex.glsl

THREE.ShaderChunk['morphtarget_pars_vertex'] = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/morphtarget_vertex.glsl

THREE.ShaderChunk['morphtarget_vertex'] = "#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/premultiplied_alpha_fragment.glsl

THREE.ShaderChunk['premultiplied_alpha_fragment'] = "#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/project_vertex.glsl

THREE.ShaderChunk['project_vertex'] = "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n"; // File:src/renderers/shaders/ShaderChunk/skinbase_vertex.glsl

THREE.ShaderChunk['skinbase_vertex'] = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/skinning_pars_vertex.glsl

THREE.ShaderChunk['skinning_pars_vertex'] = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/skinning_vertex.glsl

THREE.ShaderChunk['skinning_vertex'] = "#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/skinnormal_vertex.glsl

THREE.ShaderChunk['skinnormal_vertex'] = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/specularmap_fragment.glsl

THREE.ShaderChunk['specularmap_fragment'] = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/specularmap_pars_fragment.glsl

THREE.ShaderChunk['specularmap_pars_fragment'] = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/tonemapping_fragment.glsl

THREE.ShaderChunk['tonemapping_fragment'] = "#if defined( TONE_MAPPING )\n\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/tonemapping_pars_fragment.glsl

THREE.ShaderChunk['tonemapping_pars_fragment'] = "#define saturate(a) clamp( a, 0.0, 1.0 )\n\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n  return toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\n  // John Hable's filmic operator from Uncharted 2 video game\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n  // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n"; // File:src/renderers/shaders/ShaderChunk/uv2_pars_fragment.glsl

THREE.ShaderChunk['uv2_pars_fragment'] = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/uv2_pars_vertex.glsl

THREE.ShaderChunk['uv2_pars_vertex'] = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/uv2_vertex.glsl

THREE.ShaderChunk['uv2_vertex'] = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/uv_pars_fragment.glsl

THREE.ShaderChunk['uv_pars_fragment'] = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/uv_pars_vertex.glsl

THREE.ShaderChunk['uv_pars_vertex'] = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n"; // File:src/renderers/shaders/ShaderChunk/uv_vertex.glsl

THREE.ShaderChunk['uv_vertex'] = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif"; // File:src/renderers/shaders/ShaderChunk/worldpos_vertex.glsl

THREE.ShaderChunk['worldpos_vertex'] = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n\t#endif\n\n#endif\n"; // File:src/renderers/shaders/ShaderLib/meshbasic_frag.glsl

THREE.ShaderChunk['meshbasic_frag'] = "uniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nvoid main() {\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"; // File:src/renderers/shaders/ShaderLib/meshbasic_vert.glsl

THREE.ShaderChunk['meshbasic_vert'] = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\n}\n"; // File:src/renderers/shaders/UniformsUtils.js

/**
 * Uniform Utilities
 */

THREE.UniformsUtils = {
  merge: function (uniforms) {
    var merged = {};

    for (var u = 0; u < uniforms.length; u++) {
      var tmp = this.clone(uniforms[u]);

      for (var p in tmp) {
        merged[p] = tmp[p];
      }
    }

    return merged;
  },
  clone: function (uniforms_src) {
    var uniforms_dst = {};

    for (var u in uniforms_src) {
      uniforms_dst[u] = {};

      for (var p in uniforms_src[u]) {
        var parameter_src = uniforms_src[u][p];

        if (parameter_src instanceof THREE.Color || parameter_src instanceof THREE.Vector2 || parameter_src instanceof THREE.Vector3 || parameter_src instanceof THREE.Vector4 || parameter_src instanceof THREE.Matrix3 || parameter_src instanceof THREE.Matrix4 || parameter_src instanceof THREE.Texture) {
          uniforms_dst[u][p] = parameter_src.clone();
        } else if (Array.isArray(parameter_src)) {
          uniforms_dst[u][p] = parameter_src.slice();
        } else {
          uniforms_dst[u][p] = parameter_src;
        }
      }
    }

    return uniforms_dst;
  }
}; // File:src/renderers/shaders/UniformsLib.js

/**
 * Uniforms library for shared webgl shaders
 */

THREE.UniformsLib = {
  common: {
    "diffuse": {
      type: "c",
      value: new THREE.Color(0xeeeeee)
    },
    "opacity": {
      type: "f",
      value: 1.0
    },
    "map": {
      type: "t",
      value: null
    },
    "offsetRepeat": {
      type: "v4",
      value: new THREE.Vector4(0, 0, 1, 1)
    },
    "specularMap": {
      type: "t",
      value: null
    },
    "alphaMap": {
      type: "t",
      value: null
    },
    "envMap": {
      type: "t",
      value: null
    },
    "flipEnvMap": {
      type: "f",
      value: -1
    },
    "reflectivity": {
      type: "f",
      value: 1.0
    },
    "refractionRatio": {
      type: "f",
      value: 0.98
    }
  },
  aomap: {
    "aoMap": {
      type: "t",
      value: null
    },
    "aoMapIntensity": {
      type: "f",
      value: 1
    }
  },
  lightmap: {
    "lightMap": {
      type: "t",
      value: null
    },
    "lightMapIntensity": {
      type: "f",
      value: 1
    }
  },
  emissivemap: {
    "emissiveMap": {
      type: "t",
      value: null
    }
  },
  bumpmap: {
    "bumpMap": {
      type: "t",
      value: null
    },
    "bumpScale": {
      type: "f",
      value: 1
    }
  },
  normalmap: {
    "normalMap": {
      type: "t",
      value: null
    },
    "normalScale": {
      type: "v2",
      value: new THREE.Vector2(1, 1)
    }
  },
  displacementmap: {
    "displacementMap": {
      type: "t",
      value: null
    },
    "displacementScale": {
      type: "f",
      value: 1
    },
    "displacementBias": {
      type: "f",
      value: 0
    }
  },
  roughnessmap: {
    "roughnessMap": {
      type: "t",
      value: null
    }
  },
  metalnessmap: {
    "metalnessMap": {
      type: "t",
      value: null
    }
  },
  fog: {
    "fogDensity": {
      type: "f",
      value: 0.00025
    },
    "fogNear": {
      type: "f",
      value: 1
    },
    "fogFar": {
      type: "f",
      value: 2000
    },
    "fogColor": {
      type: "c",
      value: new THREE.Color(0xffffff)
    }
  },
  lights: {
    "ambientLightColor": {
      type: "fv",
      value: []
    },
    "directionalLights": {
      type: "sa",
      value: [],
      properties: {
        "direction": {
          type: "v3"
        },
        "color": {
          type: "c"
        },
        "shadow": {
          type: "i"
        },
        "shadowBias": {
          type: "f"
        },
        "shadowRadius": {
          type: "f"
        },
        "shadowMapSize": {
          type: "v2"
        }
      }
    },
    "directionalShadowMap": {
      type: "tv",
      value: []
    },
    "directionalShadowMatrix": {
      type: "m4v",
      value: []
    },
    "spotLights": {
      type: "sa",
      value: [],
      properties: {
        "color": {
          type: "c"
        },
        "position": {
          type: "v3"
        },
        "direction": {
          type: "v3"
        },
        "distance": {
          type: "f"
        },
        "coneCos": {
          type: "f"
        },
        "penumbraCos": {
          type: "f"
        },
        "decay": {
          type: "f"
        },
        "shadow": {
          type: "i"
        },
        "shadowBias": {
          type: "f"
        },
        "shadowRadius": {
          type: "f"
        },
        "shadowMapSize": {
          type: "v2"
        }
      }
    },
    "spotShadowMap": {
      type: "tv",
      value: []
    },
    "spotShadowMatrix": {
      type: "m4v",
      value: []
    },
    "pointLights": {
      type: "sa",
      value: [],
      properties: {
        "color": {
          type: "c"
        },
        "position": {
          type: "v3"
        },
        "decay": {
          type: "f"
        },
        "distance": {
          type: "f"
        },
        "shadow": {
          type: "i"
        },
        "shadowBias": {
          type: "f"
        },
        "shadowRadius": {
          type: "f"
        },
        "shadowMapSize": {
          type: "v2"
        }
      }
    },
    "pointShadowMap": {
      type: "tv",
      value: []
    },
    "pointShadowMatrix": {
      type: "m4v",
      value: []
    },
    "hemisphereLights": {
      type: "sa",
      value: [],
      properties: {
        "direction": {
          type: "v3"
        },
        "skyColor": {
          type: "c"
        },
        "groundColor": {
          type: "c"
        }
      }
    }
  },
  points: {
    "diffuse": {
      type: "c",
      value: new THREE.Color(0xeeeeee)
    },
    "opacity": {
      type: "f",
      value: 1.0
    },
    "size": {
      type: "f",
      value: 1.0
    },
    "scale": {
      type: "f",
      value: 1.0
    },
    "map": {
      type: "t",
      value: null
    },
    "offsetRepeat": {
      type: "v4",
      value: new THREE.Vector4(0, 0, 1, 1)
    }
  }
}; // File:src/renderers/shaders/ShaderLib.js

/**
 * Webgl Shader Library for three.js
 *
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */

THREE.ShaderLib = {
  'basic': {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib["common"], THREE.UniformsLib["aomap"], THREE.UniformsLib["fog"]]),
    vertexShader: THREE.ShaderChunk['meshbasic_vert'],
    fragmentShader: THREE.ShaderChunk['meshbasic_frag']
  },
  'lambert': {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib["common"], THREE.UniformsLib["aomap"], THREE.UniformsLib["lightmap"], THREE.UniformsLib["emissivemap"], THREE.UniformsLib["fog"], THREE.UniformsLib["lights"], {
      "emissive": {
        type: "c",
        value: new THREE.Color(0x000000)
      }
    }]),
    vertexShader: THREE.ShaderChunk['meshlambert_vert'],
    fragmentShader: THREE.ShaderChunk['meshlambert_frag']
  },
  'phong': {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib["common"], THREE.UniformsLib["aomap"], THREE.UniformsLib["lightmap"], THREE.UniformsLib["emissivemap"], THREE.UniformsLib["bumpmap"], THREE.UniformsLib["normalmap"], THREE.UniformsLib["displacementmap"], THREE.UniformsLib["fog"], THREE.UniformsLib["lights"], {
      "emissive": {
        type: "c",
        value: new THREE.Color(0x000000)
      },
      "specular": {
        type: "c",
        value: new THREE.Color(0x111111)
      },
      "shininess": {
        type: "f",
        value: 30
      }
    }]),
    vertexShader: THREE.ShaderChunk['meshphong_vert'],
    fragmentShader: THREE.ShaderChunk['meshphong_frag']
  },
  'standard': {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib["common"], THREE.UniformsLib["aomap"], THREE.UniformsLib["lightmap"], THREE.UniformsLib["emissivemap"], THREE.UniformsLib["bumpmap"], THREE.UniformsLib["normalmap"], THREE.UniformsLib["displacementmap"], THREE.UniformsLib["roughnessmap"], THREE.UniformsLib["metalnessmap"], THREE.UniformsLib["fog"], THREE.UniformsLib["lights"], {
      "emissive": {
        type: "c",
        value: new THREE.Color(0x000000)
      },
      "roughness": {
        type: "f",
        value: 0.5
      },
      "metalness": {
        type: "f",
        value: 0
      },
      "envMapIntensity": {
        type: "f",
        value: 1 // temporary

      }
    }]),
    vertexShader: THREE.ShaderChunk['meshstandard_vert'],
    fragmentShader: THREE.ShaderChunk['meshstandard_frag']
  },
  'points': {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib["points"], THREE.UniformsLib["fog"]]),
    vertexShader: THREE.ShaderChunk['points_vert'],
    fragmentShader: THREE.ShaderChunk['points_frag']
  },
  'dashed': {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib["common"], THREE.UniformsLib["fog"], {
      "scale": {
        type: "f",
        value: 1
      },
      "dashSize": {
        type: "f",
        value: 1
      },
      "totalSize": {
        type: "f",
        value: 2
      }
    }]),
    vertexShader: THREE.ShaderChunk['linedashed_vert'],
    fragmentShader: THREE.ShaderChunk['linedashed_frag']
  },
  'depth': {
    uniforms: {
      "mNear": {
        type: "f",
        value: 1.0
      },
      "mFar": {
        type: "f",
        value: 2000.0
      },
      "opacity": {
        type: "f",
        value: 1.0
      }
    },
    vertexShader: THREE.ShaderChunk['depth_vert'],
    fragmentShader: THREE.ShaderChunk['depth_frag']
  },
  'normal': {
    uniforms: {
      "opacity": {
        type: "f",
        value: 1.0
      }
    },
    vertexShader: THREE.ShaderChunk['normal_vert'],
    fragmentShader: THREE.ShaderChunk['normal_frag']
  },

  /* -------------------------------------------------------------------------
  //	Cube map shader
   ------------------------------------------------------------------------- */
  'cube': {
    uniforms: {
      "tCube": {
        type: "t",
        value: null
      },
      "tFlip": {
        type: "f",
        value: -1
      }
    },
    vertexShader: THREE.ShaderChunk['cube_vert'],
    fragmentShader: THREE.ShaderChunk['cube_frag']
  },

  /* -------------------------------------------------------------------------
  //	Cube map shader
   ------------------------------------------------------------------------- */
  'equirect': {
    uniforms: {
      "tEquirect": {
        type: "t",
        value: null
      },
      "tFlip": {
        type: "f",
        value: -1
      }
    },
    vertexShader: THREE.ShaderChunk['equirect_vert'],
    fragmentShader: THREE.ShaderChunk['equirect_frag']
  },

  /* Depth encoding into RGBA texture
   *
   * based on SpiderGL shadow map example
   * http://spidergl.org/example.php?id=6
   *
   * originally from
   * http://www.gamedev.net/topic/442138-packing-a-float-into-a-a8r8g8b8-texture-shader/page__whichpage__1%25EF%25BF%25BD
   *
   * see also
   * http://aras-p.info/blog/2009/07/30/encoding-floats-to-rgba-the-final/
   */
  'depthRGBA': {
    uniforms: {},
    vertexShader: THREE.ShaderChunk['depthRGBA_vert'],
    fragmentShader: THREE.ShaderChunk['depthRGBA_frag']
  },
  'distanceRGBA': {
    uniforms: {
      "lightPos": {
        type: "v3",
        value: new THREE.Vector3(0, 0, 0)
      }
    },
    vertexShader: THREE.ShaderChunk['distanceRGBA_vert'],
    fragmentShader: THREE.ShaderChunk['distanceRGBA_frag']
  }
}; // File:src/renderers/WebGLRenderer.js

/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */

THREE.WebGLRenderer = function (parameters) {
  parameters = parameters || {};

  var _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElement('canvas'),
      _context = parameters.context !== undefined ? parameters.context : null,
      _alpha = parameters.alpha !== undefined ? parameters.alpha : false,
      _depth = parameters.depth !== undefined ? parameters.depth : true,
      _stencil = parameters.stencil !== undefined ? parameters.stencil : true,
      _antialias = parameters.antialias !== undefined ? parameters.antialias : false,
      _premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true,
      _preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false;

  var lights = [];
  var opaqueObjects = [];
  var opaqueObjectsLastIndex = -1;
  var transparentObjects = [];
  var transparentObjectsLastIndex = -1;
  var morphInfluences = new Float32Array(8);
  var sprites = [];
  var lensFlares = []; // public properties

  this.domElement = _canvas;
  this.context = null; // clearing

  this.autoClear = true;
  this.autoClearColor = true;
  this.autoClearDepth = true;
  this.autoClearStencil = true; // scene graph

  this.sortObjects = true; // physically based shading

  this.gammaFactor = 2.0; // for backwards compatibility

  this.gammaInput = false;
  this.gammaOutput = false; // physical lights

  this.physicallyCorrectLights = false; // tone mapping

  this.toneMapping = THREE.LinearToneMapping;
  this.toneMappingExposure = 1.0;
  this.toneMappingWhitePoint = 1.0; // morphs

  this.maxMorphTargets = 8;
  this.maxMorphNormals = 4; // flags

  this.autoScaleCubemaps = true; // internal properties

  var _this = this,
      // internal state cache
  _currentProgram = null,
      _currentRenderTarget = null,
      _currentFramebuffer = null,
      _currentMaterialId = -1,
      _currentGeometryProgram = '',
      _currentCamera = null,
      _currentScissor = new THREE.Vector4(),
      _currentScissorTest = null,
      _currentViewport = new THREE.Vector4(),
      //
  _usedTextureUnits = 0,
      //
  _clearColor = new THREE.Color(0x000000),
      _clearAlpha = 0,
      _width = _canvas.width,
      _height = _canvas.height,
      _pixelRatio = 1,
      _scissor = new THREE.Vector4(0, 0, _width, _height),
      _scissorTest = false,
      _viewport = new THREE.Vector4(0, 0, _width, _height),
      // frustum
  _frustum = new THREE.Frustum(),
      // camera matrices cache
  _projScreenMatrix = new THREE.Matrix4(),
      _vector3 = new THREE.Vector3(),
      // light arrays cache
  _lights = {
    hash: '',
    ambient: [0, 0, 0],
    directional: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    point: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    shadows: [],
    shadowsPointLight: 0
  },
      // info
  _infoMemory = {
    geometries: 0,
    textures: 0
  },
      _infoRender = {
    calls: 0,
    vertices: 0,
    faces: 0,
    points: 0
  };

  this.info = {
    render: _infoRender,
    memory: _infoMemory,
    programs: null
  }; // initialize

  var _gl;

  try {
    var attributes = {
      alpha: _alpha,
      depth: _depth,
      stencil: _stencil,
      antialias: _antialias,
      premultipliedAlpha: _premultipliedAlpha,
      preserveDrawingBuffer: _preserveDrawingBuffer
    };
    _gl = _context || _canvas.getContext('webgl', attributes) || _canvas.getContext('experimental-webgl', attributes);

    if (_gl === null) {
      if (_canvas.getContext('webgl') !== null) {
        throw 'Error creating WebGL context with your selected attributes.';
      } else {
        throw 'Error creating WebGL context.';
      }
    } // Some experimental-webgl implementations do not have getShaderPrecisionFormat


    if (_gl.getShaderPrecisionFormat === undefined) {
      _gl.getShaderPrecisionFormat = function () {
        return {
          'rangeMin': 1,
          'rangeMax': 1,
          'precision': 1
        };
      };
    }

    _canvas.addEventListener('webglcontextlost', onContextLost, false);
  } catch (error) {}

  var extensions = new THREE.WebGLExtensions(_gl);
  extensions.get('OES_texture_float');
  extensions.get('OES_texture_float_linear');
  extensions.get('OES_texture_half_float');
  extensions.get('OES_texture_half_float_linear');
  extensions.get('OES_standard_derivatives');
  extensions.get('ANGLE_instanced_arrays');

  if (extensions.get('OES_element_index_uint')) {
    THREE.BufferGeometry.MaxIndex = 4294967296;
  }

  var capabilities = new THREE.WebGLCapabilities(_gl, extensions, parameters);
  var state = new THREE.WebGLState(_gl, extensions, paramThreeToGL);
  var properties = new THREE.WebGLProperties();
  var objects = new THREE.WebGLObjects(_gl, properties, this.info);
  var programCache = new THREE.WebGLPrograms(this, capabilities);
  var lightCache = new THREE.WebGLLights();
  this.info.programs = programCache.programs;
  var bufferRenderer = new THREE.WebGLBufferRenderer(_gl, extensions, _infoRender);
  var indexedBufferRenderer = new THREE.WebGLIndexedBufferRenderer(_gl, extensions, _infoRender); //

  function getTargetPixelRatio() {
    return _currentRenderTarget === null ? _pixelRatio : 1;
  }

  function glClearColor(r, g, b, a) {
    if (_premultipliedAlpha === true) {
      r *= a;
      g *= a;
      b *= a;
    }

    state.clearColor(r, g, b, a);
  }

  function setDefaultGLState() {
    state.init();
    state.scissor(_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio));
    state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio));
    glClearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);
  }

  function resetGLState() {
    _currentProgram = null;
    _currentCamera = null;
    _currentGeometryProgram = '';
    _currentMaterialId = -1;
    state.reset();
  }

  setDefaultGLState();
  this.context = _gl;
  this.capabilities = capabilities;
  this.extensions = extensions;
  this.properties = properties;
  this.state = state; // shadow map

  var shadowMap = new THREE.WebGLShadowMap(this, _lights, objects);
  this.shadowMap = shadowMap; // Plugins

  var spritePlugin = new THREE.SpritePlugin(this, sprites);
  var lensFlarePlugin = new THREE.LensFlarePlugin(this, lensFlares); // API

  this.getContext = function () {
    return _gl;
  };

  this.getContextAttributes = function () {
    return _gl.getContextAttributes();
  };

  this.forceContextLoss = function () {
    extensions.get('WEBGL_lose_context').loseContext();
  };

  this.getMaxAnisotropy = function () {
    var value;
    return function getMaxAnisotropy() {
      if (value !== undefined) return value;
      var extension = extensions.get('EXT_texture_filter_anisotropic');

      if (extension !== null) {
        value = _gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else {
        value = 0;
      }

      return value;
    };
  }();

  this.getPrecision = function () {
    return capabilities.precision;
  };

  this.getPixelRatio = function () {
    return _pixelRatio;
  };

  this.setPixelRatio = function (value) {
    if (value === undefined) return;
    _pixelRatio = value;
    this.setSize(_viewport.z, _viewport.w, false);
  };

  this.getSize = function () {
    return {
      width: _width,
      height: _height
    };
  };

  this.setSize = function (width, height, updateStyle) {
    _width = width;
    _height = height;
    _canvas.width = width * _pixelRatio;
    _canvas.height = height * _pixelRatio;

    if (updateStyle !== false) {
      _canvas.style.width = width + 'px';
      _canvas.style.height = height + 'px';
    }

    this.setViewport(0, 0, width, height);
  };

  this.setViewport = function (x, y, width, height) {
    state.viewport(_viewport.set(x, y, width, height));
  };

  this.setScissor = function (x, y, width, height) {
    state.scissor(_scissor.set(x, y, width, height));
  };

  this.setScissorTest = function (boolean) {
    state.setScissorTest(_scissorTest = boolean);
  }; // Clearing


  this.getClearColor = function () {
    return _clearColor;
  };

  this.setClearColor = function (color, alpha) {
    _clearColor.set(color);

    _clearAlpha = alpha !== undefined ? alpha : 1;
    glClearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);
  };

  this.getClearAlpha = function () {
    return _clearAlpha;
  };

  this.setClearAlpha = function (alpha) {
    _clearAlpha = alpha;
    glClearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);
  };

  this.clear = function (color, depth, stencil) {
    var bits = 0;
    if (color === undefined || color) bits |= _gl.COLOR_BUFFER_BIT;
    if (depth === undefined || depth) bits |= _gl.DEPTH_BUFFER_BIT;
    if (stencil === undefined || stencil) bits |= _gl.STENCIL_BUFFER_BIT;

    _gl.clear(bits);
  };

  this.clearColor = function () {
    this.clear(true, false, false);
  };

  this.clearDepth = function () {
    this.clear(false, true, false);
  };

  this.clearStencil = function () {
    this.clear(false, false, true);
  };

  this.clearTarget = function (renderTarget, color, depth, stencil) {
    this.setRenderTarget(renderTarget);
    this.clear(color, depth, stencil);
  }; // Reset


  this.resetGLState = resetGLState;

  this.dispose = function () {
    _canvas.removeEventListener('webglcontextlost', onContextLost, false);
  }; // Events


  function onContextLost(event) {
    event.preventDefault();
    resetGLState();
    setDefaultGLState();
    properties.clear();
  }

  function onTextureDispose(event) {
    var texture = event.target;
    texture.removeEventListener('dispose', onTextureDispose);
    deallocateTexture(texture);
    _infoMemory.textures--;
  }

  function onRenderTargetDispose(event) {
    var renderTarget = event.target;
    renderTarget.removeEventListener('dispose', onRenderTargetDispose);
    deallocateRenderTarget(renderTarget);
    _infoMemory.textures--;
  }

  function onMaterialDispose(event) {
    var material = event.target;
    material.removeEventListener('dispose', onMaterialDispose);
    deallocateMaterial(material);
  } // Buffer deallocation


  function deallocateTexture(texture) {
    var textureProperties = properties.get(texture);

    if (texture.image && textureProperties.__image__webglTextureCube) {
      // cube texture
      _gl.deleteTexture(textureProperties.__image__webglTextureCube);
    } else {
      // 2D texture
      if (textureProperties.__webglInit === undefined) return;

      _gl.deleteTexture(textureProperties.__webglTexture);
    } // remove all webgl properties


    properties.delete(texture);
  }

  function deallocateRenderTarget(renderTarget) {
    var renderTargetProperties = properties.get(renderTarget);
    var textureProperties = properties.get(renderTarget.texture);
    if (!renderTarget || textureProperties.__webglTexture === undefined) return;

    _gl.deleteTexture(textureProperties.__webglTexture);

    if (renderTarget instanceof THREE.WebGLRenderTargetCube) {
      for (var i = 0; i < 6; i++) {
        _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i]);

        _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer[i]);
      }
    } else {
      _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer);

      _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer);
    }

    properties.delete(renderTarget.texture);
    properties.delete(renderTarget);
  }

  function deallocateMaterial(material) {
    releaseMaterialProgramReference(material);
    properties.delete(material);
  }

  function releaseMaterialProgramReference(material) {
    var programInfo = properties.get(material).program;
    material.program = undefined;

    if (programInfo !== undefined) {
      programCache.releaseProgram(programInfo);
    }
  } // Buffer rendering


  this.renderBufferImmediate = function (object, program, material) {
    state.initAttributes();
    var buffers = properties.get(object);
    if (object.hasPositions && !buffers.position) buffers.position = _gl.createBuffer();
    if (object.hasNormals && !buffers.normal) buffers.normal = _gl.createBuffer();
    if (object.hasUvs && !buffers.uv) buffers.uv = _gl.createBuffer();
    if (object.hasColors && !buffers.color) buffers.color = _gl.createBuffer();
    var attributes = program.getAttributes();

    if (object.hasPositions) {
      _gl.bindBuffer(_gl.ARRAY_BUFFER, buffers.position);

      _gl.bufferData(_gl.ARRAY_BUFFER, object.positionArray, _gl.DYNAMIC_DRAW);

      state.enableAttribute(attributes.position);

      _gl.vertexAttribPointer(attributes.position, 3, _gl.FLOAT, false, 0, 0);
    }

    if (object.hasNormals) {
      _gl.bindBuffer(_gl.ARRAY_BUFFER, buffers.normal);

      if (material.type !== 'MeshPhongMaterial' && material.type !== 'MeshStandardMaterial' && material.shading === THREE.FlatShading) {
        for (var i = 0, l = object.count * 3; i < l; i += 9) {
          var array = object.normalArray;
          var nx = (array[i + 0] + array[i + 3] + array[i + 6]) / 3;
          var ny = (array[i + 1] + array[i + 4] + array[i + 7]) / 3;
          var nz = (array[i + 2] + array[i + 5] + array[i + 8]) / 3;
          array[i + 0] = nx;
          array[i + 1] = ny;
          array[i + 2] = nz;
          array[i + 3] = nx;
          array[i + 4] = ny;
          array[i + 5] = nz;
          array[i + 6] = nx;
          array[i + 7] = ny;
          array[i + 8] = nz;
        }
      }

      _gl.bufferData(_gl.ARRAY_BUFFER, object.normalArray, _gl.DYNAMIC_DRAW);

      state.enableAttribute(attributes.normal);

      _gl.vertexAttribPointer(attributes.normal, 3, _gl.FLOAT, false, 0, 0);
    }

    if (object.hasUvs && material.map) {
      _gl.bindBuffer(_gl.ARRAY_BUFFER, buffers.uv);

      _gl.bufferData(_gl.ARRAY_BUFFER, object.uvArray, _gl.DYNAMIC_DRAW);

      state.enableAttribute(attributes.uv);

      _gl.vertexAttribPointer(attributes.uv, 2, _gl.FLOAT, false, 0, 0);
    }

    if (object.hasColors && material.vertexColors !== THREE.NoColors) {
      _gl.bindBuffer(_gl.ARRAY_BUFFER, buffers.color);

      _gl.bufferData(_gl.ARRAY_BUFFER, object.colorArray, _gl.DYNAMIC_DRAW);

      state.enableAttribute(attributes.color);

      _gl.vertexAttribPointer(attributes.color, 3, _gl.FLOAT, false, 0, 0);
    }

    state.disableUnusedAttributes();

    _gl.drawArrays(_gl.TRIANGLES, 0, object.count);

    object.count = 0;
  };

  this.renderBufferDirect = function (camera, fog, geometry, material, object, group) {
    setMaterial(material);
    var program = setProgram(camera, fog, material, object);
    var updateBuffers = false;
    var geometryProgram = geometry.id + '_' + program.id + '_' + material.wireframe;

    if (geometryProgram !== _currentGeometryProgram) {
      _currentGeometryProgram = geometryProgram;
      updateBuffers = true;
    } // morph targets


    var morphTargetInfluences = object.morphTargetInfluences;

    if (morphTargetInfluences !== undefined) {
      var activeInfluences = [];

      for (var i = 0, l = morphTargetInfluences.length; i < l; i++) {
        var influence = morphTargetInfluences[i];
        activeInfluences.push([influence, i]);
      }

      activeInfluences.sort(absNumericalSort);

      if (activeInfluences.length > 8) {
        activeInfluences.length = 8;
      }

      var morphAttributes = geometry.morphAttributes;

      for (var i = 0, l = activeInfluences.length; i < l; i++) {
        var influence = activeInfluences[i];
        morphInfluences[i] = influence[0];

        if (influence[0] !== 0) {
          var index = influence[1];
          if (material.morphTargets === true && morphAttributes.position) geometry.addAttribute('morphTarget' + i, morphAttributes.position[index]);
          if (material.morphNormals === true && morphAttributes.normal) geometry.addAttribute('morphNormal' + i, morphAttributes.normal[index]);
        } else {
          if (material.morphTargets === true) geometry.removeAttribute('morphTarget' + i);
          if (material.morphNormals === true) geometry.removeAttribute('morphNormal' + i);
        }
      }

      var uniforms = program.getUniforms();

      if (uniforms.morphTargetInfluences !== null) {
        _gl.uniform1fv(uniforms.morphTargetInfluences, morphInfluences);
      }

      updateBuffers = true;
    } //


    var index = geometry.index;
    var position = geometry.attributes.position;

    if (material.wireframe === true) {
      index = objects.getWireframeAttribute(geometry);
    }

    var renderer;

    if (index !== null) {
      renderer = indexedBufferRenderer;
      renderer.setIndex(index);
    } else {
      renderer = bufferRenderer;
    }

    if (updateBuffers) {
      setupVertexAttributes(material, program, geometry);

      if (index !== null) {
        _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, objects.getAttributeBuffer(index));
      }
    } //


    var dataStart = 0;
    var dataCount = Infinity;

    if (index !== null) {
      dataCount = index.count;
    } else if (position !== undefined) {
      dataCount = position.count;
    }

    var rangeStart = geometry.drawRange.start;
    var rangeCount = geometry.drawRange.count;
    var groupStart = group !== null ? group.start : 0;
    var groupCount = group !== null ? group.count : Infinity;
    var drawStart = Math.max(dataStart, rangeStart, groupStart);
    var drawEnd = Math.min(dataStart + dataCount, rangeStart + rangeCount, groupStart + groupCount) - 1;
    var drawCount = Math.max(0, drawEnd - drawStart + 1); //

    if (object instanceof THREE.Mesh) {
      if (material.wireframe === true) {
        state.setLineWidth(material.wireframeLinewidth * getTargetPixelRatio());
        renderer.setMode(_gl.LINES);
      } else {
        switch (object.drawMode) {
          case THREE.TrianglesDrawMode:
            renderer.setMode(_gl.TRIANGLES);
            break;

          case THREE.TriangleStripDrawMode:
            renderer.setMode(_gl.TRIANGLE_STRIP);
            break;

          case THREE.TriangleFanDrawMode:
            renderer.setMode(_gl.TRIANGLE_FAN);
            break;
        }
      }
    } else if (object instanceof THREE.Line) {
      var lineWidth = material.linewidth;
      if (lineWidth === undefined) lineWidth = 1; // Not using Line*Material

      state.setLineWidth(lineWidth * getTargetPixelRatio());

      if (object instanceof THREE.LineSegments) {
        renderer.setMode(_gl.LINES);
      } else {
        renderer.setMode(_gl.LINE_STRIP);
      }
    } else if (object instanceof THREE.Points) {
      renderer.setMode(_gl.POINTS);
    }

    if (geometry instanceof THREE.InstancedBufferGeometry) {
      if (geometry.maxInstancedCount > 0) {
        renderer.renderInstances(geometry, drawStart, drawCount);
      }
    } else {
      renderer.render(drawStart, drawCount);
    }
  };

  function setupVertexAttributes(material, program, geometry, startIndex) {
    var extension;

    if (geometry instanceof THREE.InstancedBufferGeometry) {
      extension = extensions.get('ANGLE_instanced_arrays');

      if (extension === null) {
        return;
      }
    }

    if (startIndex === undefined) startIndex = 0;
    state.initAttributes();
    var geometryAttributes = geometry.attributes;
    var programAttributes = program.getAttributes();
    var materialDefaultAttributeValues = material.defaultAttributeValues;

    for (var name in programAttributes) {
      var programAttribute = programAttributes[name];

      if (programAttribute >= 0) {
        var geometryAttribute = geometryAttributes[name];

        if (geometryAttribute !== undefined) {
          var size = geometryAttribute.itemSize;
          var buffer = objects.getAttributeBuffer(geometryAttribute);

          if (geometryAttribute instanceof THREE.InterleavedBufferAttribute) {
            var data = geometryAttribute.data;
            var stride = data.stride;
            var offset = geometryAttribute.offset;

            if (data instanceof THREE.InstancedInterleavedBuffer) {
              state.enableAttributeAndDivisor(programAttribute, data.meshPerAttribute, extension);

              if (geometry.maxInstancedCount === undefined) {
                geometry.maxInstancedCount = data.meshPerAttribute * data.count;
              }
            } else {
              state.enableAttribute(programAttribute);
            }

            _gl.bindBuffer(_gl.ARRAY_BUFFER, buffer);

            _gl.vertexAttribPointer(programAttribute, size, _gl.FLOAT, false, stride * data.array.BYTES_PER_ELEMENT, (startIndex * stride + offset) * data.array.BYTES_PER_ELEMENT);
          } else {
            if (geometryAttribute instanceof THREE.InstancedBufferAttribute) {
              state.enableAttributeAndDivisor(programAttribute, geometryAttribute.meshPerAttribute, extension);

              if (geometry.maxInstancedCount === undefined) {
                geometry.maxInstancedCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;
              }
            } else {
              state.enableAttribute(programAttribute);
            }

            _gl.bindBuffer(_gl.ARRAY_BUFFER, buffer);

            _gl.vertexAttribPointer(programAttribute, size, _gl.FLOAT, false, 0, startIndex * size * 4); // 4 bytes per Float32

          }
        } else if (materialDefaultAttributeValues !== undefined) {
          var value = materialDefaultAttributeValues[name];

          if (value !== undefined) {
            switch (value.length) {
              case 2:
                _gl.vertexAttrib2fv(programAttribute, value);

                break;

              case 3:
                _gl.vertexAttrib3fv(programAttribute, value);

                break;

              case 4:
                _gl.vertexAttrib4fv(programAttribute, value);

                break;

              default:
                _gl.vertexAttrib1fv(programAttribute, value);

            }
          }
        }
      }
    }

    state.disableUnusedAttributes();
  } // Sorting


  function absNumericalSort(a, b) {
    return Math.abs(b[0]) - Math.abs(a[0]);
  }

  function painterSortStable(a, b) {
    if (a.object.renderOrder !== b.object.renderOrder) {
      return a.object.renderOrder - b.object.renderOrder;
    } else if (a.material.id !== b.material.id) {
      return a.material.id - b.material.id;
    } else if (a.z !== b.z) {
      return a.z - b.z;
    } else {
      return a.id - b.id;
    }
  }

  function reversePainterSortStable(a, b) {
    if (a.object.renderOrder !== b.object.renderOrder) {
      return a.object.renderOrder - b.object.renderOrder;
    }

    if (a.z !== b.z) {
      return b.z - a.z;
    } else {
      return a.id - b.id;
    }
  } // Rendering


  this.render = function (scene, camera, renderTarget, forceClear) {
    if (camera instanceof THREE.Camera === false) {
      return;
    }

    var fog = scene.fog; // reset caching for this frame

    _currentGeometryProgram = '';
    _currentMaterialId = -1;
    _currentCamera = null; // update scene graph

    if (scene.autoUpdate === true) scene.updateMatrixWorld(); // update camera matrices and frustum

    if (camera.parent === null) camera.updateMatrixWorld();
    camera.matrixWorldInverse.getInverse(camera.matrixWorld);

    _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);

    _frustum.setFromMatrix(_projScreenMatrix);

    lights.length = 0;
    opaqueObjectsLastIndex = -1;
    transparentObjectsLastIndex = -1;
    sprites.length = 0;
    lensFlares.length = 0;
    projectObject(scene, camera);
    opaqueObjects.length = opaqueObjectsLastIndex + 1;
    transparentObjects.length = transparentObjectsLastIndex + 1;

    if (_this.sortObjects === true) {
      opaqueObjects.sort(painterSortStable);
      transparentObjects.sort(reversePainterSortStable);
    }

    setupLights(lights, camera); //

    shadowMap.render(scene, camera); //

    _infoRender.calls = 0;
    _infoRender.vertices = 0;
    _infoRender.faces = 0;
    _infoRender.points = 0;

    if (renderTarget === undefined) {
      renderTarget = null;
    }

    this.setRenderTarget(renderTarget);

    if (this.autoClear || forceClear) {
      this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
    } //


    if (scene.overrideMaterial) {
      var overrideMaterial = scene.overrideMaterial;
      renderObjects(opaqueObjects, camera, fog, overrideMaterial);
      renderObjects(transparentObjects, camera, fog, overrideMaterial);
    } else {
      // opaque pass (front-to-back order)
      state.setBlending(THREE.NoBlending);
      renderObjects(opaqueObjects, camera, fog); // transparent pass (back-to-front order)

      renderObjects(transparentObjects, camera, fog);
    } // custom render plugins (post pass)


    spritePlugin.render(scene, camera);
    lensFlarePlugin.render(scene, camera, _currentViewport); // Generate mipmap if we're using any kind of mipmap filtering

    if (renderTarget) {
      var texture = renderTarget.texture;

      if (texture.generateMipmaps && isPowerOfTwo(renderTarget) && texture.minFilter !== THREE.NearestFilter && texture.minFilter !== THREE.LinearFilter) {
        updateRenderTargetMipmap(renderTarget);
      }
    } // Ensure depth buffer writing is enabled so it can be cleared on next render


    state.setDepthTest(true);
    state.setDepthWrite(true);
    state.setColorWrite(true); // _gl.finish();
  };

  function pushRenderItem(object, geometry, material, z, group) {
    var array, index; // allocate the next position in the appropriate array

    if (material.transparent) {
      array = transparentObjects;
      index = ++transparentObjectsLastIndex;
    } else {
      array = opaqueObjects;
      index = ++opaqueObjectsLastIndex;
    } // recycle existing render item or grow the array


    var renderItem = array[index];

    if (renderItem !== undefined) {
      renderItem.id = object.id;
      renderItem.object = object;
      renderItem.geometry = geometry;
      renderItem.material = material;
      renderItem.z = _vector3.z;
      renderItem.group = group;
    } else {
      renderItem = {
        id: object.id,
        object: object,
        geometry: geometry,
        material: material,
        z: _vector3.z,
        group: group
      }; // assert( index === array.length );

      array.push(renderItem);
    }
  }

  function projectObject(object, camera) {
    if (object.visible === false) return;

    if (object.layers.test(camera.layers)) {
      if (object instanceof THREE.Light) {
        lights.push(object);
      } else if (object instanceof THREE.Sprite) {
        if (object.frustumCulled === false || _frustum.intersectsObject(object) === true) {
          sprites.push(object);
        }
      } else if (object instanceof THREE.LensFlare) {
        lensFlares.push(object);
      } else if (object instanceof THREE.ImmediateRenderObject) {
        if (_this.sortObjects === true) {
          _vector3.setFromMatrixPosition(object.matrixWorld);

          _vector3.applyProjection(_projScreenMatrix);
        }

        pushRenderItem(object, null, object.material, _vector3.z, null);
      } else if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
        if (object instanceof THREE.SkinnedMesh) {
          object.skeleton.update();
        }

        if (object.frustumCulled === false || _frustum.intersectsObject(object) === true) {
          var material = object.material;

          if (material.visible === true) {
            if (_this.sortObjects === true) {
              _vector3.setFromMatrixPosition(object.matrixWorld);

              _vector3.applyProjection(_projScreenMatrix);
            }

            var geometry = objects.update(object);

            if (material instanceof THREE.MultiMaterial) {
              var groups = geometry.groups;
              var materials = material.materials;

              for (var i = 0, l = groups.length; i < l; i++) {
                var group = groups[i];
                var groupMaterial = materials[group.materialIndex];

                if (groupMaterial.visible === true) {
                  pushRenderItem(object, geometry, groupMaterial, _vector3.z, group);
                }
              }
            } else {
              pushRenderItem(object, geometry, material, _vector3.z, null);
            }
          }
        }
      }
    }

    var children = object.children;

    for (var i = 0, l = children.length; i < l; i++) {
      projectObject(children[i], camera);
    }
  }

  function renderObjects(renderList, camera, fog, overrideMaterial) {
    for (var i = 0, l = renderList.length; i < l; i++) {
      var renderItem = renderList[i];
      var object = renderItem.object;
      var geometry = renderItem.geometry;
      var material = overrideMaterial === undefined ? renderItem.material : overrideMaterial;
      var group = renderItem.group;
      object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
      object.normalMatrix.getNormalMatrix(object.modelViewMatrix);

      if (object instanceof THREE.ImmediateRenderObject) {
        setMaterial(material);
        var program = setProgram(camera, fog, material, object);
        _currentGeometryProgram = '';
        object.render(function (object) {
          _this.renderBufferImmediate(object, program, material);
        });
      } else {
        _this.renderBufferDirect(camera, fog, geometry, material, object, group);
      }
    }
  }

  function initMaterial(material, fog, object) {
    var materialProperties = properties.get(material);
    var parameters = programCache.getParameters(material, _lights, fog, object);
    var code = programCache.getProgramCode(material, parameters);
    var program = materialProperties.program;
    var programChange = true;

    if (program === undefined) {
      // new material
      material.addEventListener('dispose', onMaterialDispose);
    } else if (program.code !== code) {
      // changed glsl or parameters
      releaseMaterialProgramReference(material);
    } else if (parameters.shaderID !== undefined) {
      // same glsl and uniform list
      return;
    } else {
      // only rebuild uniform list
      programChange = false;
    }

    if (programChange) {
      if (parameters.shaderID) {
        var shader = THREE.ShaderLib[parameters.shaderID];
        materialProperties.__webglShader = {
          name: material.type,
          uniforms: THREE.UniformsUtils.clone(shader.uniforms),
          vertexShader: shader.vertexShader,
          fragmentShader: shader.fragmentShader
        };
      } else {
        materialProperties.__webglShader = {
          name: material.type,
          uniforms: material.uniforms,
          vertexShader: material.vertexShader,
          fragmentShader: material.fragmentShader
        };
      }

      material.__webglShader = materialProperties.__webglShader;
      program = programCache.acquireProgram(material, parameters, code);
      materialProperties.program = program;
      material.program = program;
    }

    var attributes = program.getAttributes();

    if (material.morphTargets) {
      material.numSupportedMorphTargets = 0;

      for (var i = 0; i < _this.maxMorphTargets; i++) {
        if (attributes['morphTarget' + i] >= 0) {
          material.numSupportedMorphTargets++;
        }
      }
    }

    if (material.morphNormals) {
      material.numSupportedMorphNormals = 0;

      for (var i = 0; i < _this.maxMorphNormals; i++) {
        if (attributes['morphNormal' + i] >= 0) {
          material.numSupportedMorphNormals++;
        }
      }
    }

    materialProperties.uniformsList = [];
    var uniforms = materialProperties.__webglShader.uniforms,
        uniformLocations = materialProperties.program.getUniforms();

    for (var u in uniforms) {
      var location = uniformLocations[u];

      if (location) {
        materialProperties.uniformsList.push([materialProperties.__webglShader.uniforms[u], location]);
      }
    }

    if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshStandardMaterial || material.lights) {
      // store the light setup it was created for
      materialProperties.lightsHash = _lights.hash; // wire up the material to this renderer's lighting state

      uniforms.ambientLightColor.value = _lights.ambient;
      uniforms.directionalLights.value = _lights.directional;
      uniforms.spotLights.value = _lights.spot;
      uniforms.pointLights.value = _lights.point;
      uniforms.hemisphereLights.value = _lights.hemi;
      uniforms.directionalShadowMap.value = _lights.directionalShadowMap;
      uniforms.directionalShadowMatrix.value = _lights.directionalShadowMatrix;
      uniforms.spotShadowMap.value = _lights.spotShadowMap;
      uniforms.spotShadowMatrix.value = _lights.spotShadowMatrix;
      uniforms.pointShadowMap.value = _lights.pointShadowMap;
      uniforms.pointShadowMatrix.value = _lights.pointShadowMatrix;
    } // detect dynamic uniforms


    materialProperties.hasDynamicUniforms = false;

    for (var j = 0, jl = materialProperties.uniformsList.length; j < jl; j++) {
      var uniform = materialProperties.uniformsList[j][0];

      if (uniform.dynamic === true) {
        materialProperties.hasDynamicUniforms = true;
        break;
      }
    }
  }

  function setMaterial(material) {
    setMaterialFaces(material);

    if (material.transparent === true) {
      state.setBlending(material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha);
    } else {
      state.setBlending(THREE.NoBlending);
    }

    state.setDepthFunc(material.depthFunc);
    state.setDepthTest(material.depthTest);
    state.setDepthWrite(material.depthWrite);
    state.setColorWrite(material.colorWrite);
    state.setPolygonOffset(material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits);
  }

  function setMaterialFaces(material) {
    material.side !== THREE.DoubleSide ? state.enable(_gl.CULL_FACE) : state.disable(_gl.CULL_FACE);
    state.setFlipSided(material.side === THREE.BackSide);
  }

  function setProgram(camera, fog, material, object) {
    _usedTextureUnits = 0;
    var materialProperties = properties.get(material);

    if (materialProperties.program === undefined) {
      material.needsUpdate = true;
    }

    if (materialProperties.lightsHash !== undefined && materialProperties.lightsHash !== _lights.hash) {
      material.needsUpdate = true;
    }

    if (material.needsUpdate) {
      initMaterial(material, fog, object);
      material.needsUpdate = false;
    }

    var refreshProgram = false;
    var refreshMaterial = false;
    var refreshLights = false;
    var program = materialProperties.program,
        p_uniforms = program.getUniforms(),
        m_uniforms = materialProperties.__webglShader.uniforms;

    if (program.id !== _currentProgram) {
      _gl.useProgram(program.program);

      _currentProgram = program.id;
      refreshProgram = true;
      refreshMaterial = true;
      refreshLights = true;
    }

    if (material.id !== _currentMaterialId) {
      _currentMaterialId = material.id;
      refreshMaterial = true;
    }

    if (refreshProgram || camera !== _currentCamera) {
      _gl.uniformMatrix4fv(p_uniforms.projectionMatrix, false, camera.projectionMatrix.elements);

      if (capabilities.logarithmicDepthBuffer) {
        _gl.uniform1f(p_uniforms.logDepthBufFC, 2.0 / (Math.log(camera.far + 1.0) / Math.LN2));
      }

      if (camera !== _currentCamera) {
        _currentCamera = camera; // lighting uniforms depend on the camera so enforce an update
        // now, in case this material supports lights - or later, when
        // the next material that does gets activated:

        refreshMaterial = true; // set to true on material change

        refreshLights = true; // remains set until update done
      } // load material specific uniforms
      // (shader material also gets them for the sake of genericity)


      if (material instanceof THREE.ShaderMaterial || material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshStandardMaterial || material.envMap) {
        if (p_uniforms.cameraPosition !== undefined) {
          _vector3.setFromMatrixPosition(camera.matrixWorld);

          _gl.uniform3f(p_uniforms.cameraPosition, _vector3.x, _vector3.y, _vector3.z);
        }
      }

      if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshBasicMaterial || material instanceof THREE.MeshStandardMaterial || material instanceof THREE.ShaderMaterial || material.skinning) {
        if (p_uniforms.viewMatrix !== undefined) {
          _gl.uniformMatrix4fv(p_uniforms.viewMatrix, false, camera.matrixWorldInverse.elements);
        }
      }

      if (p_uniforms.toneMappingExposure !== undefined) {
        _gl.uniform1f(p_uniforms.toneMappingExposure, _this.toneMappingExposure);
      }

      if (p_uniforms.toneMappingWhitePoint !== undefined) {
        _gl.uniform1f(p_uniforms.toneMappingWhitePoint, _this.toneMappingWhitePoint);
      }
    } // skinning uniforms must be set even if material didn't change
    // auto-setting of texture unit for bone texture must go before other textures
    // not sure why, but otherwise weird things happen


    if (material.skinning) {
      if (object.bindMatrix && p_uniforms.bindMatrix !== undefined) {
        _gl.uniformMatrix4fv(p_uniforms.bindMatrix, false, object.bindMatrix.elements);
      }

      if (object.bindMatrixInverse && p_uniforms.bindMatrixInverse !== undefined) {
        _gl.uniformMatrix4fv(p_uniforms.bindMatrixInverse, false, object.bindMatrixInverse.elements);
      }

      if (capabilities.floatVertexTextures && object.skeleton && object.skeleton.useVertexTexture) {
        if (p_uniforms.boneTexture !== undefined) {
          var textureUnit = getTextureUnit();

          _gl.uniform1i(p_uniforms.boneTexture, textureUnit);

          _this.setTexture(object.skeleton.boneTexture, textureUnit);
        }

        if (p_uniforms.boneTextureWidth !== undefined) {
          _gl.uniform1i(p_uniforms.boneTextureWidth, object.skeleton.boneTextureWidth);
        }

        if (p_uniforms.boneTextureHeight !== undefined) {
          _gl.uniform1i(p_uniforms.boneTextureHeight, object.skeleton.boneTextureHeight);
        }
      } else if (object.skeleton && object.skeleton.boneMatrices) {
        if (p_uniforms.boneGlobalMatrices !== undefined) {
          _gl.uniformMatrix4fv(p_uniforms.boneGlobalMatrices, false, object.skeleton.boneMatrices);
        }
      }
    }

    if (refreshMaterial) {
      if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshStandardMaterial || material.lights) {
        // the current material requires lighting info
        // note: all lighting uniforms are always set correctly
        // they simply reference the renderer's state for their
        // values
        //
        // use the current material's .needsUpdate flags to set
        // the GL state when required
        markUniformsLightsNeedsUpdate(m_uniforms, refreshLights);
      } // refresh uniforms common to several materials


      if (fog && material.fog) {
        refreshUniformsFog(m_uniforms, fog);
      }

      if (material instanceof THREE.MeshBasicMaterial || material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshStandardMaterial) {
        refreshUniformsCommon(m_uniforms, material);
      } // refresh single material specific uniforms


      if (material instanceof THREE.LineBasicMaterial) {
        refreshUniformsLine(m_uniforms, material);
      } else if (material instanceof THREE.LineDashedMaterial) {
        refreshUniformsLine(m_uniforms, material);
        refreshUniformsDash(m_uniforms, material);
      } else if (material instanceof THREE.PointsMaterial) {
        refreshUniformsPoints(m_uniforms, material);
      } else if (material instanceof THREE.MeshLambertMaterial) {
        refreshUniformsLambert(m_uniforms, material);
      } else if (material instanceof THREE.MeshPhongMaterial) {
        refreshUniformsPhong(m_uniforms, material);
      } else if (material instanceof THREE.MeshStandardMaterial) {
        refreshUniformsStandard(m_uniforms, material);
      } else if (material instanceof THREE.MeshDepthMaterial) {
        m_uniforms.mNear.value = camera.near;
        m_uniforms.mFar.value = camera.far;
        m_uniforms.opacity.value = material.opacity;
      } else if (material instanceof THREE.MeshNormalMaterial) {
        m_uniforms.opacity.value = material.opacity;
      } // load common uniforms


      loadUniformsGeneric(materialProperties.uniformsList);
    }

    loadUniformsMatrices(p_uniforms, object);

    if (p_uniforms.modelMatrix !== undefined) {
      _gl.uniformMatrix4fv(p_uniforms.modelMatrix, false, object.matrixWorld.elements);
    }

    if (materialProperties.hasDynamicUniforms === true) {
      updateDynamicUniforms(materialProperties.uniformsList, object, camera);
    }

    return program;
  }

  function updateDynamicUniforms(uniforms, object, camera) {
    var dynamicUniforms = [];

    for (var j = 0, jl = uniforms.length; j < jl; j++) {
      var uniform = uniforms[j][0];
      var onUpdateCallback = uniform.onUpdateCallback;

      if (onUpdateCallback !== undefined) {
        onUpdateCallback.bind(uniform)(object, camera);
        dynamicUniforms.push(uniforms[j]);
      }
    }

    loadUniformsGeneric(dynamicUniforms);
  } // Uniforms (refresh uniforms objects)


  function refreshUniformsCommon(uniforms, material) {
    uniforms.opacity.value = material.opacity;
    uniforms.diffuse.value = material.color;

    if (material.emissive) {
      uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);
    }

    uniforms.map.value = material.map;
    uniforms.specularMap.value = material.specularMap;
    uniforms.alphaMap.value = material.alphaMap;

    if (material.aoMap) {
      uniforms.aoMap.value = material.aoMap;
      uniforms.aoMapIntensity.value = material.aoMapIntensity;
    } // uv repeat and offset setting priorities
    // 1. color map
    // 2. specular map
    // 3. normal map
    // 4. bump map
    // 5. alpha map
    // 6. emissive map


    var uvScaleMap;

    if (material.map) {
      uvScaleMap = material.map;
    } else if (material.specularMap) {
      uvScaleMap = material.specularMap;
    } else if (material.displacementMap) {
      uvScaleMap = material.displacementMap;
    } else if (material.normalMap) {
      uvScaleMap = material.normalMap;
    } else if (material.bumpMap) {
      uvScaleMap = material.bumpMap;
    } else if (material.roughnessMap) {
      uvScaleMap = material.roughnessMap;
    } else if (material.metalnessMap) {
      uvScaleMap = material.metalnessMap;
    } else if (material.alphaMap) {
      uvScaleMap = material.alphaMap;
    } else if (material.emissiveMap) {
      uvScaleMap = material.emissiveMap;
    }

    if (uvScaleMap !== undefined) {
      if (uvScaleMap instanceof THREE.WebGLRenderTarget) {
        uvScaleMap = uvScaleMap.texture;
      }

      var offset = uvScaleMap.offset;
      var repeat = uvScaleMap.repeat;
      uniforms.offsetRepeat.value.set(offset.x, offset.y, repeat.x, repeat.y);
    }

    uniforms.envMap.value = material.envMap;
    uniforms.flipEnvMap.value = material.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
    uniforms.reflectivity.value = material.reflectivity;
    uniforms.refractionRatio.value = material.refractionRatio;
  }

  function refreshUniformsLine(uniforms, material) {
    uniforms.diffuse.value = material.color;
    uniforms.opacity.value = material.opacity;
  }

  function refreshUniformsDash(uniforms, material) {
    uniforms.dashSize.value = material.dashSize;
    uniforms.totalSize.value = material.dashSize + material.gapSize;
    uniforms.scale.value = material.scale;
  }

  function refreshUniformsPoints(uniforms, material) {
    uniforms.diffuse.value = material.color;
    uniforms.opacity.value = material.opacity;
    uniforms.size.value = material.size * _pixelRatio;
    uniforms.scale.value = _canvas.clientHeight / 2.0; // TODO: Cache this.

    uniforms.map.value = material.map;

    if (material.map !== null) {
      var offset = material.map.offset;
      var repeat = material.map.repeat;
      uniforms.offsetRepeat.value.set(offset.x, offset.y, repeat.x, repeat.y);
    }
  }

  function refreshUniformsFog(uniforms, fog) {
    uniforms.fogColor.value = fog.color;

    if (fog instanceof THREE.Fog) {
      uniforms.fogNear.value = fog.near;
      uniforms.fogFar.value = fog.far;
    } else if (fog instanceof THREE.FogExp2) {
      uniforms.fogDensity.value = fog.density;
    }
  }

  function refreshUniformsLambert(uniforms, material) {
    if (material.lightMap) {
      uniforms.lightMap.value = material.lightMap;
      uniforms.lightMapIntensity.value = material.lightMapIntensity;
    }

    if (material.emissiveMap) {
      uniforms.emissiveMap.value = material.emissiveMap;
    }
  }

  function refreshUniformsPhong(uniforms, material) {
    uniforms.specular.value = material.specular;
    uniforms.shininess.value = Math.max(material.shininess, 1e-4); // to prevent pow( 0.0, 0.0 )

    if (material.lightMap) {
      uniforms.lightMap.value = material.lightMap;
      uniforms.lightMapIntensity.value = material.lightMapIntensity;
    }

    if (material.emissiveMap) {
      uniforms.emissiveMap.value = material.emissiveMap;
    }

    if (material.bumpMap) {
      uniforms.bumpMap.value = material.bumpMap;
      uniforms.bumpScale.value = material.bumpScale;
    }

    if (material.normalMap) {
      uniforms.normalMap.value = material.normalMap;
      uniforms.normalScale.value.copy(material.normalScale);
    }

    if (material.displacementMap) {
      uniforms.displacementMap.value = material.displacementMap;
      uniforms.displacementScale.value = material.displacementScale;
      uniforms.displacementBias.value = material.displacementBias;
    }
  }

  function refreshUniformsStandard(uniforms, material) {
    uniforms.roughness.value = material.roughness;
    uniforms.metalness.value = material.metalness;

    if (material.roughnessMap) {
      uniforms.roughnessMap.value = material.roughnessMap;
    }

    if (material.metalnessMap) {
      uniforms.metalnessMap.value = material.metalnessMap;
    }

    if (material.lightMap) {
      uniforms.lightMap.value = material.lightMap;
      uniforms.lightMapIntensity.value = material.lightMapIntensity;
    }

    if (material.emissiveMap) {
      uniforms.emissiveMap.value = material.emissiveMap;
    }

    if (material.bumpMap) {
      uniforms.bumpMap.value = material.bumpMap;
      uniforms.bumpScale.value = material.bumpScale;
    }

    if (material.normalMap) {
      uniforms.normalMap.value = material.normalMap;
      uniforms.normalScale.value.copy(material.normalScale);
    }

    if (material.displacementMap) {
      uniforms.displacementMap.value = material.displacementMap;
      uniforms.displacementScale.value = material.displacementScale;
      uniforms.displacementBias.value = material.displacementBias;
    }

    if (material.envMap) {
      //uniforms.envMap.value = material.envMap; // part of uniforms common
      uniforms.envMapIntensity.value = material.envMapIntensity;
    }
  } // If uniforms are marked as clean, they don't need to be loaded to the GPU.


  function markUniformsLightsNeedsUpdate(uniforms, value) {
    uniforms.ambientLightColor.needsUpdate = value;
    uniforms.directionalLights.needsUpdate = value;
    uniforms.pointLights.needsUpdate = value;
    uniforms.spotLights.needsUpdate = value;
    uniforms.hemisphereLights.needsUpdate = value;
  } // Uniforms (load to GPU)


  function loadUniformsMatrices(uniforms, object) {
    _gl.uniformMatrix4fv(uniforms.modelViewMatrix, false, object.modelViewMatrix.elements);

    if (uniforms.normalMatrix) {
      _gl.uniformMatrix3fv(uniforms.normalMatrix, false, object.normalMatrix.elements);
    }
  }

  function getTextureUnit() {
    var textureUnit = _usedTextureUnits;

    _usedTextureUnits += 1;
    return textureUnit;
  }

  function loadUniform(uniform, type, location, value) {
    var texture, textureUnit;

    if (type === '1i') {
      _gl.uniform1i(location, value);
    } else if (type === '1f') {
      _gl.uniform1f(location, value);
    } else if (type === '2f') {
      _gl.uniform2f(location, value[0], value[1]);
    } else if (type === '3f') {
      _gl.uniform3f(location, value[0], value[1], value[2]);
    } else if (type === '4f') {
      _gl.uniform4f(location, value[0], value[1], value[2], value[3]);
    } else if (type === '1iv') {
      _gl.uniform1iv(location, value);
    } else if (type === '3iv') {
      _gl.uniform3iv(location, value);
    } else if (type === '1fv') {
      _gl.uniform1fv(location, value);
    } else if (type === '2fv') {
      _gl.uniform2fv(location, value);
    } else if (type === '3fv') {
      _gl.uniform3fv(location, value);
    } else if (type === '4fv') {
      _gl.uniform4fv(location, value);
    } else if (type === 'Matrix2fv') {
      _gl.uniformMatrix2fv(location, false, value);
    } else if (type === 'Matrix3fv') {
      _gl.uniformMatrix3fv(location, false, value);
    } else if (type === 'Matrix4fv') {
      _gl.uniformMatrix4fv(location, false, value); //

    } else if (type === 'i') {
      // single integer
      _gl.uniform1i(location, value);
    } else if (type === 'f') {
      // single float
      _gl.uniform1f(location, value);
    } else if (type === 'v2') {
      // single THREE.Vector2
      _gl.uniform2f(location, value.x, value.y);
    } else if (type === 'v3') {
      // single THREE.Vector3
      _gl.uniform3f(location, value.x, value.y, value.z);
    } else if (type === 'v4') {
      // single THREE.Vector4
      _gl.uniform4f(location, value.x, value.y, value.z, value.w);
    } else if (type === 'c') {
      // single THREE.Color
      _gl.uniform3f(location, value.r, value.g, value.b);
    } else if (type === 's') {
      // TODO: Optimize this
      var properties = uniform.properties;

      for (var name in properties) {
        var property = properties[name];
        var locationProperty = location[name];
        var valueProperty = value[name];
        loadUniform(property, property.type, locationProperty, valueProperty);
      }
    } else if (type === 'sa') {
      // TODO: Optimize this
      var properties = uniform.properties;

      for (var i = 0, l = value.length; i < l; i++) {
        for (var name in properties) {
          var property = properties[name];
          var locationProperty = location[i][name];
          var valueProperty = value[i][name];
          loadUniform(property, property.type, locationProperty, valueProperty);
        }
      }
    } else if (type === 'iv1') {
      // flat array of integers (JS or typed array)
      _gl.uniform1iv(location, value);
    } else if (type === 'iv') {
      // flat array of integers with 3 x N size (JS or typed array)
      _gl.uniform3iv(location, value);
    } else if (type === 'fv1') {
      // flat array of floats (JS or typed array)
      _gl.uniform1fv(location, value);
    } else if (type === 'fv') {
      // flat array of floats with 3 x N size (JS or typed array)
      _gl.uniform3fv(location, value);
    } else if (type === 'v2v') {
      // array of THREE.Vector2
      if (uniform._array === undefined) {
        uniform._array = new Float32Array(2 * value.length);
      }

      for (var i = 0, i2 = 0, il = value.length; i < il; i++, i2 += 2) {
        uniform._array[i2 + 0] = value[i].x;
        uniform._array[i2 + 1] = value[i].y;
      }

      _gl.uniform2fv(location, uniform._array);
    } else if (type === 'v3v') {
      // array of THREE.Vector3
      if (uniform._array === undefined) {
        uniform._array = new Float32Array(3 * value.length);
      }

      for (var i = 0, i3 = 0, il = value.length; i < il; i++, i3 += 3) {
        uniform._array[i3 + 0] = value[i].x;
        uniform._array[i3 + 1] = value[i].y;
        uniform._array[i3 + 2] = value[i].z;
      }

      _gl.uniform3fv(location, uniform._array);
    } else if (type === 'v4v') {
      // array of THREE.Vector4
      if (uniform._array === undefined) {
        uniform._array = new Float32Array(4 * value.length);
      }

      for (var i = 0, i4 = 0, il = value.length; i < il; i++, i4 += 4) {
        uniform._array[i4 + 0] = value[i].x;
        uniform._array[i4 + 1] = value[i].y;
        uniform._array[i4 + 2] = value[i].z;
        uniform._array[i4 + 3] = value[i].w;
      }

      _gl.uniform4fv(location, uniform._array);
    } else if (type === 'm2') {
      // single THREE.Matrix2
      _gl.uniformMatrix2fv(location, false, value.elements);
    } else if (type === 'm3') {
      // single THREE.Matrix3
      _gl.uniformMatrix3fv(location, false, value.elements);
    } else if (type === 'm3v') {
      // array of THREE.Matrix3
      if (uniform._array === undefined) {
        uniform._array = new Float32Array(9 * value.length);
      }

      for (var i = 0, il = value.length; i < il; i++) {
        value[i].flattenToArrayOffset(uniform._array, i * 9);
      }

      _gl.uniformMatrix3fv(location, false, uniform._array);
    } else if (type === 'm4') {
      // single THREE.Matrix4
      _gl.uniformMatrix4fv(location, false, value.elements);
    } else if (type === 'm4v') {
      // array of THREE.Matrix4
      if (uniform._array === undefined) {
        uniform._array = new Float32Array(16 * value.length);
      }

      for (var i = 0, il = value.length; i < il; i++) {
        value[i].flattenToArrayOffset(uniform._array, i * 16);
      }

      _gl.uniformMatrix4fv(location, false, uniform._array);
    } else if (type === 't') {
      // single THREE.Texture (2d or cube)
      texture = value;
      textureUnit = getTextureUnit();

      _gl.uniform1i(location, textureUnit);

      if (!texture) return;

      if (texture instanceof THREE.CubeTexture || Array.isArray(texture.image) && texture.image.length === 6) {
        // CompressedTexture can have Array in image :/
        setCubeTexture(texture, textureUnit);
      } else if (texture instanceof THREE.WebGLRenderTargetCube) {
        setCubeTextureDynamic(texture.texture, textureUnit);
      } else if (texture instanceof THREE.WebGLRenderTarget) {
        _this.setTexture(texture.texture, textureUnit);
      } else {
        _this.setTexture(texture, textureUnit);
      }
    } else if (type === 'tv') {
      // array of THREE.Texture (2d or cube)
      if (uniform._array === undefined) {
        uniform._array = [];
      }

      for (var i = 0, il = uniform.value.length; i < il; i++) {
        uniform._array[i] = getTextureUnit();
      }

      _gl.uniform1iv(location, uniform._array);

      for (var i = 0, il = uniform.value.length; i < il; i++) {
        texture = uniform.value[i];
        textureUnit = uniform._array[i];
        if (!texture) continue;

        if (texture instanceof THREE.CubeTexture || texture.image instanceof Array && texture.image.length === 6) {
          // CompressedTexture can have Array in image :/
          setCubeTexture(texture, textureUnit);
        } else if (texture instanceof THREE.WebGLRenderTarget) {
          _this.setTexture(texture.texture, textureUnit);
        } else if (texture instanceof THREE.WebGLRenderTargetCube) {
          setCubeTextureDynamic(texture.texture, textureUnit);
        } else {
          _this.setTexture(texture, textureUnit);
        }
      }
    }
  }

  function loadUniformsGeneric(uniforms) {
    for (var i = 0, l = uniforms.length; i < l; i++) {
      var uniform = uniforms[i][0]; // needsUpdate property is not added to all uniforms.

      if (uniform.needsUpdate === false) continue;
      var type = uniform.type;
      var location = uniforms[i][1];
      var value = uniform.value;
      loadUniform(uniform, type, location, value);
    }
  }

  function setupLights(lights, camera) {
    var l,
        ll,
        light,
        r = 0,
        g = 0,
        b = 0,
        color,
        intensity,
        distance,
        viewMatrix = camera.matrixWorldInverse,
        directionalLength = 0,
        pointLength = 0,
        spotLength = 0,
        hemiLength = 0,
        shadowsLength = 0;
    _lights.shadowsPointLight = 0;

    for (l = 0, ll = lights.length; l < ll; l++) {
      light = lights[l];
      color = light.color;
      intensity = light.intensity;
      distance = light.distance;

      if (light instanceof THREE.AmbientLight) {
        r += color.r * intensity;
        g += color.g * intensity;
        b += color.b * intensity;
      } else if (light instanceof THREE.DirectionalLight) {
        var uniforms = lightCache.get(light);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity);
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);

        _vector3.setFromMatrixPosition(light.target.matrixWorld);

        uniforms.direction.sub(_vector3);
        uniforms.direction.transformDirection(viewMatrix);
        uniforms.shadow = light.castShadow;

        if (light.castShadow) {
          uniforms.shadowBias = light.shadow.bias;
          uniforms.shadowRadius = light.shadow.radius;
          uniforms.shadowMapSize = light.shadow.mapSize;
          _lights.shadows[shadowsLength++] = light;
        }

        _lights.directionalShadowMap[directionalLength] = light.shadow.map;
        _lights.directionalShadowMatrix[directionalLength] = light.shadow.matrix;
        _lights.directional[directionalLength++] = uniforms;
      } else if (light instanceof THREE.SpotLight) {
        var uniforms = lightCache.get(light);
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        uniforms.color.copy(color).multiplyScalar(intensity);
        uniforms.distance = distance;
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);

        _vector3.setFromMatrixPosition(light.target.matrixWorld);

        uniforms.direction.sub(_vector3);
        uniforms.direction.transformDirection(viewMatrix);
        uniforms.coneCos = Math.cos(light.angle);
        uniforms.penumbraCos = Math.cos(light.angle * (1 - light.penumbra));
        uniforms.decay = light.distance === 0 ? 0.0 : light.decay;
        uniforms.shadow = light.castShadow;

        if (light.castShadow) {
          uniforms.shadowBias = light.shadow.bias;
          uniforms.shadowRadius = light.shadow.radius;
          uniforms.shadowMapSize = light.shadow.mapSize;
          _lights.shadows[shadowsLength++] = light;
        }

        _lights.spotShadowMap[spotLength] = light.shadow.map;
        _lights.spotShadowMatrix[spotLength] = light.shadow.matrix;
        _lights.spot[spotLength++] = uniforms;
      } else if (light instanceof THREE.PointLight) {
        var uniforms = lightCache.get(light);
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity);
        uniforms.distance = light.distance;
        uniforms.decay = light.distance === 0 ? 0.0 : light.decay;
        uniforms.shadow = light.castShadow;

        if (light.castShadow) {
          uniforms.shadowBias = light.shadow.bias;
          uniforms.shadowRadius = light.shadow.radius;
          uniforms.shadowMapSize = light.shadow.mapSize;
          _lights.shadows[shadowsLength++] = light;
        }

        _lights.pointShadowMap[pointLength] = light.shadow.map;

        if (_lights.pointShadowMatrix[pointLength] === undefined) {
          _lights.pointShadowMatrix[pointLength] = new THREE.Matrix4();
        } // for point lights we set the shadow matrix to be a translation-only matrix
        // equal to inverse of the light's position


        _vector3.setFromMatrixPosition(light.matrixWorld).negate();

        _lights.pointShadowMatrix[pointLength].identity().setPosition(_vector3);

        _lights.point[pointLength++] = uniforms;
      } else if (light instanceof THREE.HemisphereLight) {
        var uniforms = lightCache.get(light);
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        uniforms.direction.transformDirection(viewMatrix);
        uniforms.direction.normalize();
        uniforms.skyColor.copy(light.color).multiplyScalar(intensity);
        uniforms.groundColor.copy(light.groundColor).multiplyScalar(intensity);
        _lights.hemi[hemiLength++] = uniforms;
      }
    }

    _lights.ambient[0] = r;
    _lights.ambient[1] = g;
    _lights.ambient[2] = b;
    _lights.directional.length = directionalLength;
    _lights.spot.length = spotLength;
    _lights.point.length = pointLength;
    _lights.hemi.length = hemiLength;
    _lights.shadows.length = shadowsLength;
    _lights.hash = directionalLength + ',' + pointLength + ',' + spotLength + ',' + hemiLength + ',' + shadowsLength;
  } // GL state setting


  this.setFaceCulling = function (cullFace, frontFaceDirection) {
    if (cullFace === THREE.CullFaceNone) {
      state.disable(_gl.CULL_FACE);
    } else {
      if (frontFaceDirection === THREE.FrontFaceDirectionCW) {
        _gl.frontFace(_gl.CW);
      } else {
        _gl.frontFace(_gl.CCW);
      }

      if (cullFace === THREE.CullFaceBack) {
        _gl.cullFace(_gl.BACK);
      } else if (cullFace === THREE.CullFaceFront) {
        _gl.cullFace(_gl.FRONT);
      } else {
        _gl.cullFace(_gl.FRONT_AND_BACK);
      }

      state.enable(_gl.CULL_FACE);
    }
  }; // Textures


  function setTextureParameters(textureType, texture, isPowerOfTwoImage) {
    var extension;

    if (isPowerOfTwoImage) {
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, paramThreeToGL(texture.wrapS));

      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, paramThreeToGL(texture.wrapT));

      _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, paramThreeToGL(texture.magFilter));

      _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, paramThreeToGL(texture.minFilter));
    } else {
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);

      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);

      if (texture.wrapS !== THREE.ClampToEdgeWrapping || texture.wrapT !== THREE.ClampToEdgeWrapping) ;

      _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterFallback(texture.magFilter));

      _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterFallback(texture.minFilter));

      if (texture.minFilter !== THREE.NearestFilter && texture.minFilter !== THREE.LinearFilter) ;
    }

    extension = extensions.get('EXT_texture_filter_anisotropic');

    if (extension) {
      if (texture.type === THREE.FloatType && extensions.get('OES_texture_float_linear') === null) return;
      if (texture.type === THREE.HalfFloatType && extensions.get('OES_texture_half_float_linear') === null) return;

      if (texture.anisotropy > 1 || properties.get(texture).__currentAnisotropy) {
        _gl.texParameterf(textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(texture.anisotropy, _this.getMaxAnisotropy()));

        properties.get(texture).__currentAnisotropy = texture.anisotropy;
      }
    }
  }

  function uploadTexture(textureProperties, texture, slot) {
    if (textureProperties.__webglInit === undefined) {
      textureProperties.__webglInit = true;
      texture.addEventListener('dispose', onTextureDispose);
      textureProperties.__webglTexture = _gl.createTexture();
      _infoMemory.textures++;
    }

    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_2D, textureProperties.__webglTexture);

    _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);

    _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);

    _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);

    var image = clampToMaxSize(texture.image, capabilities.maxTextureSize);

    if (textureNeedsPowerOfTwo(texture) && isPowerOfTwo(image) === false) {
      image = makePowerOfTwo(image);
    }

    var isPowerOfTwoImage = isPowerOfTwo(image),
        glFormat = paramThreeToGL(texture.format),
        glType = paramThreeToGL(texture.type);
    setTextureParameters(_gl.TEXTURE_2D, texture, isPowerOfTwoImage);
    var mipmap,
        mipmaps = texture.mipmaps;

    if (texture instanceof THREE.DataTexture) {
      // use manually created mipmaps if available
      // if there are no manual mipmaps
      // set 0 level mipmap and then use GL to generate other mipmap levels
      if (mipmaps.length > 0 && isPowerOfTwoImage) {
        for (var i = 0, il = mipmaps.length; i < il; i++) {
          mipmap = mipmaps[i];
          state.texImage2D(_gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
        }

        texture.generateMipmaps = false;
      } else {
        state.texImage2D(_gl.TEXTURE_2D, 0, glFormat, image.width, image.height, 0, glFormat, glType, image.data);
      }
    } else if (texture instanceof THREE.CompressedTexture) {
      for (var i = 0, il = mipmaps.length; i < il; i++) {
        mipmap = mipmaps[i];

        if (texture.format !== THREE.RGBAFormat && texture.format !== THREE.RGBFormat) {
          if (state.getCompressedTextureFormats().indexOf(glFormat) > -1) {
            state.compressedTexImage2D(_gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, mipmap.data);
          }
        } else {
          state.texImage2D(_gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
        }
      }
    } else {
      // regular Texture (image, video, canvas)
      // use manually created mipmaps if available
      // if there are no manual mipmaps
      // set 0 level mipmap and then use GL to generate other mipmap levels
      if (mipmaps.length > 0 && isPowerOfTwoImage) {
        for (var i = 0, il = mipmaps.length; i < il; i++) {
          mipmap = mipmaps[i];
          state.texImage2D(_gl.TEXTURE_2D, i, glFormat, glFormat, glType, mipmap);
        }

        texture.generateMipmaps = false;
      } else {
        state.texImage2D(_gl.TEXTURE_2D, 0, glFormat, glFormat, glType, image);
      }
    }

    if (texture.generateMipmaps && isPowerOfTwoImage) _gl.generateMipmap(_gl.TEXTURE_2D);
    textureProperties.__version = texture.version;
    if (texture.onUpdate) texture.onUpdate(texture);
  }

  this.setTexture = function (texture, slot) {
    var textureProperties = properties.get(texture);

    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      var image = texture.image;

      if (image === undefined) {
        return;
      }

      if (image.complete === false) {
        return;
      }

      uploadTexture(textureProperties, texture, slot);
      return;
    }

    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_2D, textureProperties.__webglTexture);
  };

  function clampToMaxSize(image, maxSize) {
    if (image.width > maxSize || image.height > maxSize) {
      // Warning: Scaling through the canvas will only work with images that use
      // premultiplied alpha.
      var scale = maxSize / Math.max(image.width, image.height);
      var canvas = document.createElement('canvas');
      canvas.width = Math.floor(image.width * scale);
      canvas.height = Math.floor(image.height * scale);
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      return canvas;
    }

    return image;
  }

  function isPowerOfTwo(image) {
    return THREE.Math.isPowerOfTwo(image.width) && THREE.Math.isPowerOfTwo(image.height);
  }

  function textureNeedsPowerOfTwo(texture) {
    if (texture.wrapS !== THREE.ClampToEdgeWrapping || texture.wrapT !== THREE.ClampToEdgeWrapping) return true;
    if (texture.minFilter !== THREE.NearestFilter && texture.minFilter !== THREE.LinearFilter) return true;
    return false;
  }

  function makePowerOfTwo(image) {
    if (image instanceof HTMLImageElement || image instanceof HTMLCanvasElement) {
      var canvas = document.createElement('canvas');
      canvas.width = THREE.Math.nearestPowerOfTwo(image.width);
      canvas.height = THREE.Math.nearestPowerOfTwo(image.height);
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      return canvas;
    }

    return image;
  }

  function setCubeTexture(texture, slot) {
    var textureProperties = properties.get(texture);

    if (texture.image.length === 6) {
      if (texture.version > 0 && textureProperties.__version !== texture.version) {
        if (!textureProperties.__image__webglTextureCube) {
          texture.addEventListener('dispose', onTextureDispose);
          textureProperties.__image__webglTextureCube = _gl.createTexture();
          _infoMemory.textures++;
        }

        state.activeTexture(_gl.TEXTURE0 + slot);
        state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__image__webglTextureCube);

        _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);

        var isCompressed = texture instanceof THREE.CompressedTexture;
        var isDataTexture = texture.image[0] instanceof THREE.DataTexture;
        var cubeImage = [];

        for (var i = 0; i < 6; i++) {
          if (_this.autoScaleCubemaps && !isCompressed && !isDataTexture) {
            cubeImage[i] = clampToMaxSize(texture.image[i], capabilities.maxCubemapSize);
          } else {
            cubeImage[i] = isDataTexture ? texture.image[i].image : texture.image[i];
          }
        }

        var image = cubeImage[0],
            isPowerOfTwoImage = isPowerOfTwo(image),
            glFormat = paramThreeToGL(texture.format),
            glType = paramThreeToGL(texture.type);
        setTextureParameters(_gl.TEXTURE_CUBE_MAP, texture, isPowerOfTwoImage);

        for (var i = 0; i < 6; i++) {
          if (!isCompressed) {
            if (isDataTexture) {
              state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, cubeImage[i].width, cubeImage[i].height, 0, glFormat, glType, cubeImage[i].data);
            } else {
              state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, glFormat, glType, cubeImage[i]);
            }
          } else {
            var mipmap,
                mipmaps = cubeImage[i].mipmaps;

            for (var j = 0, jl = mipmaps.length; j < jl; j++) {
              mipmap = mipmaps[j];

              if (texture.format !== THREE.RGBAFormat && texture.format !== THREE.RGBFormat) {
                if (state.getCompressedTextureFormats().indexOf(glFormat) > -1) {
                  state.compressedTexImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, mipmap.data);
                }
              } else {
                state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
              }
            }
          }
        }

        if (texture.generateMipmaps && isPowerOfTwoImage) {
          _gl.generateMipmap(_gl.TEXTURE_CUBE_MAP);
        }

        textureProperties.__version = texture.version;
        if (texture.onUpdate) texture.onUpdate(texture);
      } else {
        state.activeTexture(_gl.TEXTURE0 + slot);
        state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__image__webglTextureCube);
      }
    }
  }

  function setCubeTextureDynamic(texture, slot) {
    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_CUBE_MAP, properties.get(texture).__webglTexture);
  } // Render targets
  // Setup storage for target texture and bind it to correct framebuffer


  function setupFrameBufferTexture(framebuffer, renderTarget, attachment, textureTarget) {
    var glFormat = paramThreeToGL(renderTarget.texture.format);
    var glType = paramThreeToGL(renderTarget.texture.type);
    state.texImage2D(textureTarget, 0, glFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null);

    _gl.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);

    _gl.framebufferTexture2D(_gl.FRAMEBUFFER, attachment, textureTarget, properties.get(renderTarget.texture).__webglTexture, 0);

    _gl.bindFramebuffer(_gl.FRAMEBUFFER, null);
  } // Setup storage for internal depth/stencil buffers and bind to correct framebuffer


  function setupRenderBufferStorage(renderbuffer, renderTarget) {
    _gl.bindRenderbuffer(_gl.RENDERBUFFER, renderbuffer);

    if (renderTarget.depthBuffer && !renderTarget.stencilBuffer) {
      _gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.DEPTH_COMPONENT16, renderTarget.width, renderTarget.height);

      _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
    } else if (renderTarget.depthBuffer && renderTarget.stencilBuffer) {
      _gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.DEPTH_STENCIL, renderTarget.width, renderTarget.height);

      _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
    } else {
      // FIXME: We don't support !depth !stencil
      _gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.RGBA4, renderTarget.width, renderTarget.height);
    }

    _gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
  } // Setup GL resources for a non-texture depth buffer


  function setupDepthRenderbuffer(renderTarget) {
    var renderTargetProperties = properties.get(renderTarget);
    var isCube = renderTarget instanceof THREE.WebGLRenderTargetCube;

    if (isCube) {
      renderTargetProperties.__webglDepthbuffer = [];

      for (var i = 0; i < 6; i++) {
        _gl.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer[i]);

        renderTargetProperties.__webglDepthbuffer[i] = _gl.createRenderbuffer();
        setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer[i], renderTarget);
      }
    } else {
      _gl.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);

      renderTargetProperties.__webglDepthbuffer = _gl.createRenderbuffer();
      setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer, renderTarget);
    }

    _gl.bindFramebuffer(_gl.FRAMEBUFFER, null);
  } // Set up GL resources for the render target


  function setupRenderTarget(renderTarget) {
    var renderTargetProperties = properties.get(renderTarget);
    var textureProperties = properties.get(renderTarget.texture);
    renderTarget.addEventListener('dispose', onRenderTargetDispose);
    textureProperties.__webglTexture = _gl.createTexture();
    _infoMemory.textures++;
    var isCube = renderTarget instanceof THREE.WebGLRenderTargetCube;
    var isTargetPowerOfTwo = THREE.Math.isPowerOfTwo(renderTarget.width) && THREE.Math.isPowerOfTwo(renderTarget.height); // Setup framebuffer

    if (isCube) {
      renderTargetProperties.__webglFramebuffer = [];

      for (var i = 0; i < 6; i++) {
        renderTargetProperties.__webglFramebuffer[i] = _gl.createFramebuffer();
      }
    } else {
      renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();
    } // Setup color buffer


    if (isCube) {
      state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture);
      setTextureParameters(_gl.TEXTURE_CUBE_MAP, renderTarget.texture, isTargetPowerOfTwo);

      for (var i = 0; i < 6; i++) {
        setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[i], renderTarget, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i);
      }

      if (renderTarget.texture.generateMipmaps && isTargetPowerOfTwo) _gl.generateMipmap(_gl.TEXTURE_CUBE_MAP);
      state.bindTexture(_gl.TEXTURE_CUBE_MAP, null);
    } else {
      state.bindTexture(_gl.TEXTURE_2D, textureProperties.__webglTexture);
      setTextureParameters(_gl.TEXTURE_2D, renderTarget.texture, isTargetPowerOfTwo);
      setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D);
      if (renderTarget.texture.generateMipmaps && isTargetPowerOfTwo) _gl.generateMipmap(_gl.TEXTURE_2D);
      state.bindTexture(_gl.TEXTURE_2D, null);
    } // Setup depth and stencil buffers


    if (renderTarget.depthBuffer) {
      setupDepthRenderbuffer(renderTarget);
    }
  }

  this.getCurrentRenderTarget = function () {
    return _currentRenderTarget;
  };

  this.setRenderTarget = function (renderTarget) {
    _currentRenderTarget = renderTarget;

    if (renderTarget && properties.get(renderTarget).__webglFramebuffer === undefined) {
      setupRenderTarget(renderTarget);
    }

    var isCube = renderTarget instanceof THREE.WebGLRenderTargetCube;
    var framebuffer;

    if (renderTarget) {
      var renderTargetProperties = properties.get(renderTarget);

      if (isCube) {
        framebuffer = renderTargetProperties.__webglFramebuffer[renderTarget.activeCubeFace];
      } else {
        framebuffer = renderTargetProperties.__webglFramebuffer;
      }

      _currentScissor.copy(renderTarget.scissor);

      _currentScissorTest = renderTarget.scissorTest;

      _currentViewport.copy(renderTarget.viewport);
    } else {
      framebuffer = null;

      _currentScissor.copy(_scissor).multiplyScalar(_pixelRatio);

      _currentScissorTest = _scissorTest;

      _currentViewport.copy(_viewport).multiplyScalar(_pixelRatio);
    }

    if (_currentFramebuffer !== framebuffer) {
      _gl.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);

      _currentFramebuffer = framebuffer;
    }

    state.scissor(_currentScissor);
    state.setScissorTest(_currentScissorTest);
    state.viewport(_currentViewport);

    if (isCube) {
      var textureProperties = properties.get(renderTarget.texture);

      _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + renderTarget.activeCubeFace, textureProperties.__webglTexture, renderTarget.activeMipMapLevel);
    }
  };

  this.readRenderTargetPixels = function (renderTarget, x, y, width, height, buffer) {
    if (renderTarget instanceof THREE.WebGLRenderTarget === false) {
      return;
    }

    var framebuffer = properties.get(renderTarget).__webglFramebuffer;

    if (framebuffer) {
      var restore = false;

      if (framebuffer !== _currentFramebuffer) {
        _gl.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);

        restore = true;
      }

      try {
        var texture = renderTarget.texture;

        if (texture.format !== THREE.RGBAFormat && paramThreeToGL(texture.format) !== _gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_FORMAT)) {
          return;
        }

        if (texture.type !== THREE.UnsignedByteType && paramThreeToGL(texture.type) !== _gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_TYPE) && !(texture.type === THREE.FloatType && extensions.get('WEBGL_color_buffer_float')) && !(texture.type === THREE.HalfFloatType && extensions.get('EXT_color_buffer_half_float'))) {
          return;
        }

        if (_gl.checkFramebufferStatus(_gl.FRAMEBUFFER) === _gl.FRAMEBUFFER_COMPLETE) {
          _gl.readPixels(x, y, width, height, paramThreeToGL(texture.format), paramThreeToGL(texture.type), buffer);
        }
      } finally {
        if (restore) {
          _gl.bindFramebuffer(_gl.FRAMEBUFFER, _currentFramebuffer);
        }
      }
    }
  };

  function updateRenderTargetMipmap(renderTarget) {
    var target = renderTarget instanceof THREE.WebGLRenderTargetCube ? _gl.TEXTURE_CUBE_MAP : _gl.TEXTURE_2D;

    var texture = properties.get(renderTarget.texture).__webglTexture;

    state.bindTexture(target, texture);

    _gl.generateMipmap(target);

    state.bindTexture(target, null);
  } // Fallback filters for non-power-of-2 textures


  function filterFallback(f) {
    if (f === THREE.NearestFilter || f === THREE.NearestMipMapNearestFilter || f === THREE.NearestMipMapLinearFilter) {
      return _gl.NEAREST;
    }

    return _gl.LINEAR;
  } // Map three.js constants to WebGL constants


  function paramThreeToGL(p) {
    var extension;
    if (p === THREE.RepeatWrapping) return _gl.REPEAT;
    if (p === THREE.ClampToEdgeWrapping) return _gl.CLAMP_TO_EDGE;
    if (p === THREE.MirroredRepeatWrapping) return _gl.MIRRORED_REPEAT;
    if (p === THREE.NearestFilter) return _gl.NEAREST;
    if (p === THREE.NearestMipMapNearestFilter) return _gl.NEAREST_MIPMAP_NEAREST;
    if (p === THREE.NearestMipMapLinearFilter) return _gl.NEAREST_MIPMAP_LINEAR;
    if (p === THREE.LinearFilter) return _gl.LINEAR;
    if (p === THREE.LinearMipMapNearestFilter) return _gl.LINEAR_MIPMAP_NEAREST;
    if (p === THREE.LinearMipMapLinearFilter) return _gl.LINEAR_MIPMAP_LINEAR;
    if (p === THREE.UnsignedByteType) return _gl.UNSIGNED_BYTE;
    if (p === THREE.UnsignedShort4444Type) return _gl.UNSIGNED_SHORT_4_4_4_4;
    if (p === THREE.UnsignedShort5551Type) return _gl.UNSIGNED_SHORT_5_5_5_1;
    if (p === THREE.UnsignedShort565Type) return _gl.UNSIGNED_SHORT_5_6_5;
    if (p === THREE.ByteType) return _gl.BYTE;
    if (p === THREE.ShortType) return _gl.SHORT;
    if (p === THREE.UnsignedShortType) return _gl.UNSIGNED_SHORT;
    if (p === THREE.IntType) return _gl.INT;
    if (p === THREE.UnsignedIntType) return _gl.UNSIGNED_INT;
    if (p === THREE.FloatType) return _gl.FLOAT;
    extension = extensions.get('OES_texture_half_float');

    if (extension !== null) {
      if (p === THREE.HalfFloatType) return extension.HALF_FLOAT_OES;
    }

    if (p === THREE.AlphaFormat) return _gl.ALPHA;
    if (p === THREE.RGBFormat) return _gl.RGB;
    if (p === THREE.RGBAFormat) return _gl.RGBA;
    if (p === THREE.LuminanceFormat) return _gl.LUMINANCE;
    if (p === THREE.LuminanceAlphaFormat) return _gl.LUMINANCE_ALPHA;
    if (p === THREE.AddEquation) return _gl.FUNC_ADD;
    if (p === THREE.SubtractEquation) return _gl.FUNC_SUBTRACT;
    if (p === THREE.ReverseSubtractEquation) return _gl.FUNC_REVERSE_SUBTRACT;
    if (p === THREE.ZeroFactor) return _gl.ZERO;
    if (p === THREE.OneFactor) return _gl.ONE;
    if (p === THREE.SrcColorFactor) return _gl.SRC_COLOR;
    if (p === THREE.OneMinusSrcColorFactor) return _gl.ONE_MINUS_SRC_COLOR;
    if (p === THREE.SrcAlphaFactor) return _gl.SRC_ALPHA;
    if (p === THREE.OneMinusSrcAlphaFactor) return _gl.ONE_MINUS_SRC_ALPHA;
    if (p === THREE.DstAlphaFactor) return _gl.DST_ALPHA;
    if (p === THREE.OneMinusDstAlphaFactor) return _gl.ONE_MINUS_DST_ALPHA;
    if (p === THREE.DstColorFactor) return _gl.DST_COLOR;
    if (p === THREE.OneMinusDstColorFactor) return _gl.ONE_MINUS_DST_COLOR;
    if (p === THREE.SrcAlphaSaturateFactor) return _gl.SRC_ALPHA_SATURATE;
    extension = extensions.get('WEBGL_compressed_texture_s3tc');

    if (extension !== null) {
      if (p === THREE.RGB_S3TC_DXT1_Format) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (p === THREE.RGBA_S3TC_DXT1_Format) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (p === THREE.RGBA_S3TC_DXT3_Format) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (p === THREE.RGBA_S3TC_DXT5_Format) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }

    extension = extensions.get('WEBGL_compressed_texture_pvrtc');

    if (extension !== null) {
      if (p === THREE.RGB_PVRTC_4BPPV1_Format) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (p === THREE.RGB_PVRTC_2BPPV1_Format) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (p === THREE.RGBA_PVRTC_4BPPV1_Format) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (p === THREE.RGBA_PVRTC_2BPPV1_Format) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }

    extension = extensions.get('WEBGL_compressed_texture_etc1');

    if (extension !== null) {
      if (p === THREE.RGB_ETC1_Format) return extension.COMPRESSED_RGB_ETC1_WEBGL;
    }

    extension = extensions.get('EXT_blend_minmax');

    if (extension !== null) {
      if (p === THREE.MinEquation) return extension.MIN_EXT;
      if (p === THREE.MaxEquation) return extension.MAX_EXT;
    }

    return 0;
  }
}; // File:src/renderers/webgl/WebGLExtensions.js

/**
* @author mrdoob / http://mrdoob.com/
*/


THREE.WebGLExtensions = function (gl) {
  var extensions = {};

  this.get = function (name) {
    if (extensions[name] !== undefined) {
      return extensions[name];
    }

    var extension;

    switch (name) {
      case 'EXT_texture_filter_anisotropic':
        extension = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;

      case 'WEBGL_compressed_texture_s3tc':
        extension = gl.getExtension('WEBGL_compressed_texture_s3tc') || gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;

      case 'WEBGL_compressed_texture_pvrtc':
        extension = gl.getExtension('WEBGL_compressed_texture_pvrtc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;

      case 'WEBGL_compressed_texture_etc1':
        extension = gl.getExtension('WEBGL_compressed_texture_etc1');
        break;

      default:
        extension = gl.getExtension(name);
    }

    extensions[name] = extension;
    return extension;
  };
}; // File:src/renderers/webgl/WebGLCapabilities.js


THREE.WebGLCapabilities = function (gl, extensions, parameters) {
  function getMaxPrecision(precision) {
    if (precision === 'highp') {
      if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0) {
        return 'highp';
      }

      precision = 'mediump';
    }

    if (precision === 'mediump') {
      if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0) {
        return 'mediump';
      }
    }

    return 'lowp';
  }

  this.getMaxPrecision = getMaxPrecision;
  this.precision = parameters.precision !== undefined ? parameters.precision : 'highp', this.logarithmicDepthBuffer = parameters.logarithmicDepthBuffer !== undefined ? parameters.logarithmicDepthBuffer : false;
  this.maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
  this.maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  this.maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
  this.maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
  this.maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
  this.maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
  this.maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
  this.vertexTextures = this.maxVertexTextures > 0;
  this.floatFragmentTextures = !!extensions.get('OES_texture_float');
  this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;

  var _maxPrecision = getMaxPrecision(this.precision);

  if (_maxPrecision !== this.precision) {
    this.precision = _maxPrecision;
  }

  if (this.logarithmicDepthBuffer) {
    this.logarithmicDepthBuffer = !!extensions.get('EXT_frag_depth');
  }
}; // File:src/renderers/webgl/WebGLProperties.js

/**
* @author fordacious / fordacious.github.io
*/


THREE.WebGLProperties = function () {
  var properties = {};

  this.get = function (object) {
    var uuid = object.uuid;
    var map = properties[uuid];

    if (map === undefined) {
      map = {};
      properties[uuid] = map;
    }

    return map;
  };

  this.delete = function (object) {
    delete properties[object.uuid];
  };

  this.clear = function () {
    properties = {};
  };
}; // File:src/renderers/webgl/WebGLLights.js

/**
* @author mrdoob / http://mrdoob.com/
*/


THREE.WebGLLights = function () {
  var lights = {};

  this.get = function (light) {
    if (lights[light.id] !== undefined) {
      return lights[light.id];
    }

    var uniforms;

    switch (light.type) {
      case 'DirectionalLight':
        uniforms = {
          direction: new THREE.Vector3(),
          color: new THREE.Color(),
          shadow: false,
          shadowBias: 0,
          shadowRadius: 1,
          shadowMapSize: new THREE.Vector2()
        };
        break;

      case 'SpotLight':
        uniforms = {
          position: new THREE.Vector3(),
          direction: new THREE.Vector3(),
          color: new THREE.Color(),
          distance: 0,
          coneCos: 0,
          penumbraCos: 0,
          decay: 0,
          shadow: false,
          shadowBias: 0,
          shadowRadius: 1,
          shadowMapSize: new THREE.Vector2()
        };
        break;

      case 'PointLight':
        uniforms = {
          position: new THREE.Vector3(),
          color: new THREE.Color(),
          distance: 0,
          decay: 0,
          shadow: false,
          shadowBias: 0,
          shadowRadius: 1,
          shadowMapSize: new THREE.Vector2()
        };
        break;

      case 'HemisphereLight':
        uniforms = {
          direction: new THREE.Vector3(),
          skyColor: new THREE.Color(),
          groundColor: new THREE.Color()
        };
        break;
    }

    lights[light.id] = uniforms;
    return uniforms;
  };
}; // File:src/renderers/webgl/WebGLState.js

/**
* @author mrdoob / http://mrdoob.com/
*/


THREE.WebGLState = function (gl, extensions, paramThreeToGL) {
  var _this = this;

  var color = new THREE.Vector4();
  var newAttributes = new Uint8Array(16);
  var enabledAttributes = new Uint8Array(16);
  var attributeDivisors = new Uint8Array(16);
  var capabilities = {};
  var compressedTextureFormats = null;
  var currentBlending = null;
  var currentBlendEquation = null;
  var currentBlendSrc = null;
  var currentBlendDst = null;
  var currentBlendEquationAlpha = null;
  var currentBlendSrcAlpha = null;
  var currentBlendDstAlpha = null;
  var currentPremultipledAlpha = false;
  var currentDepthFunc = null;
  var currentDepthWrite = null;
  var currentColorWrite = null;
  var currentStencilWrite = null;
  var currentStencilFunc = null;
  var currentStencilRef = null;
  var currentStencilMask = null;
  var currentStencilFail = null;
  var currentStencilZFail = null;
  var currentStencilZPass = null;
  var currentFlipSided = null;
  var currentLineWidth = null;
  var currentPolygonOffsetFactor = null;
  var currentPolygonOffsetUnits = null;
  var currentScissorTest = null;
  var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
  var currentTextureSlot = undefined;
  var currentBoundTextures = {};
  var currentClearColor = new THREE.Vector4();
  var currentClearDepth = null;
  var currentClearStencil = null;
  var currentScissor = new THREE.Vector4();
  var currentViewport = new THREE.Vector4();
  var emptyTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, emptyTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array(3));

  this.init = function () {
    this.clearColor(0, 0, 0, 1);
    this.clearDepth(1);
    this.clearStencil(0);
    this.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);
    this.enable(gl.CULL_FACE);
    this.enable(gl.BLEND);
    gl.blendEquation(gl.FUNC_ADD);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  };

  this.initAttributes = function () {
    for (var i = 0, l = newAttributes.length; i < l; i++) {
      newAttributes[i] = 0;
    }
  };

  this.enableAttribute = function (attribute) {
    newAttributes[attribute] = 1;

    if (enabledAttributes[attribute] === 0) {
      gl.enableVertexAttribArray(attribute);
      enabledAttributes[attribute] = 1;
    }

    if (attributeDivisors[attribute] !== 0) {
      var extension = extensions.get('ANGLE_instanced_arrays');
      extension.vertexAttribDivisorANGLE(attribute, 0);
      attributeDivisors[attribute] = 0;
    }
  };

  this.enableAttributeAndDivisor = function (attribute, meshPerAttribute, extension) {
    newAttributes[attribute] = 1;

    if (enabledAttributes[attribute] === 0) {
      gl.enableVertexAttribArray(attribute);
      enabledAttributes[attribute] = 1;
    }

    if (attributeDivisors[attribute] !== meshPerAttribute) {
      extension.vertexAttribDivisorANGLE(attribute, meshPerAttribute);
      attributeDivisors[attribute] = meshPerAttribute;
    }
  };

  this.disableUnusedAttributes = function () {
    for (var i = 0, l = enabledAttributes.length; i < l; i++) {
      if (enabledAttributes[i] !== newAttributes[i]) {
        gl.disableVertexAttribArray(i);
        enabledAttributes[i] = 0;
      }
    }
  };

  this.enable = function (id) {
    if (capabilities[id] !== true) {
      gl.enable(id);
      capabilities[id] = true;
    }
  };

  this.disable = function (id) {
    if (capabilities[id] !== false) {
      gl.disable(id);
      capabilities[id] = false;
    }
  };

  this.getCompressedTextureFormats = function () {
    if (compressedTextureFormats === null) {
      compressedTextureFormats = [];

      if (extensions.get('WEBGL_compressed_texture_pvrtc') || extensions.get('WEBGL_compressed_texture_s3tc') || extensions.get('WEBGL_compressed_texture_etc1')) {
        var formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS);

        for (var i = 0; i < formats.length; i++) {
          compressedTextureFormats.push(formats[i]);
        }
      }
    }

    return compressedTextureFormats;
  };

  this.setBlending = function (blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha, premultipliedAlpha) {
    if (blending === THREE.NoBlending) {
      this.disable(gl.BLEND);
    } else {
      this.enable(gl.BLEND);
    }

    if (blending !== currentBlending || premultipliedAlpha !== currentPremultipledAlpha) {
      if (blending === THREE.AdditiveBlending) {
        if (premultipliedAlpha) {
          gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
          gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
        } else {
          gl.blendEquation(gl.FUNC_ADD);
          gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }
      } else if (blending === THREE.SubtractiveBlending) {
        if (premultipliedAlpha) {
          gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
          gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
        } else {
          gl.blendEquation(gl.FUNC_ADD);
          gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
        }
      } else if (blending === THREE.MultiplyBlending) {
        if (premultipliedAlpha) {
          gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
          gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.SRC_COLOR, gl.SRC_ALPHA);
        } else {
          gl.blendEquation(gl.FUNC_ADD);
          gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
        }
      } else {
        if (premultipliedAlpha) {
          gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
          gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        } else {
          gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
          gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
      }

      currentBlending = blending;
      currentPremultipledAlpha = premultipliedAlpha;
    }

    if (blending === THREE.CustomBlending) {
      blendEquationAlpha = blendEquationAlpha || blendEquation;
      blendSrcAlpha = blendSrcAlpha || blendSrc;
      blendDstAlpha = blendDstAlpha || blendDst;

      if (blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha) {
        gl.blendEquationSeparate(paramThreeToGL(blendEquation), paramThreeToGL(blendEquationAlpha));
        currentBlendEquation = blendEquation;
        currentBlendEquationAlpha = blendEquationAlpha;
      }

      if (blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha) {
        gl.blendFuncSeparate(paramThreeToGL(blendSrc), paramThreeToGL(blendDst), paramThreeToGL(blendSrcAlpha), paramThreeToGL(blendDstAlpha));
        currentBlendSrc = blendSrc;
        currentBlendDst = blendDst;
        currentBlendSrcAlpha = blendSrcAlpha;
        currentBlendDstAlpha = blendDstAlpha;
      }
    } else {
      currentBlendEquation = null;
      currentBlendSrc = null;
      currentBlendDst = null;
      currentBlendEquationAlpha = null;
      currentBlendSrcAlpha = null;
      currentBlendDstAlpha = null;
    }
  };

  this.setDepthFunc = function (depthFunc) {
    if (currentDepthFunc !== depthFunc) {
      if (depthFunc) {
        switch (depthFunc) {
          case THREE.NeverDepth:
            gl.depthFunc(gl.NEVER);
            break;

          case THREE.AlwaysDepth:
            gl.depthFunc(gl.ALWAYS);
            break;

          case THREE.LessDepth:
            gl.depthFunc(gl.LESS);
            break;

          case THREE.LessEqualDepth:
            gl.depthFunc(gl.LEQUAL);
            break;

          case THREE.EqualDepth:
            gl.depthFunc(gl.EQUAL);
            break;

          case THREE.GreaterEqualDepth:
            gl.depthFunc(gl.GEQUAL);
            break;

          case THREE.GreaterDepth:
            gl.depthFunc(gl.GREATER);
            break;

          case THREE.NotEqualDepth:
            gl.depthFunc(gl.NOTEQUAL);
            break;

          default:
            gl.depthFunc(gl.LEQUAL);
        }
      } else {
        gl.depthFunc(gl.LEQUAL);
      }

      currentDepthFunc = depthFunc;
    }
  };

  this.setDepthTest = function (depthTest) {
    if (depthTest) {
      this.enable(gl.DEPTH_TEST);
    } else {
      this.disable(gl.DEPTH_TEST);
    }
  };

  this.setDepthWrite = function (depthWrite) {
    // TODO: Rename to setDepthMask
    if (currentDepthWrite !== depthWrite) {
      gl.depthMask(depthWrite);
      currentDepthWrite = depthWrite;
    }
  };

  this.setColorWrite = function (colorWrite) {
    // TODO: Rename to setColorMask
    if (currentColorWrite !== colorWrite) {
      gl.colorMask(colorWrite, colorWrite, colorWrite, colorWrite);
      currentColorWrite = colorWrite;
    }
  };

  this.setStencilFunc = function (stencilFunc, stencilRef, stencilMask) {
    if (currentStencilFunc !== stencilFunc || currentStencilRef !== stencilRef || currentStencilMask !== stencilMask) {
      gl.stencilFunc(stencilFunc, stencilRef, stencilMask);
      currentStencilFunc = stencilFunc;
      currentStencilRef = stencilRef;
      currentStencilMask = stencilMask;
    }
  };

  this.setStencilOp = function (stencilFail, stencilZFail, stencilZPass) {
    if (currentStencilFail !== stencilFail || currentStencilZFail !== stencilZFail || currentStencilZPass !== stencilZPass) {
      gl.stencilOp(stencilFail, stencilZFail, stencilZPass);
      currentStencilFail = stencilFail;
      currentStencilZFail = stencilZFail;
      currentStencilZPass = stencilZPass;
    }
  };

  this.setStencilTest = function (stencilTest) {
    if (stencilTest) {
      this.enable(gl.STENCIL_TEST);
    } else {
      this.disable(gl.STENCIL_TEST);
    }
  };

  this.setStencilWrite = function (stencilWrite) {
    // TODO: Rename to setStencilMask
    if (currentStencilWrite !== stencilWrite) {
      gl.stencilMask(stencilWrite);
      currentStencilWrite = stencilWrite;
    }
  };

  this.setFlipSided = function (flipSided) {
    if (currentFlipSided !== flipSided) {
      if (flipSided) {
        gl.frontFace(gl.CW);
      } else {
        gl.frontFace(gl.CCW);
      }

      currentFlipSided = flipSided;
    }
  };

  this.setLineWidth = function (width) {
    if (width !== currentLineWidth) {
      gl.lineWidth(width);
      currentLineWidth = width;
    }
  };

  this.setPolygonOffset = function (polygonOffset, factor, units) {
    if (polygonOffset) {
      this.enable(gl.POLYGON_OFFSET_FILL);
    } else {
      this.disable(gl.POLYGON_OFFSET_FILL);
    }

    if (polygonOffset && (currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units)) {
      gl.polygonOffset(factor, units);
      currentPolygonOffsetFactor = factor;
      currentPolygonOffsetUnits = units;
    }
  };

  this.getScissorTest = function () {
    return currentScissorTest;
  };

  this.setScissorTest = function (scissorTest) {
    currentScissorTest = scissorTest;

    if (scissorTest) {
      this.enable(gl.SCISSOR_TEST);
    } else {
      this.disable(gl.SCISSOR_TEST);
    }
  }; // texture


  this.activeTexture = function (webglSlot) {
    if (webglSlot === undefined) webglSlot = gl.TEXTURE0 + maxTextures - 1;

    if (currentTextureSlot !== webglSlot) {
      gl.activeTexture(webglSlot);
      currentTextureSlot = webglSlot;
    }
  };

  this.bindTexture = function (webglType, webglTexture) {
    if (currentTextureSlot === undefined) {
      _this.activeTexture();
    }

    var boundTexture = currentBoundTextures[currentTextureSlot];

    if (boundTexture === undefined) {
      boundTexture = {
        type: undefined,
        texture: undefined
      };
      currentBoundTextures[currentTextureSlot] = boundTexture;
    }

    if (boundTexture.type !== webglType || boundTexture.texture !== webglTexture) {
      gl.bindTexture(webglType, webglTexture || emptyTexture);
      boundTexture.type = webglType;
      boundTexture.texture = webglTexture;
    }
  };

  this.compressedTexImage2D = function () {
    try {
      gl.compressedTexImage2D.apply(gl, arguments);
    } catch (error) {}
  };

  this.texImage2D = function () {
    try {
      gl.texImage2D.apply(gl, arguments);
    } catch (error) {}
  }; // clear values


  this.clearColor = function (r, g, b, a) {
    color.set(r, g, b, a);

    if (currentClearColor.equals(color) === false) {
      gl.clearColor(r, g, b, a);
      currentClearColor.copy(color);
    }
  };

  this.clearDepth = function (depth) {
    if (currentClearDepth !== depth) {
      gl.clearDepth(depth);
      currentClearDepth = depth;
    }
  };

  this.clearStencil = function (stencil) {
    if (currentClearStencil !== stencil) {
      gl.clearStencil(stencil);
      currentClearStencil = stencil;
    }
  }; //


  this.scissor = function (scissor) {
    if (currentScissor.equals(scissor) === false) {
      gl.scissor(scissor.x, scissor.y, scissor.z, scissor.w);
      currentScissor.copy(scissor);
    }
  };

  this.viewport = function (viewport) {
    if (currentViewport.equals(viewport) === false) {
      gl.viewport(viewport.x, viewport.y, viewport.z, viewport.w);
      currentViewport.copy(viewport);
    }
  }; //


  this.reset = function () {
    for (var i = 0; i < enabledAttributes.length; i++) {
      if (enabledAttributes[i] === 1) {
        gl.disableVertexAttribArray(i);
        enabledAttributes[i] = 0;
      }
    }

    capabilities = {};
    compressedTextureFormats = null;
    currentTextureSlot = undefined;
    currentBoundTextures = {};
    currentBlending = null;
    currentColorWrite = null;
    currentDepthWrite = null;
    currentStencilWrite = null;
    currentFlipSided = null;
  };
}; // File:src/renderers/webgl/WebGLGeometries.js

/**
* @author mrdoob / http://mrdoob.com/
*/


THREE.WebGLGeometries = function (gl, properties, info) {
  var geometries = {};

  function get(object) {
    var geometry = object.geometry;

    if (geometries[geometry.id] !== undefined) {
      return geometries[geometry.id];
    }

    geometry.addEventListener('dispose', onGeometryDispose);
    var buffergeometry;

    if (geometry instanceof THREE.BufferGeometry) {
      buffergeometry = geometry;
    } else if (geometry instanceof THREE.Geometry) {
      if (geometry._bufferGeometry === undefined) {
        geometry._bufferGeometry = new THREE.BufferGeometry().setFromObject(object);
      }

      buffergeometry = geometry._bufferGeometry;
    }

    geometries[geometry.id] = buffergeometry;
    info.memory.geometries++;
    return buffergeometry;
  }

  function onGeometryDispose(event) {
    var geometry = event.target;
    var buffergeometry = geometries[geometry.id];

    if (buffergeometry.index !== null) {
      deleteAttribute(buffergeometry.index);
    }

    deleteAttributes(buffergeometry.attributes);
    geometry.removeEventListener('dispose', onGeometryDispose);
    delete geometries[geometry.id]; // TODO

    var property = properties.get(geometry);

    if (property.wireframe) {
      deleteAttribute(property.wireframe);
    }

    properties.delete(geometry);
    var bufferproperty = properties.get(buffergeometry);

    if (bufferproperty.wireframe) {
      deleteAttribute(bufferproperty.wireframe);
    }

    properties.delete(buffergeometry); //

    info.memory.geometries--;
  }

  function getAttributeBuffer(attribute) {
    if (attribute instanceof THREE.InterleavedBufferAttribute) {
      return properties.get(attribute.data).__webglBuffer;
    }

    return properties.get(attribute).__webglBuffer;
  }

  function deleteAttribute(attribute) {
    var buffer = getAttributeBuffer(attribute);

    if (buffer !== undefined) {
      gl.deleteBuffer(buffer);
      removeAttributeBuffer(attribute);
    }
  }

  function deleteAttributes(attributes) {
    for (var name in attributes) {
      deleteAttribute(attributes[name]);
    }
  }

  function removeAttributeBuffer(attribute) {
    if (attribute instanceof THREE.InterleavedBufferAttribute) {
      properties.delete(attribute.data);
    } else {
      properties.delete(attribute);
    }
  }

  this.get = get;
}; // File:src/renderers/webgl/WebGLBufferRenderer.js

/**
* @author mrdoob / http://mrdoob.com/
*/


THREE.WebGLBufferRenderer = function (_gl, extensions, _infoRender) {
  var mode;

  function setMode(value) {
    mode = value;
  }

  function render(start, count) {
    _gl.drawArrays(mode, start, count);

    _infoRender.calls++;
    _infoRender.vertices += count;
    if (mode === _gl.TRIANGLES) _infoRender.faces += count / 3;
  }

  function renderInstances(geometry) {
    var extension = extensions.get('ANGLE_instanced_arrays');

    if (extension === null) {
      return;
    }

    var position = geometry.attributes.position;
    var count = 0;

    if (position instanceof THREE.InterleavedBufferAttribute) {
      count = position.data.count;
      extension.drawArraysInstancedANGLE(mode, 0, count, geometry.maxInstancedCount);
    } else {
      count = position.count;
      extension.drawArraysInstancedANGLE(mode, 0, count, geometry.maxInstancedCount);
    }

    _infoRender.calls++;
    _infoRender.vertices += count * geometry.maxInstancedCount;
    if (mode === _gl.TRIANGLES) _infoRender.faces += geometry.maxInstancedCount * count / 3;
  }

  this.setMode = setMode;
  this.render = render;
  this.renderInstances = renderInstances;
}; // File:src/renderers/webgl/WebGLIndexedBufferRenderer.js

/**
* @author mrdoob / http://mrdoob.com/
*/


THREE.WebGLIndexedBufferRenderer = function (_gl, extensions, _infoRender) {
  var mode;

  function setMode(value) {
    mode = value;
  }

  var type, size;

  function setIndex(index) {
    if (index.array instanceof Uint32Array && extensions.get('OES_element_index_uint')) {
      type = _gl.UNSIGNED_INT;
      size = 4;
    } else {
      type = _gl.UNSIGNED_SHORT;
      size = 2;
    }
  }

  function render(start, count) {
    _gl.drawElements(mode, count, type, start * size);

    _infoRender.calls++;
    _infoRender.vertices += count;
    if (mode === _gl.TRIANGLES) _infoRender.faces += count / 3;
  }

  function renderInstances(geometry, start, count) {
    var extension = extensions.get('ANGLE_instanced_arrays');

    if (extension === null) {
      return;
    }

    extension.drawElementsInstancedANGLE(mode, count, type, start * size, geometry.maxInstancedCount);
    _infoRender.calls++;
    _infoRender.vertices += count * geometry.maxInstancedCount;
    if (mode === _gl.TRIANGLES) _infoRender.faces += geometry.maxInstancedCount * count / 3;
  }

  this.setMode = setMode;
  this.setIndex = setIndex;
  this.render = render;
  this.renderInstances = renderInstances;
}; // File:src/renderers/webgl/WebGLShader.js


THREE.WebGLShader = function () {

  return function WebGLShader(gl, type, string) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, string);
    gl.compileShader(shader);

    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false) ;

    if (gl.getShaderInfoLog(shader) !== '') ; // --enable-privileged-webgl-extension
    // console.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );


    return shader;
  };
}(); // File:src/renderers/webgl/WebGLShadowMap.js

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */


THREE.WebGLShadowMap = function (_renderer, _lights, _objects) {
  var _gl = _renderer.context,
      _state = _renderer.state,
      _frustum = new THREE.Frustum(),
      _projScreenMatrix = new THREE.Matrix4(),
      _shadowMapSize = new THREE.Vector2(),
      _lookTarget = new THREE.Vector3(),
      _lightPositionWorld = new THREE.Vector3(),
      _renderList = [],
      _MorphingFlag = 1,
      _SkinningFlag = 2,
      _NumberOfMaterialVariants = (_MorphingFlag | _SkinningFlag) + 1,
      _depthMaterials = new Array(_NumberOfMaterialVariants),
      _distanceMaterials = new Array(_NumberOfMaterialVariants);

  var cubeDirections = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)];
  var cubeUps = [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)];
  var cube2DViewPorts = [new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4()]; // init

  var depthShader = THREE.ShaderLib["depthRGBA"];
  var depthUniforms = THREE.UniformsUtils.clone(depthShader.uniforms);
  var distanceShader = THREE.ShaderLib["distanceRGBA"];
  var distanceUniforms = THREE.UniformsUtils.clone(distanceShader.uniforms);

  for (var i = 0; i !== _NumberOfMaterialVariants; ++i) {
    var useMorphing = (i & _MorphingFlag) !== 0;
    var useSkinning = (i & _SkinningFlag) !== 0;
    var depthMaterial = new THREE.ShaderMaterial({
      uniforms: depthUniforms,
      vertexShader: depthShader.vertexShader,
      fragmentShader: depthShader.fragmentShader,
      morphTargets: useMorphing,
      skinning: useSkinning
    });
    _depthMaterials[i] = depthMaterial;
    var distanceMaterial = new THREE.ShaderMaterial({
      defines: {
        'USE_SHADOWMAP': ''
      },
      uniforms: distanceUniforms,
      vertexShader: distanceShader.vertexShader,
      fragmentShader: distanceShader.fragmentShader,
      morphTargets: useMorphing,
      skinning: useSkinning
    });
    _distanceMaterials[i] = distanceMaterial;
  } //


  var scope = this;
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = THREE.PCFShadowMap;
  this.cullFace = THREE.CullFaceFront;

  this.render = function (scene, camera) {
    var faceCount, isPointLight;
    var shadows = _lights.shadows;
    if (shadows.length === 0) return;
    if (scope.enabled === false) return;
    if (scope.autoUpdate === false && scope.needsUpdate === false) return; // Set GL state for depth map.

    _state.clearColor(1, 1, 1, 1);

    _state.disable(_gl.BLEND);

    _state.enable(_gl.CULL_FACE);

    _gl.frontFace(_gl.CCW);

    _gl.cullFace(scope.cullFace === THREE.CullFaceFront ? _gl.FRONT : _gl.BACK);

    _state.setDepthTest(true);

    _state.setScissorTest(false); // render depth map


    for (var i = 0, il = shadows.length; i < il; i++) {
      var light = shadows[i];
      var shadow = light.shadow;
      var shadowCamera = shadow.camera;

      _shadowMapSize.copy(shadow.mapSize);

      if (light instanceof THREE.PointLight) {
        faceCount = 6;
        isPointLight = true;
        var vpWidth = _shadowMapSize.x;
        var vpHeight = _shadowMapSize.y; // These viewports map a cube-map onto a 2D texture with the
        // following orientation:
        //
        //  xzXZ
        //   y Y
        //
        // X - Positive x direction
        // x - Negative x direction
        // Y - Positive y direction
        // y - Negative y direction
        // Z - Positive z direction
        // z - Negative z direction
        // positive X

        cube2DViewPorts[0].set(vpWidth * 2, vpHeight, vpWidth, vpHeight); // negative X

        cube2DViewPorts[1].set(0, vpHeight, vpWidth, vpHeight); // positive Z

        cube2DViewPorts[2].set(vpWidth * 3, vpHeight, vpWidth, vpHeight); // negative Z

        cube2DViewPorts[3].set(vpWidth, vpHeight, vpWidth, vpHeight); // positive Y

        cube2DViewPorts[4].set(vpWidth * 3, 0, vpWidth, vpHeight); // negative Y

        cube2DViewPorts[5].set(vpWidth, 0, vpWidth, vpHeight);
        _shadowMapSize.x *= 4.0;
        _shadowMapSize.y *= 2.0;
      } else {
        faceCount = 1;
        isPointLight = false;
      }

      if (shadow.map === null) {
        var pars = {
          minFilter: THREE.NearestFilter,
          magFilter: THREE.NearestFilter,
          format: THREE.RGBAFormat
        };
        shadow.map = new THREE.WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y, pars); //

        if (light instanceof THREE.SpotLight) {
          shadowCamera.aspect = _shadowMapSize.x / _shadowMapSize.y;
        }

        shadowCamera.updateProjectionMatrix();
      }

      var shadowMap = shadow.map;
      var shadowMatrix = shadow.matrix;

      _lightPositionWorld.setFromMatrixPosition(light.matrixWorld);

      shadowCamera.position.copy(_lightPositionWorld);

      _renderer.setRenderTarget(shadowMap);

      _renderer.clear(); // render shadow map for each cube face (if omni-directional) or
      // run a single pass if not


      for (var face = 0; face < faceCount; face++) {
        if (isPointLight) {
          _lookTarget.copy(shadowCamera.position);

          _lookTarget.add(cubeDirections[face]);

          shadowCamera.up.copy(cubeUps[face]);
          shadowCamera.lookAt(_lookTarget);
          var vpDimensions = cube2DViewPorts[face];

          _state.viewport(vpDimensions);
        } else {
          _lookTarget.setFromMatrixPosition(light.target.matrixWorld);

          shadowCamera.lookAt(_lookTarget);
        }

        shadowCamera.updateMatrixWorld();
        shadowCamera.matrixWorldInverse.getInverse(shadowCamera.matrixWorld); // compute shadow matrix

        shadowMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
        shadowMatrix.multiply(shadowCamera.projectionMatrix);
        shadowMatrix.multiply(shadowCamera.matrixWorldInverse); // update camera matrices and frustum

        _projScreenMatrix.multiplyMatrices(shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse);

        _frustum.setFromMatrix(_projScreenMatrix); // set object matrices & frustum culling


        _renderList.length = 0;
        projectObject(scene, camera, shadowCamera); // render shadow map
        // render regular objects

        for (var j = 0, jl = _renderList.length; j < jl; j++) {
          var object = _renderList[j];

          var geometry = _objects.update(object);

          var material = object.material;

          if (material instanceof THREE.MultiMaterial) {
            var groups = geometry.groups;
            var materials = material.materials;

            for (var k = 0, kl = groups.length; k < kl; k++) {
              var group = groups[k];
              var groupMaterial = materials[group.materialIndex];

              if (groupMaterial.visible === true) {
                var depthMaterial = getDepthMaterial(object, groupMaterial, isPointLight, _lightPositionWorld);

                _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, group);
              }
            }
          } else {
            var depthMaterial = getDepthMaterial(object, material, isPointLight, _lightPositionWorld);

            _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, null);
          }
        }
      }
    } // Restore GL state.


    var clearColor = _renderer.getClearColor(),
        clearAlpha = _renderer.getClearAlpha();

    _renderer.setClearColor(clearColor, clearAlpha);

    _state.enable(_gl.BLEND);

    if (scope.cullFace === THREE.CullFaceFront) {
      _gl.cullFace(_gl.BACK);
    }

    scope.needsUpdate = false;
  };

  function getDepthMaterial(object, material, isPointLight, lightPositionWorld) {
    var geometry = object.geometry;
    var newMaterial = null;
    var materialVariants = _depthMaterials;
    var customMaterial = object.customDepthMaterial;

    if (isPointLight) {
      materialVariants = _distanceMaterials;
      customMaterial = object.customDistanceMaterial;
    }

    if (!customMaterial) {
      var useMorphing = geometry.morphTargets !== undefined && geometry.morphTargets.length > 0 && material.morphTargets;
      var useSkinning = object instanceof THREE.SkinnedMesh && material.skinning;
      var variantIndex = 0;
      if (useMorphing) variantIndex |= _MorphingFlag;
      if (useSkinning) variantIndex |= _SkinningFlag;
      newMaterial = materialVariants[variantIndex];
    } else {
      newMaterial = customMaterial;
    }

    newMaterial.visible = material.visible;
    newMaterial.wireframe = material.wireframe;
    newMaterial.wireframeLinewidth = material.wireframeLinewidth;

    if (isPointLight && newMaterial.uniforms.lightPos !== undefined) {
      newMaterial.uniforms.lightPos.value.copy(lightPositionWorld);
    }

    return newMaterial;
  }

  function projectObject(object, camera, shadowCamera) {
    if (object.visible === false) return;

    if (object.layers.test(camera.layers) && (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points)) {
      if (object.castShadow && (object.frustumCulled === false || _frustum.intersectsObject(object) === true)) {
        var material = object.material;

        if (material.visible === true) {
          object.modelViewMatrix.multiplyMatrices(shadowCamera.matrixWorldInverse, object.matrixWorld);

          _renderList.push(object);
        }
      }
    }

    var children = object.children;

    for (var i = 0, l = children.length; i < l; i++) {
      projectObject(children[i], camera, shadowCamera);
    }
  }
}; // File:src/renderers/webgl/plugins/SpritePlugin.js

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */


THREE.SpritePlugin = function (renderer, sprites) {
  var gl = renderer.context;
  var state = renderer.state;
  var vertexBuffer, elementBuffer;
  var program, attributes, uniforms;
  var texture; // decompose matrixWorld

  var spritePosition = new THREE.Vector3();
  var spriteRotation = new THREE.Quaternion();
  var spriteScale = new THREE.Vector3();

  function init() {
    var vertices = new Float32Array([-0.5, -0.5, 0, 0, 0.5, -0.5, 1, 0, 0.5, 0.5, 1, 1, -0.5, 0.5, 0, 1]);
    var faces = new Uint16Array([0, 1, 2, 0, 2, 3]);
    vertexBuffer = gl.createBuffer();
    elementBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW);
    program = createProgram();
    attributes = {
      position: gl.getAttribLocation(program, 'position'),
      uv: gl.getAttribLocation(program, 'uv')
    };
    uniforms = {
      uvOffset: gl.getUniformLocation(program, 'uvOffset'),
      uvScale: gl.getUniformLocation(program, 'uvScale'),
      rotation: gl.getUniformLocation(program, 'rotation'),
      scale: gl.getUniformLocation(program, 'scale'),
      color: gl.getUniformLocation(program, 'color'),
      map: gl.getUniformLocation(program, 'map'),
      opacity: gl.getUniformLocation(program, 'opacity'),
      modelViewMatrix: gl.getUniformLocation(program, 'modelViewMatrix'),
      projectionMatrix: gl.getUniformLocation(program, 'projectionMatrix'),
      fogType: gl.getUniformLocation(program, 'fogType'),
      fogDensity: gl.getUniformLocation(program, 'fogDensity'),
      fogNear: gl.getUniformLocation(program, 'fogNear'),
      fogFar: gl.getUniformLocation(program, 'fogFar'),
      fogColor: gl.getUniformLocation(program, 'fogColor'),
      alphaTest: gl.getUniformLocation(program, 'alphaTest')
    };
    var canvas = document.createElement('canvas');
    canvas.width = 8;
    canvas.height = 8;
    var context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, 8, 8);
    texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
  }

  this.render = function (scene, camera) {
    if (sprites.length === 0) return; // setup gl

    if (program === undefined) {
      init();
    }

    gl.useProgram(program);
    state.initAttributes();
    state.enableAttribute(attributes.position);
    state.enableAttribute(attributes.uv);
    state.disableUnusedAttributes();
    state.disable(gl.CULL_FACE);
    state.enable(gl.BLEND);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(attributes.position, 2, gl.FLOAT, false, 2 * 8, 0);
    gl.vertexAttribPointer(attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
    gl.uniformMatrix4fv(uniforms.projectionMatrix, false, camera.projectionMatrix.elements);
    state.activeTexture(gl.TEXTURE0);
    gl.uniform1i(uniforms.map, 0);
    var oldFogType = 0;
    var sceneFogType = 0;
    var fog = scene.fog;

    if (fog) {
      gl.uniform3f(uniforms.fogColor, fog.color.r, fog.color.g, fog.color.b);

      if (fog instanceof THREE.Fog) {
        gl.uniform1f(uniforms.fogNear, fog.near);
        gl.uniform1f(uniforms.fogFar, fog.far);
        gl.uniform1i(uniforms.fogType, 1);
        oldFogType = 1;
        sceneFogType = 1;
      } else if (fog instanceof THREE.FogExp2) {
        gl.uniform1f(uniforms.fogDensity, fog.density);
        gl.uniform1i(uniforms.fogType, 2);
        oldFogType = 2;
        sceneFogType = 2;
      }
    } else {
      gl.uniform1i(uniforms.fogType, 0);
      oldFogType = 0;
      sceneFogType = 0;
    } // update positions and sort


    for (var i = 0, l = sprites.length; i < l; i++) {
      var sprite = sprites[i];
      sprite.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, sprite.matrixWorld);
      sprite.z = -sprite.modelViewMatrix.elements[14];
    }

    sprites.sort(painterSortStable); // render all sprites

    var scale = [];

    for (var i = 0, l = sprites.length; i < l; i++) {
      var sprite = sprites[i];
      var material = sprite.material;
      gl.uniform1f(uniforms.alphaTest, material.alphaTest);
      gl.uniformMatrix4fv(uniforms.modelViewMatrix, false, sprite.modelViewMatrix.elements);
      sprite.matrixWorld.decompose(spritePosition, spriteRotation, spriteScale);
      scale[0] = spriteScale.x;
      scale[1] = spriteScale.y;
      var fogType = 0;

      if (scene.fog && material.fog) {
        fogType = sceneFogType;
      }

      if (oldFogType !== fogType) {
        gl.uniform1i(uniforms.fogType, fogType);
        oldFogType = fogType;
      }

      if (material.map !== null) {
        gl.uniform2f(uniforms.uvOffset, material.map.offset.x, material.map.offset.y);
        gl.uniform2f(uniforms.uvScale, material.map.repeat.x, material.map.repeat.y);
      } else {
        gl.uniform2f(uniforms.uvOffset, 0, 0);
        gl.uniform2f(uniforms.uvScale, 1, 1);
      }

      gl.uniform1f(uniforms.opacity, material.opacity);
      gl.uniform3f(uniforms.color, material.color.r, material.color.g, material.color.b);
      gl.uniform1f(uniforms.rotation, material.rotation);
      gl.uniform2fv(uniforms.scale, scale);
      state.setBlending(material.blending, material.blendEquation, material.blendSrc, material.blendDst);
      state.setDepthTest(material.depthTest);
      state.setDepthWrite(material.depthWrite);

      if (material.map && material.map.image && material.map.image.width) {
        renderer.setTexture(material.map, 0);
      } else {
        renderer.setTexture(texture, 0);
      }

      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    } // restore gl


    state.enable(gl.CULL_FACE);
    renderer.resetGLState();
  };

  function createProgram() {
    var program = gl.createProgram();
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertexShader, ['precision ' + renderer.getPrecision() + ' float;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform float rotation;', 'uniform vec2 scale;', 'uniform vec2 uvOffset;', 'uniform vec2 uvScale;', 'attribute vec2 position;', 'attribute vec2 uv;', 'varying vec2 vUV;', 'void main() {', 'vUV = uvOffset + uv * uvScale;', 'vec2 alignedPosition = position * scale;', 'vec2 rotatedPosition;', 'rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;', 'rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;', 'vec4 finalPosition;', 'finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );', 'finalPosition.xy += rotatedPosition;', 'finalPosition = projectionMatrix * finalPosition;', 'gl_Position = finalPosition;', '}'].join('\n'));
    gl.shaderSource(fragmentShader, ['precision ' + renderer.getPrecision() + ' float;', 'uniform vec3 color;', 'uniform sampler2D map;', 'uniform float opacity;', 'uniform int fogType;', 'uniform vec3 fogColor;', 'uniform float fogDensity;', 'uniform float fogNear;', 'uniform float fogFar;', 'uniform float alphaTest;', 'varying vec2 vUV;', 'void main() {', 'vec4 texture = texture2D( map, vUV );', 'if ( texture.a < alphaTest ) discard;', 'gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );', 'if ( fogType > 0 ) {', 'float depth = gl_FragCoord.z / gl_FragCoord.w;', 'float fogFactor = 0.0;', 'if ( fogType == 1 ) {', 'fogFactor = smoothstep( fogNear, fogFar, depth );', '} else {', 'const float LOG2 = 1.442695;', 'fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );', 'fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );', '}', 'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );', '}', '}'].join('\n'));
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    return program;
  }

  function painterSortStable(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.z !== b.z) {
      return b.z - a.z;
    } else {
      return b.id - a.id;
    }
  }
}; // File:src/renderers/webgl/plugins/LensFlarePlugin.js

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */


THREE.LensFlarePlugin = function (renderer, flares) {
  var gl = renderer.context;
  var state = renderer.state;
  var vertexBuffer, elementBuffer;
  var program, attributes, uniforms;
  var hasVertexTexture;
  var tempTexture, occlusionTexture;

  function init() {
    var vertices = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]);
    var faces = new Uint16Array([0, 1, 2, 0, 2, 3]); // buffers

    vertexBuffer = gl.createBuffer();
    elementBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW); // textures

    tempTexture = gl.createTexture();
    occlusionTexture = gl.createTexture();
    state.bindTexture(gl.TEXTURE_2D, tempTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 16, 16, 0, gl.RGB, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    state.bindTexture(gl.TEXTURE_2D, occlusionTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 16, 16, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    hasVertexTexture = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
    var shader;

    if (hasVertexTexture) {
      shader = {
        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", // pink square
        "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", // restore
        "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", // flare
        "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
      };
    } else {
      shader = {
        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
        fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", // pink square
        "if ( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", // restore
        "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", // flare
        "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
      };
    }

    program = createProgram(shader);
    attributes = {
      vertex: gl.getAttribLocation(program, "position"),
      uv: gl.getAttribLocation(program, "uv")
    };
    uniforms = {
      renderType: gl.getUniformLocation(program, "renderType"),
      map: gl.getUniformLocation(program, "map"),
      occlusionMap: gl.getUniformLocation(program, "occlusionMap"),
      opacity: gl.getUniformLocation(program, "opacity"),
      color: gl.getUniformLocation(program, "color"),
      scale: gl.getUniformLocation(program, "scale"),
      rotation: gl.getUniformLocation(program, "rotation"),
      screenPosition: gl.getUniformLocation(program, "screenPosition")
    };
  }
  /*
   * Render lens flares
   * Method: renders 16x16 0xff00ff-colored points scattered over the light source area,
   *         reads these back and calculates occlusion.
   */


  this.render = function (scene, camera, viewport) {
    if (flares.length === 0) return;
    var tempPosition = new THREE.Vector3();
    var invAspect = viewport.w / viewport.z,
        halfViewportWidth = viewport.z * 0.5,
        halfViewportHeight = viewport.w * 0.5;
    var size = 16 / viewport.w,
        scale = new THREE.Vector2(size * invAspect, size);
    var screenPosition = new THREE.Vector3(1, 1, 0),
        screenPositionPixels = new THREE.Vector2(1, 1);

    if (program === undefined) {
      init();
    }

    gl.useProgram(program);
    state.initAttributes();
    state.enableAttribute(attributes.vertex);
    state.enableAttribute(attributes.uv);
    state.disableUnusedAttributes(); // loop through all lens flares to update their occlusion and positions
    // setup gl and common used attribs/uniforms

    gl.uniform1i(uniforms.occlusionMap, 0);
    gl.uniform1i(uniforms.map, 1);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(attributes.vertex, 2, gl.FLOAT, false, 2 * 8, 0);
    gl.vertexAttribPointer(attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
    state.disable(gl.CULL_FACE);
    state.setDepthWrite(false);

    for (var i = 0, l = flares.length; i < l; i++) {
      size = 16 / viewport.w;
      scale.set(size * invAspect, size); // calc object screen position

      var flare = flares[i];
      tempPosition.set(flare.matrixWorld.elements[12], flare.matrixWorld.elements[13], flare.matrixWorld.elements[14]);
      tempPosition.applyMatrix4(camera.matrixWorldInverse);
      tempPosition.applyProjection(camera.projectionMatrix); // setup arrays for gl programs

      screenPosition.copy(tempPosition);
      screenPositionPixels.x = screenPosition.x * halfViewportWidth + halfViewportWidth;
      screenPositionPixels.y = screenPosition.y * halfViewportHeight + halfViewportHeight; // screen cull

      if (hasVertexTexture || screenPositionPixels.x > 0 && screenPositionPixels.x < viewport.z && screenPositionPixels.y > 0 && screenPositionPixels.y < viewport.w) {
        // save current RGB to temp texture
        state.activeTexture(gl.TEXTURE0);
        state.bindTexture(gl.TEXTURE_2D, null);
        state.activeTexture(gl.TEXTURE1);
        state.bindTexture(gl.TEXTURE_2D, tempTexture);
        gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGB, viewport.x + screenPositionPixels.x - 8, viewport.y + screenPositionPixels.y - 8, 16, 16, 0); // render pink quad

        gl.uniform1i(uniforms.renderType, 0);
        gl.uniform2f(uniforms.scale, scale.x, scale.y);
        gl.uniform3f(uniforms.screenPosition, screenPosition.x, screenPosition.y, screenPosition.z);
        state.disable(gl.BLEND);
        state.enable(gl.DEPTH_TEST);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0); // copy result to occlusionMap

        state.activeTexture(gl.TEXTURE0);
        state.bindTexture(gl.TEXTURE_2D, occlusionTexture);
        gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, viewport.x + screenPositionPixels.x - 8, viewport.y + screenPositionPixels.y - 8, 16, 16, 0); // restore graphics

        gl.uniform1i(uniforms.renderType, 1);
        state.disable(gl.DEPTH_TEST);
        state.activeTexture(gl.TEXTURE1);
        state.bindTexture(gl.TEXTURE_2D, tempTexture);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0); // update object positions

        flare.positionScreen.copy(screenPosition);

        if (flare.customUpdateCallback) {
          flare.customUpdateCallback(flare);
        } else {
          flare.updateLensFlares();
        } // render flares


        gl.uniform1i(uniforms.renderType, 2);
        state.enable(gl.BLEND);

        for (var j = 0, jl = flare.lensFlares.length; j < jl; j++) {
          var sprite = flare.lensFlares[j];

          if (sprite.opacity > 0.001 && sprite.scale > 0.001) {
            screenPosition.x = sprite.x;
            screenPosition.y = sprite.y;
            screenPosition.z = sprite.z;
            size = sprite.size * sprite.scale / viewport.w;
            scale.x = size * invAspect;
            scale.y = size;
            gl.uniform3f(uniforms.screenPosition, screenPosition.x, screenPosition.y, screenPosition.z);
            gl.uniform2f(uniforms.scale, scale.x, scale.y);
            gl.uniform1f(uniforms.rotation, sprite.rotation);
            gl.uniform1f(uniforms.opacity, sprite.opacity);
            gl.uniform3f(uniforms.color, sprite.color.r, sprite.color.g, sprite.color.b);
            state.setBlending(sprite.blending, sprite.blendEquation, sprite.blendSrc, sprite.blendDst);
            renderer.setTexture(sprite.texture, 1);
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
          }
        }
      }
    } // restore gl


    state.enable(gl.CULL_FACE);
    state.enable(gl.DEPTH_TEST);
    state.setDepthWrite(true);
    renderer.resetGLState();
  };

  function createProgram(shader) {
    var program = gl.createProgram();
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var prefix = "precision " + renderer.getPrecision() + " float;\n";
    gl.shaderSource(fragmentShader, prefix + shader.fragmentShader);
    gl.shaderSource(vertexShader, prefix + shader.vertexShader);
    gl.compileShader(fragmentShader);
    gl.compileShader(vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.attachShader(program, vertexShader);
    gl.linkProgram(program);
    return program;
  }
}; // File:src/renderers/webgl/WebGLObjects.js

/**
* @author mrdoob / http://mrdoob.com/
*/


THREE.WebGLObjects = function (gl, properties, info) {
  var geometries = new THREE.WebGLGeometries(gl, properties, info); //

  function update(object) {
    // TODO: Avoid updating twice (when using shadowMap). Maybe add frame counter.
    var geometry = geometries.get(object);

    if (object.geometry instanceof THREE.Geometry) {
      geometry.updateFromObject(object);
    }

    var index = geometry.index;
    var attributes = geometry.attributes;

    if (index !== null) {
      updateAttribute(index, gl.ELEMENT_ARRAY_BUFFER);
    }

    for (var name in attributes) {
      updateAttribute(attributes[name], gl.ARRAY_BUFFER);
    } // morph targets


    var morphAttributes = geometry.morphAttributes;

    for (var name in morphAttributes) {
      var array = morphAttributes[name];

      for (var i = 0, l = array.length; i < l; i++) {
        updateAttribute(array[i], gl.ARRAY_BUFFER);
      }
    }

    return geometry;
  }

  function updateAttribute(attribute, bufferType) {
    var data = attribute instanceof THREE.InterleavedBufferAttribute ? attribute.data : attribute;
    var attributeProperties = properties.get(data);

    if (attributeProperties.__webglBuffer === undefined) {
      createBuffer(attributeProperties, data, bufferType);
    } else if (attributeProperties.version !== data.version) {
      updateBuffer(attributeProperties, data, bufferType);
    }
  }

  function createBuffer(attributeProperties, data, bufferType) {
    attributeProperties.__webglBuffer = gl.createBuffer();
    gl.bindBuffer(bufferType, attributeProperties.__webglBuffer);
    var usage = data.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
    gl.bufferData(bufferType, data.array, usage);
    attributeProperties.version = data.version;
  }

  function updateBuffer(attributeProperties, data, bufferType) {
    gl.bindBuffer(bufferType, attributeProperties.__webglBuffer);

    if (data.dynamic === false || data.updateRange.count === -1) {
      // Not using update ranges
      gl.bufferSubData(bufferType, 0, data.array);
    } else if (data.updateRange.count === 0) ; else {
      gl.bufferSubData(bufferType, data.updateRange.offset * data.array.BYTES_PER_ELEMENT, data.array.subarray(data.updateRange.offset, data.updateRange.offset + data.updateRange.count));
      data.updateRange.count = 0; // reset range
    }

    attributeProperties.version = data.version;
  }

  function getAttributeBuffer(attribute) {
    if (attribute instanceof THREE.InterleavedBufferAttribute) {
      return properties.get(attribute.data).__webglBuffer;
    }

    return properties.get(attribute).__webglBuffer;
  }

  function getWireframeAttribute(geometry) {
    var property = properties.get(geometry);

    if (property.wireframe !== undefined) {
      return property.wireframe;
    }

    var indices = [];
    var index = geometry.index;
    var attributes = geometry.attributes;
    var position = attributes.position; // console.time( 'wireframe' );

    if (index !== null) {
      var edges = {};
      var array = index.array;

      for (var i = 0, l = array.length; i < l; i += 3) {
        var a = array[i + 0];
        var b = array[i + 1];
        var c = array[i + 2];
        if (checkEdge(edges, a, b)) indices.push(a, b);
        if (checkEdge(edges, b, c)) indices.push(b, c);
        if (checkEdge(edges, c, a)) indices.push(c, a);
      }
    } else {
      var array = attributes.position.array;

      for (var i = 0, l = array.length / 3 - 1; i < l; i += 3) {
        var a = i + 0;
        var b = i + 1;
        var c = i + 2;
        indices.push(a, b, b, c, c, a);
      }
    } // console.timeEnd( 'wireframe' );


    var TypeArray = position.count > 65535 ? Uint32Array : Uint16Array;
    var attribute = new THREE.BufferAttribute(new TypeArray(indices), 1);
    updateAttribute(attribute, gl.ELEMENT_ARRAY_BUFFER);
    property.wireframe = attribute;
    return attribute;
  }

  function checkEdge(edges, a, b) {
    if (a > b) {
      var tmp = a;
      a = b;
      b = tmp;
    }

    var list = edges[a];

    if (list === undefined) {
      edges[a] = [b];
      return true;
    } else if (list.indexOf(b) === -1) {
      list.push(b);
      return true;
    }

    return false;
  }

  this.getAttributeBuffer = getAttributeBuffer;
  this.getWireframeAttribute = getWireframeAttribute;
  this.update = update;
}; // File:src/renderers/webgl/WebGLProgram.js


THREE.WebGLProgram = function () {
  var programIdCount = 0; // TODO: Combine the regex

  var structRe = /^([\w\d_]+)\.([\w\d_]+)$/;
  var arrayStructRe = /^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/;
  var arrayRe = /^([\w\d_]+)\[0\]$/;

  function getEncodingComponents(encoding) {
    switch (encoding) {
      case THREE.LinearEncoding:
        return ['Linear', '( value )'];

      case THREE.sRGBEncoding:
        return ['sRGB', '( value )'];

      case THREE.RGBEEncoding:
        return ['RGBE', '( value )'];

      case THREE.RGBM7Encoding:
        return ['RGBM', '( value, 7.0 )'];

      case THREE.RGBM16Encoding:
        return ['RGBM', '( value, 16.0 )'];

      case THREE.RGBDEncoding:
        return ['RGBD', '( value, 256.0 )'];

      case THREE.GammaEncoding:
        return ['Gamma', '( value, float( GAMMA_FACTOR ) )'];

      default:
        throw new Error('unsupported encoding: ' + encoding);
    }
  }

  function getTexelDecodingFunction(functionName, encoding) {
    var components = getEncodingComponents(encoding);
    return "vec4 " + functionName + "( vec4 value ) { return " + components[0] + "ToLinear" + components[1] + "; }";
  }

  function getTexelEncodingFunction(functionName, encoding) {
    var components = getEncodingComponents(encoding);
    return "vec4 " + functionName + "( vec4 value ) { return LinearTo" + components[0] + components[1] + "; }";
  }

  function getToneMappingFunction(functionName, toneMapping) {
    var toneMappingName;

    switch (toneMapping) {
      case THREE.LinearToneMapping:
        toneMappingName = "Linear";
        break;

      case THREE.ReinhardToneMapping:
        toneMappingName = "Reinhard";
        break;

      case THREE.Uncharted2ToneMapping:
        toneMappingName = "Uncharted2";
        break;

      case THREE.CineonToneMapping:
        toneMappingName = "OptimizedCineon";
        break;

      default:
        throw new Error('unsupported toneMapping: ' + toneMapping);
    }

    return "vec3 " + functionName + "( vec3 color ) { return " + toneMappingName + "ToneMapping( color ); }";
  }

  function generateExtensions(extensions, parameters, rendererExtensions) {
    extensions = extensions || {};
    var chunks = [extensions.derivatives || parameters.envMapCubeUV || parameters.bumpMap || parameters.normalMap || parameters.flatShading ? '#extension GL_OES_standard_derivatives : enable' : '', (extensions.fragDepth || parameters.logarithmicDepthBuffer) && rendererExtensions.get('EXT_frag_depth') ? '#extension GL_EXT_frag_depth : enable' : '', extensions.drawBuffers && rendererExtensions.get('WEBGL_draw_buffers') ? '#extension GL_EXT_draw_buffers : require' : '', (extensions.shaderTextureLOD || parameters.envMap) && rendererExtensions.get('EXT_shader_texture_lod') ? '#extension GL_EXT_shader_texture_lod : enable' : ''];
    return chunks.filter(filterEmptyLine).join('\n');
  }

  function generateDefines(defines) {
    var chunks = [];

    for (var name in defines) {
      var value = defines[name];
      if (value === false) continue;
      chunks.push('#define ' + name + ' ' + value);
    }

    return chunks.join('\n');
  }

  function fetchUniformLocations(gl, program, identifiers) {
    var uniforms = {};
    var n = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < n; i++) {
      var info = gl.getActiveUniform(program, i);
      var name = info.name;
      var location = gl.getUniformLocation(program, name); //console.log("THREE.WebGLProgram: ACTIVE UNIFORM:", name);

      var matches = structRe.exec(name);

      if (matches) {
        var structName = matches[1];
        var structProperty = matches[2];
        var uniformsStruct = uniforms[structName];

        if (!uniformsStruct) {
          uniformsStruct = uniforms[structName] = {};
        }

        uniformsStruct[structProperty] = location;
        continue;
      }

      matches = arrayStructRe.exec(name);

      if (matches) {
        var arrayName = matches[1];
        var arrayIndex = matches[2];
        var arrayProperty = matches[3];
        var uniformsArray = uniforms[arrayName];

        if (!uniformsArray) {
          uniformsArray = uniforms[arrayName] = [];
        }

        var uniformsArrayIndex = uniformsArray[arrayIndex];

        if (!uniformsArrayIndex) {
          uniformsArrayIndex = uniformsArray[arrayIndex] = {};
        }

        uniformsArrayIndex[arrayProperty] = location;
        continue;
      }

      matches = arrayRe.exec(name);

      if (matches) {
        var arrayName = matches[1];
        uniforms[arrayName] = location;
        continue;
      }

      uniforms[name] = location;
    }

    return uniforms;
  }

  function fetchAttributeLocations(gl, program, identifiers) {
    var attributes = {};
    var n = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < n; i++) {
      var info = gl.getActiveAttrib(program, i);
      var name = info.name; // console.log("THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:", name, i );

      attributes[name] = gl.getAttribLocation(program, name);
    }

    return attributes;
  }

  function filterEmptyLine(string) {
    return string !== '';
  }

  function replaceLightNums(string, parameters) {
    return string.replace(/NUM_DIR_LIGHTS/g, parameters.numDirLights).replace(/NUM_SPOT_LIGHTS/g, parameters.numSpotLights).replace(/NUM_POINT_LIGHTS/g, parameters.numPointLights).replace(/NUM_HEMI_LIGHTS/g, parameters.numHemiLights);
  }

  function parseIncludes(string) {
    var pattern = /#include +<([\w\d.]+)>/g;

    function replace(match, include) {
      var replace = THREE.ShaderChunk[include];

      if (replace === undefined) {
        throw new Error('Can not resolve #include <' + include + '>');
      }

      return parseIncludes(replace);
    }

    return string.replace(pattern, replace);
  }

  function unrollLoops(string) {
    var pattern = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;

    function replace(match, start, end, snippet) {
      var unroll = '';

      for (var i = parseInt(start); i < parseInt(end); i++) {
        unroll += snippet.replace(/\[ i \]/g, '[ ' + i + ' ]');
      }

      return unroll;
    }

    return string.replace(pattern, replace);
  }

  return function WebGLProgram(renderer, code, material, parameters) {
    var gl = renderer.context;
    var extensions = material.extensions;
    var defines = material.defines;
    var vertexShader = material.__webglShader.vertexShader;
    var fragmentShader = material.__webglShader.fragmentShader;
    var shadowMapTypeDefine = 'SHADOWMAP_TYPE_BASIC';

    if (parameters.shadowMapType === THREE.PCFShadowMap) {
      shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF';
    } else if (parameters.shadowMapType === THREE.PCFSoftShadowMap) {
      shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF_SOFT';
    }

    var envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
    var envMapModeDefine = 'ENVMAP_MODE_REFLECTION';
    var envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';

    if (parameters.envMap) {
      switch (material.envMap.mapping) {
        case THREE.CubeReflectionMapping:
        case THREE.CubeRefractionMapping:
          envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
          break;

        case THREE.CubeUVReflectionMapping:
        case THREE.CubeUVRefractionMapping:
          envMapTypeDefine = 'ENVMAP_TYPE_CUBE_UV';
          break;

        case THREE.EquirectangularReflectionMapping:
        case THREE.EquirectangularRefractionMapping:
          envMapTypeDefine = 'ENVMAP_TYPE_EQUIREC';
          break;

        case THREE.SphericalReflectionMapping:
          envMapTypeDefine = 'ENVMAP_TYPE_SPHERE';
          break;
      }

      switch (material.envMap.mapping) {
        case THREE.CubeRefractionMapping:
        case THREE.EquirectangularRefractionMapping:
          envMapModeDefine = 'ENVMAP_MODE_REFRACTION';
          break;
      }

      switch (material.combine) {
        case THREE.MultiplyOperation:
          envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';
          break;

        case THREE.MixOperation:
          envMapBlendingDefine = 'ENVMAP_BLENDING_MIX';
          break;

        case THREE.AddOperation:
          envMapBlendingDefine = 'ENVMAP_BLENDING_ADD';
          break;
      }
    }

    var gammaFactorDefine = renderer.gammaFactor > 0 ? renderer.gammaFactor : 1.0; // console.log( 'building new program ' );
    //

    var customExtensions = generateExtensions(extensions, parameters, renderer.extensions);
    var customDefines = generateDefines(defines); //

    var program = gl.createProgram();
    var prefixVertex, prefixFragment;

    if (material instanceof THREE.RawShaderMaterial) {
      prefixVertex = '';
      prefixFragment = '';
    } else {
      prefixVertex = ['precision ' + parameters.precision + ' float;', 'precision ' + parameters.precision + ' int;', '#define SHADER_NAME ' + material.__webglShader.name, customDefines, parameters.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '', '#define GAMMA_FACTOR ' + gammaFactorDefine, '#define MAX_BONES ' + parameters.maxBones, parameters.map ? '#define USE_MAP' : '', parameters.envMap ? '#define USE_ENVMAP' : '', parameters.envMap ? '#define ' + envMapModeDefine : '', parameters.lightMap ? '#define USE_LIGHTMAP' : '', parameters.aoMap ? '#define USE_AOMAP' : '', parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '', parameters.bumpMap ? '#define USE_BUMPMAP' : '', parameters.normalMap ? '#define USE_NORMALMAP' : '', parameters.displacementMap && parameters.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '', parameters.specularMap ? '#define USE_SPECULARMAP' : '', parameters.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', parameters.metalnessMap ? '#define USE_METALNESSMAP' : '', parameters.alphaMap ? '#define USE_ALPHAMAP' : '', parameters.vertexColors ? '#define USE_COLOR' : '', parameters.flatShading ? '#define FLAT_SHADED' : '', parameters.skinning ? '#define USE_SKINNING' : '', parameters.useVertexTexture ? '#define BONE_TEXTURE' : '', parameters.morphTargets ? '#define USE_MORPHTARGETS' : '', parameters.morphNormals && parameters.flatShading === false ? '#define USE_MORPHNORMALS' : '', parameters.doubleSided ? '#define DOUBLE_SIDED' : '', parameters.flipSided ? '#define FLIP_SIDED' : '', parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '', parameters.pointLightShadows > 0 ? '#define POINT_LIGHT_SHADOWS' : '', parameters.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '', parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', parameters.logarithmicDepthBuffer && renderer.extensions.get('EXT_frag_depth') ? '#define USE_LOGDEPTHBUF_EXT' : '', 'uniform mat4 modelMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform mat4 viewMatrix;', 'uniform mat3 normalMatrix;', 'uniform vec3 cameraPosition;', 'attribute vec3 position;', 'attribute vec3 normal;', 'attribute vec2 uv;', '#ifdef USE_COLOR', '	attribute vec3 color;', '#endif', '#ifdef USE_MORPHTARGETS', '	attribute vec3 morphTarget0;', '	attribute vec3 morphTarget1;', '	attribute vec3 morphTarget2;', '	attribute vec3 morphTarget3;', '	#ifdef USE_MORPHNORMALS', '		attribute vec3 morphNormal0;', '		attribute vec3 morphNormal1;', '		attribute vec3 morphNormal2;', '		attribute vec3 morphNormal3;', '	#else', '		attribute vec3 morphTarget4;', '		attribute vec3 morphTarget5;', '		attribute vec3 morphTarget6;', '		attribute vec3 morphTarget7;', '	#endif', '#endif', '#ifdef USE_SKINNING', '	attribute vec4 skinIndex;', '	attribute vec4 skinWeight;', '#endif', '\n'].filter(filterEmptyLine).join('\n');
      prefixFragment = [customExtensions, 'precision ' + parameters.precision + ' float;', 'precision ' + parameters.precision + ' int;', '#define SHADER_NAME ' + material.__webglShader.name, customDefines, parameters.alphaTest ? '#define ALPHATEST ' + parameters.alphaTest : '', '#define GAMMA_FACTOR ' + gammaFactorDefine, parameters.useFog && parameters.fog ? '#define USE_FOG' : '', parameters.useFog && parameters.fogExp ? '#define FOG_EXP2' : '', parameters.map ? '#define USE_MAP' : '', parameters.envMap ? '#define USE_ENVMAP' : '', parameters.envMap ? '#define ' + envMapTypeDefine : '', parameters.envMap ? '#define ' + envMapModeDefine : '', parameters.envMap ? '#define ' + envMapBlendingDefine : '', parameters.lightMap ? '#define USE_LIGHTMAP' : '', parameters.aoMap ? '#define USE_AOMAP' : '', parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '', parameters.bumpMap ? '#define USE_BUMPMAP' : '', parameters.normalMap ? '#define USE_NORMALMAP' : '', parameters.specularMap ? '#define USE_SPECULARMAP' : '', parameters.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', parameters.metalnessMap ? '#define USE_METALNESSMAP' : '', parameters.alphaMap ? '#define USE_ALPHAMAP' : '', parameters.vertexColors ? '#define USE_COLOR' : '', parameters.flatShading ? '#define FLAT_SHADED' : '', parameters.doubleSided ? '#define DOUBLE_SIDED' : '', parameters.flipSided ? '#define FLIP_SIDED' : '', parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '', parameters.pointLightShadows > 0 ? '#define POINT_LIGHT_SHADOWS' : '', parameters.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : '', parameters.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : '', parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', parameters.logarithmicDepthBuffer && renderer.extensions.get('EXT_frag_depth') ? '#define USE_LOGDEPTHBUF_EXT' : '', parameters.envMap && renderer.extensions.get('EXT_shader_texture_lod') ? '#define TEXTURE_LOD_EXT' : '', 'uniform mat4 viewMatrix;', 'uniform vec3 cameraPosition;', parameters.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : '', parameters.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk['tonemapping_pars_fragment'] : '', // this code is required here because it is used by the toneMapping() function defined below
      parameters.toneMapping !== THREE.NoToneMapping ? getToneMappingFunction("toneMapping", parameters.toneMapping) : '', parameters.outputEncoding || parameters.mapEncoding || parameters.envMapEncoding || parameters.emissiveMapEncoding ? THREE.ShaderChunk['encodings_pars_fragment'] : '', // this code is required here because it is used by the various encoding/decoding function defined below
      parameters.mapEncoding ? getTexelDecodingFunction('mapTexelToLinear', parameters.mapEncoding) : '', parameters.envMapEncoding ? getTexelDecodingFunction('envMapTexelToLinear', parameters.envMapEncoding) : '', parameters.emissiveMapEncoding ? getTexelDecodingFunction('emissiveMapTexelToLinear', parameters.emissiveMapEncoding) : '', parameters.outputEncoding ? getTexelEncodingFunction("linearToOutputTexel", parameters.outputEncoding) : '', '\n'].filter(filterEmptyLine).join('\n');
    }

    vertexShader = parseIncludes(vertexShader, parameters);
    vertexShader = replaceLightNums(vertexShader, parameters);
    fragmentShader = parseIncludes(fragmentShader, parameters);
    fragmentShader = replaceLightNums(fragmentShader, parameters);

    if (material instanceof THREE.ShaderMaterial === false) {
      vertexShader = unrollLoops(vertexShader);
      fragmentShader = unrollLoops(fragmentShader);
    }

    var vertexGlsl = prefixVertex + vertexShader;
    var fragmentGlsl = prefixFragment + fragmentShader; // console.log( '*VERTEX*', vertexGlsl );
    // console.log( '*FRAGMENT*', fragmentGlsl );

    var glVertexShader = THREE.WebGLShader(gl, gl.VERTEX_SHADER, vertexGlsl);
    var glFragmentShader = THREE.WebGLShader(gl, gl.FRAGMENT_SHADER, fragmentGlsl);
    gl.attachShader(program, glVertexShader);
    gl.attachShader(program, glFragmentShader); // Force a particular attribute to index 0.

    if (material.index0AttributeName !== undefined) {
      gl.bindAttribLocation(program, 0, material.index0AttributeName);
    } else if (parameters.morphTargets === true) {
      // programs with morphTargets displace position out of attribute 0
      gl.bindAttribLocation(program, 0, 'position');
    }

    gl.linkProgram(program);
    var programLog = gl.getProgramInfoLog(program);
    var vertexLog = gl.getShaderInfoLog(glVertexShader);
    var fragmentLog = gl.getShaderInfoLog(glFragmentShader);
    var runnable = true;
    var haveDiagnostics = true; // console.log( '**VERTEX**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glVertexShader ) );
    // console.log( '**FRAGMENT**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glFragmentShader ) );

    if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
      runnable = false;
    } else if (programLog !== '') ; else if (vertexLog === '' || fragmentLog === '') {
      haveDiagnostics = false;
    }

    if (haveDiagnostics) {
      this.diagnostics = {
        runnable: runnable,
        material: material,
        programLog: programLog,
        vertexShader: {
          log: vertexLog,
          prefix: prefixVertex
        },
        fragmentShader: {
          log: fragmentLog,
          prefix: prefixFragment
        }
      };
    } // clean up


    gl.deleteShader(glVertexShader);
    gl.deleteShader(glFragmentShader); // set up caching for uniform locations

    var cachedUniforms;

    this.getUniforms = function () {
      if (cachedUniforms === undefined) {
        cachedUniforms = fetchUniformLocations(gl, program);
      }

      return cachedUniforms;
    }; // set up caching for attribute locations


    var cachedAttributes;

    this.getAttributes = function () {
      if (cachedAttributes === undefined) {
        cachedAttributes = fetchAttributeLocations(gl, program);
      }

      return cachedAttributes;
    }; // free resource


    this.destroy = function () {
      gl.deleteProgram(program);
      this.program = undefined;
    }; // DEPRECATED


    Object.defineProperties(this, {
      uniforms: {
        get: function () {
          return this.getUniforms();
        }
      },
      attributes: {
        get: function () {
          return this.getAttributes();
        }
      }
    }); //

    this.id = programIdCount++;
    this.code = code;
    this.usedTimes = 1;
    this.program = program;
    this.vertexShader = glVertexShader;
    this.fragmentShader = glFragmentShader;
    return this;
  };
}(); // File:src/renderers/WebGLRenderTarget.js

/**
 * @author szimek / https://github.com/szimek/
 * @author alteredq / http://alteredqualia.com/
 * @author Marius Kintel / https://github.com/kintel
 */

/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/


THREE.WebGLRenderTarget = function (width, height, options) {
  this.uuid = THREE.Math.generateUUID();
  this.width = width;
  this.height = height;
  this.scissor = new THREE.Vector4(0, 0, width, height);
  this.scissorTest = false;
  this.viewport = new THREE.Vector4(0, 0, width, height);
  options = options || {};
  if (options.minFilter === undefined) options.minFilter = THREE.LinearFilter;
  this.texture = new THREE.Texture(undefined, undefined, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy);
  this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
  this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : true;
};

THREE.WebGLRenderTarget.prototype = {
  constructor: THREE.WebGLRenderTarget,
  setSize: function (width, height) {
    if (this.width !== width || this.height !== height) {
      this.width = width;
      this.height = height;
      this.dispose();
    }

    this.viewport.set(0, 0, width, height);
    this.scissor.set(0, 0, width, height);
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (source) {
    this.width = source.width;
    this.height = source.height;
    this.viewport.copy(source.viewport);
    this.texture = source.texture.clone();
    this.depthBuffer = source.depthBuffer;
    this.stencilBuffer = source.stencilBuffer;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype); // File:src/renderers/WebGLRenderTargetCube.js

/**
 * @author alteredq / http://alteredqualia.com
 */

THREE.WebGLRenderTargetCube = function (width, height, options) {
  THREE.WebGLRenderTarget.call(this, width, height, options);
  this.activeCubeFace = 0; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5

  this.activeMipMapLevel = 0;
};

THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube; // File:src/renderers/webgl/WebGLPrograms.js

THREE.WebGLPrograms = function (renderer, capabilities) {
  var programs = [];
  var shaderIDs = {
    MeshDepthMaterial: 'depth',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshStandardMaterial: 'standard',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points'
  };
  var parameterNames = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "pointLightShadows", "toneMapping", 'physicallyCorrectLights', "shadowMapType", "alphaTest", "doubleSided", "flipSided"];

  function allocateBones(object) {
    if (capabilities.floatVertexTextures && object && object.skeleton && object.skeleton.useVertexTexture) {
      return 1024;
    } else {
      // default for when object is not specified
      // ( for example when prebuilding shader to be used with multiple objects )
      //
      //  - leave some extra space for other uniforms
      //  - limit here is ANGLE's 254 max uniform vectors
      //    (up to 54 should be safe)
      var nVertexUniforms = capabilities.maxVertexUniforms;
      var nVertexMatrices = Math.floor((nVertexUniforms - 20) / 4);
      var maxBones = nVertexMatrices;

      if (object !== undefined && object instanceof THREE.SkinnedMesh) {
        maxBones = Math.min(object.skeleton.bones.length, maxBones);

        if (maxBones < object.skeleton.bones.length) ;
      }

      return maxBones;
    }
  }

  function getTextureEncodingFromMap(map, gammaOverrideLinear) {
    var encoding;

    if (!map) {
      encoding = THREE.LinearEncoding;
    } else if (map instanceof THREE.Texture) {
      encoding = map.encoding;
    } else if (map instanceof THREE.WebGLRenderTarget) {
      encoding = map.texture.encoding;
    } // add backwards compatibility for WebGLRenderer.gammaInput/gammaOutput parameter, should probably be removed at some point.


    if (encoding === THREE.LinearEncoding && gammaOverrideLinear) {
      encoding = THREE.GammaEncoding;
    }

    return encoding;
  }

  this.getParameters = function (material, lights, fog, object) {
    var shaderID = shaderIDs[material.type]; // heuristics to create shader parameters according to lights in the scene
    // (not to blow over maxLights budget)

    var maxBones = allocateBones(object);
    var precision = renderer.getPrecision();

    if (material.precision !== null) {
      precision = capabilities.getMaxPrecision(material.precision);

      if (precision !== material.precision) ;
    }

    var parameters = {
      shaderID: shaderID,
      precision: precision,
      supportsVertexTextures: capabilities.vertexTextures,
      outputEncoding: getTextureEncodingFromMap(renderer.getCurrentRenderTarget(), renderer.gammaOutput),
      map: !!material.map,
      mapEncoding: getTextureEncodingFromMap(material.map, renderer.gammaInput),
      envMap: !!material.envMap,
      envMapMode: material.envMap && material.envMap.mapping,
      envMapEncoding: getTextureEncodingFromMap(material.envMap, renderer.gammaInput),
      envMapCubeUV: !!material.envMap && (material.envMap.mapping === THREE.CubeUVReflectionMapping || material.envMap.mapping === THREE.CubeUVRefractionMapping),
      lightMap: !!material.lightMap,
      aoMap: !!material.aoMap,
      emissiveMap: !!material.emissiveMap,
      emissiveMapEncoding: getTextureEncodingFromMap(material.emissiveMap, renderer.gammaInput),
      bumpMap: !!material.bumpMap,
      normalMap: !!material.normalMap,
      displacementMap: !!material.displacementMap,
      roughnessMap: !!material.roughnessMap,
      metalnessMap: !!material.metalnessMap,
      specularMap: !!material.specularMap,
      alphaMap: !!material.alphaMap,
      combine: material.combine,
      vertexColors: material.vertexColors,
      fog: fog,
      useFog: material.fog,
      fogExp: fog instanceof THREE.FogExp2,
      flatShading: material.shading === THREE.FlatShading,
      sizeAttenuation: material.sizeAttenuation,
      logarithmicDepthBuffer: capabilities.logarithmicDepthBuffer,
      skinning: material.skinning,
      maxBones: maxBones,
      useVertexTexture: capabilities.floatVertexTextures && object && object.skeleton && object.skeleton.useVertexTexture,
      morphTargets: material.morphTargets,
      morphNormals: material.morphNormals,
      maxMorphTargets: renderer.maxMorphTargets,
      maxMorphNormals: renderer.maxMorphNormals,
      numDirLights: lights.directional.length,
      numPointLights: lights.point.length,
      numSpotLights: lights.spot.length,
      numHemiLights: lights.hemi.length,
      pointLightShadows: lights.shadowsPointLight,
      shadowMapEnabled: renderer.shadowMap.enabled && object.receiveShadow && lights.shadows.length > 0,
      shadowMapType: renderer.shadowMap.type,
      toneMapping: renderer.toneMapping,
      physicallyCorrectLights: renderer.physicallyCorrectLights,
      premultipliedAlpha: material.premultipliedAlpha,
      alphaTest: material.alphaTest,
      doubleSided: material.side === THREE.DoubleSide,
      flipSided: material.side === THREE.BackSide
    };
    return parameters;
  };

  this.getProgramCode = function (material, parameters) {
    var chunks = [];

    if (parameters.shaderID) {
      chunks.push(parameters.shaderID);
    } else {
      chunks.push(material.fragmentShader);
      chunks.push(material.vertexShader);
    }

    if (material.defines !== undefined) {
      for (var name in material.defines) {
        chunks.push(name);
        chunks.push(material.defines[name]);
      }
    }

    for (var i = 0; i < parameterNames.length; i++) {
      var parameterName = parameterNames[i];
      chunks.push(parameterName);
      chunks.push(parameters[parameterName]);
    }

    return chunks.join();
  };

  this.acquireProgram = function (material, parameters, code) {
    var program; // Check if code has been already compiled

    for (var p = 0, pl = programs.length; p < pl; p++) {
      var programInfo = programs[p];

      if (programInfo.code === code) {
        program = programInfo;
        ++program.usedTimes;
        break;
      }
    }

    if (program === undefined) {
      program = new THREE.WebGLProgram(renderer, code, material, parameters);
      programs.push(program);
    }

    return program;
  };

  this.releaseProgram = function (program) {
    if (--program.usedTimes === 0) {
      // Remove from unordered set
      var i = programs.indexOf(program);
      programs[i] = programs[programs.length - 1];
      programs.pop(); // Free WebGL resources

      program.destroy();
    }
  }; // Exposed for resource monitoring & error feedback via renderer.info:


  this.programs = programs;
};

var Renderer =
/*#__PURE__*/
function () {
  function Renderer(options) {
    _classCallCheck(this, Renderer);

    Object.assign(this, options);
    this.renderer = new threejs360.WebGLRenderer();
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.el = this.renderer.domElement;
  }

  _createClass(Renderer, [{
    key: "setTexture",
    value: function setTexture(texture) {
      this.texture = texture;
      this.mesh = this.createMesh();
    }
  }, {
    key: "setSize",
    value: function setSize(_ref) {
      var height = _ref.height,
          width = _ref.width;
      this.height = height;
      this.width = width;
      this.renderer.setSize(width, height);
    }
  }, {
    key: "createMesh",
    value: function createMesh() {
      this.material = new threejs360.MeshBasicMaterial({
        map: this.texture
      });
      this.geometry = new threejs360.SphereGeometry(1, 50, 50);
      this.geometry.scale(-1, 1, 1);
      var mesh = new threejs360.Mesh(this.geometry, this.material);
      return mesh;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.geometry.dispose();
      this.material.dispose();
      this.renderer.dispose();
    }
  }, {
    key: "render",
    value: function render(scene, camera, needsUpdate) {
      if (!needsUpdate) return;
      this.renderer.render(scene, camera);
    }
  }]);

  return Renderer;
}();

var easeOutBack = function easeOutBack(k) {
  var s = 1.70158;
  return --k * k * ((s + 1) * k + s) + 1;
};

var Controls =
/*#__PURE__*/
function () {
  function Controls(options) {
    var _this = this;

    _classCallCheck(this, Controls);

    Object.assign(this, options);
    this.el = this.renderer.el;
    this.theta = this.initialYaw * Math.PI / 180;
    this.phi = 0;
    this.velo = 0.02;
    this.rotateStart = new threejs360.Vector2();
    this.rotateEnd = new threejs360.Vector2();
    this.rotateDelta = new threejs360.Vector2();
    this.orientation = new threejs360.Quaternion();
    this.euler = new threejs360.Euler();
    this.momentum = false;
    this.isUserInteracting = false;
    this.addDraggableStyle();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.onTouchStart = function (e) {
      return _this.onMouseDown({
        clientX: e.touches[0].pageX,
        clientY: e.touches[0].pageY
      });
    };

    this.onTouchMove = function (e) {
      return _this.onMouseMove({
        clientX: e.touches[0].pageX,
        clientY: e.touches[0].pageY
      });
    };

    this.onTouchEnd = function (_) {
      return _this.onMouseUp();
    };

    this.onDeviceMotion = this.onDeviceMotion.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.bindEvents();
  }

  _createClass(Controls, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.el.addEventListener('mouseleave', this.onMouseUp);
      this.el.addEventListener('mousemove', this.onMouseMove);
      this.el.addEventListener('mousedown', this.onMouseDown);
      this.el.addEventListener('mouseup', this.onMouseUp);
      this.el.addEventListener('touchstart', this.onTouchStart);
      this.el.addEventListener('touchmove', this.onTouchMove);
      this.el.addEventListener('touchend', this.onTouchEnd);
      if (!this.isInIframe()) window.addEventListener('devicemotion', this.onDeviceMotion);
      window.addEventListener('message', this.onMessage);
    }
  }, {
    key: "centralize",
    value: function centralize() {
      var _this2 = this;

      var endTheta = this.initialYaw * Math.PI / 180;
      var duration = 750;
      var startTheta = this.theta;
      var startPhi = this.phi;
      var start = Date.now();

      var animate = function animate() {
        var progress = Date.now() - start;
        var elapsed = progress / duration;
        elapsed = elapsed > 1 ? 1 : elapsed;

        if (progress >= duration) {
          return cancelAnimationFrame(id);
        }

        _this2.theta = startTheta + (endTheta - startTheta) * easeOutBack(elapsed);
        _this2.phi = startPhi + (0 - startPhi) * easeOutBack(elapsed);
        return requestAnimationFrame(animate);
      };

      var id = animate();
    }
  }, {
    key: "isInIframe",
    value: function isInIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.el.removeEventListener('mouseleave', this.onMouseUp);
      this.el.removeEventListener('mousemove', this.onMouseMove);
      this.el.removeEventListener('mousedown', this.onMouseDown);
      this.el.removeEventListener('mouseup', this.onMouseUp);
      this.el.removeEventListener('touchstart', this.onTouchStart);
      this.el.removeEventListener('touchmove', this.onTouchMove);
      this.el.removeEventListener('touchend', this.onTouchEnd);
      window.removeEventListener('devicemotion', this.onDeviceMotion);
      window.removeEventListener('message', this.onMessage);
    }
  }, {
    key: "getCurrentStyle",
    value: function getCurrentStyle() {
      return "height: ".concat(parseInt(this.el.style.height, 10), "px; width: ").concat(parseInt(this.el.style.width, 10), "px; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: rgba(0,0,0,0);");
    }
  }, {
    key: "addDraggingStyle",
    value: function addDraggingStyle() {
      this.el.setAttribute('style', "".concat(this.getCurrentStyle(), " cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing;"));
    }
  }, {
    key: "addDraggableStyle",
    value: function addDraggableStyle() {
      this.el.setAttribute('style', "".concat(this.getCurrentStyle(), " cursor: -webkit-grab; cursor: -moz-grab; cursor: grab;"));
    }
  }, {
    key: "onMessage",
    value: function onMessage(event) {
      var _event$data = event.data,
          orientation = _event$data.orientation,
          portrait = _event$data.portrait,
          rotationRate = _event$data.rotationRate;
      if (!rotationRate) return;
      this.onDeviceMotion({
        orientation: orientation,
        portrait: portrait,
        rotationRate: rotationRate
      });
    }
  }, {
    key: "onDeviceMotion",
    value: function onDeviceMotion(event) {
      var portrait = event.portrait !== undefined ? event.portrait : window.matchMedia("(orientation: portrait)").matches;
      var orientation;

      if (event.orientation !== undefined) {
        orientation = event.orientation;
      } else if (window.orientation !== undefined) {
        orientation = window.orientation;
      } else {
        orientation = -90;
      }

      var alpha = threejs360.Math.degToRad(event.rotationRate.alpha);
      var beta = threejs360.Math.degToRad(event.rotationRate.beta);

      if (portrait) {
        this.phi = this.verticalPanning ? this.phi + alpha * this.velo : this.phi;
        this.theta = this.theta - beta * this.velo * -1;
      } else {
        if (this.verticalPanning) {
          this.phi = orientation === -90 ? this.phi + beta * this.velo : this.phi - beta * this.velo;
        }

        this.theta = orientation === -90 ? this.theta - alpha * this.velo : this.theta + alpha * this.velo;
      }

      this.adjustPhi();
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (!this.isUserInteracting) {
        return;
      }

      this.rotateEnd.set(event.clientX, event.clientY);
      this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
      this.rotateStart.copy(this.rotateEnd);
      this.phi = this.verticalPanning ? this.phi + 2 * Math.PI * this.rotateDelta.y / this.renderer.height * 0.3 : this.phi;
      this.theta += 2 * Math.PI * this.rotateDelta.x / this.renderer.width * 0.5;
      this.adjustPhi();
    }
  }, {
    key: "adjustPhi",
    value: function adjustPhi() {
      // Prevent looking too far up or down.
      this.phi = threejs360.Math.clamp(this.phi, -Math.PI / 1.95, Math.PI / 1.95);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.addDraggingStyle();
      this.rotateStart.set(event.clientX, event.clientY);
      this.isUserInteracting = true;
      this.momentum = false;
      this.onDragStart && this.onDragStart();
    }
  }, {
    key: "inertia",
    value: function inertia() {
      if (!this.momentum) return;
      this.rotateDelta.y *= 0.90;
      this.rotateDelta.x *= 0.90;
      this.theta += 0.005 * this.rotateDelta.x;
      this.phi = this.verticalPanning ? this.phi + 0.005 * this.rotateDelta.y : this.phi;
      this.adjustPhi();
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.isUserInteracting && this.onDragStop && this.onDragStop();
      this.addDraggableStyle();
      this.isUserInteracting = false;
      this.momentum = true;
      this.inertia();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.phi === this.previousPhi && this.theta === this.previousTheta) return false;
      this.previousPhi = this.phi;
      this.previousTheta = this.theta;
      this.euler.set(this.phi, this.theta, 0, 'YXZ');
      this.orientation.setFromEuler(this.euler);
      this.camera.quaternion.copy(this.orientation);
      this.inertia();
      return true;
    }
  }]);

  return Controls;
}();

var ThreeSixtyViewer =
/*#__PURE__*/
function () {
  function ThreeSixtyViewer() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ThreeSixtyViewer);

    Object.assign(this, {
      height: 360,
      width: 640,
      initialYaw: 90,
      verticalPanning: true
    }, options);
    var height = this.height,
        width = this.width,
        container = this.container,
        containerId = this.containerId,
        initialYaw = this.initialYaw,
        verticalPanning = this.verticalPanning,
        onDragStart = this.onDragStart,
        onDragStop = this.onDragStop;
    this.renderer = new Renderer({
      height: height,
      width: width
    });
    this.camera = new threejs360.PerspectiveCamera(80, this.width / this.height, 0.1, 100);
    this.controls = new Controls({
      camera: this.camera,
      renderer: this.renderer,
      initialYaw: initialYaw,
      verticalPanning: verticalPanning,
      onDragStart: onDragStart,
      onDragStop: onDragStop
    });
    this.stopVideoLoop = this.stopVideoLoop.bind(this);
    this.onError = this.onError.bind(this);
    this.startVideoLoop = this.startVideoLoop.bind(this);
    this.needsUpdate = false;
    this.scene = this.createScene();
    this.scene.add(this.camera);
    this.element = this.getElement();
    this.elementReady = false;
    this.element.addEventListener('playing', this.startVideoLoop);
    this.element.addEventListener('pause', this.stopVideoLoop);
    this.element.addEventListener('ended', this.stopVideoLoop);
    this.element.addEventListener('loadedmetadata', this.initAfterLoadedMetadata.bind(this));
    this.target = this.container ? this.container : document.querySelector(this.containerId);
  }

  _createClass(ThreeSixtyViewer, [{
    key: "initAfterLoadedMetadata",
    value: function initAfterLoadedMetadata() {
      if (this.element.readyState >= 1 && !this.elementReady) {
        this.texture = this.createTexture();
        this.renderer.setTexture(this.texture);
        this.scene.getObjectByName('photo').children = [this.renderer.mesh];
        this.elementReady = true;
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.element.play && this.element.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.element.pause && this.element.pause();
    }
  }, {
    key: "centralize",
    value: function centralize() {
      this.controls.centralize();
    }
  }, {
    key: "stopVideoLoop",
    value: function stopVideoLoop() {
      clearTimeout(this.videoLoopId);
      this.videoLoopId = null;
      this.needsUpdate = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.style.display = '';
      clearTimeout(this.videoLoopId);
      cancelAnimationFrame(this.animationFrameId);
      this.element.pause && this.element.pause();
      this.target.removeChild(this.renderer.el);
      this.controls.destroy();
      this.renderer.destroy();
    }
  }, {
    key: "setSize",
    value: function setSize(_ref) {
      var height = _ref.height,
          width = _ref.width;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize({
        height: height,
        width: width
      });
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (this.source && this.source.tagName) return this.source;
      var video = document.createElement('video');
      video.loop = this.loop || false;
      video.muted = this.muted || false;
      video.setAttribute('crossorigin', 'anonymous');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
      video.setAttribute('src', this.source);
      video.autoplay = this.autoplay !== undefined ? this.autoplay : true;
      video.addEventListener('error', this.onError);
      return video;
    }
  }, {
    key: "createTexture",
    value: function createTexture() {
      var texture = new threejs360.Texture(this.element);
      texture.minFilter = threejs360.LinearFilter;
      texture.magFilter = threejs360.LinearFilter;
      texture.format = threejs360.RGBFormat;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;
      return texture;
    }
  }, {
    key: "createScene",
    value: function createScene() {
      var scene = new threejs360.Scene();
      var group = new threejs360.Object3D();
      group.name = 'photo';
      scene.add(group);
      return scene;
    }
  }, {
    key: "onError",
    value: function onError(err) {}
  }, {
    key: "startVideoLoop",
    value: function startVideoLoop() {
      var _this = this;

      var videoFps = 1000 / 25;

      if (this.videoLoopId) {
        clearTimeout(this.videoLoopId);
        this.videoLoopId = null;
      }

      var videoLoop = function videoLoop() {
        _this.needsUpdate = true;
        _this.videoLoopId = setTimeout(videoLoop, videoFps);
      };

      videoLoop();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.target.appendChild(this.renderer.el);
      this.element.style.display = 'none';

      var loop = function loop() {
        _this2.animationFrameId = requestAnimationFrame(loop);

        var cameraUpdated = _this2.controls.update();

        _this2.renderer.render(_this2.scene, _this2.camera, _this2.needsUpdate || cameraUpdated);

        _this2.needsUpdate = false;
      };

      this.startVideoLoop();
      loop();
    }
  }]);

  return ThreeSixtyViewer;
}();

var Video =
/*#__PURE__*/
function (_ThreeSixtyViewer) {
  _inherits(Video, _ThreeSixtyViewer);

  function Video(options) {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, _getPrototypeOf(Video).call(this, options));
  }

  _createClass(Video, [{
    key: "createTexture",
    value: function createTexture() {
      var texture = new threejs360.VideoTexture(this.element); //TODO: we can pass all this info through the constructor

      texture.minFilter = threejs360.LinearFilter;
      texture.magFilter = threejs360.LinearFilter;
      texture.format = threejs360.RGBFormat;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;
      return texture;
    }
  }]);

  return Video;
}(ThreeSixtyViewer);

var Image =
/*#__PURE__*/
function (_ThreeSixtyViewer) {
  _inherits(Image, _ThreeSixtyViewer);

  function Image(options) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, options));
  }

  _createClass(Image, [{
    key: "getElement",
    value: function getElement() {
      if (this.source && this.source.tagName) return this.source;
      var image = document.createElement('img');
      image.setAttribute('crossorigin', 'anonymous');
      image.src = this.source;
      return image;
    }
  }]);

  return Image;
}(ThreeSixtyViewer);

var Canvas =
/*#__PURE__*/
function (_ThreeSixtyViewer) {
  _inherits(Canvas, _ThreeSixtyViewer);

  function Canvas(options) {
    var _this;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, options));
    _this.context = _this.element.getContext('2d');
    return _this;
  }

  _createClass(Canvas, [{
    key: "play",
    value: function play() {
      this.video.play && this.video.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.video.pause && this.video.pause();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.video.style.display = '';

      _get(_getPrototypeOf(Canvas.prototype), "destroy", this).call(this);
    }
  }, {
    key: "getElement",
    value: function getElement() {
      this.video = _get(_getPrototypeOf(Canvas.prototype), "getElement", this).call(this);
      this.video.addEventListener('playing', this.startVideoLoop);
      this.video.addEventListener('pause', this.stopVideoLoop);
      this.video.addEventListener('ended', this.stopVideoLoop);
      var canvas = document.createElement('canvas');
      canvas.height = this.video.videoHeight;
      canvas.width = this.video.videoWidth;
      return canvas;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.target.appendChild(this.renderer.el);
      this.video.style.display = 'none';

      var loop = function loop() {
        _this2.animationFrameId = requestAnimationFrame(loop);
        var h = _this2.video.videoHeight;
        var w = _this2.video.videoWidth;

        if (_this2.element.height != h) {
          _this2.element.height = h;
        }

        if (_this2.element.width != w) {
          _this2.element.width = w;
        }

        _this2.context.clearRect(0, 0, w, h);

        _this2.context.drawImage(_this2.video, 0, 0, w, h);

        var cameraUpdated = _this2.controls.update();

        _this2.renderer.render(_this2.scene, _this2.camera, _this2.needsUpdate || cameraUpdated);

        _this2.renderer.mesh.material.map.needsUpdate = true;
        _this2.needsUpdate = false;
      };

      this.startVideoLoop();
      loop();
    }
  }]);

  return Canvas;
}(ThreeSixtyViewer);

var Audio =
/*#__PURE__*/
function (_ThreeSixtyViewer) {
  _inherits(Audio, _ThreeSixtyViewer);

  function Audio(options) {
    var _this;

    _classCallCheck(this, Audio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Audio).call(this, options));

    _this.driver.addEventListener('playing', _this.startVideoLoop);

    _this.driver.addEventListener('pause', _this.stopVideoLoop);

    _this.driver.addEventListener('ended', _this.stopVideoLoop);

    _this.driver.addEventListener('stalled', _this.stopVideoLoop);

    _this.driverInitialized = false;
    return _this;
  }

  _createClass(Audio, [{
    key: "play",
    value: function play() {
      this.driver.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.driver.pause();
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (this.source && this.source.tagName) {
        this.driver = this.source;
      } else {
        this.driver = document.createElement('audio');
        this.driver.src = this.source;
        this.driver.loop = this.loop || false;
        this.driver.muted = this.muted || false;
        this.driver.setAttribute('crossorigin', 'anonymous');
        this.driver.autoplay = this.autoplay || true;
      }

      this.source = this.driver.src;
      this.driver.src = '';
      this.driver.load();
      var video = document.createElement('video');
      video.setAttribute('crossorigin', 'anonymous');
      video.src = this.source;
      video.load();
      video.addEventListener('error', this.onError);
      return video;
    }
  }, {
    key: "createTexture",
    value: function createTexture() {
      var texture = new threejs360.VideoTexture(this.element); //TODO: we can pass all this info through the constructor

      texture.minFilter = threejs360.LinearFilter;
      texture.magFilter = threejs360.LinearFilter;
      texture.format = threejs360.RGBFormat;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;
      return texture;
    }
  }, {
    key: "startVideoLoop",
    value: function startVideoLoop() {
      var _this2 = this;

      var videoFps = 1000 / 25;

      if (this.videoLoopId) {
        clearTimeout(this.videoLoopId);
        this.videoLoopId = null;
      }

      var videoLoop = function videoLoop() {
        _this2.element.currentTime = _this2.driver.currentTime;
        _this2.needsUpdate = true;
        _this2.videoLoopId = setTimeout(videoLoop, videoFps);
      };

      videoLoop();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.driver.style.display = '';

      _get(_getPrototypeOf(Audio.prototype), "destroy", this).call(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.target.appendChild(this.renderer.el);
      this.element.style.display = 'none';
      this.driver.style.display = 'none';

      var loop = function loop() {
        var cameraUpdated = _this3.controls.update();

        _this3.renderer.render(_this3.scene, _this3.camera, _this3.needsUpdate || cameraUpdated);

        _this3.needsUpdate = false;
        _this3.animationFrameId = requestAnimationFrame(loop);
        var shouldInitializeDriver = _this3.element.readyState >= _this3.element.HAVE_FUTURE_DATA && !_this3.driverInitialized;

        if (shouldInitializeDriver) {
          _this3.driver.src = _this3.source;

          _this3.driver.load();

          _this3.onDriverReady && _this3.onDriverReady();
          _this3.driverInitialized = true;
        }
      };

      loop();
    }
  }]);

  return Audio;
}(ThreeSixtyViewer);

var video = function video(options) {
  if (utils.shouldUseAudioDriver()) {
    return new Audio(options);
  }

  if (utils.shouldUseCanvasInBetween()) {
    return new Canvas(options);
  }

  return new Video(options);
};

export { video as Video, Image };
