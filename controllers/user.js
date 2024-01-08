import User from "../models/user.js";

export const createUser = async (req, res) => {
  const user = req.body;
  console.log(req.body);
  try {
    const newUser = new User(user);
    await newUser.save();
    console.log("successfully registered");
    // res.render("login");
    res.status(201).redirect("/user/login");
  } catch (error) {
    res.status(409).json(error);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      console.log("User Successfully logged in");
    } else {
        res.redirect("/user/register");
        console.log("Incorrect Credentials");
    }
  } catch (error) {
    res.status(409).json(error);
  }
};

export const register = (req, res) => {
  res.render("register");
};
export const login = (req, res) => {
  res.render("login");
};
