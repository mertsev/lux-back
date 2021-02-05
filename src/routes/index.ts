import { TRoutesInput } from "../types/routes";
import ApplianceController from "../controllers/appliance.controller";

/** Route for appliance addition */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ app }: TRoutesInput): any => {
  app.post("/api/manage/add", async (req, res) => {
    // console.log(req.body);
    const appliance = await ApplianceController.CreateAppliance({
      id: req.body.id,
      powerState: req.body.powerState,
      deviceName: req.body.deviceName,
    });

    return res.send({ appliance });
  });

  app.delete("/api/appliance/:id", async (req, res) => {
    const appliance = await ApplianceController.DeleteAppliance({
      id: req.params.id,
    });

    return res.send({ appliance });
  });

  app.put("/api/appliance/:id", async (req, res) => {
    const appliance = await ApplianceController.UpdateAppliance({
      id: req.params.id,
      powerState: req.body.powerState,
      deviceName: req.body.deviceName,
    });

    return res.send({ appliance });
  });

  app.get("/api/appliance/", async (req, res) => {
    const appliance = await ApplianceController.ReadAllAppliance();

    return res.send({ appliance });
  });

  app.get("/api/appliance/:id", async (req, res) => {
    const appliance = await ApplianceController.ReadAppliance({
      id: req.params.id,
    });

    return res.send({ appliance });
  });
};
