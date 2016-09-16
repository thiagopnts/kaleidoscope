export default {
  isiOS() {
    return /(ipad|iphone|ipod)/ig.test(navigator.userAgent);
  },
  shouldUseAudioDriver() {
    return /iphone.*(7|8|9)_[0-9]/i.test(navigator.userAgent);
  },
  shouldUseCanvasInBetween() {
    return /Trident|Edge/i.test(navigator.userAgent);
  }
}
