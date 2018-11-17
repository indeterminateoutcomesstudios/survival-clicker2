import { School } from './school';
import { DriversLicense } from './drivers-license';
import { Serializable, SerializeAllOn } from '@/classes/game/base/serialization';

@SerializeAllOn('emit', 'store')
export class Education extends Serializable {
  school = new School();
  driversLicense = new DriversLicense();
}