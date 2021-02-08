import express, { Application } from "express";
import connect from "./connectdb";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

const db = "mongodb://localhost:27017/test";
connect({ db });

// Todo: go through all available routes by keys
// Object.keys(routes).map((key: string) => {
//   routes[key]({ app });
// });

routes.applianceRouter({ app });
routes.jobRouter({ app });
