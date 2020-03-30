describe('type checks', () => {
  describe('is.arguments', function () {
    it('returns true if passed parameter type is arguments', function () {
      expect(is.arguments(arguments)).to.be.true;
    });

    it('returns false if passed parameter type is not arguments', function () {
      expect(is.arguments(['not', 'arguments'])).to.be.false;
    });
  });

  describe('not is.arguments', function () {
    it('returns false if passed parameter type is arguments', function () {
      expect(is.not.arguments(arguments)).to.be.false;
    });

    it('returns true if passed parameter type is not arguments', function () {
      expect(is.not.arguments(['not', 'arguments'])).to.be.true;
    });
  });

  describe('every is.arguments', function () {
    it('returns true if all passed parameter types are arguments', function () {
      expect(is.all.arguments(arguments, arguments)).to.be.true;
      expect(is.all.arguments([arguments, arguments])).to.be.true;
    });

    it('returns false if any passed parameter type is not arguments', function () {
      expect(is.all.arguments(arguments, ['not', 'arguments'])).to.be.false;
      expect(is.all.arguments([arguments, ['not', 'arguments']])).to.be.false;
    });
  });

  describe('some is.arguments', function () {
    it('returns true if any passed parameter type is arguments', function () {
      expect(is.any.arguments('not arguments', arguments)).to.be.true;
      expect(is.any.arguments(['not arguments', arguments])).to.be.true;
    });

    it('returns false if all passed parameter types are not arguments', function () {
      expect(is.any.arguments('not arguments', null)).to.be.false;
      expect(is.any.arguments(['not arguments', null])).to.be.false;
    });
  });

  describe('is.array', function () {
    it('returns true if passed parameter type is array', function () {
      expect(is.array([])).to.be.true;
    });

    it('returns false if passed parameter type is not array', function () {
      expect(is.array('not array')).to.be.false;
    });
  });

  describe('not is.array', function () {
    it('returns false if passed parameter type is array', function () {
      expect(is.not.array([])).to.be.false;
    });

    it('returns true if passed parameter type is not array', function () {
      expect(is.not.array('')).to.be.true;
    });
  });

  describe('every is.array', function () {
    it('returns true if all passed parameters types are array', function () {
      expect(is.all.array([], [])).to.be.true;
      expect(is.all.array([[], []])).to.be.true;
    });

    it('returns false if any passed parameter type is not array', function () {
      expect(is.all.array('', [])).to.be.false;
      expect(is.all.array(['', []])).to.be.false;
    });
  });

  describe('some is.array', function () {
    it('returns true if any passed parameter type is array', function () {
      expect(is.any.array([], '')).to.be.true;
      expect(is.any.array([[], ''])).to.be.true;
    });

    it('returns false if all passed parameter types are not array', function () {
      expect(is.any.array(1, '')).to.be.false;
      expect(is.any.array([1, ''])).to.be.false;
    });
  });

  describe('is.boolean', function () {
    it('returns true if passed parameter type is boolean', function () {
      expect(is.boolean(true)).to.be.true;
    });

    it('returns false if passed parameter type is not boolean', function () {
      expect(is.boolean('')).to.be.false;
    });
  });

  describe('not is.boolean', function () {
    it('returns true if passed parameter type is not boolean', function () {
      expect(is.not.boolean('')).to.be.true;
    });

    it('returns false if passed parameter type is boolean', function () {
      expect(is.not.boolean(true)).to.be.false;
    });
  });

  describe('every is.boolean', function () {
    it('returns true if all passed parameter types are boolean', function () {
      expect(is.all.boolean(true, false)).to.be.true;
      expect(is.all.boolean([true, false])).to.be.true;
    });

    it('returns false if passed parameter type is boolean', function () {
      expect(is.all.boolean(true, '')).to.be.false;
      expect(is.all.boolean([true, ''])).to.be.false;
    });
  });

  describe('some is.boolean', function () {
    it('returns true if any passed parameter type is boolean', function () {
      expect(is.any.boolean(true, false, '')).to.be.true;
      expect(is.any.boolean([true, false, ''])).to.be.true;
    });

    it('returns false if all passed parameter types are not boolean', function () {
      expect(is.any.boolean('', {}, null)).to.be.false;
      expect(is.any.boolean(['', {}, null])).to.be.false;
    });
  });

  describe('is.date', function () {
    it('returns true if passed parameter type is date', function () {
      expect(is.date(new Date())).to.be.true;
    });

    it('returns false if passed parameter type is not date', function () {
      expect(is.date('')).to.be.false;
    });
  });

  describe('not is.date', function () {
    it('returns false if passed parameter type is date', function () {
      expect(is.not.date(new Date())).to.be.false;
    });

    it('returns true if passed parameter type is not date', function () {
      expect(is.not.date('')).to.be.true;
    });
  });

  describe('every is.date', function () {
    it('returns true if all passed parameter types are date', function () {
      var bday = new Date('02-23-1985');
      expect(is.all.date(bday, new Date())).to.be.true;
      expect(is.all.date([bday, new Date()])).to.be.true;
    });

    it('returns false if any passed parameter type is not date', function () {
      expect(is.all.date(new Date(), '')).to.be.false;
      expect(is.all.date([new Date(), ''])).to.be.false;
    });
  });

  describe('some is.date', function () {
    it('returns true if any passed parameter type is date', function () {
      expect(is.any.date('', new Date())).to.be.true;
      expect(is.any.date(['', new Date()])).to.be.true;
    });

    it('returns false if all passed parameter types are not date', function () {
      expect(is.any.date('', 1, undefined)).to.be.false;
      expect(is.any.date(['', 1, undefined])).to.be.false;
    });
  });

  describe('is.error', function () {
    it('returns true if passed parameter type is error', function () {
      expect(is.error(new Error())).to.be.true;
    });

    it('returns false if passed parameter type is not error', function () {
      expect(is.error('')).to.be.false;
    });
  });

  describe('not is.error', function () {
    it('returns false if passed parameter type is error', function () {
      expect(is.not.error(new Error())).to.be.false;
    });

    it('returns true if passed parameter type is not error', function () {
      expect(is.not.error('')).to.be.true;
    });
  });

  describe('every is.error', function () {
    it('returns true if all passed parameter types are error', function () {
      expect(is.all.error(new Error(), new Error())).to.be.true;
      expect(is.all.error([new Error(), new Error()])).to.be.true;
    });

    it('returns false if any passed parameter type is not error', function () {
      expect(is.all.error(new Error(), '')).to.be.false;
      expect(is.all.error([new Error(), ''])).to.be.false;
    });
  });

  describe('some is.error', function () {
    it('returns true if any passed parameter type is error', function () {
      expect(is.any.error(new Error(), new Date())).to.be.true;
      expect(is.any.error([new Error(), new Date()])).to.be.true;
    });

    it('returns false if all passed parameter types are not error', function () {
      expect(is.any.error(1, 2, 3)).to.be.false;
      expect(is.any.error([1, 2, 3])).to.be.false;
    });
  });

  describe('is.function', function () {
    it('returns true if passed parameter type is function', function () {
      expect(is.function(is.function)).to.be.true;
    });

    it('returns false if passed parameter type is not function', function () {
      expect(is.function('')).to.be.false;
    });
  });

  describe('not is.function', function () {
    it('returns false if passed parameter type is function', function () {
      expect(is.function('')).to.be.false;
    });

    it('returns true if passed parameter type is not function', function () {
      expect(is.not.function(is.function)).to.be.false;
    });
  });

  describe('every is.function', function () {
    it('returns true if all passed parameter types are function', function () {
      expect(is.all.function(is.function, is.string)).to.be.true;
      expect(is.all.function([is.function, is.string])).to.be.true;
    });

    it('returns false if any passed parameter type is not function', function () {
      expect(is.all.function(is.function, [])).to.be.false;
      expect(is.all.function([is.function, []])).to.be.false;
    });
  });

  describe('some is.function', function () {
    it('returns true if any passed parameter type is function', function () {
      expect(is.any.function(is.function, [])).to.be.true;
      expect(is.any.function([is.function, []])).to.be.true;
    });

    it('returns false if all passed parameter types are not function', function () {
      expect(is.any.function(2, '')).to.be.false;
      expect(is.any.function([2, ''])).to.be.false;
    });
  });

  describe('is.nan', function () {
    it('returns true if passed parameter type is NaN', function () {
      expect(is.nan(NaN)).to.be.true;
    });

    it('returns false if passed parameter type is not NaN', function () {
      expect(is.nan('')).to.be.false;
    });
  });

  describe('not is.nan', function () {
    it('returns false if passed parameter type is NaN', function () {
      expect(is.not.nan('')).to.be.true;
    });

    it('returns false if passed parameter type is not NaN', function () {
      expect(is.not.nan(NaN)).to.be.false;
    });
  });

  describe('every is.nan', function () {
    it('returns true if all passed parameter types are NaN', function () {
      expect(is.all.nan(NaN, NaN)).to.be.true;
      expect(is.all.nan([NaN, NaN])).to.be.true;
    });

    it('returns false if any passed parameter type is not NaN', function () {
      expect(is.all.nan(NaN, '')).to.be.false;
      expect(is.all.nan([NaN, ''])).to.be.false;
    });
  });

  describe('some is.nan', function () {
    it('returns true if any passed parameter type is NaN', function () {
      expect(is.any.nan(NaN, NaN, '')).to.be.true;
      expect(is.any.nan([NaN, NaN, ''])).to.be.true;
    });

    it('returns false if all passed parameter types are not NaN', function () {
      expect(is.any.nan('', [])).to.be.false;
      expect(is.any.nan(['', []])).to.be.false;
    });
  });

  describe('is.null', function () {
    it('returns true if passed parameter type is null', function () {
      expect(is.null(null)).to.be.true;
    });

    it('returns false if passed parameter type is not null', function () {
      expect(is.null('')).to.be.false;
    });
  });

  describe('not is.null', function () {
    it('returns false if passed parameter type is null', function () {
      expect(is.not.null(null)).to.be.false;
    });

    it('returns true if passed parameter type is not null', function () {
      expect(is.not.null('')).to.be.true;
    });
  });

  describe('every is.null', function () {
    it('returns true if all passed parameter types are null', function () {
      expect(is.all.null(null, null)).to.be.true;
      expect(is.all.null([null, null])).to.be.true;
    });

    it('returns false if any passed parameter type is not null', function () {
      expect(is.all.null(null, '')).to.be.false;
      expect(is.all.null([null, ''])).to.be.false;
    });
  });

  describe('some is.null', function () {
    it('returns true if any passed parameter type is null', function () {
      expect(is.any.null(null, null, undefined)).to.be.true;
      expect(is.any.null([null, null, undefined])).to.be.true;
    });

    it('returns false if all passed parameter types are not null', function () {
      expect(is.any.null(1, 2)).to.be.false;
      expect(is.any.null([1, 2])).to.be.false;
    });
  });

  describe('is.number', function () {
    it('returns true if passed parameter type is number', function () {
      expect(is.number(1)).to.be.true;
    });

    it('returns false if passed parameter type is not number', function () {
      expect(is.number('')).to.be.false;
    });

    it('returns false if passed parameter is NaN', function () {
      expect(is.number(NaN)).to.be.false;
    });
  });

  describe('not is.number', function () {
    it('returns false if passed parameter type is number', function () {
      expect(is.not.number(1)).to.be.false;
    });

    it('returns true if passed parameter type is not number', function () {
      expect(is.not.number('')).to.be.true;
    });

    it('returns true if passed parameter is NaN', function () {
      expect(is.not.number(NaN)).to.be.true;
    });
  });

  describe('every is.number', function () {
    it('returns true if all passed parameter types are number', function () {
      expect(is.all.number(1, 2)).to.be.true;
      expect(is.all.number([1, 2])).to.be.true;
    });

    it('returns false if any passed parameter type is not number', function () {
      expect(is.all.number(1, '')).to.be.false;
      expect(is.all.number([1, ''])).to.be.false;
    });
  });

  describe('some is.number', function () {
    it('returns true if any passed parameter type is number', function () {
      expect(is.any.number(1, 2, NaN)).to.be.true;
      expect(is.any.number([1, 2, NaN])).to.be.true;
    });

    it('returns false if all passed parameter types are not number', function () {
      expect(is.any.number(null, '')).to.be.false;
      expect(is.any.number([null, ''])).to.be.false;
    });
  });

  describe('is.object', function () {
    it('returns true if passed parameter type is object', function () {
      expect(is.object({})).to.be.true;
    });

    it('returns false if passed parameter type is not object', function () {
      expect(is.object('')).to.be.false;
    });
  });

  describe('not is.object', function () {
    it('returns false if passed parameter type is object', function () {
      expect(is.not.object({})).to.be.false;
    });

    it('returns true if passed parameter type is not object', function () {
      expect(is.not.object('')).to.be.true;
    });
  });

  describe('every is.object', function () {
    it('returns true if all passed parameter types are object', function () {
      expect(is.all.object({}, {})).to.be.true;
      expect(is.all.object([{}, {}])).to.be.true;
    });

    it('returns false if any passed parameter type is not object', function () {
      expect(is.all.object({}, '')).to.be.false;
      expect(is.all.object([{}, ''])).to.be.false;
    });
  });

  describe('some is.object', function () {
    it('returns true if any passed parameter type is object', function () {
      expect(is.any.object({}, {}, '')).to.be.true;
      expect(is.any.object([{}, {}, ''])).to.be.true;
    });

    it('returns false if all passed parameter types are not object', function () {
      expect(is.any.object(1, 2, 3)).to.be.false;
      expect(is.any.object([1, 2, 3])).to.be.false;
    });
  });

  describe('is.json', function () {
    it('returns true if passed parameter type is a json object', function () {
      expect(is.json('{ "some": "value" }')).to.be.true;
    });

    it('returns false if passed parameter type is not a json object', function () {
      expect(is.json('')).to.be.false;
    });
  });

  describe('not is.json', function () {
    it('returns false if passed parameter type is json object', function () {
      expect(is.not.json('{ "foo": "bar" }')).to.be.false;
    });

    it('returns true if passed parameter type is not json object', function () {
      expect(is.not.json('')).to.be.true;
    });
  });

  describe('every is.json', function () {
    it('returns true if all passed parameter types are object', function () {
      expect(is.all.json('{ "foo": "bar" }', '{ "baz": "qux" }')).to.be.true;
      expect(is.all.json(['{ "foo": "bar" }', '{ "baz": "qux" }'])).to.be.true;
    });

    it('returns false if any passed parameter type is not object', function () {
      expect(is.all.json('{ "foo": "bar" }', 1, [])).to.be.false;
      expect(is.all.json(['{ "foo": "bar" }', 1, []])).to.be.false;
    });
  });

  describe('some is.json', function () {
    it('returns true if any passed parameter type is json object', function () {
      expect(is.any.json('{ "foo": "bar" }', '{}', '')).to.be.true;
      expect(is.any.json(['{ "foo": "bar" }', '{}', ''])).to.be.true;
    });

    it('returns false if all passed parameter types are not json object', function () {
      expect(is.any.json(1, 2, 3)).to.be.false;
      expect(is.any.json([1, 2, 3])).to.be.false;
    });
  });

  describe('is.regexp', function () {
    it('returns true if passed parameter type is regexp', function () {
      expect(is.regexp(/reg/)).to.be.true;
    });

    it('returns false if passed parameter type is not regexp', function () {
      expect(is.regexp('')).to.be.false;
    });
  });

  describe('not is.regexp', function () {
    it('returns false if passed parameter type is regexp', function () {
      expect(is.not.regexp(/reg/)).to.be.false;
    });

    it('returns true if passed parameter type is not regexp', function () {
      expect(is.not.regexp('')).to.be.true;
    });
  });

  describe('every is.regexp', function () {
    it('returns true if all passed parameter types are regexp', function () {
      expect(is.all.regexp(/reg/, /reg/)).to.be.true;
      expect(is.all.regexp([/reg/, /reg/])).to.be.true;
    });

    it('returns false if any passed parameter type is not regexp', function () {
      expect(is.all.regexp(/reg/, '')).to.be.false;
      expect(is.all.regexp([/reg/, ''])).to.be.false;
    });
  });

  describe('some is.regexp', function () {
    it('returns true if any passed parameter type is regexp', function () {
      expect(is.any.regexp(/reg/, /reg/, 1)).to.be.true;
      expect(is.any.regexp([/reg/, /reg/, 1])).to.be.true;
    });

    it('returns false if any passed parameter type is not regexp', function () {
      expect(is.any.regexp(1, 2)).to.be.false;
      expect(is.any.regexp([1, 2])).to.be.false;
    });
  });

  describe('is.sameType', function () {
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
  });

  describe('not is.sameType', function () {
    it('returns false if passed parameter types are same', function () {
      expect(is.not.sameType(1, 2)).to.be.false;
      expect(is.not.sameType('', '')).to.be.false;
    });

    it('returns true if passed parameter types are not same', function () {
      expect(is.not.sameType(1, '')).to.be.true;
    });
  });

  describe('is.char', function () {
    it('returns true if passed parameter type is char', function () {
      expect(is.char('i')).to.be.true;
    });

    it('returns false if passed parameter type is not a char', function () {
      expect(is.char('')).to.be.false;
    });
  });

  describe('not is.char', function () {
    it('returns false if passed parameter type is char', function () {
      expect(is.not.char('i')).to.be.false;
    });

    it('returns true if passed parameter type is not char', function () {
      expect(is.not.char(1)).to.be.true;
    });
  });

  describe('every is.char', function () {
    it('returns true if all passed parameter types are char', function () {
      expect(is.all.char('i', 's')).to.be.true;
      expect(is.all.char(['i', 's'])).to.be.true;
    });

    it('returns false if any passed parameter type is not char', function () {
      expect(is.all.char('', 1)).to.be.false;
      expect(is.all.char(['', 1])).to.be.false;
    });
  });

  describe('some is.char', function () {
    it('returns true if any passed parameter type is char', function () {
      expect(is.any.char('i', 1)).to.be.true;
      expect(is.any.char(['i', 1])).to.be.true;
    });

    it('returns false if all passed parameter types are not char', function () {
      expect(is.any.char(null, 1)).to.be.false;
      expect(is.any.char([null, 1])).to.be.false;
    });
  });

  describe('is.string', function () {
    it('returns true if passed parameter type is string', function () {
      expect(is.string('')).to.be.true;
    });

    it('returns false if passed parameter type is not string', function () {
      expect(is.string(1)).to.be.false;
    });
  });

  describe('not is.string', function () {
    it('returns false if passed parameter type is string', function () {
      expect(is.not.string('')).to.be.false;
    });

    it('returns true if passed parameter type is not string', function () {
      expect(is.not.string(1)).to.be.true;
    });
  });

  describe('every is.string', function () {
    it('returns true if all passed parameter types are string', function () {
      expect(is.all.string('', '')).to.be.true;
      expect(is.all.string(['', ''])).to.be.true;
    });

    it('returns false if any passed parameter type is not string', function () {
      expect(is.all.string('', 1)).to.be.false;
      expect(is.all.string(['', 1])).to.be.false;
    });
  });

  describe('some is.string', function () {
    it('returns true if any passed parameter type is string', function () {
      expect(is.any.string('', 1)).to.be.true;
      expect(is.any.string(['', 1])).to.be.true;
    });

    it('returns false if all passed parameter types are not string', function () {
      expect(is.any.string(null, 1)).to.be.false;
      expect(is.any.string([null, 1])).to.be.false;
    });
  });

  describe('is.undefined', function () {
    it('returns true if passed parameter type is undefined', function () {
      expect(is.undefined(undefined)).to.be.true;
    });

    it('returns false if passed parameter type is not undefined', function () {
      expect(is.undefined(null)).to.be.false;
      expect(is.undefined('')).to.be.false;
    });
  });

  describe('not is.undefined', function () {
    it('returns false if passed parameter type is undefined', function () {
      expect(is.not.undefined(undefined)).to.be.false;
    });

    it('returns false if passed parameter type is not undefined', function () {
      expect(is.not.undefined('')).to.be.true;
    });
  });

  describe('every is.undefined', function () {
    it('returns true if all passed parameter types are undefined', function () {
      expect(is.all.undefined(undefined, undefined)).to.be.true;
      expect(is.all.undefined([undefined, undefined])).to.be.true;
    });

    it('returns false if any passed parameter type is not undefined', function () {
      expect(is.all.undefined(undefined, null)).to.be.false;
      expect(is.all.undefined([undefined, null])).to.be.false;
    });
  });

  describe('some is.undefined', function () {
    it('returns true if any passed parameter type is undefined', function () {
      expect(is.any.undefined('', undefined)).to.be.true;
      expect(is.any.undefined(['', undefined])).to.be.true;
    });

    it('returns false if any passed parameter type is not undefined', function () {
      expect(is.any.undefined(2, null)).to.be.false;
      expect(is.any.undefined([2, null])).to.be.false;
    });
  });

});
