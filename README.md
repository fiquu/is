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
import { isString } from '@fiquu/is';

isString('foo'); // true
isString(2); // false

number(1); // true
number('1'); // false

intlPhone('+12015556677'); // true
intlPhone('1234'); // false
```

```ts
import { isNumber, isString } from '@fiquu/is/type';
import { isIntlPhone } from '@fiquu/is/regexp';

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

['foo', 'bar'].every(isString); // true
[1, 2, 'baz'].every(isString); // false

[1, 2, 3, 4].every(isNumber); // true
[1, 2, 'foo'].every(isNumber); // false

['foo', 'bar', true].some(isString); // true
[1, 2, 'baz'].some(isString); // false

[1, null, '3'].some(isNumber); // true
[false, null, 'foo'].some(isNumber); // false
```

## Documentation

Please see [the documentation page](https://fiquu.github.io/is/) for more details.
