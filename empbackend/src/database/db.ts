import mongoose from "mongoose";

const connection=async()=>{
    await mongoose.connect('mongodb://localhost:27017/Sunrise').then(()=>console.log("DB Connected successfully"))
}
export default connection;