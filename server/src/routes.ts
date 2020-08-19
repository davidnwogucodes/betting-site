import express from "express";
import userRoute from "./routes/users";

const customRoute = express();

customRoute.use("/account", userRoute);

export default customRoute;
