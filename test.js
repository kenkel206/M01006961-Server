require("dotenv").config({ path: "./atlas-credentials.env" });

const uri =  process.env.MONGODB_URI;

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        return client;
    } catch (error) {
        console.dir(error);
    }
}

const db = client.db("Website");
 connectToMongoDB();