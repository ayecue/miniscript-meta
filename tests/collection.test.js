const { miniscriptMeta } = require('../dist');
const GeneralSignatures = require('../dist/signatures/general.json');
const StringSignatures = require('../dist/signatures/string.json');
const EN = require('../dist/descriptions/en').default;

describe('collection', () => {
  test('should return signatures', () => {
    expect(miniscriptMeta.getSignaturesByType('general')).toEqual(GeneralSignatures);
  });

  test('should return description', () => {
    expect(miniscriptMeta.getDescription('general', 'print')).toEqual(EN.general.print.description);
  });

  test('should return example', () => {
    expect(miniscriptMeta.getExample('general', 'print')).toEqual(EN.general.print.example);
  });

  test('should return definitions', () => {
    const result = miniscriptMeta.getDefinitions(['string']);

    expect(result.split).toEqual({
      arguments: StringSignatures.split.arguments,
      returns: StringSignatures.split.returns,
      description: EN.string.split.description,
      example: EN.string.split.example
    });
  });

  test('should return definition', () => {
    expect(miniscriptMeta.getDefinition(['string'], 'split')).toEqual({
      arguments: StringSignatures.split.arguments,
      returns: StringSignatures.split.returns,
      description: EN.string.split.description,
      example: EN.string.split.example
    });
  });

  test('should create fork', () => {
    const result = miniscriptMeta.fork();

    expect(result.signatures).toEqual(miniscriptMeta.signatures);
    expect(result.meta).toEqual(miniscriptMeta.meta);
  });

  test('should override fork but keep original', () => {
    const result = miniscriptMeta.fork();

    result.addMeta('en', {
      'general': {
        'print': {
          description: 'test',
          example: ['test']
        }
      }
    });

    expect(result.getDescription('general', 'print')).toEqual('test');
    expect(miniscriptMeta.getDescription('general', 'print')).toEqual(EN.general.print.description);
  });
});