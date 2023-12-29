const TeacherSchema = require('../Model/TeacherSchema');
module.exports = {
    addTchr: async (req, res) => {
        const { InstitutionId, Teacher } = req.body;
        try {
            const result = await TeacherSchema.create({
                InstitutionId,
                Teacher,
            });
            res.status(200).json("Success")
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    getTchr: async (req, res) => {
        try {
            const result2 = await TeacherSchema.find();
            res.status(200).json({ result2 })
        } catch (err) {
            res.status(400).json("Failed")
        }
    },
    getTchrById: async (req, res) => {
        const id = req.params.id;
        try {
            const result3 = await TeacherSchema.findById(id)
            res.status(200).json({ result3 })
        }
        catch (err) {
            res.status(400).json("Failed to get details")
        }
    },
    update: async (req, res) => {
        const id = req.params.id
        try {

            await TeacherSchema.findByIdAndUpdate(id, {
                InstitutionId: req.body.InstitutionId,
                Teacher: req.body.Teacher
            })
            res.status(200).json("successfully updated")
        }
        catch (err) {
            res.status(400).json("updation failed")
        }
    },
    deleteTeacher: async (req, res) => {
        const id = req.params.id
        try {
            await TeacherSchema.findByIdAndDelete(id)
            res.status(200).json("successfully deleted")
        }
        catch (err) {
            res.status(400).json("deletion failed")
        }
    }
}