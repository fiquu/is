import { expect } from 'chai';

import is from '../../src';

describe('[presence]', function () {
  describe('.empty()', function () {
    it('returns true if given array is empty', function () {
      expect(is.empty([])).to.be.true;
    });

    it('returns false if given array is empty', function () {
      expect(is.empty(['> not', 'empty'])).to.be.false;
    });

    it('returns true if given object is empty', function () {
      expect(is.empty({})).to.be.true;
    });

    it('returns true if given argument is NaN', function () {
      expect(is.empty(NaN)).to.be.true;
    });

    it('returns true if given argument is null', function () {
      expect(is.empty(null)).to.be.true;
    });

    it('returns true if given argument is undefined', function () {
      expect(is.empty(undefined)).to.be.true;
    });

    it('returns false if given argument is an invalid date', function () {
      expect(is.empty(new Date('wer'))).to.be.true;
    });

    it('returns false if given object is not empty', function () {
      expect(is.empty({ not: 'empty' })).to.be.false;
    });

    it('returns false if given argument is a number', function () {
      expect(is.empty(1)).to.be.false;
      expect(is.empty(-1)).to.be.false;
      expect(is.empty(0)).to.be.false;
    });

    it('returns false if given argument is a boolean', function () {
      expect(is.empty(true)).to.be.false;
      expect(is.empty(false)).to.be.false;
    });

    it('returns false if given argument is a valid date', function () {
      expect(is.empty(new Date())).to.be.false;
    });

    it('returns false if given argument is a function', function () {
      expect(is.empty(Boolean)).to.be.false;
      expect(is.empty(Array)).to.be.false;
      expect(is.empty(function () {
        // Empty
      })).to.be.false;

      expect(is.empty(() => {
        // Empty
      })).to.be.false;
    });

    it('returns false if given argument is an error', function () {
      expect(is.empty(new Error())).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given string is empty', function () {
        expect(!is.empty('')).to.be.false;
      });

      it('returns true if given array is not empty', function () {
        expect(!is.empty(['> not', 'empty'])).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if given array, object and string are empty', function () {
        expect([[], '', {}].every(is.empty)).to.be.true;
      });

      it('returns false if any given array element is not empty', function () {
        expect([['> not', 'empty'], {}, '', undefined].every(is.empty)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any of the given array, object and string are empty', function () {
        expect([[{ not: 'empty' }], '', {}].some(is.empty)).to.be.true;
      });

      it('returns true if any given array elements is empty', function () {
        expect([['> not', 'empty'], {}, '', undefined].some(is.empty)).to.be.true;
      });
    });
  });

  describe('.existy()', function () {
    it('returns false if given value is null', function () {
      expect(is.existy(null)).to.be.false;
    });

    it('returns false if given value is undefined', function () {
      expect(is.existy(undefined)).to.be.false;
    });

    it('returns true if given value is not null or undefined', function () {
      expect(is.existy('')).to.be.true;
    });

    describe('> not', function () {
      it('returns true if given value is null', function () {
        expect(!is.existy(null)).to.be.true;
      });

      it('returns true if given value is undefined', function () {
        expect(!is.existy(undefined)).to.be.true;
      });

      it('returns false if given value is not null or undefined', function () {
        expect(!is.existy('')).to.be.false;
      });
    });

    describe('> every', function () {
      it('returns true if all given values are existy', function () {
        expect([[], {}, '', true].every(is.existy)).to.be.true;
      });

      it('returns false if given any value is not existy', function () {
        expect([[], {}, '', true, undefined].every(is.existy)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given values are existy', function () {
        expect([undefined, {}, '', true].some(is.existy)).to.be.true;
      });

      it('returns false if given all values are not existy', function () {
        expect([null, undefined].some(is.existy)).to.be.false;
      });
    });
  });

  describe('.truthy()', function () {
    it('returns true if given value is truthy', function () {
      expect(is.truthy('truthy')).to.be.true;
    });

    it('returns false if given value is not truthy', function () {
      expect(is.truthy(undefined)).to.be.false;
    });

    it('returns false if given value is false', function () {
      expect(is.truthy(false)).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given value is truthy', function () {
        expect(!is.truthy(true)).to.be.false;
      });

      it('returns true if given value is not truthy', function () {
        expect(!is.truthy(undefined)).to.be.true;
      });

      it('returns true if given value is false', function () {
        expect(!is.truthy(false)).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all given values are truthy', function () {
        expect(['truthy', ['truthy'], true].every(is.truthy)).to.be.true;
      });

      it('returns false if any given value is not truthy', function () {
        expect(['truthy', undefined].every(is.truthy)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given values is truthy', function () {
        expect(['truthy', [], false].some(is.truthy)).to.be.true;
      });

      it('returns false if all given values are not truthy', function () {
        expect([false, undefined].some(is.truthy)).to.be.false;
      });
    });
  });

  describe('.falsy()', function () {
    it('returns false if given value is truthy', function () {
      expect(is.falsy('truthy')).to.be.false;
    });

    it('returns true if given value is falsy', function () {
      expect(is.falsy(undefined)).to.be.true;
    });

    it('returns true if given value is false', function () {
      expect(is.falsy(false)).to.be.true;
    });

    describe('> not', function () {
      it('returns true if given value is truthy', function () {
        expect(!is.falsy(true)).to.be.true;
      });

      it('returns false if given value is falsy', function () {
        expect(!is.falsy(undefined)).to.be.false;
      });

      it('returns false if given value is false', function () {
        expect(!is.falsy(false)).to.be.false;
      });
    });

    describe('> every', function () {
      it('returns true if all given values are falsy', function () {
        expect([undefined, false].every(is.falsy)).to.be.true;
      });

      it('returns false if any given value is not falsy', function () {
        expect([undefined, 'truthy'].every(is.falsy)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any given values are falsy', function () {
        expect([undefined, true, 34].some(is.falsy)).to.be.true;
      });

      it('returns false if every given value is not falsy', function () {
        expect([true, 1, 'truthy'].some(is.falsy)).to.be.false;
      });
    });
  });

  describe('.space()', function () {
    it('returns false if given value is not string', function () {
      expect(is.space(undefined)).to.be.false;
    });

    it('returns true if given value is space', function () {
      expect(is.space(' ')).to.be.true;
    });

    describe('> not', function () {
      it('returns true if given value is not string', function () {
        expect(!is.space(null)).to.be.true;
      });

      it('returns false if given value is space', function () {
        expect(!is.space(' ')).to.be.false;
      });
    });

    describe('> every', function () {
      it('returns false if all given values are not space', function () {
        expect([' ', 'a'].every(is.space)).to.be.false;
      });

      it('returns true if given values are space', function () {
        expect([' ', '\t', '\n', '\r', '\v'].every(is.space)).to.be.true;
      });
    });

    describe('> some', function () {
      it('returns true if any given values are space', function () {
        expect([' ', 'a', 'foo'].some(is.space)).to.be.true;
      });

      it('returns false if all given values are note space', function () {
        expect(['bar', '1', undefined, null].some(is.space)).to.be.false;
      });
    });
  });
});
