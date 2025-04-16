const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a user
router.post("/register", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username) {
      return res.status(400).json({
        error: true,
        message: "User name and its username is required.",
      });
    }
    if (!email) {
      return res
        .status(400)
        .json({ error: true, message: "User email is required." });
    }
    if (!password) {
      return res
        .status(400)
        .json({ error: true, message: "Password is required." });
    }

    const isExistingUsername = await User.findOne({ username: username });

    const isExistingEmail = await User.findOne({ email: email });

    let userErrors = {};

    if (isExistingUsername) {
      userErrors.username =  "This Username already exists." ;
    }
    if (isExistingEmail) {
     userErrors.email =  "User email already exists." ;
    }

    if(isExistingUsername && isExistingEmail) {
      userErrors = "Username and Email both already exists."
    }

    if(Object.keys(userErrors).length > 0) {
      return res.status(400).json({
        error: true,
        message: userErrors
      })
    }

    // return res.status(400).json({
    //   error: true,
    //   errors: {
    //     email: isExistingEmail ? "User email already exists." : null,
    //     username: isExistingUsername ? "This username already exists." : null,
    //   },
    // });
    

    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await user.save();

    const accessToken = jwt.sign({ user }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "8h",
    });
    res.status(201).json({
      error: false,
      message: "Account created successfully.",
      user: savedUser,
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to register a User.", details: error.message });
  }
});

//Login a user
router.post("/login", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if ((!email && !username) || !password) {
      return res
        .status(400)
        .json({ message: "Email or Username and Pasword are required." });
    }

    const user = await User.findOne({
      // $or checks either email or username matches the register user. User can login with any of one.
      $or: [{ email: email }, { username: username }],
    });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ message: "Please enter your valid password." });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: "8h",
      }
    );

    res.cookie("token", token, {
      expiresIn: "8h",
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({
      message: `Welcome back ${user.name}!`,
      userInfo: user,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to find this user.", details: error.message });
  }
});

// logout a user
router.get("/logout", (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({ message: `You are successfully logged out.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occured while loging out." });
  }
});

module.exports = router;
