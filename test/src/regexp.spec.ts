import { expect } from 'chai';

import is from '../../src';

/**
 * Generates a random string.
 *
 * @returns {string} The random string.
 */
function randomString(): string {
  return [...new Array(2)].map(() => Math.random().toString(36).substring(2, 15)).join(' ');
}

/**
 * Encodes a values as base64 using any available method.
 *
 * @param {any} val The value to encode.
 *
 * @returns {string} The encoded value.
 */
function b64(val: any): string {
  if (typeof Buffer === 'function') {
    return Buffer.from(val).toString('base64');
  }

  return btoa(val);
}

describe('regexp', function () {
  describe('.domain()', function () {
    it('returns true if given value is domain', function () {
      expect(is.domain('example.com')).to.be.true;
      expect(is.domain('subdomain.example.com')).to.be.true;
      expect(is.domain('sub.domain.example.website')).to.be.true;
    });

    it('returns false if given value is not domain', function () {
      expect(is.domain('not even a valid url')).to.be.false;
      expect(is.domain('not_a_domain')).to.be.false;
      expect(is.domain('seriously?')).to.be.false;
      expect(is.domain('#d04415')).to.be.false;
      expect(is.domain('1234')).to.be.false;
      expect(is.domain('false')).to.be.false;
      expect(is.domain(undefined)).to.be.false;
      expect(is.domain(null)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a domain', function () {
        expect(!is.domain('example.com')).to.be.false;
        expect(!is.domain('subdomain.example.com')).to.be.false;
        expect(!is.domain('sub.domain.example.website')).to.be.false;
      });

      it('returns true if given value is not a domain', function () {
        expect(!is.domain('not even a valid domain')).to.be.true;
        expect(!is.domain('not_a_domain')).to.be.true;
        expect(!is.domain('seriously?')).to.be.true;
        expect(!is.domain('#d04415')).to.be.true;
        expect(!is.domain('1234')).to.be.true;
        expect(!is.domain('false')).to.be.true;
        expect(!is.domain(undefined)).to.be.true;
        expect(!is.domain(null)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if every value is a domain', function () {
        expect(
          ['example.com', 'google.com', 'www.domain.net', 'external.api.something.site'].every(is.domain)
        ).to.be.true;
      });

      it('returns false if any value is not a domain', function () {
        expect(
          ['example.com', [1], 'not me!', 'www.domain.net', 1234].every(is.domain)
        ).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any value is a domain', function () {
        expect(
          [1234, false, 'www.domain.net', undefined].some(is.domain)
        ).to.be.true;
      });

      it('returns false if all values are not a domain', function () {
        expect(
          [false, 'not me!', undefined, {}, 1234].some(is.domain)
        ).to.be.false;
      });
    });
  });

  describe('.url()', function () {
    it('returns true if given value is an URL', function () {
      expect(is.url('ftp://some.external.host.com:4444')).to.be.true;
      expect(is.url('ftp://some.external.host.com')).to.be.true;
      expect(is.url('https://www.example.com')).to.be.true;
      expect(is.url('http://www.example.com')).to.be.true;
      expect(is.url('http://localhost:8888')).to.be.true;
      expect(is.url('http://localhost')).to.be.true;
    });

    it('returns false if given value is not an URL', function () {
      expect(is.url('werwerwer 234gf 35g q436thj')).to.be.false;
      expect(is.url('https://not url dot com')).to.be.false;
      expect(is.url('http://not url dot com')).to.be.false;
      expect(is.url('ftp://not url dot com')).to.be.false;
      expect(is.url(undefined)).to.be.false;
      expect(is.url('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is url', function () {
        expect(!is.url('http://www.example.com')).to.be.false;
      });

      it('returns true if given value is not url', function () {
        expect(!is.url('http://not url dot com')).to.be.true;
        expect(!is.url(undefined)).to.be.true;
        expect(!is.url('1')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are url', function () {
        expect(['http://www.example.com', 'http://www.example2.com'].every(is.url)).to.be.true;
      });

      it('returns false if any given value is not url', function () {
        expect(['http://www.example.com', 1, true].every(is.url)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is url', function () {
        expect(['http://www.example.com', 1, false].some(is.url)).to.be.true;
      });

      it('returns false if all given values are not url', function () {
        expect([1, 2, ''].some(is.url)).to.be.false;
      });
    });
  });

  describe('.email()', function () {
    it('returns true if given value is an email', function () {
      expect(is.email('test@example.com')).to.be.true;
      expect(is.email('test@example.com.ar')).to.be.true;
      expect(is.email('teíǹñst@example.cl')).to.be.true;
      expect(is.email('tést@example.com')).to.be.true;
      expect(is.email('téśt@example.co.uk')).to.be.true;
      expect(is.email('im`-téśt@example.co.uk')).to.be.true;
    });

    it('returns false if given value is not an email', function () {
      expect(is.email('im`-téśt@test')).to.be.false;
      expect(is.email('test@test')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is an email', function () {
        expect(!is.email('test@example.com')).to.be.false;
      });

      it('returns true if given value is not an email', function () {
        expect(!is.email('test@test')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are email', function () {
        expect(['test@example.com', 'test@example2.com'].every(is.email)).to.be.true;
      });

      it('returns false if any given value is not email', function () {
        expect(['test@example.com', 'test@test'].every(is.email)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is email', function () {
        expect(['test@example.com', 'test@test'].some(is.email)).to.be.true;
      });

      it('returns false if all given values are not email', function () {
        expect(['test@test', '.com'].some(is.email)).to.be.false;
      });
    });
  });

  describe('.creditCard()', function () {
    it('returns true if given value is credit card', function () {
      expect(is.creditCard('378282246310005')).to.be.true;
    });

    it('returns false if given value is not credit card', function () {
      expect(is.creditCard('werfasd')).to.be.false;
      expect(is.creditCard(undefined)).to.be.false;
      expect(is.creditCard('123')).to.be.false;
      expect(is.creditCard(null)).to.be.false;
      expect(is.creditCard('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is credit card', function () {
        expect(!is.creditCard('378282246310005')).to.be.false;
      });

      it('returns true if given value is not credit card', function () {
        expect(!is.creditCard('123')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are credit card', function () {
        expect(['378282246310005', '371449635398431'].every(is.creditCard)).to.be.true;
      });

      it('returns false if any given value is not credit card', function () {
        expect(['378282246310005', '123'].every(is.creditCard)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is credit card', function () {
        expect(['378282246310005', '123', '3h56g24'].some(is.creditCard)).to.be.true;
      });

      it('returns false if all given values are not credit card', function () {
        expect(['123', 456, 'j36u4'].some(is.creditCard)).to.be.false;
      });
    });
  });

  describe('.alphaNumeric()', function () {
    it('returns true if given value is alpha numeric', function () {
      expect(is.alphaNumeric('abc123')).to.be.true;
    });

    it('returns false if given value is not alpha numeric', function () {
      expect(is.alphaNumeric('*?')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is alpha numeric', function () {
        expect(!is.alphaNumeric('abc123')).to.be.false;
      });

      it('returns true if given value is not alpha numeric', function () {
        expect(!is.alphaNumeric('&%!')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are alpha numeric', function () {
        expect([123, 'abc123'].every(is.alphaNumeric)).to.be.true;
      });

      it('returns false if any given value is not alpha numeric', function () {
        expect(['123', '/('].every(is.alphaNumeric)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is alpha numeric', function () {
        expect([123, 'abc', false].some(is.alphaNumeric)).to.be.true;
      });

      it('returns false if all given values are not alpha numeric', function () {
        expect(['=', '=', null].some(is.alphaNumeric)).to.be.false;
      });
    });
  });

  describe('.timeString()', function () {
    it('returns true if given value is time string', function () {
      expect(is.timeString('13:45:30')).to.be.true;
    });

    it('returns false if given value is not time string', function () {
      expect(is.timeString('12:12:90')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is time string', function () {
        expect(!is.timeString('13:45:30')).to.be.false;
      });

      it('returns true if given value is not time string', function () {
        expect(!is.timeString('12:12:90')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are time string', function () {
        expect(['13:45:30', '10:15:20'].every(is.timeString)).to.be.true;
      });

      it('returns false if any given value is not time string', function () {
        expect(['13:45:30', '12:12:90'].every(is.timeString)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is time string', function () {
        expect(['13:45:30', '12:12:90'].some(is.timeString)).to.be.true;
      });

      it('returns false if all given values are not time string', function () {
        expect(['12:12:90', '12:12:66'].some(is.timeString)).to.be.false;
      });
    });
  });

  describe('.dateString()', function () {
    it('returns true if given value is date string', function () {
      expect(is.dateString('11/11/2011')).to.be.true;
    });

    it('returns false if given value is not date string', function () {
      expect(is.dateString('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is date string', function () {
        expect(!is.dateString('11/11/2011')).to.be.false;
      });

      it('returns true if given value is not date string', function () {
        expect(!is.dateString('1/5')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are date string', function () {
        expect(['11/11/2011', '10/21/2012'].every(is.dateString)).to.be.true;
      });

      it('returns false if any given value is not dateString', function () {
        expect(['11/11/2011', '1'].every(is.dateString)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is date string', function () {
        expect(['11/11/2011', '1'].some(is.dateString)).to.be.true;
      });

      it('returns false if all given values are not date string', function () {
        expect(['11/11/1', '11/11/1'].some(is.dateString)).to.be.false;
      });
    });
  });

  // Base64 String
  describe('is.base64', function () {
    it('returns true if given value is a base64 string', function () {
      const base64 = b64(randomString());

      expect(is.base64(base64)).to.be.true;
    });

    it('returns false if given value is not a base64 string', function () {
      expect(is.base64('nope...')).to.be.false;
      expect(is.base64(false)).to.be.false;
      expect(is.base64(123)).to.be.false;
      expect(is.base64('1')).to.be.false;
    });
  });

  describe('not is.base64', function () {
    it('returns false if given value is a base64 string', function () {
      const base64 = b64('a nice string');

      expect(!is.base64(base64)).to.be.false;
    });

    it('returns true if given value is not a base64 string', function () {
      expect(!is.base64('nope...')).to.be.true;
      expect(!is.base64(false)).to.be.true;
      expect(!is.base64(123)).to.be.true;
      expect(!is.base64('1')).to.be.true;
    });
  });

  describe('every is.base64', function () {
    it('returns true if all given values are base64 strings', function () {
      const strings = [...new Array(100)].map(() => {
        return b64(randomString());
      });

      expect(is.base64(...strings)).to.be.true;
      expect(is.base64(strings)).to.be.true;
    });

    it('returns false if any given value is not a base64 string', function () {
      const strings = [...new Array(100)].map(() => randomString());

      expect(is.base64(...strings)).to.be.false;
      expect(is.base64(strings)).to.be.false;
    });
  });

  describe('some is.base64', function () {
    it('returns true if any given value is a base64 string', function () {
      const strings = [...new Array(100)].map(() => {
        if (Math.random() >= 0.5) {
          return b64(randomString());
        }

        return randomString();
      });

      // Ensure there's at least one base64 value
      strings.push(b64(randomString()));

      expect(is.base64(...strings)).to.be.true;
      expect(is.base64(strings)).to.be.true;
    });

    it('returns false if all given values are not a base64 string', function () {
      const strings = new Array(100).map(() => randomString());

      expect(is.base64(...strings)).to.be.false;
      expect(is.base64(strings)).to.be.false;
    });
  });

  // USE Zip Code
  describe('is.usZipCode', function () {
    it('returns true if given value is US zip code', function () {
      expect(is.usZipCode('02201-1020')).to.be.true;
    });

    it('returns false if given value is not US zip code', function () {
      expect(is.usZipCode('1')).to.be.false;
    });
  });

  describe('not is.usZipCode', function () {
    it('returns false if given value is US zip code', function () {
      expect(!is.usZipCode('02201-1020')).to.be.false;
    });

    it('returns true if given value is not US zip code', function () {
      expect(!is.usZipCode('1')).to.be.true;
    });
  });

  describe('every is.usZipCode', function () {
    it('returns true if all given values are US zip code', function () {
      expect(is.usZipCode('02201-1020', '02201-2003')).to.be.true;
      expect(is.usZipCode(['02201-1020', '02201-2003'])).to.be.true;
    });

    it('returns false if any given value is not US zip code', function () {
      expect(is.usZipCode('02201-1020', '1')).to.be.false;
      expect(is.usZipCode(['02201-1020', '1'])).to.be.false;
    });
  });

  describe('some is.usZipCode', function () {
    it('returns true if any given value is US zip code', function () {
      expect(is.usZipCode('02201-1020', '1')).to.be.true;
      expect(is.usZipCode(['02201-1020', '1'])).to.be.true;
    });

    it('returns false if all given values are not US zip code', function () {
      expect(is.usZipCode('1', '2')).to.be.false;
      expect(is.usZipCode(['1', '2'])).to.be.false;
    });
  });

  describe('is.caPostalCode', function () {
    it('returns true if given value is Canada postal code', function () {
      expect(is.caPostalCode('L8V3Y1')).to.be.true;
    });

    it('returns true if given value is Canada postal code with space', function () {
      expect(is.caPostalCode('L8V 3Y1')).to.be.true;
    });

    it('returns false if given value is not Canada postal code', function () {
      expect(is.caPostalCode('1')).to.be.false;
    });
  });

  describe('not is.caPostalCode', function () {
    it('returns false if given value is Canada postal code', function () {
      expect(!is.caPostalCode('L8V3Y1')).to.be.false;
    });

    it('returns true if given value is not Canada postal code', function () {
      expect(!is.caPostalCode('1')).to.be.true;
    });
  });

  describe('every is.caPostalCode', function () {
    it('returns true if all given values are Canada postal code', function () {
      expect(is.caPostalCode('L8V3Y1', 'V6Z1T0')).to.be.true;
      expect(is.caPostalCode(['L8V3Y1', 'V6Z1T0'])).to.be.true;
    });

    it('returns false if any given value is not Canada postal code', function () {
      expect(is.caPostalCode('L8V3Y1', '1')).to.be.false;
      expect(is.caPostalCode(['L8V3Y1', '1'])).to.be.false;
    });
  });

  describe('some is.caPostalCode', function () {
    it('returns true if any given value is Canada postal code', function () {
      expect(is.caPostalCode('L8V3Y1', '1')).to.be.true;
      expect(is.caPostalCode(['L8V3Y1', '1'])).to.be.true;
    });

    it('returns false if all given values are not Canada postal code', function () {
      expect(is.caPostalCode('1', '2')).to.be.false;
      expect(is.caPostalCode(['1', '2'])).to.be.false;
    });
  });

  describe('is.ukPostCode', function () {
    it('returns true if given value is UK post code', function () {
      expect(is.ukPostCode('B184BJ')).to.be.true;
    });

    it('returns false if given value is not UK post code', function () {
      expect(is.ukPostCode('1')).to.be.false;
    });
  });

  describe('not is.ukPostCode', function () {
    it('returns false if given value is UK post code', function () {
      expect(!is.ukPostCode('B184BJ')).to.be.false;
    });

    it('returns true if given value is not UK post code', function () {
      expect(!is.ukPostCode('1')).to.be.true;
    });
  });

  describe('every is.ukPostCode', function () {
    it('returns true if all given values are UK post code', function () {
      expect(is.ukPostCode('B184BJ', 'M601NW')).to.be.true;
      expect(is.ukPostCode(['B184BJ', 'M601NW'])).to.be.true;
    });

    it('returns false if any given value is not UK post code', function () {
      expect(is.ukPostCode('B184BJ', '1')).to.be.false;
      expect(is.ukPostCode(['B184BJ', '1'])).to.be.false;
    });
  });

  describe('some is.ukPostCode', function () {
    it('returns true if any given value is UK post code', function () {
      expect(is.ukPostCode('B184BJ', '1')).to.be.true;
      expect(is.ukPostCode(['B184BJ', '1'])).to.be.true;
    });

    it('returns false if all given values are not UK post code', function () {
      expect(is.ukPostCode('1', '2')).to.be.false;
      expect(is.ukPostCode(['1', '2'])).to.be.false;
    });
  });

  // NANP phone number
  describe('is.nanpPhone', function () {
    it('returns true if given value is nanpPhone', function () {
      expect(is.nanpPhone('609-555-0175')).to.be.true;
    });

    it('returns false if given value is not nanpPhone', function () {
      expect(is.nanpPhone('1')).to.be.false;
    });
  });

  describe('not is.nanpPhone', function () {
    it('returns false if given value is nanpPhone', function () {
      expect(!is.nanpPhone('609-555-0175')).to.be.false;
    });

    it('returns true if given value is not nanpPhone', function () {
      expect(!is.nanpPhone('1')).to.be.true;
    });
  });

  describe('every is.nanpPhone', function () {
    it('returns true if all given values are nanpPhone', function () {
      expect(is.nanpPhone('609-555-0175', '609-555-0174')).to.be.true;
      expect(is.nanpPhone(['609-555-0175', '609-555-0174'])).to.be.true;
    });

    it('returns false if any given value is not nanpPhone', function () {
      expect(is.nanpPhone('609-555-0175', '1')).to.be.false;
      expect(is.nanpPhone(['609-555-0175', '1'])).to.be.false;
    });
  });

  describe('some is.nanpPhone', function () {
    it('returns true if any given value is nanpPhone', function () {
      expect(is.nanpPhone('609-555-0175', '1')).to.be.true;
      expect(is.nanpPhone(['609-555-0175', '1'])).to.be.true;
    });

    it('returns false if all given values are not nanpPhone', function () {
      expect(is.nanpPhone('1', '2')).to.be.false;
      expect(is.nanpPhone(['1', '2'])).to.be.false;
    });
  });

  // EPP phone number
  describe('is.eppPhone', function () {
    it('returns true if given value is eppPhone', function () {
      expect(is.eppPhone('+90.2322456789')).to.be.true;
    });

    it('returns false if given value is not eppPhone', function () {
      expect(is.eppPhone('1')).to.be.false;
    });
  });

  describe('not is.eppPhone', function () {
    it('returns false if given value is eppPhone', function () {
      expect(!is.eppPhone('+90.2322456789')).to.be.false;
    });

    it('returns true if given value is not eppPhone', function () {
      expect(!is.eppPhone('1')).to.be.true;
    });
  });

  describe('every is.eppPhone', function () {
    it('returns true if all given values are eppPhone', function () {
      expect(is.eppPhone('+90.2322456789', '+90.2322456799')).to.be.true;
      expect(is.eppPhone(['+90.2322456789', '+90.2322456799'])).to.be.true;
    });

    it('returns false if any given value is not eppPhone', function () {
      expect(is.eppPhone('+90.2322456789', '1')).to.be.false;
      expect(is.eppPhone(['+90.2322456789', '1'])).to.be.false;
    });
  });

  describe('some is.eppPhone', function () {
    it('returns true if any given value is eppPhone', function () {
      expect(is.eppPhone('+90.2322456789', '1')).to.be.true;
      expect(is.eppPhone(['+90.2322456789', '1'])).to.be.true;
    });

    it('returns false if all given values are not eppPhone', function () {
      expect(is.eppPhone('1', '2')).to.be.false;
      expect(is.eppPhone(['1', '2'])).to.be.false;
    });
  });

  // International phone number
  describe('is.intPhone', function () {
    it('returns true if given value is intPhone', function () {
      expect(is.intPhone('+902322456789')).to.be.true;
    });

    it('returns false if given value is not intPhone', function () {
      expect(is.intPhone('1')).to.be.false;
    });
  });

  describe('not is.intPhone', function () {
    it('returns false if given value is intPhone', function () {
      expect(!is.intPhone('+902322456789')).to.be.false;
    });

    it('returns true if given value is not intPhone', function () {
      expect(!is.intPhone('1')).to.be.true;
    });
  });

  describe('every is.intPhone', function () {
    it('returns true if all given values are intPhone', function () {
      expect(is.intPhone('+902322456789', '+902322456799')).to.be.true;
      expect(is.intPhone(['+902322456789', '+902322456799'])).to.be.true;
    });

    it('returns false if any given value is not intPhone', function () {
      expect(is.intPhone('+902322456789', '1')).to.be.false;
      expect(is.intPhone(['+902322456789', '1'])).to.be.false;
    });
  });

  describe('some is.intPhone', function () {
    it('returns true if any given value is intPhone', function () {
      expect(is.intPhone('+902322456789', '1')).to.be.true;
      expect(is.intPhone(['+902322456789', '1'])).to.be.true;
    });

    it('returns false if all given values are not intPhone', function () {
      expect(is.intPhone('1', '2')).to.be.false;
      expect(is.intPhone(['1', '2'])).to.be.false;
    });
  });

  // Social Security Number
  describe('is.socialSecurityNumber', function () {
    it('returns true if given value is socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('017-90-7890')).to.be.true;
    });

    it('returns false if given value is not socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('1')).to.be.false;
    });
  });

  describe('not is.socialSecurityNumber', function () {
    it('returns false if given value is socialSecurityNumber', function () {
      expect(!is.socialSecurityNumber('017-90-7890')).to.be.false;
    });

    it('returns true if given value is not socialSecurityNumber', function () {
      expect(!is.socialSecurityNumber('1')).to.be.true;
    });
  });

  describe('every is.socialSecurityNumber', function () {
    it('returns true if all given values are socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('017-90-7890', '017-90-7891')).to.be.true;
      expect(is.socialSecurityNumber(['017-90-7890', '017-90-7891'])).to.be.true;
    });

    it('returns false if any given value is not socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('017-90-7890', '1')).to.be.false;
      expect(is.socialSecurityNumber(['017-90-7890', '1'])).to.be.false;
    });
  });

  describe('some is.socialSecurityNumber', function () {
    it('returns true if any given value is socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('017-90-7890', '1')).to.be.true;
      expect(is.socialSecurityNumber(['017-90-7890', '1'])).to.be.true;
    });

    it('returns false if all given values are not socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('1', '2')).to.be.false;
      expect(is.socialSecurityNumber(['1', '2'])).to.be.false;
    });
  });

  describe('is.affirmative', function () {
    it('returns true if given value is affirmative', function () {
      expect(is.affirmative('yes')).to.be.true;
      expect(is.affirmative('yes')).to.be.true;
    });

    it('returns false if given value is not affirmative', function () {
      expect(is.affirmative('no')).to.be.false;
      expect(is.affirmative({})).to.be.false;
      expect(is.affirmative(null)).to.be.false;
    });
  });

  describe('not is.affirmative', function () {
    it('returns false if given value is affirmative', function () {
      expect(!is.affirmative('yes')).to.be.false;
    });

    it('returns true if given value is not affirmative', function () {
      expect(!is.affirmative('no')).to.be.true;
    });
  });

  describe('every is.affirmative', function () {
    it('returns true if all given values are affirmative', function () {
      expect(is.affirmative('yes', 'true', 1, 'okay', 'Y', true, 'ok', 'O.K.')).to.be.true;
      expect(is.affirmative(['yes', 'true', 1, 'okay', 'Y', true, 'ok', 'O.K.'])).to.be.true;
    });

    it('returns false if any given value is not affirmative', function () {
      expect(is.affirmative('yes', 'no')).to.be.false;
      expect(is.affirmative(['yes', 'no'])).to.be.false;
    });
  });

  describe('some is.affirmative', function () {
    it('returns true if any given value is affirmative', function () {
      expect(is.affirmative('yes', 'no')).to.be.true;
      expect(is.affirmative(['yes', 'no'])).to.be.true;
    });

    it('returns false if all given values are not affirmative', function () {
      expect(is.affirmative('no', '2')).to.be.false;
      expect(is.affirmative(['no', '2'])).to.be.false;
    });
  });

  describe('is.hexadecimal', function () {
    it('returns true if given value is hexadecimal', function () {
      expect(is.hexadecimal('ff')).to.be.true;
    });

    it('returns false if given value is not hexadecimal', function () {
      expect(is.hexadecimal(0.287)).to.be.false;
    });
  });

  describe('not is.hexadecimal', function () {
    it('returns false if given value is hexadecimal', function () {
      expect(!is.hexadecimal('ffFF')).to.be.false;
    });

    it('returns true if given value is not hexadecimal', function () {
      expect(!is.hexadecimal('nohexhere')).to.be.true;
    });
  });

  describe('every is.hexadecimal', function () {
    it('returns true if all given values are hexadecimal', function () {
      expect(is.hexadecimal('bcd', 'fF0')).to.be.true;
      expect(is.hexadecimal(['bcd', 'fF0'])).to.be.true;
    });

    it('returns false if any given value is not hexadecimal', function () {
      expect(is.hexadecimal('ff', 'nohex')).to.be.false;
      expect(is.hexadecimal(['ff', 'nohex'])).to.be.false;
    });
  });

  describe('some is.hexadecimal', function () {
    it('returns true if any given value is hexadecimal', function () {
      expect(is.hexadecimal('F5', 'nohex')).to.be.true;
      expect(is.hexadecimal(['F5', 'nohex'])).to.be.true;
    });

    it('returns false if all given values are not hexadecimal', function () {
      expect(is.hexadecimal('hex', 'none')).to.be.false;
      expect(is.hexadecimal(['hex', 'none'])).to.be.false;
    });
  });

  describe('is.hexColor', function () {
    it('returns true if given value is hexColor', function () {
      expect(is.hexColor('#333')).to.be.true;
    });

    it('returns false if given value is not hexColor', function () {
      expect(is.hexColor(0.287)).to.be.false;
    });
  });

  describe('not is.hexColor', function () {
    it('returns false if given value is hexColor', function () {
      expect(!is.hexColor('#333')).to.be.false;
    });

    it('returns true if given value is not hexColor', function () {
      expect(!is.hexColor(0.287)).to.be.true;
    });
  });

  describe('every is.hexColor', function () {
    it('returns true if all given values are hexColor', function () {
      expect(is.hexColor('#333', '#444444')).to.be.true;
      expect(is.hexColor(['#333', '#444444'])).to.be.true;
    });

    it('returns false if any given value is not hexColor', function () {
      expect(is.hexColor('#3333', 'nohex')).to.be.false;
      expect(is.hexColor(['#3333', 'nohex'])).to.be.false;
    });
  });

  describe('some is.hexColor', function () {
    it('returns true if any given values is hexColor', function () {
      expect(is.hexColor('#333', 'nohex')).to.be.true;
      expect(is.hexColor(['#333', 'nohex'])).to.be.true;
    });

    it('returns false if all given values are not hexColor', function () {
      expect(is.hexColor('nohex', 'nohex')).to.be.false;
      expect(is.hexColor(['nohex', 'nohex'])).to.be.false;
    });
  });

  describe('is.ip', function () {
    it('returns true if given value is a valid IP address', function () {
      expect(is.ip('2001:db8::ff00:42:8329')).to.be.true;
      expect(is.ip('::ffff:192.168.1.1')).to.be.true;
      expect(is.ip('2001:DB8:0:0:1::1')).to.be.true;
      expect(is.ip('127.0.0.1')).to.be.true;
      expect(is.ip('ff02::1')).to.be.true;
      expect(is.ip('2::10')).to.be.true;
      expect(is.ip('::8')).to.be.true;
    });

    it('returns false if given value is not a valid IP address', function () {
      expect(is.ip('2001:DB8:0:0:WERWER1::1')).to.be.false;
      expect(is.ip('http://www.example.com')).to.be.false;
      expect(is.ip('http://example.com')).to.be.false;
      expect(is.ip('2001::::42:8329')).to.be.false;
      expect(is.ip('www.example.com')).to.be.false;
      expect(is.ip('example.com')).to.be.false;
      expect(is.ip('985.12.3.4')).to.be.false;
      expect(is.ip('localhost')).to.be.false;
    });
  });

  describe('not is.ip', function () {
    it('returns false if given value is a valid IP address', function () {
      expect(!is.ip('2001:db8:0:0:1::1')).to.be.false;
    });

    it('returns true if given value is not a valid IP address', function () {
      expect(!is.ip('0..3.4')).to.be.true;
    });
  });

  describe('every is.ip', function () {
    it('returns true if all given values are valid IP addresses', function () {
      expect(is.ip('2001:db8::0:1:0:0:1', '201.50.198.2')).to.be.true;
      expect(is.ip(['2001:db8::0:1:0:0:1', '201.50.198.2'])).to.be.true;
    });

    it('returns false if any given value is not a valid IP address', function () {
      expect(is.ip('987.25.45.6', 'QFFF:0:78F:9::8:8:9')).to.be.false;
      expect(is.ip(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'])).to.be.false;
    });
  });

  describe('some is.ip', function () {
    it('returns true if any given value is a valid IP address', function () {
      expect(is.ip('2001:0db8::1:0:0:1', '850..1.4')).to.be.true;
      expect(is.ip(['2001:0db8::1:0:0:1', '850..1.4'])).to.be.true;
    });

    it('returns false if all given values are not valid IP address', function () {
      expect(is.ip('1.2.3.', '78FF:::::::L')).to.be.false;
      expect(is.ip(['1.2.3.', '78FF:::::::L'])).to.be.false;
    });
  });

  describe('is.ipv4', function () {
    it('returns true if given value is a valid IPv4 address', function () {
      expect(is.ipv4('198.12.3.142')).to.be.true;
    });

    it('returns false if given value is not a valid IPv4 address', function () {
      expect(is.ipv4('985.12.3.4')).to.be.false;
    });
  });

  describe('not is.ipv4', function () {
    it('returns false if given value is a valid IPv4 address', function () {
      expect(!is.ipv4('102.52.47.18')).to.be.false;
    });

    it('returns true if given value is not a valid IPv4 address', function () {
      expect(!is.ipv4('0..3.4')).to.be.true;
    });
  });

  describe('every is.ipv4', function () {
    it('returns true if all given values are valid IPv4 addresses', function () {
      expect(is.ipv4('0.0.0.0', '201.50.198.2')).to.be.true;
      expect(is.ipv4(['0.0.0.0', '201.50.198.2'])).to.be.true;
    });

    it('returns false if any given value is not a valid IPv4 address', function () {
      expect(is.ipv4('987.25.45.6', '125.256.10.3')).to.be.false;
      expect(is.ipv4(['987.25.45.6', '125.256.10.3'])).to.be.false;
    });
  });

  describe('some is.ipv4', function () {
    it('returns true if any given value is a valid IPv4 address', function () {
      expect(is.ipv4('255.255.255.255', '850..1.4')).to.be.true;
      expect(is.ipv4(['255.255.255.255', '850..1.4'])).to.be.true;
    });

    it('returns false if all given values are not valid IPv4 address', function () {
      expect(is.ipv4('1.2.3.', '78FF:::::::L')).to.be.false;
      expect(is.ipv4(['1.2.3.', '78FF:::::::L'])).to.be.false;
    });
  });

  describe('is.ipv6', function () {
    it('returns true if given value is a valid IPv6 address', function () {
      expect(is.ipv6('2001:DB8:0:0:1::1')).to.be.true;
    });

    it('returns false if given value is not a valid IPv6 address', function () {
      expect(is.ip('985.12.3.4')).to.be.false;
    });
  });

  describe('not is.ipv6', function () {
    it('returns false if given value is a valid IPv6 address', function () {
      expect(!is.ipv6('2001:db8:0:0:1::1')).to.be.false;
    });

    it('returns true if given value is not a valid IPv6 address', function () {
      expect(!is.ip('0..3.4')).to.be.true;
    });
  });

  describe('every is.ipv6', function () {
    it('returns true if all given values are valid IPv6 addresses', function () {
      expect(is.ipv6('2001:db8::0:1:0:0:1', '1:50:198:2::1:2:8')).to.be.true;
      expect(is.ipv6(['2001:db8::0:1:0:0:1', '1:50:198:2::1:2:8'])).to.be.true;
    });

    it('returns false if any given value is not a valid IPv6 address', function () {
      expect(is.ipv6('987.25.45.6', 'QFFF:0:78F:9::8:8:9')).to.be.false;
      expect(is.ipv6(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'])).to.be.false;
    });
  });

  describe('some is.ipv6', function () {
    it('returns true if any given value is a valid IPv6 address', function () {
      expect(is.ipv6('2001:0db8::1:0:0:1', '850..1.4')).to.be.true;
      expect(is.ipv6(['2001:0db8::1:0:0:1', '850..1.4'])).to.be.true;
    });

    it('returns false if all given values are not valid IPv6 address', function () {
      expect(is.ipv6('1.2.3.', '78FF:::::::L')).to.be.false;
      expect(is.ipv6(['1.2.3.', '78FF:::::::L'])).to.be.false;
    });
  });
});
