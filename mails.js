const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/welcome/subject', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('Welcome to VolgaCTF 2018 Quals!')
})

router.get('/welcome/plain', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.sendFile(path.join(__dirname, 'templates', 'welcome.plain.mustache'))
})

router.get('/welcome/html', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, 'templates', 'welcome.html.mustache'))
})

router.get('/restore/subject', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('Reset your password!')
})

router.get('/restore/plain', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.sendFile(path.join(__dirname, 'templates', 'restore.plain.mustache'))
})

router.get('/restore/html', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, 'templates', 'restore.html.mustache'))
})

module.exports = router
