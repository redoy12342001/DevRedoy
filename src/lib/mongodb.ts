import mongoose from "mongoose"


const MONGODB_URI = process.env.MONGODB_URI as string

if(!MONGODB_URI){
    throw new Error("Mongodb Uri not Found")
}

export const connectDB = async ():Promise<void> => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.info("Db Connected");
    } catch (error) {
        console.error("MongoDB Connection Error", error)
    }
}