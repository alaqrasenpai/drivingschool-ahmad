const cors = require('cors')

const allowlist = ['http://127.0.0.1:3000', 'http://127.0.0.1:5173']
const corsOptionsDelegate = function(req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

const router = require("express").Router(),
    AnswerController = require('../controllers/answer')

router.get("/", cors(corsOptionsDelegate), AnswerController.index)
router.get("/search", AnswerController.show)
router.get("/searchbyqid", AnswerController.showByQuastionId)
router.put("/update", AnswerController.update)
router.delete("/delete", AnswerController.delete)
router.post("/create", cors(corsOptionsDelegate), AnswerController.create)
router.get("/count", AnswerController.count)

module.exports = router