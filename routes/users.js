var express = require('express');
var router = express.Router();
var fs = require('fs');

function getUsers() {
  const buf = fs.readFileSync(__dirname + '/../json/users.json', 'utf8');
  const json = JSON.parse(buf);
  return json;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('all users');
  // res.json([{ id: 1 }, { id: 2 }])
  const json = getUsers();
  res.json(json);
});

router.get('/:id', function (req, res, next) {
  // res.send('get user ' + req.params.id)
  const json = getUsers();
  res.json(json[req.params.id]);
})

module.exports = router;
