const mongoose = require('mongoose');

async function ConnectToDB() {
 
 try {
 const MongoConnection = await mongoose.connect('mongodb://localhost:27017/uploadmulter');
    console.log('Connected to MongoDB successfully', MongoConnection);
  
 } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error to handle it in the calling function
 }

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });
  
  return mongoose.connection;
}


// Define a schema for the file metadata

  const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    size: Number,
    mimetype: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  // Create a model for the file schema                           
  const File = mongoose.model("File", fileSchema);
  

module.exports = { ConnectToDB, File };
