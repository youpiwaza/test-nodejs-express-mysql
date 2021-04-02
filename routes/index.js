var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const db = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: ''
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
