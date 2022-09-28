const router = require("express").Router(),
    AnswerController = require('../controllers/answer')

router.get("/", AnswerController.index)
router.get("/search", AnswerController.show)
router.get("/searchbyqid", AnswerController.showByQuastionId)
router.put("/update", AnswerController.update)
router.delete("/delete", AnswerController.delete)
router.post("/create", AnswerController.create)
module.exports = router