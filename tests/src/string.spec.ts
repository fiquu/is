import { expect } from 'chai';
import faker from 'faker';

import is from '../../src';

/**
 * Generates a random string.
 *
 * @returns {string} The random string.
 */
function randomString(): string {
  return faker.random.alphaNumeric(
    faker.random.number({
      min: 1,
      max: 1000
    })
  );
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

describe('[string]', function () {
  describe('.upperCase()', function () {
    it('returns true if given string is uppercase', function () {
      expect(is.upperCase('TEST')).to.be.true;
    });

    it('returns false if given string is not uppercase', function () {
      expect(is.upperCase('not uppercase')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given string is uppercase', function () {
        expect(!is.upperCase('TEST')).to.be.false;
      });

      it('returns true if given string is not uppercase', function () {
        expect(!is.upperCase('not uppercase')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all given strings are uppercase', function () {
        expect(['TEST', 'FOO', 'BAR'].every(is.upperCase)).to.be.true;
      });

      it('returns false if any given string is not uppercase', function () {
        expect(['not uppercase', 'FOO', 'bar'].every(is.upperCase)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given strings is uppercase', function () {
        expect(['not uppercase', 'foo', 'BAR'].some(is.upperCase)).to.be.true;
      });

      it('returns false if all given strings are not uppercase', function () {
        expect(['not uppercase', 'foo', 'bar'].some(is.upperCase)).to.be.false;
      });
    });
  });

  describe('.lowerCase()', function () {
    it('returns true if given string is lowerCase', function () {
      expect(is.lowerCase('not uppercase')).to.be.true;
    });

    it('returns false if given string is not lowerCase', function () {
      expect(is.lowerCase('TEST')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given string is lowerCase', function () {
        expect(!is.lowerCase('lowercase')).to.be.false;
      });

      it('returns true if given string is not lowerCase', function () {
        expect(!is.lowerCase('TEST')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all given strings are lowerCase', function () {
        expect(['lowercase', 'foo', 'bar'].every(is.lowerCase)).to.be.true;
      });

      it('returns false if any given string is not lowerCase', function () {
        expect(['lowercase', 'foo', 'BAR'].every(is.lowerCase)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given strings is lowerCase', function () {
        expect(['lowercase', 'FOO', 'bar'].some(is.lowerCase)).to.be.true;
      });

      it('returns false if all given strings are not lowerCase', function () {
        expect(['TEST', 'FOO', 'BAR'].some(is.lowerCase)).to.be.false;
      });
    });
  });

  describe('.capitalized()', function () {
    it('returns true if given string is capitalized', function () {
      expect(is.capitalized('Capitalized')).to.be.true;
    });

    it('returns false if given string is not capitalized', function () {
      expect(is.capitalized('not capitalized')).to.be.false;
    });

    it('returns false if given argument is not a string', function () {
      expect(is.capitalized('a1234')).to.be.false;
    });

    it('returns true if given sentence words are capitalized', function () {
      expect(is.capitalized('Testing Is Good For You')).to.be.true;
    });

    it('returns false if given sentence words are not capitalized', function () {
      expect(is.capitalized('Testing is good for you')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given string is capitalized', function () {
        expect(!is.capitalized('Testing')).to.be.false;
      });

      it('returns true if given string is not capitalized', function () {
        expect(!is.capitalized('not capitalized')).to.be.true;
      });

      it('returns false if given sentence words are capitalized', function () {
        expect(!is.capitalized('Testing Is Good For You')).to.be.false;
      });

      it('returns false if given sentence words are not capitalized', function () {
        expect(!is.capitalized('Testing is good for you')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all given strings are capitalized', function () {
        expect(['Testing', 'Is', 'Good'].every(is.capitalized)).to.be.true;
      });

      it('returns false if any given string is not capitalized', function () {
        expect(['testing', 'Is', 'good'].every(is.capitalized)).to.be.false;
      });

      it('returns true if given all sentence words are capitalized', function () {
        expect(['Testing Is Good', 'Hypest Hype'].every(is.capitalized)).to.be.true;
      });

      it('returns false if given any sentence words are not capitalized', function () {
        expect(['Testing Is Good', 'chase and status'].every(is.capitalized)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given string is capitalized', function () {
        expect(['Testing', 'is', 'good'].some(is.capitalized)).to.be.true;
      });

      it('returns false if all given strings are not capitalized', function () {
        expect(['testing', 'is', 'good'].some(is.capitalized)).to.be.false;
      });

      it('returns true if any given sentence words are capitalized', function () {
        expect(['Test Is Good', 'hypest hype'].some(is.capitalized)).to.be.true;
      });

      it('returns false if all given sentence words are not capitalized', function () {
        expect(['test is good', 'chase and status'].some(is.capitalized)).to.be.false;
      });
    });
  });

  describe('.palindrome()', function () {
    it('returns true if given string is palindrome', function () {
      expect(is.palindrome('testset')).to.be.true;
    });

    it('returns false if given string is not palindrome', function () {
      expect(is.palindrome('not palindrome')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given string is palindrome', function () {
        expect(!is.palindrome('testset')).to.be.false;
      });

      it('returns true if given string is not palindrome', function () {
        expect(!is.palindrome('not palindrome')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all the given strings are palindrome', function () {
        expect(['testset', 'tt'].every(is.palindrome)).to.be.true;
      });

      it('returns false if any given string is not palindrome', function () {
        expect(['not palindrome', 'tt'].every(is.palindrome)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given string is palindrome', function () {
        expect(['testset', 'te'].some(is.palindrome)).to.be.true;
      });

      it('returns false if all given strings are not palindrome', function () {
        expect(['not palindrome', 'te'].some(is.palindrome)).to.be.false;
      });
    });
  });

  describe('.base64()', function () {
    it('returns true if given value is a base64 string', function () {
      const base64 = b64(randomString());

      expect(is.base64(base64)).to.be.true;
    });

    it('returns false if given value is not a base64 string', function () {
      expect(is.base64('nope...')).to.be.false;
      expect(is.base64('false')).to.be.false;
      expect(is.base64('123')).to.be.false;
      expect(is.base64(undefined)).to.be.false;
      expect(is.base64(null)).to.be.false;
      expect(is.base64('1')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given value is a base64 string', function () {
        const base64 = b64('a nice string');

        expect(!is.base64(base64)).to.be.false;
      });

      it('returns true if given value is not a base64 string', function () {
        expect(!is.base64('nope...')).to.be.true;
        expect(!is.base64('false')).to.be.true;
        expect(!is.base64('123')).to.be.true;
        expect(!is.base64('1')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all given values are base64 strings', function () {
        const strings = [...new Array(100)].map(() => b64(randomString()));

        expect(strings.every(is.base64)).to.be.true;
      });

      it('returns false if any given value is not a base64 string', function () {
        const strings = [...new Array(99)].map(() => b64(randomString()));

        strings.push(randomString());

        expect(strings.every(is.base64)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given value is a base64 string', function () {
        const strings = [...new Array(99)].map(() => {
          if (Math.random() >= 0.5) {
            return b64(randomString());
          }

          return randomString();
        });

        // Ensure there's at least one base64 value
        strings.push(b64(randomString()));

        expect(strings.some(is.base64)).to.be.true;
      });

      it('returns false if all given values are not a base64 string', function () {
        const strings = [...new Array(100)].map(() => [...new Array(2)].map(() =>
          Math.random().toString(36).substring(2, 15)).join(' ') // Not base 64 string
        );

        expect(strings.some(is.base64)).to.be.false;
      });
    });
  });
});
