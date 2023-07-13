import mongoose from 'mongoose';

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://msr:msr1020@sm.xss0zur.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to database Successfully")
    } catch (error) {
        console.log("Error connecting to database")
    }
}

export default connectToDb;