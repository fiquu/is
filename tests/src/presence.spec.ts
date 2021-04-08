import { expect } from 'chai';

import {
  isEmpty,
  exists,
  isTruthy,
  isFalsy,
  isSpace
} from '../../src/presence';

describe('Presence', function () {
  describe('isEmpty()', function () {
    it('returns true if given array is empty', function () {
      expect(isEmpty([])).to.be.true;
    });

    it('returns false if given array is empty', function () {
      expect(isEmpty(['not', 'empty'])).to.be.false;
    });

    it('returns true if given object is empty', function () {
      expect(isEmpty({})).to.be.true;
    });

    it('returns true if given argument is NaN', function () {
      expect(isEmpty(NaN)).to.be.true;
    });

    it('returns true if given argument is null', function () {
      expect(isEmpty(null)).to.be.true;
    });

    it('returns true if given argument is undefined', function () {
      expect(isEmpty(undefined)).to.be.true;
    });

    it('returns false if given argument is an invalid date', function () {
      expect(isEmpty(new Date('wer'))).to.be.true;
    });

    it('returns false if given object is not empty', function () {
      expect(isEmpty({ not: 'empty' })).to.be.false;
    });

    it('returns false if given argument is a number', function () {
      expect(isEmpty(1)).to.be.false;
      expect(isEmpty(-1)).to.be.false;
      expect(isEmpty(0)).to.be.false;
    });

    it('returns false if given argument is a boolean', function () {
      expect(isEmpty(true)).to.be.false;
      expect(isEmpty(false)).to.be.false;
    });

    it('returns false if given argument is a valid date', function () {
      expect(isEmpty(new Date())).to.be.false;
    });

    it('returns false if given argument is a function', function () {
      expect(isEmpty(Boolean)).to.be.false;
      expect(isEmpty(Array)).to.be.false;
      expect(
        isEmpty(function () {
          // Empty
        })
      ).to.be.false;

      expect(
        isEmpty(() => {
          // Empty
        })
      ).to.be.false;
    });

    it('returns false if given argument is an error', function () {
      expect(isEmpty(new Error())).to.be.false;
    });

    describe('not', function () {
      it('returns false if given string is empty', function () {
        expect(!isEmpty('')).to.be.false;
      });

      it('returns true if given array is not empty', function () {
        expect(!isEmpty(['not', 'empty'])).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if given array, object and string are empty', function () {
        expect([[], '', {}].every(isEmpty)).to.be.true;
      });

      it('returns false if any given array element is not empty', function () {
        expect([['not', 'empty'], {}, '', undefined].every(isEmpty)).to.be
          .false;
      });
    });

    describe('some', function () {
      it('returns true if any of the given array, object and string are empty', function () {
        expect([[{ not: 'empty' }], '', {}].some(isEmpty)).to.be.true;
      });

      it('returns true if any given array elements is empty', function () {
        expect([['not', 'empty'], {}, '', undefined].some(isEmpty)).to.be.true;
      });
    });
  });

  describe('exists()', function () {
    it('returns false if given value is null', function () {
      expect(exists(null)).to.be.false;
    });

    it('returns false if given value is undefined', function () {
      expect(exists(undefined)).to.be.false;
    });

    it('returns true if given value is not null or undefined', function () {
      expect(exists('')).to.be.true;
    });

    describe('not', function () {
      it('returns true if given value is null', function () {
        expect(!exists(null)).to.be.true;
      });

      it('returns true if given value is undefined', function () {
        expect(!exists(undefined)).to.be.true;
      });

      it('returns false if given value is not null or undefined', function () {
        expect(!exists('')).to.be.false;
      });
    });

    describe('every', function () {
      it('returns true if all given values are existy', function () {
        expect([[], {}, '', true].every(exists)).to.be.true;
      });

      it('returns false if given any value is not existy', function () {
        expect([[], {}, '', true, undefined].every(exists)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given values are existy', function () {
        expect([undefined, {}, '', true].some(exists)).to.be.true;
      });

      it('returns false if given all values are not existy', function () {
        expect([null, undefined].some(exists)).to.be.false;
      });
    });
  });

  describe('isTruthy()', function () {
    it('returns true if given value is truthy', function () {
      expect(isTruthy('truthy')).to.be.true;
    });

    it('returns false if given value is not truthy', function () {
      expect(isTruthy(undefined)).to.be.false;
    });

    it('returns false if given value is false', function () {
      expect(isTruthy(false)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given value is truthy', function () {
        expect(!isTruthy(true)).to.be.false;
      });

      it('returns true if given value is not truthy', function () {
        expect(!isTruthy(undefined)).to.be.true;
      });

      it('returns true if given value is false', function () {
        expect(!isTruthy(false)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given values are truthy', function () {
        expect(['truthy', ['truthy'], true].every(isTruthy)).to.be.true;
      });

      it('returns false if any given value is not truthy', function () {
        expect(['truthy', undefined].every(isTruthy)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given values is truthy', function () {
        expect(['truthy', [], false].some(isTruthy)).to.be.true;
      });

      it('returns false if all given values are not truthy', function () {
        expect([false, undefined].some(isTruthy)).to.be.false;
      });
    });
  });

  describe('.falsy()', function () {
    it('returns false if given value is truthy', function () {
      expect(isFalsy('truthy')).to.be.false;
    });

    it('returns true if given value is falsy', function () {
      expect(isFalsy(undefined)).to.be.true;
    });

    it('returns true if given value is false', function () {
      expect(isFalsy(false)).to.be.true;
    });

    describe('not', function () {
      it('returns true if given value is truthy', function () {
        expect(!isFalsy(true)).to.be.true;
      });

      it('returns false if given value is falsy', function () {
        expect(!isFalsy(undefined)).to.be.false;
      });

      it('returns false if given value is false', function () {
        expect(!isFalsy(false)).to.be.false;
      });
    });

    describe('every', function () {
      it('returns true if all given values are falsy', function () {
        expect([undefined, false].every(isFalsy)).to.be.true;
      });

      it('returns false if any given value is not falsy', function () {
        expect([undefined, 'truthy'].every(isFalsy)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given values are falsy', function () {
        expect([undefined, true, 34].some(isFalsy)).to.be.true;
      });

      it('returns false if every given value is not falsy', function () {
        expect([true, 1, 'truthy'].some(isFalsy)).to.be.false;
      });
    });
  });

  describe('isSpace()', function () {
    it('returns false if given value is not string', function () {
      expect(isSpace(undefined)).to.be.false;
    });

    it('returns true if given value is space', function () {
      expect(isSpace(' ')).to.be.true;
    });

    describe('not', function () {
      it('returns true if given value is not string', function () {
        expect(!isSpace(null)).to.be.true;
      });

      it('returns false if given value is space', function () {
        expect(!isSpace(' ')).to.be.false;
      });
    });

    describe('every', function () {
      it('returns false if all given values are not space', function () {
        expect([' ', 'a'].every(isSpace)).to.be.false;
      });

      it('returns true if given values are space', function () {
        expect([' ', '\t', '\n', '\r', '\v'].every(isSpace)).to.be.true;
      });
    });

    describe('some', function () {
      it('returns true if any given values are space', function () {
        expect([' ', 'a', 'foo'].some(isSpace)).to.be.true;
      });

      it('returns false if all given values are note space', function () {
        expect(['bar', '1', undefined, null].some(isSpace)).to.be.false;
      });
    });
  });
});
