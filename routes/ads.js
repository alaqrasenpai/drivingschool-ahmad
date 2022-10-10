const router = require("express").Router(),
    AdsController = require('../controllers/ads')

router.get("/", AdsController.index)
router.get("/search", AdsController.show)
router.get("/searcbyowner", AdsController.show_byOwner)
router.put("/update", AdsController.update)
router.delete("/delete", AdsController.delete)
router.post("/create", AdsController.create)
module.exports = router