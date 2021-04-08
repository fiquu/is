import * as arithmetic from './arithmetic';
import * as presence from './presence';
import * as browser from './browser';
import * as device from './device';
import * as object from './object';
import * as regexp from './regexp';
import * as string from './string';
import * as array from './array';
import * as type from './type';
import * as os from './os';

export = Object.freeze({
  ...arithmetic,
  ...presence,
  ...browser,
  ...device,
  ...object,
  ...regexp,
  ...string,
  ...array,
  ...type,
  ...os
});
