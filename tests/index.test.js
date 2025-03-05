const { miniscriptMeta } = require('../dist');

describe('miniscriptMeta', () => {
  test('should return signatures', () => {
    expect(miniscriptMeta.getTypeSignature('general')).not.toBeNull();
  });

  test('should return multiple matches', () => {
    const matches = miniscriptMeta.searchDefinitionMatches(['map', 'string', 'list'], 'hasIndex');
    expect([...matches.keys()]).toEqual(['map', 'string', 'list']);
  });

  test('should return parent match', () => {
    const matches = miniscriptMeta.searchDefinitionMatches('version', 'hasIndex');
    expect([...matches.keys()]).toEqual(['map']);
  });

  test('should return available tags', () => {
    const tags = miniscriptMeta.getAvailableTags();
    expect(tags).toEqual(['method', 'function']);
  });

  test('should return available signatures for id', () => {
    const signaturesForHasIndex = miniscriptMeta.getDefinitionsById('hasIndex');
    expect(signaturesForHasIndex.map((it) => it.getOrigin())).toEqual(['any', 'general', 'string', 'list', 'map']);
  });
});