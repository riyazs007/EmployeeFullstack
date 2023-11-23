import Employee from "../models/empModel.ts"

export const saveEmployee=(name:string,department:string,salary:Number)=>{
const info= new Employee({name,department,salary})
return info.save()
}

export const getDetails=()=>{
    return Employee.find({})
}
export const removeEmployee=(id:string)=>{
return Employee.deleteOne({_id:id})
}