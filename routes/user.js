import express from "express";
import passport from "passport";
import { getAdminUsers, getAdminstats, logout, myprofile } from "../contollers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router =express.Router();

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}));

router.get("/login",passport.authenticate("google",{
    successRedirect:process.env.FRONTEND_URL,
}));

router.get("/me",isAuthenticated,myprofile);

router.get("/logout",logout);

//Admin route
router.get("/admin/users",isAuthenticated,authorizeAdmin,getAdminUsers);



router.get("/admin/stats",isAuthenticated,authorizeAdmin,getAdminstats)

export default router;
