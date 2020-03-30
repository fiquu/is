describe('Browser only checks', function () {
  describe('is.windowObject', function () {
    it('returns true if given object is window object', function () {
      expect(is.windowObject(window)).to.be.true;
    });

    it('returns false if given object is not window object', function () {
      expect(is.windowObject({})).to.be.false;
    });
  });

  describe('not is.windowObject', function () {
    it('returns false if given object is window object', function () {
      expect(is.not.windowObject(window)).to.be.false;
    });

    it('returns true if given object is nor window object', function () {
      expect(is.not.windowObject({})).to.be.true;
    });
  });

  describe('every is.windowObject', function () {
    it('returns true if all given objects are window object', function () {
      expect(is.all.windowObject(window, window)).to.be.true;
      expect(is.all.windowObject([window, window])).to.be.true;
    });

    it('returns false if any given object is not window object', function () {
      expect(is.all.windowObject({}, window)).to.be.false;
      expect(is.all.windowObject([{}, window])).to.be.false;
    });
  });

  describe('some is.windowObject', function () {
    it('returns true if any given object is window object', function () {
      expect(is.any.windowObject(window, {})).to.be.true;
      expect(is.any.windowObject([window, {}])).to.be.true;
    });

    it('returns false if all given objects are not window object', function () {
      expect(is.any.windowObject({}, {})).to.be.false;
      expect(is.any.windowObject([{}, {}])).to.be.false;
    });
  });

  describe('is.domNode', function () {
    it('returns true if given object is a DOM node', function () {
      const obj = document.createElement('div');

      expect(is.domNode(obj)).to.be.true;
    });

    it('returns false if given object is not a DOM node', function () {
      expect(is.domNode({})).to.be.false;
    });
  });

  describe('not is.domNode', function () {
    it('returns false if given object is a DOM node', function () {
      const obj = document.createElement('span');

      expect(is.not.domNode(obj)).to.be.false;
    });

    it('returns true if given object is not a DOM node', function () {
      expect(is.not.domNode({})).to.be.true;
    });
  });

  describe('some is.domNode', function () {
    it('returns true if any given object is a DOM node', function () {
      const obj = document.createElement('blockquote');

      expect(is.any.domNode(window, obj, obj)).to.be.true;
      expect(is.any.domNode([window, obj, obj])).to.be.true;
    });

    it('returns false if all given objects are not DOM nodes', function () {
      expect(is.any.domNode({}, {})).to.be.false;
      expect(is.any.domNode([{}, {}])).to.be.false;
    });
  });

  describe('every is.domNode', function () {
    it('returns true if all given objects are DOM nodes', function () {
      const na = document.createElement('em');
      const nb = document.createElement('a');

      expect(is.all.domNode(na, nb)).to.be.true;
      expect(is.all.domNode([na, nb])).to.be.true;
    });

    it('returns false if any given object is not a DOM node', function () {
      expect(is.all.domNode({}, window)).to.be.false;
      expect(is.all.domNode([{}, window])).to.be.false;
    });
  });

  describe('is.setNamespace', function () {
    it('should allow to change the namespace', function () {
      const ns = is.setNamespace();

      expect(ns).to.be.an('object');
      expect(ns.number(1)).to.be.true;
      expect(ns.not.number(1)).to.be.false;
      expect(ns.nan(NaN)).to.be.true;
      expect(ns.nan(1)).to.be.false;

      // Restore
      window.is = ns;
    });
  });
});
