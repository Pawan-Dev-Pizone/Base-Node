import dotnet from "dotenv";
import express from "express"


const app  = express();
// env file configuration
dotnet.config({
    path:'./.env.sample'
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port ${process.env.PORT}`)
})

