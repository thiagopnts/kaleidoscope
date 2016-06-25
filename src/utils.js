export default {
  isiOS() {
    return /(ipad|iphone|ipod)/ig.test(navigator.userAgent);
  },
  isiPhone() {
    return /iphone.*(7|8|9)_[0-9]/i.test(navigator.userAgent);
  },
  isIE() {
    return /Trident|Edge/i.test(navigator.userAgent);
  }
}
