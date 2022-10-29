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
    QuastionController = require('../controllers/quastion')

router.get("/", QuastionController.index)
router.get("/search", QuastionController.show)
router.get("/quastionandanswers", QuastionController.quastionWithAnswers)
router.get("/arabicqa", QuastionController.showarabicqa)
router.get("/hebrewqa", QuastionController.showhebrewqa)
router.get("/quastionwithanswers", QuastionController.showWithAnswers)
router.put("/update", QuastionController.update)
router.delete("/delete", QuastionController.delete)
router.post("/create", cors(corsOptionsDelegate), QuastionController.create)
router.get("/count", QuastionController.count)

module.exports = router