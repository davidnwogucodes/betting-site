import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import customRoute from "./routes";
import path from "path";
import fs, { ReadStream } from "fs";
import _ from "lodash";

dotenv.config();
const server: Application = express();
const port: number | string = process.env.PORT;
const db: string | number = process.env.DATABASE_URI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use("/media", (req: Request, res: Response) => {
  try {
    let acceptable: string[] = ["png", "jpg", "jpeg"];
    let fileLocation: string = path.join(__dirname, req.originalUrl);
    if (!acceptable.includes(_.last(fileLocation.split(".")))) {
      res.status(404).send("404");
      return;
    }
    let steam: ReadStream = fs.createReadStream(
      path.join(__dirname, req.originalUrl)
    );
    steam.on("open", () => {
      steam.pipe(res);
    });
    steam.on("error", (err) => {
      res.end(err);
    });
  } catch (error) {
    res.status(404).send(error);
  }
});
server.use("/api", customRoute);
mongoose
  .connect(db, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("datebase connected and running well.");
  })
  .catch(console.error);

server.listen(port, () => {
  console.log(
    `server running on http://localhost:${port} and http://127.0.0.1:${port}.`
  );
});
