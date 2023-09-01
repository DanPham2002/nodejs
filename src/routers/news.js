const express = require('express');
const app = express();
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.use('/', newsController.news);

module.exports = router;
