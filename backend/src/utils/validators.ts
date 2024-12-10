import { body, ValidationChain, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};

export const loginValidator: ValidationChain[] = [
    body("email")
        .trim()
        .isEmail()
        .withMessage("Email is required")
        .custom((value) => {
            if (!value.includes("@")) {
                throw new Error('Email must contain "@" character');
            }
            return true;
        }),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should contain at least 6 characters"),
    
];


export const signupValidator: ValidationChain[] = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
export const chartCompletionValidator = [

    body("message").notEmpty().withMessage("message is required"),

];

