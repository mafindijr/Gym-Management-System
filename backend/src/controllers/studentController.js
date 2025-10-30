import Class from "../models/Class.js";
import User from "../models/User.js";
import Payment from "../models/Payment.js";

export const getAvailableClasses = async (req, res) => {
    try {
        const { upcoming } = req.query;
        const query = {
            status: { $in: ['Scheduled', 'Ongoing'] },
            dateTime: { $gte: new Date() }
        };

        if(!upcoming) {
            query.dateTime = { $gte: new Date() };
        }

        const classes = await Class.find(query)
            .populate('trainerId', 'name speciality')
            .select('name instructor dateTime capacity enrolledMembers status')
            .sort({ dateTime: 1 });

        // Format response with enrollment status
        const formattedClasses = classes.map(classDoc => {
            const enrolledCount = classDoc.enrolledMembers.length;
            const isEnrolled = classDoc.enrolledMembers.some(
                memberId => memberId.toString() === req.user._id.toString()
            );
            
            return {
                _id: classDoc._id,
                name: classDoc.name,
                instructor: classDoc.instructor,
                dateTime: classDoc.dateTime,
                capacity: `${enrolledCount}/${classDoc.capacity}`,
                status: classDoc.status,
                isEnrolled
            };
        });

        res.status(200).json({ classes: formattedClasses });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const enrollInClass = async (req, res) => {
    try {
        const classDoc = await Class.findById(req.params.id);

        if(!classDoc) {
            return res.status(404).json({ message: "Class not found" });
        }

        // Check if already enrolled
        const isEnrolled = classDoc.enrolledMembers.some(
            memberId => memberId.toString() === req.user._id.toString()
        );

        if(isEnrolled) {
            return res.status(400).json({ message: "Already enrolled in this class" });
        }

        // Check capacity
        if(classDoc.enrolledMembers.length >= classDoc.capacity) {
            return res.status(400).json({ message: "Class is full" });
        }

        // Check if class is in the past
        if(classDoc.dateTime < new Date()) {
            return res.status(400).json({ message: "Cannot enroll in past classes" });
        }

        classDoc.enrolledMembers.push(req.user._id);
        await classDoc.save();

        const populatedClass = await Class.findById(classDoc._id)
            .populate('trainerId', 'name speciality')
            .populate('enrolledMembers', 'fullName email');

        res.status(200).json({ 
            message: "Successfully enrolled in class",
            class: populatedClass 
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { fullName, email, membership } = req.body;
        const user = await User.findById(req.user._id);

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if(fullName) user.fullName = fullName;
        if(email) {
            const existingUser = await User.findOne({ email, _id: { $ne: req.user._id } });
            if(existingUser) {
                return res.status(400).json({ message: "Email already in use" });
            }
            user.email = email;
        }
        if(membership) user.membership = membership;

        await user.save();

        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getDashboardStats = async (req, res) => {
    try {
        const enrolledClasses = await Class.countDocuments({
            enrolledMembers: req.user._id,
            dateTime: { $gte: new Date() }
        });

        const totalPayments = await Payment.aggregate([
            { $match: { memberId: req.user._id, status: 'Paid' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        const upcomingClass = await Class.findOne({
            enrolledMembers: req.user._id,
            dateTime: { $gte: new Date() }
        }).sort({ dateTime: 1 }).select('name dateTime');

        res.status(200).json({
            enrolledClasses,
            totalSpent: totalPayments[0]?.total || 0,
            upcomingClass
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

