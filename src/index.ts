import { Collection } from 'meta-utils';

import EN from './descriptions/en/index';
import Any from './signatures/any.json';
import Generic from './signatures/general.json';
import List from './signatures/list.json';
import MapSignature from './signatures/map.json';
import NumberSignature from './signatures/number.json';
import String from './signatures/string.json';

export const miniscriptMeta = new Collection();

miniscriptMeta.addSignature('any', Any);
miniscriptMeta.addSignature('general', Generic);
miniscriptMeta.addSignature('list', List);
miniscriptMeta.addSignature('map', MapSignature);
miniscriptMeta.addSignature('number', NumberSignature);
miniscriptMeta.addSignature('string', String);

miniscriptMeta.addMeta('en', EN);
