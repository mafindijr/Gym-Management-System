import User from "../models/User.js";

export const getMembers = async (req, res) => {
    try {
        const { search } = req.query;
        const query = { role: 'member' };
        
        if(search) {
            query.$or = [
                { fullName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        const members = await User.find(query)
            .select('-password -refreshToken')
            .sort({ createdAt: -1 });

        res.status(200).json({ members });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMember = async (req, res) => {
    try {
        const member = await User.findById(req.params.id)
            .select('-password -refreshToken');

        if(!member || member.role !== 'member') {
            return res.status(404).json({ message: "Member not found" });
        }

        res.status(200).json({ member });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createMember = async (req, res) => {
    try {
        const { fullName, email, password, membership, status } = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({ message: "Full name, email, and password are required" });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const member = await User.create({
            fullName,
            email,
            password,
            role: 'member',
            membership: membership || 'Basic',
            isActive: status === 'Active' || true
        });

        res.status(201).json({ member });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMember = async (req, res) => {
    try {
        const { fullName, membership, status, lastVisit } = req.body;
        const member = await User.findById(req.params.id);

        if(!member || member.role !== 'member') {
            return res.status(404).json({ message: "Member not found" });
        }

        if(fullName) member.fullName = fullName;
        if(membership) member.membership = membership;
        if(status !== undefined) member.isActive = status === 'Active';

        await member.save();

        res.status(200).json({ member });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMember = async (req, res) => {
    try {
        const member = await User.findById(req.params.id);

        if(!member || member.role !== 'member') {
            return res.status(404).json({ message: "Member not found" });
        }

        await member.deleteOne();

        res.status(200).json({ message: "Member deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

