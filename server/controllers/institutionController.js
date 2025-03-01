const Institution = require('../models/Institution');

exports.getInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find(req.query);
    res.json(institutions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addInstitution = async (req, res) => {
  const institution = new Institution(req.body);
  try {
    const newInstitution = await institution.save();
    res.status(201).json(newInstitution);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add more controller functions as needed