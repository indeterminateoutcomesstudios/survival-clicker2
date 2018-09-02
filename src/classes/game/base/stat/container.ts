import { Decimal } from 'decimal.js';
import { Stat, StatOptions } from './stat';

type MaximumFunction = () => Decimal;

export interface ContainerOptions extends StatOptions {
  maximumFunction: MaximumFunction;
}

export class Container extends Stat {
  private maximumFunction: MaximumFunction;

  constructor(options: ContainerOptions) {
    super(options);
    this.maximumFunction = options.maximumFunction;
  }

  get maximum(): Decimal {
    const currentMaximum = this.maximumFunction();

    return currentMaximum;
  }
}
