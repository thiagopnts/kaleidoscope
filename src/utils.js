export default {
  isIOS() {
    return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  },
  isIE11() {
    return navigator.userAgent.match(/Trident/);
  }
}
