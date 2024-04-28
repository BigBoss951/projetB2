import mongoose from "mongoose";

const connectMongoDB = (handler) => async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connexion réussis")
    } catch (error) {
        console.log(error)
    }
    await handler (req, res)

    
}

export default connectMongoDB;   