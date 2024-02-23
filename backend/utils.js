import mongoose from "mongoose";

export async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION);
    }catch(err){
        console.log(`Error while connecting to db - ${err}`);
    }
}