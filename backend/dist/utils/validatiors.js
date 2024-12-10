import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }
            return res.status(422).json({ errors: errors.array() });
        }
    };
};
const signupValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("password should contain atleast 6 characters ")
        .matches(/[A-Z]/).withMessage('password must contain at least one uppercase letter')
    // .matches(/[^A-Za-z0-9]/).withMessage('password must contain at least one special character or number')
    ,
    body("email").trim().isEmail().withMessage("email is required")
        .custom((value) => {
        if (!value.includes('@')) {
            throw new Error('Email must contain "@" character');
        }
        return true;
    })
];
//# sourceMappingURL=validatiors.js.map