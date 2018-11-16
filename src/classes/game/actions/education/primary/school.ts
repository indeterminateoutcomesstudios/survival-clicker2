import { Action, Unlocks } from '@/classes/game/base/actions';
import { Mutation } from '@/classes/game/base/mutations';
import { SerializeAllOn } from '@/classes/game/base/serialization';
import { Effect } from '@/classes/game/base/modifiers';
import Decimal from 'decimal.js';

@SerializeAllOn('emit')
export class School extends Action {
  energy = new Effect({
    modifier: () => this.modifiers.character.intake.energy,
    duration: () => 30,
    value: () => new Decimal(-0.5),
  });

  school = new Mutation(() => this.stats.education.school, () => {
    return new Decimal(1);
  });

  @Unlocks
  money = new Mutation(() => this.stats.finance.money, () => {
    const timesBought = this.stats.education.school.value;
    const base = new Decimal(50).mul(new Decimal(1.5).pow(timesBought));
    return this.modifiers.finance.costAdd.value.mul(base).ceil().negated();
  });
}
