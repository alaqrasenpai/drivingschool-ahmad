const router = require("express").Router(),
    AnswerRouter = require('./answer'),
    QuastionRouter = require('./quastion'),
    SerialsRouter = require('./serials'),
    TrainersRouter = require('./trainers'),
    StudentsRouter = require("./students")

router.use('/answers', AnswerRouter)
router.use('/quastions', QuastionRouter)
router.use('/serials', SerialsRouter)
router.use('/students', StudentsRouter)
router.use('/trainers', TrainersRouter)

module.exports = router