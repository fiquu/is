import { expect } from 'chai';

import {
  isAbove,
  isBetween,
  isEqual,
  isEven,
  isFloat,
  isInt,
  isNegative,
  isOdd,
  isPositive,
  isUnder,
  isWithin
} from '../../src/arithmetic';

describe('Arithmetic', function () {
  describe('isEqual()', function () {
    it('returns true if given two numbers are equal', function () {
      expect(isEqual(1, 1)).to.be.true;
      expect(isEqual(3, 1 + 2)).to.be.true;
    });

    it('returns false if given two numbers are not equal', function () {
      expect(isEqual(3, 3 - 1)).to.be.false;
      expect(isEqual(10, 0)).to.be.false;
    });

    it('returns true if given two strings are same', function () {
      expect(isEqual('string', 'string')).to.be.true;
    });

    it('returns false if given two strings are not same', function () {
      expect(isEqual('string', 'test2')).to.be.false;
    });

    it('returns true if given two boolean are same', function () {
      expect(isEqual(false, false)).to.be.true;
    });

    it('returns false if given two boolean are not same', function () {
      expect(isEqual(false, true)).to.be.false;
    });

    it('returns true if given two arrays are the same', function () {
      expect(
        isEqual(
          [[[1, 2, [3, [4, 5]]]], [['foo', ['bar']]]],
          [[[1, 2, [3, [4, 5]]]], [['foo', ['bar']]]]
        )
      ).to.be.true;
    });

    it('returns false if given two arrays are not same', function () {
      expect(
        isEqual(
          [[[1, 2, [3, [4, 5]]]], [['foo', ['bar']]]],
          [[[1, 2, [3, [{ a: 4, b: 5 }]]]], [['foo', ['bar']]]]
        )
      ).to.be.false;

      expect(isEqual([[[1, 2, [3, [4, 5]]]], [['foo', ['bar']]]], [null])).to.be
        .false;
    });

    it('returns true if given two objects are same', function () {
      expect(
        isEqual(
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 1
            }
          },
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 1
            }
          }
        )
      ).to.be.true;
    });

    it('returns false if given two objects are not same', function () {
      expect(
        isEqual(
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 1
            }
          },
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 2
            }
          }
        )
      ).to.be.false;

      expect(
        isEqual(
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 1
            }
          },
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            welp: false,
            nope: {
              wer: ['asd'],
              num: 2
            }
          }
        )
      ).to.be.false;

      expect(
        isEqual(
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 1
            }
          },
          {
            foo: 'bar',
            wer: undefined,
            nope: {
              wer: ['asd'],
              num: 2
            }
          }
        )
      ).to.be.false;

      expect(
        isEqual(
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 1
            }
          },
          {
            foo: 'bar',
            baz: ['a', 's', 'd'],
            nope: {
              wer: ['asd'],
              num: 2
            }
          }
        )
      ).to.be.false;
    });

    it('returns true if given two values are equal regexes', function () {
      expect(isEqual(/abc/, /abc/)).to.be.true;
    });

    it('returns false if given two values are different regexes', function () {
      expect(isEqual(/abc/, /def/)).to.be.false;
    });

    it('returns true if given two values are not handled types', function () {
      expect(isEqual(undefined, new Error())).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given two numbers are equal', function () {
        expect(!isEqual(3, 1 + 2)).to.be.false;
      });

      it('returns true if given two numbers are not equal', function () {
        expect(!isEqual(3, 2)).to.be.true;
      });

      it('returns false if given two strings are same', function () {
        expect(!isEqual('string', 'string')).to.be.false;
      });

      it('returns true if given two strings are not same', function () {
        expect(!isEqual('string', 'string too')).to.be.true;
      });

      it('returns false if given two boolean are same', function () {
        expect(!isEqual(false, false)).to.be.false;
      });

      it('returns true if given two boolean are not same', function () {
        expect(!isEqual(false, true)).to.be.true;
      });

      it('returns false if given two arrays are same', function () {
        expect(!isEqual([1, 2], [1, 2])).to.be.false;
      });

      it('returns true if given two arrays are not same', function () {
        expect(!isEqual([1, 2], [1, 3])).to.be.true;
      });

      it('returns false if given two multi-dimensional arrays are the same', function () {
        expect(
          !isEqual(
            [[[1, 2, [3, [4, 5]]]], [['foo', ['bar']]]],
            [[[1, 2, [3, [4, 5]]]], [['foo', ['bar']]]]
          )
        ).to.be.false;
      });

      it('returns true if given two multi-dimensional arrays are not same', function () {
        expect(
          !isEqual(
            [[[1, 2, [3, [4, 5]]]], [['foo', ['bar']]]],
            [[[1, 2, [3, [4, 5]]]], [['foo', ['bas']]]]
          )
        ).to.be.true;
      });

      it('returns false if given two objects are same', function () {
        expect(
          !isEqual(
            {
              foo: 'bar',
              wer: ['a', 's', 'd'],
              nope: {
                wer: ['asd'],
                num: 1
              }
            },
            {
              foo: 'bar',
              wer: ['a', 's', 'd'],
              nope: {
                wer: ['asd'],
                num: 1
              }
            }
          )
        ).to.be.false;
      });

      it('returns true if given two objects are not same', function () {
        expect(
          !isEqual(
            {
              foo: 'bar',
              wer: ['a', 's', 'd'],
              nope: {
                wer: ['asd'],
                num: 1
              }
            },
            {
              foo: 'bar',
              wer: ['a', 's', 'd'],
              nope: {
                wer: ['asd'],
                num: 2
              }
            }
          )
        ).to.be.true;
      });
    });
  });

  describe('isEven()', function () {
    it('returns true if given number is even', function () {
      expect(isEven(2)).to.be.true;
    });

    it('returns false if given number is not even', function () {
      expect(isEven(3)).to.be.false;
    });

    it('returns false if given number is not integer', function () {
      expect(isEven(2.5)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is even', function () {
        expect(!isEven(2)).to.be.false;
      });

      it('returns true if given number is not even', function () {
        expect(!isEven(3)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given numbers are even', function () {
        expect([2, 4, 6].every(isEven)).to.be.true;
      });

      it('returns false if any given number is not even', function () {
        expect([2, 4, 5].every(isEven)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given number is even', function () {
        expect([2, 3, 5].some(isEven)).to.be.true;
      });

      it('returns false if all given numbers are not even', function () {
        expect([1, 3, 5].some(isEven)).to.be.false;
      });
    });
  });

  describe('isOdd()', function () {
    it('returns true if given number is odd', function () {
      expect(isOdd(3)).to.be.true;
    });

    it('returns false if given number is not odd', function () {
      expect(isOdd(2)).to.be.false;
    });

    it('returns false if given number is not integer', function () {
      expect(isOdd(2.5)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is odd', function () {
        expect(!isOdd(3)).to.be.false;
      });

      it('returns true if given number is not odd', function () {
        expect(!isOdd(2)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given numbers are odd', function () {
        expect([1, 3, 5].every(isOdd)).to.be.true;
      });

      it('returns false if any given number is not odd', function () {
        expect([1, 3, 4].every(isOdd)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given number is odd', function () {
        expect([2, 4, 5].some(isOdd)).to.be.true;
      });

      it('returns false if all given numbers are not odd', function () {
        expect([2, 4, 6].some(isOdd)).to.be.false;
      });
    });
  });

  describe('isPositive()', function () {
    it('returns true if given number is positive', function () {
      expect(isPositive(3)).to.be.true;
    });

    it('returns false if given number is not positive', function () {
      expect(isPositive(-2)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is positive', function () {
        expect(!isPositive(3)).to.be.false;
      });

      it('returns true if given number is not positive', function () {
        expect(!isPositive(-2)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given numbers are positive', function () {
        expect([1, 3, 5].every(isPositive)).to.be.true;
      });

      it('returns false if any given number is not positive', function () {
        expect([1, 3, -4].every(isPositive)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given number is positive', function () {
        expect([2, -4, -5].some(isPositive)).to.be.true;
      });

      it('returns false if all given numbers are not positive', function () {
        expect([-2, -4, -6].some(isPositive)).to.be.false;
      });
    });
  });

  describe('isNegative()', function () {
    it('returns true if given number is negative', function () {
      expect(isNegative(-3)).to.be.true;
    });

    it('returns false if given number is not negative', function () {
      expect(isNegative(2)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is negative', function () {
        expect(!isNegative(-3)).to.be.false;
      });

      it('returns true if given number is not negative', function () {
        expect(!isNegative(2)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given numbers are negative', function () {
        expect([-1, -3, -5].every(isNegative)).to.be.true;
      });

      it('returns false if any given number is not negative', function () {
        expect([1, -3, -4].every(isNegative)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given number is negative', function () {
        expect([2, 4, -5].some(isNegative)).to.be.true;
      });

      it('returns false if all given numbers are not negative', function () {
        expect([2, 4, 6].some(isNegative)).to.be.false;
      });
    });
  });

  describe('isAbove()', function () {
    it('returns true if given number is above minimum value', function () {
      expect(isAbove(13, 12)).to.be.true;
    });

    it('returns false if given number is not above minimum value', function () {
      expect(isAbove(12, 13)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is above minimum value', function () {
        expect(!isAbove(13, 12)).to.be.false;
      });

      it('returns true if given number is not above minimum value', function () {
        expect(!isAbove(12, 13)).to.be.true;
      });
    });
  });

  describe('isUnder()', function () {
    it('returns true if given number is under maximum value', function () {
      expect(isUnder(11, 12)).to.be.true;
    });

    it('returns false if given number is not under maximum value', function () {
      expect(isUnder(12, 11)).to.be.false;
    });

    describe('not', function () {
      it('returns true if given number is under maximum value', function () {
        expect(!isUnder(13, 12)).to.be.true;
      });

      it('returns false if given number is not under maximum value', function () {
        expect(!isUnder(12, 13)).to.be.false;
      });
    });
  });

  describe('isWithin()', function () {
    it('returns true if given number is within minimum and maximum values', function () {
      expect(isWithin(10, 5, 15)).to.be.true;
    });

    it('returns false if given number is not within minimum and maximum values', function () {
      expect(isWithin(20, 5, 15)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is within minimum and maximum values', function () {
        expect(!isWithin(10, 5, 15)).to.be.false;
      });

      it('returns true if given number is not within minimum and maximum values', function () {
        expect(!isWithin(20, 5, 15)).to.be.true;
      });
    });
  });

  describe('isBetween()', function () {
    it('returns true if given number is between minimum and maximum values', function () {
      expect(isBetween(10, 5, 15)).to.be.true;
      expect(isBetween(15, 5, 15)).to.be.true;
      expect(isBetween(5, 5, 15)).to.be.true;
      expect(isBetween(8, 5, 15)).to.be.true;
      expect(isBetween(14.9, 5, 15)).to.be.true;
      expect(isBetween(5.1, 5, 15)).to.be.true;
    });

    it('returns false if given number is not between minimum and maximum values', function () {
      expect(isBetween(20, 5, 15)).to.be.false;
      expect(isBetween(4, 5, 15)).to.be.false;
      expect(isBetween(1, 5, 15)).to.be.false;
      expect(isBetween(16, 5, 15)).to.be.false;
      expect(isBetween(15.1, 5, 15)).to.be.false;
      expect(isBetween(4.9, 5, 15)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is between minimum and maximum values', function () {
        expect(!isBetween(10, 5, 15)).to.be.false;
        expect(!isBetween(11, 5, 15)).to.be.false;
        expect(!isBetween(12, 5, 15)).to.be.false;
        expect(!isBetween(14.9, 5, 15)).to.be.false;
        expect(!isBetween(5.1, 5, 15)).to.be.false;
      });

      it('returns true if given number is not between minimum and maximum values', function () {
        expect(!isBetween(20, 5, 15)).to.be.true;
        expect(!isBetween(1, 5, 15)).to.be.true;
        expect(!isBetween(15.1, 5, 15)).to.be.true;
        expect(!isBetween(4.9, 5, 15)).to.be.true;
      });
    });
  });

  describe('isFloat()', function () {
    it('returns true if given number is decimal', function () {
      expect(isFloat(4.2)).to.be.true;
    });

    it('returns false if given number is not decimal', function () {
      expect(isFloat(2)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is decimal', function () {
        expect(!isFloat(4.2)).to.be.false;
      });

      it('returns true if given number is not decimal', function () {
        expect(!isFloat(2)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given numbers are decimal', function () {
        expect([1.2, 3.4, 5.6].every(isFloat)).to.be.true;
      });

      it('returns false if any given number is not decimal', function () {
        expect([1.2, 3.4, 5].every(isFloat)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given number is decimal', function () {
        expect([1.2, 3, 5].some(isFloat)).to.be.true;
      });

      it('returns false if all given numbers are not decimal', function () {
        expect([1, 3, 5].some(isFloat)).to.be.false;
      });
    });
  });

  describe('isInt()', function () {
    it('returns true if given number is integer', function () {
      expect(isInt(4)).to.be.true;
    });

    it('returns false if given number is not integer', function () {
      expect(isInt(2.2)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is integer', function () {
        expect(!isInt(4)).to.be.false;
      });

      it('returns true if given number is not integer', function () {
        expect(!isInt(2.2)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given numbers are integer', function () {
        expect([1, 3, 5].every(isInt)).to.be.true;
      });

      it('returns false if any given number is not integer', function () {
        expect([1, 3.4, 5].every(isInt)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given number is integer', function () {
        expect([1.2, 3, 5].some(isInt)).to.be.true;
      });

      it('returns false if all given numbers are not integer', function () {
        expect([1.2, 3.4, 5.6].some(isInt)).to.be.false;
      });
    });
  });

  describe('isFinite()', function () {
    it('returns true if given number is finite', function () {
      expect(isFinite(4)).to.be.true;
    });

    it('returns false if given number is not finite', function () {
      expect(isFinite(Infinity)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given number is finite', function () {
        expect(!isFinite(4)).to.be.false;
      });

      it('returns true if given number is not finite', function () {
        expect(!isFinite(Infinity)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given numbers are finite', function () {
        expect([1, 2].every(isFinite)).to.be.true;
      });

      it('returns false if any given number is not finite', function () {
        expect([Infinity, -Infinity].every(isFinite)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given number is finite', function () {
        expect([Infinity, 1].some(isFinite)).to.be.true;
      });

      it('returns false if all given numbers are not finite', function () {
        expect([Infinity, -Infinity].some(isFinite)).to.be.false;
      });
    });
  });
});
