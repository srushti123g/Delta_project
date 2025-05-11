const mongoose=require("mongoose");//require mongoose 
const Schema=mongoose.Schema;//create schema
const Review=require("./reviews.js");

const listingSchema=new Schema({//create schema for listing
    title:{type:String,
           required:true},
    description:String,
    image: {
      // // type:String,
      // // set:(v)=>v===""?"default.jpg":v,//if image is not provided, set default image
       url:String,
        filename:String, 
    },
     price:{type:Number,
          required:true},
     location:{type:String,
             required:true},
     country:String,
    reviews:[
      {
        type:Schema.Types.ObjectId,
        ref:"Review",

      }
     ],
     owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
     },

    
    });
    listingSchema.post("findOneAndDelete",async(listing)=>{
     if(listing){
      await Review.deleteMany({
        _id:{
          $in:listing.reviews
        }
      })
      }
    });
      
    

 const Listing=mongoose.model("Listing",listingSchema);//create model using same schema
 module.exports=Listing;//to export in app.js