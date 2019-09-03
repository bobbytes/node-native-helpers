// tslint:disable: max-classes-per-file

export class ExpireMapEntry<V> {
  constructor(
    public value: V | undefined,
    public timestamp: number
  ) { }
}

/**
 * Set an expiration in milliseconds. Expired entries are removed before every Map method call.
 * Due to performance no setTimeout is implemented yet.
 */
export class ExpireMap<K = any, V = any> extends Map {
  /**
   * Returns the value associated to the key, or undefined if there is none.
   * @param {*} key - key of Map entry
   */
  public get(key: K): V | undefined {
    this.cleanUp();

    const expireMapEntry = super.get(key);

    return expireMapEntry ? expireMapEntry.value : undefined;
  }

  /**
   * Sets the value for the key in the Map object. Returns the Map object.
   * @param {*} key - key of Map entry
   * @param {*} value - Map value
   * @param {number} [durationMs=0] - at least milliseconds entry should be alive. 0 = no expiration.
   */
  public set(key: K, value: V, durationMs: number = 0): this {
    const endTimestamp = durationMs > 0 ? Date.now() + durationMs : 0;
    const expireMapEntry = new ExpireMapEntry<V>(value, endTimestamp);
    super.set(key, expireMapEntry);

    this.cleanUp();

    return this;
  }

  /**
   * Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
   * @param {*} key - key of Map entry
   */
  public has(key: K): boolean {
    this.cleanUp();
    return super.has(key);
  }

  /**
   * Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
   */
  public keys(): IterableIterator<K> {
    this.cleanUp();
    return super.keys();
  }

  /**
   * Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
   */
  public values(): IterableIterator<V> {
    this.cleanUp();

    const superValues = Array.from(super.values());
    const values = superValues.map(superValue => superValue.value) as [V];

    return values[Symbol.iterator]();
  }

  /**
   * Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
   */
  public entries(): IterableIterator<[K, V]> {
    this.cleanUp();

    const superEntries = Array.from(super.entries());
    const entries = superEntries.map(([key, value]) => [key, value.value]) as [K, V][];

    return entries[Symbol.iterator]();
  }

  /**
   * Calls callbackFn once for each key-value pair present in the Map object, in insertion order.
   * If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
   * @param {Function} callbackfn - called once for each key-value pair present in the Map object, in insertion order.
   * @param {*} [thisArg] - If provided, it will be used as the this value for each callback.
   */
  public forEach(callbackfn: (value: any, key: any, map: Map<any, any>) => void, thisArg?: any): void {
    this.cleanUp();
    return super.forEach(callbackfn, thisArg);
  }

  /**
   * Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
   * Map.prototype.has(key) will return false afterwards.
   * @param {*} key - key of Map entry
   */
  public delete(key: K): boolean {
    this.cleanUp();
    return super.delete(key);
  }

  /**
   * Returns the number of key/value pairs in the Map object.
   */
  public get size(): number {
    this.cleanUp();
    return this.size;
  }

  /**
   * Deletes expired map entries
   */
  private cleanUp(): void {
    super.forEach((entry: ExpireMapEntry<V | undefined>, key: K) => {
      if (entry.timestamp > 0 && Date.now() > entry.timestamp) {
        super.delete(key);
      }
    });
  }
}
