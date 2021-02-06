import Appliance, { IAppliance } from "../models/appliance.model";
import { CreateQuery, FilterQuery, UpdateQuery } from "mongoose";

async function CreateAppliance({
  id,
  powerState,
  deviceName,
}: CreateQuery<IAppliance>): Promise<IAppliance | void> {
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

async function ReadAppliance({
  id,
}: FilterQuery<IAppliance>): Promise<IAppliance | void> {
  return Appliance.findOne({
    id,
  })
    .then((data: IAppliance) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function ReadAllAppliance(): Promise<IAppliance[] | void> {
  return Appliance.find({})
    .then((data: IAppliance[]) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function UpdateAppliance({
  id,
  powerState,
  deviceName,
}: UpdateQuery<IAppliance>): Promise<IAppliance | void | Error> {
  return Appliance.findOneAndUpdate(
    { id },
    {
      powerState,
      deviceName,
    }
  )
    .then((data: IAppliance) => {
      return data;
    })
    .catch((error: Error) => {
      return error;
    });
}

async function DeleteAppliance({
  id,
}: UpdateQuery<IAppliance>): Promise<IAppliance | void> {
  return Appliance.deleteOne({
    id,
  })
    .then((data: IAppliance) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

/** Appliance creation/modification methods */
export default {
  CreateAppliance,
  ReadAppliance,
  ReadAllAppliance,
  UpdateAppliance,
  DeleteAppliance,
};
