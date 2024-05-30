const { miniscriptMeta } = require('../dist');

describe('miniscriptMeta', () => {
  test('should return signatures', () => {
    expect(miniscriptMeta.getSignaturesByType('general')).not.toBeNull();
  });
});