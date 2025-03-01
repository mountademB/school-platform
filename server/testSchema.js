const mongoose = require('mongoose');
const Institution = require('./models/Institution');

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/moroccan_education_platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a test institution
const testInstitution = new Institution({
  name: 'Test University',
  type: 'University',
  city: 'Casablanca',
  address: '123 Test Street',
  isPrivate: false,
  fields: ['Computer Science', 'Engineering'],
  programs: [{ name: 'Computer Science', level: 'Bachelor', duration: '3 years' }],
  admissionCriteria: 'Baccalaureate required',
  tuitionFees: 5000,
  website: 'http://www.testuniversity.com',
  contactInfo: {
    phone: '123-456-7890',
    email: 'info@testuniversity.com'
  },
  location: {
    type: 'Point',
    coordinates: [-7.5898, 33.5731] // Longitude, Latitude
  }
});

// Save the test institution
testInstitution.save()
  .then((doc) => {
    console.log('Test institution saved successfully:', doc);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error saving test institution:', err);
    mongoose.connection.close();
  });
