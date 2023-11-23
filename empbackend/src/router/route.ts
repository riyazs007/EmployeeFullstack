import express from 'express'
import {postEmployee,getEmployee,delEmployee} from '../controllers/empController.ts'
const router=express.Router();

router.post('/send',postEmployee)
router.get('/get-emp',getEmployee)
router.delete('/del-emp/:id',delEmployee)
export default router
