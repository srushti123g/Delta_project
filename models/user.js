const mongoose=require("mongoose");//require mongoose 
const Schema=mongoose.Schema;//create schema

const passportLocalMongoose=require("passport-local-mongoose");//require passport-local-mongoose
const userSchema=new Schema({//create schema for user
    email:{type:String,required:true,unique:true},//email is required and unique
    username:{type:String,required:true,unique:true},//username is required and unique
    password:{type:String},//password is required
});
userSchema.plugin(passportLocalMongoose);//plugin passport-local-mongoose automatically handles hashing and salting of passwords, as well as storing the hashed password in the database.
module.exports=mongoose.model("User",userSchema);//create model using same schema and export it
// const mongoose=require("mongoose");//require mongoose 
// const Schema=mongoose.Schema;//create schema