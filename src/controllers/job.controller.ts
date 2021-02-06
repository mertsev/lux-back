import Job, { IJob } from "../models/Job.model";
import { CreateQuery, FilterQuery, UpdateQuery } from "mongoose";

async function CreateJob({
  deviceId,
  jobName,
  startTime,
  endTime,
}: CreateQuery<IJob>): Promise<IJob | void> {
  return Job.create({
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

async function ReadJob({ _id }: FilterQuery<IJob>): Promise<IJob | void> {
  return Job.findOne({
    _id,
  })
    .then((data: IJob) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function ReadAllJobs(): Promise<IJob[] | void> {
  return Job.find({})
    .then((data: IJob[]) => {
      return data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

async function UpdateJob({
  _id,
  deviceId,
  jobName,
  startTime,
  endTime,
}: UpdateQuery<IJob>): Promise<IJob | void | Error> {
  return Job.findOneAndUpdate(
    { _id },
    {
      deviceId,
      jobName,
      startTime,
      endTime,
    },
    {
      new: true,
    }
  )
    .then((data: IJob) => {
      return data;
    })
    .catch((error: Error) => {
      return error;
    });
}

async function DeleteJob({ _id }: UpdateQuery<IJob>): Promise<IJob | void> {
  return Job.deleteOne({
    _id,
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
  ReadAllJobs,
  UpdateJob,
  DeleteJob,
};
