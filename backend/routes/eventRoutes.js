const express = require('express');
const { CreateEvent, GetEvents } = require('../controllers/eventController');

const router = express.Router();

const { verifyToken } = require('../middlewares/verifyToken')

router.post('/', verifyToken, CreateEvent);
// router.post('/', CreateEvent);
router.get('/', verifyToken, GetEvents);

module.exports = router;