import * as environment from './environment';
import * as arithmetic from './arithmetic';
import * as presence from './presence';
import * as object from './object';
import * as regexp from './regexp';
import * as string from './string';
import * as array from './array';
import * as type from './type';

export = Object.freeze({
  ...environment,
  ...arithmetic,
  ...presence,
  ...object,
  ...regexp,
  ...string,
  ...array,
  ...type
});
