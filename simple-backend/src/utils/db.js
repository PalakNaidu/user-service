const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async function connectDB() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  };
  const raw = process.env.MONGODB_URI && process.env.MONGODB_URI.trim();
  if (raw) {
    try {
      return await mongoose.connect(raw, opts);
    } catch (e) {
      console.warn('Failed to connect to MONGODB_URI, falling back to memory:', e.message);
    }
  }
  const mem = await MongoMemoryServer.create();
  return mongoose.connect(mem.getUri(), opts);
};