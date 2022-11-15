const router = require("express").Router(),
    ExamController = require('../controllers/exams')

router.get("/", ExamController.index)
router.get("/mini", ExamController.indexMini)
router.get("/search", ExamController.show)
router.get("/searchmini", ExamController.showMini)
router.get("/showbyuser", ExamController.showByUserId)
router.get("/showbyusermini", ExamController.showByUserIdMini)
router.put("/update", ExamController.update)
router.delete("/delete", ExamController.delete)
router.post("/create", ExamController.create)
router.get("/count", ExamController.count)

module.exports = router