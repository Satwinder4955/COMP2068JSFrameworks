
const express = require('express');
const router = express.Router();
const Student = require('../Models/Student');

router.get('/', async (req, res) => {
  const students = await Student.find();
  res.render('students/index', { students });
});

router.get('/add', (req, res) => {
  res.render('students/add');
});

router.post('/add', async (req, res) => {
  const student = new Student({
    StudentNumber: req.body.StudentNumber,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailAddress: req.body.EmailAddress
  });
  await student.save();
  res.redirect('/students');
});

module.exports = router;