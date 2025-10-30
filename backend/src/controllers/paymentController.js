import Payment from "../models/Payment.js";
import User from "../models/User.js";
import Class from "../models/Class.js";

export const getPayments = async (req, res) => {
    try {
        const { status, memberId } = req.query;
        const query = {};

        if(status) {
            query.status = status;
        }
        if(memberId) {
            query.memberId = memberId;
        }

        const payments = await Payment.find(query)
            .populate('memberId', 'fullName email')
            .populate('classId', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({ payments });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPaymentStats = async (req, res) => {
    try {
        const totalRevenue = await Payment.aggregate([
            { $match: { status: 'Paid' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        const outstandingBalance = await Payment.aggregate([
            { $match: { status: 'Pending' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        const avgPayment = await Payment.aggregate([
            { $match: { status: 'Paid' } },
            { $group: { _id: null, avg: { $avg: '$amount' } } }
        ]);

        res.status(200).json({
            totalRevenue: totalRevenue[0]?.total || 0,
            outstandingBalance: outstandingBalance[0]?.total || 0,
            averagePayment: avgPayment[0]?.avg || 0
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPayment = async (req, res) => {
    try {
        const { memberId, memberName, classId, className, amount, paymentMethod, description } = req.body;

        if(!amount || amount <= 0) {
            return res.status(400).json({ message: "Valid amount is required" });
        }

        let member;
        if(memberId) {
            member = await User.findById(memberId);
            if(!member) {
                return res.status(404).json({ message: "Member not found" });
            }
        } else if(memberName) {
            // For admin creating payments
            member = await User.findOne({ fullName: memberName, role: 'member' });
        }

        const payment = await Payment.create({
            memberId: member?._id || null,
            memberName: memberName || member?.fullName || 'Unknown',
            classId: classId || null,
            className: className || null,
            amount,
            status: 'Paid',
            paymentMethod: paymentMethod || 'Card',
            description
        });

        const populatedPayment = await Payment.findById(payment._id)
            .populate('memberId', 'fullName email')
            .populate('classId', 'name');

        res.status(201).json({ payment: populatedPayment });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMemberPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ memberId: req.user._id })
            .populate('classId', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({ payments });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createMemberPayment = async (req, res) => {
    try {
        const { amount, classId, className, paymentMethod, description } = req.body;

        if(!amount || amount <= 0) {
            return res.status(400).json({ message: "Valid amount is required" });
        }

        const payment = await Payment.create({
            memberId: req.user._id,
            memberName: req.user.fullName,
            classId: classId || null,
            className: className || null,
            amount,
            status: 'Paid',
            paymentMethod: paymentMethod || 'Card',
            description
        });

        const populatedPayment = await Payment.findById(payment._id)
            .populate('classId', 'name');

        res.status(201).json({ payment: populatedPayment });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

