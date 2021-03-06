import { Serializable, SerializeAllOn } from '@/classes/game/base/serialization';
import { Construction } from './construction';
import { InformationTechnology } from './information-technology';

@SerializeAllOn('emit', 'store')
export class Secondary extends Serializable {
  construction = new Construction();
  informationTechnology = new InformationTechnology();
}
