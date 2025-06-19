import express, { Express } from "express";
import cors from "cors";

export function createServer() {
  const app: Express = express();

  app.use(cors());

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  return app;
}