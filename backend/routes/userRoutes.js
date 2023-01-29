import { Router } from "express";
import {getProfile, updateProfile, upload, getProfilePic} from '../controllers/userController.js'
const router = Router();

router.get('/profile', getProfile)
router.patch('/updateProfile', updateProfile)
router.post('/uploadPic', upload, (req,res,next)=>{res.send('image uploaded')});
router.get('/getProfilePic',getProfilePic)
export default router;