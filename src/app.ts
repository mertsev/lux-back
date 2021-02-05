import express, {Application} from 'express';
import connect from './connectdb';

const app: Application = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

// app.listen((port: number = 3000, err: Error) => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);
// });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

const db = 'mongodb://localhost:27017/test';
connect({db});