const router = require("express").Router(),
    ExamController = require('../controllers/exams')

router.get("/", ExamController.index)
router.get("/search", ExamController.show)
router.get("/showbyuser", ExamController.showByUserId)
router.put("/update", ExamController.update)
router.delete("/delete", ExamController.delete)
router.post("/create", ExamController.create)
router.get("/count", ExamController.count)

module.exports = router