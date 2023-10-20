const express = require('express');
const { saveUser, getAllUser, getFollowerCount } = require('../controllers/userController');
// const { saveUser } = require('../controllers/userController');
const router = express.Router();


router.route('/saveUser').post(saveUser);
router.route('/alluser').get(getAllUser);
router.route('/profile').post(getFollowerCount);



module.exports = router;