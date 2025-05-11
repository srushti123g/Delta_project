if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
//require("dotenv").config();
console.log(process.env.SECRET);
const express=require("express");
//to require express
const app=express();
//require mongoose
const mongoose=require("mongoose");
//require listing.js file
const Listing=require("./models/listing.js");
//require ejs
const ejs=require("ejs");
//to require path
const path=require("path");
app.set("view engine","ejs");
//to set view engine
app.set("views",path.join(__dirname,"views"));
//to set views folder
app.use(express.urlencoded({extended:true}));//to parse urlencoded data

const methodOverride=require("method-override");
//to require method-override
app.use(methodOverride("_method"));
const Review=require("./models/reviews.js");

const ejsMate=require("ejs-mate");
//to require ejs-mate
app.engine("ejs",ejsMate);//to use ejs-mate
 
app.use(express.static(path.join(__dirname,"/public")));

const wrapAsync=require("./utils/wrapAsync");
const ExpressError=require("./utils/ExpressError");

const {listingSchema,reviewSchema}=require("./schema.js");
//basic API
const listingsRouter=require("./routes/listing.js");
const reviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

const session=require("express-session");
const MongoStore=require("connect-mongo");
const flash=require("connect-flash");
//to add database connection

const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const User=require("./models/user.js");
//to require user.js file
// async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
// }
const dbUrl=process.env.ATLASDB_URL;
async function main(){
    await mongoose.connect(dbUrl);
}
//to call main function
main().then((res)=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});
const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{secret:process.env.SECRET},
    touchAfter:24*60*60,
});
store.on("error",()=>{
    console.log("session store error",err);
})
const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+1000*60*60*24*7,//to set cookie for 7 days
        maxAge:1000*60*60*24*7,//to set cookie for 7 days
    }
        }

     
        // app.get("/",wrapAsync(async(req,res)=>{
    
        //     res.send("Welcome to Wonderlust!");//to send response
        // }));
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());//to initialize passport
app.use(passport.session());//to use passport session

passport.use(new LocalStrategy(User.authenticate()));//to use local strategy
passport.serializeUser(User.serializeUser());//to serialize user
passport.deserializeUser(User.deserializeUser());//to deserialize user

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");//to set flash message
    res.locals.error=req.flash("error");//to set flash message
    res.locals.currentUser=req.user;//to set current user
    
    next();
});

app.get("/demouser",async(req,res)=>{
    let fakeUser=new User({
        username:"delta-student",
        email:"student@gmail.com",
        password:"password",
    });
    const registeredUser=await User.register(fakeUser,"password");//to register user
    res.send(registeredUser);});
//to add listing
// app.get("/testlisting",async(req,res)=>{
// let samplelisting=new Listing({
//     title:"My New Villa",
//     description:"By the beach",
//     price:1200,
//     location:"calinga beach",
//     country:"india",
// });
//   await samplelisting.save();
//     res.send("listing added");
//     });
// //index route
//     app.get("/listings",wrapAsync(async(req,res)=>{
//       const allListings=await Listing.find({});
//         res.render("listings/index",{alllistings:allListings});
 
//     }));
//      //new route
//      app.get("/listings/new",(req,res)=>{
//        res.render("listings/new.ejs");
    
        
//      });

    //  const validateListing=(req,res,next)=>{
    //     const {error}=listingSchema.validate(req.body);
    //     console.log(error);
    //     if(error){
    //         let errMessage=error.details.map((el)=>el.message).join(",");
    //         throw new ExpressError(404,error.details.map((el)=>el.message).join(","));//to throw error if validation fails
    //     }else{
    //         next();
    //     }
    //  }

    //  const validateReview=(req,res,next)=>{
    //     const {error}=reviewSchema.validate(req.body);
    //     console.log(error);
    //     if(error){
    //         let errMessage=error.details.map((el)=>el.message).join(",");
    //         throw new ExpressError(404,error.details.map((el)=>el.message).join(","));//to throw error if validation fails
    //     }else{
    //         next();
    //     }
    //  }
     app.use("/listings",listingsRouter);
     app.use("/listings/:id/reviews",reviewsRouter);
     app.use("/",userRouter);
    //show route
//     app.get("/listings/:id",wrapAsync(async(req,res,next)=>{
//  const {id}=req.params;
//         const listing=await Listing.findById(id).populate("reviews");
//         res.render("listings/show",{listing});
//  }));
// //create route


//     app.post("/listings",validateListing,wrapAsync(async(req,res)=>{
    
//       const newListing=new Listing(req.body);
//          await newListing.save();
//         res.redirect("/listings");
       
//         }));
//edit route
// app.get("/listings/:id/edit",wrapAsync(async(req,res,next)=>{
//    const {id}=req.params;
    
    
//     const listing=await Listing.findById(id);
    
//     res.render("listings/edit",{listing});

// }
// ));
// //update route
// app.put("/listings/:id",validateListing,wrapAsync(async(req,res)=>{
//     const {id}=req.params;
//  await Listing.findByIdAndUpdate(id,{...req.body.listing})
       
   
//     res.redirect(`/listings/${id}`);//to redirect to show page

// }
// ));
   
// //delete route
// app.delete("/listings/:id",wrapAsync(async(req,res)=>{
//     const {id}=req.params;
//     await Listing.findByIdAndDelete(id);
//     res.redirect("/listings");
   
//     })
// );

//reviews
//post route


// Error handler (fix the param order if not already)


// app.all("*",(req,res,next)=>{
//     next(new ExpressError(404,"Page not found"));
// });
app.use((err,req,res,next)=>{
    let{statusCode=404,message="Page not found"}=err;
    
    res.status(statusCode).render("error.ejs",{err})
    //res.status(statusCode).send(message);
   
});
// A route handler where you might encounter an error
app.listen(8080,()=>{
    console.log("server in running on port 8080");
});
