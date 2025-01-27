import dotenv from "dotenv";
import express from "express"
import sequelize  from './db/index.js';


const app  = express();

// env file configuration
dotenv.config({
    path:'./.env.local'
})

app.listen(process.env.PORT,()=>{
    // CONNECTING TO DB and listening to port
    establishConnection();
})

async function establishConnection() {
    try{
      await sequelize.authenticate();
      console.log(`Connection Successfully Established with ${process.env.DB_NAME} database`);
      console.log(`Server is listening to port ${process.env.PORT}`)

    }catch(error){
      console.log(`Unable to connect to the ${process.env.DB_NAME} database - `,error);
    }
}

console.log("this log is wrtiiten just to check whether gitignore file is working or not !");
