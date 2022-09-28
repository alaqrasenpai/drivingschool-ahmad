const router = require("express").Router(),
    SerialsController = require('../controllers/serials')

router.get("/", SerialsController.index)
router.get("/search", SerialsController.show)
router.put("/update", SerialsController.update)
router.delete("/delete", SerialsController.delete)
router.post("/create", SerialsController.create)
module.exports = router