const Listing=require("./models/listing");
const ExpressError=require("./utils/ExpressError");
const {listingSchema,reviewSchema}=require("./schema.js");

const Review=require("./models/reviews.js");

  module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be signed in to do that!");
        return res.redirect("/login");
      }
      next();
  }

  module.exports.saveRedirectUrl=(req,res,next)=>{
   if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
   }
   next();
  };

  module.exports.isOwner=async(req,res,next)=>{

    const {id}=req.params;
    let listing= await  Listing.findById(id);
     if(!listing.owner._id.equals(res.locals.currentUser._id)){
     req.flash("error","you are not the owner of this listing");
     return res.redirect(`/listings/${id}`);
       }
       next();
  };
    module.exports.validateListing=(req,res,next)=>{
          const {error}=listingSchema.validate(req.body.listing);
          console.log(error);
          if(error){
              let errMessage=error.details.map((el)=>el.message).join(",");
              throw new ExpressError(404,error.details.map((el)=>el.message).join(","));//to throw error if validation fails
          }else{
              next();
          }
       }
      module.exports.validateReview=(req,res,next)=>{
        const {error}=reviewSchema.validate(req.body);
        console.log(error);
        if(error){
            let errMessage=error.details.map((el)=>el.message).join(",");
            throw new ExpressError(404,error.details.map((el)=>el.message).join(","));//to throw error if validation fails
        }else{
            next();
        }
     }
     module.exports.isReviewAuthor=async(req,res,next)=>{

      const {id,reviewId}=req.params;
      let review= await  Review.findById(reviewId);
       if(!review.author.equals(res.locals.currentUser._id)){
       req.flash("error","you are not the author of this review");
       return res.redirect(`/listings/${id}`);
         }
         next();
    };