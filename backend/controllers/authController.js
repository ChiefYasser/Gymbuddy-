import User from "../models/User.js";
import emailService from "../services/emailService.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already used" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role
    });

    await emailService.sendWelcomeEmail(email, username);

    res.status(201).json({ message: "Account created successfully", user });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};