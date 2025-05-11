const express=require("express");
const router=express.Router({ mergeParams: true });
const wrapAsync=require("../utils/wrapAsync")
const User=require("../models/user.js");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const {userSchema}=require("../schema.js");

const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controller/user.js");
const user = require("../models/user.js");
router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));
//router.get("/signup",userController.renderSignupForm);
//router.post("/signup",wrapAsync(userController.signup));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{
    failureFlash:true,
    failureRedirect:"/login",
    keepSessionInfo:true,
}),userController.login);


// router.get("/login",userController.renderLoginForm);
// router.post("/login",saveRedirectUrl,passport.authenticate("local",{
//     failureFlash:true,
//     failureRedirect:"/login",
//     keepSessionInfo:true,
// }),userController.login);



router.get("/logout",userController.logout);

module.exports=router;