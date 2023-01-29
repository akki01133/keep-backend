import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";
import { generateToken, generateRefreshToken } from "../utils/jwt.js";

const register = asyncHandler( async (req,res) => {
    const {name,email,password, pic} = req.body;
    const userExists = await User.exists({email}); 
    if(userExists){
        res.status(400);
        throw new Error("An account with the give email already exists");
    }
    const user = await User.create({
        name, email, password, pic
    });

    if(user){
        let token = generateToken(user._id)
        res.cookie('jwt',token,{httpOnly: true})
        res.cookie('refreshToken',generateRefreshToken(user._id),{httpOnly: true});
        return res.status(201).json(user)
    }else{
        res.status(400);
        throw new Error("Registration Failed");
    }
});


const login = asyncHandler( async (req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.status(400);
        throw new Error("no user with given email exists!!");
    }
    else if(! (await user.matchPassword(password))){
        res.status(400);
        throw new Error("Invalid password");
    }else{
        res.cookie('jwt',generateToken(user._id),{httpOnly: true});
        res.cookie('refreshToken',generateRefreshToken(user._id),{httpOnly: true});
        res.status(201);
        res.json(user)
    }
});

const logout = asyncHandler( async (req,res) => {
    res.clearCookie('jwt');
    res.user = null;
    res.sendStatus(200);
});

const refreshToken = asyncHandler( async (req,res) => {
    const token = parseCookies(req.headers.cookie).refreshToken;
    if(token){
        try {
            //decode token id
            const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            req.user = await User.findById(decoded.id).select("-password").exec(); // the user will exists becaues the verify throws error if the verification failed
            res.cookie('jwt',generateToken(req.user._id),{httpOnly: true});
            res.cookie('refreshToken',generateRefreshToken(req.user._id),{httpOnly: true});
            res.status(201);
        } catch (error) {
            res.status(401);
            throw new Error("Request Unauthorized.");
        }
    }else{
        res.status(401);
        throw new Error("No Refresh Token");
    }
});

export {register,login, logout, refreshToken};