describe('string checks', function () {
  describe('is.include', function () {
    it('should return true if given string contains substring', function () {
      expect(is.include('test.com', 't.com')).to.be.true;
    });

    it('should return false if given string does not contain substring', function () {
      expect(is.include('test.com', 'nope')).to.be.false;
    });
  });

  describe('is.not.include', function () {
    it('should return false if given string contains substring', function () {
      expect(is.not.include('test.com', 't.com')).to.be.false;
    });

    it('should return false if given string does not contain substring', function () {
      expect(is.not.include('test.com', 'nope')).to.be.true;
    });
  });

  describe('is.upperCase', function () {
    it('should return true if given string is uppercase', function () {
      expect(is.upperCase('TEST')).to.be.true;
    });

    it('should return false if given string is not uppercase', function () {
      expect(is.upperCase('not uppercase')).to.be.false;
    });
  });

  describe('is.not.upperCase', function () {
    it('should return false if given string is uppercase', function () {
      expect(is.not.upperCase('TEST')).to.be.false;
    });

    it('should return true if given string is not uppercase', function () {
      expect(is.not.upperCase('not uppercase')).to.be.true;
    });
  });

  describe('is.all.upperCase', function () {
    it('should return true if all given strings are uppercase', function () {
      expect(is.all.upperCase('TEST', 'FOO')).to.be.true;
      expect(is.all.upperCase(['TEST', 'FOO', 'BAR'])).to.be.true;
    });

    it('should return false if any given string is not uppercase', function () {
      expect(is.all.upperCase('not uppercase', 'foo')).to.be.false;
      expect(is.all.upperCase(['not uppercase', 'FOO', 'bar'])).to.be.false;
    });
  });

  describe('is.any.upperCase', function () {
    it('should return true if any given strings is uppercase', function () {
      expect(is.any.upperCase('not uppercase', 'FOO')).to.be.true;
      expect(is.any.upperCase(['not uppercase', 'foo', 'BAR'])).to.be.true;
    });

    it('should return false if all given strings are not uppercase', function () {
      expect(is.any.upperCase('not uppercase', 'foo')).to.be.false;
      expect(is.any.upperCase(['not uppercase', 'foo', 'bar'])).to.be.false;
    });
  });

  describe('is.lowerCase', function () {
    it('should return true if given string is lowerCase', function () {
      expect(is.lowerCase('not uppercase')).to.be.true;
    });

    it('should return false if given string is not lowerCase', function () {
      expect(is.lowerCase('TEST')).to.be.false;
    });
  });

  describe('is.not.lowerCase', function () {
    it('should return false if given string is lowerCase', function () {
      expect(is.not.lowerCase('lowercase')).to.be.false;
    });

    it('should return true if given string is not lowerCase', function () {
      expect(is.not.lowerCase('TEST')).to.be.true;
    });
  });

  describe('is.all.lowerCase', function () {
    it('should return true if all given strings are lowerCase', function () {
      expect(is.all.lowerCase('lowercase', 'foo')).to.be.true;
      expect(is.all.lowerCase(['lowercase', 'foo', 'bar'])).to.be.true;
    });

    it('should return false if any given string is not lowerCase', function () {
      expect(is.all.lowerCase('lowercase', 'FOO')).to.be.false;
      expect(is.all.lowerCase(['lowercase', 'foo', 'BAR'])).to.be.false;
    });
  });

  describe('is.any.lowerCase', function () {
    it('should return true if any given strings is lowerCase', function () {
      expect(is.any.lowerCase('lowercase', 'foo')).to.be.true;
      expect(is.any.lowerCase(['lowercase', 'FOO', 'bar'])).to.be.true;
    });

    it('should return false if all given strings are not lowerCase', function () {
      expect(is.any.lowerCase('TEST', 'FOO')).to.be.false;
      expect(is.any.lowerCase(['TEST', 'FOO', 'BAR'])).to.be.false;
    });
  });

  describe('is.startWith', function () {
    it('should return true if given string starts with substring', function () {
      expect(is.startWith('testing', 'te')).to.be.true;
    });

    it('should return false if given string does not start with substring', function () {
      expect(is.startWith('not testing', 'st')).to.be.false;
    });
  });

  describe('is.not.startWith', function () {
    it('should return false if given string starts with substring', function () {
      expect(is.not.startWith('testing', 'te')).to.be.false;
    });

    it('should return true if given string does not start with substring', function () {
      expect(is.not.startWith('testing', 'st')).to.be.true;
    });
  });

  describe('is.endWith', function () {
    it('should return true if given string ends with substring', function () {
      expect(is.endWith('testing', 'ng')).to.be.true;
    });

    it('should return false if given string does not end with substring', function () {
      expect(is.endWith('testing not', 'ng')).to.be.false;
    });

    it('should prevent true return if endWith is not present in the string', function () {
      expect(is.endWith('id', '_id')).to.be.false;
    });
  });

  describe('is.not.endWith', function () {
    it('should return false if given string ends with substring', function () {
      expect(is.not.endWith('testing', 'ng')).to.be.false;
    });

    it('should return true if given string does not end with substring', function () {
      expect(is.not.endWith('testing not', 'ng')).to.be.true;
    });
  });

  describe('is.capitalized', function () {
    it('should return true if given string is capitalized', function () {
      expect(is.capitalized('Capitalized')).to.be.true;
    });

    it('should return false if given string is not capitalized', function () {
      expect(is.capitalized('not capitalized')).to.be.false;
    });

    it('should return false if given argument is not a string', function () {
      expect(is.capitalized(1234)).to.be.false;
    });

    it('should return true if given sentence words are capitalized', function () {
      expect(is.capitalized('Testing Is Good For You')).to.be.true;
    });

    it('should return false if given sentence words are not capitalized', function () {
      expect(is.capitalized('Testing is good for you')).to.be.false;
    });
  });

  describe('is.not.capitalized', function () {
    it('should return false if given string is capitalized', function () {
      expect(is.not.capitalized('Testing')).to.be.false;
    });

    it('should return true if given string is not capitalized', function () {
      expect(is.not.capitalized('not capitalized')).to.be.true;
    });

    it('should return false if given sentence words are capitalized', function () {
      expect(is.not.capitalized('Testing Is Good For You')).to.be.false;
    });

    it('should return false if given sentence words are not capitalized', function () {
      expect(is.not.capitalized('Testing is good for you')).to.be.true;
    });
  });

  describe('is.all.capitalized', function () {
    it('should return true if all given strings are capitalized', function () {
      expect(is.all.capitalized('Testing', 'Is', 'Good')).to.be.true;
      expect(is.all.capitalized(['Testing', 'Is', 'Good'])).to.be.true;
    });

    it('should return false if any given string is not capitalized', function () {
      expect(is.all.capitalized('testing', 'Is', 'good')).to.be.false;
      expect(is.all.capitalized(['testing', 'Is', 'good'])).to.be.false;
    });

    it('should return true if given all sentence words are capitalized', function () {
      expect(is.all.capitalized('Testing Is Good', 'Hypest Hype')).to.be.true;
      expect(is.all.capitalized(['Testing Is Good', 'Hypest Hype'])).to.be.true;
    });

    it('should return false if given any sentence words are not capitalized', function () {
      expect(is.all.capitalized('Testing Is Good', 'chase and status')).to.be.false;
      expect(is.all.capitalized(['Testing Is Good', 'chase and status'])).to.be.false;
    });
  });

  describe('is.any.capitalized', function () {
    it('should return true if any given string is capitalized', function () {
      expect(is.any.capitalized('Testing', 'is', 'good')).to.be.true;
      expect(is.any.capitalized(['Testing', 'is', 'good'])).to.be.true;
    });

    it('should return false if all given strings are not capitalized', function () {
      expect(is.any.capitalized('testing', 'is', 'good')).to.be.false;
      expect(is.any.capitalized(['testing', 'is', 'good'])).to.be.false;
    });

    it('should return true if any given sentence words are capitalized', function () {
      expect(is.any.capitalized('Test Is Good', 'hypest hype')).to.be.true;
      expect(is.any.capitalized(['Test Is Good', 'hypest hype'])).to.be.true;
    });

    it('should return false if all given sentence words are not capitalized', function () {
      expect(is.any.capitalized('test is good', 'chase and status')).to.be.false;
      expect(is.any.capitalized(['test is good', 'chase and status'])).to.be.false;
    });
  });

  describe('is.palindrome', function () {
    it('should return true if given string is palindrome', function () {
      expect(is.palindrome('testset')).to.be.true;
    });

    it('should return false if given string is not palindrome', function () {
      expect(is.palindrome('not palindrome')).to.be.false;
    });
  });

  describe('is.not.palindrome', function () {
    it('should return false if given string is palindrome', function () {
      expect(is.not.palindrome('testset')).to.be.false;
    });

    it('should return true if given string is not palindrome', function () {
      expect(is.not.palindrome('not palindrome')).to.be.true;
    });
  });

  describe('is.all.palindrome', function () {
    it('should return true if all the given strings are palindrome', function () {
      expect(is.all.palindrome('testset', 'tt')).to.be.true;
      expect(is.all.palindrome(['testset', 'tt'])).to.be.true;
    });

    it('should return false if any given string is not palindrome', function () {
      expect(is.all.palindrome('not palindrome', 'tt')).to.be.false;
      expect(is.all.palindrome(['not palindrome', 'tt'])).to.be.false;
    });
  });

  describe('is.any.palindrome', function () {
    it('should return true if any given string is palindrome', function () {
      expect(is.any.palindrome('testset', 'te')).to.be.true;
      expect(is.any.palindrome(['testset', 'te'])).to.be.true;
    });

    it('should return false if all given strings are not palindrome', function () {
      expect(is.any.palindrome('not palindrome', 'te')).to.be.false;
      expect(is.any.palindrome(['not palindrome', 'te'])).to.be.false;
    });
  });
});
