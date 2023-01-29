import mongoose from "mongoose";
mongoose.set('strictQuery', true);
let db;

const getDb = () => db;

const connnectToDb =async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URI);
    } catch (error) {
        console.log(error);
    }
}

export {connnectToDb,getDb};