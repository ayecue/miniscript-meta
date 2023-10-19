import { Collection } from "./lib/collection";
import Any from './signatures/any.json';
import Generic from './signatures/general.json';
import List from './signatures/list.json';
import MapSignature from './signatures/map.json';
import NumberSignature from './signatures/number.json';
import String from './signatures/string.json';
import EN from './descriptions/en/index';

export const miniscriptMeta = new Collection();

miniscriptMeta.addSignature('any', Any);
miniscriptMeta.addSignature('general', Generic);
miniscriptMeta.addSignature('list', List);
miniscriptMeta.addSignature('map', MapSignature);
miniscriptMeta.addSignature('number', NumberSignature);
miniscriptMeta.addSignature('string', String);

miniscriptMeta.addMeta('en', EN);

export { Collection } from './lib/collection';
export * from './types';