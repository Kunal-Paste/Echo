import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export async function authArtistMiddleware(req,res,next){
     const token = req.cookies.token;

     if(!token){
        return res.status(401).json({
            message:'unauthorized user'
        })
     }

     try {

        const decoded = jwt.verify(token, config.JWT_SECRET_KEY);

        if(decoded.role !== 'artist'){
            return res.status(403).json({
                message:'forbidden'
            })
        }

        req.user = decoded;
        next();

     } catch (err) {
        console.log(err);
        return res.status(401).json({
            message:'unauthorized'
        })
     }
}

export async function authUserMiddleware(req,res,next){
 
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:'unauthorized'
        })
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message:'unauthorized user'
        })
    }

}