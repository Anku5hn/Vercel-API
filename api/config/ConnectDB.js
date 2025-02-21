import mongoose from "mongoose";
async function ConnectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is running on ${mongoose.connection.host}`)
    }catch(error){
        console.log(error)
    }
}
export default ConnectDB;