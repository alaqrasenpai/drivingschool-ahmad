const router = require("express").Router(),
    SerialsController = require('../controllers/serials')

router.get("/", SerialsController.index)
router.get("/search", SerialsController.show)
router.get("/getinfobykey", SerialsController.getbykey)
router.get("/getuserinfo", SerialsController.showWithUser)
router.get("/getByuid", SerialsController.showByUserID)
router.put("/update", SerialsController.update)
router.delete("/delete", SerialsController.delete)
router.post("/create", SerialsController.create)
module.exports = router