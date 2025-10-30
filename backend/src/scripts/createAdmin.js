import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';

dotenv.config();

async function createAdmin() {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL || 'admin@gmail.com';
    const password = process.env.ADMIN_PASSWORD || 'admin123j';
    const fullName = process.env.ADMIN_NAME || 'System Admin';

    let admin = await User.findOne({ email });
    if (admin) {
      let changed = false;
      if (admin.role !== 'admin') {
        admin.role = 'admin';
        changed = true;
        console.log(`Promoting existing user to admin: ${email}`);
      }
      if (process.env.ADMIN_PASSWORD) {
        admin.password = process.env.ADMIN_PASSWORD;
        changed = true;
        console.log('Updating admin password from environment variable');
      }
      if (changed) {
        await admin.save();
        console.log('Admin user updated successfully');
      } else {
        console.log(`Admin already exists and up-to-date: ${email}`);
      }
      await mongoose.connection.close();
      process.exit(0);
    }

    admin = await User.create({ fullName, email, password, role: 'admin' });
    console.log('Admin user created successfully');
    console.log({ email: admin.email, role: admin.role, id: admin._id.toString() });

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Failed to create admin:', err.message);
    try { await mongoose.connection.close(); } catch {}
    process.exit(1);
  }
}

createAdmin();


