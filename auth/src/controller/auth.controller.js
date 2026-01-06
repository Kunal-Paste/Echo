import userModel from "../model/user.model.js";
import config from "../config/config.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export async function registerUser(req,res){

    const {email,password,fullName:{firstName,lastName}} = req.body;

    const alredyExist = await userModel.findOne({email});

    if(alredyExist){
       return res.status(400).json({
        message:'user already exist with this email'
       })
    }

    const hash = await bcrypt.hash(password,10);

    const user = await userModel.create({
        email,
        password:hash,
        fullName:{
            firstName,
            lastName
        }
    });

    const token = jwt.sign({
        id:user._id,
        role:user.role,
    }, config.JWT_SECRET_KEY, {expiresIn:'2d'});

    res.cookie('token',token);

    res.status(201).json({
        message:'user created successfully',
        user:{
            id:user._id,
            email:user.email,
            fullName:user.fullName,
            role:user.role
        }
    })

}

