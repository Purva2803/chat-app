const express = require('express');
const { createGroup,sendGroupMessage } = require('../controllers/groupController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createGroup);

router.post('/:groupId/messages', sendGroupMessage);


module.exports = router;
