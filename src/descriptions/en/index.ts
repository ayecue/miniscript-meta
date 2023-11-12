import { Descriptions } from 'meta-utils';

import Any from './any.json';
import Generic from './general.json';
import List from './list.json';
import MapLanguage from './map.json';
import Number from './number.json';
import String from './string.json';

const descriptions: Descriptions = {
  any: Any,
  general: Generic,
  list: List,
  map: MapLanguage,
  string: String,
  number: Number
};

export default descriptions;
