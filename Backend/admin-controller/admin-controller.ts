import express,{Request,Response} from 'express'
import { postdata } from '../admin-service/admin.service';

export const router=express.Router();

router.post('/post',async(req:Request,res:Response)=>{
    try{
        const { email, selectedFileType, csvObjects } = req.body;
        await postdata(email,selectedFileType,csvObjects);
        res.status(200).json({ message: 'Array submitted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}) 