const express = require('express')
const router = express.Router();
const TeachController = require('../Controller/TeacherController')

router.post('/addTeacher', TeachController.addTchr)
router.get('/getTeacher', TeachController.getTchr)
router.get('/getbyid/:id', TeachController.getTchrById)
router.put('/update/:id', TeachController.update)
router.delete('/delete/:id', TeachController.deleteTeacher)

module.exports = router;