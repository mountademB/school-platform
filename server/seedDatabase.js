const mongoose = require('mongoose');
const Institution = require('./models/Institution');
require('dotenv').config();

const institutions = [
  // Your institution data here
];

const MONGODB_URI = 'mongodb://localhost:27017/moroccan_education_platform';

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in the environment variables');
  process.exit(1);
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Institution.insertMany(institutions);
  })
  .then(() => {
    console.log('Database seeded!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  });
