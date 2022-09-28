const router = require("express").Router(),
    StudentController = require('../controllers/student')

router.get("/", StudentController.index)
router.get("/search", StudentController.show)
router.put("/update", StudentController.update)
router.delete("/delete", StudentController.delete)
router.post("/create", StudentController.create)
module.exports = router