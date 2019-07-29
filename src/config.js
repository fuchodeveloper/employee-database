import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

// dotenv configuration to access environment-specific variables
config();

// Connection URL
const url = process.env.CONNECTION_URL;

// Database Name
const dbName = process.env.DATABASE_NAME;

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });
let db;

client.connect(function (err) {
  if (err) return err;

  db = client.db(dbName);
});

export { db };
