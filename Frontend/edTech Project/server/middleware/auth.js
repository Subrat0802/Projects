const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async(req, res, next) => {
    try{
        //extract token
        const token = req.cookie.token || req.body.token || req.header("Authorizaion").replace("Bearer ", "");
        //if token missing
        if(!token){
            return res.status(401).json({
                success:false,
                messgae:"Token is missing",
            })
        }
        //verufy the token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode
        }catch(error){
            //verfication - issue
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next();
    }catch(error){
        return res.statsu(401).json({
            message:"Something went wrongg while validating token",
            success:false
        })
    }
}


//isStudent
exports.isStudent = async (req, res, next)=>{
    try{
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for student"
            })
        }
        next()
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"User role can not be verified, please try again"
        })
    }
}

//isAdmin
exports.isAdmin = async (req, res, next)=>{
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin"
            })
        }
        next()
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"User role can not be verified, please try again"
        })
    }
}

//isInstructor
exports.isInstructor = async (req, res, next)=>{
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for instructor"
            })
        }
        next()
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"User role can not be verified, please try again"
        })
    }
}