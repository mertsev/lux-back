import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  id: string;
  deviceId: string;
  jobName: string;
  startTime: Date;
  endTime: Date;
}

const JobSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  deviceId: { type: String, required: true },
  jobName: { type: String, required: true },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
});

// Export the model and return IJob interface
export default mongoose.model<IJob>("Job", JobSchema);
