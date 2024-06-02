import { Container } from 'meta-utils';

import EN from './descriptions/en/index';
import Any from './signatures/any.json';
import Generic from './signatures/general.json';
import List from './signatures/list.json';
import MapSignature from './signatures/map.json';
import NumberSignature from './signatures/number.json';
import String from './signatures/string.json';
import Version from './signatures/version.json';

export const miniscriptMeta = new Container();

miniscriptMeta.addTypeSignatureFromPayload(Any);
miniscriptMeta.addTypeSignatureFromPayload(Generic);
miniscriptMeta.addTypeSignatureFromPayload(List);
miniscriptMeta.addTypeSignatureFromPayload(MapSignature);
miniscriptMeta.addTypeSignatureFromPayload(NumberSignature);
miniscriptMeta.addTypeSignatureFromPayload(String);
miniscriptMeta.addTypeSignatureFromPayload(Version);

miniscriptMeta.addMetaFromPayload('en', EN);
