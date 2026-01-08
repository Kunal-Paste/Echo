import {body, validationResult} from 'express-validator';

async function validateError(req,res,next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        });
    }
    next();
}

export const registerValidator = [
    body('email').isEmail().withMessage('invalid email format'),
    body('password').isLength({min:6}).withMessage('password must be 6 characters long'),
    body('fullName.firstName').notEmpty().withMessage('first name is require'),
    body('fullName.lastName').notEmpty().withMessage('last name is require'),
    validateError
]