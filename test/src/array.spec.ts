import { expect } from 'chai';

import is from '../../src';

describe('array checks', function () {
  describe('is.sorted', function () {
    it('should return true if given array is sorted', function () {
      expect(is.sorted([1, 2, 3, 4, 5])).to.be.true;
    });

    it('should return false if given array is not sorted', function () {
      expect(is.sorted([1, 2, 3, 5, 4])).to.be.false;
    });
  });

  describe('not is.sorted', function () {
    it('should return false if given array is sorted', function () {
      expect(!is.sorted([1, 2, 3, 4, 5])).to.be.false;
    });

    it('should return true if given array is not sorted', function () {
      expect(!is.sorted([1, 2, 3, 5, 4])).to.be.true;
    });
  });

  describe('is.all.sorted', function () {
    it('should return true if all given arrays are sorted', function () {
      const arr = [1, 2, 3, 4, 5];
      const brr = [5, 6, 7, 8, 9];

      expect([arr, brr].every(is.sorted)).to.be.true;
    });

    it('should return false if any given array is not sorted', function () {
      const arr = [1, 2, 3, 4, 5];
      const brr = [5, 6, 7, 9, 8];

      expect([arr, brr].every(is.sorted)).to.be.false;
    });
  });

  describe('is.any.sorted', function () {
    it('should return true if any given array is sorted', function () {
      const arr = [1, 2, 3, 4, 5];
      const brr = [10, 6, 7, 8, 9];

      expect([arr, brr].some(is.sorted)).to.be.true;
    });

    it('should return false if all given arrays are not sorted', function () {
      const arr = [6, 2, 3, 4, 5];
      const brr = [9, 5, 6, 7, 8];

      expect([arr, brr].some(is.sorted)).to.be.false;
    });
  });

  describe('is.inArray', function () {
    it('should return true if the item is in the array', function () {
      expect(is.inArray(3, [1, 4, 6, 7, 3])).to.be.true;
    });

    it('should return false if the item is not in the array', function () {
      expect(is.inArray(2, [1, 4, 6, 7, 3])).to.be.false;
    });
  });

  describe('is.not.inArray', function () {
    it('should return false if the item is in the array', function () {
      expect(!is.inArray(3, [1, 4, 6, 7, 3])).to.be.false;
    });

    it('should return true if the item is not in the array', function () {
      expect(!is.inArray(2, [1, 4, 6, 7, 3])).to.be.true;
    });
  });
});
