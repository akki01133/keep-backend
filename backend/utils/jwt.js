import jwt from "jsonwebtoken";

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
}

const generateRefreshToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "1y",
    });
}

export {generateToken,generateRefreshToken}  