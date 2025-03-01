const mongoose = require('mongoose');

const InstitutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  // Add other fields as needed
});

module.exports = mongoose.model('Institution', InstitutionSchema);



