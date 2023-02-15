import mongoose from "mongoose";
import CONFIG from "./config.js";
mongoose.set('strictQuery', true);
let db;

const getDb = () => db;

const connnectToDb =async (cb)=>{
    console.log('doing this');
    try {
        const conn = await mongoose.connect(CONFIG.MONGOOSE_URI);
        cb();
    } catch (error) {
        console.log(error);
    }
}

export {connnectToDb,getDb};