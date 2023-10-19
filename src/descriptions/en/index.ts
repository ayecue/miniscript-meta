import { Descriptions } from '../../types';
import Any from './any.json';
import Generic from './general.json';
import List from './list.json';
import MapLanguage from './map.json';
import String from './string.json';
import Number from './number.json';

const descriptions: Descriptions = {
  any: Any,
  general: Generic,
  list: List,
  map: MapLanguage,
  string: String,
  number: Number
};

export default descriptions;
