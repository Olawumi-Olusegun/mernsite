import appConstants from "../constants/index.js";
import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";

import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const newUser = new User({ username, email, password });

  try {
    const userExist = await User.find({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const savedUser = await newUser.save();

    if (!savedUser) {
      return res.status(400).json({ message: "Unable to signup new user" });
    }

    res.status(201).json("User Created Successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

<<<<<<< HEAD
  if(!appConstants.JWT_ACCESS_TOKEN_SECRET || !appConstants.JWT_REFRESH_TOKEN_SECRET) {
    return res.status(400).json({message: "Kindly provide env variables"});
=======
  if (
    !appConstants.JWT_ACCESS_TOKEN_SECRET ||
    !appConstants.JWT_REFRESH_TOKEN_SECRET
  ) {
    return res.status(400).json({ message: "Kindly provide env variables" });
>>>>>>> 608d7037a32376a2ad23683027b39a537056bdfa
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = await validUser.comparePassword(password);

    if (!validPassword) {
      return next(errorHandler(404, "Wrong password!!"));
    }

    const access_token = jwt.sign(
      { id: validUser._id },
      appConstants.JWT_ACCESS_TOKEN_SECRET
    );
    const refresh_token = jwt.sign(
      { id: validUser._id },
      appConstants.JWT_REFRESH_TOKEN_SECRET
    );
    const sessionExp = new Date(
      Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT
    );
    const { password: pass, ...rest } = validUser._doc;

    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      expires: new Date(
        Date.now() + appConstants.REFRESH_TOKEN_COOKIES_TIMEOUT
      ),
    });

    res.cookie("access_token", access_token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      expires: new Date(Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT),
    });

    return res.status(200).json({ ...rest, sessionExp });
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email } = req.body;

  if (
    !appConstants.JWT_ACCESS_TOKEN_SECRET ||
    !appConstants.JWT_REFRESH_TOKEN_SECRET
  ) {
    return res.status(400).json({ message: "Kindly provide env variables" });
  }

<<<<<<< HEAD
    if(!appConstants.JWT_ACCESS_TOKEN_SECRET || !appConstants.JWT_REFRESH_TOKEN_SECRET) {
      return res.status(400).json({message: "Kindly provide env variables"});
    }

    if(!email.trim()) {
      return res.status(400).json({message: "Email is required"});
    }
=======
  if (!email.trim()) {
    return res.status(400).json({ message: "Email is required" });
  }
>>>>>>> 608d7037a32376a2ad23683027b39a537056bdfa

  try {
    const user = await User.findOne({ email });

<<<<<<< HEAD
    req.cookies["access_token"] = '';
    req.cookies["refresh_token"] = '';
=======
    req.cookies["access_token"] = "";
    req.cookies["refresh_token"] = "";
>>>>>>> 608d7037a32376a2ad23683027b39a537056bdfa

    if (user) {
      const access_token = jwt.sign(
        { id: user._id },
        appConstants.JWT_ACCESS_TOKEN_SECRET
      );
      const refresh_token = jwt.sign(
        { id: user._id },
        appConstants.JWT_REFRESH_TOKEN_SECRET
      );

      const { password: pass, ...rest } = user._doc;

      const sessionExp = new Date(
        Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT
      );

      res.cookie("refresh_token", refresh_token, {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        expires: new Date(
          Date.now() + appConstants.REFRESH_TOKEN_COOKIES_TIMEOUT
        ),
      });

      res.cookie("access_token", access_token, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: new Date(
          Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT
        ),
      });

      return res.status(200).json({ ...rest, sessionExp });
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8);

      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: generatedPassword,
        avatar: req.body.photo,
      });

      const savedUser = await newUser.save();

      const access_token = jwt.sign(
        { id: savedUser._id },
        appConstants.JWT_ACCESS_TOKEN_SECRET
      );
      const refresh_token = jwt.sign(
        { id: savedUser._id },
        appConstants.JWT_REFRESH_TOKEN_SECRET
      );

      const { password: pass, ...rest } = savedUser._doc;

      const sessionExp = new Date(
        Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT
      );

      res.cookie("refresh_token", refresh_token, {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        expires: new Date(
          Date.now() + appConstants.REFRESH_TOKEN_COOKIES_TIMEOUT
        ),
      });

      res.cookie("access_token", access_token, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: new Date(
          Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT
        ),
      });

      return res.status(200).json({ ...rest, sessionExp });
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
<<<<<<< HEAD

  const { access_token, refresh_token } = req.cookies
=======
  const { access_token, refresh_token } = req.cookies;
>>>>>>> 608d7037a32376a2ad23683027b39a537056bdfa

  try {
    if (access_token) {
      res.clearCookie("access_token", "", { expires: new Date(0) });
    }

    if (refresh_token) {
      res.clearCookie("refresh_token", "", { expires: new Date(0) });
    }

    res.clearCookie("access_token", "", { expires: new Date(0) });

    res.status(200).json(null);
  } catch (error) {
    next(error);
  }
};

export const refresh = async (req, res, next) => {
<<<<<<< HEAD

  if(!appConstants.JWT_ACCESS_TOKEN_SECRET || !appConstants.JWT_REFRESH_TOKEN_SECRET) {
    return res.status(400).json({message: "Kindly provide env variables"});
  }
  
=======
  if (
    !appConstants.JWT_ACCESS_TOKEN_SECRET ||
    !appConstants.JWT_REFRESH_TOKEN_SECRET
  ) {
    return res.status(400).json({ message: "Kindly provide env variables" });
  }

>>>>>>> 608d7037a32376a2ad23683027b39a537056bdfa
  const user = req.user;

  if (!user && !user?._id) {
    return next(errorHandler(401, "Unauthorized user"));
  }

<<<<<<< HEAD
  req.cookies["access_token"] = '';
  req.cookies["refresh_token"] = '';
=======
  req.cookies["access_token"] = "";
  req.cookies["refresh_token"] = "";
>>>>>>> 608d7037a32376a2ad23683027b39a537056bdfa

  try {
    const access_token = jwt.sign(
      { id: user._id },
      appConstants.JWT_ACCESS_TOKEN_SECRET
    );
    const refresh_token = jwt.sign(
      { id: user._id },
      appConstants.JWT_REFRESH_TOKEN_SECRET
    );
    const sessionExp = new Date(
      Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT
    );

    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      expires: new Date(
        Date.now() + appConstants.REFRESH_TOKEN_COOKIES_TIMEOUT
      ),
    });

    res.cookie("access_token", access_token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(Date.now() + appConstants.ACCESS_TOKEN_COOKIES_TIMEOUT),
    });

    return res.status(200).json({ ...user, sessionExp });
  } catch (error) {
    next(error);
  }
};
