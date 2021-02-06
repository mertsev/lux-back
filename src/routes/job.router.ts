import { TRoutesInput } from "../types/routes";
import JobController from "../controllers/Job.controller";

/** Route for Job addition */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ app }: TRoutesInput): any => {
  app.post("/api/job/add", async (req, res) => {
    const Job = await JobController.CreateJob({
      deviceId: req.body.deviceId,
      jobName: req.body.jobName,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });

    return res.send({ Job });
  });

  app.get("/api/Job/", async (req, res) => {
    const Job = await JobController.ReadAllJobs();

    return res.send({ Job });
  });

  app.get("/api/Job/:id", async (req, res) => {
    const Job = await JobController.ReadJob({
      _id: req.params.id,
    });

    return res.send({ Job });
  });

  app.put("/api/Job/:id", async (req, res) => {
    const Job = await JobController.UpdateJob({
      _id: req.params.id,
      deviceId: req.body.deviceId,
      jobName: req.body.jobName,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });

    return res.send({ Job });
  });

  app.delete("/api/Job/:id", async (req, res) => {
    const Job = await JobController.DeleteJob({
      _id: req.params.id,
    });

    return res.send({ Job });
  });
};
