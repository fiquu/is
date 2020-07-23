# @fiquu/is

[![Build Status](https://travis-ci.org/fiquu/is.svg?branch=master)](https://travis-ci.org/fiquu/is)
![GitHub](https://img.shields.io/github/license/fiquu/is)
![GitHub last commit](https://img.shields.io/github/last-commit/fiquu/is)
![npm (scoped)](https://img.shields.io/npm/v/@fiquu/is)
![npm](https://img.shields.io/npm/dw/@fiquu/is)

Functional, dependency-free check library for Node.js and the browser (transpiled).

## Installation

```sh
npm i @fiquu/is
```

## Usage

Import all or just what you need:

```ts
import is from '@fiquu/is';

is.string('foo'); // true
is.string(2); // false

is.number(1); // true
is.number('1'); // false

is.intlPhone('+12015556677'); // true
is.intlPhone('1234'); // false
```

```ts
import { number as isNumber, string as isString } from '@fiquu/is/type';
import { intlPhone as isIntlPhone } from '@fiquu/is/regexp';

isString('foo'); // true
isSstring(2); // false

isNumber(1); // true
isNumber('1'); // false

isIntlPhone('+12015556677'); // true
isIntlPhone('1234'); // false
```

### Multiple Values

If you need to check multiple values, then use the `some` and `every` array methods:

```ts
import is from '@fiquu/is';

['foo', 'bar'].every(is.string); // true
[1, 2, 'baz'].every(is.string); // false

[1, 2, 3, 4].every(is.number); // true
[1, 2, 'foo'].every(is.number); // false

['foo', 'bar', true].some(is.string); // true
[1, 2, 'baz'].some(is.string); // false

[1, null, '3'].some(is.number); // true
[false, null, 'foo'].some(is.number); // false
```

## Documentation

Please see [the documentation page](https://fiquu.github.io/is/) for more details.
