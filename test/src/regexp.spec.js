/**
 * Generates a random string.
 *
 * @returns {String} The random string.
 */
function randomString () {
  return [...new Array(2)].map(() => Math.random().toString(36).substring(2, 15)).join(' ');
}

/**
 * Encodes a values as base64 using any available method.
 *
 * @param {Mixed} val The value to encode.
 *
 * @returns {String} The encoded value.
 */
function b64 (val) {
  if (typeof Buffer === 'function') {
    return Buffer.from(val).toString('base64');
  }

  return btoa(val);
}

describe('regexp checks', function () {
  describe('is.domain', function () {
    it('should return true if given value is domain', function () {
      expect(is.domain('example.com')).to.be.true;
      expect(is.domain('subdomain.example.com')).to.be.true;
      expect(is.domain('sub.domain.example.website')).to.be.true;
    });

    it('should return false if given value is not domain', function () {
      expect(is.domain('not even a valid url')).to.be.false;
      expect(is.domain('not_a_domain')).to.be.false;
      expect(is.domain('seriously?')).to.be.false;
      expect(is.domain('#d04415')).to.be.false;
      expect(is.domain(1234)).to.be.false;
      expect(is.domain(false)).to.be.false;
    });
  });

  describe('is.not.domain', function () {
    it('should return false if given value is a domain', function () {
      expect(is.not.domain('example.com')).to.be.false;
      expect(is.not.domain('subdomain.example.com')).to.be.false;
      expect(is.not.domain('sub.domain.example.website')).to.be.false;
    });

    it('should return true if given value is not a domain', function () {
      expect(is.not.domain('not even a valid domain')).to.be.true;
      expect(is.not.domain('not_a_domain')).to.be.true;
      expect(is.not.domain('seriously?')).to.be.true;
      expect(is.not.domain('#d04415')).to.be.true;
      expect(is.not.domain(1234)).to.be.true;
      expect(is.not.domain(false)).to.be.true;
    });
  });

  describe('is.url', function () {
    it('should return true if given value is url', function () {
      expect(is.url('ftp://some.external.host.com:4444')).to.be.true;
      expect(is.url('ftp://some.external.host.com')).to.be.true;
      expect(is.url('https://www.example.com')).to.be.true;
      expect(is.url('http://www.example.com')).to.be.true;
      expect(is.url('http://localhost:8888')).to.be.true;
      expect(is.url('http://localhost')).to.be.true;
    });

    it('should return false if given value is not url', function () {
      expect(is.url('werwerwer 234gf 35g q436thj')).to.be.false;
      expect(is.url('https://not url dot com')).to.be.false;
      expect(is.url('http://not url dot com')).to.be.false;
      expect(is.url('ftp://not url dot com')).to.be.false;
      expect(is.url(() => { })).to.be.false;
      expect(is.url(false)).to.be.false;
      expect(is.url(1)).to.be.false;
    });
  });

  describe('is.not.url', function () {
    it('should return false if given value is url', function () {
      expect(is.not.url('http://www.example.com')).to.be.false;
    });

    it('should return true if given value is not url', function () {
      expect(is.not.url('http://not url dot com')).to.be.true;
      expect(is.not.url(1)).to.be.true;
    });
  });

  describe('is.all.url', function () {
    it('should return true if all given values are url', function () {
      expect(is.all.url('http://www.example.com', 'http://www.example2.com')).to.be.true;
      expect(is.all.url(['http://www.example.com', 'http://www.example2.com'])).to.be.true;
    });

    it('should return false if any given value is not url', function () {
      expect(is.all.url('http://www.example.com', 1)).to.be.false;
      expect(is.all.url(['http://www.example.com', 1])).to.be.false;
    });
  });

  describe('is.any.url', function () {
    it('should return true if any given value is url', function () {
      expect(is.any.url('http://www.example.com', 1)).to.be.true;
      expect(is.any.url(['http://www.example.com', 1])).to.be.true;
    });

    it('should return false if all given values are not url', function () {
      expect(is.any.url(1, 2)).to.be.false;
      expect(is.any.url([1, 2])).to.be.false;
    });
  });

  describe('is.email', function () {
    it('should return true if given value is email', function () {
      expect(is.email('test@example.com')).to.be.true;
      expect(is.email('test@example.com.ar')).to.be.true;
      expect(is.email('teíǹñst@example.cl')).to.be.true;
      expect(is.email('tést@example.com')).to.be.true;
      expect(is.email('téśt@example.co.uk')).to.be.true;
      expect(is.email('im`-téśt@example.co.uk')).to.be.true;
    });

    it('should return false if given value is not email', function () {
      expect(is.email('im`-téśt@test')).to.be.false;
      expect(is.email('test@test')).to.be.false;
    });
  });

  describe('is.not.email', function () {
    it('should return false if given value is email', function () {
      expect(is.not.email('test@example.com')).to.be.false;
    });

    it('should return true if given value is not email', function () {
      expect(is.not.email('test@test')).to.be.true;
    });
  });

  describe('is.all.email', function () {
    it('should return true if all given values are email', function () {
      expect(is.all.email('test@example.com', 'test@example2.com')).to.be.true;
      expect(is.all.email(['test@example.com', 'test@example2.com'])).to.be.true;
    });

    it('should return false if any given value is not email', function () {
      expect(is.all.email('test@example.com', 'test@test')).to.be.false;
      expect(is.all.email(['test@example.com', 'test@test'])).to.be.false;
    });
  });

  describe('is.any.email', function () {
    it('should return true if any given value is email', function () {
      expect(is.any.email('test@example.com', 'test@test')).to.be.true;
      expect(is.any.email(['test@example.com', 'test@test'])).to.be.true;
    });

    it('should return false if all given values are not email', function () {
      expect(is.any.email('test@test', '.com')).to.be.false;
      expect(is.any.email(['test@test', '.com'])).to.be.false;
    });
  });

  describe('is.creditCard', function () {
    it('should return true if given value is credit card', function () {
      expect(is.creditCard(378282246310005)).to.be.true;
    });

    it('should return false if given value is not credit card', function () {
      expect(is.creditCard(123)).to.be.false;
    });
  });

  describe('is.not.creditCard', function () {
    it('should return false if given value is credit card', function () {
      expect(is.not.creditCard(378282246310005)).to.be.false;
    });

    it('should return true if given value is not credit card', function () {
      expect(is.not.creditCard(123)).to.be.true;
    });
  });

  describe('is.all.creditCard', function () {
    it('should return true if all given values are credit card', function () {
      expect(is.all.creditCard(378282246310005, 371449635398431)).to.be.true;
      expect(is.all.creditCard([378282246310005, 371449635398431])).to.be.true;
    });

    it('should return false if any given value is not credit card', function () {
      expect(is.all.creditCard(378282246310005, 123)).to.be.false;
      expect(is.all.creditCard([378282246310005, 123])).to.be.false;
    });
  });

  describe('is.any.creditCard', function () {
    it('should return true if any given value is credit card', function () {
      expect(is.any.creditCard(378282246310005, 123)).to.be.true;
      expect(is.any.creditCard([378282246310005, 123])).to.be.true;
    });

    it('should return false if all given values are not credit card', function () {
      expect(is.any.creditCard(123, 456)).to.be.false;
      expect(is.any.creditCard([123, 456])).to.be.false;
    });
  });

  describe('is.alphaNumeric', function () {
    it('should return true if given value is alpha numeric', function () {
      expect(is.alphaNumeric('abc123')).to.be.true;
    });

    it('should return false if given value is not alpha numeric', function () {
      expect(is.alphaNumeric('*?')).to.be.false;
    });
  });

  describe('is.not.alphaNumeric', function () {
    it('should return false if given value is alpha numeric', function () {
      expect(is.not.alphaNumeric('abc123')).to.be.false;
    });

    it('should return true if given value is not alpha numeric', function () {
      expect(is.not.alphaNumeric('&%!')).to.be.true;
    });
  });

  describe('is.all.alphaNumeric', function () {
    it('should return true if all given values are alpha numeric', function () {
      expect(is.all.alphaNumeric(123, 'abc123')).to.be.true;
      expect(is.all.alphaNumeric([123, 'abc123'])).to.be.true;
    });

    it('should return false if any given value is not alpha numeric', function () {
      expect(is.all.alphaNumeric(123, '/(')).to.be.false;
      expect(is.all.alphaNumeric([123, '/('])).to.be.false;
    });
  });

  describe('is.any.alphaNumeric', function () {
    it('should return true if any given value is alpha numeric', function () {
      expect(is.any.alphaNumeric(123, 123)).to.be.true;
      expect(is.any.alphaNumeric([123, 123])).to.be.true;
    });

    it('should return false if all given values are not alpha numeric', function () {
      expect(is.any.alphaNumeric('=', '=')).to.be.false;
      expect(is.any.alphaNumeric(['=', '='])).to.be.false;
    });
  });

  // Time String
  describe('is.timeString', function () {
    it('should return true if given value is time string', function () {
      expect(is.timeString('13:45:30')).to.be.true;
    });

    it('should return false if given value is not time string', function () {
      expect(is.timeString('12:12:90')).to.be.false;
    });
  });

  describe('is.not.timeString', function () {
    it('should return false if given value is time string', function () {
      expect(is.not.timeString('13:45:30')).to.be.false;
    });

    it('should return true if given value is not time string', function () {
      expect(is.not.timeString('12:12:90')).to.be.true;
    });
  });

  describe('is.all.timeString', function () {
    it('should return true if all given values are time string', function () {
      expect(is.all.timeString('13:45:30', '10:15:20')).to.be.true;
      expect(is.all.timeString(['13:45:30', '10:15:20'])).to.be.true;
    });

    it('should return false if any given value is not time string', function () {
      expect(is.all.timeString('13:45:30', '12:12:90')).to.be.false;
      expect(is.all.timeString(['13:45:30', '12:12:90'])).to.be.false;
    });
  });

  describe('is.any.timeString', function () {
    it('should return true if any given value is time string', function () {
      expect(is.any.timeString('13:45:30', '12:12:90')).to.be.true;
      expect(is.any.timeString(['13:45:30', '12:12:90'])).to.be.true;
    });

    it('should return false if all given values are not time string', function () {
      expect(is.any.timeString('12:12:90', '12:12:66')).to.be.false;
      expect(is.any.timeString(['12:12:90', '12:12:66'])).to.be.false;
    });
  });

  // Date String
  describe('is.dateString', function () {
    it('should return true if given value is date string', function () {
      expect(is.dateString('11/11/2011')).to.be.true;
    });

    it('should return false if given value is not date string', function () {
      expect(is.dateString('1')).to.be.false;
    });
  });

  describe('is.not.dateString', function () {
    it('should return false if given value is date string', function () {
      expect(is.not.dateString('11/11/2011')).to.be.false;
    });

    it('should return true if given value is not date string', function () {
      expect(is.not.dateString('1/5')).to.be.true;
    });
  });

  describe('is.all.dateString', function () {
    it('should return true if all given values are date string', function () {
      expect(is.all.dateString('11/11/2011', '10/21/2012')).to.be.true;
      expect(is.all.dateString(['11/11/2011', '10/21/2012'])).to.be.true;
    });

    it('should return false if any given value is not dateString', function () {
      expect(is.all.dateString('11/11/2011', '1')).to.be.false;
      expect(is.all.dateString(['11/11/2011', '1'])).to.be.false;
    });
  });

  describe('is.any.dateString', function () {
    it('should return true if any given value is date string', function () {
      expect(is.any.dateString('11/11/2011', '1')).to.be.true;
      expect(is.any.dateString(['11/11/2011', '1'])).to.be.true;
    });

    it('should return false if all given values are not date string', function () {
      expect(is.any.dateString('11/11/1', '11/11/1')).to.be.false;
      expect(is.any.dateString(['11/11/1', '11/11/1'])).to.be.false;
    });
  });

  // Base64 String
  describe('is.base64', function () {
    it('should return true if given value is a base64 string', function () {
      const base64 = b64(randomString());
      expect(is.base64(base64)).to.be.true;
    });

    it('should return false if given value is not a base64 string', function () {
      expect(is.base64('nope...')).to.be.false;
      expect(is.base64(false)).to.be.false;
      expect(is.base64(123)).to.be.false;
      expect(is.base64('1')).to.be.false;
    });
  });

  describe('is.not.base64', function () {
    it('should return false if given value is a base64 string', function () {
      const base64 = b64('a nice string');
      expect(is.not.base64(base64)).to.be.false;
    });

    it('should return true if given value is not a base64 string', function () {
      expect(is.not.base64('nope...')).to.be.true;
      expect(is.not.base64(false)).to.be.true;
      expect(is.not.base64(123)).to.be.true;
      expect(is.not.base64('1')).to.be.true;
    });
  });

  describe('is.all.base64', function () {
    it('should return true if all given values are base64 strings', function () {
      const strings = [...new Array(100)].map(() => {
        return b64(randomString());
      });

      expect(is.all.base64(...strings)).to.be.true;
      expect(is.all.base64(strings)).to.be.true;
    });

    it('should return false if any given value is not a base64 string', function () {
      const strings = [...new Array(100)].map(() => randomString());

      expect(is.any.base64(...strings)).to.be.false;
      expect(is.any.base64(strings)).to.be.false;
    });
  });

  describe('is.any.base64', function () {
    it('should return true if any given value is a base64 string', function () {
      const strings = [...new Array(100)].map(() => {
        if (Math.random() >= 0.5) {
          return b64(randomString());
        }

        return randomString();
      });

      // Ensure there's at least one base64 value
      strings.push(b64(randomString()));

      expect(is.any.base64(...strings)).to.be.true;
      expect(is.any.base64(strings)).to.be.true;
    });

    it('should return false if all given values are not a base64 string', function () {
      const strings = new Array(100).map(() => randomString());

      expect(is.all.base64(...strings)).to.be.false;
      expect(is.all.base64(strings)).to.be.false;
    });
  });

  // USE Zip Code
  describe('is.usZipCode', function () {
    it('should return true if given value is US zip code', function () {
      expect(is.usZipCode('02201-1020')).to.be.true;
    });

    it('should return false if given value is not US zip code', function () {
      expect(is.usZipCode('1')).to.be.false;
    });
  });

  describe('is.not.usZipCode', function () {
    it('should return false if given value is US zip code', function () {
      expect(is.not.usZipCode('02201-1020')).to.be.false;
    });

    it('should return true if given value is not US zip code', function () {
      expect(is.not.usZipCode('1')).to.be.true;
    });
  });

  describe('is.all.usZipCode', function () {
    it('should return true if all given values are US zip code', function () {
      expect(is.all.usZipCode('02201-1020', '02201-2003')).to.be.true;
      expect(is.all.usZipCode(['02201-1020', '02201-2003'])).to.be.true;
    });

    it('should return false if any given value is not US zip code', function () {
      expect(is.all.usZipCode('02201-1020', '1')).to.be.false;
      expect(is.all.usZipCode(['02201-1020', '1'])).to.be.false;
    });
  });

  describe('is.any.usZipCode', function () {
    it('should return true if any given value is US zip code', function () {
      expect(is.any.usZipCode('02201-1020', '1')).to.be.true;
      expect(is.any.usZipCode(['02201-1020', '1'])).to.be.true;
    });

    it('should return false if all given values are not US zip code', function () {
      expect(is.any.usZipCode('1', '2')).to.be.false;
      expect(is.any.usZipCode(['1', '2'])).to.be.false;
    });
  });

  describe('is.caPostalCode', function () {
    it('should return true if given value is Canada postal code', function () {
      expect(is.caPostalCode('L8V3Y1')).to.be.true;
    });

    it('should return true if given value is Canada postal code with space', function () {
      expect(is.caPostalCode('L8V 3Y1')).to.be.true;
    });

    it('should return false if given value is not Canada postal code', function () {
      expect(is.caPostalCode('1')).to.be.false;
    });
  });

  describe('is.not.caPostalCode', function () {
    it('should return false if given value is Canada postal code', function () {
      expect(is.not.caPostalCode('L8V3Y1')).to.be.false;
    });

    it('should return true if given value is not Canada postal code', function () {
      expect(is.not.caPostalCode('1')).to.be.true;
    });
  });

  describe('is.all.caPostalCode', function () {
    it('should return true if all given values are Canada postal code', function () {
      expect(is.all.caPostalCode('L8V3Y1', 'V6Z1T0')).to.be.true;
      expect(is.all.caPostalCode(['L8V3Y1', 'V6Z1T0'])).to.be.true;
    });

    it('should return false if any given value is not Canada postal code', function () {
      expect(is.all.caPostalCode('L8V3Y1', '1')).to.be.false;
      expect(is.all.caPostalCode(['L8V3Y1', '1'])).to.be.false;
    });
  });

  describe('is.any.caPostalCode', function () {
    it('should return true if any given value is Canada postal code', function () {
      expect(is.any.caPostalCode('L8V3Y1', '1')).to.be.true;
      expect(is.any.caPostalCode(['L8V3Y1', '1'])).to.be.true;
    });

    it('should return false if all given values are not Canada postal code', function () {
      expect(is.any.caPostalCode('1', '2')).to.be.false;
      expect(is.any.caPostalCode(['1', '2'])).to.be.false;
    });
  });

  describe('is.ukPostCode', function () {
    it('should return true if given value is UK post code', function () {
      expect(is.ukPostCode('B184BJ')).to.be.true;
    });

    it('should return false if given value is not UK post code', function () {
      expect(is.ukPostCode('1')).to.be.false;
    });
  });

  describe('is.not.ukPostCode', function () {
    it('should return false if given value is UK post code', function () {
      expect(is.not.ukPostCode('B184BJ')).to.be.false;
    });

    it('should return true if given value is not UK post code', function () {
      expect(is.not.ukPostCode('1')).to.be.true;
    });
  });

  describe('is.all.ukPostCode', function () {
    it('should return true if all given values are UK post code', function () {
      expect(is.all.ukPostCode('B184BJ', 'M601NW')).to.be.true;
      expect(is.all.ukPostCode(['B184BJ', 'M601NW'])).to.be.true;
    });

    it('should return false if any given value is not UK post code', function () {
      expect(is.all.ukPostCode('B184BJ', '1')).to.be.false;
      expect(is.all.ukPostCode(['B184BJ', '1'])).to.be.false;
    });
  });

  describe('is.any.ukPostCode', function () {
    it('should return true if any given value is UK post code', function () {
      expect(is.any.ukPostCode('B184BJ', '1')).to.be.true;
      expect(is.any.ukPostCode(['B184BJ', '1'])).to.be.true;
    });

    it('should return false if all given values are not UK post code', function () {
      expect(is.any.ukPostCode('1', '2')).to.be.false;
      expect(is.any.ukPostCode(['1', '2'])).to.be.false;
    });
  });

  // NANP phone number
  describe('is.nanpPhone', function () {
    it('should return true if given value is nanpPhone', function () {
      expect(is.nanpPhone('609-555-0175')).to.be.true;
    });

    it('should return false if given value is not nanpPhone', function () {
      expect(is.nanpPhone('1')).to.be.false;
    });
  });

  describe('is.not.nanpPhone', function () {
    it('should return false if given value is nanpPhone', function () {
      expect(is.not.nanpPhone('609-555-0175')).to.be.false;
    });

    it('should return true if given value is not nanpPhone', function () {
      expect(is.not.nanpPhone('1')).to.be.true;
    });
  });

  describe('is.all.nanpPhone', function () {
    it('should return true if all given values are nanpPhone', function () {
      expect(is.all.nanpPhone('609-555-0175', '609-555-0174')).to.be.true;
      expect(is.all.nanpPhone(['609-555-0175', '609-555-0174'])).to.be.true;
    });

    it('should return false if any given value is not nanpPhone', function () {
      expect(is.all.nanpPhone('609-555-0175', '1')).to.be.false;
      expect(is.all.nanpPhone(['609-555-0175', '1'])).to.be.false;
    });
  });

  describe('is.any.nanpPhone', function () {
    it('should return true if any given value is nanpPhone', function () {
      expect(is.any.nanpPhone('609-555-0175', '1')).to.be.true;
      expect(is.any.nanpPhone(['609-555-0175', '1'])).to.be.true;
    });

    it('should return false if all given values are not nanpPhone', function () {
      expect(is.any.nanpPhone('1', '2')).to.be.false;
      expect(is.any.nanpPhone(['1', '2'])).to.be.false;
    });
  });

  // EPP phone number
  describe('is.eppPhone', function () {
    it('should return true if given value is eppPhone', function () {
      expect(is.eppPhone('+90.2322456789')).to.be.true;
    });

    it('should return false if given value is not eppPhone', function () {
      expect(is.eppPhone('1')).to.be.false;
    });
  });

  describe('is.not.eppPhone', function () {
    it('should return false if given value is eppPhone', function () {
      expect(is.not.eppPhone('+90.2322456789')).to.be.false;
    });

    it('should return true if given value is not eppPhone', function () {
      expect(is.not.eppPhone('1')).to.be.true;
    });
  });

  describe('is.all.eppPhone', function () {
    it('should return true if all given values are eppPhone', function () {
      expect(is.all.eppPhone('+90.2322456789', '+90.2322456799')).to.be.true;
      expect(is.all.eppPhone(['+90.2322456789', '+90.2322456799'])).to.be.true;
    });

    it('should return false if any given value is not eppPhone', function () {
      expect(is.all.eppPhone('+90.2322456789', '1')).to.be.false;
      expect(is.all.eppPhone(['+90.2322456789', '1'])).to.be.false;
    });
  });

  describe('is.any.eppPhone', function () {
    it('should return true if any given value is eppPhone', function () {
      expect(is.any.eppPhone('+90.2322456789', '1')).to.be.true;
      expect(is.any.eppPhone(['+90.2322456789', '1'])).to.be.true;
    });

    it('should return false if all given values are not eppPhone', function () {
      expect(is.any.eppPhone('1', '2')).to.be.false;
      expect(is.any.eppPhone(['1', '2'])).to.be.false;
    });
  });

  // International phone number
  describe('is.intPhone', function () {
    it('should return true if given value is intPhone', function () {
      expect(is.intPhone('+902322456789')).to.be.true;
    });

    it('should return false if given value is not intPhone', function () {
      expect(is.intPhone('1')).to.be.false;
    });
  });

  describe('is.not.intPhone', function () {
    it('should return false if given value is intPhone', function () {
      expect(is.not.intPhone('+902322456789')).to.be.false;
    });

    it('should return true if given value is not intPhone', function () {
      expect(is.not.intPhone('1')).to.be.true;
    });
  });

  describe('is.all.intPhone', function () {
    it('should return true if all given values are intPhone', function () {
      expect(is.all.intPhone('+902322456789', '+902322456799')).to.be.true;
      expect(is.all.intPhone(['+902322456789', '+902322456799'])).to.be.true;
    });

    it('should return false if any given value is not intPhone', function () {
      expect(is.all.intPhone('+902322456789', '1')).to.be.false;
      expect(is.all.intPhone(['+902322456789', '1'])).to.be.false;
    });
  });

  describe('is.any.intPhone', function () {
    it('should return true if any given value is intPhone', function () {
      expect(is.any.intPhone('+902322456789', '1')).to.be.true;
      expect(is.any.intPhone(['+902322456789', '1'])).to.be.true;
    });

    it('should return false if all given values are not intPhone', function () {
      expect(is.any.intPhone('1', '2')).to.be.false;
      expect(is.any.intPhone(['1', '2'])).to.be.false;
    });
  });

  // Social Security Number
  describe('is.socialSecurityNumber', function () {
    it('should return true if given value is socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('017-90-7890')).to.be.true;
    });

    it('should return false if given value is not socialSecurityNumber', function () {
      expect(is.socialSecurityNumber('1')).to.be.false;
    });
  });

  describe('is.not.socialSecurityNumber', function () {
    it('should return false if given value is socialSecurityNumber', function () {
      expect(is.not.socialSecurityNumber('017-90-7890')).to.be.false;
    });

    it('should return true if given value is not socialSecurityNumber', function () {
      expect(is.not.socialSecurityNumber('1')).to.be.true;
    });
  });

  describe('is.all.socialSecurityNumber', function () {
    it('should return true if all given values are socialSecurityNumber', function () {
      expect(is.all.socialSecurityNumber('017-90-7890', '017-90-7891')).to.be.true;
      expect(is.all.socialSecurityNumber(['017-90-7890', '017-90-7891'])).to.be.true;
    });

    it('should return false if any given value is not socialSecurityNumber', function () {
      expect(is.all.socialSecurityNumber('017-90-7890', '1')).to.be.false;
      expect(is.all.socialSecurityNumber(['017-90-7890', '1'])).to.be.false;
    });
  });

  describe('is.any.socialSecurityNumber', function () {
    it('should return true if any given value is socialSecurityNumber', function () {
      expect(is.any.socialSecurityNumber('017-90-7890', '1')).to.be.true;
      expect(is.any.socialSecurityNumber(['017-90-7890', '1'])).to.be.true;
    });

    it('should return false if all given values are not socialSecurityNumber', function () {
      expect(is.any.socialSecurityNumber('1', '2')).to.be.false;
      expect(is.any.socialSecurityNumber(['1', '2'])).to.be.false;
    });
  });

  describe('is.affirmative', function () {
    it('should return true if given value is affirmative', function () {
      expect(is.affirmative('yes')).to.be.true;
      expect(is.affirmative('yes')).to.be.true;
    });

    it('should return false if given value is not affirmative', function () {
      expect(is.affirmative('no')).to.be.false;
      expect(is.affirmative({})).to.be.false;
      expect(is.affirmative(null)).to.be.false;
    });
  });

  describe('is.not.affirmative', function () {
    it('should return false if given value is affirmative', function () {
      expect(is.not.affirmative('yes')).to.be.false;
    });

    it('should return true if given value is not affirmative', function () {
      expect(is.not.affirmative('no')).to.be.true;
    });
  });

  describe('is.all.affirmative', function () {
    it('should return true if all given values are affirmative', function () {
      expect(is.all.affirmative('yes', 'true', 1, 'okay', 'Y', true, 'ok', 'O.K.')).to.be.true;
      expect(is.all.affirmative(['yes', 'true', 1, 'okay', 'Y', true, 'ok', 'O.K.'])).to.be.true;
    });

    it('should return false if any given value is not affirmative', function () {
      expect(is.all.affirmative('yes', 'no')).to.be.false;
      expect(is.all.affirmative(['yes', 'no'])).to.be.false;
    });
  });

  describe('is.any.affirmative', function () {
    it('should return true if any given value is affirmative', function () {
      expect(is.any.affirmative('yes', 'no')).to.be.true;
      expect(is.any.affirmative(['yes', 'no'])).to.be.true;
    });

    it('should return false if all given values are not affirmative', function () {
      expect(is.any.affirmative('no', '2')).to.be.false;
      expect(is.any.affirmative(['no', '2'])).to.be.false;
    });
  });

  describe('is.hexadecimal', function () {
    it('should return true if given value is hexadecimal', function () {
      expect(is.hexadecimal('ff')).to.be.true;
    });

    it('should return false if given value is not hexadecimal', function () {
      expect(is.hexadecimal(0.287)).to.be.false;
    });
  });

  describe('is.not.hexadecimal', function () {
    it('should return false if given value is hexadecimal', function () {
      expect(is.not.hexadecimal('ffFF')).to.be.false;
    });

    it('should return true if given value is not hexadecimal', function () {
      expect(is.not.hexadecimal('nohexhere')).to.be.true;
    });
  });

  describe('is.all.hexadecimal', function () {
    it('should return true if all given values are hexadecimal', function () {
      expect(is.all.hexadecimal('bcd', 'fF0')).to.be.true;
      expect(is.all.hexadecimal(['bcd', 'fF0'])).to.be.true;
    });

    it('should return false if any given value is not hexadecimal', function () {
      expect(is.all.hexadecimal('ff', 'nohex')).to.be.false;
      expect(is.all.hexadecimal(['ff', 'nohex'])).to.be.false;
    });
  });

  describe('is.any.hexadecimal', function () {
    it('should return true if any given value is hexadecimal', function () {
      expect(is.any.hexadecimal('F5', 'nohex')).to.be.true;
      expect(is.any.hexadecimal(['F5', 'nohex'])).to.be.true;
    });

    it('should return false if all given values are not hexadecimal', function () {
      expect(is.any.hexadecimal('hex', 'none')).to.be.false;
      expect(is.any.hexadecimal(['hex', 'none'])).to.be.false;
    });
  });

  describe('is.hexColor', function () {
    it('should return true if given value is hexColor', function () {
      expect(is.hexColor('#333')).to.be.true;
    });

    it('should return false if given value is not hexColor', function () {
      expect(is.hexColor(0.287)).to.be.false;
    });
  });

  describe('is.not.hexColor', function () {
    it('should return false if given value is hexColor', function () {
      expect(is.not.hexColor('#333')).to.be.false;
    });

    it('should return true if given value is not hexColor', function () {
      expect(is.not.hexColor(0.287)).to.be.true;
    });
  });

  describe('is.all.hexColor', function () {
    it('should return true if all given values are hexColor', function () {
      expect(is.all.hexColor('#333', '#444444')).to.be.true;
      expect(is.all.hexColor(['#333', '#444444'])).to.be.true;
    });

    it('should return false if any given value is not hexColor', function () {
      expect(is.all.hexColor('#3333', 'nohex')).to.be.false;
      expect(is.all.hexColor(['#3333', 'nohex'])).to.be.false;
    });
  });

  describe('is.any.hexColor', function () {
    it('should return true if any given values is hexColor', function () {
      expect(is.any.hexColor('#333', 'nohex')).to.be.true;
      expect(is.any.hexColor(['#333', 'nohex'])).to.be.true;
    });

    it('should return false if all given values are not hexColor', function () {
      expect(is.any.hexColor('nohex', 'nohex')).to.be.false;
      expect(is.any.hexColor(['nohex', 'nohex'])).to.be.false;
    });
  });

  describe('is.ip', function () {
    it('should return true if given value is a valid IP address', function () {
      expect(is.ip('2001:db8::ff00:42:8329')).to.be.true;
      expect(is.ip('::ffff:192.168.1.1')).to.be.true;
      expect(is.ip('2001:DB8:0:0:1::1')).to.be.true;
      expect(is.ip('127.0.0.1')).to.be.true;
      expect(is.ip('ff02::1')).to.be.true;
      expect(is.ip('2::10')).to.be.true;
      expect(is.ip('::8')).to.be.true;
    });

    it('should return false if given value is not a valid IP address', function () {
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

  describe('is.not.ip', function () {
    it('should return false if given value is a valid IP address', function () {
      expect(is.not.ip('2001:db8:0:0:1::1')).to.be.false;
    });

    it('should return true if given value is not a valid IP address', function () {
      expect(is.not.ip('0..3.4')).to.be.true;
    });
  });

  describe('is.all.ip', function () {
    it('should return true if all given values are valid IP addresses', function () {
      expect(is.all.ip('2001:db8::0:1:0:0:1', '201.50.198.2')).to.be.true;
      expect(is.all.ip(['2001:db8::0:1:0:0:1', '201.50.198.2'])).to.be.true;
    });

    it('should return false if any given value is not a valid IP address', function () {
      expect(is.all.ip('987.25.45.6', 'QFFF:0:78F:9::8:8:9')).to.be.false;
      expect(is.all.ip(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'])).to.be.false;
    });
  });

  describe('is.any.ip', function () {
    it('should return true if any given value is a valid IP address', function () {
      expect(is.any.ip('2001:0db8::1:0:0:1', '850..1.4')).to.be.true;
      expect(is.any.ip(['2001:0db8::1:0:0:1', '850..1.4'])).to.be.true;
    });

    it('should return false if all given values are not valid IP address', function () {
      expect(is.any.ip('1.2.3.', '78FF:::::::L')).to.be.false;
      expect(is.any.ip(['1.2.3.', '78FF:::::::L'])).to.be.false;
    });
  });

  describe('is.ipv4', function () {
    it('should return true if given value is a valid IPv4 address', function () {
      expect(is.ipv4('198.12.3.142')).to.be.true;
    });

    it('should return false if given value is not a valid IPv4 address', function () {
      expect(is.ipv4('985.12.3.4')).to.be.false;
    });
  });

  describe('is.not.ipv4', function () {
    it('should return false if given value is a valid IPv4 address', function () {
      expect(is.not.ipv4('102.52.47.18')).to.be.false;
    });

    it('should return true if given value is not a valid IPv4 address', function () {
      expect(is.not.ipv4('0..3.4')).to.be.true;
    });
  });

  describe('is.all.ipv4', function () {
    it('should return true if all given values are valid IPv4 addresses', function () {
      expect(is.all.ipv4('0.0.0.0', '201.50.198.2')).to.be.true;
      expect(is.all.ipv4(['0.0.0.0', '201.50.198.2'])).to.be.true;
    });

    it('should return false if any given value is not a valid IPv4 address', function () {
      expect(is.all.ipv4('987.25.45.6', '125.256.10.3')).to.be.false;
      expect(is.all.ipv4(['987.25.45.6', '125.256.10.3'])).to.be.false;
    });
  });

  describe('is.any.ipv4', function () {
    it('should return true if any given value is a valid IPv4 address', function () {
      expect(is.any.ipv4('255.255.255.255', '850..1.4')).to.be.true;
      expect(is.any.ipv4(['255.255.255.255', '850..1.4'])).to.be.true;
    });

    it('should return false if all given values are not valid IPv4 address', function () {
      expect(is.any.ipv4('1.2.3.', '78FF:::::::L')).to.be.false;
      expect(is.any.ipv4(['1.2.3.', '78FF:::::::L'])).to.be.false;
    });
  });

  describe('is.ipv6', function () {
    it('should return true if given value is a valid IPv6 address', function () {
      expect(is.ipv6('2001:DB8:0:0:1::1')).to.be.true;
    });

    it('should return false if given value is not a valid IPv6 address', function () {
      expect(is.ip('985.12.3.4')).to.be.false;
    });
  });

  describe('is.not.ipv6', function () {
    it('should return false if given value is a valid IPv6 address', function () {
      expect(is.not.ipv6('2001:db8:0:0:1::1')).to.be.false;
    });

    it('should return true if given value is not a valid IPv6 address', function () {
      expect(is.not.ip('0..3.4')).to.be.true;
    });
  });

  describe('is.all.ipv6', function () {
    it('should return true if all given values are valid IPv6 addresses', function () {
      expect(is.all.ipv6('2001:db8::0:1:0:0:1', '1:50:198:2::1:2:8')).to.be.true;
      expect(is.all.ipv6(['2001:db8::0:1:0:0:1', '1:50:198:2::1:2:8'])).to.be.true;
    });

    it('should return false if any given value is not a valid IPv6 address', function () {
      expect(is.all.ipv6('987.25.45.6', 'QFFF:0:78F:9::8:8:9')).to.be.false;
      expect(is.all.ipv6(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'])).to.be.false;
    });
  });

  describe('is.any.ipv6', function () {
    it('should return true if any given value is a valid IPv6 address', function () {
      expect(is.any.ipv6('2001:0db8::1:0:0:1', '850..1.4')).to.be.true;
      expect(is.any.ipv6(['2001:0db8::1:0:0:1', '850..1.4'])).to.be.true;
    });

    it('should return false if all given values are not valid IPv6 address', function () {
      expect(is.any.ipv6('1.2.3.', '78FF:::::::L')).to.be.false;
      expect(is.any.ipv6(['1.2.3.', '78FF:::::::L'])).to.be.false;
    });
  });
});
