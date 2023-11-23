 import express from 'express'
 import cors from 'cors'
import router from './router/route.ts'
import connection from '../src/database/db.ts'
 const app=express() 
 app.use(cors())
 app.use(express.json())
 app.use('/',router)
 connection(); 

const PORT=8000;
 app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`))