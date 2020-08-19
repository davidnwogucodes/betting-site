import { Router, Request, Response } from "express";
import { Document } from "mongoose";
import userModel from "../model/users";
import jwt, { sign, verify } from "jsonwebtoken";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { config } from "dotenv";
// var multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (_req: Request, _file: any, cb: Function) {
//     cb(null, "dist/uploads");
//   },
//   filename: function (_req: Request, file: any, cb: Function) {
//     cb(
//       null,
//       file.fieldname +
//         "-" +
//         Date.now() +
//         `.${file.mimetype.split("/")[1] ?? "png"}`
//     );
//   },
// });

// var upload = multer({ storage: storage });

config();
const salt = genSaltSync(10);
const secret = process.env.SECRET || "powemre$#$VESdfver#$#4dfmdpfv";
const userRoute = Router();

userRoute.post("/", async (req: Request, res: Response) => {
  const {
    full_name,
    phone_number,
    key,
  }: { full_name: string; phone_number: string; key: string } = req.body;
  let hashedKey = hashSync(key, salt);
  let new_user = new userModel({
    full_name,
    phone_number: phone_number.replace(/(\s)|[+]/g, ""),
    key: hashedKey,
  });
  new_user
    .save()
    .then(() => {
      res.json({ message: "content found" });
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
      if (err.keyPattern) {
        if (err.keyPattern.phone_number) {
          res.status(400).json({ message: "error found", error: err });
          return;
        }
      }
      res.status(500).json({ message: "error found", error: err });
    });
});

userRoute.post("/login", async (req: Request, res: Response) => {
  try {
    const {
      phone_number,
      key,
    }: { phone_number: string; key: string } = req.body;
    let user: Document | any = await userModel.findOne({
      phone_number: phone_number.replace(/(\s)|[+]/g, ""),
    });
    if (!user) {
      res
        .status(402)
        .json({ message: "error found", error: "incorrect phone number." });
      return;
    }
    let correctKey = compareSync(key, user.key);
    if (!correctKey) {
      res.status(401).json({ message: "error found", error: "incorrect key" });
      return;
    }
    let token = sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "30 days",
    });
    res.json({
      message: "content found",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error found", error });
  }
});

userRoute.get("/verify", async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(400).json({ message: "error found", error: "empty token" });
    return;
  }
  let token: string = authorization.replace("bearier; ", "");
  if (!token) {
    res.status(400).json({ message: "error found", error: "empty token" });
    return;
  }
  try {
    let decoded: string | object = verify(token, process.env.SECRET);
    res.json({ message: "content found", detail: decoded });
  } catch (error) {
    res.status(404).json({ message: "error found", error: "invalid token" });
    return;
  }
});

userRoute.get("/all", async (_req: Request, res: Response) => {
  try {
    let users: Document[] = await userModel.find();
    res.json({ users, message: "content found" });
  } catch (error) {
    res.status(400).json({ message: "error found", error });
  }
});

userRoute.put("/", async (req: Request, res: Response) => {
  const { token, password } = req.query;
  let t: string | any = token;
  if (t === null || t === undefined || t === "") {
    res.status(400).json({ message: "invalid token", error: "error #419" });
    return;
  }
  let decoded: any = jwt.verify(t, secret);

  await userModel
    .findOneAndUpdate({ _id: decoded.id }, { password })
    .then(() => {
      res.json("");
    })
    .catch((err) => {
      res.status(400).json({ message: "error found", error: err });
    });
});

export default userRoute;
