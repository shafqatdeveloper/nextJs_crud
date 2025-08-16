import mongoose from 'mongoose';

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/next-crud")
        console.log("Connected to database Successfully")
    } catch (error) {
        console.log("Error connecting to database")
    }
}

export default connectToDb;