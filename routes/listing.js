
const express=require("express");
const router=express.Router({ mergeParams: true });
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError");
const {listingSchema,reviewSchema}=require("../schema.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js"); 
  
const listingController=require("../controller/listing.js");
const multer=require('multer')
const {storage}=require("../cloudconfig.js")
const upload=multer({storage})

// router.get("/",wrapAsync(async(req,res)=>{
    
//     res.send("Welcome to Wonderlust!");//to send response
// }));
router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('image'),validateListing,wrapAsync(listingController.createListing));


router.get("/new",isLoggedIn,listingController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('image'),validateListing,wrapAsync(listingController.updateListing ))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing ));


router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync( listingController.renderEditForm));
  
//index route
// router.get("/",wrapAsync(listingController.index));
     //new route
   
        //show route
   // router.get("/:id",wrapAsync(listingController.showListing));


       //create route
       
       
         //  router.post("/",isLoggedIn,validateListing,wrapAsync(listingController.createListing));
       //edit route
      
       //update route
     // router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing ));
       //delete route
       //router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing ));
       

       module.exports=router;