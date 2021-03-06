import mongoose, { Schema, Document } from "mongoose";

// export enum ApplianceType {
//   oven = 'oven',
//   washmachine = 'washing machine',
//   undisclosed = 'undisclosed'
// }

export interface IAppliance extends Document {
  powerState: boolean;
  deviceName: string;
  //   type?: ApplianceType;
}

const ApplianceSchema: Schema = new Schema({
  powerState: { type: Boolean, required: true },
  deviceName: { type: String, required: true },
});

// Export the model and return IAppliance interface
export default mongoose.model<IAppliance>("Appliance", ApplianceSchema);
