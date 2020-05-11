const HashTable = require('./hashTable');

describe('HashTable spec', () => {
  test('set and get', () => {
    const Hash = new HashTable(2);

    Hash.set('harry', 'potter');
    Hash.set('lord', 'voldemort');
    Hash.set('lol', 'lolita');

    expect(Hash.get('harry')).toBe('potter');
    expect(Hash.get('lord')).toBe('voldemort')
    expect(Hash.get('lol')).toBe('lolita');
  });
})
