import { Request,Response } from "express"
import {saveEmployee,getDetails,removeEmployee} from '../services/empService.ts'

export const postEmployee=async(req:Request,res:Response)=>{
    const {name ,department ,salary}=req.body
    // console.log(req.body)
   const data= await saveEmployee(name, department, salary)
   res.send({success:true, message:"Data saved successfully"});
}

export const getEmployee=async(req:Request,res:Response)=>{
const result=await getDetails()
res.send({success:true,message:"Data retrived Successfully",data:result})
}
export const delEmployee=async(req:Request,res:Response)=>{
    const id=req.params.id
    await removeEmployee(id);
   res.send({success:true,message:"Deleted successfully"})
}