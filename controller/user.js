const User=require("../models/user");
module.exports.renderSignupForm=(req,res)=>{res.render("users/signup");}
module.exports.signup=async(req,res)=>{
    try{
let {username,email,password}=req.body;
let user=new User({username,email});
const registeredUser=await User.register(user,password);
req.login(registeredUser,function(err){
    if(err){return next(err);}
    req.flash("success","welcome to wonderlust!");
    res.redirect("/listings")
    // console.log(registeredUser);
    // console.log("user logged in successfully!");
});
    }

catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
}


}
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login");
}
module.exports.login=async(req,res)=>{
   
    const redirectUrl = req.session.redirectUrl || "/listings";
    // clean it up after use
    res.redirect(redirectUrl); }

    module.exports.logout=(req,res)=>{
        req.logout(function(err) {
            if (err) { return next(err); }
            req.flash("success","you are logged out!");
           
            res.redirect("/listings");
          });
    }