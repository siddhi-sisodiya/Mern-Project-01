const mongoose=require("mongoose")
 
async function createDB(){
   try{
   await mongoose.connect(process.env.MONGO_URI)
   }
   catch(error){
    console.log("database is not connected",error)
   }
}
module.exports=createDB