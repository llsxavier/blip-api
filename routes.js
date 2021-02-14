const router = require('express').Router();
const cSharpCtrlr = require('./controllers/cSharpController');

router.get('/', cSharpCtrlr.cSharp);

module.exports = router;
