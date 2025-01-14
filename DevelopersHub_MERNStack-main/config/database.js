const mongoose = require('mongoose');


//using config to access the database connection string
const config = require('config');

const database = config.get("MONGODB_URI");


const connectdatabase = async() => {
    try{
      await  mongoose.connect(database);

      console.log("Database connected");

    } catch(err){
        console.error(err.message);

        //to exit the process on failure

        process.exit(1);
    }

}

module.exports = connectdatabase;