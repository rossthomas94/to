import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017'; 
const dbName = 'toDo';

export default async function connectToMongo() {
  const client = new MongoClient(url, { useUnifiedTopology: true } as any);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}