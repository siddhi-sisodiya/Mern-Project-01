require("dotenv").config()
const app=require("./src/index")
const createDB=require("./src/database/db")
createDB()
try {
  app.listen(3000, () => {
    console.log("Server is running on port 3000 ")
  })
} catch (error) {
  console.log("Server failed to start ", error)
}