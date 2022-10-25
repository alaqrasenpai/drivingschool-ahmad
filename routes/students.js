const router = require("express").Router(),
    StudentController = require('../controllers/student')

router.get("/", StudentController.index)
router.get("/getallstudents", StudentController.getAllStudents)
router.get("/getallguests", StudentController.getAllGuests)
router.get("/search", StudentController.show)
router.put("/update", StudentController.update)
router.delete("/delete", StudentController.delete)
router.post("/create", StudentController.create)
router.get("/count", StudentController.count)
router.get("/countguest", StudentController.countguests)
router.get("/countstudents", StudentController.countstudents)

module.exports = router