import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import {
  hasPropCount,
  isDomNode,
  isWindowObject,
  hasPropDefined
} from '../../src/object';

describe('Object', function () {
  describe('isWindowObject()', function () {
    const { window } = new JSDOM();

    it('returns true if given object is window object', function () {
      expect(isWindowObject(window)).to.be.true;
    });

    it('returns false if given object !isWindow object', function () {
      expect(isWindowObject({})).to.be.false;
    });

    describe('not', function () {
      it('returns false if given object is window object', function () {
        expect(!isWindowObject(window)).to.be.false;
      });

      it('returns true if given object is nor window object', function () {
        expect(!isWindowObject({})).to.be.true;
      });
    });

    describe('every', function () {
      it('returns true if all given objects are window object', function () {
        expect([window, window].every(isWindowObject)).to.be.true;
      });

      it('returns false if any given object !isWindow object', function () {
        expect([{}, window].every(isWindowObject)).to.be.false;
      });
    });

    describe('some', function () {
      it('returns true if any given object is window object', function () {
        expect([window, {}].some(isWindowObject)).to.be.true;
      });

      it('returns false if all given objects are not window object', function () {
        expect([{}, {}].some(isWindowObject)).to.be.false;
      });
    });
  });

  describe('isDomNode()', function () {
    const { window } = new JSDOM();

    it('returns true if given object is a DOM node', function () {
      const obj = window.document.createElement('div');

      expect(isDomNode(obj)).to.be.true;
    });

    it('returns false if given object !is.a DOM node', function () {
      expect(isDomNode({})).to.be.false;
    });

    describe('not', function () {
      it('returns false if given object is a DOM node', function () {
        const obj = window.document.createElement('span');

        expect(!isDomNode(obj)).to.be.false;
      });

      it('returns true if given object !is.a DOM node', function () {
        expect(!isDomNode({})).to.be.true;
      });
    });

    describe('some', function () {
      it('returns true if any given object is a DOM node', function () {
        const obj = window.document.createElement('blockquote');

        expect([window, obj, obj].some(isDomNode)).to.be.true;
      });

      it('returns false if all given objects are not DOM nodes', function () {
        expect([{}, {}].some(isDomNode)).to.be.false;
      });
    });

    describe('every', function () {
      it('returns true if all given objects are DOM nodes', function () {
        const na = window.document.createElement('em');
        const nb = window.document.createElement('a');

        expect([na, nb].every(isDomNode)).to.be.true;
      });

      it('returns false if any given object is not DOM node', function () {
        expect([{}, window].every(isDomNode)).to.be.false;
      });
    });
  });

  describe('hasPropCount()', function () {
    it('returns true if given count is object property count', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(hasPropCount(obj, 3)).to.be.true;
    });

    it('returns false if given count is not object property count', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(hasPropCount(obj, 3)).to.be.false;
    });

    it('returns false if given first argument is not an object', function () {
      expect(hasPropCount('wer', 3)).to.be.false;
    });

    it('returns false if given second argument is not an number', function () {
      expect(hasPropCount({ a: 1234 }, undefined)).to.be.false;
    });

    it('returns false if given arguments are invalid', function () {
      expect(hasPropCount(Array, undefined)).to.be.false;
    });

    describe('not', function () {
      it('returns false if given count is object property count', function () {
        const obj = {
          test: 'testing',
          is: 'is',
          good: 'good'
        };

        expect(!hasPropCount(obj, 3)).to.be.false;
      });

      it('returns true if given count is not object property count', function () {
        const obj = {
          test: 'testing',
          is: 'is'
        };

        expect(!hasPropCount(obj, 3)).to.be.true;
      });
    });
  });

  describe('hasPropDefined()', function () {
    it('returns true if given property is in objects', function () {
      const obj = {
        testing: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(hasPropDefined(obj, 'good')).to.be.true;
    });

    it('returns false if given property is not in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(hasPropDefined(obj, 'good')).to.be.false;
    });

    describe('not', function () {
      it('returns false if given property is in objects', function () {
        const obj = {
          test: 'testing',
          is: 'is',
          good: 'good'
        };

        expect(!hasPropDefined(obj, 'good')).to.be.false;
      });

      it('returns true if given property is not in objects', function () {
        const obj = {
          test: 'testing',
          is: 'is'
        };

        expect(!hasPropDefined(obj, 'good')).to.be.true;
      });
    });
  });
});
