import { expect } from 'chai';

import is from '../../src';

describe('[object]', function () {
  describe('.propCount()', function () {
    it('returns true if given count is objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.propCount(obj, 3)).to.be.true;
    });

    it('returns false if given count is not objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.propCount(obj, 3)).to.be.false;
    });

    it('returns false if given first argument is not an object', function () {
      expect(is.propCount('wer', 3)).to.be.false;
    });

    it('returns false if given second argument is not an number', function () {
      expect(is.propCount({ a: 1234 }, undefined)).to.be.false;
    });

    it('returns false if given arguments are invalid', function () {
      expect(is.propCount(Array, undefined)).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given count is objects\' property count', function () {
        const obj = {
          test: 'testing',
          is: 'is',
          good: 'good'
        };

        expect(!is.propCount(obj, 3)).to.be.false;
      });

      it('returns true if given count is not objects\' property count', function () {
        const obj = {
          test: 'testing',
          is: 'is'
        };

        expect(!is.propCount(obj, 3)).to.be.true;
      });
    });
  });

  describe('.propertyDefined()', function () {
    it('returns true if given property is in objects', function () {
      const obj = {
        testing: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.propDefined(obj, 'good')).to.be.true;
    });

    it('returns false if given property is not in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.propDefined(obj, 'good')).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given property is in objects', function () {
        const obj = {
          test: 'testing',
          is: 'is',
          good: 'good'
        };

        expect(!is.propDefined(obj, 'good')).to.be.false;
      });

      it('returns true if given property is not in objects', function () {
        const obj = {
          test: 'testing',
          is: 'is'
        };

        expect(!is.propDefined(obj, 'good')).to.be.true;
      });
    });
  });

  describe('.windowObject()', function () {
    it('returns true if given object is window', function () {
      const obj = {
        navigator: {},
        location: {}
      };

      expect(is.windowObject(obj)).to.be.true;
    });

    it('returns false if given object is not window', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.windowObject(obj)).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given object is window', function () {
        const obj = {
          navigator: {},
          location: {}
        };

        expect(!is.windowObject(obj)).to.be.false;
      });

      it('returns true if given object is not window', function () {
        const obj = {
          test: 'testing',
          is: 'is'
        };

        expect(!is.windowObject(obj)).to.be.true;
      });
    });
  });

  describe('.domNode()', function () {
    it('returns true if given object is a DOM node', function () {
      const obj = {
        nodeType: 1
      };

      expect(is.domNode(obj)).to.be.true;
    });

    it('returns false if given object is not a DOM node', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.domNode(obj)).to.be.false;
    });

    describe('> not', function () {
      it('returns false if given object is a DOM node', function () {
        const obj = {
          nodeType: 1
        };

        expect(!is.domNode(obj)).to.be.false;
      });

      it('returns true if given object is not a DOM node', function () {
        const obj = {
          test: 'testing',
          is: 'is'
        };

        expect(!is.domNode(obj)).to.be.true;
      });
    });
  });
});
