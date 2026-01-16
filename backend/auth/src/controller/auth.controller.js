import userModel from "../model/user.model.js";
import config from "../config/config.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {publishToQueue} from '../broker/rabbit.js'


export async function registerUser(req,res){

    const {email,password,fullName:{firstName,lastName}, role = 'user'} = req.body;

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
        },
        role
    });

    const token = jwt.sign({
        id:user._id,
        role:user.role,
        fullName:user.fullName,
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

export async function loginUser(req,res){

    const {email, password} = req.body;

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message:'user not found, invalid email'
        })
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if(!isPassword){
        return res.status(400).json({
            message:'user not found, invalid password'
        })
    }

    const token = jwt.sign({
        id:user._id,
        role:user.role,
        fullName:user.fullName,
    }, config.JWT_SECRET_KEY, {expiresIn: "2d"});

    res.cookie("token",token);

    return res.status(200).json({
        message:'user logined in successfully',
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
    const roleFromClient = req.cookies.authRole || "user"

    console.log(user);

    const userExist = await userModel.findOne({
        $or:[
            {email:user.emails[0].value},
            {googleId:user.id}
        ]
    })

    // if(userExist){
    //     const token = jwt.sign({
    //         id:userExist._id,
    //         role:userExist.role,
    //         fullName:userExist.fullName,
    //     }, config.JWT_SECRET_KEY, {expiresIn:"2d"});

    //     res.cookie("token",token);

    //     if(userExist.role === 'artist'){
    //         return res.redirect('http://localhost:3000/artist/dashboard');
    //     }

    //     return res.redirect('http://localhost:3000');
    // }

    if (userExist) {
      if (roleFromClient && userExist.role !== roleFromClient) {
    userExist.role = roleFromClient;
    await userExist.save();
    }

   const token = jwt.sign({
     id: userExist._id,
    role: userExist.role,
    fullName: userExist.fullName,
  }, config.JWT_SECRET_KEY, { expiresIn: "2d" });

  res.cookie("token", token);

  res.clearCookie("authRole");

  if (userExist.role === "artist") {
    return res.redirect("http://localhost:3000/artist/dashboard");
  }

  return res.redirect("http://localhost:3000");
 }



    const newUser = await userModel.create({
        googleId:user.id,
        email:user.emails[0].value,
        fullName:{
            firstName:user.name.givenName,
            lastName:user.name.familyName
        },
        role: roleFromClient,
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

    res.cookie("token",token);

    if (newUser.role === "artist") {
    return res.redirect("http://localhost:3000/artist/dashboard");
    }

    res.redirect("http://localhost:3000");

    res.clearCookie("authRole");

    // res.redirect('http://localhost:3000');

    res.send('google auth callback')

}

