const router = require("express").Router(),
    TutorialController = require('../controllers/tutorial')

router.get("/", QuastionController.index)
router.get("/search", QuastionController.show)
router.get("/quastionwithanswers", QuastionController.showWithAnswers)
router.put("/update", QuastionController.update)
router.delete("/delete", QuastionController.delete)
router.post("/create", QuastionController.create)
module.exports = router