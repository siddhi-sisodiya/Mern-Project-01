  require("dotenv").config()
const app=require("./src/index")
const createDB=require("./src/database/db")
createDB()
app.listen(3000,()=>{
  try{
    console.log("server is running on 3000 port")
  }
  catch(error){
    console.log("serever is not created",error)
  }
})