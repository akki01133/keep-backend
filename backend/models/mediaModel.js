import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    image:{
        type:Buffer,
        contentType:String,
    }
},{timestamps:true})


export default Image = mongoose.model('Image',imageSchema);
