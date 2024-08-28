const express = require('express');
const { sendMessage, getMessageHistory } = require('../controllers/messageController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, sendMessage);
router.get('/history', authMiddleware, getMessageHistory);

module.exports = router;
