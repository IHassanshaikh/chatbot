const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://Hassan:ADCqCYo3ubJKfIAJ@hassancluster.1n6uifv.mongodb.net/?retryWrites=true&w=majority&appName=Hassancluster'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        // You can proceed with your database operations here
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();
async function insertDocument(document) {
    try {
        const db = client.db('your_database_name');
        const collection = db.collection('your_collection_name');
        const result = await collection.insertOne(document);
        console.log('Document inserted:', result.insertedId);
    } catch (error) {
        console.error('Error inserting document:', error);
    }
}

const document = { name: 'John Doe', age: 30 };
insertDocument(document);
async function closeConnection() {
    try {
        await client.close();
        console.log('Connection to MongoDB closed');
    } catch (error) {
        console.error('Error closing connection to MongoDB:', error);
    }
}

// Call this function when you're done with MongoDB
closeConnection();