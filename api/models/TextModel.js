import mongoose from "mongoose";
const TextSchema = new mongoose.Schema(
    {
        title:{
            type:String,
        },
        discription:{
            type:String,
        },
    },
    {
        timestamps: true,
    }
);
const TextModel = mongoose.model('text',TextSchema);
export default TextModel;