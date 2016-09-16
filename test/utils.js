import utils from  '../src/utils';

describe('utils', () => {
  let ipadUserAgent = 'Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/18.1.132077863 Mobile/13G36 Safari/600.1.4';
  let iphoneUserAgent = 'Mozilla/5.0 (iPhone; CPU OS 9_3_5 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/18.1.132077863 Mobile/13G36 Safari/600.1.4';
  let ios10UserAgent = 'Mozilla/5.0 (iPhone; CPU OS 10_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/18.1.132077863 Mobile/13G36 Safari/600.1.4';
  let ieUserAgent = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  let edgeUserAgent = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136';

  let setUserAgent = userAgent =>
    Object.defineProperty(navigator, "userAgent", {
      get() { return userAgent; },
      configurable: true,
    });

  it('#isiOS', () => {
    setUserAgent(iphoneUserAgent);
    assert.ok(utils.isiOS());

    setUserAgent(ieUserAgent);
    assert.ok(!utils.isiOS());
  });

  it('#shouldUseAudioDriver', () => {
    setUserAgent(iphoneUserAgent);
    assert.ok(utils.shouldUseAudioDriver());

    setUserAgent(ios10UserAgent);
    assert.ok(!utils.shouldUseAudioDriver());
    setUserAgent(edgeUserAgent);
    assert.ok(!utils.shouldUseAudioDriver());
  });

  it('#shouldUseCanvasInBetween', () => {
    setUserAgent(iphoneUserAgent);
    assert.ok(!utils.shouldUseCanvasInBetween());
    setUserAgent(ios10UserAgent);
    assert.ok(!utils.shouldUseCanvasInBetween());

    setUserAgent(edgeUserAgent);
    assert.ok(utils.shouldUseCanvasInBetween());
    setUserAgent(ieUserAgent);
    assert.ok(utils.shouldUseCanvasInBetween());
  });
});
