import { Process } from '@/classes/game/base/processes/process';
import { Effect } from '@/classes/game/base/effects';

export class Digestion extends Process {
  drainStomach = new Effect(() => this.stats.character.stomach, value => {
    return value.sub(this.modifiers.character.digestionSpeed.value);
  });
}
