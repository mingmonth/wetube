import express from "express";
import routes from "../routes";
const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.render("videos"));
videoRouter.get(routes.upload, (req, res) => res.render("upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.render("videoDetail"));
videoRouter.get(routes.editVideo, (req, res) => res.render("editVideo"));
videoRouter.get(routes.deleteVideo, (req, res) => res.render("deleteVideo"));

export default videoRouter;
