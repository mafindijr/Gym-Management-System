import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { verifyToken } from '../utils/generateToken.js';

export const protect = async (req, res, next) => {
    try {
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token) {
            return res.status(401).json({ message: 'Not authorized, no token' });
        }

        try {
            const decoded = verifyToken(token);
            req.user = await User.findById(decoded.id);
            
            if(!req.user) {
                return res.status(401).json({ message: 'User not found' });
            }

            if(!req.user.isActive) {
                return res.status(403).json({ message: 'Account is inactive' });
            }

            next();
        } catch (error) {
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const admin = (req, res, next) => {
    if(req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as admin' });
    }
};

export const member = (req, res, next) => {
    if(req.user && (req.user.role === 'member' || req.user.role === 'admin')) {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as member' });
    }
};

