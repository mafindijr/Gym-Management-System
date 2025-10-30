import User from "../models/User.js";
import Class from "../models/Class.js";
import Trainer from "../models/Trainer.js";
import Payment from "../models/Payment.js";

export const getAdminDashboard = async (req, res) => {
    try {
        const totalMembers = await User.countDocuments({ role: 'member', isActive: true });
        const activeClasses = await Class.countDocuments({ 
            status: { $in: ['Scheduled', 'Ongoing'] },
            dateTime: { $gte: new Date() }
        });
        const totalTrainers = await Trainer.countDocuments({ status: 'Active' });

        // Get member growth (last month)
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        const newMembersLastMonth = await User.countDocuments({
            role: 'member',
            createdAt: { $gte: lastMonth }
        });

        // Calculate attendance stats (simplified)
        const totalEnrollments = await Class.aggregate([
            { $match: { dateTime: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } },
            { $project: { count: { $size: '$enrolledMembers' } } },
            { $group: { _id: null, total: { $sum: '$count' } } }
        ]);

        res.status(200).json({
            totalMembers,
            activeClasses,
            totalTrainers,
            memberGrowth: newMembersLastMonth,
            classAttendance: totalEnrollments[0]?.total || 0
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

