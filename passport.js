import passport from "passport";
import User from "./models/User";

passport.user(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
