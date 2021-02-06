import mongoose from "mongoose";
import Appliance, { IAppliance } from "../appliance.model";

describe("appliance model", () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/appliancemodel`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // afterAll(async () => {
  //   mongoose.connection.close();
  // });

  it("Should throw validation errors", () => {
    const appliance = new Appliance();

    expect(appliance.validate).toThrow();
  });

  it("Should save a appliance", async () => {
    expect.assertions(3);

    const appliance: IAppliance = new Appliance({
      powerState: true,
      deviceName: "Test device",
    });
    const spy = jest.spyOn(appliance, "save");

    // Should await so the teardown doesn't throw an exception
    // Thanks @briosheje
    await appliance.save();

    expect(spy).toHaveBeenCalled();

    expect(appliance).toMatchObject({
      powerState: expect.any(Boolean),
      deviceName: expect.any(String),
    });

    expect(appliance.deviceName).toBe("Test device");
  });
});
