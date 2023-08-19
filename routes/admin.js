const express = require('express');

const productcontroller=require('../controllers/adminref')

const router = express.Router();


router.get('/add-product',productcontroller.getaddproduct);

router.post('/add-product', productcontroller.postaddproduct);

module.exports = router;
