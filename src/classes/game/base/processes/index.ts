import Decimal from 'decimal.js';
import { Effect } from './effect';

enum ProcessType {
    Manual = 'manual',
    Auto = 'auto',
}

export abstract class Process {
  public abstract readonly type: ProcessType;

  public abstract readonly input: Effect[];
  public abstract readonly output: Effect[];
}