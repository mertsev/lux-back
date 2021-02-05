import Appliance, { IAppliance } from '../models/appliance.model';
import { CreateQuery } from 'mongoose';

async function CreateAppliance({
    id,
    powerState,
    deviceName,
}: CreateQuery<IAppliance>): Promise<IAppliance|void> {
  return Appliance.create({
    id,
    powerState,
    deviceName,
  })
    .then((data: IAppliance) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

export default {
  CreateAppliance
};
