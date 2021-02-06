import Job, { IJob } from "../models/Job.model";
import { CreateQuery, FilterQuery, UpdateQuery } from "mongoose";

async function CreateJob({
  id,
  deviceId,
  jobName,
  startTime,
  endTime,
}: CreateQuery<IJob>): Promise<IJob | void> {
  return Job.create({
    id,
    deviceId,
    jobName,
    startTime,
    endTime,
  })
    .then((data: IJob) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function ReadJob({ id }: FilterQuery<IJob>): Promise<IJob | void> {
  return Job.findOne({
    id,
  })
    .then((data: IJob) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function ReadAllJob(): Promise<IJob[] | void> {
  return Job.find({})
    .then((data: IJob[]) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function UpdateJob({
  id,
  deviceId,
  jobName,
  startTime,
  endTime,
}: UpdateQuery<IJob>): Promise<IJob | void> {
  return Job.findOneAndUpdate(
    { id },
    {
      deviceId,
      jobName,
      startTime,
      endTime,
    }
  )
    .then((data: IJob) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function DeleteJob({ id }: UpdateQuery<IJob>): Promise<IJob | void> {
  return Job.deleteOne({
    id,
  })
    .then((data: IJob) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

/** Job creation/modification methods */
export default {
  CreateJob,
  ReadJob,
  ReadAllJob,
  UpdateJob,
  DeleteJob,
};
