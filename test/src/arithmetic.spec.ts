import { expect } from 'chai';

import is from '../../src';

describe('arithmetic checks', function () {
  describe('is.equal', function () {
    it('should return true if given two numbers are equal', function () {
      expect(is.equal(1, 1)).to.be.true;
      expect(is.equal(3, 1 + 2)).to.be.true;
    });

    it('should return false if given two numbers are not equal', function () {
      expect(is.equal(3, 3 - 1)).to.be.false;
      expect(is.equal(10, 0)).to.be.false;
    });

    it('should return true if given two strings are same', function () {
      expect(is.equal('string', 'string')).to.be.true;
    });

    it('should return false if given two strings are not same', function () {
      expect(is.equal('string', 'test2')).to.be.false;
    });

    it('should return true if given two boolean are same', function () {
      expect(is.equal(false, false)).to.be.true;
    });

    it('should return false if given two boolean are not same', function () {
      expect(is.equal(false, true)).to.be.false;
    });

    it('should return true if given two arrays are the same', function () {
      expect(is.equal(
        [
          [
            [1, 2, [3, [4, 5]]]
          ],
          [
            ['foo', ['bar']]
          ]
        ], [
          [
            [1, 2, [3, [4, 5]]]
          ],
          [
            ['foo', ['bar']]
          ]
        ]
      )).to.be.true;
    });

    it('should return false if given two arrays are not same', function () {
      expect(is.equal(
        [
          [
            [1, 2, [3, [4, 5]]]
          ],
          [
            ['foo', ['bar']]
          ]
        ], [
          [
            [1, 2,
              [
                3, [
                  {
                    a: 4, b: 5
                  }
                ]
              ]
            ]
          ],
          [
            ['foo', ['bas']]
          ]
        ]
      )).to.be.false;

      expect(is.equal(
        [
          [
            [1, 2, [3, [4, 5]]]
          ],
          [
            ['foo', ['bar']]
          ]
        ], [null]
      )).to.be.false;
    });

    it('should return true if given two objects are same', function () {
      expect(is.equal({
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      }, {
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      })).to.be.true;
    });

    it('should return false if given two objects are not same', function () {
      expect(is.equal({
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      }, {
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 2
        }
      })).to.be.false;

      expect(is.equal({
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      }, {
        foo: 'bar',
        wer: ['a', 's', 'd'],
        welp: false,
        nope: {
          wer: ['asd'],
          num: 2
        }
      })).to.be.false;

      expect(is.equal({
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      }, {
        foo: 'bar',
        wer: undefined,
        nope: {
          wer: ['asd'],
          num: 2
        }
      })).to.be.false;

      expect(is.equal({
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      }, {
        foo: 'bar',
        wasd: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 2
        }
      })).to.be.false;
    });
  });

  describe('!is.equal', function () {
    it('should return false if given two numbers are equal', function () {
      expect(!is.equal(3, 1 + 2)).to.be.false;
    });

    it('should return true if given two numbers are not equal', function () {
      expect(!is.equal(3, 2)).to.be.true;
    });

    it('should return false if given two strings are same', function () {
      expect(!is.equal('string', 'string')).to.be.false;
    });

    it('should return true if given two strings are not same', function () {
      expect(!is.equal('string', 'string too')).to.be.true;
    });

    it('should return false if given two boolean are same', function () {
      expect(!is.equal(false, false)).to.be.false;
    });

    it('should return true if given two boolean are not same', function () {
      expect(!is.equal(false, true)).to.be.true;
    });

    it('should return false if given two arrays are same', function () {
      expect(!is.equal([1, 2], [1, 2])).to.be.false;
    });

    it('should return true if given two arrays are not same', function () {
      expect(!is.equal([1, 2], [1, 3])).to.be.true;
    });

    it('should return false if given two multi-dimensional arrays are the same', function () {
      expect(!is.equal([
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ], [
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ])).to.be.false;
    });

    it('should return true if given two multi-dimensional arrays are not same', function () {
      expect(!is.equal([
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ], [
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bas']]
        ]
      ])).to.be.true;
    });

    it('should return false if given two objects are same', function () {
      expect(!is.equal({
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      }, {
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      })).to.be.false;
    });

    it('should return true if given two objects are not same', function () {
      expect(!is.equal({
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 1
        }
      }, {
        foo: 'bar',
        wer: ['a', 's', 'd'],
        nope: {
          wer: ['asd'],
          num: 2
        }
      })).to.be.true;
    });
  });

  describe('is.even', function () {
    it('should return true if given number is even', function () {
      expect(is.even(2)).to.be.true;
    });

    it('should return false if given number is not even', function () {
      expect(is.even(3)).to.be.false;
    });

    it('should return false if given number is not integer', function () {
      expect(is.even(2.5)).to.be.false;
    });
  });

  describe('!is.even', function () {
    it('should return false if given number is even', function () {
      expect(!is.even(2)).to.be.false;
    });

    it('should return true if given number is not even', function () {
      expect(!is.even(3)).to.be.true;
    });
  });

  describe('every is.even', function () {
    it('should return true if all given numbers are even', function () {
      expect([2, 4, 6].every(is.even)).to.be.true;
    });

    it('should return false if any given number is not even', function () {
      expect([2, 4, 5].every(is.even)).to.be.false;
    });
  });

  describe('some is.even', function () {
    it('should return true if any given number is even', function () {
      expect([2, 3, 5].some(is.even)).to.be.true;
    });

    it('should return false if all given numbers are not even', function () {
      expect([1, 3, 5].some(is.even)).to.be.false;
    });
  });

  describe('is.odd', function () {
    it('should return true if given number is odd', function () {
      expect(is.odd(3)).to.be.true;
    });

    it('should return false if given number is not odd', function () {
      expect(is.odd(2)).to.be.false;
    });

    it('should return false if given number is not integer', function () {
      expect(is.odd(2.5)).to.be.false;
    });
  });

  describe('!is.odd', function () {
    it('should return false if given number is odd', function () {
      expect(!is.odd(3)).to.be.false;
    });

    it('should return true if given number is not odd', function () {
      expect(!is.odd(2)).to.be.true;
    });
  });

  describe('every is.odd', function () {
    it('should return true if all given numbers are odd', function () {
      expect([1, 3, 5].every(is.odd)).to.be.true;
    });

    it('should return false if any given number is not odd', function () {
      expect([1, 3, 4].every(is.odd)).to.be.false;
    });
  });

  describe('some is.odd', function () {
    it('should return true if any given number is odd', function () {
      expect([2, 4, 5].some(is.odd)).to.be.true;
    });

    it('should return false if all given numbers are not odd', function () {
      expect([2, 4, 6].some(is.odd)).to.be.false;
    });
  });

  describe('is.positive', function () {
    it('should return true if given number is positive', function () {
      expect(is.positive(3)).to.be.true;
    });

    it('should return false if given number is not positive', function () {
      expect(is.positive(-2)).to.be.false;
    });
  });

  describe('!is.positive', function () {
    it('should return false if given number is positive', function () {
      expect(!is.positive(3)).to.be.false;
    });

    it('should return true if given number is not positive', function () {
      expect(!is.positive(-2)).to.be.true;
    });
  });

  describe('every is.positive', function () {
    it('should return true if all given numbers are positive', function () {
      expect([1, 3, 5].every(is.positive)).to.be.true;
    });

    it('should return false if any given number is not positive', function () {
      expect([1, 3, -4].every(is.positive)).to.be.false;
    });
  });

  describe('some is.positive', function () {
    it('should return true if any given number is positive', function () {
      expect([2, -4, -5].some(is.positive)).to.be.true;
    });

    it('should return false if all given numbers are not positive', function () {
      expect([-2, -4, -6].some(is.positive)).to.be.false;
    });
  });

  describe('is.negative', function () {
    it('should return true if given number is negative', function () {
      expect(is.negative(-3)).to.be.true;
    });

    it('should return false if given number is not negative', function () {
      expect(is.negative(2)).to.be.false;
    });
  });

  describe('!is.negative', function () {
    it('should return false if given number is negative', function () {
      expect(!is.negative(-3)).to.be.false;
    });

    it('should return true if given number is not negative', function () {
      expect(!is.negative(2)).to.be.true;
    });
  });

  describe('every is.negative', function () {
    it('should return true if all given numbers are negative', function () {
      expect([-1, -3, -5].every(is.negative)).to.be.true;
    });

    it('should return false if any given number is not negative', function () {
      expect([1, -3, -4].every(is.negative)).to.be.false;
    });
  });

  describe('some is.negative', function () {
    it('should return true if any given number is negative', function () {
      expect([2, 4, -5].some(is.negative)).to.be.true;
    });

    it('should return false if all given numbers are not negative', function () {
      expect([2, 4, 6].some(is.negative)).to.be.false;
    });
  });

  describe('is.above', function () {
    it('should return true if given number is above minimum value', function () {
      expect(is.above(13, 12)).to.be.true;
    });

    it('should return false if given number is not above minimum value', function () {
      expect(is.above(12, 13)).to.be.false;
    });
  });

  describe('!is.above', function () {
    it('should return false if given number is above minimum value', function () {
      expect(!is.above(13, 12)).to.be.false;
    });

    it('should return true if given number is not above minimum value', function () {
      expect(!is.above(12, 13)).to.be.true;
    });
  });

  describe('is.under', function () {
    it('should return true if given number is under maximum value', function () {
      expect(is.under(11, 12)).to.be.true;
    });

    it('should return false if given number is not under maximum value', function () {
      expect(is.under(12, 11)).to.be.false;
    });
  });

  describe('!is.under', function () {
    it('should return true if given number is under maximum value', function () {
      expect(!is.under(13, 12)).to.be.true;
    });

    it('should return false if given number is not under maximum value', function () {
      expect(!is.under(12, 13)).to.be.false;
    });
  });

  describe('is.within', function () {
    it('should return true if given number is within minimum and maximum values', function () {
      expect(is.within(10, 5, 15)).to.be.true;
    });

    it('should return false if given number is not within minimum and maximum values', function () {
      expect(is.within(20, 5, 15)).to.be.false;
    });
  });

  describe('!is.within', function () {
    it('should return false if given number is within minimum and maximum values', function () {
      expect(!is.within(10, 5, 15)).to.be.false;
    });

    it('should return true if given number is not within minimum and maximum values', function () {
      expect(!is.within(20, 5, 15)).to.be.true;
    });
  });

  describe('is.between', function () {
    it('should return true if given number is between minimum and maximum values', function () {
      expect(is.between(10, 5, 15)).to.be.true;
      expect(is.between(15, 5, 15)).to.be.true;
      expect(is.between(5, 5, 15)).to.be.true;
      expect(is.between(8, 5, 15)).to.be.true;
      expect(is.between(14.9, 5, 15)).to.be.true;
      expect(is.between(5.1, 5, 15)).to.be.true;
    });

    it('should return false if given number is not between minimum and maximum values', function () {
      expect(is.between(20, 5, 15)).to.be.false;
      expect(is.between(4, 5, 15)).to.be.false;
      expect(is.between(1, 5, 15)).to.be.false;
      expect(is.between(16, 5, 15)).to.be.false;
      expect(is.between(15.1, 5, 15)).to.be.false;
      expect(is.between(4.9, 5, 15)).to.be.false;
    });
  });

  describe('!is.between', function () {
    it('should return false if given number is between minimum and maximum values', function () {
      expect(!is.between(10, 5, 15)).to.be.false;
      expect(!is.between(11, 5, 15)).to.be.false;
      expect(!is.between(12, 5, 15)).to.be.false;
      expect(!is.between(14.9, 5, 15)).to.be.false;
      expect(!is.between(5.1, 5, 15)).to.be.false;
    });

    it('should return true if given number is not between minimum and maximum values', function () {
      expect(!is.between(20, 5, 15)).to.be.true;
      expect(!is.between(1, 5, 15)).to.be.true;
      expect(!is.between(15.1, 5, 15)).to.be.true;
      expect(!is.between(4.9, 5, 15)).to.be.true;
    });
  });

  describe('is.decimal', function () {
    it('should return true if given number is decimal', function () {
      expect(is.decimal(4.2)).to.be.true;
    });

    it('should return false if given number is not decimal', function () {
      expect(is.decimal(2)).to.be.false;
    });
  });

  describe('!is.decimal', function () {
    it('should return false if given number is decimal', function () {
      expect(!is.decimal(4.2)).to.be.false;
    });

    it('should return true if given number is not decimal', function () {
      expect(!is.decimal(2)).to.be.true;
    });
  });

  describe('every is.decimal', function () {
    it('should return true if all given numbers are decimal', function () {
      expect([1.2, 3.4, 5.6].every(is.decimal)).to.be.true;
    });

    it('should return false if any given number is not decimal', function () {
      expect([1.2, 3.4, 5].every(is.decimal)).to.be.false;
    });
  });

  describe('some is.decimal', function () {
    it('should return true if any given number is decimal', function () {
      expect([1.2, 3, 5].some(is.decimal)).to.be.true;
    });

    it('should return false if all given numbers are not decimal', function () {
      expect([1, 3, 5].some(is.decimal)).to.be.false;
    });
  });

  describe('is.integer', function () {
    it('should return true if given number is integer', function () {
      expect(is.integer(4)).to.be.true;
    });

    it('should return false if given number is not integer', function () {
      expect(is.integer(2.2)).to.be.false;
    });
  });

  describe('!is.integer', function () {
    it('should return false if given number is integer', function () {
      expect(!is.integer(4)).to.be.false;
    });

    it('should return true if given number is not integer', function () {
      expect(!is.integer(2.2)).to.be.true;
    });
  });

  describe('every is.integer', function () {
    it('should return true if all given numbers are integer', function () {
      expect([1, 3, 5].every(is.integer)).to.be.true;
    });

    it('should return false if any given number is not integer', function () {
      expect([1, 3.4, 5].every(is.integer)).to.be.false;
    });
  });

  describe('some is.integer', function () {
    it('should return true if any given number is integer', function () {
      expect([1.2, 3, 5].some(is.integer)).to.be.true;
    });

    it('should return false if all given numbers are not integer', function () {
      expect([1.2, 3.4, 5.6].some(is.integer)).to.be.false;
    });
  });

  describe('is.finite', function () {
    it('should return true if given number is finite', function () {
      expect(is.finite(4)).to.be.true;
    });

    it('should return false if given number is not finite', function () {
      expect(is.finite(Infinity)).to.be.false;
    });
  });

  describe('!is.finite', function () {
    it('should return false if given number is finite', function () {
      expect(!is.finite(4)).to.be.false;
    });

    it('should return true if given number is not finite', function () {
      expect(!is.finite(Infinity)).to.be.true;
    });
  });

  describe('every is.finite', function () {
    it('should return true if all given numbers are finite', function () {
      expect([1, 2].every(is.finite)).to.be.true;
    });

    it('should return false if any given number is not finite', function () {
      expect([Infinity, -Infinity].every(is.finite)).to.be.false;
    });
  });

  describe('some is.finite', function () {
    it('should return true if any given number is finite', function () {
      expect([Infinity, 1].some(is.finite)).to.be.true;
    });

    it('should return false if all given numbers are not finite', function () {
      expect([Infinity, -Infinity].some(is.finite)).to.be.false;
    });
  });

  describe('is.infinite', function () {
    it('should return true if given number is infinite', function () {
      expect(is.infinite(Infinity)).to.be.true;
    });

    it('should return false if given number is not infinite', function () {
      expect(is.infinite(1)).to.be.false;
    });
  });

  describe('not is.infinite', function () {
    it('should return false if given number is infinite', function () {
      expect(!is.infinite(Infinity)).to.be.false;
    });

    it('should return true if given number is not infinite', function () {
      expect(!is.infinite(1)).to.be.true;
    });
  });

  describe('every is.infinite', function () {
    it('should return true if all given numbers are infinite', function () {
      expect([Infinity, -Infinity].every(is.infinite)).to.be.true;
    });

    it('should return false if any given number is not infinite', function () {
      expect([Infinity, 1].every(is.infinite)).to.be.false;
    });
  });

  describe('some is.infinite', function () {
    it('should return true if any given number is infinite', function () {
      expect([Infinity, 1].some(is.infinite)).to.be.true;
    });

    it('should return false if all given numbers are not infinite', function () {
      expect([1, -2].some(is.infinite)).to.be.false;
    });
  });
});
