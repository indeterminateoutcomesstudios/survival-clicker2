import { Serializable, SerializeAllOn } from '@/classes/game/base/serialization';
import { Multiplier } from './multiplier';
import { Queue } from './queue';

@SerializeAllOn('emit', 'store')
export class Interaction extends Serializable {
  multiplier = new Multiplier();
  queue = new Queue();
}
