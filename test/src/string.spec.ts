import { expect } from 'chai';

import is from '../../src';

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
});
