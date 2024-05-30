const { miniscriptMeta } = require('../dist');

describe('miniscriptMeta', () => {
  let meta = null;

  test('should return signatures', () => {
    expect(miniscriptMeta.getSignaturesByType('general')).not.toBeNull();
  });
});