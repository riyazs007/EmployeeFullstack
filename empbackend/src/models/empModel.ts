import mongoose from "mongoose";

const empSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        department:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        }
    }
)
const Employee=mongoose.model('Employee',empSchema)
export default Employee;