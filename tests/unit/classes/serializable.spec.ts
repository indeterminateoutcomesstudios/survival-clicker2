/* tslint:disable:max-classes-per-file only-arrow-functions no-unused-expression */

import { Serializable, SerializeOn, SerializeAs, UnserializeAs } from '@/classes/game/base/serialization';
import { expect } from 'chai';

class ChildClass extends Serializable {
  @SerializeOn('emit')
  @SerializeAs((input: string) => input)
  @UnserializeAs(input => input)
  public someText: string = 'someValue';

  @SerializeOn('emit')
  get someGetter() {
    return this.someText + 'FromGetter';
  }
}

class ParentClass extends Serializable {
  @SerializeOn('emit')
  public someProperty = new ChildClass();
}

describe('serializable.ts', () => {
  const serializable = new ParentClass();

  it('serializes', () => {
    expect(serializable).has.property('serialize');
    const serialized = serializable.serialize('emit');
    expect(serialized).to.be.not.null;
    expect(serialized).has.property('someProperty');
  });

  it('serializes children property correctly', () => {
    const serialized = serializable.serialize('emit');
    expect(serialized.someProperty).property('someText').exist;
    expect(serialized.someProperty).property('someText').equals('someValue');
  });

  it('serializes a defined getter correctly', () => {
    const serialized = serializable.serialize('emit');
    expect(serialized.someProperty).property('someGetter').exist;
    expect(serialized.someProperty).property('someGetter').equals('someValueFromGetter');
  });

  it('unserializes children property correctly', () => {
    serializable.unserialize({ someProperty: { someText: 'unserializedValue' } });
    expect(serializable.someProperty.someText).to.be.equal('unserializedValue');
  });
});
