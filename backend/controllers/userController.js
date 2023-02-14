import asyncHandler from "express-async-handler";
import multer from "multer";
import { User } from "../models/userModel.js";
import Path from 'path';
import Fs from 'fs'; 
import CONFIG from "../utils/config.js";

export const getProfile = asyncHandler(async (req,res,next)=>{
    const u =  await User.findById(req.user._id).exec();
    return res.json(u);
});

export const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null, "/tmp")
        },
        filename:function(req,file,cb){
            cb(null,req.user._id+'_pic');
        }
    })
}).single('file');

export const updateProfile = asyncHandler(async (req,res,next)=>{
    const {name} = req.body;
    const note = await User.findOneAndUpdate({_id: req.user._id},{name},{returnOriginal:false} );
    if(note){
        res.json(note);
    }else{
        res.status(500).json("Profile couldn't be updated");
    }
});


export const getProfilePic = asyncHandler(async (req,res, next)=>{
    const path = Path.join(process.cwd(),CONFIG.MULTER_MEDIA_DESTINATION,req.user._id+"_pic")
    const e = Fs.existsSync(path) 
    if(e){
        return res.sendFile(path);
    }else{
        const dp = Path.join(process.cwd(),CONFIG.MULTER_MEDIA_DESTINATION,"default.png")
        return res.sendFile(dp)
    }   
});
