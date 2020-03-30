import { expect } from 'chai';

import is from '../../src';

describe('object checks', function () {
  describe('is.propCount', function () {
    it('should return true if given count is objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.propCount(obj, 3)).to.be.true;
    });

    it('should return false if given count is not objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.propCount(obj, 3)).to.be.false;
    });

    it('should return false if given first argument is not an object', function () {
      expect(is.propCount('wer', 3)).to.be.false;
    });

    it('should return false if given second argument is not an number', function () {
      expect(is.propCount({ a: 1234 }, undefined)).to.be.false;
    });

    it('should return false if given arguments are invalid', function () {
      expect(is.propCount(Array, undefined)).to.be.false;
    });
  });

  describe('!is.propCount', function () {
    it('should return false if given count is objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(!is.propCount(obj, 3)).to.be.false;
    });

    it('should return true if given count is not objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(!is.propCount(obj, 3)).to.be.true;
    });
  });

  // Property defined
  describe('is.propertyDefined', function () {
    it('should return true if given property is in objects', function () {
      const obj = {
        testing: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.propertyDefined(obj, 'good')).to.be.true;
    });

    it('should return false if given property is not in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.propertyDefined(obj, 'good')).to.be.false;
    });
  });

  describe('!is.propertyDefined', function () {
    it('should return false if given property is in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(!is.propertyDefined(obj, 'good')).to.be.false;
    });

    it('should return true if given property is not in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(!is.propertyDefined(obj, 'good')).to.be.true;
    });
  });

  // Window object
  describe('is.windowObject', function () {
    it('should return true if given object is window', function () {
      const obj = {
        navigator: {},
        location: {}
      };

      expect(is.windowObject(obj)).to.be.true;
    });

    it('should return false if given object is not window', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.windowObject(obj)).to.be.false;
    });
  });

  describe('!is.windowObject', function () {
    it('should return false if given object is window', function () {
      const obj = {
        navigator: {},
        location: {}
      };

      expect(!is.windowObject(obj)).to.be.false;
    });

    it('should return true if given object is not window', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(!is.windowObject(obj)).to.be.true;
    });
  });

  // DOM Node
  describe('is.domNode', function () {
    it('should return true if given object is a DOM node', function () {
      const obj = {
        nodeType: 1
      };

      expect(is.domNode(obj)).to.be.true;
    });

    it('should return false if given object is not a DOM node', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.domNode(obj)).to.be.false;
    });
  });

  describe('!is.domNode', function () {
    it('should return false if given object is a DOM node', function () {
      const obj = {
        nodeType: 1
      };

      expect(!is.domNode(obj)).to.be.false;
    });

    it('should return true if given object is not a DOM node', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(!is.domNode(obj)).to.be.true;
    });
  });
});
