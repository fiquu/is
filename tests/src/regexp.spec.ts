import { expect } from 'chai';
import * as uuid from 'uuid';

import {
  isAlphanumeric,
  isCreditCard,
  isDateString,
  isDomain,
  isEmail,
  isEppPhone,
  isHex,
  isHexColor,
  isIntlPhone,
  isIp,
  isIpv4,
  isIpv6,
  isJwt,
  isNanpPhone,
  isTimeString,
  isUrl,
  isUuid
} from '../../src/regexp';

describe('RegExp', function () {
  describe('isDomain()', function () {
    it('returns true if given value is domain', function () {
      expect(isDomain('example.com')).to.be.true;
      expect(isDomain('subdomain.example.com')).to.be.true;
      expect(isDomain('sub.domain.example.website')).to.be.true;
    });

    it('returns false if given value is not domain', function () {
      expect(isDomain('not even a valid url')).to.be.false;
      expect(isDomain('not_a_domain')).to.be.false;
      expect(isDomain('seriously?')).to.be.false;
      expect(isDomain('#d04415')).to.be.false;
      expect(isDomain('1234')).to.be.false;
      expect(isDomain('false')).to.be.false;
      expect(isDomain(undefined)).to.be.false;
      expect(isDomain(null)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a domain', function () {
        expect(!isDomain('example.com')).to.be.false;
        expect(!isDomain('subdomain.example.com')).to.be.false;
        expect(!isDomain('sub.domain.example.website')).to.be.false;
      });

      it('returns true if given value is not a domain', function () {
        expect(!isDomain('not even a valid domain')).to.be.true;
        expect(!isDomain('not_a_domain')).to.be.true;
        expect(!isDomain('seriously?')).to.be.true;
        expect(!isDomain('#d04415')).to.be.true;
        expect(!isDomain('1234')).to.be.true;
        expect(!isDomain('false')).to.be.true;
        expect(!isDomain(undefined)).to.be.true;
        expect(!isDomain(null)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if every value is a domain', function () {
        expect(
          [
            'example.com',
            'google.com',
            'www.domain.net',
            'external.api.something.site'
          ].every(isDomain)
        ).to.be.true;
      });

      it('returns false if any value is not a domain', function () {
        expect(
          ['example.com', '[1]', 'not me!', 'www.domain.net', '1234'].every(
            isDomain
          )
        ).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any value is a domain', function () {
        expect(['1234', 'false', 'www.domain.net', 'undefined'].some(isDomain))
          .to.be.true;
      });

      it('returns false if all values are not a domain', function () {
        expect(['false', 'not me!', 'undefined', '{}', '1234'].some(isDomain))
          .to.be.false;
      });
    });
  });

  describe('isUrl()', function () {
    it('returns true if given value is an URL', function () {
      expect(isUrl('ftp://some.external.host.com:4444')).to.be.true;
      expect(isUrl('ftp://some.external.host.com')).to.be.true;
      expect(isUrl('https://www.example.com')).to.be.true;
      expect(isUrl('http://www.example.com')).to.be.true;
      expect(isUrl('http://localhost:8888')).to.be.true;
      expect(isUrl('http://localhost')).to.be.true;
    });

    it('returns false if given value is not an URL', function () {
      expect(isUrl('werwerwer 234gf 35g q436thj')).to.be.false;
      expect(isUrl('https://not url dot com')).to.be.false;
      expect(isUrl('http://not url dot com')).to.be.false;
      expect(isUrl('ftp://not url dot com')).to.be.false;
      expect(isUrl(undefined)).to.be.false;
      expect(isUrl('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is url', function () {
        expect(!isUrl('http://www.example.com')).to.be.false;
      });

      it('returns true if given value is not url', function () {
        expect(!isUrl('http://not url dot com')).to.be.true;
        expect(!isUrl(undefined)).to.be.true;
        expect(!isUrl('1')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are url', function () {
        expect(
          ['http://www.example.com', 'http://www.example2.com'].every(isUrl)
        ).to.be.true;
      });

      it('returns false if any given value is not url', function () {
        expect(['http://www.example.com', '1', 'true'].every(isUrl)).to.be
          .false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is url', function () {
        expect(['http://www.example.com', '1', 'false'].some(isUrl)).to.be.true;
      });

      it('returns false if all given values are not url', function () {
        expect(['1', '2', ''].some(isUrl)).to.be.false;
      });
    });
  });

  describe('isEmail()', function () {
    it('returns true if given value is an email', function () {
      expect(isEmail('test@example.com')).to.be.true;
      expect(isEmail('test@example.com.ar')).to.be.true;
      expect(isEmail('teíǹñst@example.cl')).to.be.true;
      expect(isEmail('tést@example.com')).to.be.true;
      expect(isEmail('téśt@example.co.uk')).to.be.true;
      expect(isEmail('im`-téśt@example.co.uk')).to.be.true;
    });

    it('returns false if given value is not an email', function () {
      expect(isEmail('im`-téśt@test')).to.be.false;
      expect(isEmail('test@test')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is an email', function () {
        expect(!isEmail('test@example.com')).to.be.false;
      });

      it('returns true if given value is not an email', function () {
        expect(!isEmail('test@test')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are email', function () {
        expect(['test@example.com', 'test@example2.com'].every(isEmail)).to.be
          .true;
      });

      it('returns false if any given value is not email', function () {
        expect(['test@example.com', 'test@test'].every(isEmail)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is email', function () {
        expect(['test@example.com', 'test@test'].some(isEmail)).to.be.true;
      });

      it('returns false if all given values are not email', function () {
        expect(['test@test', '.com'].some(isEmail)).to.be.false;
      });
    });
  });

  describe('isCreditCard()', function () {
    it('returns true if given value is credit card', function () {
      expect(isCreditCard('378282246310005')).to.be.true;
    });

    it('returns false if given value is not credit card', function () {
      expect(isCreditCard('werfasd')).to.be.false;
      expect(isCreditCard(undefined)).to.be.false;
      expect(isCreditCard('123')).to.be.false;
      expect(isCreditCard(null)).to.be.false;
      expect(isCreditCard('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is credit card', function () {
        expect(!isCreditCard('378282246310005')).to.be.false;
      });

      it('returns true if given value is not credit card', function () {
        expect(!isCreditCard('123')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are credit card', function () {
        expect(['378282246310005', '371449635398431'].every(isCreditCard)).to.be
          .true;
      });

      it('returns false if any given value is not credit card', function () {
        expect(['378282246310005', '123'].every(isCreditCard)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is credit card', function () {
        expect(['378282246310005', '123', '3h56g24'].some(isCreditCard)).to.be
          .true;
      });

      it('returns false if all given values are not credit card', function () {
        expect(['123', '456', 'j36u4'].some(isCreditCard)).to.be.false;
      });
    });
  });

  describe('isAlphaNumeric()', function () {
    it('returns true if given value is alpha numeric', function () {
      expect(isAlphanumeric('abc123')).to.be.true;
    });

    it('returns false if given value is not alpha numeric', function () {
      expect(isAlphanumeric('*?')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is alpha numeric', function () {
        expect(!isAlphanumeric('abc123')).to.be.false;
      });

      it('returns true if given value is not alpha numeric', function () {
        expect(!isAlphanumeric('&%!')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are alpha numeric', function () {
        expect(['123', 'abc123'].every(isAlphanumeric)).to.be.true;
      });

      it('returns false if any given value is not alpha numeric', function () {
        expect(['123', '/('].every(isAlphanumeric)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is alpha numeric', function () {
        expect(['123', 'abc', 'false'].some(isAlphanumeric)).to.be.true;
      });

      it('returns false if all given values are not alpha numeric', function () {
        expect(['=', '????', ''].some(isAlphanumeric)).to.be.false;
      });
    });
  });

  describe('isTimeString()', function () {
    it('returns true if given value is time string', function () {
      expect(isTimeString('13:45:30')).to.be.true;
    });

    it('returns false if given value is not time string', function () {
      expect(isTimeString('12:12:90')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is time string', function () {
        expect(!isTimeString('13:45:30')).to.be.false;
      });

      it('returns true if given value is not time string', function () {
        expect(!isTimeString('12:12:90')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are time string', function () {
        expect(['13:45:30', '10:15:20'].every(isTimeString)).to.be.true;
      });

      it('returns false if any given value is not time string', function () {
        expect(['13:45:30', '12:12:90'].every(isTimeString)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is time string', function () {
        expect(['13:45:30', '12:12:90'].some(isTimeString)).to.be.true;
      });

      it('returns false if all given values are not time string', function () {
        expect(['12:12:90', '12:12:66'].some(isTimeString)).to.be.false;
      });
    });
  });

  describe('isDateString()', function () {
    it('returns true if given value is date string', function () {
      expect(isDateString('11/11/2011')).to.be.true;
    });

    it('returns false if given value is not date string', function () {
      expect(isDateString('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is date string', function () {
        expect(!isDateString('11/11/2011')).to.be.false;
      });

      it('returns true if given value is not date string', function () {
        expect(!isDateString('1/5')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are date string', function () {
        expect(['11/11/2011', '10/21/2012'].every(isDateString)).to.be.true;
      });

      it('returns false if any given value is not dateString', function () {
        expect(['11/11/2011', '1'].every(isDateString)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is date string', function () {
        expect(['11/11/2011', '1'].some(isDateString)).to.be.true;
      });

      it('returns false if all given values are not date string', function () {
        expect(['11/11/1', '11/11/1'].some(isDateString)).to.be.false;
      });
    });
  });

  describe('isNanpPhone()', function () {
    it('returns true if given value is nanpPhone', function () {
      expect(isNanpPhone('609-555-0175')).to.be.true;
    });

    it('returns false if given value is not nanpPhone', function () {
      expect(isNanpPhone('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is nanpPhone', function () {
        expect(!isNanpPhone('609-555-0175')).to.be.false;
      });

      it('returns true if given value is not nanpPhone', function () {
        expect(!isNanpPhone('1')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are nanpPhone', function () {
        expect(['609-555-0175', '609-555-0174'].every(isNanpPhone)).to.be.true;
      });

      it('returns false if any given value is not nanpPhone', function () {
        expect(['609-555-0175', '1'].every(isNanpPhone)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is nanpPhone', function () {
        expect(['609-555-0175', '1'].some(isNanpPhone)).to.be.true;
      });

      it('returns false if all given values are not nanpPhone', function () {
        expect(['1', '2'].some(isNanpPhone)).to.be.false;
      });
    });
  });

  describe('isEppPhone()', function () {
    it('returns true if given value is eppPhone', function () {
      expect(isEppPhone('+90.2322456789')).to.be.true;
    });

    it('returns false if given value is not eppPhone', function () {
      expect(isEppPhone('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is eppPhone', function () {
        expect(!isEppPhone('+90.2322456789')).to.be.false;
      });

      it('returns true if given value is not eppPhone', function () {
        expect(!isEppPhone('1')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are eppPhone', function () {
        expect(['+90.2322456789', '+90.2322456799'].every(isEppPhone)).to.be
          .true;
      });

      it('returns false if any given value is not eppPhone', function () {
        expect(['+90.2322456789', '1'].every(isEppPhone)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is eppPhone', function () {
        expect(['+90.2322456789', '1'].some(isEppPhone)).to.be.true;
      });

      it('returns false if all given values are not eppPhone', function () {
        expect(['1', '2'].some(isEppPhone)).to.be.false;
      });
    });
  });

  describe('isIntlPhone()', function () {
    it('returns true if given value is international phone number', function () {
      expect(isIntlPhone('+902322456789')).to.be.true;
    });

    it('returns false if given value is not international phone number', function () {
      expect(isIntlPhone('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is international phone number', function () {
        expect(!isIntlPhone('+902322456789')).to.be.false;
      });

      it('returns true if given value is not international phone number', function () {
        expect(!isIntlPhone('1')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are international phone number', function () {
        expect(['+902322456789', '+902322456799'].every(isIntlPhone)).to.be
          .true;
      });

      it('returns false if any given value is not international phone number', function () {
        expect(['+902322456789', '1'].every(isIntlPhone)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is international phone number', function () {
        expect(['+902322456789', '1'].some(isIntlPhone)).to.be.true;
      });

      it('returns false if all given values are not international phone number', function () {
        expect(['1', '2'].some(isIntlPhone)).to.be.false;
      });
    });
  });

  describe('isHex()', function () {
    it('returns true if given value is hexadecimal', function () {
      expect(isHex('ff')).to.be.true;
    });

    it('returns false if given value is not hexadecimal', function () {
      expect(isHex('0.287')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is hexadecimal', function () {
        expect(!isHex('ffFF')).to.be.false;
      });

      it('returns true if given value is not hexadecimal', function () {
        expect(!isHex('nohexhere')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are hexadecimal', function () {
        expect(['bcd', 'fF0'].every(isHex)).to.be.true;
      });

      it('returns false if any given value is not hexadecimal', function () {
        expect(['ff', 'nohex'].every(isHex)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is hexadecimal', function () {
        expect(['F5', 'nohex'].some(isHex)).to.be.true;
      });

      it('returns false if all given values are not hexadecimal', function () {
        expect(['hex', 'none'].some(isHex)).to.be.false;
      });
    });
  });

  describe('isHexColor()', function () {
    it('returns true if given value is hexColor', function () {
      expect(isHexColor('#333')).to.be.true;
    });

    it('returns false if given value is not hexColor', function () {
      expect(isHexColor('0.287')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is hexColor', function () {
        expect(!isHexColor('#333')).to.be.false;
      });

      it('returns true if given value is not hexColor', function () {
        expect(!isHexColor('0.287')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are hexColor', function () {
        expect(['#333', '#444444'].every(isHexColor)).to.be.true;
      });

      it('returns false if any given value is not hexColor', function () {
        expect(['#3333', 'nohex'].every(isHexColor)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given values is hexColor', function () {
        expect(['#333', 'nohex'].some(isHexColor)).to.be.true;
      });

      it('returns false if all given values are not hexColor', function () {
        expect(['nohex', 'nohex'].some(isHexColor)).to.be.false;
      });
    });
  });

  describe('isIp()', function () {
    it('returns true if given value is a valid IP address', function () {
      expect(isIp('2001:db8::ff00:42:8329')).to.be.true;
      expect(isIp('::ffff:192.168.1.1')).to.be.true;
      expect(isIp('2001:DB8:0:0:1::1')).to.be.true;
      expect(isIp('127.0.0.1')).to.be.true;
      expect(isIp('ff02::1')).to.be.true;
      expect(isIp('2::10')).to.be.true;
      expect(isIp('::8')).to.be.true;
    });

    it('returns false if given value is not a valid IP address', function () {
      expect(isIp('2001:DB8:0:0:WERWER1::1')).to.be.false;
      expect(isIp('http://www.example.com')).to.be.false;
      expect(isIp('http://example.com')).to.be.false;
      expect(isIp('2001::::42:8329')).to.be.false;
      expect(isIp('www.example.com')).to.be.false;
      expect(isIp('example.com')).to.be.false;
      expect(isIp('985.12.3.4')).to.be.false;
      expect(isIp('localhost')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a valid IP address', function () {
        expect(!isIp('2001:db8:0:0:1::1')).to.be.false;
      });

      it('returns true if given value is not a valid IP address', function () {
        expect(!isIp('0..3.4')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are valid IP addresses', function () {
        expect(['2001:db8::0:1:0:0:1', '201.50.198.2'].every(isIp)).to.be.true;
      });

      it('returns false if any given value is not a valid IP address', function () {
        expect(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'].every(isIp)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is a valid IP address', function () {
        expect(['2001:0db8::1:0:0:1', '850..1.4'].some(isIp)).to.be.true;
      });

      it('returns false if all given values are not valid IP address', function () {
        expect(['1.2.3.', '78FF:::::::L'].some(isIp)).to.be.false;
      });
    });
  });

  describe('isIpv4()', function () {
    it('returns true if given value is a valid IPv4 address', function () {
      expect(isIpv4('198.12.3.142')).to.be.true;
    });

    it('returns false if given value is not a valid IPv4 address', function () {
      expect(isIpv4('985.12.3.4')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a valid IPv4 address', function () {
        expect(!isIpv4('102.52.47.18')).to.be.false;
      });

      it('returns true if given value is not a valid IPv4 address', function () {
        expect(!isIpv4('0..3.4')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are valid IPv4 addresses', function () {
        expect(['0.0.0.0', '201.50.198.2'].every(isIpv4)).to.be.true;
      });

      it('returns false if any given value is not a valid IPv4 address', function () {
        expect(['987.25.45.6', '125.256.10.3'].every(isIpv4)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is a valid IPv4 address', function () {
        expect(['255.255.255.255', '850..1.4'].some(isIpv4)).to.be.true;
      });

      it('returns false if all given values are not valid IPv4 address', function () {
        expect(['1.2.3.', '78FF:::::::L'].some(isIpv4)).to.be.false;
      });
    });
  });

  describe('isIpv6()', function () {
    it('returns true if given value is a valid IPv6 address', function () {
      expect(isIpv6('2001:DB8:0:0:1::1')).to.be.true;
    });

    it('returns false if given value is not a valid IPv6 address', function () {
      expect(isIpv6('985.12.3.4')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a valid IPv6 address', function () {
        expect(!isIpv6('2001:db8:0:0:1::1')).to.be.false;
      });

      it('returns true if given value is not a valid IPv6 address', function () {
        expect(!isIpv6('0..3.4')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are valid IPv6 addresses', function () {
        expect(['2001:db8::0:1:0:0:1', '1:50:198:2::1:2:8'].every(isIpv6)).to.be
          .true;
      });

      it('returns false if any given value is not a valid IPv6 address', function () {
        expect(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'].every(isIpv6)).to.be
          .false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is a valid IPv6 address', function () {
        expect(['2001:0db8::1:0:0:1', '850..1.4'].some(isIpv6)).to.be.true;
      });

      it('returns false if all given values are not valid IPv6 address', function () {
        expect(['1.2.3.', '78FF:::::::L'].some(isIpv6)).to.be.false;
      });
    });
  });

  describe('isUuid()', function () {
    it('returns true if given value is a valid UUID string', function () {
      expect(isUuid(uuid.v1())).to.be.true;
      expect(isUuid(uuid.v3('localhost', uuid.v3.URL))).to.be.true;
      expect(isUuid(uuid.v4())).to.be.true;
      expect(isUuid(uuid.v5('localhost', uuid.v5.URL))).to.be.true;
    });

    it('returns false if given value is not a valid UUID string', function () {
      expect(isUuid('foo-03566d91-04e0-4a91-b56a-d84a8925f727-bar')).to.be
        .false;
      expect(isUuid('m4ybes0m-37h1-ngl1-k3an-uuidbu7n0tt7')).to.be.false;
      expect(isUuid('985.12.3.4')).to.be.false;
      expect(isUuid('foo')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a valid UUID string', function () {
        expect(!isUuid('c7583460-b7f9-428e-b883-5eb9af17dec5')).to.be.false;
      });

      it('returns true if given value is not a valid UUID string', function () {
        expect(!isUuid('0..3.4')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are valid UUID strings', function () {
        expect(
          [
            '12d61e58-f49b-46fd-9334-884ebcd2d690',
            'c2887be6-54c0-4d0c-ad5f-3ecdbdcb7c37'
          ].every(isUuid)
        ).to.be.true;
      });

      it('returns false if any given value is not a valid UUID string', function () {
        expect(
          ['987.25.45.6', 'c2887be6-54c0-4d0c-ad5f-3ecdbdcb7c37'].every(isUuid)
        ).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is a valid UUID string', function () {
        expect(
          [
            '2001:0db8::1:0:0:1',
            '850..1.4',
            'c2887be6-54c0-4d0c-ad5f-3ecdbdcb7c37'
          ].some(isUuid)
        ).to.be.true;
      });

      it('returns false if all given values are not valid UUID string', function () {
        expect(['1.2.3.', '78FF:::::::L'].some(isUuid)).to.be.false;
      });
    });
  });

  describe('isJwt()', function () {
    it('returns true if given value is a valid JWT string', function () {
      expect(
        isJwt(
          [
            // HS256
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
            'eyJzdWIiOiJ1dWlkIiwibmFtZSI6ImZpLWlzIn0',
            'KPxCSQM35DOilazwkIrafyY_UHl1NoA_Q0PQG7DLVkc'
          ].join('.')
        )
      ).to.be.true;

      expect(
        isJwt(
          [
            // HS384
            'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9',
            'eyJzdWIiOiJ1dWlkIiwibmFtZSI6ImZpLWlzIn0',
            'Vo-c7BPjf9zoUwBxamYOdc7ubHbw_it3zNsSGCNK19Of62SNdDqOaK6OuAnxCKAW'
          ].join('.')
        )
      ).to.be.true;

      expect(
        isJwt(
          [
            // HS512
            'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
            'eyJzdWIiOiJ1dWlkIiwibmFtZSI6ImZpLWlzIn0',
            'rEraGEdMzF3_IaSyvc7PZCHiwLpu5vyLaz0ADxpL4OKDxVMKKkVrXCIvoJ_D0gd-h7SuZSJ2IMmDKN4otfjISQ'
          ].join('.')
        )
      ).to.be.true;
    });

    it('returns false if given value is not a valid JWT string', function () {
      expect(isJwt('foo-03566d91-04e0-4a91-b56a-d84a8925f727-bar')).to.be.false;
      expect(isJwt('m4ybes0m-37h1-ngl1-k3an-jwtbu7n0tt7')).to.be.false;
      expect(isJwt('985.12.3.4')).to.be.false;
      expect(isJwt('a.b.c')).to.be.false;
      expect(isJwt('foo')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a valid JWT string', function () {
        expect(
          !isJwt(
            [
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              'eyJzdWIiOiJ1dWlkIiwibmFtZSI6ImZpLWlzIn0',
              'KPxCSQM35DOilazwkIrafyY_UHl1NoA_Q0PQG7DLVkc'
            ].join('.')
          )
        ).to.be.false;
      });

      it('returns true if given value is not a valid JWT string', function () {
        expect(!isJwt('0..3.4')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are valid JWT strings', function () {
        expect(
          [
            [
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              'eyJzdWIiOiJ1dWlkIiwibmFtZSI6ImZpLWlzIn0',
              'KPxCSQM35DOilazwkIrafyY_UHl1NoA_Q0PQG7DLVkc'
            ].join('.'),
            [
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              'eyJzdWIiOiJ1dWlkIiwibmFtZSI6InRlc3RzIn0',
              'ppemJPAWk_s6t1yWhPAfW4C8nV98b1KpidvM-5I2sAI'
            ].join('.')
          ].every(isJwt)
        ).to.be.true;
      });

      it('returns false if any given value is not a valid JWT string', function () {
        expect(
          [
            '987.25.45.6',
            [
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              'eyJzdWIiOiJ1dWlkIiwibmFtZSI6InRlc3RzIn0',
              'ppemJPAWk_s6t1yWhPAfW4C8nV98b1KpidvM-5I2sAI'
            ].join('.')
          ].every(isJwt)
        ).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is a valid JWT string', function () {
        expect(
          [
            '2001:0db8::1:0:0:1',
            '850..1.4',
            [
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              'eyJzdWIiOiJ1dWlkIiwibmFtZSI6InRlc3RzIn0',
              'ppemJPAWk_s6t1yWhPAfW4C8nV98b1KpidvM-5I2sAI'
            ].join('.')
          ].some(isJwt)
        ).to.be.true;
      });

      it('returns false if all given values are not valid JWT string', function () {
        expect(['1.2.3.', '78FF:::::::L', 'a.b.c'].some(isJwt)).to.be.false;
      });
    });
  });
});
