
class HashTable {
  constructor(size = 53) {
    /** @member {array} */
    this.keyMap = new Array(size);
  }

  /**
   * 
   * @param {string} keys
   * @returns {number}
   */
  hash(keys) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(keys.length, 100); i++) {
      const value = keys[i].charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  /**
   * 
   * @param {string} key
   * @param {(string|number|boolean|object|array)} value
   */
  set(key, value) {
    const idx = this.hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, value])
  }

  getKey(keyValue) {
    return keyValue[0];
  }

  getValue(keyValue) {
    return keyValue[1];
  }

  /**
   *
   * @param {string} key
   * @returns the value inside the hash table, if not present, undefined.
   */
  get(key) {
    const idx = this.hash(key);
    if (!this.keyMap[idx]) return undefined;

    const keyValue = this.keyMap[idx].find(keyValue => this.getKey(keyValue) === key)
    return this.getValue(keyValue);
  }

  collect(transform) {
    if(this.keyMap.length === 0) undefined;
    const collection = [];
    this.keyMap.forEach(keyValues => {
      if(keyValues.length > 1) {
        keyValues.forEach(keyValue => collection.push(transform(keyValue)));
      } else {
        collection.push(transform(keyValues[0]));
      }
    });
    
    return collection;
  }
  
  keys() {
    return this.collect(this.getKey);
  }

  values() {
    return this.collect(this.getValue);
  }
}

module.exports = HashTable;