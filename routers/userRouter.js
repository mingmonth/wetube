import express from "express";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.render("users"));
userRouter.get(routes.userDetail, (req, res) => res.render("userDetail"));
userRouter.get(routes.editProfile, (req, res) => res.render("editProfile"));
userRouter.get(routes.changePassword, (req, res) =>
  res.render("changePassword")
);

export default userRouter;
