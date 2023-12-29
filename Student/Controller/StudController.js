const StudSchema = require('../model/StudentSchema')
module.exports = {
    addStud: async (req, res) => {
        const { InstituteId, Student } = req.body;
        
        try {
            const result = await StudSchema.create({
                InstituteId,
                Student
            });
            res.status(200).json("success");

        }
        catch (err) {
            
            res.status(400).json({ err })
        }
    },
    getStud: async (req, res) => {
        try {
            const result2 = await StudSchema.find()
            res.status(200).json({ result2 })
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    getStudById: async (req, res) => {
        const id = req.params.id;
        try {
            const result3 = await StudSchema.findById(id)
            res.status(200).json({ result3 })

        }
        catch (err) {
            res.status(400).json(err)
        }
    },
    updateStud: async (req, res) => {
        const id = req.params.id;
        try {
            await StudSchema.findByIdAndUpdate(id, {
                InstituteId: req.body.InstituteId,
                Student: req.body.Student
            })
            res.status(200).json("sucess")
        }
        catch (err) {
            res.status(400).json({ err: "update failed" })
        }
    },
    deleteStud: async (req, res) => {
        const id = req.params.id;
        try {
            await StudSchema.findByIdAndDelete(id)
            res.status(200).json("deleted successfully")
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
}