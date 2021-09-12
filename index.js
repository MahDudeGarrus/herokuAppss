const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/", (_, res) => {
    res.json({data: "API is accounted for"})
})

app.listen(port,()=> {
    console.log(`Server is alive on port ${port}`)
})

console.log("It's aliiiiiveee!!!")
console.log(__dirname)
console.log(__filename)
// access to the .env data
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.GREET)
console.log(process.env.FOOD)
console.log(process.env.REALLY)