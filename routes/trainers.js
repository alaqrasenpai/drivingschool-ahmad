const router = require("express").Router(),
    TrainersController = require('../controllers/trainers')

router.get("/", TrainersController.index)
router.get("/search", TrainersController.show)
router.get("/checkdata", TrainersController.checkdata)
router.put("/update", TrainersController.update)
router.delete("/delete", TrainersController.delete)
router.post("/create", TrainersController.create)
module.exports = router