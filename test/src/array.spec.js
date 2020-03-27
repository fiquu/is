describe('array checks', function () {
  describe('is.sorted', function () {
    it('should return true if given array is sorted', function () {
      expect(is.sorted([1, 2, 3, 4, 5])).to.be.true;
    });

    it('should return false if given array is not sorted', function () {
      expect(is.sorted([1, 2, 3, 5, 4])).to.be.false;
    });

    it('should return false if the argument is not an array', function () {
      expect(is.sorted('not an array')).to.be.false;
    });
  });

  describe('is.not.sorted', function () {
    it('should return false if given array is sorted', function () {
      expect(is.not.sorted([1, 2, 3, 4, 5])).to.be.false;
    });

    it('should return true if given array is not sorted', function () {
      expect(is.not.sorted([1, 2, 3, 5, 4])).to.be.true;
    });
  });

  describe('is.all.sorted', function () {
    it('should return true if all given arrays are sorted', function () {
      var arr = [1, 2, 3, 4, 5];
      var brr = [5, 6, 7, 8, 9];
      expect(is.all.sorted(arr, brr)).to.be.true;
      expect(is.all.sorted([arr, brr])).to.be.true;
    });

    it('should return false if any given array is not sorted', function () {
      var arr = [1, 2, 3, 4, 5];
      var brr = [5, 6, 7, 9, 8];
      expect(is.all.sorted(arr, brr)).to.be.false;
      expect(is.all.sorted([arr, brr])).to.be.false;
    });
  });

  describe('is.any.sorted', function () {
    it('should return true if any given array is sorted', function () {
      var arr = [1, 2, 3, 4, 5];
      var brr = [10, 6, 7, 8, 9];
      expect(is.any.sorted(arr, brr)).to.be.true;
      expect(is.any.sorted([arr, brr])).to.be.true;
    });

    it('should return false if all given arrays are not sorted', function () {
      var arr = [6, 2, 3, 4, 5];
      var brr = [9, 5, 6, 7, 8];
      expect(is.any.sorted(arr, brr)).to.be.false;
      expect(is.any.sorted([arr, brr])).to.be.false;
    });
  });

  describe('is.inArray', function () {
    it('should return true if the item is in the array', function () {
      expect(is.inArray(3, [1, 4, 6, 7, 3])).to.be.true;
    });

    it('should return false if the item is not in the array', function () {
      expect(is.inArray(2, [1, 4, 6, 7, 3])).to.be.false;
    });

    it('should return false if the argument is not an array', function () {
      expect(is.inArray(2, 'not an array')).to.be.false;
    });
  });

  describe('is.not.inArray', function () {
    it('should return false if the item is in the array', function () {
      expect(is.not.inArray(3, [1, 4, 6, 7, 3])).to.be.false;
    });

    it('should return true if the item is not in the array', function () {
      expect(is.not.inArray(2, [1, 4, 6, 7, 3])).to.be.true;
    });
  });
});
