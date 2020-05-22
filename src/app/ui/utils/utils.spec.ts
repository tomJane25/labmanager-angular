import { clearObject } from './utils';

describe('Utils', () => {
  const testObject = {key1: 'A', key2: 'B'};

  it('should clear object', () => {
    clearObject(testObject);
    expect(testObject.key1).toBeNull();
    expect(testObject.key2).toBeNull();
  });
});
