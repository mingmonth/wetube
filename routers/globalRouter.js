import express from "express";
import routes from "../routes";
const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.render("home"));
globalRouter.get(routes.join, (req, res) => res.render("join"));
globalRouter.get(routes.login, (req, res) => res.render("login"));
globalRouter.get(routes.logout, (req, res) => res.render("logout"));
globalRouter.get(routes.search, (req, res) => res.render("search"));

export default globalRouter;
