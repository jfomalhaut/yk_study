const express = require('express');
const factory = require('../factory');
const router = express.Router();

router.get('/getData', factory.getData);
router.post('/getDetail', factory.getDetail);
router.post('/login', factory.login);

module.exports = router;