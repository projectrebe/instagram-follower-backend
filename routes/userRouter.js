const express = require('express');
const { saveUser, getAllUser } = require('../controllers/userController');
// const { saveUser } = require('../controllers/userController');
const router = express.Router();


router.route('/saveUser').post(saveUser);
router.route('/alluser').get(getAllUser);



module.exports = router;