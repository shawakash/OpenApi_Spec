// src/app.ts
import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from 'swagger-ui-express';

export const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));


// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);