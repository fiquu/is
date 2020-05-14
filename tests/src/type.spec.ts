import { expect } from 'chai';

import is from '../../src';

describe('[type]', function () {
  describe('.array()', function () {
    it('returns true if passed parameter type is array', function () {
      expect(is.array([])).to.be.true;
    });

    it('returns false if passed parameter type is not array', function () {
      expect(is.array('not array')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is array', function () {
        expect(!is.array([])).to.be.false;
      });

      it('returns true if passed parameter type is not array', function () {
        expect(!is.array('')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameters types are array', function () {
        expect([[], []].every(is.array)).to.be.true;
      });

      it('returns false if any passed parameter type is not array', function () {
        expect(['', []].every(is.array)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is array', function () {
        expect([[], ''].some(is.array)).to.be.true;
      });

      it('returns false if all passed parameter types are not array', function () {
        expect([1, ''].some(is.array)).to.be.false;
      });
    });
  });

  describe('.boolean()', function () {
    it('returns true if passed parameter type is boolean', function () {
      expect(is.boolean(true)).to.be.true;
    });

    it('returns false if passed parameter type is not boolean', function () {
      expect(is.boolean('')).to.be.false;
    });

    describe('> not', function () {
      it('returns true if passed parameter type is not boolean', function () {
        expect(!is.boolean('')).to.be.true;
      });

      it('returns false if passed parameter type is boolean', function () {
        expect(!is.boolean(true)).to.be.false;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are boolean', function () {
        expect([true, false].every(is.boolean)).to.be.true;
      });

      it('returns false if passed parameter type is boolean', function () {
        expect([true, ''].every(is.boolean)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is boolean', function () {
        expect([true, false, ''].some(is.boolean)).to.be.true;
      });

      it('returns false if all passed parameter types are not boolean', function () {
        expect(['', {}, null].some(is.boolean)).to.be.false;
      });
    });
  });

  describe('.date()', function () {
    it('returns true if passed parameter type is date', function () {
      expect(is.date(new Date())).to.be.true;
    });

    it('returns false if passed parameter type is not date', function () {
      expect(is.date('')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is date', function () {
        expect(!is.date(new Date())).to.be.false;
      });

      it('returns true if passed parameter type is not date', function () {
        expect(!is.date('')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are date', function () {
        const bday = new Date('02-23-1985');

        expect([bday, new Date()].every(is.date)).to.be.true;
      });

      it('returns false if any passed parameter type is not date', function () {
        expect([new Date(), ''].every(is.date)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is date', function () {
        expect(['', new Date()].some(is.date)).to.be.true;
      });

      it('returns false if all passed parameter types are not date', function () {
        expect(['', 1, undefined].some(is.date)).to.be.false;
      });
    });
  });

  describe('.error()', function () {
    it('returns true if passed parameter type is error', function () {
      expect(is.error(new Error())).to.be.true;
    });

    it('returns false if passed parameter type is not error', function () {
      expect(is.error('')).to.be.false;
    });

    describe('not is.error', function () {
      it('returns false if passed parameter type is error', function () {
        expect(!is.error(new Error())).to.be.false;
      });

      it('returns true if passed parameter type is not error', function () {
        expect(!is.error('')).to.be.true;
      });
    });

    describe('every is.error', function () {
      it('returns true if all passed parameter types are error', function () {
        expect([new Error(), new Error()].every(is.error)).to.be.true;
      });

      it('returns false if any passed parameter type is not error', function () {
        expect([new Error(), ''].every(is.error)).to.be.false;
      });
    });

    describe('some is.error', function () {
      it('returns true if any passed parameter type is error', function () {
        expect([new Error(), new Date()].some(is.error)).to.be.true;
      });

      it('returns false if all passed parameter types are not error', function () {
        expect([1, 2, 3].some(is.error)).to.be.false;
      });
    });
  });

  describe('.func()', function () {
    it('returns true if passed parameter type is function', function () {
      expect(is.func(is.func)).to.be.true;
      expect(is.func(new Function())).to.be.true;
      expect(is.func(function () {
        // Empty.
      })).to.be.true;
      expect(is.func(() => {
        // Empty.
      })).to.be.true;
    });

    it('returns false if passed parameter type is not function', function () {
      expect(is.func('')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is function', function () {
        expect(is.func('')).to.be.false;
      });

      it('returns true if passed parameter type is not function', function () {
        expect(!is.func(is.func)).to.be.false;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are function', function () {
        expect([is.func,].every(is.func)).to.be.true;
      });

      it('returns false if any passed parameter type is not function', function () {
        expect([is.func, []].every(is.func)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is function', function () {
        expect([is.func, []].some(is.func)).to.be.true;
      });

      it('returns false if all passed parameter types are not function', function () {
        expect([2, ''].some(is.func)).to.be.false;
      });
    });
  });

  describe('.nan()', function () {
    it('returns true if passed parameter type is NaN', function () {
      expect(is.nan(NaN)).to.be.true;
    });

    it('returns false if passed parameter type is not NaN', function () {
      expect(is.nan('')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is NaN', function () {
        expect(!is.nan('')).to.be.true;
      });

      it('returns false if passed parameter type is not NaN', function () {
        expect(!is.nan(NaN)).to.be.false;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are NaN', function () {
        expect([NaN, NaN].every(is.nan)).to.be.true;
      });

      it('returns false if any passed parameter type is not NaN', function () {
        expect([NaN, ''].every(is.nan)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is NaN', function () {
        expect([NaN, NaN, ''].some(is.nan)).to.be.true;
      });

      it('returns false if all passed parameter types are not NaN', function () {
        expect(['', []].some(is.nan)).to.be.false;
      });
    });
  });

  describe('.number()', function () {
    it('returns true if passed parameter type is number', function () {
      expect(is.number(1)).to.be.true;
    });

    it('returns false if passed parameter type is not number', function () {
      expect(is.number('')).to.be.false;
    });

    it('returns false if passed parameter is NaN', function () {
      expect(is.number(NaN)).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is number', function () {
        expect(!is.number(1)).to.be.false;
      });

      it('returns true if passed parameter type is not number', function () {
        expect(!is.number('')).to.be.true;
      });

      it('returns true if passed parameter is NaN', function () {
        expect(!is.number(NaN)).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are number', function () {
        expect([1, 2].every(is.number)).to.be.true;
      });

      it('returns false if any passed parameter type is not number', function () {
        expect([1, ''].every(is.number)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is number', function () {
        expect([1, 2, NaN].some(is.number)).to.be.true;
      });

      it('returns false if all passed parameter types are not number', function () {
        expect([null, ''].some(is.number)).to.be.false;
      });
    });
  });

  describe('.object()', function () {
    it('returns true if passed parameter type is object', function () {
      expect(is.object({})).to.be.true;
    });

    it('returns false if passed parameter type is not object', function () {
      expect(is.object('')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is object', function () {
        expect(!is.object({})).to.be.false;
      });

      it('returns true if passed parameter type is not object', function () {
        expect(!is.object('')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are object', function () {
        expect([{}, {}].every(is.object)).to.be.true;
      });

      it('returns false if any passed parameter type is not object', function () {
        expect([{}, ''].every(is.object)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is object', function () {
        expect([{}, {}, ''].some(is.object)).to.be.true;
      });

      it('returns false if all passed parameter types are not object', function () {
        expect([1, 2, 3].some(is.object)).to.be.false;
      });
    });
  });

  describe('.json()', function () {
    it('returns true if passed parameter type is a json object', function () {
      expect(is.json('{ "some": "value" }')).to.be.true;
    });

    it('returns false if passed parameter type is not a json object', function () {
      expect(is.json('')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is json object', function () {
        expect(!is.json('{ "foo": "bar" }')).to.be.false;
      });

      it('returns true if passed parameter type is not json object', function () {
        expect(!is.json('')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are object', function () {
        expect(['{ "foo": "bar" }', '{ "baz": "qux" }'].every(is.json)).to.be.true;
      });

      it('returns false if any passed parameter type is not object', function () {
        expect(['{ "foo": "bar" }', 1, []].every(is.json)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is json object', function () {
        expect(['{ "foo": "bar" }', '{}', ''].some(is.json)).to.be.true;
      });

      it('returns false if all passed parameter types are not json object', function () {
        expect([1, 2, 3, ''].some(is.json)).to.be.false;
      });
    });
  });

  describe('.regexp()', function () {
    it('returns true if passed parameter type is regexp', function () {
      expect(is.regexp(/reg/)).to.be.true;
    });

    it('returns false if passed parameter type is not regexp', function () {
      expect(is.regexp('')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is regexp', function () {
        expect(!is.regexp(/reg/)).to.be.false;
      });

      it('returns true if passed parameter type is not regexp', function () {
        expect(!is.regexp('')).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are regexp', function () {
        expect([/reg/, /reg/].every(is.regexp)).to.be.true;
      });

      it('returns false if any passed parameter type is not regexp', function () {
        expect([/reg/, ''].every(is.regexp)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is regexp', function () {
        expect([/reg/, /reg/, 1].some(is.regexp)).to.be.true;
      });

      it('returns false if any passed parameter type is not regexp', function () {
        expect([1, 2].some(is.regexp)).to.be.false;
      });
    });
  });

  describe('.sameType()', function () {
    it('returns true if passed parameter types are same', function () {
      expect(is.sameType(1, 2)).to.be.true;
      expect(is.sameType('', '')).to.be.true;
      expect(is.sameType(NaN, NaN)).to.be.true;
    });

    it('returns false if passed parameter types are not same', function () {
      expect(is.sameType(1, '')).to.be.false;
      expect(is.sameType(0, NaN)).to.be.false;
      expect(is.sameType(NaN, 'wer')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter types are same', function () {
        expect(!is.sameType(1, 2)).to.be.false;
        expect(!is.sameType('', '')).to.be.false;
      });

      it('returns true if passed parameter types are not same', function () {
        expect(!is.sameType(1, '')).to.be.true;
      });
    });
  });

  describe('.char()', function () {
    it('returns true if passed parameter type is char', function () {
      expect(is.char('i')).to.be.true;
    });

    it('returns false if passed parameter type is not a char', function () {
      expect(is.char('')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is char', function () {
        expect(!is.char('i')).to.be.false;
      });

      it('returns true if passed parameter type is not char', function () {
        expect(!is.char(undefined)).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are char', function () {
        expect(['i', 's'].every(is.char)).to.be.true;
      });

      it('returns false if any passed parameter type is not char', function () {
        expect(['', 1].every(is.char)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is char', function () {
        expect(['i', 1].some(is.char)).to.be.true;
      });

      it('returns false if all passed parameter types are not char', function () {
        expect([null, 1, ''].some(is.char)).to.be.false;
      });
    });
  });

  describe('.string()', function () {
    it('returns true if passed parameter type is string', function () {
      expect(is.string('')).to.be.true;
    });

    it('returns false if passed parameter type is not string', function () {
      expect(is.string(1)).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is string', function () {
        expect(!is.string('')).to.be.false;
      });

      it('returns true if passed parameter type is not string', function () {
        expect(!is.string(1)).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are string', function () {
        expect(['', ''].every(is.string)).to.be.true;
      });

      it('returns false if any passed parameter type is not string', function () {
        expect(['', 1].every(is.string)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is string', function () {
        expect(['', 1].some(is.string)).to.be.true;
      });

      it('returns false if all passed parameter types are not string', function () {
        expect([null, 1].some(is.string)).to.be.false;
      });
    });
  });

  describe('.undef()', function () {
    it('returns true if passed parameter type is undefined or void 0', function () {
      expect(is.undef(undefined)).to.be.true;
      expect(is.undef(void 0)).to.be.true;
    });

    it('returns false if passed parameter type is not undefined or void 0', function () {
      expect(is.undef(1)).to.be.false;
    });

    describe('> not', function () {
      it('returns false if passed parameter type is undefined or void 0', function () {
        expect(!is.undef(undefined)).to.be.false;
        expect(!is.undef(void 0)).to.be.false;
      });

      it('returns true if passed parameter type is not undefined or void 0', function () {
        expect(!is.undef(1)).to.be.true;
      });
    });

    describe('> every', function () {
      it('returns true if all passed parameter types are undefined or void 0', function () {
        expect([undefined, void 0].every(is.undef)).to.be.true;
      });

      it('returns false if any passed parameter type is not undefined or void 0', function () {
        expect([undefined, void 0, 1].every(is.undef)).to.be.false;
      });
    });

    describe('> some', function () {
      it('returns true if any passed parameter type is undefined or void 0', function () {
        expect([undefined, void 0, 'foo', 1].some(is.undef)).to.be.true;
      });

      it('returns false if all passed parameter types are not undefined or void 0', function () {
        expect([null, 1].some(is.undef)).to.be.false;
      });
    });
  });
});
