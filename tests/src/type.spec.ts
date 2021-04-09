import { expect } from 'chai';

import {
  isArray,
  isBoolean,
  isChar,
  isDate,
  isError,
  isFunction,
  isNan,
  isNumber,
  isObject,
  isRegExp,
  isSameType,
  isString,
  isUndefined
} from '../../src/type';

describe('Type', function () {
  describe('isArray()', function () {
    it('returns true if passed parameter type is array', function () {
      expect(isArray([])).to.be.true;
    });

    it('returns false if passed parameter type is not array', function () {
      expect(isArray('not array')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is array', function () {
        expect(!isArray([])).to.be.false;
      });

      it('returns true if passed parameter type is not array', function () {
        expect(!isArray('')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameters types are array', function () {
        expect([[], []].every(isArray)).to.be.true;
      });

      it('returns false if any passed parameter type is not array', function () {
        expect(['', []].every(isArray)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is array', function () {
        expect([[], ''].some(isArray)).to.be.true;
      });

      it('returns false if all passed parameter types are not array', function () {
        expect([1, ''].some(isArray)).to.be.false;
      });
    });
  });

  describe('isBoolean()', function () {
    it('returns true if passed parameter type is boolean', function () {
      expect(isBoolean(true)).to.be.true;
    });

    it('returns false if passed parameter type is not boolean', function () {
      expect(isBoolean('')).to.be.false;
    });

    describe('not', function () {
      it('returns true if passed parameter type is not boolean', function () {
        expect(!isBoolean('')).to.be.true;
      });

      it('returns false if passed parameter type is boolean', function () {
        expect(!isBoolean(true)).to.be.false;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are boolean', function () {
        expect([true, false].every(isBoolean)).to.be.true;
      });

      it('returns false if passed parameter type is boolean', function () {
        expect([true, ''].every(isBoolean)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is boolean', function () {
        expect([true, false, ''].some(isBoolean)).to.be.true;
      });

      it('returns false if all passed parameter types are not boolean', function () {
        expect(['', {}, null].some(isBoolean)).to.be.false;
      });
    });
  });

  describe('isDate()', function () {
    it('returns true if passed parameter type is date', function () {
      expect(isDate(new Date())).to.be.true;
    });

    it('returns false if passed parameter type is not date', function () {
      expect(isDate('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is date', function () {
        expect(!isDate(new Date())).to.be.false;
      });

      it('returns true if passed parameter type is not date', function () {
        expect(!isDate('')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are date', function () {
        const bday = new Date('02-23-1985');

        expect([bday, new Date()].every(isDate)).to.be.true;
      });

      it('returns false if any passed parameter type is not date', function () {
        expect([new Date(), ''].every(isDate)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is date', function () {
        expect(['', new Date()].some(isDate)).to.be.true;
      });

      it('returns false if all passed parameter types are not date', function () {
        expect(['', 1, undefined].some(isDate)).to.be.false;
      });
    });
  });

  describe('isError()', function () {
    it('returns true if passed parameter type is error', function () {
      expect(isError(new Error())).to.be.true;
    });

    it('returns false if passed parameter type is not error', function () {
      expect(isError('')).to.be.false;
    });

    describe('not isError', function () {
      it('returns false if passed parameter type is error', function () {
        expect(!isError(new Error())).to.be.false;
      });

      it('returns true if passed parameter type is not error', function () {
        expect(!isError('')).to.be.true;
      });
    });

    describe('every isError', function () {
      it('returns true if all passed parameter types are error', function () {
        expect([new Error(), new Error()].every(isError)).to.be.true;
      });

      it('returns false if any passed parameter type is not error', function () {
        expect([new Error(), ''].every(isError)).to.be.false;
      });
    });

    describe('some isError', function () {
      it('returns true if any passed parameter type is error', function () {
        expect([new Error(), new Date()].some(isError)).to.be.true;
      });

      it('returns false if all passed parameter types are not error', function () {
        expect([1, 2, 3].some(isError)).to.be.false;
      });
    });
  });

  describe('isFunction()', function () {
    it('returns true if passed parameter type is function', function () {
      expect(isFunction(isFunction)).to.be.true;
      expect(isFunction(new Function())).to.be.true;
      expect(
        isFunction(function () {
          // Empty.
        })
      ).to.be.true;
      expect(
        isFunction(async function () {
          // Empty.
        })
      ).to.be.true;
      expect(
        isFunction(() => {
          // Empty.
        })
      ).to.be.true;
      expect(
        isFunction(async () => {
          // Empty.
        })
      ).to.be.true;
    });

    it('returns false if passed parameter type is not function', function () {
      expect(isFunction('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is function', function () {
        expect(isFunction('')).to.be.false;
      });

      it('returns true if passed parameter type is not function', function () {
        expect(!isFunction(isFunction)).to.be.false;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are function', function () {
        expect([isFunction].every(isFunction)).to.be.true;
      });

      it('returns false if any passed parameter type is not function', function () {
        expect([isFunction, []].every(isFunction)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is function', function () {
        expect([isFunction, []].some(isFunction)).to.be.true;
      });

      it('returns false if all passed parameter types are not function', function () {
        expect([2, ''].some(isFunction)).to.be.false;
      });
    });
  });

  describe('isNan()', function () {
    it('returns true if passed parameter type is NaN', function () {
      expect(isNan(NaN)).to.be.true;
    });

    it('returns false if passed parameter type is not NaN', function () {
      expect(isNan('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is NaN', function () {
        expect(!isNan('')).to.be.true;
      });

      it('returns false if passed parameter type is not NaN', function () {
        expect(!isNan(NaN)).to.be.false;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are NaN', function () {
        expect([NaN, NaN].every(isNan)).to.be.true;
      });

      it('returns false if any passed parameter type is not NaN', function () {
        expect([NaN, ''].every(isNan)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is NaN', function () {
        expect([NaN, NaN, ''].some(isNan)).to.be.true;
      });

      it('returns false if all passed parameter types are not NaN', function () {
        expect(['', []].some(isNan)).to.be.false;
      });
    });
  });

  describe('isNumber()', function () {
    it('returns true if passed parameter type is number', function () {
      expect(isNumber(1)).to.be.true;
    });

    it('returns false if passed parameter type is not number', function () {
      expect(isNumber('')).to.be.false;
    });

    it('returns false if passed parameter is NaN', function () {
      expect(isNumber(NaN)).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is number', function () {
        expect(!isNumber(1)).to.be.false;
      });

      it('returns true if passed parameter type is not number', function () {
        expect(!isNumber('')).to.be.true;
      });

      it('returns true if passed parameter is NaN', function () {
        expect(!isNumber(NaN)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are number', function () {
        expect([1, 2].every(isNumber)).to.be.true;
      });

      it('returns false if any passed parameter type is not number', function () {
        expect([1, ''].every(isNumber)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is number', function () {
        expect([1, 2, NaN].some(isNumber)).to.be.true;
      });

      it('returns false if all passed parameter types are not number', function () {
        expect([null, ''].some(isNumber)).to.be.false;
      });
    });
  });

  describe('isObject()', function () {
    it('returns true if passed parameter type is object', function () {
      expect(isObject({})).to.be.true;
    });

    it('returns false if passed parameter type is not object', function () {
      expect(isObject('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is object', function () {
        expect(!isObject({})).to.be.false;
      });

      it('returns true if passed parameter type is not object', function () {
        expect(!isObject('')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are object', function () {
        expect([{}, {}].every(isObject)).to.be.true;
      });

      it('returns false if any passed parameter type is not object', function () {
        expect([{}, ''].every(isObject)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is object', function () {
        expect([{}, {}, ''].some(isObject)).to.be.true;
      });

      it('returns false if all passed parameter types are not object', function () {
        expect([1, 2, 3].some(isObject)).to.be.false;
      });
    });
  });

  describe('isRegExp()', function () {
    it('returns true if passed parameter type is regexp', function () {
      expect(isRegExp(/reg/)).to.be.true;
    });

    it('returns false if passed parameter type is not regexp', function () {
      expect(isRegExp('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is regexp', function () {
        expect(!isRegExp(/reg/)).to.be.false;
      });

      it('returns true if passed parameter type is not regexp', function () {
        expect(!isRegExp('')).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are regexp', function () {
        expect([/reg/, /reg/].every(isRegExp)).to.be.true;
      });

      it('returns false if any passed parameter type is not regexp', function () {
        expect([/reg/, ''].every(isRegExp)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is regexp', function () {
        expect([/reg/, /reg/, 1].some(isRegExp)).to.be.true;
      });

      it('returns false if any passed parameter type is not regexp', function () {
        expect([1, 2].some(isRegExp)).to.be.false;
      });
    });
  });

  describe('isSameType()', function () {
    it('returns true if passed parameter types are same', function () {
      expect(isSameType(1, 2)).to.be.true;
      expect(isSameType('', '')).to.be.true;
      expect(isSameType(NaN, NaN)).to.be.true;
    });

    it('returns false if passed parameter types are not same', function () {
      expect(isSameType(1, '')).to.be.false;
      expect(isSameType(0, NaN)).to.be.false;
      expect(isSameType(NaN, 'wer')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter types are same', function () {
        expect(!isSameType(1, 2)).to.be.false;
        expect(!isSameType('', '')).to.be.false;
      });

      it('returns true if passed parameter types are not same', function () {
        expect(!isSameType(1, '')).to.be.true;
      });
    });
  });

  describe('isChar()', function () {
    it('returns true if passed parameter type is char', function () {
      expect(isChar('i')).to.be.true;
    });

    it('returns false if passed parameter type is not a char', function () {
      expect(isChar('')).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is char', function () {
        expect(!isChar('i')).to.be.false;
      });

      it('returns true if passed parameter type is not char', function () {
        expect(!isChar(undefined)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are char', function () {
        expect(['i', 's'].every(isChar)).to.be.true;
      });

      it('returns false if any passed parameter type is not char', function () {
        expect(['', null].every(isChar)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is char', function () {
        expect(['i', null].some(isChar)).to.be.true;
      });

      it('returns false if all passed parameter types are not char', function () {
        expect([null, undefined, ''].some(isChar)).to.be.false;
      });
    });
  });

  describe('isString()', function () {
    it('returns true if passed parameter type is string', function () {
      expect(isString('')).to.be.true;
    });

    it('returns false if passed parameter type is not string', function () {
      expect(isString(1)).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is string', function () {
        expect(!isString('')).to.be.false;
      });

      it('returns true if passed parameter type is not string', function () {
        expect(!isString(1)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are string', function () {
        expect(['', ''].every(isString)).to.be.true;
      });

      it('returns false if any passed parameter type is not string', function () {
        expect(['', 1].every(isString)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is string', function () {
        expect(['', 1].some(isString)).to.be.true;
      });

      it('returns false if all passed parameter types are not string', function () {
        expect([null, 1].some(isString)).to.be.false;
      });
    });
  });

  describe('isUndefined()', function () {
    it('returns true if passed parameter type is undefined or void 0', function () {
      expect(isUndefined(undefined)).to.be.true;
      expect(isUndefined(void 0)).to.be.true;
    });

    it('returns false if passed parameter type is not undefined or void 0', function () {
      expect(isUndefined(1)).to.be.false;
    });

    describe('not', function () {
      it('returns false if passed parameter type is undefined or void 0', function () {
        expect(!isUndefined(undefined)).to.be.false;
        expect(!isUndefined(void 0)).to.be.false;
      });

      it('returns true if passed parameter type is not undefined or void 0', function () {
        expect(!isUndefined(1)).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all passed parameter types are undefined or void 0', function () {
        expect([undefined, void 0].every(isUndefined)).to.be.true;
      });

      it('returns false if any passed parameter type is not undefined or void 0', function () {
        expect([undefined, void 0, 1].every(isUndefined)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any passed parameter type is undefined or void 0', function () {
        expect([undefined, void 0, 'foo', 1].some(isUndefined)).to.be.true;
      });

      it('returns false if all passed parameter types are not undefined or void 0', function () {
        expect([null, 1].some(isUndefined)).to.be.false;
      });
    });
  });
});
