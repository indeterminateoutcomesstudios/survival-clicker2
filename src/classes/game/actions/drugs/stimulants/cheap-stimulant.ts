import { Action, UnlocksWhen } from '@/classes/game/base/actions';
import { Mutation } from '@/classes/game/base/mutations';
import { SerializeAllOn } from '@/classes/game/base/serialization';
import { Effect } from '@/classes/game/base/modifiers';
import Decimal from 'decimal.js';

@SerializeAllOn('emit')
@UnlocksWhen(action => action.stats.education.medicine.value.greaterThanOrEqualTo(1))
export class CheapStimulant extends Action {
  drainEnergy = new Effect({
    modifier: () => this.modifiers.character.intake.energy,
    duration: () => 60,
    value: () => new Decimal(-0.1),
  });

  restoreStamina = new Effect({
    modifier: () => this.modifiers.character.staminaRestoreSpeed,
    duration: () => 5,
    value: () => new Decimal(5),
  });

  stomach = new Mutation(() => this.stats.character.stomach, () => {
    return new Decimal(1);
  });

  money = new Mutation(() => this.stats.finance.money, () => {
    return this.modifiers.finance.costAdd.value.mul(10).ceil().negated();
  });
}
