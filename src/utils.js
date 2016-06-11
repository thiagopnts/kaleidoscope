export default {
  isiPhone() {
    return !!(/(iphone)/i.test(navigator.userAgent));
  },
  isIE() {
    return /Trident|Edge/i.test(navigator.userAgent);
  }
}
