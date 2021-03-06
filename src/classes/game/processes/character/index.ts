import { StaminaRestore } from './stamina-restore';
import { Digestion } from './digestion';
import { Dehydration } from './dehydration';
import { Starvation } from './starvation';
import { KeepAlive } from './keep-alive';
import { Healing } from './healing';
import { ProcessContainer } from '@/classes/game/base/processes';
import { Intake } from './intake';
import { Thermoregulation } from './thermoregulation';

export class Character extends ProcessContainer {
  intake = new Intake();
  thermoregulation = new Thermoregulation();

  staminaRestore = new StaminaRestore();
  digestion = new Digestion();
  dehydration = new Dehydration();
  starvation = new Starvation();
  keepAlive = new KeepAlive();
  healing = new Healing();
}
