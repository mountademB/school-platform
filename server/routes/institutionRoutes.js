const express = require('express');
const router = express.Router();
const Institution = require('../models/Institution');

// Get all institutions
router.get('/', async (req, res) => {
  try {
    const institutions = await Institution.find();
    res.json(institutions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one institution
router.get('/:id', async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id);
    if (institution == null) {
      return res.status(404).json({ message: 'Cannot find institution' });
    }
    res.json(institution);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Create one institution
router.post('/', async (req, res) => {
  const institution = new Institution(req.body);
  try {
    const newInstitution = await institution.save();
    res.status(201).json(newInstitution);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one institution
router.patch('/:id', async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id);
    if (institution == null) {
      return res.status(404).json({ message: 'Cannot find institution' });
    }
    Object.assign(institution, req.body);
    const updatedInstitution = await institution.save();
    res.json(updatedInstitution);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one institution
router.delete('/:id', async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id);
    if (institution == null) {
      return res.status(404).json({ message: 'Cannot find institution' });
    }
    await institution.deleteOne();
    res.json({ message: 'Deleted Institution' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

