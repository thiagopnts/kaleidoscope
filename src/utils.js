export default {
  isiOS() {
    return /(ipad|iphone|ipod)/ig.test(navigator.userAgent);
  },
  shouldUseAudioDriver() {
    let isOldiOS = /iphone.*(7|8|9)_[0-9]/i.test(navigator.userAgent);
    let isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
    return isOldiOS || isWebView;
  },
  shouldUseCanvasInBetween() {
    return /trident|edge/i.test(navigator.userAgent);
  },
}
