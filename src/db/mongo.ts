import mongoose, { ConnectOptions } from 'mongoose';

const mongoURI = 'mongodb://localhost:50089/mydatabase';
const connectDB = async (): Promise<void> => {
    try {
      // Connect to MongoDB
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any);
  
      // Set global Mongoose options after connecting
    //   mongoose.set('useFindAndModify', false);
    //   mongoose.set('useCreateIndex', true);
  
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

export default connectDB;