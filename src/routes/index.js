var express = require('express');
var router = express.Router();

const {home,menu, detalle} = require('../controllers/indexController');

/* GET home page. */
router.get('/', home);
router.get('/menu', menu);
router.get('/detalle/:id', detalle);

module.exports = router;
