import mongoose from "mongoose";

const connectDb = async(DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'imageshop'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Database connection successfully!!');
        
    } catch (error) {
        console.log(error);
    }
};



export default connectDb;