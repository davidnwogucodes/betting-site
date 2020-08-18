import express from "express";
import ChefRouter from "./routes/chef";
import MealRouter from "./routes/meals";
import userRoute from "./routes/users";

const customRoute = express();

customRoute.use("/account", userRoute);
customRoute.use("/chef", ChefRouter);
customRoute.use("/meal", MealRouter);

export default customRoute;
