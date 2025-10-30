import Class from "../models/Class.js";

export const getClasses = async (req, res) => {
    try {
        const { status, upcoming, past } = req.query;
        const query = {};

        if(status) {
            query.status = status;
        } else if(upcoming) {
            query.dateTime = { $gte: new Date() };
        } else if(past) {
            query.dateTime = { $lt: new Date() };
        }

        const classes = await Class.find(query)
            .populate('trainerId', 'name speciality')
            .populate('enrolledMembers', 'fullName email')
            .sort({ dateTime: 1 });

        res.status(200).json({ classes });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getClass = async (req, res) => {
    try {
        const classDoc = await Class.findById(req.params.id)
            .populate('trainerId', 'name speciality contact')
            .populate('enrolledMembers', 'fullName email');

        if(!classDoc) {
            return res.status(404).json({ message: "Class not found" });
        }

        res.status(200).json({ class: classDoc });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createClass = async (req, res) => {
    try {
        const { name, instructor, dateTime, status, capacity, description, trainerId } = req.body;

        if(!name || !instructor || !dateTime) {
            return res.status(400).json({ message: "Class name, instructor, and date/time are required" });
        }

        const classDate = new Date(dateTime);
        if(isNaN(classDate.getTime())) {
            return res.status(400).json({ message: "Invalid date format" });
        }

        const newClass = await Class.create({
            name,
            instructor,
            dateTime: classDate,
            status: status || 'Scheduled',
            capacity: capacity || 25,
            description,
            trainerId
        });

        const populatedClass = await Class.findById(newClass._id)
            .populate('trainerId', 'name speciality');

        res.status(201).json({ class: populatedClass });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateClass = async (req, res) => {
    try {
        const { name, instructor, dateTime, status, capacity, description, trainerId } = req.body;
        const classDoc = await Class.findById(req.params.id);

        if(!classDoc) {
            return res.status(404).json({ message: "Class not found" });
        }

        if(name) classDoc.name = name;
        if(instructor) classDoc.instructor = instructor;
        if(dateTime) {
            const classDate = new Date(dateTime);
            if(isNaN(classDate.getTime())) {
                return res.status(400).json({ message: "Invalid date format" });
            }
            classDoc.dateTime = classDate;
        }
        if(status) classDoc.status = status;
        if(capacity) classDoc.capacity = capacity;
        if(description !== undefined) classDoc.description = description;
        if(trainerId) classDoc.trainerId = trainerId;

        await classDoc.save();

        const populatedClass = await Class.findById(classDoc._id)
            .populate('trainerId', 'name speciality')
            .populate('enrolledMembers', 'fullName email');

        res.status(200).json({ class: populatedClass });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteClass = async (req, res) => {
    try {
        const classDoc = await Class.findById(req.params.id);

        if(!classDoc) {
            return res.status(404).json({ message: "Class not found" });
        }

        await classDoc.deleteOne();

        res.status(200).json({ message: "Class deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

