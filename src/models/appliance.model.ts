import mongoose, { Schema, Document } from "mongoose";

// export enum ApplianceType {
//   oven = 'oven',
//   washmachine = 'washing machine',
//   undisclosed = 'undisclosed'
// }

export interface IAppliance extends Document {
  id: string;
  powerState: boolean;
  deviceName: string;
  //   type?: ApplianceType;
}

const ApplianceSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  powerState: { type: Boolean, required: true },
  deviceName: { type: String, required: true },
});

// Export the model and return IAppliance interface
export default mongoose.model<IAppliance>("Appliance", ApplianceSchema);
