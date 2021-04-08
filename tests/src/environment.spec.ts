import ua from 'useragent-generator';
import { expect } from 'chai';

const window = {
  ActiveXObject: undefined,
  ontouchstart: undefined,
  navigator: {
    userAgent: ua.chrome(80),
    appVersion: '80.0',
    onLine: true
  }
};

Object.defineProperty(global, 'window', {
  configurable: true,
  writable: true,
  value: window
});

describe('[environment]', function () {
  describe('.firefox()', function () {
    it('returns true if current env is Firefox', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(isFirefox()).to.be.true;
    });

    it('returns false if current env is not Firefox', function () {
      window.navigator.userAgent = ua.edge(15);

      expect(isFirefox()).to.be.false;
    });
  });

  describe('.edge()', function () {
    it('returns true if current env is Edge', function () {
      window.navigator.userAgent = ua.edge(15);

      expect(is.edge()).to.be.true;
    });

    it('returns false if current env is not Edge', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.edge()).to.be.false;
    });
  });

  describe('.ie()', function () {
    it('returns true if current env is any Internet Explorer', function () {
      window.navigator.userAgent = ua.ie(9);

      expect(is.ie()).to.be.true;
    });

    it('returns true if current env is Internet Explorer 10', function () {
      window.navigator.userAgent = ua.ie(10);

      expect(is.ie(10)).to.be.true;
    });

    it('returns true if current env is Internet Explorer 11', function () {
      window.navigator.userAgent = ua.ie(11);
      window.ActiveXObject = {};

      expect(is.ie(11)).to.be.true;

      delete window.ActiveXObject;
    });

    it('returns false if current env is not Internet Explorer', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.ie(11)).to.be.false;
    });
  });

  describe('.opera()', function () {
    it('returns true if current env is Opera', function () {
      window.navigator.userAgent = `OPR/${ua.chrome(80)}`;

      expect(is.opera()).to.be.true;
    });

    it('returns false if current env is not Opera', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.opera()).to.be.false;
    });
  });

  describe('.vivaldi()', function () {
    it('returns true if current env is Vivaldi', function () {
      window.navigator.userAgent = `Vivaldi/${ua.chrome(80)}`;

      expect(is.vivaldi()).to.be.true;
    });

    it('returns false if current env is not Vivaldi', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.vivaldi()).to.be.false;
    });
  });

  describe('.twitter()', function () {
    it('returns true if current env is Twitter', function () {
      window.navigator.userAgent = `Twitter/${ua.chrome(80)}`;

      expect(is.twitter()).to.be.true;
    });

    it('returns false if current env is not Twitter', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.twitter()).to.be.false;
    });
  });

  describe('.facebook()', function () {
    it('returns true if current env is Facebook', function () {
      window.navigator.userAgent = `FB_IAB/${ua.chrome(80)}`;

      expect(isFacebook()).to.be.true;
    });

    it('returns false if current env is not Facebook', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(isFacebook()).to.be.false;
    });
  });

  describe('.chrome()', function () {
    it('returns true if current env is Chrome/Chromium', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.chrome()).to.be.true;
    });

    it('returns false if current env is not Chrome/Chromium', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.chrome()).to.be.false;
    });
  });

  describe('.safari()', function () {
    it('returns true if current env is Safari', function () {
      window.navigator.userAgent = ua.safari(10);

      expect(is.safari()).to.be.true;
    });

    it('returns false if current env is not Safari', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.safari()).to.be.false;
    });
  });

  describe('.iphone()', function () {
    it('returns true if current env is iPhone', function () {
      window.navigator.userAgent = ua.safari.iOS({
        iOSVersion: '10.0.1',
        device: 'iPhone'
      });

      expect(is.iphone()).to.be.true;
    });

    it('returns false if current env is not iPhone', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.iphone()).to.be.false;
    });
  });

  describe('.ipad()', function () {
    it('returns true if current env is iPad', function () {
      window.navigator.userAgent = ua.safari.iOS({
        iOSVersion: '10.0.1',
        device: 'iPad'
      });

      expect(is.ipad()).to.be.true;
    });

    it('returns false if current env is not iPad', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.ipad()).to.be.false;
    });
  });

  describe('.ipod()', function () {
    it('returns true if current env is iPod', function () {
      window.navigator.userAgent = ua.safari.iOS({
        iOSVersion: '10.0.1',
        device: 'iPod'
      });

      expect(is.ipod()).to.be.true;
    });

    it('returns false if current env is not iPod', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.ipod()).to.be.false;
    });
  });

  describe('.ios()', function () {
    it('returns true if current env is iOS', function () {
      window.navigator.userAgent = ua.safari.iOS({
        iOSVersion: '10.0.1',
        device: 'iPod'
      });

      expect(is.ios()).to.be.true;
    });

    it('returns false if current env is not iOS', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.ios()).to.be.false;
    });
  });

  describe('.android()', function () {
    it('returns true if current env is Android', function () {
      window.navigator.userAgent = ua.chrome.androidPhone(80);

      expect(is.android()).to.be.true;
    });

    it('returns false if current env is not Android', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.android()).to.be.false;
    });
  });

  describe('.androidPhone()', function () {
    it('returns true if current env is Android phone', function () {
      window.navigator.userAgent = ua.chrome.androidPhone(80);

      expect(is.androidPhone()).to.be.true;
    });

    it('returns false if current env is not Android phone', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.androidPhone()).to.be.false;
    });
  });

  describe('.androidTablet()', function () {
    it('returns true if current env is Android tablet', function () {
      window.navigator.userAgent = ua.chrome.androidTablet(80);

      expect(is.androidTablet()).to.be.true;
    });

    it('returns false if current env is not Android tablet', function () {
      window.navigator.userAgent = ua.firefox(75);

      expect(is.androidTablet()).to.be.false;
    });
  });

  describe('.windows()', function () {
    it('returns true if current env is Windows', function () {
      window.navigator.userAgent = ua.chrome(80);
      window.navigator.appVersion = '5.0 (Win)';

      expect(isWindows()).to.be.true;
    });

    it('returns false if current env is not Windows', function () {
      window.navigator.userAgent = ua.chrome(80);
      window.navigator.appVersion = '5.0 (X11)';

      expect(isWindows()).to.be.false;
    });
  });

  describe('.windowsPhone()', function () {
    it('returns true if current env is Windows Phone', function () {
      window.navigator.userAgent = ua.ie.windowsPhone('9.0.1');
      window.navigator.appVersion = '5.0 (Win)';

      expect(isWindowsPhone()).to.be.true;
    });

    it('returns false if current env is not Windows Phone', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(isWindowsPhone()).to.be.false;
    });
  });

  describe('.windowsTablet()', function () {
    it('returns true if current env is Windows Tablet', function () {
      window.navigator.userAgent = `touch/${ua.chrome(80)}`;
      window.navigator.appVersion = '5.0 (Win)';

      expect(isWindowsTablet()).to.be.true;
    });

    it('returns false if current env is not Windows Tablet', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(isWindowsTablet()).to.be.false;
    });
  });

  describe('.mobile()', function () {
    it('returns true if current env is mobile', function () {
      window.navigator.userAgent = ua.chrome.androidPhone(80);

      expect(is.mobile()).to.be.true;
    });

    it('returns false if current env is not mobile', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.mobile()).to.be.false;
    });
  });

  describe('.tablet()', function () {
    it('returns true if current env is tablet', function () {
      window.navigator.userAgent = ua.chrome.androidTablet(80);

      expect(is.tablet()).to.be.true;
    });

    it('returns false if current env is not tablet', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(is.tablet()).to.be.false;
    });
  });

  describe('.desktop()', function () {
    it('returns true if current env is desktop', function () {
      window.navigator.userAgent = ua.chrome(80);

      expect(isDesktop()).to.be.true;
    });

    it('returns false if current env is not desktop', function () {
      window.navigator.userAgent = ua.chrome.androidTablet(80);

      expect(isDesktop()).to.be.false;
    });
  });

  describe('.linux()', function () {
    it('returns true if current env is linux', function () {
      window.navigator.userAgent = ua.chrome({
        version: '80',
        os: 'Linux'
      });

      expect(is.linux()).to.be.true;
    });

    it('returns false if current env is not linux', function () {
      window.navigator.userAgent = ua.chrome.androidPhone(80);

      expect(is.linux()).to.be.false;
    });
  });

  describe('.macos()', function () {
    it('returns true if current env is MacOS', function () {
      window.navigator.userAgent = ua.safari(10);
      window.navigator.appVersion = 'Mac';

      expect(is.macos()).to.be.true;
    });

    it('returns false if current env is not MacOS', function () {
      window.navigator.userAgent = ua.chrome(80);
      window.navigator.appVersion = '5.0 (X11)';

      expect(is.macos()).to.be.false;
    });
  });

  describe('.online()', function () {
    it('returns true if current env is OnLine', function () {
      window.navigator.userAgent = ua.chrome(80);
      window.navigator.onLine = true;

      expect(is.online()).to.be.true;
    });

    it('returns false if current env is not OnLine', function () {
      window.navigator.userAgent = ua.chrome(80);
      window.navigator.onLine = false;

      expect(is.online()).to.be.false;
    });
  });

  describe('.offline()', function () {
    it('returns true if current env is OffLine', function () {
      window.navigator.userAgent = ua.chrome(80);
      window.navigator.onLine = false;

      expect(is.offline()).to.be.true;
    });

    it('returns false if current env is not OffLine', function () {
      window.navigator.userAgent = ua.chrome(80);
      window.navigator.onLine = true;

      expect(is.offline()).to.be.false;
    });
  });

  describe('.touchDevice()', function () {
    it('returns true if current env is touch device', function () {
      window.ontouchstart = null;

      expect(is.touchDevice()).to.be.true;
    });

    it('returns false if current env is not touch device', function () {
      delete window.ontouchstart;

      expect(is.touchDevice()).to.be.false;
    });
  });

  describe('.nodejs()', function () {
    it('returns false if current env is not Node.js', function () {
      expect(is.nodejs()).to.be.false;
    });

    it('returns true if current env is Node.js', function () {
      global.window = undefined;

      expect(is.nodejs()).to.be.true;
    });
  });
});
