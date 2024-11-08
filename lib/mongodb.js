import { MongoClient } from 'mongodb';

// Get MongoDB URI from environment variables
const uri = process.env.MONGODB_URL;

if (!uri) {
    throw new Error('Please define the MONGODB_URL environment variable inside .env.local');
}

// MongoDB connection options (no longer need useNewUrlParser or useUnifiedTopology)
const options = {
    // You can add other options if needed, but these are the defaults now
};

// Initialize client and clientPromise
let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
    // In development, use a global variable to preserve the value across hot-reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, connect without using a global variable
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export the clientPromise for use in your app
export default clientPromise;
