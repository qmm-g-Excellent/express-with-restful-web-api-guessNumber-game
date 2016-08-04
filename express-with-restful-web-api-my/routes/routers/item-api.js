const router =require('express').Router();
const Controller = require('../../controllers/controller');


// router.get('/',Controller.showAnswer);
router.post('/game',Controller.showResult);

module.exports = router;
