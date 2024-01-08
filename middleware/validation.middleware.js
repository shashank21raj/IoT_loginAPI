import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
  console.log(req.body);
  // 1. Setup rules for validation.
  const rules = [
    body("username").notEmpty().withMessage("Name is required"),
    body('email').notEmpty().withMessage("Email is required"),
    // body('password').isLengthRequired({min:8}).withMessage("Password is required of length must be 8 character"),

  ];

  // 2. run those rules.
  await Promise.all(rules.map((rule) => rule.run(req)));

  // 3. check if there are any errors after running the rules.
  var validationErrors = validationResult(req);
  console.log(validationErrors);
  // 4. if errros, return the error message
  if (!validationErrors.isEmpty()) {
    return res.render("login", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
};

export default validateRequest;
