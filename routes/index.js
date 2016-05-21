'use strict'

var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MealPicker' })
});

router.get('/display', (req, res, next) => {
  res.render('display')
})

module.exports = router
