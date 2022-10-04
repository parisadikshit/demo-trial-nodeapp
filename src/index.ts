import express from 'express';
import cors from 'cors';
import actuator from 'express-actuator';
import 'dotenv/config';
import { initiateRoutes } from './router';

const app = express();
const port = process.env.PORT || 8080;

app.use(actuator());
app.use(cors());
app.use(express.json());

const router = express.Router();
initiateRoutes(app, router);

app.listen(port, () => console.log(`App is running on port ${port}....`));
