import * as mongoose from "mongoose";

const dbURI = 'mongodb://localhost:27017';

console.log('MongoDB Connected to MongoDB...');
mongoose.connect(dbURI,{
    dbName: 'weddingdb',
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));
