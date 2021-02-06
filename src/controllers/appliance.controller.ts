import Appliance, { IAppliance } from "../models/appliance.model";
import { CreateQuery, FilterQuery, UpdateQuery } from "mongoose";

async function CreateAppliance({
  powerState,
  deviceName,
}: CreateQuery<IAppliance>): Promise<IAppliance | void> {
  return Appliance.create({
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
  _id,
}: FilterQuery<IAppliance>): Promise<IAppliance | void> {
  return Appliance.findOne({
    _id,
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
  _id,
  powerState,
  deviceName,
}: UpdateQuery<IAppliance>): Promise<IAppliance | void | Error> {
  return Appliance.findOneAndUpdate(
    { _id },
    {
      powerState,
      deviceName,
    },
    {
      new: true,
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
  _id,
}: UpdateQuery<IAppliance>): Promise<IAppliance | void> {
  return Appliance.deleteOne({
    _id,
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
