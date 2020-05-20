import { clearObject } from './utils';

describe('Utils', () => {
  const testObject = {
    key1: 'value',
    key2: 'value',
    key3: 0,
  };

  it('should clear object', () => {
    clearObject(testObject);
    expect(testObject.key1).toBeNull();
    expect(testObject.key2).toBeNull();
    expect(testObject.key3).toBeNull();
  });
});
