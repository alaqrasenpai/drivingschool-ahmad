const router = require("express").Router(),
    TutorialController = require('../controllers/tutorial')

router.get("/", TutorialController.index)
router.get("/search", TutorialController.show)
router.put("/update", TutorialController.update)
router.delete("/delete", TutorialController.delete)
router.get("/count", TutorialController.count)

router.post("/create", TutorialController.create)
module.exports = router
