import { TRoutesInput } from "../types/routes";
import ApplianceController from "../controllers/appliance.controller";

/** Route for appliance addition */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ app }: TRoutesInput): any => {
  app.post("/api/manage/add", async (req, res) => {
    console.log(req.body);
    const appliance = await ApplianceController.CreateAppliance({
      id: req.body.id,
      powerState: req.body.powerState,
      deviceName: req.body.deviceName,
    });

    return res.send({ appliance });
  });
};
