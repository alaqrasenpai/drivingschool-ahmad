const router = require("express").Router(),
    QuastionController = require('../controllers/quastion')

router.get("/", QuastionController.index)
router.get("/search", QuastionController.show)
router.put("/update", QuastionController.update)
router.delete("/delete", QuastionController.delete)
router.post("/create", QuastionController.create)
module.exports = router