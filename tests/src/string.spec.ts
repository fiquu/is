import { expect } from 'chai';
import faker from 'faker';

import {
  isBase64,
  isCapitalized,
  isLowerCase,
  isPalindrome,
  isUpperCase,
  isJson
} from '../../src/string';

/**
 * Generates a random string.
 *
 * @returns {string} The random string.
 */
function randomString(): string {
  return faker.random.alphaNumeric(
    faker.datatype.number({
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

describe('String', function () {
  describe('isUpperCase()', function () {
    it('returns true if given string is uppercase', function () {
      expect(isUpperCase('TEST')).to.be.true;
    });

    it('returns false if given string is not uppercase', function () {
      expect(isUpperCase('not uppercase')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given string is uppercase', function () {
        expect(!isUpperCase('TEST')).to.be.false;
      });

      it('returns true if given string is not uppercase', function () {
        expect(!isUpperCase('not uppercase')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given strings are uppercase', function () {
        expect(['TEST', 'FOO', 'BAR'].every(isUpperCase)).to.be.true;
      });

      it('returns false if any given string is not uppercase', function () {
        expect(['not uppercase', 'FOO', 'bar'].every(isUpperCase)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given strings is uppercase', function () {
        expect(['not uppercase', 'foo', 'BAR'].some(isUpperCase)).to.be.true;
      });

      it('returns false if all given strings are not uppercase', function () {
        expect(['not uppercase', 'foo', 'bar'].some(isUpperCase)).to.be.false;
      });
    });
  });

  describe('isLowerCase()', function () {
    it('returns true if given string is lowerCase', function () {
      expect(isLowerCase('not uppercase')).to.be.true;
    });

    it('returns false if given string is not lowerCase', function () {
      expect(isLowerCase('TEST')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given string is lowerCase', function () {
        expect(!isLowerCase('lowercase')).to.be.false;
      });

      it('returns true if given string is not lowerCase', function () {
        expect(!isLowerCase('TEST')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given strings are lowerCase', function () {
        expect(['lowercase', 'foo', 'bar'].every(isLowerCase)).to.be.true;
      });

      it('returns false if any given string is not lowerCase', function () {
        expect(['lowercase', 'foo', 'BAR'].every(isLowerCase)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given strings is lowerCase', function () {
        expect(['lowercase', 'FOO', 'bar'].some(isLowerCase)).to.be.true;
      });

      it('returns false if all given strings are not lowerCase', function () {
        expect(['TEST', 'FOO', 'BAR'].some(isLowerCase)).to.be.false;
      });
    });
  });

  describe('isCapitalized()', function () {
    it('returns true if given string is capitalized', function () {
      expect(isCapitalized('Capitalized')).to.be.true;
    });

    it('returns false if given string is not capitalized', function () {
      expect(isCapitalized('not capitalized')).to.be.false;
    });

    it('returns false if given argument is not a string', function () {
      expect(isCapitalized('a1234')).to.be.false;
    });

    it('returns true if given sentence words are capitalized', function () {
      expect(isCapitalized('Testing Is Good For You')).to.be.true;
    });

    it('returns false if given sentence words are not capitalized', function () {
      expect(isCapitalized('Testing is good for you')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given string is capitalized', function () {
        expect(!isCapitalized('Testing')).to.be.false;
      });

      it('returns true if given string is not capitalized', function () {
        expect(!isCapitalized('not capitalized')).to.be.true;
      });

      it('returns false if given sentence words are capitalized', function () {
        expect(!isCapitalized('Testing Is Good For You')).to.be.false;
      });

      it('returns false if given sentence words are not capitalized', function () {
        expect(!isCapitalized('Testing is good for you')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given strings are capitalized', function () {
        expect(['Testing', 'Is', 'Good'].every(isCapitalized)).to.be.true;
      });

      it('returns false if any given string is not capitalized', function () {
        expect(['testing', 'Is', 'good'].every(isCapitalized)).to.be.false;
      });

      it('returns true if given all sentence words are capitalized', function () {
        expect(['Testing Is Good', 'Hypest Hype'].every(isCapitalized)).to.be
          .true;
      });

      it('returns false if given any sentence words are not capitalized', function () {
        expect(['Testing Is Good', 'chase and status'].every(isCapitalized)).to
          .be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given string is capitalized', function () {
        expect(['Testing', 'is', 'good'].some(isCapitalized)).to.be.true;
      });

      it('returns false if all given strings are not capitalized', function () {
        expect(['testing', 'is', 'good'].some(isCapitalized)).to.be.false;
      });

      it('returns true if any given sentence words are capitalized', function () {
        expect(['Test Is Good', 'hypest hype'].some(isCapitalized)).to.be.true;
      });

      it('returns false if all given sentence words are not capitalized', function () {
        expect(['test is good', 'chase and status'].some(isCapitalized)).to.be
          .false;
      });
    });
  });

  describe('isPalindrome()', function () {
    it('returns true if given string is palindrome', function () {
      expect(isPalindrome('testset')).to.be.true;
    });

    it('returns false if given string is not palindrome', function () {
      expect(isPalindrome('not palindrome')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given string is palindrome', function () {
        expect(!isPalindrome('testset')).to.be.false;
      });

      it('returns true if given string is not palindrome', function () {
        expect(!isPalindrome('not palindrome')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all the given strings are palindrome', function () {
        expect(['testset', 'tt'].every(isPalindrome)).to.be.true;
      });

      it('returns false if any given string is not palindrome', function () {
        expect(['not palindrome', 'tt'].every(isPalindrome)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given string is palindrome', function () {
        expect(['testset', 'te'].some(isPalindrome)).to.be.true;
      });

      it('returns false if all given strings are not palindrome', function () {
        expect(['not palindrome', 'te'].some(isPalindrome)).to.be.false;
      });
    });
  });

  describe('isBase64()', function () {
    it('returns true if given value is a base64 string', function () {
      const base64 = b64(randomString());

      expect(isBase64(base64)).to.be.true;
    });

    it('returns false if given value is not a base64 string', function () {
      expect(isBase64('nope...')).to.be.false;
      expect(isBase64('false')).to.be.false;
      expect(isBase64('123')).to.be.false;
      expect(isBase64(undefined)).to.be.false;
      expect(isBase64(null)).to.be.false;
      expect(isBase64('1')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is a base64 string', function () {
        const base64 = b64('a nice string');

        expect(!isBase64(base64)).to.be.false;
      });

      it('returns true if given value is not a base64 string', function () {
        expect(!isBase64('nope...')).to.be.true;
        expect(!isBase64('false')).to.be.true;
        expect(!isBase64('123')).to.be.true;
        expect(!isBase64('1')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are base64 strings', function () {
        const strings = [...new Array(100)].map(() => b64(randomString()));

        expect(strings.every(isBase64)).to.be.true;
      });

      it('returns false if any given value is not a base64 string', function () {
        const strings = [...new Array(99)].map(() => b64(randomString()));

        strings.push(randomString());

        expect(strings.every(isBase64)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given value is a base64 string', function () {
        const strings = [...new Array(99)].map(() => {
          if (Math.random() >= 0.5) {
            return b64(randomString());
          }

          return randomString();
        });

        // Ensure there's at least one base64 value
        strings.push(b64(randomString()));

        expect(strings.some(isBase64)).to.be.true;
      });

      it('returns false if all given values are not a base64 string', function () {
        const strings = [...new Array(100)].map(
          () =>
            [...new Array(2)]
              .map(() => Math.random().toString(36).substring(2, 15))
              .join(' ') // Not base 64 string
        );

        expect(strings.some(isBase64)).to.be.false;
      });
    });
  });

  describe('isJson()', function () {
    it('returns true if passed parameter type is a json object', function () {
      expect(isJson('{ "some": "value" }')).to.be.true;
    });

    it('returns false if passed parameter type is not a json object', function () {
      expect(isJson('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is json object', function () {
        expect(!isJson('{ "foo": "bar" }')).to.be.false;
      });

      it('returns true if passed parameter type is not json object', function () {
        expect(!isJson('')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are object', function () {
        expect(['{ "foo": "bar" }', '{ "baz": "qux" }'].every(isJson)).to.be
          .true;
      });

      it('returns false if any passed parameter type is not object', function () {
        expect(['{ "foo": "bar" }', '1.', '[*]'].every(isJson)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is json object', function () {
        expect(['{ "foo": "bar" }', '{}', ''].some(isJson)).to.be.true;
      });

      it('returns false if all passed parameter types are not json object', function () {
        expect(['>1', '2,', '!3', ''].every(isJson)).to.be.false;
      });
    });
  });
});
