const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongoServer;

async function startMongo() {
  mongoServer = await MongoMemoryServer.create({
    instance: {
      dbPath: "./data",
    },
  });
  process.env.DB = `mongodb://localhost:${mongoServer.instanceInfo.port}`;
}

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

module.exports = { startMongo, connectDB };
