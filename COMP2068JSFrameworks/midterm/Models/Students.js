const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  StudentNumber: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  EmailAddress: { type: String, required: true }
});

module.exports = mongoose.model('Student', StudentSchema);