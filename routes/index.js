const router = require("express").Router(),
    AnswerRouter = require('./answer'),
    QuastionRouter = require('./quastion'),
    SerialsRouter = require('./serials'),
    TrainersRouter = require('./trainers'),
    StudentsRouter = require("./students"),
    TurialRouter = require("./tutorial"),
    AdsRouter = require("./ads")
ExamRouter = require("./Exam")

router.use('/answers', AnswerRouter)
router.use('/quastions', QuastionRouter)
router.use('/serials', SerialsRouter)
router.use('/students', StudentsRouter)
router.use('/trainers', TrainersRouter)
router.use('/ads', AdsRouter)
router.use('/tutorial', TurialRouter)
router.use('/exam', ExamRouter)


module.exports = router