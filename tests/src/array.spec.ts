import { expect } from 'chai';

import { isInArray, isSorted } from '../../src/array';

describe('Array', function () {
  describe('isSorted()', function () {
    it('returns true if given array is sorted', function () {
      expect(isSorted([1, 2, 3, 4, 5])).to.be.true;
    });

    it('returns false if given array is not sorted', function () {
      expect(isSorted([1, 2, 3, 5, 4])).to.be.false;
    });

    describe('not', function () {
      it('returns false if given array is sorted', function () {
        expect(!isSorted([1, 2, 3, 4, 5])).to.be.false;
      });

      it('returns true if given array is not sorted', function () {
        expect(!isSorted([1, 2, 3, 5, 4])).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given arrays are sorted', function () {
        const arr = [1, 2, 3, 4, 5];
        const brr = [5, 6, 7, 8, 9];

        expect([arr, brr].every(isSorted)).to.be.true;
      });

      it('returns false if any given array is not sorted', function () {
        const arr = [1, 2, 3, 4, 5];
        const brr = [5, 6, 7, 9, 8];

        expect([arr, brr].every(isSorted)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given array is sorted', function () {
        const arr = [1, 2, 3, 4, 5];
        const brr = [10, 6, 7, 8, 9];

        expect([arr, brr].some(isSorted)).to.be.true;
      });

      it('returns false if all given arrays are not sorted', function () {
        const arr = [6, 2, 3, 4, 5];
        const brr = [9, 5, 6, 7, 8];

        expect([arr, brr].some(isSorted)).to.be.false;
      });
    });
  });

  describe('isInArray()', function () {
    it('returns true if the item is in the array', function () {
      expect(isInArray(3, [1, 4, 6, 7, 3])).to.be.true;
    });

    it('returns false if the item is not in the array', function () {
      expect(isInArray(2, [1, 4, 6, 7, 3])).to.be.false;
    });

    describe('not', function () {
      it('returns false if the item is in the array', function () {
        expect(!isInArray(3, [1, 4, 6, 7, 3])).to.be.false;
      });

      it('returns true if the item is not in the array', function () {
        expect(!isInArray(2, [1, 4, 6, 7, 3])).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if every item is in the array', function () {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect([1, 2, 3, 4].every(val => isInArray(val, arr))).to.be.true;
      });

      it('returns false if every item is not in the array', function () {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(['a', false, null].every(val => isInArray(val, arr))).to.be
          .false;
      });
    });

    describe('some', function () {
      it('returns true if any item is in the array', function () {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect([false, 2, 'foo', {}].some(val => isInArray(val, arr))).to.be
          .true;
      });

      it('returns false if every item is not in the array', function () {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(['a', false, null].some(val => isInArray(val, arr))).to.be.false;
      });
    });
  });
});
