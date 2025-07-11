import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pramodrasanjana710:PWivIlSzToT9q7ZS@cluster0.1igw3jj.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0")

    console.log('MongoDB connected successfullyoo');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}