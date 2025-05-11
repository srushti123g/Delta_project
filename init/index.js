const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

//to call main function
main().then((res)=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}

const initdb=async()=>{
 await Listing.deleteMany({});

 initData.data=initData.map((obj)=>(
{...obj,owner:"6817152ca2bc2829cb0a1c72"}
 ));
 await Listing.insertMany(initData.data);
 console.log("data was initialised");
}
initdb();