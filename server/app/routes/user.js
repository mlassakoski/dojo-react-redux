const api = require('../api').user;
const express = require('express');
const router = express.Router();

router.route('/')
    .post(api.insert)
    .get(api.findAll);

router.route('/:id')
    .delete(api.remove)
    .get(api.findOne)
    .put(api.update);

module.exports = router;
