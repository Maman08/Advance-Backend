const mongoose = require('mongoose');
const { DB_NAME } = require('../constant');

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DBURL}/${DB_NAME}`);
        console.log("DATABASE CONNECTED SUCCESSFULLY  !! DB HOST: ", connectionInstance.connection.host);
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR", error);
        process.exit(1);
    }
};

module.exports = connectDB;
