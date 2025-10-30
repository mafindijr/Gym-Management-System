import User from "../models/User.js";
import { generateToken, generateRefreshToken } from "../utils/generateToken.js";
import crypto from "crypto";

export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({ fullName, email, password });
        const token = generateToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        
        user.lastLogin = new Date();
        await user.save();

        res.status(201).json({ user, token, refreshToken });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if(!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if(!user.isActive) {
            return res.status(403).json({ message: "Account is inactive" });
        }

        user.lastLogin = new Date();
        await user.save();

        const token = generateToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        res.status(200).json({ user, token, refreshToken });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if(!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const user = await User.findOne({ email });
        if(!user) {
            // Don't reveal if user exists for security
            return res.status(200).json({ message: "If that email exists, a reset link has been sent" });
        }

        // In production, send email with reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // TODO: Send email with reset link
        res.status(200).json({ message: "Password reset link sent to your email" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;
        if(!token || !password) {
            return res.status(400).json({ message: "Token and password are required" });
        }

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if(!user) {
            return res.status(400).json({ message: "Invalid or expired reset token" });
        }

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: "Password reset successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Secure one-time/admin bootstrap endpoint
export const bootstrapAdmin = async (req, res) => {
    try {
        const secret = req.headers['x-bootstrap-secret'];
        if(!process.env.ADMIN_BOOTSTRAP_SECRET || secret !== process.env.ADMIN_BOOTSTRAP_SECRET) {
            return res.status(403).json({ message: "Forbidden" });
        }

        const { email, password, fullName } = req.body;
        if(!email || !password || !fullName) {
            return res.status(400).json({ message: "fullName, email and password are required" });
        }

        let user = await User.findOne({ email }).select('+password');
        if(user) {
            user.role = 'admin';
            if (password) user.password = password;
            await user.save();
        } else {
            user = await User.create({ fullName, email, password, role: 'admin' });
        }

        const token = generateToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        return res.status(200).json({ user, token, refreshToken });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};