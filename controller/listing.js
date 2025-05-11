
const Listing=require("../models/listing.js");

const { geocodeLocation } = require('../services/geocoding.js');
module.exports.index=async(req,res)=>{
      const allListings=await Listing.find({});
        res.render("listings/index",{alllistings:allListings});
 
    };
    module.exports.renderNewForm=(req,res)=>{
        console.log(req.user);
        
         res.render("listings/new.ejs");
      
          
       };
       module.exports.showListing=async(req,res,next)=>{
               const {id}=req.params;
                      const listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");//to populate reviews and owner 
                     if(!listing){
                       req.flash("error","listing not found!");
                       return res.redirect("/listings");
                     }
                      res.render("listings/show",{listing});
               }
 module.exports.createListing= async(req,res)=>{
    let url=req.file.path;
    let filename=req.file.filename;
                          console.log(url,"..",filename);
                            const newListing=new Listing(req.body);
                         
                            newListing.owner=req.user._id;
                            newListing.image=({url,filename});
                               await newListing.save();
                               req.flash("success","Successfully created a new listing!");
                              res.redirect("/listings");
                             
                              }
module.exports.renderEditForm=async(req,res,next)=>{
                                      const {id}=req.params;
                                       
                                       
                                       const listing=await Listing.findById(id);
                                       if(!listing){
                                        req.flash("error","listing not found!");
                                        return res.redirect("/listings");
                                      }
                                      let originalImageUrl=listing.image.url;
                                      originalImageUrl=originalImageUrl.replace("/upload","/upload/h_300,w_250");
                                       res.render("listings/edit",{listing,originalImageUrl});
                                   
                                   }
module.exports.updateListing=async(req,res)=>{

    const { id } = req.params;

       let listing= await Listing.findByIdAndUpdate(id,{...req.body});
       if(typeof req.file!=="undefined" ){
       //if there is a file, delete the old image from cloudinary
       let url=req.file.path;
       let filename=req.file.filename;
       listing.image=({url,filename});
       await listing.save();
       }
      
        req.flash("success","listing updated!");
           res.redirect(`/listings/${id}`);//to redirect to show page
       
       }
module.exports.destroyListing=       async(req,res)=>{
                  const {id}=req.params;
                  await Listing.findByIdAndDelete(id);
                  req.flash("success"," deleted a listing!");
                  res.redirect("/listings");
                 
                  }
 