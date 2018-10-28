import { Decimal } from 'decimal.js';
import { SerializableWithReference, UnserializeAs, SerializeOn } from '@/classes/game/base/serialization';
import { LimitFlag } from '.';
import { MutationFunction } from '@/classes/game/base/effects';

export abstract class Value extends SerializableWithReference {
  abstract default: number | string;
  /**
   * Standard value stat 99% of the time will default to zero as minimum value
   */
  minimum: number | string = 0;

  @SerializeOn('store')
  @UnserializeAs(input => new Decimal(input.toString()))
  current?: Decimal;

  @SerializeOn('emit')
  get value(): Decimal {
    if (this.current === undefined) {
      this.current = new Decimal(this.default);
    }

    return this.current;
  }

  mutate(mutateFunc: MutationFunction) {
    const mutated = mutateFunc(this.value);

    const flag = this.probe(mutateFunc);

    if (flag === 'lessThanMinimum') {
      this.current = new Decimal(this.minimum);

      this.onLessThanMinimum();
    } else {
      this.current = mutated;
    }
  }

  probe(mutateFunc: MutationFunction): LimitFlag {
    const mutated = mutateFunc(this.value);

    if (mutated.lessThan(this.minimum)) {
      return 'lessThanMinimum';
    }

    return true;
  }

  /**
   * Is triggered when value floors to the minimum after mutation
   */
  protected onLessThanMinimum(): void {
    //
  }
}
