const router = require("express").Router(),
    QuastionController = require('../controllers/quastion')

router.get("/", QuastionController.index)
router.get("/search", QuastionController.show)
router.get("/quastionwithanswers", QuastionController.showWithAnswers)
router.put("/update", QuastionController.update)
router.delete("/delete", QuastionController.delete)
router.post("/create", QuastionController.create)
router.post("/count", QuastionController.count)

module.exports = router