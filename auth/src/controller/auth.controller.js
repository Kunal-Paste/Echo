import userModel from "../model/user.model.js";
import config from "../config/config.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {publishToQueue} from '../broker/rabbit.js'


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

    await publishToQueue("user_created", {
        id:user._id,
        email:user.email,
        fullName:user.fullName,
        role:user.role
    })

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

export async function googleAuthCallback(req,res){

    const user = req.user;

    console.log(user);

    const userExist = await userModel.findOne({
        $or:[
            {email:user.emails[0].value},
            {googleId:user.id}
        ]
    })

    if(userExist){
        const token = jwt.sign({
            id:userExist._id,
            role:userExist.role
        }, config.JWT_SECRET_KEY, {expiresIn:"2d"});

        res.cookie("token",token);

        return res.status(200).json({
            message:'user logined successfully',
            user:{
                id:userExist._id,
                email:userExist.email,
                fullName:userExist.fullName,
                role:userExist.role
            }
        })
    }

    const newUser = await userModel.create({
        googleId:user.id,
        email:user.emails[0].value,
        fullName:{
            firstName:user.name.givenName,
            lastName:user.name.familyName
        }
    })

    const token = jwt.sign({
        id:newUser._id,
        role:newUser.role
    }, config.JWT_SECRET_KEY, {expiresIn:"2d"});

    await publishToQueue('user_created', {
        id:newUser._id,
        email:newUser.email,
        fullName:newUser.fullName,
        role:newUser.role
    })

    res.cookie("token",token)

    return res.status(201).json({
        message:'user logined successfully',
        user:{
            id:newUser._id,
            email:newUser.email,
            fullName:newUser.fullName,
            role:newUser.role
        }
    })

    res.send('google auth callback')

}

