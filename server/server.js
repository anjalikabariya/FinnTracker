import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './Routes/Tracker.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/tracker', routes);

app.get('/', (req, res) => {
  res.send('hello app');
});

const PORT = process.env.PORT|| 5000;
const CONNECTION_URL = 'mongodb+srv://FinnTrackerUser:FinnTrackerUser@finntracker.9uf9z.mongodb.net/FinnTracker?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);