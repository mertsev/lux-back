import mongoose from "mongoose";
import Controller from "../appliance.controller";

describe("appliance controller", () => {
  beforeAll(async () => {
    //jest.useFakeTimers();
    const url = `mongodb://127.0.0.1/appliancecontroller`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // afterAll(async () => {
  //   mongoose.connection.close();
  // });

  it("Should create a appliance", async () => {
    const appliance = await Controller.CreateAppliance({
      powerState: true,
      deviceName: "Test device",
    });

    expect(appliance.deviceName).toEqual("Test device");
  });

  it("Should enforce boolean type check", async () => {
    try {
      await Controller.CreateAppliance({
        powerState: "true1",
        deviceName: "Test device",
      });
    } catch (e) {
      expect(e._message).toBe("Appliance validation failed");
    }
  });
});
