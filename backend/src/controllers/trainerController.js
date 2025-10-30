import Trainer from "../models/Trainer.js";

export const getTrainers = async (req, res) => {
    try {
        const { status } = req.query;
        const query = {};
        
        if(status) {
            query.status = status;
        }

        const trainers = await Trainer.find(query).sort({ createdAt: -1 });
        res.status(200).json({ trainers });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findById(req.params.id);

        if(!trainer) {
            return res.status(404).json({ message: "Trainer not found" });
        }

        res.status(200).json({ trainer });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTrainer = async (req, res) => {
    try {
        const { trainer, speciality, contact, email, status } = req.body;

        if(!trainer || !speciality || !contact) {
            return res.status(400).json({ message: "Trainer name, speciality, and contact are required" });
        }

        const newTrainer = await Trainer.create({
            name: trainer,
            speciality,
            contact,
            email: email || contact,
            status: status || 'Active'
        });

        res.status(201).json({ trainer: newTrainer });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTrainer = async (req, res) => {
    try {
        const { trainer, speciality, contact, email, status } = req.body;
        const trainerDoc = await Trainer.findById(req.params.id);

        if(!trainerDoc) {
            return res.status(404).json({ message: "Trainer not found" });
        }

        if(trainer) trainerDoc.name = trainer;
        if(speciality) trainerDoc.speciality = speciality;
        if(contact) trainerDoc.contact = contact;
        if(email) trainerDoc.email = email;
        if(status) trainerDoc.status = status;

        await trainerDoc.save();

        res.status(200).json({ trainer: trainerDoc });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findById(req.params.id);

        if(!trainer) {
            return res.status(404).json({ message: "Trainer not found" });
        }

        await trainer.deleteOne();

        res.status(200).json({ message: "Trainer deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

