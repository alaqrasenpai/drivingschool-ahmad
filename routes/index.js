const router = require("express").Router(),
    AnswerRouter = require('./answer'),
    QuastionRouter = require('./quastion'),
    SerialsRouter = require('./serials'),
    StudentsRouter=require("./students")

router.use('/answers', AnswerRouter)
router.use('/quastions', QuastionRouter)
router.use('/serials', SerialsRouter)
router.use('/students', StudentsRouter)

module.exports = router