describe('presence checks', function () {
  describe('is.empty', function () {
    it('should return true if given array is empty', function () {
      expect(is.empty([])).to.be.true;
    });

    it('should return false if given array is empty', function () {
      expect(is.empty(['not', 'empty'])).to.be.false;
    });

    it('should return true if given object is empty', function () {
      expect(is.empty({})).to.be.true;
    });

    it('should return true if given argument is NaN', function () {
      expect(is.empty(NaN)).to.be.true;
    });

    it('should return true if given argument is null', function () {
      expect(is.empty(null)).to.be.true;
    });

    it('should return true if given argument is undefined', function () {
      expect(is.empty(undefined)).to.be.true;
      expect(is.empty()).to.be.true;
    });

    it('should return false if given argument is an invalid date', function () {
      expect(is.empty(new Date('wer'))).to.be.true;
    });

    it('should return false if given object is not empty', function () {
      expect(is.empty({
        not: 'empty'
      })).to.be.false;
    });

    it('should return false if given argument is a number', function () {
      expect(is.empty(1)).to.be.false;
      expect(is.empty(-1)).to.be.false;
      expect(is.empty(0)).to.be.false;
    });

    it('should return false if given argument is a boolean', function () {
      expect(is.empty(true)).to.be.false;
      expect(is.empty(false)).to.be.false;
    });

    it('should return false if given argument is a valid date', function () {
      expect(is.empty(new Date())).to.be.false;
    });

    it('should return false if given argument is a function', function () {
      expect(is.empty(Boolean)).to.be.false;
      expect(is.empty(Array)).to.be.false;
      expect(is.empty(function () { })).to.be.false;
      expect(is.empty(() => { })).to.be.false;
    });
  });

  describe('is.not.empty', function () {
    it('should return false if given string is empty', function () {
      expect(is.not.empty('')).to.be.false;
    });

    it('should return true if given array is not empty', function () {
      expect(is.not.empty(['not', 'empty'])).to.be.true;
    });
  });

  describe('is.all.empty', function () {
    it('should return true if given array, object and srting are empty', function () {
      expect(is.all.empty([], '', {})).to.be.true;
      expect(is.all.empty([
        [], '', {}
      ])).to.be.true;
    });

    it('should return false if any given element is not empty', function () {
      expect(is.all.empty(['not', 'empty'], {}, '')).to.be.false;
      expect(is.all.empty([
        ['not', 'empty'], {}, ''
      ])).to.be.false;
    });
  });

  describe('is.existy', function () {
    it('should return false if given value is null', function () {
      expect(is.existy(null)).to.be.false;
    });

    it('should return false if given value is undefined', function () {
      expect(is.existy(undefined)).to.be.false;
    });

    it('should return true if given value is not null or undefined', function () {
      expect(is.existy('')).to.be.true;
    });
  });

  describe('is.not.existy', function () {
    it('should return true if given value is null', function () {
      expect(is.not.existy(null)).to.be.true;
    });

    it('should return true if given value is undefined', function () {
      expect(is.not.existy(undefined)).to.be.true;
    });

    it('should return false if given value is not null or undefined', function () {
      expect(is.not.existy('')).to.be.false;
    });
  });

  describe('is.all.existy', function () {
    it('should return true if all given values are existy', function () {
      expect(is.all.existy([], {}, '', true)).to.be.true;
      expect(is.all.existy([
        [], {}, '', true
      ])).to.be.true;
    });

    it('should return false if given any value is not existy', function () {
      expect(is.all.existy([], {}, '', true, undefined)).to.be.false;
      expect(is.all.existy([
        [], {}, '', true, undefined
      ])).to.be.false;
    });
  });

  describe('is.truthy', function () {
    it('should return true if given value is truthy', function () {
      expect(is.truthy('truthy')).to.be.true;
    });

    it('should return false if given value is not truthy', function () {
      expect(is.truthy(undefined)).to.be.false;
    });

    it('should return false if given value is false', function () {
      expect(is.truthy(false)).to.be.false;
    });
  });

  describe('is.not.truthy', function () {
    it('should return false if given value is truthy', function () {
      expect(is.not.truthy(true)).to.be.false;
    });

    it('should return true if given value is not truthy', function () {
      expect(is.not.truthy(undefined)).to.be.true;
    });

    it('should return true if given value is false', function () {
      expect(is.not.truthy(false)).to.be.true;
    });
  });

  describe('is.all.truthy', function () {
    it('should return true if all given values are truthy', function () {
      expect(is.all.truthy('truthy', ['truthy'], true)).to.be.true;
      expect(is.all.truthy(['truthy', ['truthy'], true])).to.be.true;
    });

    it('should return false if any given value is not truthy', function () {
      expect(is.all.truthy('truthy', undefined)).to.be.false;
      expect(is.all.truthy(['truthy', undefined])).to.be.false;
    });
  });

  describe('is.falsy', function () {
    it('should return false if given value is truthy', function () {
      expect(is.falsy('truthy')).to.be.false;
    });

    it('should return true if given value is falsy', function () {
      expect(is.falsy(undefined)).to.be.true;
    });

    it('should return true if given value is false', function () {
      expect(is.falsy(false)).to.be.true;
    });
  });

  describe('is.not.falsy', function () {
    it('should return true if given value is truthy', function () {
      expect(is.not.falsy(true)).to.be.true;
    });

    it('should return false if given value is falsy', function () {
      expect(is.not.falsy(undefined)).to.be.false;
    });

    it('should return false if given value is false', function () {
      expect(is.not.falsy(false)).to.be.false;
    });
  });

  describe('is.all.falsy', function () {
    it('should return true if all given values are falsy', function () {
      expect(is.all.falsy(undefined, false)).to.be.true;
      expect(is.all.falsy([undefined, false])).to.be.true;
    });

    it('should return false if any given value is not falsy', function () {
      expect(is.all.falsy(undefined, 'truthy')).to.be.false;
      expect(is.all.falsy([undefined, 'truthy'])).to.be.false;
    });
  });

  describe('is.space', function () {
    it('should return false if given value is not string', function () {
      expect(is.space(1)).to.be.false;
    });

    it('should return true if given value is space', function () {
      expect(is.space(' ')).to.be.true;
    });
  });

  describe('is.not.space', function () {
    it('should return true if given value is not string', function () {
      expect(is.not.space(null)).to.be.true;
    });

    it('should return false if given value is space', function () {
      expect(is.not.space(' ')).to.be.false;
    });
  });

  describe('is.all.space', function () {
    it('should return false if all given values are not space', function () {
      expect(is.all.space(' ', 'a')).to.be.false;
      expect(is.all.space([' ', 'a'])).to.be.false;
    });

    it('should return true if given values are space', function () {
      expect(is.all.space(' ', ' ')).to.be.true;
      expect(is.all.space([' ', ' '])).to.be.true;
    });
  });

});
